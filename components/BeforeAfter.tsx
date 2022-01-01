import React, { useEffect } from 'react';
import BeerSlider from 'beerslider';
import SectionTitle from './SectionTitle';

function BeforeAfter() {
  useEffect(() => {
    new BeerSlider(document.getElementById('slider'));
    new BeerSlider(document.getElementById('slider-2'));
  }, []);

  return (
    <>
      <div className='flex-center-center'>
        <div className='container mb-20'>
          <SectionTitle
            firstWords={'Our'}
            secondWords={'Before and After Portfolio'}
            className='mb-20 mt-20 pt-8 sm:border-t border-grey'
          />
          <div className='before-after-container' style={{ maxWidth: '700px' }}>
            <div
              id='slider'
              className='beer-slider shadow-lg br-20'
              data-beer-label='after'
            >
              <img src={'/assets/close-after.jpg'} alt='after' />
              <div className='beer-reveal' data-beer-label='before'>
                <img src={'/assets/close-before.jpg'} alt='before' />
              </div>
            </div>

            <div className='mb-20'></div>

            <div
              id='slider-2'
              className='beer-slider shadow-lg br-20'
              data-beer-label='after'
            >
              <img src={'/assets/logo-after.jpg'} alt='after' />
              <div className='beer-reveal' data-beer-label='before'>
                <img src={'/assets/logo-before.jpg'} alt='before' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .before-after-container {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 0.75rem;
        }
        .heading-font {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .beer-slider[data-beer-label]:after,
        .beer-reveal[data-beer-label]:after {
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.75rem;
          font-weight: bold;
          color: #333;
        }

        .beer-slider {
          box-shadow: 0 12px 16px -8px black;
        }

        .beer-slider {
          display: inline-block;
          position: relative;
          overflow: hidden;
        }
        .beer-slider *,
        .beer-slider:before,
        .beer-slider:after,
        .beer-slider *:before,
        .beer-slider *:after {
          box-sizing: border-box;
        }
        .beer-slider img,
        .beer-slider svg {
          vertical-align: bottom;
        }
        .beer-slider > * {
          height: 100%;
        }
        .beer-slider > img {
          max-width: 100%;
          height: auto;
        }

        .beer-reveal {
          position: absolute;
          left: 0;
          top: 0;
          right: 50%;
          overflow: hidden;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.35s;
        }
        .beer-reveal > :first-child {
          width: 200%;
          max-width: none;
          height: 100%;
        }
        .beer-reveal > img:first-child {
          height: auto;
        }

        .beer-range {
          position: absolute;
          z-index: 2;
          top: 0;
          bottom: 0;
          height: 100%;
          margin: 0;
          left: -1px;
          width: calc(100% + 2px);
          cursor: pointer;
          -webkit-appearance: slider-horizontal !important;
          -moz-appearance: none;
          opacity: 0;
          -ms-touch-action: auto;
          touch-action: auto;
        }
        .beer-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 300vh;
        }
        .beer-range::-moz-range-thumb {
          -webkit-appearance: none;
          height: 300vh;
        }
        .beer-range::-ms-tooltip {
          display: none;
        }

        .beer-handle {
          position: absolute;
          z-index: 2;
          pointer-events: none;
          opacity: 0;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          color: #000;
          background: rgba(255, 255, 255, 0.5);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0);
          transition: background 0.3s, box-shadow 0.3s, opacity 0.5s 0.25s;
        }
        .beer-handle:before,
        .beer-handle:after {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          top: 50%;
          border-top: solid 2px;
          border-left: solid 2px;
          transform-origin: 0 0;
        }
        .beer-handle:before {
          left: 10px;
          transform: rotate(-45deg);
        }
        .beer-handle:after {
          right: 0;
          transform: rotate(135deg);
        }

        .beer-range:focus ~ .beer-handle {
          background: rgba(255, 255, 255, 0.85);
          box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
        }

        .beer-slider[data-beer-label]:after,
        .beer-reveal[data-beer-label]:after {
          content: attr(data-beer-label);
          position: absolute;
          top: 1.5rem;
          line-height: 1;
          padding: 0.5rem;
          border-radius: 0.125rem;
          background: rgba(255, 255, 255, 0.75);
        }

        .beer-slider[data-beer-label]:after {
          right: 1.5rem;
        }

        .beer-reveal[data-beer-label]:after {
          left: 1.5rem;
        }

        .beer-slider[data-beer-label='']:after,
        .beer-reveal[data-beer-label='']:after {
          content: none;
        }

        .beer-ready .beer-reveal,
        .beer-ready .beer-handle {
          opacity: 1;
        }
      `}</style>
    </>
  );
}

export default BeforeAfter;
