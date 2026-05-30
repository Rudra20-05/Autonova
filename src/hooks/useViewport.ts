/**
 * useViewport.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Viewport Dimension Hooks
 * SSR-safe hooks for reading window dimensions.
 * Debounced to avoid excessive re-renders on resize.
 * ─────────────────────────────────────────────────────────
 */

'use client';

import { useCallback, useEffect, useState } from 'react';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

interface ViewportSize {
  width: number;
  height: number;
}

interface BreakpointState {
  isMobile: boolean;    // < 640px
  isTablet: boolean;    // 640px – 1023px
  isDesktop: boolean;   // ≥ 1024px
  isWide: boolean;      // ≥ 1280px
  isUltraWide: boolean; // ≥ 1536px
}

// ─────────────────────────────────────────
// BREAKPOINT CONSTANTS
// ─────────────────────────────────────────

const BP = {
  sm:  640,
  md:  768,
  lg:  1024,
  xl:  1280,
  '2xl': 1536,
} as const;

// ─────────────────────────────────────────
// VIEWPORT SIZE HOOK
// ─────────────────────────────────────────

/**
 * Returns current window dimensions.
 * Updates on resize with a debounced listener.
 * Returns { width: 0, height: 0 } during SSR.
 *
 * @example
 * const { width, height } = useViewportSize();
 */
export function useViewportSize(): ViewportSize {
  const [size, setSize] = useState<ViewportSize>({ width: 0, height: 0 });

  const handleResize = useCallback(() => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    // Set initial size
    handleResize();

    // Debounced resize listener
    let rafId: number;
    const debouncedResize = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleResize);
    };

    window.addEventListener('resize', debouncedResize, { passive: true });
    return () => {
      window.removeEventListener('resize', debouncedResize);
      cancelAnimationFrame(rafId);
    };
  }, [handleResize]);

  return size;
}

// ─────────────────────────────────────────
// BREAKPOINT HOOK
// ─────────────────────────────────────────

/**
 * Returns boolean flags for each breakpoint.
 * Prefer this over useViewportSize for conditional rendering.
 *
 * @example
 * const { isMobile, isDesktop } = useBreakpoint();
 * if (isMobile) return <MobileNav />;
 */
export function useBreakpoint(): BreakpointState {
  const { width } = useViewportSize();

  return {
    isMobile:    width > 0 && width < BP.sm,
    isTablet:    width >= BP.sm && width < BP.lg,
    isDesktop:   width >= BP.lg,
    isWide:      width >= BP.xl,
    isUltraWide: width >= BP['2xl'],
  };
}

// ─────────────────────────────────────────
// MEDIA QUERY HOOK
// ─────────────────────────────────────────

/**
 * Listens to an arbitrary media query string.
 * SSR-safe, updates reactively.
 *
 * @example
 * const isPortrait = useMediaQuery('(orientation: portrait)');
 * const isDark = useMediaQuery('(prefers-color-scheme: dark)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);

    setMatches(mediaQuery.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, [query]);

  return matches;
}

// ─────────────────────────────────────────
// SCROLL POSITION HOOK
// ─────────────────────────────────────────

interface ScrollPosition {
  scrollY: number;
  scrollX: number;
  scrollDirection: 'up' | 'down' | 'idle';
  isAtTop: boolean;
  isAtBottom: boolean;
  scrollProgress: number; // 0–1 normalized
}

/**
 * Tracks scroll position with direction detection.
 * Useful for sticky navbars, parallax, progress bars.
 *
 * @example
 * const { scrollY, isAtTop, scrollDirection } = useScrollPosition();
 */
export function useScrollPosition(): ScrollPosition {
  const [state, setState] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
    scrollDirection: 'idle',
    isAtTop: true,
    isAtBottom: false,
    scrollProgress: 0,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

        setState({
          scrollY,
          scrollX,
          scrollDirection:
            scrollY > lastScrollY ? 'down'
            : scrollY < lastScrollY ? 'up'
            : 'idle',
          isAtTop: scrollY < 10,
          isAtBottom: scrollY >= maxScroll - 10,
          scrollProgress: Math.min(Math.max(scrollProgress, 0), 1),
        });

        lastScrollY = scrollY;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initialize

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return state;
}
