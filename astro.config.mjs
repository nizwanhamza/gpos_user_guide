// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeBaseLinks } from './plugins/rehype-base-links.mjs';

// GitHub Pages: the deploy workflow sets SITE_URL (e.g. https://my-org.github.io) and
// BASE_PATH (e.g. /gpos_user_guide). Locally both default to serving from the root.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

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
      title: 'GPOS User Guide',
      description: 'Step-by-step help for businesses using GPOS: back office, till and reports.',
      logo: { src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
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
