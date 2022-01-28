import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

/** StreetCrown logo with forwardRef */
const StreetCrownLogo = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  return (
    <a ref={ref} {...props}>
      <Image
        alt='Logo'
        className='w-24 md:w-32'
        src='/assets/streetcrown-logo-transparent.svg'
        width={100}
        height={50}
      />
    </a>
  );
});

StreetCrownLogo.displayName = 'StreetCrownLogo';

/** Reusable Header / Navbar */
const Header = () => {
  const router = useRouter();

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

        {/* <Link href={'/'}>
          <span className='streetcrown-title-navbar sm:hidden text-white text-lg'>StreetCrown</span>
        </Link> */}

        {/* Hamburger menu */}
        <button
          className='sm:hidden text-white'
          // onClick={() => setIsMenuOpen(true)}
          aria-label='Open Menu'
        >
          <Image src={'/assets/hamburger.svg'} width={30} height={30} />
          {/* <FaBars className="h-6 w-auto text-white fill-current -mt-1" /> */}
        </button>

        {/* Nav menu on tab and pc resolution */}
        {/* <div className="hidden sm:block text-white">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className="ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white"
              activeClassName="border-red-600 hover:border-red-600"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      /> */}

        {/* Nav menu on larger width */}
        <div className='hidden sm:block text-white'>
          {/* Navbar items */}
          {navItems.map((item) => {
            return (
              <a
                href={`#${item.name.toLowerCase()}`}
                className='ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white cursor-pointer'
              >
                {item.name}
              </a>
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
