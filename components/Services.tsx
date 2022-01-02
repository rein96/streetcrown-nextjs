import Image from 'next/image';
import React from 'react';

interface ServicesProps {
  detailingServices: any[];
}

const Services: React.FC<ServicesProps> = ({ detailingServices }) => {
  return (
    <div className='flex-center-center'>
      <div className='cards-container w-full flex items-center justify-center flex-col md:flex-row text-center container'>
        {detailingServices.map((service) => {
          console.log('single service', service);
          const { sys, fields } = service;
          return (
            <div className='card-container m-4 relative' key={sys.id}>
              <Image
                className='brightness-30 rounded-sm'
                src={'https:' + fields.thumbnail.fields.file.url}
                width={fields.thumbnail.fields.file.details.image.width}
                height={fields.thumbnail.fields.file.details.image.height}
              />
              <div className='card-content'>
                <h4 className='text-xl border-b pb-1 mb-1'>{fields.name}</h4>
                <p className='text-xs text-grey opacity-80'>
                  {fields.subtitle.toUpperCase()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* CSS */}
      <style jsx>{`
        .card-container {
          max-width: 480px;
        }
        .card-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          width: 96%;
        }
      `}</style>
    </div>
  );
};

export default Services;
