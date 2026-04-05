import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../public/og-image.png');

// 1200×630 — standard OG image
const W = 1200;
const H = 630;

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clip">
      <rect width="${W}" height="${H}"/>
    </clipPath>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#FAF7F4"/>

  <!-- Subtle warm border top -->
  <rect x="0" y="0" width="${W}" height="6" fill="#DFA882"/>

  <!-- Large ghost logo — right side -->
  <g opacity="0.13" transform="translate(560, 30) scale(2.05)">
    <!-- Chimney -->
    <rect x="172" y="38" width="30" height="62" rx="5" fill="#9B9B9B"/>
    <!-- Sun -->
    <circle cx="68" cy="80" r="36" fill="#F0C84A"/>
    <!-- Roof -->
    <polygon points="16,148 140,28 264,148" fill="#6B2D0F"/>
    <!-- House body -->
    <rect x="28" y="142" width="224" height="150" rx="22" fill="#DFA882"/>
    <!-- Door arch -->
    <path d="M98,292 L98,232 Q98,196 140,196 Q182,196 182,232 L182,292 Z" fill="#FAF7F4"/>
  </g>

  <!-- Foreground logo — left side, solid colours -->
  <g transform="translate(80, 185) scale(1.15)">
    <!-- Chimney -->
    <rect x="172" y="38" width="30" height="62" rx="5" fill="#9B9B9B"/>
    <!-- Sun -->
    <circle cx="68" cy="80" r="36" fill="#F0C84A"/>
    <!-- Roof -->
    <polygon points="16,148 140,28 264,148" fill="#6B2D0F"/>
    <!-- House body -->
    <rect x="28" y="142" width="224" height="150" rx="22" fill="#DFA882"/>
    <!-- Door arch -->
    <path d="M98,292 L98,232 Q98,196 140,196 Q182,196 182,232 L182,292 Z" fill="#FAF7F4"/>
  </g>

  <!-- Text — positioned to the right of the logo -->
  <!-- Eyebrow label -->
  <text x="430" y="230"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="22"
    font-weight="700"
    letter-spacing="4"
    fill="#7B3A1E"
    text-anchor="start">COMING SOON · VERNON, BC</text>

  <!-- Brand name line 1 -->
  <text x="430" y="308"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="64"
    font-weight="800"
    fill="#1C1410"
    text-anchor="start">Élodie's</text>

  <!-- Brand name line 2 -->
  <text x="430" y="375"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="64"
    font-weight="800"
    fill="#1C1410"
    text-anchor="start">Playhouse Cafe</text>

  <!-- Tagline -->
  <text x="432" y="432"
    font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
    font-size="26"
    font-weight="400"
    fill="#6B5E54"
    text-anchor="start">Where little ones explore and parents breathe.</text>

  <!-- Subtle bottom accent line -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#DFA882"/>
</svg>`;

const buf = Buffer.from(svg);

sharp(buf)
  .resize(W, H)
  .png()
  .toBuffer()
  .then((data) => {
    writeFileSync(outPath, data);
    console.log(`✓ OG image written to ${outPath}`);
  })
  .catch((err) => {
    console.error('Error generating OG image:', err);
    process.exit(1);
  });
