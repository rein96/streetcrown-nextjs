import { useTranslation } from 'hooks';
import { ImageInterface } from 'types/detailing';
import { rupiahFormatter } from 'utils';
import DetailingImages from './DetailingImages';

interface DetailingContentProps {
  description: string;
  detailingName: string;
  images: ImageInterface[];
  smallPrice: number;
}

const DetailingContent = (props: DetailingContentProps) => {
  const { description, detailingName, images, smallPrice } = props;

  const translate = useTranslation();

  return (
    <div className='flex justify-center'>
      <div className='container p-4 py-10'>
        {/* Description */}
        <p className='text-white whitespace-pre-line'>{description}</p>

        {/* Pricing */}
        <div className='flex bottom-10 left-10 mt-8'>
          <div className='left-red-line' />
          <h2 className='text-xl font-medium text-white ml-2'>Pricing</h2>
        </div>
        <p className='text-white mt-3'>
          {translate.start_from} {rupiahFormatter(smallPrice)}
        </p>

        {/* Images section */}
        <DetailingImages images={images} detailingName={detailingName} />
      </div>
    </div>
  );
};

export default DetailingContent;
