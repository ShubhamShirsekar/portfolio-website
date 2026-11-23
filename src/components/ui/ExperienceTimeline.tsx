'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ExperienceCard } from './Cards';
import type { Experience } from '@/types';

/**
 * Vertical timeline whose gradient line "draws" as you scroll through it.
 * Each entry's dot lights up as it scrolls into view.
 */
export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  // Linear, scroll-locked fill: no spring overshoot
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative max-w-4xl mx-auto">
      {/* Track + drawn line */}
      <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-glass-border" aria-hidden="true" />
      <motion.div
        className="hidden md:block absolute left-0 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-accent-blue/80 via-accent-violet/70 to-accent-cyan/60"
        style={{ scaleY: shouldReduce ? 1 : scaleY }}
        aria-hidden="true"
      />

      <ol className="space-y-10 md:pl-10">
        {experiences.map((experience, index) => (
          <li key={`${experience.company}-${experience.role}`} className="relative">
            {/* Dot sits on the line and lights up when reached */}
            <motion.span
              className="hidden md:block absolute -left-10 top-8 w-2.5 h-2.5 -translate-x-1/2 rounded-full border border-accent-blue/70"
              initial={shouldReduce ? false : { backgroundColor: 'rgba(10,10,15,1)' }}
              whileInView={{ backgroundColor: 'rgba(59,130,246,1)' }}
              viewport={{ once: true, margin: '0px 0px -40% 0px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              aria-hidden="true"
            />
            <ExperienceCard experience={experience} index={index} showDot={false} />
          </li>
        ))}
      </ol>
    </div>
  );
}
