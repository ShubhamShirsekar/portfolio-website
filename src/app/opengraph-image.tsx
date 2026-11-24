import { ImageResponse } from 'next/og';

// Social preview (LinkedIn, Slack, X...) generated at build time.
export const alt = 'Shubham Shirsekar, Forward Deployed Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #0a0a0f 0%, #12121c 55%, #1a1a2e 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Soft brand glows */}
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -140,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, rgba(139,92,246,0) 70%)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 26, color: '#22d3ee' }}>
          <div style={{ width: 12, height: 12, borderRadius: 9999, background: '#22d3ee' }} />
          Open to work · Paris, France
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 40, color: '#d1d5db', letterSpacing: 2 }}>SHUBHAM SHIRSEKAR</div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              lineHeight: 1.25,
              paddingBottom: 8,
              backgroundImage: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Forward Deployed Engineer
          </div>
          <div style={{ fontSize: 34, color: '#9ca3af', maxWidth: 980, lineHeight: 1.35 }}>
            Shipping AI agents into production that cut multi-day workflows to under a few hours.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#9ca3af' }}>
          <div style={{ display: 'flex' }}>AI agents · Integrations · Client delivery</div>
          <div style={{ display: 'flex', color: '#60a5fa' }}>shubham-shirsekar.vercel.app</div>
        </div>
      </div>
    ),
    size,
  );
}
