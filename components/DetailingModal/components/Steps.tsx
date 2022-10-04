import { Fragment } from 'react';
import Checkmark from './Checkmark';

type StepperStatus = 'DONE' | 'ACTIVE' | 'DISABLED';

interface StepperType {
  status: StepperStatus;
  stepNumber: number;
  text: string;
}

interface StepsProps {
  steppers: StepperType[];
  currentStep: number;
  setCurrentStep: (number: number) => void;
}

/** Render Steps Element */
const Steps: React.FC<StepsProps> = ({
  steppers,
  currentStep,
  setCurrentStep,
}) => {
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

export default Steps;
