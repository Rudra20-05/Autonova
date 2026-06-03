'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './ServicesSection.module.css';

const CAPABILITIES = [
  'UI/UX Design',
  'Web Design',
  'Creative Direction',
  'Interactive Prototyping',
  'Creative Front-End',
  'Full-Stack Engineering',
  'E-Commerce Solutions',
  'Performance Optimization',
];

export function ServicesSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion) return;

    const context = gsap.context(() => {
      gsap.from('[data-service-item]', {
        y: 40,
        autoAlpha: 0,
        filter: 'blur(6px)',
        duration: 0.8,
        stagger: 0.07,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from('[data-services-head]', {
        y: 30,
        autoAlpha: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    }, rootRef);

    return () => {
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={rootRef} id="services" className={styles.services} aria-labelledby="services-title">
      <div data-services-head style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Rotating sun ornament */}
        <svg viewBox="0 0 100 100" className={styles.sunIcon} aria-hidden="true">
          <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.9" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="8"
              x2="50"
              y2="0"
              stroke="currentColor"
              strokeWidth="0.8"
              transform={`rotate(${i * 15} 50 50)`}
              opacity="0.6"
            />
          ))}
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={`r-${i}`}
              x1="50"
              y1="16"
              x2="50"
              y2="2"
              stroke="currentColor"
              strokeWidth="0.4"
              transform={`rotate(${i * 15 + 7.5} 50 50)`}
              opacity="0.3"
            />
          ))}
        </svg>

        <h2 id="services-title" className={styles.headline}>
          Capabilities
        </h2>
        <div className={styles.dividerLine} aria-hidden="true" />
      </div>

      <div className={styles.serviceList}>
        {CAPABILITIES.map((service, index) => (
          <span
            key={service}
            className={`${styles.serviceItem} ${index >= 4 ? styles.devItem : ''}`}
            data-service-item
          >
            {service}
          </span>
        ))}
      </div>

      {/* Diamond ornament */}
      <svg viewBox="0 0 40 40" className={styles.shapeIcon} aria-hidden="true">
        <rect x="10" y="10" width="20" height="20" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.5" />
        <rect x="14" y="14" width="12" height="12" transform="rotate(45 20 20)" fill="none" stroke="currentColor" strokeWidth="0.3" />
      </svg>
    </section>
  );
}
