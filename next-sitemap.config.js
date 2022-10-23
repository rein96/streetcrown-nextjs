/** @type {import('next-sitemap').IConfig} */
// ✅ next-sitemap will load environment variables from .env files by default.
module.exports = {
  siteUrl: 'https://streetcrown.id',
  generateRobotsTxt: true, // (optional)
  // ...other options
  exclude: ['/sentry_sample_error'],
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  alternateRefs: [
    {
      href: 'https://streetcrown.id',
      hreflang: 'id',
    },
    {
      href: 'https://streetcrown.id/en',
      hreflang: 'en',
    },
  ],
};
