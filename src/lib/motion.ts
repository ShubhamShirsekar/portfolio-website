import { useReducedMotion } from 'framer-motion';

/**
 * Motion tokens — subtle tier.
 * Kept intentionally restrained for a minimal, tech-friendly tone.
 */

export const duration = {
  fast: 0.2,
  base: 0.35,
  slow: 0.55,
} as const;

export const easing = {
  easeOut: [0.25, 1, 0.5, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOut: [0.45, 0, 0.55, 1],
} as const;

/**
 * Shared variants used across sections & cards.
 * All animations short-circuit under prefers-reduced-motion via `reduced`.
 */
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.base, ease: easing.easeOut },
    },
    reduced: { opacity: 1, y: 0, transition: { duration: 0 } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: duration.base, ease: easing.easeOut },
    },
    reduced: { opacity: 1, transition: { duration: 0 } },
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: duration.base,
        ease: easing.easeOut,
        staggerChildren: 0.08,
      },
    },
    reduced: { opacity: 1, transition: { duration: 0 } },
  },
  staggerItem: {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.fast, ease: easing.easeOut },
    },
    reduced: { opacity: 1, y: 0, transition: { duration: 0 } },
  },
  hoverSpring: {
    rest: { scale: 1 },
    hover: {
      scale: 1.02,
      transition: { type: 'spring', stiffness: 300, damping: 22 },
    },
    reduced: { scale: 1, transition: { duration: 0 } },
  },
  pageTransition: {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: duration.base, ease: easing.easeOut },
    },
    exit: {
      opacity: 0,
      y: -4,
      transition: { duration: duration.fast, ease: easing.easeInOut },
    },
    reduced: {
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
      exit: { opacity: 0, y: 0, transition: { duration: 0 } },
    },
  },
} as const;

/**
 * Hook that returns the resolved variant key ('visible' vs 'reduced')
 * so components can short-circuit animation under reduced motion.
 */
export function useMotionVariant(base: 'visible' | 'hidden') {
  const shouldReduce = useReducedMotion();
  return shouldReduce ? 'reduced' : base;
}
