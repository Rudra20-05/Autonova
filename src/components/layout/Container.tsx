/**
 * Container.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Container Layout Primitive
 *
 * Polymorphic container with configurable max-width and padding.
 * Used to constrain content width and center it on screen.
 *
 * @example
 * <Container size="xl">...</Container>
 * <Container as="section" size="lg" flush>...</Container>
 * ─────────────────────────────────────────────────────────
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Container.module.css';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';

interface ContainerOwnProps {
  /** HTML element or component to render as. Default: 'div' */
  as?: ElementType;
  /** Maximum width constraint. Default: 'xl' (1280px) */
  size?: ContainerSize;
  /** Remove horizontal padding. Default: false */
  flush?: boolean;
  /** Additional class names */
  className?: string;
  children?: ReactNode;
}

type ContainerProps = ContainerOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof ContainerOwnProps>;

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export function Container({
  as: Tag = 'div',
  size = 'xl',
  flush = false,
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        styles.container,
        styles[`size-${size}`],
        flush && styles.flush,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
