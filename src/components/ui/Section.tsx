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
  className?: string;
}

export function SectionHeading({ title, subtitle, className, as: Heading = 'h2' }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <Heading className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </Heading>
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
