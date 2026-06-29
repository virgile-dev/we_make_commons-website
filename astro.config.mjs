import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Set base to '/We-Make-Commons-website' for GitHub project pages.
// Change to '/' if using a custom domain.
export default defineConfig({
  site: 'https://virgile-dev.github.io',
  base: '/we_make_commons-website',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
