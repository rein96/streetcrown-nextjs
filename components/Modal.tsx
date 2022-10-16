import React, { useEffect, useState } from 'react';
import Portal from './Portal';

type ModalButtonType = {
  text: string;
  onClick?: () => void;
  isDisabled?: boolean;
};
export interface ModalProps {
  children?: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  title?: string;
  primaryButton?: ModalButtonType;
  secondaryButton?: ModalButtonType;
  withBorder?: boolean;
  bodyClassName?: string;
}

/**
 * Reusable Modal
 */
const Modal: React.FC<ModalProps> = ({
  children,
  visible,
  onClose,
  title,
  secondaryButton,
  primaryButton,
  withBorder = true,
  bodyClassName = null,
}) => {
  const [showCloseAnimation, setShowCloseAnimation] = useState(false);

  const handleOnCloseWithAnimation = () => {
    setShowCloseAnimation(true);
    setTimeout(() => {
      setShowCloseAnimation(false);
      onClose();
    }, 480);
  };

  /** Control Body Scroll */
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [visible]);

  return (
    <>
      {visible ? (
        <Portal>
          <div
            onClick={handleOnCloseWithAnimation}
            className={`modal bg-black bg-opacity-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div
              className='relative w-auto my-6 mx-auto max-w-3xl min-w-3xl'
              onClick={(e) => e.stopPropagation()}
            >
              {/* content */}
              <div
                className={`animation-slideInUp ${
                  showCloseAnimation ? 'animation-slideOutDown' : ''
                } bg-dark border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none`}
              >
                {/* header */}
                <div
                  className={`flex items-center justify-between p-5 border-solid ${
                    withBorder ? 'border-b' : ''
                  } border-red rounded-t`}
                >
                  <h3 className='text-xl font-semibold text-white'>{title}</h3>
                  {/* Close Button */}
                  <button
                    className='p-1 ml-auto bg-transparent opacity-70 border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={handleOnCloseWithAnimation}
                  >
                    <span className='bg-transparent bg-opacity-100 text-white opacity-90 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      X
                    </span>
                  </button>
                </div>
                {/* body */}
                <div
                  className={`modal-body relative p-6 flex-auto ${bodyClassName}`}
                >
                  {children}
                </div>
                {/* footer */}
                <div
                  className={`flex items-center justify-end p-6 ${
                    withBorder ? 'border-t' : ''
                  } border-solid border-red rounded-b`}
                >
                  {secondaryButton?.text && (
                    <button
                      className={`text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      type='button'
                      style={{ color: 'white' }}
                      onClick={secondaryButton?.onClick}
                    >
                      {secondaryButton.text}
                    </button>
                  )}
                  {primaryButton?.text && (
                    <button
                      className={`${
                        primaryButton?.isDisabled
                          ? 'bg-greyDisabled cursor-not-allowed'
                          : 'cursor-pointer'
                      } bg-red text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`}
                      type='button'
                      onClick={primaryButton?.onClick}
                    >
                      {primaryButton.text}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </Portal>
      ) : null}

      <style jsx>{`
        .modal-body::-webkit-scrollbar {
          -webkit-appearance: none;
          width: 7px;
        }
        .modal-body::-webkit-scrollbar-thumb {
          background: #f1f1f1;
        }

        .modal-body {
          height: 400px;
          overflow-y: scroll;
        }
        @media only screen and (max-width: 320px) {
          .modal-body {
            min-width: 300px;
          }
        }
        @media (min-width: 320px) and (max-width: 500px) {
          .modal-body {
            min-width: 360px;
          }
        }

        @media (min-width: 501px) and (max-width: 640px) {
          .modal-body {
            min-width: 480px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .modal-body {
            min-width: 620px;
          }
        }

        @media (min-width: 769px) {
          .modal-body {
            min-width: 740px;
          }
        }
      `}</style>
    </>
  );
};

export default Modal;
