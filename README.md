# GPOS User Guide

The user guide for businesses (tenants) using GPOS — back office, till and reports — built with
[Starlight](https://starlight.astro.build) on Astro. English is the default language; Sinhala
(`/si/`) and Tamil (`/ta/`) are available from the language menu.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static site in dist/
npm run preview
```

Requires Node.js 22.23.4 or newer (the deploy workflow uses Node 24).

## Publish on GitHub Pages

1. Push this folder as its own repository (or as the root of one).
2. In the repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site.

The workflow passes the Pages URL and sub-path (`SITE_URL`, `BASE_PATH`) to the build, so links
work at `https://<owner>.github.io/<repo>/` as well as on a custom domain. To build for a sub-path
yourself: `SITE_URL=https://<owner>.github.io BASE_PATH=/<repo> npm run build`.

## Logo and icons

The originals are in `brand/` (not published):

| File | What |
|------|------|
| `brand/gpos-logo-full.png` | Icon + "POS" wordmark (transparent) |
| `brand/gpos-icon.png` | Icon only, 512 × 512 |

The site uses copies generated from them — header logo and home-page image in light and dark
versions (`src/assets/`), favicons, Apple touch icon, app icons and the 1200 × 630 link-preview
card (`public/`). After replacing a file in `brand/`, regenerate them with:

```bash
node scripts/brand-assets.mjs
```

## Writing pages

- Pages live in `src/content/docs/` as Markdown (`.md`) or MDX (`.mdx`). The folder decides the
  sidebar group (see `astro.config.mjs`); `sidebar.order` in the front matter sets the order.
- Translations go in `src/content/docs/si/` and `src/content/docs/ta/` **with the same file
  path** as the English page. Pages without a translation are shown in English with a notice.
- Link to other pages with site-absolute paths such as `/till/making-a-sale/` (or
  `/si/till/making-a-sale/`); the base path is added automatically. Inside components
  (`<LinkCard href=…>`) use relative links instead.
- Write on-screen button names as `<span class="ui">Save</span>` and use the exact wording of the
  app (English, Sinhala or Tamil) so readers can find them.
- Starlight's own interface text for Sinhala and Tamil is in `src/content/i18n/`.

### Translated so far

| Page | සිංහල | தமிழ் |
|------|-------|-------|
| Home | ✓ | ✓ |
| Quick start | ✓ | ✓ |
| Signing in | ✓ | ✓ |
| Dashboard & checklist | ✓ | ✓ |
| Unlocking the till | ✓ | ✓ |
| Making a sale | ✓ | ✓ |
| Cash shifts on the till | ✓ | ✓ |
| Plans and features | ✓ | ✓ |
| Two-step sign-in | ✓ | ✓ |

All other pages fall back to English. Sinhala and Tamil text should be reviewed by a native
speaker before publishing widely.
