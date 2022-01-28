import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

interface ServicesProps {
  // TODO_TYPING
  detailingServices: any[];
}

/** List of detailing services */
const Services: React.FC<ServicesProps> = ({ detailingServices }) => {
  /** Show More button flag */
  const [showMore, setShowMore] = useState<boolean>(true);

  /** Showed detailing services */
  const [showedList, setShowedList] = useState(detailingServices.slice(0, 3));

  /** Handle show more detailing list (all list) */
  const handleShowMoreList = () => {
    setShowedList(detailingServices);

    setShowMore(false);
  };

  return (
    <>
      <div className='flex-center-center -mb-16'>
        <div className='container px-4 md:px-0 relative -top-28'>
          <SectionTitle
            firstWords='Our'
            secondWords={'Services'}
            id='services'
          />
          <div className='cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center text-center w-full'>
            {/* Responsive alternative: Grid */}
            {/* <div className='cards-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center'> */}
            {showedList.map((service) => {
              const { sys, fields } = service;
              return (
                <Link href={`/detailing/${fields.slug}`} key={sys.id}>
                  <div className='detailing-card-container m-4 relative cursor-pointer'>
                    <Image
                      className='hover:scale-125 duration-500 brightness-30 rounded-sm detailing-card-image'
                      src={'https:' + fields.thumbnail.fields.file.url}
                      width={fields.thumbnail.fields.file.details.image.width}
                      height={fields.thumbnail.fields.file.details.image.height}
                    />
                    <div className='detailing-card-content'>
                      {/* Detailing Title / Name */}
                      <h4 className='text-xl'>{fields.name}</h4>
                      {/* Subtitle */}
                      {fields?.subtitle && (
                        <p className='text-xs text-grey opacity-80 border-t pt-1 mt-1'>
                          {fields.subtitle.toUpperCase()}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {/* Show More Services button */}
          {showMore && (
            <div className='flex-center-center'>
              <Button className='py-2' onClick={handleShowMoreList}>
                Show More Services
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        .detailing-card-container {
          max-width: 480px;
        }

        .detailing-card-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          width: 96%;
        }
      `}</style>
    </>
  );
};

export default Services;
