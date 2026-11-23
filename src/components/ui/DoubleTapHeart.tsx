'use client';

import { useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

// Inspired by Motion's "Double tap" example (https://motion.dev/examples/react-tap-double):
// double-tapping pops a heart with a particle ring at the tap point.

type Burst = { id: number; x: number; y: number; rotate: number };

const DOUBLE_TAP_MS = 300;
const DOUBLE_TAP_DISTANCE = 30;
const PARTICLES = 8;

function HeartBurst({ burst, onDone, reduce }: { burst: Burst; onDone: () => void; reduce: boolean }) {
  return (
    <motion.div
      className="pointer-events-none absolute z-10"
      style={{ left: burst.x - 48, top: burst.y - 48, width: 96, height: 96 }}
      initial={{ y: 0, scale: 1, opacity: 1 }}
      animate={{ y: -48, scale: 0.7, opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.35, ease: 'easeIn' }}
      onAnimationComplete={onDone}
      aria-hidden="true"
    >
      {/* Particle ring */}
      {!reduce &&
        Array.from({ length: PARTICLES }, (_, i) => {
          const angle = (i / PARTICLES) * Math.PI * 2 - Math.PI / 2;
          return (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 -ml-1 -mt-1 h-2 w-2 rounded-full bg-white"
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{ x: Math.cos(angle) * 64, y: Math.sin(angle) * 64, scale: 0, opacity: [1, 1, 0] }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.2, 0, 0, 1] }}
            />
          );
        })}

      {/* Heart */}
      <motion.svg
        viewBox="0 0 24 24"
        className="h-24 w-24 [filter:drop-shadow(0_6px_16px_rgba(0,0,0,0.25))]"
        initial={reduce ? { opacity: 0 } : { scale: 0, rotate: 0, opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { scale: 1, rotate: burst.rotate, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.3, bounce: 0.6, opacity: { duration: 0.1 } }}
      >
        <path
          fill="#ffffff"
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </motion.svg>
    </motion.div>
  );
}

export function DoubleTapHeart({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion() ?? false;
  const [bursts, setBursts] = useState<Burst[]>([]);
  const lastTap = useRef<{ t: number; x: number; y: number } | null>(null);
  const nextId = useRef(0);

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const prev = lastTap.current;
    if (prev && e.timeStamp - prev.t < DOUBLE_TAP_MS && Math.hypot(x - prev.x, y - prev.y) < DOUBLE_TAP_DISTANCE) {
      lastTap.current = null;
      const id = nextId.current++;
      setBursts((b) => [...b, { id, x, y, rotate: Math.random() * 30 - 15 }]);
    } else {
      lastTap.current = { t: e.timeStamp, x, y };
    }
  };

  return (
    <div
      className={cn('relative select-none touch-manipulation', className)}
      onPointerUp={onPointerUp}
      // Prevent the browser's double-click text selection / zoom on the photo
      onDoubleClick={(e) => e.preventDefault()}
    >
      {children}
      {bursts.map((burst) => (
        <HeartBurst
          key={burst.id}
          burst={burst}
          reduce={reduce}
          onDone={() => setBursts((b) => b.filter((x) => x.id !== burst.id))}
        />
      ))}
    </div>
  );
}
