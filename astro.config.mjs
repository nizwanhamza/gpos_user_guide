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
        si: 'GPOS User Guide (සිංහල)',
        ta: 'GPOS User Guide (தமிழ்)',
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
          ...group('Start here', 'මෙතැනින් පටන් ගන්න', 'இங்கே தொடங்குங்கள்'),
          items: [
            { slug: 'quick-start' },
            { autogenerate: { directory: 'getting-started' } },
          ],
        },
        {
          ...group('Set up your business', 'Business එක setup කරන්න', 'Business ஐ setup செய்யுங்கள்'),
          items: [{ autogenerate: { directory: 'business' } }],
        },
        {
          ...group('Products & catalog', 'Products සහ catalog', 'Products மற்றும் catalog'),
          items: [{ autogenerate: { directory: 'catalog' } }],
        },
        {
          ...group('Using the till', 'Till එක භාවිතා කිරීම', 'Till ஐப் பயன்படுத்துதல்'),
          items: [{ autogenerate: { directory: 'till' } }],
        },
        {
          ...group('Sales & cash', 'Sales සහ cash', 'Sales மற்றும் cash'),
          items: [{ autogenerate: { directory: 'sales' } }],
        },
        {
          ...group('Inventory', 'Inventory (stock)', 'Inventory (stock)'),
          items: [{ autogenerate: { directory: 'inventory' } }],
        },
        {
          ...group('Purchasing', 'Purchasing (සැපයුම්කරුවන්ගෙන් ගැනීම)', 'Purchasing (supplier களிடம் வாங்குதல்)'),
          items: [{ autogenerate: { directory: 'purchasing' } }],
        },
        {
          ...group('Reports & records', 'Reports සහ records', 'Reports மற்றும் records'),
          items: [{ autogenerate: { directory: 'reports' } }],
        },
        {
          ...group('Help', 'Help (උදව්)', 'Help (உதவி)'),
          items: [{ autogenerate: { directory: 'help' } }],
        },
      ],
    }),
  ],
});
