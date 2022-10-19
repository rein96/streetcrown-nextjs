import Image from 'next/image';
import { ImageInterface } from 'types/detailing';

interface DetailingImagesProps {
  images: ImageInterface[];
  detailingName: string;
}

const DetailingImages: React.FC<DetailingImagesProps> = (props) => {
  const { images, detailingName } = props;
  return (
    <div className='images-section'>
      {/* Text */}
      <div className='flex my-8'>
        <div className='left-red-line' />
        <h2 className='text-xl font-medium text-white ml-2'>
          Our work for <span className='text-red'>{detailingName}</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {images?.map((image, index: number) => {
          return (
            <Image
              key={index}
              src={'https:' + image.fields.file.url}
              width={image.fields.file.details.image.width}
              height={image.fields.file.details.image.height}
              alt={image.fields.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DetailingImages;
