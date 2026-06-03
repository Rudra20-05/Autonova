/**
 * gsap.ts
 * ─────────────────────────────────────────
 * GSAP setup — registers ScrollTrigger once.
 * Import from '@/lib/gsap' in all client components.
 * SSR-safe: plugin registration guarded by window check.
 * ─────────────────────────────────────────
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Global GSAP defaults
  gsap.defaults({
    ease: 'expo.out',
  });
  
  // Respect reduced motion at the GSAP level
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(1000);
    ScrollTrigger.config({ limitCallbacks: true });
  }
}

export { gsap, ScrollTrigger };
export default gsap;
