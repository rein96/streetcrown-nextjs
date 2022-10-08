import classNames from 'classnames';
import React from 'react';

interface LoadingProps {
  size?: number;
  borderSize?: number;
}

const Loading = ({ size = 64, borderSize = 8 }: LoadingProps) => {
  return (
    <>
      <div
        style={{
          width: size,
          height: size,
          borderWidth: borderSize,
        }}
        className={classNames(`loader ease-linear rounded-full`)}
      />

      <style jsx>{`
        .loader {
          border-top-color: var(--red-ds);
          color: white;
          -webkit-animation: spinner 1.5s linear infinite;
          animation: spinner 1.5s linear infinite;
        }

        @-webkit-keyframes spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Loading;
