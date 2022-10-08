import React from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';
// import Image from 'next/image';
import en from 'locales/en';
import id from 'locales/id';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * About Section on home
 * Contains description, embedded youtube video,
 * a carousel of car and bike images
 */
const About: React.FC = () => {
  const { locale } = useRouter();
  const translate = locale === 'en' ? en : id;
  const images = [
    'black-bmw',
    'black-raize',
    'blue-bmw',
    'blue-mini',
    'green-vespa',
    'red-cbr',
    'red-mazda',
    'white-volkswagen',
  ];

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className='about-page flex-center-center'>
        <div className='container px-4 md:px-0'>
          <div className='mb-20 mt-20 pt-8 sm:border-t border-grey' />
          <div className='flex flex-col lg:flex-row gap-5'>
            <div className='text-white flex-1' id='about'>
              <h3 className='text-3xl tracking-widest'>StreetCrown</h3>
              <div className='red-line bg-red' />
              <p className='text-sm lg:text-base leading-6 my-4'>
                {translate.about}
              </p>
            </div>

            <div className='w-full flex-1'>
              <iframe
                style={{ width: '100%', height: 400 }}
                // width='560'
                // height='315'
                src='https://www.youtube.com/embed/nfq8PB0_dwY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <div className='mt-8'>
              <Slider {...settings}>
                {images.map((image) => {
                  return (
                    <div className='px-1' key={image}>
                      {/* Problem using Image from next, the images on the slider look laggy when loaded */}
                      {/* <Image
                        width='400'
                        height='400'
                        src={`/assets/portfolio/${image}.jpg`}
                        alt={image}
                      /> */}
                      <img
                        src={`/assets/portfolio/${image}.jpg`}
                        width='400'
                        height='400'
                        alt={image}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .red-line {
          height: 4px;
          width: 188px;
          border-radius: 20px;
          margin-top: 8px;
        }
      `}</style>
    </>
  );
};

export default About;
