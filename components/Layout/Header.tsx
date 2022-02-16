import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

/** StreetCrown logo with forwardRef */
const StreetCrownLogo = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  const height = 40;
  return (
    <a ref={ref} style={{ height }} {...props}>
      <Image
        alt='Logo'
        className='w-24 md:w-32'
        src='/assets/streetcrown-logo-transparent.svg'
        width={100}
        height={height}
      />
    </a>
  );
});

StreetCrownLogo.displayName = 'StreetCrownLogo';

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

/** Reusable Header / Navbar */
const Header = () => {
  const router = useRouter();

  const webUrl = process.env.NEXT_PUBLIC_URL;

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const navItems = [
    {
      name: 'Services',
    },
    {
      name: 'About',
    },
    {
      name: 'Portfolio',
    },
    {
      name: 'Workshops',
    },
  ];

  const handleShowMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setShowMobileMenu(false);
  };

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <header className='header p-3 w-full shadow-md'>
      <nav className='flex justify-between items-center'>
        {/* Logo */}
        <Link href={'/'} passHref>
          <StreetCrownLogo />
        </Link>

        {/* Hamburger menu */}
        <button
          className='sm:hidden text-white'
          onClick={handleShowMobileMenu}
          aria-label='Open Menu'
        >
          <Image src={'/assets/hamburger.svg'} width={30} height={30} />
        </button>

        {/* Mobile Menu */}
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
              style={{ height: '70vh' }}
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
                <select
                  onChange={changeLanguage}
                  defaultValue={router.locale}
                  className='text-white text-shadow-sm text-2xl bg-transparent tracking-wide ml-4 cursor-pointer'
                >
                  <option className='text-black' value='id'>
                    🇮🇩 Indonesia
                  </option>
                  <option className='text-black' value='en'>
                    🇺🇸 English
                  </option>
                </select>
              </ul>
            </div>
          </div>
        )}

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
          <select
            onChange={changeLanguage}
            defaultValue={router.locale}
            className='text-white text-shadow-sm text-lg bg-transparent tracking-wide ml-4 cursor-pointer'
          >
            <option className='text-black' value='id'>
              🇮🇩 Indonesia
            </option>
            <option className='text-black' value='en'>
              🇺🇸 English
            </option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
