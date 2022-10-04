import React from 'react';
import Modal from 'components/Modal';
import {
  BANDUNG_WHATSAPP_NUMBER,
  JAKARTA_WHATSAPP_NUMBER,
} from 'constants/common';
import { useTranslation } from 'hooks';
import { useRouter } from 'next/router';
import PaperPlane from './PaperPlane';
import Button from 'components/Button';
import { DetailingFormType, WorkshopLocationType } from '../DetailingModal';

interface SuccessModalProps {
  visible: boolean;
  onClick: () => void;
  workshopLocation: WorkshopLocationType;
  formFields: DetailingFormType;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  visible,
  onClick,
  workshopLocation,
  formFields,
}) => {
  const { locale } = useRouter();
  const translate = useTranslation();

  /** Handle Send WhatsApp */
  const handleSendWhatsApp = () => {
    const adminNumber: string =
      workshopLocation === 'jakarta'
        ? JAKARTA_WHATSAPP_NUMBER
        : BANDUNG_WHATSAPP_NUMBER;

    if (locale === 'id')
      // Open Whatsapp with Indonesian wording
      return window.open(
        `https://api.whatsapp.com/send?phone=${adminNumber}&text=Hi%20StreetCrown%2C%20saya%20baru%20saja%20booking%20dari%20website%2C%20berikut%20detailnya%3A%0A%0ANama%3A%20${formFields.name}%0AService%20Type%3A%20${workshopLocation}%0AVehicle%3A%20${formFields.autoBrand}%0ADetailing%20Service%3A%20${formFields.detailingService}%0ABooking%20Date%3A%20${formFields.bookingDate}`
      );

    // Open Whatsapp with English wording
    return window.open(
      `https://api.whatsapp.com/send?phone=${adminNumber}&text=Hi%20StreetCrown%2C%20I%20have%20booked%20from%20your%20website%2C%20here%20is%20the%20detail%3A%0A%0ANama%3A%20${formFields.name}%0AService%20Type%3A%20${workshopLocation}%0AVehicle%3A%20${formFields.autoBrand}%0ADetailing%20Service%3A%20${formFields.detailingService}%0ABooking%20Date%3A%20${formFields.bookingDate}`
    );
  };

  return (
    <Modal visible={visible} onClose={onClick} withBorder={false}>
      <div className='success-modal flex flex-col items-center justify-center text-white h-full'>
        <PaperPlane />
        <p className='font-bold mt-5 text-2xl text-green'>
          {translate.booking_form_sent}
        </p>
        <p className='mt-3'>{translate.contact_you} </p>
        <p className='mt-9 text-center'>{translate.booking_form_whatsapp}</p>
        <Button className='bg-green mt-5' onClick={handleSendWhatsApp}>
          {translate.send_whatsapp}
        </Button>
      </div>
    </Modal>
  );
};

export default SuccessModal;
