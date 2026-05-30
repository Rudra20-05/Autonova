/**
 * Stack.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Stack Layout Primitive
 *
 * Flexbox-based linear layout primitive.
 * Use for any 1-D layout (nav items, card content, button groups).
 *
 * @example
 * // Vertical stack
 * <Stack gap={4}>
 *   <Label />
 *   <Input />
 *   <Button />
 * </Stack>
 *
 * // Horizontal stack with centered alignment
 * <Stack direction="horizontal" gap={3} align="center">
 *   <Icon />
 *   <span>Label</span>
 * </Stack>
 *
 * // Responsive wrapping row
 * <Stack direction="horizontal" gap={4} wrap align="center" justify="between">
 *   ...
 * </Stack>
 * ─────────────────────────────────────────────────────────
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Stack.module.css';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type StackDirection = 'vertical' | 'horizontal';
type StackGap = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 | 12 | 16;
type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

interface StackOwnProps {
  /** HTML element or component to render as. Default: 'div' */
  as?: ElementType;
  /** Flex direction. Default: 'vertical' */
  direction?: StackDirection;
  /** Space between children. Default: 4 */
  gap?: StackGap;
  /** Cross-axis alignment (align-items). Default: 'stretch' */
  align?: StackAlign;
  /** Main-axis distribution (justify-content). Default: 'start' */
  justify?: StackJustify;
  /** Allow children to wrap. Default: false */
  wrap?: boolean;
  /** Expand to fill container width. Default: false */
  full?: boolean;
  className?: string;
  children?: ReactNode;
}

type StackProps = StackOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof StackOwnProps>;

// ─────────────────────────────────────────
// GAP KEY HELPER
// Maps numeric gap to CSS Module class key.
// ─────────────────────────────────────────

function gapToKey(gap: StackGap): string {
  // Convert 0.5 → '0-5', 1.5 → '1-5', integers → direct
  return String(gap).replace('.', '-');
}

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export function Stack({
  as: Tag = 'div',
  direction = 'vertical',
  gap = 4,
  align = 'stretch',
  justify = 'start',
  wrap = false,
  full = false,
  className,
  children,
  ...rest
}: StackProps) {
  return (
    <Tag
      className={cn(
        styles.stack,
        styles[`direction-${direction}`],
        styles[`gap-${gapToKey(gap)}`],
        styles[`align-${align}`],
        styles[`justify-${justify}`],
        wrap && styles.wrap,
        full && styles.full,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
