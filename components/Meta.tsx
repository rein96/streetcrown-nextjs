import React from 'react';
import Head from 'next/head';
import { SITE_URL } from 'constants/common';

type MetaProps = {
  canonicalUrl?: string;
  siteDescription?: string;
  title?: string;
  keywords?: string;
  icon?: string;
  description?: string;
  ogTitle?: string;
  ogType?: string;
  ogLocale?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogImage?: string;
};

const Meta: React.FC<MetaProps> = ({
  canonicalUrl = SITE_URL,
  title = 'StreetCrown',
  keywords = 'nano coating, nano ceramic coating, interior, detailing, jakarta, sunter, bandung',
  icon = '/favicon.ico',
  description = 'StreetCrown Auto Detailing adalah Auto Detailer, Nano ceramic coating, untuk mobil dan motor di Sunter Jakarta Utara dan Bandung',
  ogTitle = 'StreetCrown',
  ogType = 'website',
  ogLocale = 'id',
  ogDescription = 'StreetCrown Auto Detailing adalah Auto Detailer, Nano ceramic coating, untuk mobil dan motor di Sunter Jakarta Utara dan Bandung',
  ogUrl = SITE_URL,
  ogSiteName = 'StreetCrown',
  ogImage = '/streetcrown-square-logo.jpg',
  children,
}) => {
  ogImage = ogImage != null ? ogImage : '/streetcrown-square-logo.jpg';
  return (
    <Head>
      <meta charSet='UTF-8' />
      <title>{title}</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='keywords' content={keywords} key='metakeywords' />
      <link rel='icon' href={icon} key='metaicon' />
      <link rel='canonical' href={canonicalUrl} key='metacanonical' />
      <meta
        name='robots'
        content='index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        key='metarobots'
      />
      <meta name='description' content={description} key='metadescription' />
      <meta property='og:title' content={ogTitle} key='ogtitle' />
      <meta property='og:type' content={ogType} key='ogtype' />
      <meta property='og:locale' content={ogLocale} key='oglocale' />
      <meta
        property='og:description'
        content={ogDescription}
        key='ogdescription'
      />
      <meta property='og:url' content={ogUrl} key='ogurl' />
      <meta property='og:site_name' content={ogSiteName} key='ogsitename' />
      <meta
        property='og:image'
        // content={`${SITE_URL}${ogImage}`}
        content='/assets/streetcrown-square-logo.png'
        key='ogimage'
      />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:image' content={ogImage} />
      {/* Source: https://favicon.io/favicon-converter/ */}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <link rel='manifest' href='/site.webmanifest' />

      {children}
    </Head>
  );
};

export default Meta;
