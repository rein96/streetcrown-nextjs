import About from 'components/About';
import Hero from 'components/Hero';
import Layout from 'components/Layout/Layout';
import Meta from 'components/Meta';
import Services from 'components/Services';
import WhyChooseUs from 'components/WhyChooseUs';
import Location from 'components/Workshops';
import { createClient } from 'contentful';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { DetailingServiceType } from 'types/detailing';

/** Dynamic import to prevent getting error of 'window' in build time */
const BeforeAfter = dynamic(() => import('components/BeforeAfter'), {
  ssr: false,
});

interface HomePageProps {
  detailingServices: DetailingServiceType[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({
  locale,
}) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res: any = await client.getEntries({
    content_type: 'serviceList',
    locale: locale, // 'id' or 'en'
  });

  return {
    props: {
      detailingServices: res.items[0].fields.services,
    },
    revalidate: Number(process.env.REVALIDATE_SECONDS),
  };
};

const HomePage: NextPage<HomePageProps> = ({ detailingServices }) => {
  return (
    <Layout>
      <Meta />
      <Hero detailingServices={detailingServices} />
      <Services detailingServices={detailingServices} />
      <About />
      <WhyChooseUs />
      <BeforeAfter />
      <Location />
    </Layout>
  );
};

export default HomePage;
