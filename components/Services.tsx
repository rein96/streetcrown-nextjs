import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import SectionTitle from './SectionTitle';

interface ServicesProps {
  detailingServices: any[];
}

const Services: React.FC<ServicesProps> = ({ detailingServices }) => {
  return (
    <>
      <div className='flex-center-center -mb-16'>
        <div className='container relative -top-28'>
          <SectionTitle firstWords='Our' secondWords={'Services'} />
          <div className='cards-container w-full flex items-center justify-center flex-col md:flex-row text-center'>
            {detailingServices.map((service) => {
              console.log('single service', service);
              const { sys, fields } = service;
              return (
                <Link href={`/detailing/${fields.slug}`} key={sys.id}>
                  <div className='detailing-card-container m-4 relative cursor-pointer'>
                    <Image
                      className='brightness-30 rounded-sm detailing-card-image'
                      src={'https:' + fields.thumbnail.fields.file.url}
                      width={fields.thumbnail.fields.file.details.image.width}
                      height={fields.thumbnail.fields.file.details.image.height}
                    />
                    <div className='detailing-card-content'>
                      <h4 className='text-xl border-b pb-1 mb-1'>
                        {fields.name}
                      </h4>
                      <p className='text-xs text-grey opacity-80'>
                        {fields.subtitle.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className='flex-center-center'>
            <Button className='py-2'>Load More Services</Button>
          </div>
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
