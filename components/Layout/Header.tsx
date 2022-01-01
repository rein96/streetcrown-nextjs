// import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import MenuMobile from "./MenuMobile"
// import { FaBars } from "react-icons/fa"
// import './Header.scss'

const Header = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const { site } = useStaticQuery(graphql`
  //   query {
  //     site {
  //       data: siteMetadata {
  //         menu {
  //           name
  //           to
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <header className='header p-3 w-full shadow-md'>
      <nav className='flex justify-between items-center'>
        {/* Logo */}
        <Link href={'/'}>
          <Image
            alt='Logo'
            className='w-24 md:w-32'
            src='/assets/streetcrown-logo-transparent.svg'
            width={100}
            height={50}
          />
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
        <div className='hidden sm:block text-white'>
          <a className='ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white cursor-pointer'>
            Services
          </a>
          <a className='ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white cursor-pointer'>
            Before & After
          </a>
          <a className='ml-6 sm:ml-8 text-sm sm:text-base font-medium px-px border-b-2 pb-2 border-transparent hover:border-red-200 transition duration-150 ease-in-out text-white cursor-pointer'>
            Workshops
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
