'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { variants } from '@/lib/motion';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={variants.pageTransition}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={cn('min-h-[calc(100vh-5rem)]', className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}