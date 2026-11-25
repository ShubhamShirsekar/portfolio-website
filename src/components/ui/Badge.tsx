import { cn } from '@/lib/utils';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'blue' | 'violet' | 'cyan';
  className?: string;
}

const variants = {
  default: 'bg-white/5 text-gray-300 border-white/15',
  blue: 'bg-hud/10 text-hud-light border-hud/30',
  violet: 'bg-accent-violet/10 text-accent-violet-light border-accent-violet/30',
  cyan: 'bg-white/[0.03] text-gray-300 border-white/15',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
