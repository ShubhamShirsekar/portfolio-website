// Converts brand logo files into single-colour alpha masks for the project-image
// corner logos (they are recoloured on the site via CSS mask + gradient).
// Usage: node scripts/prepare-brand-logos.mjs
import sharp from 'sharp';

const SRC = 'insp/logos/';
const OUT = 'public/logos/brands/';

// mode "alpha": keep the file's own transparency as the shape
// mode "ink":   dark pixels become the shape, white/light background drops out
// boost:        how strongly mid-tones count as ink (raise for light brand colours)
const LOGOS = [
  { name: 'stackmint', file: 'stackmint.png', mode: 'alpha' },
  { name: 'bnp-paribas', file: 'BNP_Paribas_logo.svg.webp', mode: 'ink' },
  { name: 'iea', file: 'International_Energy_Agency_(IEA)_logo.svg.webp', mode: 'ink' },
  { name: 'loreal', file: 'LOreal-Logo.png', mode: 'ink' },
  { name: 'bitcoin', file: 'Bitcoin.svg.webp', mode: 'ink', boost: 3 },
];

for (const { name, file, mode, boost = 1.6 } of LOGOS) {
  const { data, info } = await sharp(SRC + file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const out = Buffer.alloc(info.width * info.height * 4);
  for (let i = 0; i < info.width * info.height; i++) {
    const [r, g, b, a] = [data[i * 4], data[i * 4 + 1], data[i * 4 + 2], data[i * 4 + 3] / 255];
    const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    const shape = mode === 'alpha' ? a : a * Math.min(1, (1 - lum) * boost);
    out[i * 4] = out[i * 4 + 1] = out[i * 4 + 2] = 255;
    out[i * 4 + 3] = Math.round(shape * 255);
  }
  const trimmed = await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 10 })
    .resize({ height: 160, withoutEnlargement: true })
    .png()
    .toBuffer({ resolveWithObject: true });
  await sharp(trimmed.data).toFile(`${OUT}${name}.png`);
  console.log(`${name}.png ${trimmed.info.width}x${trimmed.info.height} aspect=${(trimmed.info.width / trimmed.info.height).toFixed(2)}`);
}
