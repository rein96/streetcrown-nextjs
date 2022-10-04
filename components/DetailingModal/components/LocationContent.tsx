import Button from 'components/Button';
import { useTranslation } from 'hooks';
import { WorkshopLocationType } from '../DetailingModal';

interface LocationContentProps {
  workshopLocation: WorkshopLocationType;
  handleWorkshopLocation: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const LocationContent: React.FC<LocationContentProps> = ({
  workshopLocation,
  handleWorkshopLocation,
}) => {
  const translate = useTranslation();
  const locations = ['Jakarta', 'Bandung'];

  return (
    <div className='location-element mt-8 p-4 flex justify-center animation-fadeIn'>
      <div className='flex flex-col'>
        <p className='text-white text-xl mb-6'>
          {translate.choose_our_workshop_location}:
        </p>
        {locations.map((location) => {
          const isLocationSelected =
            location.toLowerCase() === workshopLocation?.toLowerCase();
          return (
            <Button
              key={location}
              className={`${isLocationSelected ? 'bg-green' : 'bg-red'} mb-6`}
              data-location={location.toLowerCase()}
              onClick={handleWorkshopLocation}
            >
              {location}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default LocationContent;
