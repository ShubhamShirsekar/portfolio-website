'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Button, TypewriterRotator } from '@/components/ui';
import { heroContent, heroSlides, siteConfig, socialLinks } from '@/lib/content';
import { cn } from '@/lib/utils';

const GLITCH_MS = 700;

/** Deterministic 0..1 noise so server and client render the same letter delays. */
function noise(i: number, seed: number) {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Title whose letters flicker in and drop out one by one in a random order,
 * so a word dissolves ("C O S M O S" → "  O S  ") before the next one forms.
 */
function GlitchTitle({ lines, seed }: { lines: string[]; seed: number }) {
  let n = 0;
  return (
    <span className="block">
      {lines.map((line) => (
        <span key={line} className="block">
          {line.split(' ').map((word, w) => (
            <span key={w} className="inline-block whitespace-nowrap">
              {word.split('').map((char) => {
                const i = n++;
                const r = noise(i, seed);
                return (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0.25, 1], transition: { delay: 0.1 + r * 0.45, duration: 0.35, times: [0, 0.3, 0.6, 1] } }}
                    exit={{ opacity: [1, 0.2, 0], x: (noise(i, seed + 3) - 0.5) * 18, transition: { delay: noise(i, seed + 7) * 0.3, duration: 0.18 } }}
                  >
                    {char}
                  </motion.span>
                );
              })}
              {w < line.split(' ').length - 1 && <span className="inline-block w-[0.6em]" />}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

function Chevron({ dir }: { dir: 'left' | 'right' }) {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={dir === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

const socialShort: Record<string, string> = { github: 'GH', linkedin: 'IN', mail: '@' };

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [glitch, setGlitch] = useState<{ from: number; key: number } | null>(null);
  // Paused by the user (button) or because the tab is hidden
  const [userPaused, setUserPaused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const paused = userPaused || hidden;
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const touchX = useRef<number | null>(null);
  const count = heroSlides.length;
  const slide = heroSlides[index];

  const go = useCallback(
    (next: number) => {
      const target = (next + count) % count;
      if (target === index) return;
      if (!reduceMotion) setGlitch({ from: index, key: Date.now() });
      setIndex(target);
    },
    [count, index, reduceMotion]
  );

  // Clear the glitch overlay once its animation has played
  useEffect(() => {
    if (!glitch) return;
    const t = window.setTimeout(() => setGlitch(null), GLITCH_MS);
    return () => window.clearTimeout(t);
  }, [glitch]);

  // Arrow keys while the hero is on screen
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (window.scrollY > window.innerHeight * 0.5) return;
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === 'ArrowRight') go(index + 1);
      if (e.key === 'ArrowLeft') go(index - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go, index]);

  // Pause autoplay when the tab is hidden
  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  const counter = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      ref={sectionRef}
      className="relative -mt-16 h-[100svh] min-h-[560px] overflow-clip bg-black md:-mt-20"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      {/* ---------- Images (stacked, cross-faded) ---------- */}
      {heroSlides.map((s, i) => (
        <div
          key={s.id}
          className={cn(
            'absolute inset-y-0 left-0 w-full transition-opacity duration-700',
            s.imageShift,
            i === index ? 'opacity-100' : 'opacity-0'
          )}
          aria-hidden="true"
        >
          <div
            className={cn(
              'absolute inset-0 transition-transform ease-out',
              i === index ? 'scale-100 duration-[9000ms]' : 'scale-[1.08] duration-700'
            )}
          >
            <Image
              src={s.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={cn('object-cover', s.imagePosition)}
            />
          </div>
        </div>
      ))}

      {/* ---------- Glitch overlay: the outgoing image tears and splits into red/cyan ---------- */}
      {glitch && (
        <div key={glitch.key} className="pointer-events-none absolute inset-0 z-[1]" aria-hidden="true">
          {(['glitch-slice', 'glitch-red', 'glitch-cyan'] as const).map((cls) => (
            <div key={cls} className={cn('absolute inset-y-0 left-0 w-full', heroSlides[glitch.from].imageShift, cls)}>
              <Image
                src={heroSlides[glitch.from].image}
                alt=""
                fill
                sizes="100vw"
                className={cn('object-cover', heroSlides[glitch.from].imagePosition)}
              />
            </div>
          ))}
          <div className="glitch-bars absolute inset-x-0 top-[38%] h-px bg-white/70" />
          <div className="glitch-bars absolute inset-x-0 top-[61%] h-[2px] bg-hud/70" />
        </div>
      )}

      {/* ---------- Shading so text stays readable ---------- */}
      <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 md:bg-gradient-to-r md:from-black md:via-black/60 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="scanlines absolute inset-0 opacity-40" />
        <div className="grain absolute inset-0 opacity-[0.07] mix-blend-overlay" />
        {/* Faint glow in the slide's colour */}
        <div
          className="absolute inset-0 transition-[background] duration-700"
          style={{ background: `radial-gradient(60% 50% at 70% 35%, ${slide.accent}22, transparent 70%)` }}
        />
      </div>

      {/* ---------- Copy ---------- */}
      <h1 className="sr-only">
        {siteConfig.name}, {heroContent.headline}
      </h1>

      <div className="section-container relative z-[3] flex h-full flex-col justify-end pb-32 pt-24 md:justify-center md:pb-16 md:pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            className="max-w-3xl"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}`}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {index === 0 && (
              <motion.div
                className="mb-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.3 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              >
                <p className="hud-label flex items-center gap-3 text-gray-300">
                  <span className="hud-node !h-1.5 !w-1.5" style={{ backgroundColor: slide.accent }} />
                  {siteConfig.availability}
                </p>
                <p className="hud-label mt-1.5 pl-[1.125rem] !text-[0.6rem] text-gray-500">{siteConfig.workAuthorization}</p>
              </motion.div>
            )}

            <p className="hud-title text-[clamp(1.5rem,7vw,4.5rem)] leading-[1.15] md:text-[clamp(1.5rem,3.8vw,4.5rem)]">
              <span className="sr-only">{slide.title.join(' ')}</span>
              <span aria-hidden="true">
                <GlitchTitle lines={slide.title} seed={index + 1} />
              </span>
            </p>

            <motion.p
              className="mt-4 font-mono text-[0.62rem] uppercase tracking-[0.75em] md:text-xs"
              style={{ color: slide.accent }}
              initial={{ opacity: 0, letterSpacing: '1.1em' }}
              animate={{ opacity: 1, letterSpacing: '0.75em', transition: { delay: 0.35, duration: 0.6 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {slide.subtitle}
            </motion.p>

            <motion.div
              className="mt-8 max-w-md font-mono text-[0.8rem] leading-relaxed text-gray-300"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.5 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              {slide.points ? (
                <ul className="space-y-1.5">
                  {slide.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span style={{ color: slide.accent }} aria-hidden="true">
                        —
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="min-h-[4.5em]">
                  <TypewriterRotator texts={heroContent.taglines} />
                </p>
              )}
            </motion.div>

            <motion.div
              className="mt-9 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.65 } }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
            >
              <Button href={slide.cta.href} variant="secondary" size="md">
                {slide.cta.label}
              </Button>
              {index === 0 && (
                <Button href={heroContent.secondaryCTA.href} variant="ghost" size="md" external>
                  {heroContent.secondaryCTA.label}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </Button>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ---------- Side arrows: large hairline circles, half off-screen ---------- */}
      {(['left', 'right'] as const).map((dir) => (
        <button
          key={dir}
          type="button"
          onClick={() => go(index + (dir === 'left' ? -1 : 1))}
          aria-label={dir === 'left' ? 'Previous slide' : 'Next slide'}
          className={cn(
            'group absolute top-1/2 z-[4] hidden h-28 w-28 -translate-y-1/2 items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/50 hover:text-white md:flex',
            dir === 'left' ? '-left-14 justify-end pr-5' : '-right-14 justify-start pl-5'
          )}
        >
          <Chevron dir={dir} />
        </button>
      ))}

      {/* ---------- Bottom bar: socials · progress · counter ---------- */}
      <div className="absolute inset-x-0 bottom-0 z-[4]">
        <div className="section-container relative flex items-end justify-between gap-6 pb-7">
          <ul className="flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.2em] text-gray-400">
            {socialLinks.map((social, i) => (
              <li key={social.name} className="flex items-center gap-2">
                {i > 0 && <span className="text-gray-600">/</span>}
                <a
                  href={social.url}
                  target={social.icon === 'mail' ? undefined : '_blank'}
                  rel={social.icon === 'mail' ? undefined : 'noopener noreferrer'}
                  aria-label={social.name}
                  className="transition-colors hover:text-white"
                >
                  {socialShort[social.icon] ?? social.name}
                </a>
              </li>
            ))}
          </ul>

          {/* One segment per slide; the active one fills up and advances the slider when full */}
          <div className="flex flex-1 items-center justify-center gap-2 max-md:absolute max-md:inset-x-5 max-md:-top-5 sm:max-md:inset-x-8">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}: ${s.title.join(' ')}`}
                aria-current={i === index ? 'true' : undefined}
                className="group relative h-6 w-14 max-md:w-auto max-md:flex-1"
              >
                <span className="absolute inset-x-0 top-1/2 h-px bg-white/20 transition-colors group-hover:bg-white/40" />
                {i === index && (
                  <span
                    key={`${index}-${glitch?.key ?? 0}`}
                    className="absolute left-0 top-1/2 h-px w-full origin-left"
                    style={{
                      backgroundColor: slide.accent,
                      animation: reduceMotion ? undefined : `hud-progress ${s.duration}ms linear forwards`,
                      animationPlayState: paused ? 'paused' : 'running',
                      transform: reduceMotion ? 'scaleX(1)' : undefined,
                    }}
                    onAnimationEnd={() => go(index + 1)}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2 md:hidden">
              {(['left', 'right'] as const).map((dir) => (
                <button
                  key={dir}
                  type="button"
                  onClick={() => go(index + (dir === 'left' ? -1 : 1))}
                  aria-label={dir === 'left' ? 'Previous slide' : 'Next slide'}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
                >
                  <Chevron dir={dir} />
                </button>
              ))}
            </div>
            {!reduceMotion && (
              <button
                type="button"
                onClick={() => setUserPaused((p) => !p)}
                aria-label={userPaused ? 'Play slideshow' : 'Pause slideshow'}
                className="hidden h-6 w-6 items-center justify-center text-gray-400 transition-colors hover:text-white md:flex"
              >
                {userPaused ? (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M3 1.5v9l7.5-4.5z" /></svg>
                ) : (
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true"><path d="M2.5 1.5h2.5v9H2.5zM7 1.5h2.5v9H7z" /></svg>
                )}
              </button>
            )}
            <p className="font-display text-xs tracking-[0.2em] text-gray-300" aria-hidden="true">
              <span className="text-white">{counter(index + 1)}</span>
              <span className="text-gray-600"> / {counter(count)}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
