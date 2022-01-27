import Button from 'components/Button';
import Layout from 'components/Layout/Layout';
import { createClient } from 'contentful';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

interface DetailingPageParams extends ParsedUrlQuery {
  slug: string;
}
interface DetailingPageProps {
  // TODO_TYPING: add typing []
  detailingService: any;
  locale?: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths: GetStaticPaths<DetailingPageParams> = async ({
  locales,
}) => {
  // TODO_TYPING
  const res: any = await client.getEntries({
    content_type: 'detailing',
  });

  const paths = [];
  locales.map((locale: 'en' | 'id') => {
    // TODO_TYPING
    return res.items.map((item: any) => {
      paths.push({
        params: {
          slug: item.fields.slug,
        },
        locale: locale,
      });
    });
  });

  // Example output of paths
  // [ { params: { slug: 'nano-ceramic-coating' }, locale: 'id' },
  // { params: { slug: 'nano-ceramic-coating' }, locale: 'en' },
  // { params: ...}, ... ]
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<DetailingPageProps> = async ({
  params,
  locale,
}) => {
  const { items } = await client.getEntries({
    content_type: 'detailing',
    'fields.slug': params.slug,
    locale: locale,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      detailingService: items[0],
      locale: locale,
    },
    revalidate: 1,
  };
};

const DetailingPage: React.FC<DetailingPageProps> = ({
  detailingService,
  locale,
}) => {
  const fields = detailingService?.fields;
  const { name, description, images } = fields || {};
  return (
    <Layout>
      <div className='detailing-page-container'>
        {/* Banner Image */}
        <div
          className='w-full overflow-hidden relative'
          style={{ height: '30vh' }}
        >
          <Image
            layout='fill'
            objectFit='cover'
            src='/assets/detailing-banner.jpg'
          />
          <div className='flex absolute bottom-10 left-10'>
            <div className='left-red-line' />
            <h2 className='text-3xl font-medium text-white ml-2'>{name}</h2>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='container p-4 py-10'>
          {/* Description */}
          {/* TODO: delete locale */}
          <p className='text-red whitespace-pre-line'>{locale}</p>
          <p className='text-white whitespace-pre-line'>{description}</p>

          {/* Images section */}
          <div className='images-section'>
            {/* Text */}
            <div className='flex my-8'>
              <div className='left-red-line' />
              <h2 className='text-xl font-medium text-white ml-2'>
                Our work for{' '}
                <span className='text-red'>Nano Ceramic coating</span>
              </h2>
            </div>

            {/* Images */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
              {images?.map((image: any, index: number) => {
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
          </div>

          {/* Button */}
          <div className='flex justify-center mt-6'>
            <Button className='py-2'>Load More</Button>
          </div>
        </div>
      </div>

      {/* Contact Us Banner */}
      <div
        className='w-full overflow-hidden relative mb-8'
        style={{ height: '40vh' }}
      >
        <div className='contact-banner-content flex flex-col absolute z-10 w-full text-center'>
          <h4 className='text-xl font-medium text-white'>
            Contact Us for <span className='text-red'>{name}</span>
          </h4>
          <div className='flex justify-center mt-4'>
            <Button className='py-2'>Send Message</Button>
          </div>
        </div>
        <Image layout='fill' objectFit='cover' src='/assets/dark-benz.jpg' />
      </div>

      {/* CSS */}
      <style jsx>{`
        .left-red-line {
          width: 12px;
          background-color: var(--red-ds);
        }

        .contact-banner-content {
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
        }
      `}</style>
    </Layout>
  );
};

export default DetailingPage;
