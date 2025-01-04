import { locales } from '@/config/locales';

const BASE_URL = 'https://target-line.vercel.app';

const getAlternates = (path: string) => ({
  en: `${BASE_URL}/en${path}`,
  da: `${BASE_URL}/da${path}`,
});

const createBaseEntry = (
  path: string,
  changeFrequency: string,
  priority: number
) => ({
  url: `${BASE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency,
  priority,
  alternates: {
    languages: getAlternates(path),
  },
});

const basePaths = [
  { path: '/', changeFrequency: 'daily', priority: 1 },
  { path: '/about', changeFrequency: 'weekly', priority: 1 },
];

const generateBaseEntries = () => {
  return basePaths.map(({ path, changeFrequency, priority }) =>
    createBaseEntry(path, changeFrequency, priority)
  );
};

export default async function sitemap() {
  let sitemapEntries = generateBaseEntries();

  try {
    const now = new Date();

    for (const locale of locales) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      const programSlugs = await getProgramsSitemap({ params: { locale } });

      const programEntries = programSlugs.map((slug: string) => ({
        url: `${BASE_URL}/${locale}/programs/${slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: getAlternates(`/programs/${slug}`),
        },
      }));

      sitemapEntries = sitemapEntries.concat(programEntries);
    }

    return sitemapEntries;
  } catch (error) {
    return [];
  }
}
