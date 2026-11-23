'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import RubberSegment from '@/components/reactbits/RubberSegment';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/content';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  // Highlight the section you're in (e.g. /projects/stackmint-agents -> Projects)
  const activeHref =
    navLinks.find((link) => (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)))?.href ?? '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-space-900 border-b border-glass-border">
      <nav className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold text-white hover:text-accent-blue transition-colors"
          >
            {siteConfig.name.split(' ')[0]}
            <span className="text-accent-blue">.</span>
          </Link>

          {/* Desktop Navigation (React Bits Rubber Segment, links mode) */}
          <div className="hidden md:block">
            <RubberSegment
              navigation
              items={navLinks.map((link) => ({ value: link.href, label: link.label }))}
              value={activeHref}
              onChange={(href) => router.push(href)}
              trackColor="rgba(255,255,255,0.06)"
              thumbColor="#3b82f6"
              textColor="#d1d5db"
              activeTextColor="#ffffff"
              radius={12}
              size="md"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-space-800/95 backdrop-blur-lg border-b border-glass-border"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'py-2 transition-colors',
                    link.isCTA
                      ? 'text-accent-blue font-medium'
                      : 'text-gray-300 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
