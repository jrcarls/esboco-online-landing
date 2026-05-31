// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://esbocoonline.com.br',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/blob/') &&
        !page.includes('/termos-de-uso/') &&
        !page.includes('/privacidade/'),
      serialize(item) {
        /** @type {Record<string, string>} */
        const blogDates = {
          'https://esbocoonline.com.br/blog/agenda-ministerial-digital/': '2026-05-22',
          'https://esbocoonline.com.br/blog/como-organizar-seus-sermons/': '2026-05-22',
          'https://esbocoonline.com.br/blog/habitos-de-estudo-biblico/': '2026-05-22',
        };
        const lastmod = blogDates[item.url] ?? new Date().toISOString().split('T')[0];
        return { ...item, lastmod };
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});