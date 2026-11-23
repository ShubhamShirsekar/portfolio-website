'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';
import { ExperienceCard } from './Cards';
import type { Experience } from '@/types';

/**
 * Vertical timeline whose gradient line "draws" as you scroll through it.
 * Each entry's dot lights up as it scrolls into view.
 */
export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 55%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Track + drawn line */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-glass-border" aria-hidden="true" />
      <motion.div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan shadow-glow-blue"
        style={{ scaleY: shouldReduce ? 1 : scaleY }}
        aria-hidden="true"
      />

      <ol className="space-y-10 md:pl-10">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.role}`} className="relative">
            {/* Dot sits on the line and lights up when reached */}
            <motion.span
              className="hidden md:block absolute -left-10 top-8 w-3.5 h-3.5 -translate-x-1/2 rounded-full border-2 border-accent-blue bg-space-900"
              initial={shouldReduce ? false : { scale: 0.6, backgroundColor: '#0a0a0f', boxShadow: '0 0 0 rgba(59,130,246,0)' }}
              whileInView={{ scale: 1, backgroundColor: '#3b82f6', boxShadow: '0 0 18px rgba(59,130,246,0.7)' }}
              viewport={{ once: true, margin: '0px 0px -45% 0px' }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              aria-hidden="true"
            />
            <ExperienceCard experience={experience} index={index} showDot={false} />
          </li>
        ))}
      </ol>
    </div>
  );
}
