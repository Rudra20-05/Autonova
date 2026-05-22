'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ReactNode, type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
  loading?: boolean;
  className?: string;
}

const variantStyles = {
  primary:
    'bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  ghost:
    'text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover',
  link:
    'text-primary hover:text-primary-light underline-offset-4 hover:underline p-0',
};

const sizeStyles = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-xl',
};

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  loading,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 cursor-pointer',
    variantStyles[variant],
    variant !== 'link' && sizeStyles[size],
    (disabled || loading) && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading && <span className="spinner" />}
      {children}
    </button>
  );
}
