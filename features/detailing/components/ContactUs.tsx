import Button from 'components/Button';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface ContactUsProps {
  detailingName: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ detailingName }) => {
  const router = useRouter();
  const { pathname, query } = router;

  const handleShowModal = () => {
    router.query.modal = 'detailing';

    router.push(
      {
        pathname: pathname,
        query: { ...query },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  return (
    <>
      <div
        className='w-full overflow-hidden relative mb-8'
        style={{
          height: '40vh',
        }}
      >
        <div className='contact-banner-content flex flex-col absolute z-10 w-full text-center'>
          <p className='text-xl font-medium text-white mx-1'>
            Contact Us for{' '}
            <span className='text-red tracking-normal'>{detailingName}</span>
          </p>
          <div className='flex justify-center mt-4'>
            <Button className='py-2' onClick={handleShowModal}>
              Contact Us
            </Button>
          </div>
        </div>
        <Image
          layout='fill'
          objectFit='cover'
          src='/assets/dark-benz.jpg'
          alt='dark sedan'
        />
      </div>

      {/* CSS */}
      <style jsx>
        {`
          .contact-banner-content {
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
          }
        `}
      </style>
    </>
  );
};

export default ContactUs;
