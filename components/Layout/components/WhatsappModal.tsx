import Button from 'components/Button';
import Modal from 'components/Modal';
import {
  BANDUNG_WHATSAPP_NUMBER,
  JAKARTA_WHATSAPP_NUMBER,
  LOCATIONS,
} from 'constants/common';
import { useTranslation } from 'hooks';
import React from 'react';
import { WorkshopLocationType } from 'types/detailing';

interface WhatsappModalProps {
  visible: boolean;
  onClose: () => void;
}

const WhatsappModal = ({ visible, onClose }: WhatsappModalProps) => {
  const translation = useTranslation();

  const primaryButtonConfig = {
    text: 'Close',
    onClick: () => onClose(),
  };

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleOpenWhatsapp = (event: React.MouseEvent<HTMLButtonElement>) => {
    const location = event.currentTarget.dataset
      .location as WorkshopLocationType;

    const phoneNumber =
      location === 'Bandung'
        ? BANDUNG_WHATSAPP_NUMBER
        : JAKARTA_WHATSAPP_NUMBER;

    openInNewTab(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Halo%20streetcrown.id!`
    );
  };

  return (
    <Modal
      visible={visible}
      onClose={onClose}
      title='Contact Us'
      primaryButton={primaryButtonConfig}
    >
      <div className='flex flex-col justify-center h-full'>
        <p className='text-white text-center mb-2'>
          {translation.direct_whatsapp_us}
        </p>
        {LOCATIONS.map((location) => {
          return (
            <Button
              key={location}
              className={'bg-red mb-6'}
              data-location={location}
              onClick={handleOpenWhatsapp}
            >
              {location}
            </Button>
          );
        })}
      </div>
    </Modal>
  );
};

export default WhatsappModal;
