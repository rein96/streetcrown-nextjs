import { ImageInterface } from 'types/detailing';
import DetailingImages from './DetailingImages';

interface DetailingContentProps {
  description: string;
  detailingName: string;
  images: ImageInterface[];
}

const DetailingContent = (props: DetailingContentProps) => {
  const { description, detailingName, images } = props;
  return (
    <div className='flex justify-center'>
      <div className='container p-4 py-10'>
        {/* Description */}
        <p className='text-white whitespace-pre-line'>{description}</p>

        {/* Images section */}
        <div className='images-section'>
          {/* Text */}
          <div className='flex my-8'>
            <div className='left-red-line' />
            <h2 className='text-xl font-medium text-white ml-2'>
              Our work for <span className='text-red'>{detailingName}</span>
            </h2>
          </div>

          {/* Images */}
          <DetailingImages images={images} />
        </div>
      </div>
    </div>
  );
};

export default DetailingContent;
