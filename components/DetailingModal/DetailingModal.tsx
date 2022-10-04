import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import Button from '../Button';
import Modal, { ModalProps } from '../Modal';
import { useRouter } from 'next/router';
import { DetailingServiceType } from 'types/detailing';
import PaperPlane from './components/PaperPlane';
import Steps from './components/Steps';
import { en, id } from 'locales';
import DetailContent from './components/DetailContent';
import ServiceContent from './components/ServiceContent';
import LocationContent from './components/LocationContent';
import SuccessModal from './components/SuccessModal';
interface DetailingModalProps extends ModalProps {
  detailingServices: DetailingServiceType[];
  defaultDetailingService?: string; // ex: 'Nano Ceramic Coating'
}

interface StepperType {
  status: StepperStatus;
  stepNumber: number;
  text: string;
}

export interface DetailingFormType {
  name: string;
  phoneNumber: string;
  autoBrand: string;
  detailingService: string;
  bookingDate: string;
}

export type WorkshopLocationType = 'jakarta' | 'bandung' | string | null;
type StepperStatus = 'DONE' | 'ACTIVE' | 'DISABLED';
type StepType = 1 | 2 | 3 | number;

/** Detailing Modal to let user books a detailing service */
const DetailingModal: React.FC<DetailingModalProps> = ({
  visible,
  onClose,
  detailingServices,
  defaultDetailingService,
}) => {
  const { locale } = useRouter();

  const translate = locale === 'en' ? en : id;

  /** Current Step  */
  const [currentStep, setCurrentStep] = useState<StepType>(1);

  /** Show Success Modal */
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  /** Workshop Location */
  const [workshopLocation, setWorkshopLocation] =
    useState<WorkshopLocationType>(null);

  /** Service Type */
  const [serviceType, setServiceType] = useState<string | null>(null);

  /** Primary Button Config */
  const [primaryButtonConfig, setPrimaryButtonConfig] = useState({
    text: 'Next',
    isDisabled: true,
    onClick: () => {},
  });

  /** Stepper Config */
  const [steppers, setSteppers] = useState<StepperType[]>([
    {
      status: 'ACTIVE',
      stepNumber: 1,
      text: 'Location',
    },
    {
      status: 'DISABLED',
      stepNumber: 2,
      text: 'Service',
    },
    {
      status: 'DISABLED',
      stepNumber: 3,
      text: 'Detail',
    },
  ]);

  /** Detailing Form State */
  const [formFields, setFormFields] = useState<DetailingFormType>({
    name: '',
    phoneNumber: '',
    autoBrand: '',
    detailingService: defaultDetailingService ? defaultDetailingService : '-',
    bookingDate: '',
  });

  const [formLoading, setFormLoading] = useState<boolean>(false);

  /** Is book button disabled */
  const isBookedButtonDisabled: boolean =
    !formFields.name ||
    !formFields.phoneNumber ||
    !formFields.autoBrand ||
    formLoading;

  /** Handle dynamic input change from forms */
  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  /** Handle Form Detail */
  const handleFormDetail = (event: React.FormEvent) => {
    alert('An essay was submitted:');
    event.preventDefault();
  };

  /** Service Step Status */
  const serviceStepStatus = (): StepperStatus => {
    if (!!serviceType) return 'DONE';
    if (!!workshopLocation) return 'ACTIVE';
    return 'DISABLED';
  };

  /** Location Step Status */
  const locationStepStatus = (): StepperStatus => {
    if (!!workshopLocation) return 'DONE';
    return 'ACTIVE';
  };

  /** Detail Step Status */
  const detailStepStatus = (): StepperStatus => {
    if (!!serviceType && !!!!workshopLocation) return 'ACTIVE';
    return 'DISABLED';
  };

  /** Workshop Location onClick */
  const handleWorkshopLocation = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const location = event.currentTarget.dataset.location;
    setWorkshopLocation(location);

    setCurrentStep(2);
  };

  /** Handle Service Type onClick */
  const handleServiceType = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const service = event.currentTarget.dataset.service;
    setServiceType(service);

    setCurrentStep(3);
  };

  /** Back or Secondary button config */
  const secondaryButtonConfig = () => {
    // First step will not show Back button
    if (currentStep === 1) {
      return null;
    }

    // Render Back button and reduce currentStep on its onClick
    if (currentStep === 2 || currentStep === 3) {
      return {
        text: 'Back',
        onClick: () => setCurrentStep(currentStep - 1),
      };
    }
  };

  /** Handle Submit To EmailJS */
  const handleBookButton = () => {
    // Disabled state
    if (isBookedButtonDisabled) return console.log('Disableddddd');

    const data = {
      from_name: formFields.name,
      location: workshopLocation,
      phone_number: formFields.phoneNumber,
      service_type: serviceType,
      auto_brand: formFields.autoBrand,
      detailing_service: formFields.detailingService,
      booking_date: formFields.bookingDate,
    };

    // Debugging
    // return setShowSuccessModal(true);

    // Loading
    setFormLoading(true);

    // Send EmailJS
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        function (response) {
          console.log(response.status, response.text);
          // Show Success modal
          if (response.status === 200) {
            setFormLoading(false);
            setShowSuccessModal(true);
          }
        },
        function (err) {
          console.error(err);
          setFormLoading(false);
          alert(JSON.stringify(err));
        }
      );
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  /** Update steppers state */
  useEffect(
    function handleUpdateSteppers() {
      setSteppers([
        {
          status: locationStepStatus(),
          stepNumber: 1,
          text: 'Location',
        },
        {
          status: serviceStepStatus(),
          stepNumber: 2,
          text: 'Service',
        },
        {
          status: detailStepStatus(),
          stepNumber: 3,
          text: 'Detail',
        },
      ]);
    },
    [workshopLocation, serviceType]
  );

  /** Update primary button config state */
  useEffect(
    function handleSetPrimaryButtonConfig() {
      const primaryButtonConditional = () => {
        if (currentStep === 1) {
          return {
            text: 'Next',
            isDisabled: !workshopLocation,
            onClick: () => {
              if (!!workshopLocation) setCurrentStep(currentStep + 1);
            },
          };
        }

        if (currentStep === 2) {
          return {
            text: 'Next',
            isDisabled: !serviceType,
            onClick: () => {
              if (!!serviceType) setCurrentStep(currentStep + 1);
            },
          };
        }

        if (currentStep === 3) {
          return {
            text: formLoading ? 'Loading...' : 'Book',
            isDisabled: isBookedButtonDisabled,
            onClick: () => handleBookButton(),
          };
        }
      };

      setPrimaryButtonConfig(primaryButtonConditional());
    },
    [currentStep, formFields, formLoading]
  );

  /** Render Modal */
  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title='Detailing Booking'
      secondaryButton={secondaryButtonConfig()}
      primaryButton={primaryButtonConfig}
    >
      <div className='detailing-modal-content'>
        <Steps
          steppers={steppers}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        {currentStep === 1 && (
          <LocationContent
            workshopLocation={workshopLocation}
            handleWorkshopLocation={handleWorkshopLocation}
          />
        )}
        {currentStep === 2 && (
          <ServiceContent
            serviceType={serviceType}
            handleServiceType={handleServiceType}
          />
        )}
        {currentStep === 3 && (
          <DetailContent
            handleFormDetail={handleFormDetail}
            formFields={formFields}
            handleInputChange={handleInputChange}
            detailingServices={detailingServices}
          />
        )}

        <SuccessModal
          visible={showSuccessModal}
          onClick={handleCloseSuccessModal}
          workshopLocation={workshopLocation}
          formFields={formFields}
        />
      </div>
    </Modal>
  );
};

export default DetailingModal;
