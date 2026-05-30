/**
 * Section.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Section Layout Primitive
 *
 * Page section wrapper with vertical rhythm and background variants.
 * Wraps a <Container> by default for consistent horizontal alignment.
 *
 * @example
 * <Section padding="lg" bg="muted" bordered>
 *   <Container size="xl">...</Container>
 * </Section>
 *
 * // Hero — full width with custom overflow control
 * <Section as="header" padding="xl" clipped>
 *   ...
 * </Section>
 * ─────────────────────────────────────────────────────────
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import styles from './Section.module.css';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

type SectionPadding = 'none' | 'sm' | 'md' | 'lg' | 'xl';
type SectionBackground = 'transparent' | 'base' | 'subtle' | 'muted' | 'elevated';

interface SectionOwnProps {
  /** HTML element or component. Default: 'section' */
  as?: ElementType;
  /** Vertical padding scale. Default: 'md' */
  padding?: SectionPadding;
  /** Background fill variant. Default: 'transparent' */
  bg?: SectionBackground;
  /** Add a top border divider. Default: false */
  bordered?: boolean;
  /** Clip overflowing content. Default: false */
  clipped?: boolean;
  /** Accessible label for the section landmark */
  'aria-label'?: string;
  className?: string;
  children?: ReactNode;
}

type SectionProps = SectionOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof SectionOwnProps>;

// ─────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────

export function Section({
  as: Tag = 'section',
  padding = 'md',
  bg = 'transparent',
  bordered = false,
  clipped = false,
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag
      className={cn(
        styles.section,
        styles[`padding-${padding}`],
        styles[`bg-${bg}`],
        bordered && styles.bordered,
        clipped && styles.clipped,
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
