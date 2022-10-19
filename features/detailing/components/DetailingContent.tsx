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
        <DetailingImages images={images} detailingName={detailingName} />
      </div>
    </div>
  );
};

export default DetailingContent;
