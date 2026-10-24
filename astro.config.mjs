// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './plugins/rehype-base-links.mjs';

// GitHub Pages: the deploy workflow sets SITE_URL (e.g. https://my-org.github.io) and
// BASE_PATH (e.g. /gpos_user_guide). Locally both default to serving from the root.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';
/** Path to a file in public/, with the deploy base path in front. */
const asset = (file) => `${base.replace(/\/$/, '')}/${file}`;

/** Sidebar group labels in the three languages. */
const group = (en, si, ta) => ({ label: en, translations: { si, ta } });

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base }]],
  },
  integrations: [
    starlight({
      // Browser tabs and search results; the header shows the logo plus "User Guide" (custom.css).
      title: {
        en: 'GPOS User Guide',
        si: 'GPOS පරිශීලක මාර්ගෝපදේශය',
        ta: 'GPOS பயனர் வழிகாட்டி',
      },
      description: 'Step-by-step help for businesses using GPOS: back office, till and reports.',
      logo: {
        light: './src/assets/gpos-logo-light.png',
        dark: './src/assets/gpos-logo-dark.png',
        alt: 'GPOS',
        replacesTitle: true,
      },
      favicon: '/favicon-32.png',
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '16x16', href: asset('favicon-16.png') } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: asset('apple-touch-icon.png') } },
        { tag: 'link', attrs: { rel: 'manifest', href: asset('site.webmanifest') } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#4f46e5' } },
        // Link previews (WhatsApp, Facebook, Slack…).
        { tag: 'meta', attrs: { property: 'og:image', content: new URL(asset('og-image.png'), site).href } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'GPOS' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: new URL(asset('og-image.png'), site).href } },
      ],
      customCss: ['./src/styles/custom.css'],
      lastUpdated: false,
      pagination: true,
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        si: { label: 'සිංහල', lang: 'si' },
        ta: { label: 'தமிழ்', lang: 'ta' },
      },
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          ...group('Start here', 'මෙතැනින් අරඹන්න', 'இங்கே தொடங்குங்கள்'),
          items: [
            { slug: 'quick-start' },
            { autogenerate: { directory: 'getting-started' } },
          ],
        },
        {
          ...group('Set up your business', 'ව්‍යාපාරය සකසන්න', 'வணிகத்தை அமையுங்கள்'),
          items: [{ autogenerate: { directory: 'business' } }],
        },
        {
          ...group('Products & catalog', 'නිෂ්පාදන සහ නාමාවලිය', 'பொருட்கள் மற்றும் பட்டியல்'),
          items: [{ autogenerate: { directory: 'catalog' } }],
        },
        {
          ...group('Using the till', 'ටිල් එක භාවිතය', 'டில்லைப் பயன்படுத்துதல்'),
          items: [{ autogenerate: { directory: 'till' } }],
        },
        {
          ...group('Sales & cash', 'විකුණුම් සහ මුදල්', 'விற்பனை மற்றும் பணம்'),
          items: [{ autogenerate: { directory: 'sales' } }],
        },
        {
          ...group('Inventory', 'තොග', 'சரக்கு'),
          items: [{ autogenerate: { directory: 'inventory' } }],
        },
        {
          ...group('Purchasing', 'මිලදී ගැනීම්', 'கொள்முதல்'),
          items: [{ autogenerate: { directory: 'purchasing' } }],
        },
        {
          ...group('Reports & records', 'වාර්තා සහ වාර්තාගත කිරීම්', 'அறிக்கைகள் மற்றும் பதிவுகள்'),
          items: [{ autogenerate: { directory: 'reports' } }],
        },
        {
          ...group('Help', 'උදව්', 'உதவி'),
          items: [{ autogenerate: { directory: 'help' } }],
        },
      ],
    }),
  ],
});
