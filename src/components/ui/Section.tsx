'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  title: string;
  as?: 'h1' | 'h2';
  subtitle?: string;
  /** Small HUD index shown above the title, e.g. "01" */
  index?: string;
  /** Left-align instead of centring */
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  index,
  align = 'center',
  className,
  as: Heading = 'h2',
}: SectionHeadingProps) {
  const centered = align === 'center';
  return (
    <div className={cn('mb-12', centered ? 'text-center' : 'text-left', className)}>
      <div className={cn('mb-5 flex items-center gap-3', centered && 'justify-center')} aria-hidden="true">
        <span className="hud-label text-hud">{index ?? '//'}</span>
        <span className="h-px w-10 bg-hud/40" />
      </div>
      <Heading className="hud-title text-2xl leading-tight md:text-4xl">{title}</Heading>
      {subtitle && (
        <p className={cn('mt-5 max-w-2xl font-mono text-sm leading-relaxed text-gray-400', centered && 'mx-auto')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn('section-container', className)}>
      {children}
    </div>
  );
}
