import Hero from 'components/Hero';
import Layout from 'components/Layout/Layout';
import Services from 'components/Services';
import Location from 'components/Workshops';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

/** Dynamic import to prevent getting error of 'window' in build time */
const BeforeAfter = dynamic(() => import('components/BeforeAfter'), {
  ssr: false,
});

interface HomePageProps {
  // TODO_TYPING
  detailingServices: any[];
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
  };
};

const HomePage: React.FC<HomePageProps> = ({ detailingServices }) => {
  // TODO: change to <Section> whenever there is heading in a component
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
