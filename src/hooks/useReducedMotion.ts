/**
 * useReducedMotion.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Reduced Motion Hook
 * Detects user's prefers-reduced-motion preference.
 * All animations must respect this flag.
 * ─────────────────────────────────────────────────────────
 */

'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true if the user has requested reduced motion via OS settings.
 * Automatically updates when the preference changes.
 *
 * @example
 * const shouldReduceMotion = useReducedMotion();
 * const transition = shouldReduceMotion ? T_INSTANT : T_CINEMATIC;
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState<boolean>(() => {
    // SSR safe — default to false on server
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    // Modern API
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older Safari
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return prefersReduced;
}
