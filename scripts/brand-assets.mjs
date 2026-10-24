// Generates the site's logo, icon and social-card images from the originals in brand/.
// Run from the project root after changing a brand file: node scripts/brand-assets.mjs
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const LOGO = 'brand/gpos-logo-full.png'; // icon + "POS" wordmark, transparent background
const ICON = 'brand/gpos-icon.png'; // icon only, 512 x 512, transparent corners

await mkdir('src/assets', { recursive: true });

/** The wordmark's dark grey letters, lightened (hue kept) so they read on the dark theme. */
async function darkVariant(input) {
  const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const iconEdge = Math.round(info.width * 0.315); // the indigo icon tile stays as it is
  for (let y = 0; y < info.height; y++) {
    for (let x = iconEdge; x < info.width; x++) {
      const i = (y * info.width + x) * 4;
      for (let c = 0; c < 3; c++) data[i + c] = 255 - Math.round((255 - data[i + c]) * 0.3);
    }
  }
  return sharp(data, { raw: info }).png();
}

// Header logo (shown about 40 px high; 2x for sharp screens).
await sharp(LOGO).resize({ height: 96 }).png().toFile('src/assets/gpos-logo-light.png');
await (await darkVariant(LOGO)).toBuffer().then((b) =>
  sharp(b).resize({ height: 96 }).png().toFile('src/assets/gpos-logo-dark.png'),
);

// Home-page hero image.
await sharp(LOGO).resize({ width: 900 }).png().toFile('src/assets/gpos-hero-light.png');
await (await darkVariant(LOGO)).toBuffer().then((b) =>
  sharp(b).resize({ width: 900 }).png().toFile('src/assets/gpos-hero-dark.png'),
);

// Browser and app icons.
for (const size of [16, 32, 192, 512]) {
  const name = size <= 32 ? `favicon-${size}.png` : `icon-${size}.png`;
  await sharp(ICON).resize(size, size).png().toFile(`public/${name}`);
}
// iOS fills transparent corners with black, so the touch icon gets a white background.
await sharp(ICON)
  .resize(180, 180)
  .flatten({ background: '#ffffff' })
  .png()
  .toFile('public/apple-touch-icon.png');

// Social preview card (link previews in WhatsApp, Facebook, Slack…): logo on white.
const card = await sharp(LOGO).resize({ width: 960 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#ffffff' } })
  .composite([{ input: card, gravity: 'center' }])
  .png()
  .toFile('public/og-image.png');

console.log('Brand assets written.');
