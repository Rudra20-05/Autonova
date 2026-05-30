/**
 * SmoothScrollProvider.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Lenis Smooth Scroll Provider
 * Initialises Lenis and syncs it with Framer Motion's useScroll.
 * Must be a Client Component — wraps children with scroll context.
 * ─────────────────────────────────────────────────────────
 */

'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Initialises Lenis smooth scrolling globally.
 * Disabled automatically when user prefers-reduced-motion.
 * Integrates with Framer Motion scroll hooks via RAF loop.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    // Skip smooth scroll for users who prefer reduced motion
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // RAF loop — drive Lenis tick
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // Expose lenis instance globally for anchor links
    (window as typeof window & { lenis?: Lenis }).lenis = lenis;

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [prefersReduced]);

  return <>{children}</>;
}
