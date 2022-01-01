import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <>
      <footer className={'flex-center-center text-white'}>
        <div className='flex-center-center flex-col sm:flex-row container border-t'>
          <div className='footer-logo-container mx-4 py-6'>
            <Image
              src='/assets/streetcrown-round-logo.svg'
              width={200}
              height={200}
            />
          </div>
          <div className='sub-footer-container px-6 py-6'>
            <h4 className='footer-header-text border-b border-grey'>JAKARTA</h4>
            <a
              href='https://api.whatsapp.com/send?phone=628999993164&text=Halo%20StreetCrown!'
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
                <span className='ml-4 text-sm'>0812-8870-4003 (Rei)</span>
              </div>
            </a>
            <a
              href='https://www.instagram.com/streetcrown.autodetailing/'
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
                <span className='ml-4 text-sm'>streetcrown.detailing</span>
              </div>
            </a>
            <a
              href='https://goo.gl/maps/x4cAuisnTuMBxjtQ9'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='icon-container flex items-center py-3'>
                <Image
                  src='/assets/location.svg'
                  alt='location'
                  width={28}
                  height={28}
                />
                <span className='ml-4 text-sm'>
                  {' '}
                  Jl. Sunter Pulo Kecil No.18, Jakarta Utara
                </span>
              </div>
            </a>
          </div>
          <div className='sub-footer-container px-6 py-6'>
            <h4 className='footer-header-text border-b border-grey'>BANDUNG</h4>
            <a
              href='https://api.whatsapp.com/send?phone=628999993164&text=Halo%20StreetCrown!'
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
                <span className='ml-4 text-sm'>0851-0836-6633 (William)</span>
              </div>
            </a>
            <a
              href='https://www.instagram.com/streetcrown'
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
                <span className='ml-4 text-sm'>streetcrown</span>
              </div>
            </a>
            <a
              href='https://goo.gl/maps/83hKMY7hHr11ASHB8'
              target='_blank'
              rel='noopener noreferrer'
            >
              <div className='icon-container flex items-center py-3'>
                <Image
                  src='/assets/location.svg'
                  alt='location'
                  width={28}
                  height={28}
                />
                <span className='ml-4 text-sm'>
                  Jl. Taman Kopo Indah No.10, Bandung
                </span>
              </div>
            </a>
          </div>
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

        .footer-icon {
          width: 28px;
        }
      `}</style>
    </>
  );
}

export default Footer;
