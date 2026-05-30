/**
 * Grid.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Grid Layout Primitive
 *
 * CSS Grid wrapper with a clean, typed API.
 * Handles responsive column collapsing automatically.
 *
 * @example
 * <Grid cols={3} gap={8}>
 *   <Card />
 *   <Card />
 *   <Card />
 * </Grid>
 *
 * // Auto-responsive grid
 * <Grid cols="auto-md" gap={6}>...</Grid>
 *
 * // 12-column layout grid
 * <Grid cols={12} gap={4}>
 *   <div style={{ gridColumn: 'span 8' }}>Main</div>
 *   <div style={{ gridColumn: 'span 4' }}>Sidebar</div>
 * </Grid>
 * ─────────────────────────────────────────────────────────
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Grid.module.css';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 12 | 'auto-sm' | 'auto-md' | 'auto-lg';
type GridGap  = 0 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16;
type GridAlign = 'start' | 'center' | 'end' | 'stretch';

interface GridOwnProps {
  /** HTML element to render as. Default: 'div' */
  as?: ElementType;
  /** Number of columns or auto-fit mode. Default: 1 */
  cols?: GridCols;
  /** Gap between cells (from spacing scale). Default: 6 */
  gap?: GridGap;
  /** Align items in the block axis. Default: 'stretch' */
  align?: GridAlign;
  /** Enable automatic responsive column collapse. Default: false */
  responsive?: boolean;
  className?: string;
  children?: ReactNode;
}

type GridProps = GridOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof GridOwnProps>;

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export function Grid({
  as: Tag = 'div',
  cols = 1,
  gap = 6,
  align = 'stretch',
  responsive = false,
  className,
  children,
  ...rest
}: GridProps) {
  return (
    <Tag
      className={cn(
        styles.grid,
        styles[`cols-${cols}`],
        styles[`gap-${gap}`],
        styles[`align-${align}`],
        responsive && styles.responsive,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
