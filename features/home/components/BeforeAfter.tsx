import SectionTitle from 'components/SectionTitle';
import React from 'react';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

const BeforeAfter = () => {
  const EXTERIOR_BEFORE = {
    imageUrl: '/assets/before-after/close-before.webp',
    alt: 'before detailing',
  };

  const EXTERIOR_AFTER = {
    imageUrl: '/assets/before-after/close-after.webp',
    alt: 'after detailing',
  };

  const LOGO_BEFORE = {
    imageUrl: '/assets/before-after/logo-before.webp',
    alt: 'before detailing',
  };

  const LOGO_AFTER = {
    imageUrl: '/assets/before-after/logo-after.webp',
    alt: 'after detailing',
  };

  const delimiterIconStyles = {
    width: '40px',
    height: '40px',
    backgroundSize: 'cover',
    borderRadius: 'none',
  };

  return (
    <>
      <section className='flex-center-center'>
        <div className='container px-4 md:px-0 mb-20'>
          <SectionTitle
            id='portfolio'
            firstWords={'Our'}
            secondWords={'Before and After Portfolio'}
            className='mb-20 mt-20 pt-8 sm:border-t border-grey'
          />
          <div className='before-after-container'>
            <ReactBeforeSliderComponent
              firstImage={EXTERIOR_AFTER}
              secondImage={EXTERIOR_BEFORE}
              delimiterIconStyles={delimiterIconStyles}
              className='cursor-pointer'
            />

            <div className='mb-20' />

            <ReactBeforeSliderComponent
              firstImage={LOGO_AFTER}
              secondImage={LOGO_BEFORE}
              delimiterIconStyles={delimiterIconStyles}
              className='cursor-pointer'
            />
          </div>
        </div>
      </section>

      <style jsx>{`
        .before-after-container {
          max-width: 700px;
          margin: 0 auto;
          padding: 0 0.75rem;
        }
      `}</style>
    </>
  );
};

export default BeforeAfter;
