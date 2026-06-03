'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TextRoll } from '@/components/atoms/TextRoll';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion) return;

    const context = gsap.context(() => {
      // Parallax scroll for background visual layers
      gsap.to('[data-contact-parallax="slow"]', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

      gsap.to('[data-contact-parallax="fast"]', {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          scrub: 0.8,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

      gsap.fromTo('[data-contact-header]',
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo('[data-contact-reveal-line]',
        { yPercent: 108, rotate: 2 },
        {
          yPercent: 0,
          rotate: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.from('[data-contact-email]', {
        scale: 0.95,
        autoAlpha: 0,
        duration: 1.2,
        delay: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
          once: true,
        },
      });

      gsap.from('[data-contact-col]', {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '[data-contact-grid]',
          start: 'top 90%',
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
    <section ref={rootRef} id="contact" className={styles.contact} aria-labelledby="contact-title">
      {/* Visual background layers */}
      <div className={styles.bgGrid} data-contact-parallax="slow" aria-hidden="true" />
      <div className={styles.bgGlow} data-contact-parallax="fast" aria-hidden="true" />

      <div className={styles.headerWrap} data-contact-header>
        {/* Rotating sun ornament */}
        <svg viewBox="0 0 100 100" className={styles.sunSmall} aria-hidden="true">
          <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.9" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line
              key={i}
              x1="50" y1="8" x2="50" y2="0"
              stroke="currentColor" strokeWidth="0.8"
              transform={`rotate(${i * 15} 50 50)`}
              opacity="0.6"
            />
          ))}
        </svg>
        <span className={styles.sectionLabel}>Get in Touch</span>
      </div>

      <h2 id="contact-title" className={styles.sectionTitle} data-contact-header>
        <div className={styles.line1}>
          <span className={styles.revealWrapper}>
            <span style={{ display: 'inline-block' }} data-contact-reveal-line>Don&apos;t hesitate</span>
          </span>
        </div>
        <div className={styles.line2}>
          <span className={styles.revealWrapper}>
            <span style={{ display: 'inline-block' }} data-contact-reveal-line>to</span>
          </span>
          <span className={styles.inlineSunWrapper}>
            <img src="/sun.svg?v=2" className={styles.sunWheelInline} alt="" aria-hidden="true" />
          </span>
          <span className={styles.revealWrapper}>
            <span style={{ display: 'inline-block' }} data-contact-reveal-line>say Hello</span>
          </span>
        </div>
        <div className={styles.line3}>
          <span className={styles.revealWrapper}>
            <span style={{ display: 'inline-block' }} data-contact-reveal-line>to our</span>
          </span>
        </div>
        <div className={styles.line4}>
          <span className={styles.revealWrapper}>
            <span style={{ display: 'inline-block' }} data-contact-reveal-line>team</span>
          </span>
        </div>
      </h2>

      <div className={styles.emailBlock} data-contact-email>
        <span className={styles.emailKicker}>Client Inquiries</span>
        <a href="mailto:hello@autonova.ai" className={`${styles.emailLink} textRollTrigger`}>
          <TextRoll text="hello@autonova.ai" />
        </a>
      </div>

      <div className={styles.footerGrid} data-contact-grid>
        <div className={styles.gridCol} data-contact-col>
          <span className={styles.colLabel}>Location</span>
          <span className={styles.colContent}>
            Mumbai, India<br />
            19.0760° N, 72.8777° E
          </span>
        </div>

        <div className={styles.gridCol} data-contact-col>
          <span className={styles.colLabel}>Local Time</span>
          <span className={styles.colContent}>
            GMT +5:30<br />
            Standard Business Hours
          </span>
        </div>

        <div className={styles.gridCol} data-contact-col>
          <span className={styles.colLabel}>Connect</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} textRollTrigger`}
          >
            <TextRoll text="LinkedIn" /> <span className={styles.arrow}>↗</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} textRollTrigger`}
          >
            <TextRoll text="Instagram" /> <span className={styles.arrow}>↗</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} textRollTrigger`}
          >
            <TextRoll text="GitHub" /> <span className={styles.arrow}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
