'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradientBorder?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  hover = true,
  glass = false,
  gradientBorder = false,
  padding = 'md',
  onClick,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      onClick={onClick}
      className={cn(
        'rounded-xl border border-border bg-bg-surface transition-all duration-300',
        paddingStyles[padding],
        hover && 'hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5',
        glass && 'glass',
        gradientBorder && 'gradient-border',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
