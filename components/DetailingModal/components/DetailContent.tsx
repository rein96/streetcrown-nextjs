import { DetailingServiceType } from 'types/detailing';
import { getTodayDate } from 'utils';
import { DetailingFormType } from '../DetailingModal';

interface DetailContentProps {
  handleFormDetail: (event: React.FormEvent) => void;
  formFields: DetailingFormType;
  handleInputChange: (event: any) => void;
  detailingServices: DetailingServiceType[];
}

/** Render Detail Element */
const DetailContent: React.FC<DetailContentProps> = ({
  handleFormDetail,
  formFields,
  handleInputChange,
  detailingServices,
}) => {
  return (
    <form onSubmit={handleFormDetail}>
      <div className='detailing-element mt-8 animation-fadeIn'>
        <div>
          <div className='flex flex-col'>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Name
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='name'
                    value={formFields.name}
                    onChange={handleInputChange}
                    placeholder='Example: John Doe'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Phone Number
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='phoneNumber'
                    value={formFields.phoneNumber}
                    onChange={handleInputChange}
                    type='number'
                    placeholder='Example: 628123456789'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Auto Brand & Type
                <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
                  <input
                    name='autoBrand'
                    value={formFields.autoBrand}
                    onChange={handleInputChange}
                    placeholder='Example: Toyota Camry or Vespa LX 125'
                    className='p-1 px-2 appearance-none outline-none w-full text-black'
                  />{' '}
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Service{' '}
                <p className='text-grey inline-block text-xs opacity-60 ml-1'>
                  (optional)
                </p>
                <div className='my-2 p-1'>
                  <select
                    name='detailingService'
                    onChange={handleInputChange}
                    defaultValue={formFields.detailingService}
                    className='cursor-pointer p-2 text-black text-lg text-shadow-sm tracking-wide'
                  >
                    <option className='text-black' value='-'>
                      Select Detailing Service
                    </option>
                    {detailingServices.map((service) => {
                      const { sys, fields } = service;
                      return (
                        <option
                          key={sys.id}
                          className='text-black'
                          value={fields.name}
                        >
                          {fields.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </label>
            </div>
            <div className='mx-2 flex-1 mt-4'>
              <label className='text-white font-bold h-6 mt-3 text-gray-600 text-sm leading-8 uppercase'>
                {' '}
                Booking Date
                <p className='text-grey inline-block text-xs opacity-60 ml-1'>
                  (optional)
                </p>
                <div className='my-2 p-1'>
                  <input
                    name='bookingDate'
                    type='date'
                    id='date'
                    min={getTodayDate()}
                    value={formFields.bookingDate}
                    onChange={handleInputChange}
                    className='text-black'
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DetailContent;
