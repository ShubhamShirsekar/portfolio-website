'use client';

import { useEffect } from 'react';

/**
 * Enables vertical scroll snapping on <html> while the page that renders this
 * is mounted (e.g. /projects), so each full-screen section settles in view.
 * Children opt in with Tailwind `snap-center` / `snap-start`.
 */
export function PageScrollSnap() {
  useEffect(() => {
    const root = document.documentElement;
    const prevType = root.style.scrollSnapType;
    const prevPadding = root.style.scrollPaddingTop;
    root.style.scrollSnapType = 'y proximity';
    // Keep snapped content clear of the fixed navbar (h-16 / md:h-20).
    root.style.scrollPaddingTop = window.matchMedia('(min-width: 768px)').matches ? '5rem' : '4rem';
    return () => {
      root.style.scrollSnapType = prevType;
      root.style.scrollPaddingTop = prevPadding;
    };
  }, []);

  return null;
}
