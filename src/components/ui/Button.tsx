import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  // Teal-filled HUD button (the "CONTINUE" button in the booking flow)
  primary:
    'border border-hud/50 bg-hud/15 text-hud-light hover:bg-hud/25 hover:border-hud hover:shadow-glow-cyan',
  // Hairline outline (the "GET STARTED" button on the slider)
  secondary:
    'border border-white/25 bg-black/20 text-gray-100 hover:border-white/60 hover:bg-white/5',
  ghost:
    'text-gray-300 hover:text-white hover:bg-white/5',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-[0.65rem]',
  md: 'px-6 py-3 text-[0.7rem]',
  lg: 'px-7 py-3.5 text-[0.72rem]',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-mono uppercase tracking-[0.25em] backdrop-blur-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:h-4 [&_svg]:w-4';

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
