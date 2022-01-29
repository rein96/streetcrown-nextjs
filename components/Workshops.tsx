import React, { useState } from 'react';
import Modal from './Modal';
import SectionTitle from './SectionTitle';
import {
  jakartaGoogleMapsLocationUrl,
  bandungGoogleMapsLocationUrl,
} from 'constants/common';

type LocationMapsType = 'Jakarta' | 'Bandung' | string | null;

const Workshops: React.FC = () => {
  const [locationMaps, setLocationMaps] = useState<LocationMapsType>(null);

  const locationGoogleMapsUrl =
    locationMaps === 'Jakarta'
      ? jakartaGoogleMapsLocationUrl
      : bandungGoogleMapsLocationUrl;

  const handleShowMaps = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const location = event.currentTarget.dataset.location;

    setLocationMaps(location);
  };

  const handleCloseMaps = () => {
    setLocationMaps(null);
  };

  return (
    <>
      <div className='flex-center-center'>
        <div className='container px-4 md:px-0 mb-20'>
          <SectionTitle
            id='workshops'
            firstWords='Our'
            secondWords={'Workshops'}
            className='mb-20 mt-20 pt-8 border-t border-grey'
          />
          <div className='flex items-center justify-center flex-col sm:flex-row'>
            <div
              className='px-6 py-6 sm:py-0'
              data-location='Jakarta'
              onClick={handleShowMaps}
            >
              <div className='workshop-item flex items-center justify-center bg-red font-medium text-center text-white text-2xl cursor-pointer'>
                Jakarta
              </div>
            </div>

            <div
              className='px-6 py-6 sm:py-0'
              data-location='Bandung'
              onClick={handleShowMaps}
            >
              <div className='workshop-item flex items-center justify-center bg-red font-medium text-center text-white text-2xl cursor-pointer'>
                Bandung
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        visible={!!locationMaps}
        onClose={handleCloseMaps}
        title={`StreetCrown | ${locationMaps}`}
        bodyClassName={'h-full'}
      >
        <iframe
          className='w-full'
          src={locationGoogleMapsUrl}
          width='600'
          height='450'
          style={{ border: 0 }}
          allowFullScreen={true}
          loading='lazy'
        />
      </Modal>
      <style jsx>{`
        .workshop-item {
          box-shadow: 0px 12px 20px #ff000072;
          border-radius: 20px;
          width: 300px;
          height: 100px;
        }
      `}</style>
    </>
  );
};

export default Workshops;
