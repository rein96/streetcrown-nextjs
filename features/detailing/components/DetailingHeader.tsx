import Image from 'next/image';

interface DetailingHeaderProps {
  detailingName: string;
}

const DetailingHeader = (props: DetailingHeaderProps) => {
  return (
    <>
      <div
        className='w-full overflow-hidden relative'
        style={{
          height: '30vh',
        }}
      >
        <Image
          layout='fill'
          objectFit='cover'
          src='/assets/detailing-banner.jpg'
          alt='detailing'
        />
        <div className='flex absolute bottom-10 left-10'>
          <div className='left-red-line' />
          <h2 className='text-3xl font-medium text-white ml-2'>
            {props.detailingName}
          </h2>
        </div>
      </div>
    </>
  );
};

export default DetailingHeader;
