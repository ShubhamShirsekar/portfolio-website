'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';
import type { BrandLogo, Project } from '@/types';

/**
 * Scroll-linked image reveal: a horizontal clip-path "curtain" opens from the
 * centre while the image settles from a slight zoom (parallax), driven by the
 * image's own position in the viewport.
 */
const LOGO_HEIGHT = 18;

/** Logo recoloured with the site gradient via CSS mask (uses the logo file's alpha as its shape). */
function BrandMark({ logo }: { logo: BrandLogo }) {
  const mask = `url(${logo.src}) center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={logo.name}
      className="block bg-gradient-to-r from-accent-blue-light via-accent-violet-light to-accent-cyan-light"
      style={{
        width: LOGO_HEIGHT * (logo.scale ?? 1) * logo.aspect,
        height: LOGO_HEIGHT * (logo.scale ?? 1),
        mask,
        WebkitMask: mask,
      }}
    />
  );
}

function RevealImage({ src, alt, logos }: { src: string; alt: string; logos?: BrandLogo[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });
  // Fully open by 80% of the scroll range, so the image (and corner logo) is complete when a row settles
  const clipPath = useTransform(scrollYProgress, [0, 0.8], ['inset(0% 50% 0% 50% round 16px)', 'inset(0% 0% 0% 0% round 16px)']);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1.3, 1]);

  return (
    <div ref={ref} className="relative aspect-[8/5] w-full">
      <motion.div
        style={shouldReduce ? undefined : { clipPath }}
        className="absolute inset-0 overflow-hidden rounded-2xl border border-glass-border shadow-glass"
      >
        <motion.div style={shouldReduce ? undefined : { scale }} className="absolute inset-0 will-change-transform">
          <Image src={src} alt={alt} fill unoptimized sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
        </motion.div>
        {logos && logos.length > 0 && (
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-3 rounded-full bg-space-900/50 px-3 py-2 opacity-80 backdrop-blur-sm">
            {logos.map((logo) => (
              <BrandMark key={logo.name} logo={logo} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

interface ProjectRevealRowProps {
  project: Project;
  index: number;
}

export function ProjectRevealRow({ project, index }: ProjectRevealRowProps) {
  const imageFirst = index % 2 === 0;
  const rowRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();
  // Each row is one screen tall: fully visible when centred, faded out as it
  // enters/leaves, so only one project is visible at a time.
  const { scrollYProgress } = useScroll({ target: rowRef, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0.15, 0.4, 0.6, 0.85], [0, 1, 1, 0]);

  return (
    <motion.article
      ref={rowRef}
      style={shouldReduce ? undefined : { opacity }}
      className={cn(
        'grid grid-cols-1 gap-8 md:gap-12 items-center',
        // Image column gets ~60% of the row
        imageFirst ? 'md:grid-cols-[3fr_2fr]' : 'md:grid-cols-[2fr_3fr]',
        'content-center snap-start min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] py-12'
      )}
    >
      {project.image && (
        <div className={cn(!imageFirst && 'md:order-2')}>
          <RevealImage src={project.image} alt={project.imageAlt ?? ''} logos={project.logos} />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(!imageFirst && 'md:order-1')}
      >
        <div className="flex flex-wrap gap-2 mb-4">
          {project.featured && <Badge variant="violet">Featured</Badge>}
          {project.tags.map((tag) => (
            <Badge key={tag} variant="blue">
              {tag}
            </Badge>
          ))}
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
          <Link href={`/projects/${project.slug}`} className="hover:text-accent-blue-light transition-colors">
            {project.title}
          </Link>
        </h2>

        <p className="text-gray-300 leading-relaxed mb-5">{project.summary}</p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1 mb-6" aria-label="Tools">
          {project.tools.map((tool) => (
            <li key={tool} className="text-xs text-gray-400">
              {tool}
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-accent-blue text-sm font-medium group"
          aria-label={`More details: ${project.title}`}
        >
          More details
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </motion.div>
    </motion.article>
  );
}
