import { siteConfig } from '@/lib/content';

/** Tick marks for one edge ruler: a long tick every 5th, short ones between. */
function Ruler({ side }: { side: 'left' | 'right' }) {
  const ticks = Array.from({ length: 41 }, (_, i) => i);
  return (
    <div
      className={`pointer-events-none fixed top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-[7px] lg:flex ${
        side === 'left' ? 'left-3 items-start' : 'right-3 items-end'
      }`}
      aria-hidden="true"
    >
      {ticks.map((i) => (
        <span
          key={i}
          className={`block h-px ${i % 5 === 0 ? 'w-3 bg-hud/60' : 'w-1.5 bg-white/15'}`}
        />
      ))}
    </div>
  );
}

/**
 * Decorative HUD frame shared by every page: tick rulers on both edges,
 * vertical coordinates on the right, and the SVG colour filters the hero glitch uses.
 */
export function HudChrome() {
  return (
    <>
      <Ruler side="left" />
      <Ruler side="right" />
      <p
        className="text-vertical hud-label pointer-events-none fixed bottom-10 right-6 z-40 hidden !tracking-[0.4em] text-gray-500 xl:block"
        aria-hidden="true"
      >
        {siteConfig.location} · 48.85°N 2.35°E
      </p>

      {/* Channel-split filters: keep only the red / only the green+blue of an image */}
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <filter id="hud-red">
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" />
        </filter>
        <filter id="hud-cyan">
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0" />
        </filter>
      </svg>
    </>
  );
}
