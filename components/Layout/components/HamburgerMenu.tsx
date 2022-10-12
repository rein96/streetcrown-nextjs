import Image from 'next/image';

interface HamburgerMenuProps {
  handleShowMobileMenu: () => void;
}

function HamburgerMenu(props: HamburgerMenuProps) {
  return (
    <button
      className='sm:hidden text-white'
      onClick={props.handleShowMobileMenu}
      aria-label='Open Menu'
    >
      <Image
        src={'/assets/hamburger.svg'}
        width={30}
        height={30}
        alt='hamburger'
      />
    </button>
  );
}

export default HamburgerMenu;
