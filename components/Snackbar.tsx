import React from 'react';
import classNames from 'classnames';
import Portal from './Portal';

interface SnackbarProps {
  visible: boolean;
  text: string;
}

const Snackbar = ({ visible, text }: SnackbarProps) => {
  return (
    <Portal>
      <div className={classNames('snackbar-wrapper', { show: visible })}>
        <div className={classNames(`snackbar bg-red`)}>{text}</div>
      </div>

      <style jsx>{`
        .snackbar-wrapper {
          z-index: 1400;
          position: fixed;
          display: flex;
          left: 8px;
          right: 8px;
          -webkit-box-pack: center;
          justify-content: center;
          -webkit-box-align: center;
          align-items: center;
          bottom: -100px;
          transition: 0.5s;
        }

        .snackbar {
          color: white;
          padding: 16px;
          transition: 0.5s;
          text-align: center;
          min-width: 200px;
        }

        .snackbar-wrapper.show {
          bottom: 48px;
        }
      `}</style>
    </Portal>
  );
};

export default Snackbar;
