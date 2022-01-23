import React, { Fragment, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { getTodayDate } from 'utils';
import Button from './Button';
import Modal, { ModalProps } from './Modal';
import { useRouter } from 'next/router';

const JAKARTA_WHATSAPP_NUMBER = '628999993164';
const BANDUNG_WHATSAPP_NUMBER = '628999993164';

interface DetailingModalProps extends ModalProps {
  // TODO_TYPING
  detailingServices: any[];
}

interface StepperType {
  status: StepperStatus;
  stepNumber: number;
  text: string;
}

interface DetailingFormType {
  name: string;
  phoneNumber: string;
  autoBrand: string;
  detailingService: string;
  bookingDate: string;
}

type WorkshopLocationType = 'jakarta' | 'bandung' | string | null;
type StepperStatus = 'DONE' | 'ACTIVE' | 'DISABLED';
type StepType = 1 | 2 | 3 | number;

/** Detailing Modal to let user books a detailing service */
const DetailingModal: React.FC<DetailingModalProps> = ({
  visible,
  onClose,
  detailingServices,
}) => {
  const { locale } = useRouter();

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
    detailingService: '-',
    bookingDate: '',
  });
  console.log('formFields', formFields);

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
    // TODO
    // if(!!blabla) return 'DONE'
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

  /** Render Location Element */
  const LocationElement: React.FC = () => {
    const locations = ['Jakarta', 'Bandung'];

    return (
      <div className='location-element mt-8 p-4 flex justify-center animation-fadeIn'>
        <div className='flex flex-col'>
          <p className='text-white text-xl mb-6'>
            Choose our workshop location:
          </p>
          {locations.map((location) => {
            const isLocationSelected =
              location.toLowerCase() === workshopLocation?.toLowerCase();
            return (
              <Button
                key={location}
                className={`${isLocationSelected ? 'bg-green' : 'bg-red'} mb-6`}
                data-location={location.toLowerCase()}
                onClick={handleWorkshopLocation}
              >
                {location}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  /** Render Service Element */
  const ServiceElement: React.FC = () => {
    const services = ['Workshop', 'Pickup & Delivery'];
    return (
      <div className='service-element mt-8 p-4 flex justify-center animation-fadeIn'>
        <div className='flex flex-col'>
          <p className='text-white text-xl mb-6'>Detailling my auto in:</p>
          {services.map((service) => {
            const isLocationSelected =
              service.toLowerCase() === serviceType?.toLowerCase();

            return (
              <Button
                key={service}
                className={`${isLocationSelected ? 'bg-green' : 'bg-red'} mb-6`}
                data-service={service.toLowerCase()}
                onClick={handleServiceType}
              >
                {service}
              </Button>
            );
          })}
        </div>
      </div>
    );
  };

  /** Checkmark SVG */
  const Checkmark: React.FC = () => (
    <svg
      width='16'
      height='12'
      viewBox='0 0 12 9'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M3.72667 7.05333L0.946667 4.27333L0 5.21333L3.72667 8.94L11.7267 0.94L10.7867 0L3.72667 7.05333Z'
        fill='white'
      />
    </svg>
  );

  /** Render Steps Element */
  const Steps: React.FC = () => {
    return (
      <div className='px-5 pb-5'>
        <div className='flex items-center'>
          {steppers.map((step) => {
            const isDisabled = step.status === 'DISABLED';
            const isDone = step.status === 'DONE';
            const isActive = step.status === 'ACTIVE';

            const isCurrentStep = step.stepNumber === currentStep;
            const isLastIndex = step.stepNumber === 3;

            const disabledClassName =
              'border-grey bg-greyDisabled cursor-not-allowed';
            const activeClassName = 'bg-red border-red cursor-pointer';

            /** Step On Click Event */
            const stepOnClick = (
              event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) => {
              // Disabled won't trigger anything
              if (isDisabled) return null;

              // Go to specific stepnumber
              const stepnumber = Number(event.currentTarget.dataset.stepnumber);
              setCurrentStep(stepnumber);
            };

            return (
              <Fragment key={step.stepNumber}>
                <div
                  className='flex items-center text-white relative'
                  data-stepnumber={step.stepNumber}
                  onClick={stepOnClick}
                >
                  {/* Number or Checkmark */}
                  <div
                    className={`${
                      isDisabled ? disabledClassName : activeClassName
                    } text-white flex items-center justify-center rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2`}
                  >
                    {isDone && <Checkmark />}
                    {(isActive || isDisabled) && step.stepNumber}
                  </div>
                  {/* Text */}
                  <div
                    className={`${
                      isCurrentStep ? 'text-red' : 'text-white'
                    } absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase`}
                  >
                    {step.text}
                  </div>
                </div>
                {/* Line */}
                {!isLastIndex && (
                  <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-red'></div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    );
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
    console.log('data', data);

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

  /** Handle Send WhatsApp */
  const handleSendWhatsApp = () => {
    const adminNumber: string =
      workshopLocation === 'jakarta'
        ? JAKARTA_WHATSAPP_NUMBER
        : BANDUNG_WHATSAPP_NUMBER;

    if (locale === 'id')
      // Open Whatsapp with Indonesian wording
      return window.open(
        `https://api.whatsapp.com/send?phone=${adminNumber}&text=Hi%20StreetCrown%2C%20saya%20baru%20saja%20booking%20dari%20website%2C%20berikut%20detailnya%3A%0A%0ANama%3A%20${formFields.name}%0AService%20Type%3A%20${workshopLocation}%0AVehicle%3A%20${formFields.autoBrand}%0ADetailing%20Service%3A%20${formFields.detailingService}%0ABooking%20Date%3A%20${formFields.bookingDate}`
      );

    // Open Whatsapp with English wording
    return window.open(
      `https://api.whatsapp.com/send?phone=${adminNumber}&text=Hi%20StreetCrown%2C%20I%20have%20booked%20from%20your%20website%2C%20here%20is%20the%20detail%3A%0A%0ANama%3A%20${formFields.name}%0AService%20Type%3A%20${workshopLocation}%0AVehicle%3A%20${formFields.autoBrand}%0ADetailing%20Service%3A%20${formFields.detailingService}%0ABooking%20Date%3A%20${formFields.bookingDate}`
    );
  };

  /** Update steppers state */
  useEffect(() => {
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
  }, [workshopLocation, serviceType]);

  /** Update primary button config state */
  useEffect(() => {
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
  }, [currentStep, formFields, formLoading]);

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
        <Steps />
        {currentStep === 1 && <LocationElement />}
        {currentStep === 2 && <ServiceElement />}
        {currentStep === 3 && (
          <DetailElement
            handleFormDetail={handleFormDetail}
            formFields={formFields}
            handleInputChange={handleInputChange}
            detailingServices={detailingServices}
          />
        )}

        {/* Success Modal */}
        <Modal
          visible={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          withBorder={false}
        >
          <div className='success-modal flex flex-col items-center justify-center text-white h-full'>
            <PaperPlane />
            <p className='font-bold mt-5 text-2xl text-green'>
              Your booking form was sent!
            </p>
            <p className='mt-3'>We will contact you soon </p>
            <p className='mt-9 text-center'>
              You could message the booking form to our Whatsapp Number directly
            </p>
            <Button className='bg-green mt-5' onClick={handleSendWhatsApp}>
              Send WhatsApp
            </Button>
          </div>
        </Modal>
      </div>
    </Modal>
  );
};

const PaperPlane = () => (
  <svg
    width='60'
    height='60'
    viewBox='0 0 60 60'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M60 0L45 55L24.6775 36.9025L44.1825 16.3175L18.0375 34.385L0 30L60 0ZM22.5 41.67V60L30.645 48.9225L22.5 41.67Z'
      fill='#28B78D'
    />
  </svg>
);

interface DetailElementProps {
  handleFormDetail: (event: React.FormEvent) => void;
  formFields: DetailingFormType;
  handleInputChange: (event: any) => void;
  // TODO_TYPING
  detailingServices: any[];
}

/** Render Detail Element */
const DetailElement: React.FC<DetailElementProps> = ({
  handleFormDetail,
  formFields,
  handleInputChange,
  detailingServices,
}) => {
  return (
    <form onSubmit={handleFormDetail}>
      <div className='detailing-element mt-8 animation-fadeIn'>
        <div>
          <div className='flex flex-col'>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Name
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='name'
                    value={formFields.name}
                    onChange={handleInputChange}
                    placeholder='Example: John Doe'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Phone Number
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='phoneNumber'
                    value={formFields.phoneNumber}
                    onChange={handleInputChange}
                    type='number'
                    placeholder='Example: 628123456789'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Auto Brand & Type
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='autoBrand'
                    value={formFields.autoBrand}
                    onChange={handleInputChange}
                    placeholder='Example: Toyota Camry or Vespa LX 125'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Service{' '}
                <p className='text-grey inline-block text-xs opacity-60 ml-1'>
                  (optional)
                </p>
                <div className='my-2 p-1'>
                  <select
                    name='detailingService'
                    onChange={handleInputChange}
                    defaultValue={formFields.detailingService}
                    className='cursor-pointer p-2 text-black text-lg text-shadow-sm tracking-wide'
                  >
                    <option className='text-black' value='-'>
                      Select Detailing Service
                    </option>
                    {detailingServices.map((service) => {
                      const { sys, fields } = service;
                      return (
                        <option
                          key={sys.id}
                          className='text-black'
                          value={fields.name}
                        >
                          {fields.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Booking Date
                <p className='text-grey inline-block text-xs opacity-60 ml-1'>
                  (optional)
                </p>
                <div className='my-2 p-1'>
                  <input
                    name='bookingDate'
                    type='date'
                    id='date'
                    min={getTodayDate()}
                    value={formFields.bookingDate}
                    onChange={handleInputChange}
                    className='text-black'
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailingModal;
