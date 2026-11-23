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
  primary:
    'bg-accent-blue text-white hover:bg-accent-blue/90 shadow-glow-blue hover:shadow-glow-blue/50',
  secondary:
    'bg-glass-white border border-glass-border text-gray-100 hover:bg-glass-white-hover hover:border-glass-border-hover',
  ghost:
    'text-gray-300 hover:text-white hover:bg-glass-white',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
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
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

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
