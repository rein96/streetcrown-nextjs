import React from 'react';
import Head from 'next/head';
import { SITE_URL } from 'constants/common';
import { useRouter } from 'next/router';

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
  title = 'StreetCrown',
  keywords = 'nano coating, nano ceramic coating, interior, detailing, jakarta, sunter, bandung',
  icon = '/favicon.ico',
  description = 'StreetCrown Auto Detailing adalah Auto Detailer, Nano ceramic coating, untuk mobil dan motor di Sunter Jakarta Utara dan Bandung',
  ogTitle = 'StreetCrown',
  ogType = 'website',
  ogLocale = 'id',
  ogDescription = 'StreetCrown Auto Detailing adalah Auto Detailer, Nano ceramic coating, untuk mobil dan motor di Sunter Jakarta Utara dan Bandung',
  canonicalUrl,
  ogUrl,
  ogSiteName = 'StreetCrown',
  ogImage,
  children,
}) => {
  const router = useRouter();

  ogImage =
    ogImage != null ? ogImage : `${SITE_URL}/streetcrown-square-logo.jpg`;

  canonicalUrl = !!canonicalUrl ? canonicalUrl : `${SITE_URL}/${router.locale}`;

  ogUrl = !!ogUrl ? ogUrl : `${SITE_URL}/${router.locale}`;

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
      <meta name='googlebot' content='index,follow' />
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
      <meta property='og:image' content={`${ogImage}`} key='ogimage' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:image' content={ogImage} />
      <meta name='theme-color' content='#262B31' />

      {/* Render link hrefLang based on locales */}
      {router.locales.map((locale) => {
        return (
          <link
            key={locale}
            rel='alternate'
            hrefLang={locale}
            href={`${SITE_URL}/${locale}${router.asPath}`}
          />
        );
      })}
      <link rel='alternate' hrefLang='x-default' href={SITE_URL} />

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
