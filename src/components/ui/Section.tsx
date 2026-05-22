'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'surface' | 'mesh';
  fullWidth?: boolean;
}

export function Section({
  children,
  className,
  id,
  background = 'default',
  fullWidth = false,
}: SectionProps) {
  const bgStyles = {
    default: 'bg-bg-primary',
    surface: 'bg-bg-surface',
    mesh: 'mesh-gradient',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24',
        bgStyles[background],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(!fullWidth && 'mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8')}
      >
        {children}
      </motion.div>
    </section>
  );
}
