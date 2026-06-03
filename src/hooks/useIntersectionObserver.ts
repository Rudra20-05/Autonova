/**
 * useIntersectionObserver.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Intersection Observer Hook
 * Powers scroll-triggered reveal animations.
 * Wraps the native IntersectionObserver API with a React-friendly
 * interface. Uses react-intersection-observer under the hood.
 * ─────────────────────────────────────────────────────────
 */

'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// ─────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────

interface UseIntersectionObserverOptions {
  /** Fraction of element visible to trigger [0–1]. Default: 0.1 */
  threshold?: number | number[];
  /** Root margin offset. Default: '0px' */
  rootMargin?: string;
  /** If true, only fires once (element stays "visible" forever). Default: true */
  triggerOnce?: boolean;
  /** Skip observation entirely. Default: false */
  skip?: boolean;
}

interface IntersectionObserverResult {
  /** Ref to attach to the target element */
  ref: (node: Element | null) => void;
  /** Whether element is currently intersecting */
  inView: boolean;
  /** The raw IntersectionObserverEntry */
  entry: IntersectionObserverEntry | null;
}

// ─────────────────────────────────────────
// CORE HOOK
// ─────────────────────────────────────────

/**
 * Observes when an element enters/leaves the viewport.
 * Primary hook for scroll-triggered Framer Motion animations.
 *
 * @example
 * const { ref, inView } = useIntersectionObserver({ threshold: 0.2 });
 *
 * return (
 *   <motion.div
 *     ref={ref}
 *     variants={revealVariants}
 *     initial="hidden"
 *     animate={inView ? 'visible' : 'hidden'}
 *   />
 * );
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px 0px -8% 0px',
  triggerOnce = true,
  skip = false,
}: UseIntersectionObserverOptions = {}): IntersectionObserverResult {
  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<Element | null>(null);
  const hasTriggered = useRef(false);

  const disconnect = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const ref = useCallback(
    (node: Element | null) => {
      // Cleanup previous observer
      disconnect();
      elementRef.current = node;

      if (!node || skip) return;

      // Create observer
      observerRef.current = new IntersectionObserver(
        (entries) => {
          const [observedEntry] = entries;
          const isIntersecting = observedEntry.isIntersecting;

          setEntry(observedEntry);

          if (isIntersecting) {
            setInView(true);
            hasTriggered.current = true;
            // Stop observing if triggerOnce
            if (triggerOnce) {
              disconnect();
            }
          } else if (!triggerOnce) {
            setInView(false);
          }
        },
        { threshold, rootMargin },
      );

      observerRef.current.observe(node);
    },
    [disconnect, rootMargin, skip, threshold, triggerOnce],
  );

  useEffect(() => {
    return disconnect;
  }, [disconnect]);

  return { ref, inView, entry };
}

// ─────────────────────────────────────────
// REVEAL HOOK
// Convenience wrapper for common reveal use-case.
// ─────────────────────────────────────────

interface UseRevealOptions {
  /** Threshold for visibility trigger. Default: 0.15 */
  threshold?: number;
  /** Offset from bottom of viewport. Default: -8% */
  rootMargin?: string;
  /** Delay before marking as visible (ms). Default: 0 */
  delay?: number;
}

interface RevealResult {
  ref: (node: Element | null) => void;
  isVisible: boolean;
  hasBeenVisible: boolean;
}

/**
 * Simplified hook for the most common reveal pattern.
 * Returns isVisible for driving Framer Motion variants.
 *
 * @example
 * const { ref, isVisible } = useReveal();
 *
 * <motion.section
 *   ref={ref}
 *   variants={staggerContainerVariants}
 *   initial="hidden"
 *   animate={isVisible ? 'visible' : 'hidden'}
 * />
 */
export function useReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  delay = 0,
}: UseRevealOptions = {}): RevealResult {
  const { ref, inView } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const timer = window.setTimeout(() => {
      setIsVisible(true);
      setHasBeenVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [inView, delay]);

  return { ref, isVisible, hasBeenVisible };
}

// ─────────────────────────────────────────
// LAZY LOAD HOOK
// Track when element is near viewport for lazy loading.
// ─────────────────────────────────────────

/**
 * Triggers when element is within 200px of the viewport.
 * Use for lazy-loading images, heavy components.
 *
 * @example
 * const { ref, shouldLoad } = useLazyLoad();
 */
export function useLazyLoad(): { ref: (node: Element | null) => void; shouldLoad: boolean } {
  const { ref, inView } = useIntersectionObserver({
    threshold: 0,
    rootMargin: '200px',
    triggerOnce: true,
  });

  return { ref, shouldLoad: inView };
}
