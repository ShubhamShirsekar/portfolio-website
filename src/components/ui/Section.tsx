'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { variants } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  reveal?: boolean;
}

export function Section({
  children,
  className,
  id,
  reveal = true,
}: SectionProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={shouldReduce ? 'reduced' : 'hidden'}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.01, ease: 'linear' },
      }}
      viewport={{ once: true, margin: '-100px' }}
      variants={variants.fadeUp}
      className={cn('py-16 md:py-24', className)}
    >
      {children}
    </motion.section>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto">
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
