import React, { useState } from 'react';

type ModalButtonType = {
  text: string;
  onClick?: () => void;
};
interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
  title?: string;
  primaryButton?: ModalButtonType;
  secondaryButton?: ModalButtonType;
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
}) => {
  const [showCloseAnimation, setShowCloseAnimation] = useState(false);

  const handleOnCloseWithAnimation = () => {
    setShowCloseAnimation(true);
    setTimeout(() => {
      setShowCloseAnimation(false);
      onClose();
    }, 480);
  };

  return (
    <>
      {visible ? (
        <>
          <div
            onClick={handleOnCloseWithAnimation}
            className={`modal animation-fadeIn ${
              showCloseAnimation ? 'animation-fadeOut' : ''
            } animation-fadeIn bg-black bg-opacity-40 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
          >
            <div
              className='relative w-auto my-6 mx-auto max-w-3xl'
              onClick={(e) => e.stopPropagation()}
            >
              {/* content */}
              <div
                className={`animation-fadeInUp ${
                  showCloseAnimation ? 'animation-fadeOutDown' : ''
                } bg-dark border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none`}
              >
                {/* header */}
                <div className='flex items-start justify-between p-5 border-b border-solid border-red rounded-t'>
                  <h3 className='text-3xl font-semibold text-white'>{title}</h3>
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
                <div className='relative p-6 flex-auto'>
                  <p className='my-4 text-blueGray-500 text-lg leading-relaxed text-white'>
                    {children}
                  </p>
                </div>
                {/* footer */}
                <div className='flex items-center justify-end p-6 border-t border-solid border-red rounded-b'>
                  {secondaryButton?.text && (
                    <button
                      className='text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                      onClick={secondaryButton?.onClick}
                    >
                      {secondaryButton.text}
                    </button>
                  )}
                  {primaryButton?.text && (
                    <button
                      className='bg-red text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
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
        </>
      ) : null}

      {/* <style jsx>{`
        .modal-content {
          animation: fadeInUp 0.4s;
        }
      `}</style> */}
    </>
  );
};

export default Modal;
