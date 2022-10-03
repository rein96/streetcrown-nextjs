import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '../Layout.constant';
import HamburgerMenu from './HamburgerMenu';
import LanguageOptions from './LanguageOptions';
import StreetCrownLogo from './StreetCrownLogo';

function MobileMenu() {
  const webUrl = process.env.NEXT_PUBLIC_URL;

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {/* Hamburger menu */}
      <HamburgerMenu handleShowMobileMenu={handleShowMobileMenu} />

      {showMobileMenu && (
        <div className='bg-dark fixed h-screen w-screen top-0 left-0 z-40 animation-fadeIn'>
          {/* Header */}
          <div className='flex justify-between items-center p-3'>
            {/* Logo */}
            <Link href={'/'} passHref>
              <StreetCrownLogo />
            </Link>

            <div className='text-white' onClick={handleCloseMobileMenu}>
              <X />
            </div>
          </div>

          <div
            className='flex flex-col items-center justify-center'
            style={{
              height: '70vh',
            }}
          >
            <ul className='text-white text-center'>
              {navItems.map((item) => {
                return (
                  <Link
                    href={`${webUrl}#${item.name.toLowerCase()}`}
                    key={item.name}
                  >
                    <li
                      className='text-3xl mb-4'
                      onClick={() => handleCloseMobileMenu()}
                    >
                      {item.name}
                    </li>
                  </Link>
                );
              })}
              {/* Dropdown of languages */}
              <LanguageOptions onClick={handleCloseMobileMenu} />
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

const X = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g clipPath='url(#clip0_1118_75)'>
      <path
        d='M24 20.188L15.685 11.979L23.885 3.697L20.188 0L11.976 8.318L3.666 0.115L0 3.781L8.321 12.021L0.115 20.334L3.781 24L12.018 15.682L20.303 23.885L24 20.188Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_1118_75'>
        <rect width='24' height='24' fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default MobileMenu;
