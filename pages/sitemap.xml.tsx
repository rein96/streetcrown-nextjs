import { contentfulClient } from 'lib/contentful';

const toUrl = (host, route, languages) =>
  languages
    .map(
      (lang) =>
        `<url><loc>http://www.${host}${
          lang === 'id' ? '' : `/${lang}`
        }${route}</loc></url>`
    )
    .join('');

const createSitemap = (
  host,
  routes,
  detailingSlugs,
  languages
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => toUrl(host, route, languages)).join('')}
    ${detailingSlugs
      .map((product) => toUrl(host, `/detailing/${product}`, languages))
      .join('')}
    </urlset>`;

const Sitemap = () => {};

Sitemap.getInitialProps = async ({ res, req }) => {
  const contentfulResponse = await contentfulClient.getEntries({
    content_type: 'detailing',
  });

  const routes = ['']; // for now, it's only home url
  const detailingSlugs: string[] = contentfulResponse.items.map(
    (item: any) => item.fields.slug
  );
  const languages = ['id', 'en'];
  const sitemap = createSitemap(
    req.headers.host,
    routes,
    detailingSlugs,
    languages
  );

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
  return res;
};

export default Sitemap;
