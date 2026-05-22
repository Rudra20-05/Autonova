'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  center = true,
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 md:mb-16', center && 'text-center', className)}
    >
      <h2
        className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl',
          gradient && 'gradient-text'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]" />
    </motion.div>
  );
}
