import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LanguageOptions, MobileMenu, StreetCrownLogo } from './components';
import { navItems } from './Layout.constant';
interface HeaderProps {
  scrollDirection: 'up' | 'down';
}

/** Reusable Header / Navbar */
const Header: React.FC<HeaderProps> = ({ scrollDirection }) => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  const webUrl = process.env.NEXT_PUBLIC_URL;

  useEffect(() => {
    if (scrollDirection === 'down') {
      setTimeout(() => {
        setShowNavbar(false);
      }, 450);
    } else {
      setShowNavbar(true);
    }
  }, [scrollDirection]);

  return (
    <header
      className={`fixed bg-dark header p-3 w-full shadow-md z-10 
      ${
        scrollDirection === 'up'
          ? 'animation-slideInDown'
          : 'animation-slideOutUp'
      }
      ${showNavbar ? 'visible' : 'invisible'}
      `}
    >
      <nav className='flex justify-between items-center'>
        {/* Logo */}
        <Link href={'/'} passHref>
          <StreetCrownLogo />
        </Link>

        {/* Hamburger and Mobile Menu */}
        <MobileMenu />

        {/* Nav menu on larger width */}
        <div className='hidden sm:block text-white'>
          {/* Navbar items */}
          {navItems.map((item) => {
            return (
              <Link
                href={`${webUrl}#${item.name.toLowerCase()}`}
                key={item.name}
              >
                <a className='ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white cursor-pointer'>
                  {item.name}
                </a>
              </Link>
            );
          })}

          {/* Dropdown of languages */}
          <LanguageOptions />
        </div>
      </nav>
    </header>
  );
};

export default React.memo(Header);
