import { cn } from '@/lib/utils';

interface BadgeProps {
  children: string;
  variant?: 'default' | 'blue' | 'violet' | 'cyan';
  className?: string;
}

const variants = {
  default: 'bg-glass-white text-gray-300 border-glass-border',
  blue: 'bg-accent-blue/10 text-accent-blue border-accent-blue/30',
  violet: 'bg-accent-violet/10 text-accent-violet border-accent-violet/30',
  cyan: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30',
};

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
