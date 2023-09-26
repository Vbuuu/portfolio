import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Blog',
    description: 'My learning journey',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./blog/*.md')),
    customData: '<language>de-de</language>',
  });
}
