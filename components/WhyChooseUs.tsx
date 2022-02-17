import en from 'locales/en';
import id from 'locales/id';
import { useRouter } from 'next/router';
import React from 'react';
import SectionTitle from './SectionTitle';

const WhyChooseUs = () => {
  const router = useRouter();
  const { locale } = router;
  const translate = locale === 'en' ? en : id;
  const list = [
    {
      title: translate.trained_detailer,
      description: translate.trainer_detailer_description,
      asset: SteeringWheelSvg,
    },
    {
      title: translate.premium_product,
      description: translate.premium_product_description,
      asset: DiamondsSvg,
    },
    {
      title: translate.experienced_detailer,
      description: translate.experienced_detailer_description,
      asset: PeopleSvg,
    },
    {
      title: translate.warranty,
      description: translate.warranty_description,
      asset: ShieldSvg,
    },
    {
      title: translate.pickup_delivery,
      description: translate.pickup_delivery_description,
      asset: CarLocationSvg,
    },
    {
      title: translate.standardized_procedure,
      description: translate.standardized_procedure_description,
      asset: ListSvg,
    },
  ];
  return (
    <section className='why-choose-us flex-center-center'>
      <div className='cards-container container px-4 md:px-0'>
        <SectionTitle
          firstWords='Why Choose'
          secondWords='StreetCrown'
          className='mb-20 mt-20 pt-8 sm:border-t border-grey'
        />
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {list.map((item) => {
            const Asset = item.asset;
            return (
              <div
                className='section-item rounded-xl px-4 py-5 flex'
                style={{ backgroundColor: '#363E46' }}
                key={item.title}
              >
                <div>
                  <Asset />
                </div>
                <div className='text-white ml-5'>
                  <h4 className='font-bold'>{item.title}</h4>
                  <p className='mt-5'>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SteeringWheelSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M24 0C10.746 0 0 10.746 0 24C0 37.254 10.746 48 24 48C37.254 48 48 37.254 48 24C48 10.746 37.254 0 24 0ZM24 6C31.8105 6 38.4075 11.031 40.899 18H7.101C9.5925 11.031 16.1895 6 24 6ZM24 27C22.3425 27 21 25.6575 21 24C21 22.3425 22.3425 21 24 21C25.6575 21 27 22.3425 27 24C27 25.6575 25.6575 27 24 27ZM6 24C14.1975 24 20.8365 31.899 20.976 41.6955C12.492 40.242 6 32.889 6 24ZM27.024 41.6955C27.1635 31.899 33.8025 24 42 24C42 32.889 35.508 40.242 27.024 41.6955Z'
      fill='#ED5858'
    />
  </svg>
);

const DiamondsSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1084_42)'>
      <path
        d='M42 2C41.124 4.876 38.874 7.124 36 8C38.874 8.876 41.124 11.126 42 14C42.876 11.126 45.126 8.878 48 8C45.126 7.124 42.876 4.876 42 2ZM3.998 6C3.414 7.914 1.914 9.416 0 10C1.918 10.586 3.414 12.084 4.002 14C4.586 12.084 6.086 10.584 8 10C6.086 9.416 4.586 7.916 3.998 6ZM40.998 38C40.268 40.392 38.392 42.268 36 43C38.398 43.732 40.268 45.606 41.002 48C41.732 45.606 43.608 43.732 46 43C43.608 42.272 41.732 40.394 40.998 38ZM22 0C21.416 1.916 19.916 3.416 18 4C19.918 4.586 21.416 6.084 22.004 8C22.588 6.084 24.088 4.584 26 4C24.088 3.416 22.588 1.916 22 0ZM5.998 36C5.128 38.872 2.872 41.122 0 42C2.878 42.878 5.128 45.128 6 48C6.878 45.128 9.128 42.878 11.998 42C9.128 41.126 6.878 38.872 5.998 36ZM34.124 12H14.016L4 23.25L24 48L44 23.39L34.124 12ZM15.336 24L21.414 38.436L9.75 24H15.336ZM30.494 24L24 39.422L17.506 24H30.494V24ZM18.414 22L24 16.414L29.586 22H18.414V22ZM32.664 24H38.35L26.552 38.518L32.664 24ZM37.5 22H32.414L26.414 16H32.298L37.5 22ZM15.808 16H21.586L15.586 22H10.468L15.808 16V16Z'
        fill='#ED5858'
      />
    </g>
    <defs>
      <clipPath id='clip0_1084_42'>
        <rect width='48' height='48' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const PeopleSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1084_45)'>
      <path
        d='M35.994 36H12.004L12 34.754C12 32.236 12.2 30.782 15.176 30.094C18.544 29.316 21.864 28.622 20.266 25.676C15.534 16.95 18.918 12 23.998 12C28.98 12 32.45 16.766 27.73 25.678C26.18 28.606 29.382 29.302 32.82 30.096C35.8 30.784 35.998 32.24 35.998 34.762L35.994 36ZM45.616 31.572C43.036 30.976 40.636 30.454 41.798 28.258C45.336 21.574 42.736 18 38.998 18C36.468 18 34.502 19.634 34.502 22.648C34.502 30.454 39.038 26.188 38.994 36H47.996L48 35.074C48 33.182 47.852 32.088 45.616 31.572ZM0.004 36H9.006C8.964 26.188 13.498 30.456 13.498 22.648C13.498 19.634 11.532 18 9.002 18C5.264 18 2.664 21.574 6.204 28.258C7.366 30.456 4.966 30.976 2.386 31.572C0.148 32.088 0 33.182 0 35.074L0.004 36V36Z'
        fill='#ED5858'
      />
    </g>
    <defs>
      <clipPath id='clip0_1084_45'>
        <rect width='48' height='48' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const ShieldSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M24 0C17.258 5.732 13.032 6 6 6V29.07C6 38.276 12.406 40.678 24 48C35.594 40.678 42 38.276 42 29.07V6C34.968 6 30.742 5.732 24 0ZM22.904 30L16 23.276L18.474 20.798L22.904 25.044L31.668 16.094L34.144 18.57L22.904 30V30Z'
      fill='#ED5858'
    />
  </svg>
);

const CarLocationSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M35.5 14C35.776 14 36 14.224 36 14.5V15.01C36 15.804 35.074 16 34.384 16L33.298 14H35.5ZM34.058 17.506C34.698 18.692 35.004 19.758 35.004 21.172C35.004 22.542 34.608 23.706 33.998 25.154V27C33.998 27.552 33.55 28 32.998 28H31.498C30.946 28 30.498 27.552 30.498 27V26H17.498V27C17.498 27.552 17.05 28 16.498 28H15C14.448 28 14 27.552 14 27V25.152C13.392 23.704 12.994 22.54 12.994 21.17C12.994 19.756 13.302 18.69 13.94 17.504C14.768 15.968 15.792 14.052 16.87 12.252C17.7 10.872 18.132 10.546 19.148 10.364C20.682 10.09 22.066 10 24 10C25.934 10 27.318 10.09 28.852 10.364C29.868 10.546 30.302 10.87 31.13 12.254C32.208 14.054 33.23 15.968 34.058 17.506V17.506ZM18 20.5C18 19.672 17.328 19 16.5 19C15.672 19 15 19.672 15 20.5C15 21.328 15.672 22 16.5 22C17.328 22 18 21.328 18 20.5ZM28 21.5C28 21.224 27.776 21 27.5 21H20.5C20.224 21 20 21.224 20 21.5C20 21.776 20.224 22 20.5 22H27.5C27.776 22 28 21.776 28 21.5ZM30.942 15.972C30.942 15.972 30.202 14.146 29.312 12.83C29.11 12.532 28.796 12.328 28.442 12.264C26.93 11.992 25.606 11.906 24 11.906C22.394 11.906 21.07 11.992 19.56 12.264C19.206 12.328 18.892 12.532 18.69 12.83C17.8 14.146 17.058 15.972 17.058 15.972C18.7 16.286 21.368 16.47 24 16.47C26.632 16.47 29.3 16.286 30.942 15.972V15.972ZM33 20.5C33 19.672 32.328 19 31.5 19C30.672 19 30 19.672 30 20.5C30 21.328 30.672 22 31.5 22C32.328 22 33 21.328 33 20.5ZM14.702 14H12.5C12.224 14 12 14.224 12 14.5V15.01C12 15.804 12.926 16 13.616 16L14.702 14ZM24 0C12.954 0 4 8.788 4 19.63C4 30.64 12.75 38.166 24 48C35.25 38.166 44 30.64 44 19.63C44 8.788 35.044 0 24 0ZM24 36C15.162 36 8 28.836 8 20C8 11.164 15.162 4 24 4C32.838 4 40 11.164 40 20C40 28.836 32.838 36 24 36Z'
      fill='#ED5858'
    />
  </svg>
);

const ListSvg = () => (
  <svg
    width='48'
    height='48'
    viewBox='0 0 48 48'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M44 4V44H4V4H44ZM48 0H0V48H48V0ZM40 14H24V16H40V14ZM40 24H24V26H40V24ZM40 34H24V36H40V34ZM18.968 11.392L17.548 10L12.442 15.214L9.364 12.31L7.968 13.73L12.468 18L18.968 11.392V11.392ZM18.968 21.392L17.548 20L12.444 25.214L9.366 22.31L7.97 23.728L12.468 28L18.968 21.392V21.392ZM18.968 31.392L17.548 30L12.444 35.214L9.366 32.31L7.97 33.728L12.468 38L18.968 31.392V31.392Z'
      fill='#ED5858'
    />
  </svg>
);

export default WhyChooseUs;
