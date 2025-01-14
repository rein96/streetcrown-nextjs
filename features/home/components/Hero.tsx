import en from 'locales/en';
import id from 'locales/id';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DetailingServiceType } from 'types/detailing';
import Button from '../../../components/Button';
import { DetailingModal } from '../../../components/DetailingModal';

interface HeroProps {
  detailingServices: DetailingServiceType[];
}

const Hero: React.FC<HeroProps> = ({ detailingServices }) => {
  const router = useRouter();
  const { locale, pathname, query } = router;
  const translate = locale === 'en' ? en : id;

  const detailingModalVisible = router.query?.modal === 'detailing';

  const handleShowModal = () => {
    router.query.modal = 'detailing';

    router.push(
      {
        pathname: pathname,
        query: { ...query },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };
  const handleCloseModal = () => {
    delete router.query.modal;
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  return (
    <>
      <div className='hero-container flex items-center justify-center'>
        <section className='hero-content absolute text-center font-semibold text-white'>
          <h1 className='streetcrown-title-h1 text-base lg:text-2xl tracking-wider'>
            <span className='text-red'>StreetCrown</span> | Professional Auto
            Detailer
          </h1>
          <h2 className='streetcrown-slogan-large text-5xl lg:text-6xl tracking-wider'>
            <span className='text-red'>Shiny</span> <span>inside</span>{' '}
            <span className='text-red'>Shiny</span> <span>outside</span>
          </h2>
          <h2 className='streetcrown-slogan-mobile tracking-wider mx-4'>
            <div className='text-left'>
              <span className='text-red'>Shiny</span> <span>inside</span>
            </div>
            <div className='text-right'>
              <span className='text-red'>Shiny</span> <span>outside</span>
            </div>
          </h2>
          <Button className='mt-4' onClick={handleShowModal}>
            {translate.book}
          </Button>
        </section>
        <img
          alt='interior car background'
          className='hero-image hero-portrait opacity-20'
          src='/assets/auto_detailing_black_glove.jpg'
        />
        <img
          alt='interior car background'
          className='hero-image hero-landscape opacity-20'
          src='/assets/auto_detailing_black_glove.jpg'
        />
        {/* TODO: Use next/image */}
        {/* <Image
        layout="fill"
        alt="Logo"
        className="hero-image hero-portrait"
        src="/assets/hero-portrait.jpg"
      />
      <Image
        layout="fill"
        alt="Logo"
        className="hero-image hero-landscape"
        src="/assets/hero-landscape.jpg"
      /> */}
      </div>

      <DetailingModal
        visible={detailingModalVisible}
        onClose={handleCloseModal}
        detailingServices={detailingServices}
      />

      {/* CSS */}
      <style jsx>{`
        .hero-container {
          width: 100%;
        }

        .hero-image {
          z-index: -1;
          opacity: 0.7;
        }

        .hero-portrait {
          display: none;
          height: 92vh;
          width: 100vw;
          object-fit: cover;
        }

        .hero-landscape {
          display: none;
          height: 76vh;
          object-fit: cover;
          width: 100vw;
        }
        @media only screen and (max-width: 639px) {
          .hero-portrait {
            display: block;
          }

          .streetcrown-slogan-large {
            display: none;
          }

          .streetcrown-slogan-mobile {
            display: block;
            margin: 8px -12px 0 -12px;
            font-size: 2.5rem;
          }
        }

        @media (min-width: 640px) {
          .streetcrown-slogan-large {
            display: block;
          }

          .streetcrown-slogan-mobile {
            display: none;
          }
          .hero-landscape {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
