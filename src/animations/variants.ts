/**
 * variants.ts
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Framer Motion Variant Presets
 * Reusable motion variant definitions.
 * Every animation in the app should start from one of these.
 * ─────────────────────────────────────────────────────────
 */

import type { Variants } from 'framer-motion';
import {
  DURATION,
  EASING,
  SPRING,
  STAGGER,
  createStaggerTransition,
} from './transitions';

// ─────────────────────────────────────────
// FADE VARIANTS
// ─────────────────────────────────────────

/** Simple opacity fade */
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

// ─────────────────────────────────────────
// FADE UP — primary scroll reveal pattern
// ─────────────────────────────────────────

/** Core fade-up variant — use as standalone or within a stagger parent */
export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

/** Subtle fade-up — for secondary elements */
export const fadeUpSubtleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: DURATION.fast,
      ease: EASING.accelerate,
    },
  },
};

/** Dramatic fade-up — hero elements */
export const fadeUpHeroVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 48,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.cinema,
    },
  },
};

// ─────────────────────────────────────────
// FADE DOWN
// ─────────────────────────────────────────

export const fadeDownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: DURATION.normal,
      ease: EASING.accelerate,
    },
  },
};

// ─────────────────────────────────────────
// FADE SIDES
// ─────────────────────────────────────────

export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    x: 16,
    transition: { duration: DURATION.normal, ease: EASING.accelerate },
  },
};

export const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    x: -16,
    transition: { duration: DURATION.normal, ease: EASING.accelerate },
  },
};

// ─────────────────────────────────────────
// SCALE VARIANTS
// ─────────────────────────────────────────

export const scaleInVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.reveal,
      ease: EASING.cinema,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: DURATION.normal, ease: EASING.accelerate },
  },
};

export const scaleUpVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      ...SPRING.gentle,
    },
  },
};

// ─────────────────────────────────────────
// STAGGER CONTAINER VARIANTS
// Parent orchestrates children via staggerChildren.
// ─────────────────────────────────────────

/** Default stagger container — children animate in sequence */
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: createStaggerTransition(STAGGER.normal),
  },
  exit: {
    opacity: 0,
    transition: createStaggerTransition(STAGGER.fast / 2),
  },
};

/** Fast stagger — dense UI lists */
export const staggerFastVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: createStaggerTransition(STAGGER.fast),
  },
};

/** Slow stagger — cinematic feature cards */
export const staggerSlowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: createStaggerTransition(STAGGER.cinematic, 0.1),
  },
};

/** Stagger container with delayed start */
export const createStaggerContainer = (
  stagger: number = STAGGER.normal,
  delay: number = 0,
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

// ─────────────────────────────────────────
// REVEAL VARIANTS
// Used with IntersectionObserver for scroll-based reveals.
// ─────────────────────────────────────────

/** Standard scroll reveal — most common usage */
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.cinema,
    },
  },
};

/** Clip reveal — text line by line */
export const clipRevealVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 100% 0 0)',
    opacity: 0,
  },
  visible: {
    clipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    transition: {
      duration: DURATION.cinematic,
      ease: EASING.cinema,
    },
  },
};

/** Draw line reveal — SVG paths */
export const drawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: DURATION.long, ease: EASING.cinema },
      opacity: { duration: DURATION.fast },
    },
  },
};

// ─────────────────────────────────────────
// OVERLAY / MODAL VARIANTS
// ─────────────────────────────────────────

export const overlayVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.normal, ease: EASING.decelerate },
  },
  exit: {
    opacity: 0,
    transition: { duration: DURATION.fast, ease: EASING.accelerate },
  },
};

export const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...SPRING.gentle,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    y: 8,
    transition: { duration: DURATION.normal, ease: EASING.accelerate },
  },
};

export const drawerVariants: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { ...SPRING.stiff },
  },
  exit: {
    x: '100%',
    transition: { duration: DURATION.slow, ease: EASING.accelerate },
  },
};

// ─────────────────────────────────────────
// PAGE TRANSITION VARIANTS
// ─────────────────────────────────────────

export const pageVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.page,
      ease: EASING.cinema,
      staggerChildren: STAGGER.normal,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: DURATION.slow,
      ease: EASING.accelerate,
    },
  },
};

// ─────────────────────────────────────────
// HOVER MICRO-INTERACTION VARIANTS
// These are applied directly on whileHover / whileTap props.
// ─────────────────────────────────────────

export const hoverLift = {
  y: -4,
  transition: { duration: DURATION.normal, ease: EASING.cinema },
};

export const hoverScale = {
  scale: 1.04,
  transition: { duration: DURATION.normal, ease: EASING.cinema },
};

export const hoverGlow = {
  boxShadow: '0 0 30px rgba(99, 68, 245, 0.35), 0 0 60px rgba(99, 68, 245, 0.15)',
  transition: { duration: DURATION.normal, ease: EASING.cinema },
};

export const tapScale = {
  scale: 0.97,
  transition: { duration: DURATION.micro, ease: EASING.sharp },
};

export const tapScaleLight = {
  scale: 0.99,
  transition: { duration: DURATION.micro, ease: EASING.sharp },
};
