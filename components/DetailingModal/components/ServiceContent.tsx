import Button from 'components/Button';
import { useTranslation } from 'hooks';

interface ServiceContentProps {
  serviceType: string | null;
  handleServiceType: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  serviceType,
  handleServiceType,
}) => {
  const translate = useTranslation();
  const services = ['Workshop', 'Pickup & Delivery'];
  return (
    <div className='service-element mt-8 p-4 flex justify-center animation-fadeIn'>
      <div className='flex flex-col'>
        <p className='text-white text-xl mb-6'>
          {translate.detailing_my_auto}:
        </p>
        {services.map((service) => {
          const isLocationSelected =
            service.toLowerCase() === serviceType?.toLowerCase();

          return (
            <Button
              key={service}
              className={`${isLocationSelected ? 'bg-green' : 'bg-red'} mb-6`}
              data-service={service.toLowerCase()}
              onClick={handleServiceType}
            >
              {service}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceContent;
