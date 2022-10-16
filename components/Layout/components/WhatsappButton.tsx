import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import WhatsappModal from './WhatsappModal';

const WhatsappButton = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const whatsappModalVisible = router.query?.modal === 'whatsapp';

  const handleShowModal = () => {
    router.query.modal = 'whatsapp';

    router.push(
      {
        pathname: pathname,
        query: { ...query },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  const handleCloseModal = () => {
    delete router.query.modal;
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  return (
    <div
      onClick={handleShowModal}
      className='fixed bg-red bottom-4 right-4 p-2 rounded-full flex items-center justify-center w-14 h-14 cursor-pointer'
    >
      <Image src='/assets/whatsapp.svg' alt='whatsapp' width={28} height={28} />

      <WhatsappModal
        visible={whatsappModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default React.memo(WhatsappButton);
