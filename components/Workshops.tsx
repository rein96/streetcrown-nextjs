import React from 'react';
import SectionTitle from './SectionTitle';

const Workshops: React.FC = () => {
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
            <div className='px-6 py-6 sm:py-0'>
              <div className='workshop-item flex items-center justify-center bg-red font-medium text-center text-white text-2xl cursor-pointer'>
                Jakarta
              </div>
            </div>

            <div className='px-6 py-6 sm:py-0'>
              <div className='workshop-item flex items-center justify-center bg-red font-medium text-center text-white text-2xl cursor-pointer'>
                Bandung
              </div>
            </div>
          </div>
        </div>
      </div>
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
