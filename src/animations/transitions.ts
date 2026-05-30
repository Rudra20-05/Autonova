/**
 * transitions.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Framer Motion Transition Presets
 * Centralised motion timing & easing definitions.
 * Maps directly to the token system in tokens.css.
 * ─────────────────────────────────────────────────────────
 */

import type { Transition } from 'framer-motion';

// ─────────────────────────────────────────
// EASING DEFINITIONS
// Mirrors the CSS custom property easing curves.
// ─────────────────────────────────────────

export const EASING = {
  /** Standard ease — Material decelerate */
  linear: [0, 0, 1, 1] as const,
  /** Expo out — snappy reveal, our signature curve */
  cinema: [0.16, 1, 0.3, 1] as const,
  /** Spring — gentle overshoot */
  spring: [0.34, 1.56, 0.64, 1] as const,
  /** Quad out — butter smooth */
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  /** Anticipation */
  anticipate: [0.36, 0, 0.66, -0.56] as const,
  /** Material decelerate */
  decelerate: [0, 0, 0.2, 1] as const,
  /** Material accelerate */
  accelerate: [0.4, 0, 1, 1] as const,
  /** Sharp */
  sharp: [0.4, 0, 0.6, 1] as const,
  /** Standard ease-in-out */
  inOut: [0.4, 0, 0.2, 1] as const,
} as const;

// ─────────────────────────────────────────
// DURATION TOKENS (ms → seconds for Framer)
// ─────────────────────────────────────────

export const DURATION = {
  instant:  0,
  micro:    0.075,
  fast:     0.15,
  base:     0.25,
  normal:   0.3,
  slow:     0.4,
  reveal:   0.6,
  cinematic: 0.7,
  page:     0.8,
  sluggish: 1.0,
  long:     1.2,
  xl:       1.5,
  ambient:  2.0,
} as const;

// ─────────────────────────────────────────
// SPRING CONFIGS
// Used when physics feel is desired over cubic-bezier.
// ─────────────────────────────────────────

export const SPRING = {
  /** Snappy spring — UI interactions */
  snappy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
    mass: 0.8,
  },
  /** Gentle spring — entrances */
  gentle: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 24,
    mass: 1,
  },
  /** Wobbly spring — playful micro-interactions */
  wobbly: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 18,
    mass: 1.2,
  },
  /** Stiff spring — navigation / overlays */
  stiff: {
    type: 'spring' as const,
    stiffness: 600,
    damping: 40,
    mass: 0.6,
  },
  /** Slow spring — hero elements */
  slow: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 20,
    mass: 1.5,
  },
} as const;

// ─────────────────────────────────────────
// TRANSITION PRESETS
// Named semantic transitions for consistent motion.
// ─────────────────────────────────────────

/** Instant state change — no animation */
export const T_INSTANT: Transition = {
  duration: DURATION.instant,
};

/** Micro interaction — hover/active states */
export const T_MICRO: Transition = {
  duration: DURATION.micro,
  ease: EASING.decelerate,
};

/** Fast UI feedback — button presses, toggles */
export const T_FAST: Transition = {
  duration: DURATION.fast,
  ease: EASING.cinema,
};

/** Base transition — default for most elements */
export const T_BASE: Transition = {
  duration: DURATION.normal,
  ease: EASING.cinema,
};

/** Slow entry — cards, panels sliding in */
export const T_SLOW: Transition = {
  duration: DURATION.slow,
  ease: EASING.cinema,
};

/** Reveal — scroll-triggered fade-ups */
export const T_REVEAL: Transition = {
  duration: DURATION.reveal,
  ease: EASING.cinema,
};

/** Cinematic — hero section, full-page animations */
export const T_CINEMATIC: Transition = {
  duration: DURATION.cinematic,
  ease: EASING.cinema,
};

/** Page — route transitions */
export const T_PAGE: Transition = {
  duration: DURATION.page,
  ease: EASING.smooth,
};

/** Tween variant — explicit tween type */
export const T_TWEEN = (duration = DURATION.normal): Transition => ({
  type: 'tween',
  duration,
  ease: EASING.cinema,
});

/** Spring variant — explicit spring */
export const T_SPRING = (config: keyof typeof SPRING = 'gentle'): Transition =>
  SPRING[config];

// ─────────────────────────────────────────
// STAGGER HELPERS
// For orchestrating list / grid item entrances.
// ─────────────────────────────────────────

export const STAGGER = {
  /** Child delay per item (seconds) */
  fast:    0.05,
  normal:  0.08,
  slow:    0.12,
  cinematic: 0.15,
} as const;

/** Creates a stagger container transition */
export const createStaggerTransition = (
  staggerChildren: number = STAGGER.normal,
  delayChildren: number = 0,
): Transition => ({
  staggerChildren,
  delayChildren,
});

/** Creates an item transition within a stagger container */
export const createStaggerItemTransition = (
  duration: number = DURATION.reveal,
): Transition => ({
  duration,
  ease: EASING.cinema,
});
