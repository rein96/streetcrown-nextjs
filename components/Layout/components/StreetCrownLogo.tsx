import React from 'react';
import Image from 'next/image';

/** StreetCrown logo with forwardRef */
const StreetCrownLogo = React.forwardRef<HTMLAnchorElement>((props, ref) => {
  const height = 40;
  return (
    <a ref={ref} style={{ height }} {...props}>
      <Image
        alt='Logo'
        className='w-24 md:w-32'
        src='/assets/streetcrown-logo-transparent.png'
        width={100}
        height={height}
      />
    </a>
  );
});

StreetCrownLogo.displayName = 'StreetCrownLogo';

export default StreetCrownLogo;
