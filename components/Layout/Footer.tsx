import React from 'react';
import Image from 'next/image';
import {
  BANDUNG_INSTAGRAM,
  BANDUNG_WHATSAPP_NUMBER,
  JAKARTA_INSTAGRAM,
  JAKARTA_WHATSAPP_NUMBER,
} from 'constants/common';

const workshopData = [
  {
    location: 'JAKARTA',
    whatsappNumber: JAKARTA_WHATSAPP_NUMBER,
    contactText: '0812-8870-4003 (Rei)',
    instagramId: JAKARTA_INSTAGRAM,
    maps: 'https://goo.gl/maps/x4cAuisnTuMBxjtQ9',
    address: 'Jl. Sunter Pulo Kecil Blok X3/18, Jakarta Utara',
  },
  {
    location: 'BANDUNG',
    whatsappNumber: BANDUNG_WHATSAPP_NUMBER,
    contactText: '0851-0836-6633 (William)',
    instagramId: BANDUNG_INSTAGRAM,
    maps: 'https://g.page/StreetCrown?share',
    address: 'Cluster Greenville 1 no.17, Taman Kopo Indah 1, Bandung',
  },
];

function Footer() {
  return (
    <>
      <footer className={'flex-center-center text-white'}>
        <div className='flex-center-center flex-col sm:flex-row container border-t'>
          <div className='footer-logo-container mx-4 py-6'>
            <Image
              src='/assets/streetcrown-round-logo.svg'
              alt='streetcrown logo'
              width={200}
              height={200}
            />
          </div>
          {workshopData.map((workshop) => {
            const {
              location,
              whatsappNumber,
              contactText,
              instagramId,
              maps,
              address,
            } = workshop;

            return (
              <div key={location} className='sub-footer-container px-6 py-6'>
                <p className='footer-header-text border-b border-grey'>
                  {location}
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Halo%20streetcrown.id!`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='icon-container flex items-center py-3'>
                    <Image
                      src='/assets/whatsapp.svg'
                      alt='whatsapp'
                      width={28}
                      height={28}
                    />
                    <span className='ml-4 text-sm'>{contactText}</span>
                  </div>
                </a>
                <a
                  href={`https://www.instagram.com/${instagramId}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <div className='icon-container flex items-center py-3'>
                    <Image
                      src='/assets/instagram.svg'
                      alt='instagram'
                      width={28}
                      height={28}
                    />
                    <span className='ml-4 text-sm'>{instagramId}</span>
                  </div>
                </a>
                <a href={maps} target='_blank' rel='noopener noreferrer'>
                  <div className='icon-container flex items-center py-3'>
                    <Image
                      src='/assets/location.svg'
                      alt='location'
                      width={28}
                      height={28}
                    />
                    <span className='ml-4 text-sm'> {address}</span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </footer>

      {/* CSS */}
      <style jsx>{`
        .footer-header-text {
          letter-spacing: 1px;
          padding-bottom: 1rem;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .icon-container {
          max-height: 52px;
        }
      `}</style>
    </>
  );
}

export default React.memo(Footer);
