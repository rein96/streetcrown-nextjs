import React from 'react';
import Layout from 'components/Layout/Layout';
import Meta from 'components/Meta';
import { SITE_URL } from 'constants/common';
import {
  DetailingFieldsType,
  DetailingServiceType,
  LocaleType,
} from 'types/detailing';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { contentfulClient } from 'lib/contentful';
import { DetailingModal } from 'components/DetailingModal';
import { useRouter } from 'next/router';
import {
  ContactUs,
  DetailingContent,
  DetailingHeader,
} from 'features/detailing/components';

interface DetailingPageParams extends ParsedUrlQuery {
  slug: string;
}
interface DetailingPageProps {
  detailingServices: DetailingServiceType[];
  detailingService: DetailingServiceType;
  locale?: string;
}

export const getStaticPaths: GetStaticPaths<DetailingPageParams> = async ({
  locales,
}) => {
  // TODO_TYPING
  const res: any = await contentfulClient.getEntries({
    content_type: 'detailing',
  });

  const paths = [];
  locales.map((locale: LocaleType) => {
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
    fallback: 'blocking',
    // 'fallback: blocking' will server-render pages
    // on-demand if the path doesn't exist.
    // the response is blocked until a new page is ready
  };
};

export const getStaticProps: GetStaticProps<DetailingPageProps> = async ({
  params,
  locale,
}) => {
  const { items }: any = await contentfulClient.getEntries({
    content_type: 'detailing',
    'fields.slug': params.slug,
    locale: locale,
  });

  const res: any = await contentfulClient.getEntries({
    content_type: 'serviceList',
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
      detailingServices: res.items[0].fields?.services,
      detailingService: items[0],
      locale: locale,
    },
    revalidate: Number(process.env.REVALIDATE_SECONDS),
  };
};

const DetailingPage: React.FC<DetailingPageProps> = ({
  detailingServices,
  detailingService,
  locale,
}) => {
  const router = useRouter();

  const { pathname, query } = router;

  const detailingModalVisible = router.query?.modal === 'detailing';

  const fields: DetailingFieldsType = detailingService?.fields;
  const { name, description, images, slug, smallPrice, thumbnail } = fields;

  const defaultDetailingService = detailingService.fields.name;

  const handleCloseModal = () => {
    delete router.query.modal;
    router.replace({ pathname, query }, undefined, { shallow: true });
  };

  return (
    <Layout>
      <Meta
        title={`${name} | StreetCrown`}
        description={description}
        ogDescription={description}
        canonicalUrl={`${SITE_URL}/${router.locale}/detailing/${slug}`}
        ogUrl={`${SITE_URL}/${router.locale}/detailing/${slug}`}
        ogImage={'https:' + thumbnail.fields.file.url}
        keywords={`streetcrown, detailing, coating, ${name}`}
      />
      {/* Banner Image */}
      <DetailingHeader detailingName={name} />

      <DetailingContent
        detailingName={name}
        description={description}
        images={images}
        smallPrice={smallPrice}
      />

      {/* Contact Us Banner */}
      <ContactUs detailingName={name} />

      <DetailingModal
        visible={detailingModalVisible}
        onClose={handleCloseModal}
        detailingServices={detailingServices}
        defaultDetailingService={defaultDetailingService}
      />
    </Layout>
  );
};

export default DetailingPage;
