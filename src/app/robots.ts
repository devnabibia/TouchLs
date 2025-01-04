export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://target-line.vercel.app/sitemap.xml',
  };
}
