import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { heroContent, siteConfig } from '@/lib/content';

// Social preview (LinkedIn, Slack, X...) generated at build time.
// Mirrors the homepage hero: ASCII-hands background, pixel-font name,
// availability badge, gradient title, tagline and the two CTAs.
export const alt = 'Shubham Shirsekar, Forward Deployed Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const NAME = 'Shubham Shirsekar';
const BADGE = siteConfig.availability.toUpperCase();
const TITLE = heroContent.headline;
const TAGLINE = heroContent.taglines[0];
const BUTTONS = ['View Projects →', 'Download Resume'];

/** Fetch a Google Font as TTF, subset to just the characters we draw. */
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!src) throw new Error(`Could not load font ${family} ${weight}`);
  return (await fetch(src[1])).arrayBuffer();
}

export default async function OpengraphImage() {
  const interText = BADGE + TITLE + TAGLINE + BUTTONS.join('');
  const [silkscreen, inter400, inter500, inter700, bg] = await Promise.all([
    loadGoogleFont('Silkscreen', 400, NAME.toUpperCase()),
    loadGoogleFont('Inter', 400, interText),
    loadGoogleFont('Inter', 500, interText),
    loadGoogleFont('Inter', 700, interText),
    readFile(join(process.cwd(), 'public/home-bg.jpg')),
  ]);
  const bgSrc = `data:image/jpeg;base64,${bg.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0f',
          fontFamily: 'Inter',
          position: 'relative',
        }}
      >
        {/* Hero background, as on the site (30% opacity) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          alt=""
          width={1200}
          height={630}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,15,0.4)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ fontFamily: 'Silkscreen', fontSize: 64, color: '#ffffff', letterSpacing: 4 }}>
            {NAME.toUpperCase()}
          </div>
          <div style={{ marginTop: 10, fontSize: 20, fontWeight: 500, letterSpacing: 2, color: '#06b6d4' }}>{BADGE}</div>
          <div
            style={{
              marginTop: 26,
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.2,
              paddingBottom: 6,
              backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {TITLE}
          </div>
          <div style={{ marginTop: 18, fontSize: 26, color: '#d1d5db', maxWidth: 820, lineHeight: 1.4 }}>{TAGLINE}</div>
          <div style={{ display: 'flex', gap: 16, marginTop: 36 }}>
            <div
              style={{
                display: 'flex',
                padding: '14px 30px',
                borderRadius: 10,
                background: '#3b82f6',
                color: '#ffffff',
                fontSize: 22,
                fontWeight: 500,
                boxShadow: '0 0 24px rgba(59,130,246,0.45)',
              }}
            >
              {BUTTONS[0]}
            </div>
            <div
              style={{
                display: 'flex',
                padding: '14px 30px',
                borderRadius: 10,
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.15)',
                color: '#ffffff',
                fontSize: 22,
                fontWeight: 500,
              }}
            >
              {BUTTONS[1]}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Silkscreen', data: silkscreen, weight: 400, style: 'normal' },
        { name: 'Inter', data: inter400, weight: 400, style: 'normal' },
        { name: 'Inter', data: inter500, weight: 500, style: 'normal' },
        { name: 'Inter', data: inter700, weight: 700, style: 'normal' },
      ],
    },
  );
}
