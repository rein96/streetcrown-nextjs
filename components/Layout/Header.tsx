import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { LanguageOptions, MobileMenu, StreetCrownLogo } from './components';
import { navItems } from './Layout.constant';
import Snackbar from 'components/Snackbar';
import { LocaleType } from 'types/detailing';

function debounce(func: Function, wait: number, immediate?: boolean) {
  let timeout;
  return function () {
    // const context = this;
    const context = window;
    // const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context);
  };
}

/** Reusable Header / Navbar */
const Header: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);

  const [showSnackbar, setShowSnackbar] = useState(false);

  const [snackbarText, setSnackbarText] = useState('');

  const [y, setY] = useState(0);

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up');

  const webUrl = process.env.NEXT_PUBLIC_URL;

  const handleShowSnackbar = (locale: LocaleType) => {
    const localeText =
      locale === 'en'
        ? 'Language changed to English 🇺🇸'
        : 'Berubah ke Bahasa Indonesia 🇮🇩';

    setShowSnackbar(true);
    setSnackbarText(localeText);
    setTimeout(() => {
      setShowSnackbar(false);
    }, 2500);
  };

  const handleNavigation = debounce(() => {
    /** Less than 100px -> set behaviour scroll to up -> show navbar */
    const scrollAroundTopLayout: boolean = y <= 100;

    if (y > window.scrollY || scrollAroundTopLayout) {
      // Scrolling up
      setScrollDirection('up');
    } else if (y < window.scrollY) {
      // Scrolling down
      setScrollDirection('down');
    }
    setY(window.scrollY);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [handleNavigation, y, scrollDirection]);

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
    <>
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
          <MobileMenu handleShowSnackbar={handleShowSnackbar} />

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
            <LanguageOptions handleShowSnackbar={handleShowSnackbar} />
          </div>
        </nav>
      </header>
      <Snackbar visible={showSnackbar} text={snackbarText} />
    </>
  );
};

export default React.memo(Header);
