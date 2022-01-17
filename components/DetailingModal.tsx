import React, { Fragment, useEffect, useState } from 'react';
import Button from './Button';
import Modal, { ModalProps } from './Modal';

interface DetailingModalProps extends ModalProps {}

type WorkshopLocationType = 'jakarta' | 'bandung' | string | null;
type StepperStatus = 'DONE' | 'ACTIVE' | 'DISABLED';
type StepType = 1 | 2 | 3 | number;
interface StepperType {
  status: StepperStatus;
  stepNumber: number;
  text: string;
}

/** Detailing Modal to let user books a detailing service */
const DetailingModal: React.FC<DetailingModalProps> = ({
  visible,
  onClose,
}) => {
  /** Current Step  */
  const [currentStep, setCurrentStep] = useState<StepType>(1);

  /** Workshop Location */
  const [workshopLocation, setWorkshopLocation] =
    useState<WorkshopLocationType>(null);

  /** Service Type */
  const [serviceType, setServiceType] = useState(null);

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

  /** Render Detail Element */
  const DetailElement: React.FC = () => {
    return (
      <div className='detailing-element mt-8 animation-fadeIn'>
        <div>
          <div className='flex flex-col'>
            <div className='mx-2 flex-1'>
              <div className='text-white font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                Name
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  placeholder='Example: John Doe'
                  className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                />{' '}
              </div>
            </div>
            <div className='mx-2 flex-1'>
              <div className='text-white font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                Phone Number
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  placeholder='Example: +628123456789'
                  className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                />{' '}
              </div>
            </div>
            <div className='mx-2 flex-1'>
              <div className='text-white font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                Auto Brand & Type
              </div>
              <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                <input
                  placeholder='Example: Toyota Camry or Vespa LX 125'
                  className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
                />{' '}
              </div>
            </div>
            <div className='mx-2 flex-1'>
              <div className='text-white font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase'>
                {' '}
                Service
              </div>
              <div className='my-2 p-1'>
                <Button>Select Service</Button>
              </div>
            </div>
          </div>
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
          text: 'Book',
          isDisabled: false,
          onClick: () => console.log('BOOOKED'),
        };
      }
    };

    setPrimaryButtonConfig(primaryButtonConditional());
  }, [currentStep]);

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
        {currentStep === 3 && <DetailElement />}
      </div>
    </Modal>
  );
};

export default DetailingModal;
