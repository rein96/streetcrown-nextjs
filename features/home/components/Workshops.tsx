import React, { useState } from 'react';
import {
  jakartaGoogleMapsLocationUrl,
  bandungGoogleMapsLocationUrl,
} from 'constants/common';
import SectionTitle from 'components/SectionTitle';
import Modal from 'components/Modal';
import Loading from 'components/Loading';
import { useRouter } from 'next/router';

type LocationMapsType = 'Jakarta' | 'Bandung';

const Workshops: React.FC = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const [iframeLoading, setIframeLoading] = useState(true);

  const workshopModalVisible = router.query?.modal === 'workshop';

  const locationMaps = router.query?.location;

  const locationGoogleMapsUrl =
    locationMaps === 'Jakarta'
      ? jakartaGoogleMapsLocationUrl
      : bandungGoogleMapsLocationUrl;

  const handleShowMaps = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const location = event.currentTarget.dataset.location as LocationMapsType;

    router.query.modal = 'workshop';
    router.query.location = location;

    router.push(
      {
        pathname: pathname,
        query: { ...query },
      },
      undefined,
      { scroll: false, shallow: true }
    );
  };

  const handleCloseMaps = () => {
    delete router.query.modal;
    delete router.query.location;
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  const handleLoadIframe = () => {
    setIframeLoading(false);
  };

  return (
    <>
      <section className='flex-center-center'>
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
      </section>

      <Modal
        visible={workshopModalVisible}
        onClose={handleCloseMaps}
        title={`StreetCrown | ${locationMaps}`}
        bodyClassName={'h-full'}
      >
        <div
          style={{ minHeight: 300 }}
          className='flex items-center justify-center flex-col'
        >
          {iframeLoading && (
            <div className='flex items-center justify-center'>
              <Loading size={64} borderSize={8} />
            </div>
          )}

          <iframe
            className='w-full'
            src={locationGoogleMapsUrl}
            width='600'
            height='450'
            style={{ border: 0 }}
            allowFullScreen={true}
            loading='lazy'
            onLoad={handleLoadIframe}
          />
        </div>
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
