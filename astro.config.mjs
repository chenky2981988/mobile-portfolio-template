// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { SITE_URL } from './src/data/site.ts';

// Fully static output (no SSR adapter). The original Starfolio used
// output: 'server' + @astrojs/cloudflare for its blog/middleware; this site
// is a single prerendered page, so plain static files in dist/ are all we need.
// Security headers live in vercel.json (Vercel Hobby). Vercel autodetects Astro static output in dist/.
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  build: {
    // Emit CSS as external files so the CSP can use style-src 'self' (no 'unsafe-inline').
    inlineStylesheets: 'never',
  },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
