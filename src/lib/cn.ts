/**
 * cn.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Class Name Utility
 * Merges clsx + tailwind-merge for safe class composition.
 * Even though we don't use Tailwind for styling, tailwind-merge
 * safely handles any className string conflicts.
 * ─────────────────────────────────────────────────────────
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge class names safely, resolving conflicts intelligently.
 * Works with CSS Module class strings and plain class names.
 *
 * @example
 * cn(styles.base, isActive && styles.active, 'custom-class')
 * cn('btn', variant === 'primary' && 'btn--primary', className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
