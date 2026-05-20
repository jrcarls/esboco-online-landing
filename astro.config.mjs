// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://esbocoonline.com.br',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blob/'),
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/noop' },
  },
});