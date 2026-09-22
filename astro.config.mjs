import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://nayaaasha.org.np',
  integrations: [sitemap()],
  trailingSlash: 'always',
  vite: { server: { allowedHosts: true } }
});
