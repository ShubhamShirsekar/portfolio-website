'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './Cards';
import type { Project } from '@/types';

interface HorizontalProjectGalleryProps {
  projects: Project[];
  heading: ReactNode;
  footer?: ReactNode;
}

/**
 * Scroll-linked horizontal gallery: the section pins (sticky) while the user
 * scrolls vertically, and the row of project cards translates sideways.
 * Falls back to a plain horizontally scrollable strip under reduced motion.
 */
export function HorizontalProjectGallery({ projects, heading, footer }: HorizontalProjectGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const shouldReduce = useReducedMotion();

  // Horizontal travel = how far the track overflows its viewport.
  useEffect(() => {
    const measure = () => {
      if (!trackRef.current || !viewportRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };
    measure();
    const observer = new ResizeObserver(measure);
    if (trackRef.current) observer.observe(trackRef.current);
    if (viewportRef.current) observer.observe(viewportRef.current);
    return () => observer.disconnect();
  }, [projects.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const cards = projects.map((project, index) => (
    <div key={project.slug} className="grid w-[280px] sm:w-[340px] flex-shrink-0">
      <ProjectCard project={project} index={index} />
    </div>
  ));

  if (shouldReduce) {
    return (
      <div className="py-16 md:py-24">
        <div className="section-container">{heading}</div>
        <div className="section-container">
          <div className="flex gap-6 overflow-x-auto pb-4">{cards}</div>
        </div>
        {footer && <div className="section-container">{footer}</div>}
      </div>
    );
  }

  return (
    // Vertical scroll length matches the horizontal travel distance.
    <div ref={containerRef} className="relative" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 h-screen flex flex-col justify-center pt-16 md:pt-20 overflow-hidden">
        <div className="section-container w-full">
          {heading}

          <div
            ref={viewportRef}
            className="overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]"
          >
            <motion.div ref={trackRef} style={{ x }} className="flex gap-6 w-max will-change-transform">
              {cards}
            </motion.div>
          </div>

          {/* Scroll progress */}
          <div className="mt-8 h-0.5 w-full max-w-xs mx-auto rounded-full bg-glass-border overflow-hidden" aria-hidden="true">
            <motion.div
              style={{ scaleX: progress }}
              className="h-full w-full origin-left bg-gradient-to-r from-accent-blue via-accent-violet to-accent-cyan"
            />
          </div>

          {footer}
        </div>
      </div>
    </div>
  );
}
