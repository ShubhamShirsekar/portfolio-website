'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterRotatorProps {
  texts: string[];
  className?: string;
  /** Average delay per typed character (ms). */
  typeSpeed?: number;
  /** Delay per deleted character (ms). */
  deleteSpeed?: number;
  /** How long a fully typed line stays on screen (ms). */
  holdMs?: number;
}

function commonPrefixLength(a: string, b: string) {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

/**
 * Rotates through `texts` with a typewriter effect: backspaces only back to
 * the part shared with the next line, then types the rest with slightly
 * irregular, human-like timing. Renders the first line statically on the
 * server and under prefers-reduced-motion.
 */
export function TypewriterRotator({
  texts,
  className,
  typeSpeed = 55,
  deleteSpeed = 8,
  holdMs = 2800,
}: TypewriterRotatorProps) {
  const shouldReduce = useReducedMotion();
  const [display, setDisplay] = useState(texts[0] ?? '');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (shouldReduce || texts.length < 2) {
      setDisplay(texts[0] ?? '');
      return;
    }

    let cancelled = false;
    let current = texts[0];
    let index = 0;
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timeoutRef.current = setTimeout(resolve, ms);
      });

    const run = async () => {
      while (!cancelled) {
        await wait(holdMs);
        const next = texts[(index + 1) % texts.length];
        const keep = commonPrefixLength(current, next);

        // Backspace to the shared prefix
        for (let len = current.length - 1; len >= keep && !cancelled; len--) {
          setDisplay(current.slice(0, len));
          await wait(deleteSpeed);
        }
        if (cancelled) return;
        await wait(280);

        // Type the new line with natural, slightly irregular timing
        for (let len = keep + 1; len <= next.length && !cancelled; len++) {
          setDisplay(next.slice(0, len));
          const ch = next[len - 1];
          const jitter = typeSpeed * (0.5 + Math.random());
          const pause = ch === ',' || ch === '.' ? 220 : ch === ' ' ? typeSpeed * 0.6 : 0;
          await wait(jitter + pause);
        }

        current = next;
        index = (index + 1) % texts.length;
      }
    };

    run();
    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
  }, [texts, shouldReduce, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className={cn('relative grid', className)}>
      {/* Screen readers and crawlers get every line once, without the animation */}
      <span className="sr-only">{texts.join(' ')}</span>

      {/* Invisible copies reserve the height of the longest line, so nothing below jumps */}
      {texts.map((text) => (
        <span key={text} aria-hidden="true" className="invisible [grid-area:1/1]">
          {text}
        </span>
      ))}

      <span aria-hidden="true" className="[grid-area:1/1]">
        {display}
        <motion.span
          className="inline-block w-[2px] h-[1.1em] -mb-[0.2em] ml-0.5 bg-accent-cyan align-baseline"
          animate={shouldReduce ? undefined : { opacity: [1, 1, 0, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear', times: [0, 0.5, 0.5, 1] }}
        />
      </span>
    </span>
  );
}
