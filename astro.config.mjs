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
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});