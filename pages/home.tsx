import Hero from 'components/Hero';
import Layout from 'components/Layout/Layout';
import Services from 'components/Services';
import Location from 'components/Workshops';
import { createClient } from 'contentful';
import dynamic from 'next/dynamic';
import React from 'react';

const BeforeAfter = dynamic(() => import('components/BeforeAfter'), {
  ssr: false,
});

interface HomePageProps {
  detailingServices: any[];
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res: any = await client.getEntries({
    content_type: 'serviceList',
    locale: 'en-US', // 'id' or 'en-US'
  });

  return {
    props: {
      detailingServices: res.items[0].fields.services,
    },
  };
};

const HomePage: React.FC<HomePageProps> = ({ detailingServices }) => {
  return (
    <Layout>
      <Hero />
      <Services detailingServices={detailingServices} />
      <BeforeAfter />
      <Location />
    </Layout>
  );
};

export default HomePage;
