import Image from 'next/image';
import { ImageInterface } from 'types/detailing';

interface DetailingImagesProps {
  images: ImageInterface[];
}

const DetailingImages: React.FC<DetailingImagesProps> = (props) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {props.images?.map((image, index: number) => {
        return (
          <Image
            key={index}
            src={'https:' + image.fields.file.url}
            width={image.fields.file.details.image.width}
            height={image.fields.file.details.image.height}
          />
        );
      })}
    </div>
  );
};

export default DetailingImages;
