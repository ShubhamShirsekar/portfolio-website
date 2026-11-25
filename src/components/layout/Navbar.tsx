'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  // Highlight the section you're in (e.g. /projects/stackmint-agents -> Projects)
  const activeHref =
    navLinks.find((link) => (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)))?.href ?? '/';
  // On the home hero the bar floats over the image until you scroll
  const transparent = pathname === '/' && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-colors duration-500',
        transparent ? 'bg-transparent' : 'bg-space-900/80 backdrop-blur-md'
      )}
    >
      <nav className="section-container" aria-label="Main">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="font-display text-sm uppercase tracking-[0.45em] text-white transition-colors hover:text-hud-light"
          >
            {siteConfig.name.split(' ')[0]}
          </Link>

          {/* Desktop links: numbered, with the active node on the rail below */}
          <ul className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, i) => {
              const active = link.href === activeHref;
              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'group flex items-baseline gap-2 py-2 font-mono text-[0.7rem] uppercase tracking-[0.28em] transition-colors',
                      active ? 'text-white' : 'text-gray-400 hover:text-white'
                    )}
                  >
                    <span className={cn('text-[0.6rem]', active ? 'text-hud' : 'text-gray-600 group-hover:text-hud/70')}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {link.label}
                  </Link>
                  {active && (
                    <motion.span
                      layoutId="nav-node"
                      className="hud-node absolute -bottom-[1.85rem] left-1/2 -translate-x-1/2"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      aria-hidden="true"
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button: three staggered bars */}
          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 flex-col items-end justify-center gap-1.5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={cn('h-px bg-white transition-all', isMobileMenuOpen ? 'w-6 translate-y-[7px] rotate-45' : 'w-6')} />
            <span className={cn('h-px bg-white transition-all', isMobileMenuOpen ? 'opacity-0' : 'w-4')} />
            <span className={cn('h-px bg-white transition-all', isMobileMenuOpen ? 'w-6 -translate-y-[7px] -rotate-45' : 'w-5')} />
          </button>
        </div>
      </nav>

      {/* The rail: a hairline across the screen */}
      <div
        className={cn('hidden h-px md:block', transparent ? 'bg-white/10' : 'bg-glass-border')}
        aria-hidden="true"
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-glass-border bg-space-900/95 backdrop-blur-lg md:hidden"
          >
            <ul className="section-container flex flex-col py-4">
              {navLinks.map((link, i) => {
                const active = link.href === activeHref;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center gap-4 border-l py-3 pl-4 font-mono text-xs uppercase tracking-[0.28em]',
                        active ? 'border-hud text-white' : 'border-glass-border text-gray-400'
                      )}
                    >
                      <span className="text-[0.6rem] text-hud">{String(i + 1).padStart(2, '0')}</span>
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
