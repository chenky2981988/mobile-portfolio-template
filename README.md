# Mobile Portfolio Template

A fully static [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) portfolio template for mobile architects and engineering leaders. The sample site uses clearly fictional content ("John Doe") so you can replace it with your own.

**Live demo:** [https://mobile-portfolio-template.vercel.app](https://mobile-portfolio-template.vercel.app)

Mobile portfolio template by [Chirag Sidhiwala](https://github.com/chenky2981988), adapted from [Starfolio](https://github.com/webrating/starfolio) (MIT).

## Features

- **Light and dark mode** that follows the system color scheme (`prefers-color-scheme`), including matching theme-color meta tags
- **Accessibility:** axe-core reports 0 violations at 360, 390 and 1280px, in light and dark, including the 404 page
- **Lighthouse:** 100 in all four categories on desktop; 99–100 Performance and 100 Accessibility, Best Practices and SEO on mobile (measured on the original build)
- **Strict Content-Security-Policy** with no `'unsafe-inline'`. Scripts and styles are external files only (`script-src 'self'; style-src 'self'`). Astro is configured with `inlineStylesheets: 'never'` so CSS is never inlined
- **Security headers** in `vercel.json`: CSP, HSTS (`max-age=31536000; includeSubDomains`), `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options: DENY` and `Cross-Origin-Opener-Policy`
- **SEO and sharing:** canonical URL, Open Graph and Twitter tags, `og.png` (1200×630), `apple-touch-icon`, `robots.txt` and an auto-generated sitemap
- **Résumé download:** `/resume.pdf` is served as an attachment (`Sample-Resume.pdf` in this template). The download buttons only render if the file is present at build time

A long-cache header (`immutable`, 1 year) is also set for `/_astro/*` hashed assets.

## Tech stack

You need [Node.js](https://nodejs.org) 24 (see `.nvmrc`). Versions below are the ranges in `package.json` (exact resolved versions are in `package-lock.json`).

- [Astro](https://astro.build) `^6.2.1` — static output only, no SSR adapter
- [Tailwind CSS](https://tailwindcss.com) `^4.2.4` via `@tailwindcss/vite`
- [`@astrojs/sitemap`](https://docs.astro.build/en/guides/integrations-guide/sitemap/) `^3.7.2`
- TypeScript (`astro check`) and self-hosted fonts via Fontsource: Outfit, Instrument Serif, Inter and JetBrains Mono

## Getting started

Follow these steps in order. You do not need to know Astro already.

### 1. Use this template or clone it

On GitHub, click **Use this template** → **Create a new repository**, then clone your new repo:

```bash
git clone https://github.com/YOUR-USERNAME/mobile-portfolio-template.git
cd mobile-portfolio-template
```

If you downloaded a zip instead, unzip it and open that folder in your terminal.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the site locally

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). The page reloads when you save a file.

Other useful commands:

```bash
npm run build     # production build, output in dist/
npm run preview   # serve dist/ locally (does not apply vercel.json headers)
npm run check     # TypeScript check
```

`astro preview` is fine for layout and content. Security headers from `vercel.json` are applied on Vercel, not by the local preview server.

### 4. Customize your content in `src/data/site.ts`

Almost all public text and links live in **`src/data/site.ts`**: your name, hero, facts, strengths, app cards, case studies, experience, skills, education, contact, section nav, page title and `SITE_URL`. Each field has a short comment in that file.

Start with:

1. `PERSON` — your name, roles, location, email, LinkedIn, X and GitHub
2. `HOME_TITLE` and `PERSON.metaDescription` — the browser tab title and search-result text
3. `HEADSHOT.alt` — the alt text for your photo
4. `FACTS`, `STRENGTHS`, `APPS`, `CASE_STUDIES`, `EXPERIENCE`, `SKILLS`, `EDUCATION` and `CONTACT` — replace the sample "John Doe" copy with your own
5. Store and profile URLs — set `confirmed: true` only for links you have checked

Useful flags in `site.ts`:

- `show: false` hides an app card
- `verified: false` hides a proof-strip item
- `confirmed: false` marks a store or profile URL as unconfirmed. Store links in that state only render if `RENDER_UNCONFIRMED_STORE_LINKS` is `true`. Unconfirmed profile links (for example GitHub) stay hidden

The home page markup is `src/pages/index.astro`; the dock is `src/components/Dock.astro`; design tokens are at the top of `src/styles/global.css`. After any content change, check the page in the dev server.

### 5. Replace the images and the résumé

**Images**

1. Replace `public/images/avatar.webp` with your portrait (or drop in `avatar.jpg` / `avatar.png`). Use a 4:5 portrait, ideally at least 800×1000. Until one of those files exists, the hero shows a monogram of your initials.
2. Add app icons and screenshots under `public/images/apps/` (WebP is preferred). Icons should be at least 64×64. Use descriptive `alt` text.
3. Point the matching app entry in `APPS` at those files:
   - `icon` — the app icon
   - `shots` — phone-style store screenshots, fanned on the card
   - `gallery` — optional wide marketing slides, shown as a scrollable gallery instead of the fan
4. Optional: `shotsCaption` for a caption under the screenshots, and `disclaimer` for a short note on the media.
5. Replace `public/og.png` (1200×630) and `public/apple-touch-icon.png` (180×180) so link previews and home-screen icons use your name or mark. Update `public/favicon.svg` to match.

The placeholders shipped with this template are generic ("Your app screenshot", an abstract avatar, a sample Open Graph card) and are safe to overwrite.

**Résumé**

1. Replace `public/resume.pdf` with your own PDF. Keep any **phone number out of this public PDF**.
2. Update `RESUME.downloadName` and `RESUME.updated` in `src/data/site.ts` (for example `"Your-Name-Resume.pdf"` and `"Nov 2026"`).
3. Update the `Content-Disposition` filename for `/resume.pdf` in `vercel.json` so the downloaded file uses the same name.
4. Rebuild or let the dev server reload. `src/lib/resume.ts` checks for the file at build time. If the file is missing, the résumé buttons in the hero, contact section, footer and dock are all hidden.

The sample PDF in this template is labelled "Sample résumé, replace me" and contains no personal data.

### 6. Set `SITE_URL`

Canonical tags, `og:url`, `og:image`, the sitemap and `robots.txt` all use `SITE_URL`. The live demo uses `https://mobile-portfolio-template.vercel.app`. Change `SITE_URL` to your own domain before you go live:

1. Set `SITE_URL` in `src/data/site.ts` to your final origin, including `https://` and with no trailing slash — for example `https://yourname.vercel.app` or `https://yourname.com`. If `www` is the primary domain in Vercel, use `https://www.yourname.com` instead, so the canonical URL does not point at a redirect.
2. Update the `Sitemap:` line in `public/robots.txt` to match, for example `https://yourname.com/sitemap-index.xml`.
3. Commit the change and redeploy (see the next step) so the live site uses the real origin.

### 7. Deploy for free on Vercel

`vercel.json` already sets the framework to Astro, the build command to `npm run build`, and the output directory to `dist`. Vercel also reads `engines.node` (`24.x`) from `package.json`. The Hobby plan is enough.

1. Push your customized project to GitHub.
2. Open [Vercel](https://vercel.com), sign in, and click **Add New** → **Project**.
3. Import your GitHub repository. Vercel will detect Astro and use `vercel.json`.
4. Click **Deploy**. You will get a free `*.vercel.app` address.
5. Set `SITE_URL` (step 6) to that address if you have not already, commit, and redeploy so canonical tags, `og:image` and the sitemap use the real origin.

To deploy from the command line instead, install the [Vercel CLI](https://vercel.com/docs/cli), run `vercel` (or `vercel --prod`) from this folder, and follow the prompts.

Preview deployments can stay private (Deployment Protection). Production can be public.

### 8. Optional: add a custom domain

1. In your Vercel project, open **Settings** → **Domains** and add your domain (for example `yourname.com`).
2. Follow Vercel's DNS instructions for your registrar.
3. Update `SITE_URL` and `public/robots.txt` to the custom domain (step 6), then redeploy.

## Project structure

```
.
├── public/                  Static files copied as-is to the site root
│   ├── images/
│   │   ├── apps/            App icons and screenshots (placeholders included)
│   │   └── avatar.webp      Headshot (optional; a monogram is used if missing)
│   ├── js/                  External scripts (section fade, dock tooltip, focus)
│   ├── fonts-licenses/      SIL OFL texts for the self-hosted fonts
│   ├── resume.pdf           Sample résumé (replace this)
│   ├── og.png               Link-preview image
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── data/site.ts         All public copy, links, apps, skills and contact
│   ├── pages/               index.astro (home) and 404.astro
│   ├── layouts/Layout.astro Document shell, meta tags and script includes
│   ├── components/          Dock, Icon, Section
│   ├── lib/                 Build-time résumé and headshot helpers
│   └── styles/global.css    Design tokens and styles
├── astro.config.mjs         Static build, Tailwind Vite plugin, sitemap
├── vercel.json              Headers, build command and output directory
├── package.json
├── LICENSE                  MIT licence (keep this file)
├── NOTICE                   Attribution for Starfolio, fonts and icons (keep this file)
└── .gitignore               Ignores node_modules, dist, .astro, .vercel, .env*, logs and editor folders
```

## Credits and licence

Mobile portfolio template by [Chirag Sidhiwala](https://github.com/chenky2981988), adapted from [Starfolio](https://github.com/webrating/starfolio) (MIT).

This project is based on Starfolio, Copyright (c) 2026 Starfolio, used under the MIT License. The original licence, plus a copyright line for Chirag Sidhiwala, is in `LICENSE`. Attribution for Starfolio, the fonts and the icons is in `NOTICE`. **Do not remove `LICENSE` or `NOTICE`.**

Fonts are self-hosted via Fontsource under the SIL Open Font License 1.1. Full licence texts are in `public/fonts-licenses/`. Icon path data comes from [Lucide](https://lucide.dev) (ISC License).

The sample name, companies, apps, metrics, images and résumé in this template are fictional placeholders. Replace them with your own content before you publish.
