'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import styles from './ProcessSection.module.css';

const STEPS = [
  {
    number: '01',
    title: 'Wireframe',
    body: 'We map the user journey and create detailed wireframes for every page and interaction.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Pixel-perfect UI designs that align with your brand and delight your users.',
  },
  {
    number: '03',
    title: 'Develop',
    body: 'Clean, performant code built with modern frameworks and best practices.',
  },
  {
    number: '04',
    title: 'Test',
    body: 'Rigorous QA across devices, browsers, and performance benchmarks.',
  },
  {
    number: '05',
    title: 'Launch',
    body: 'Deployment, monitoring, and post-launch optimization for sustained growth.',
  },
];

export function ProcessSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion) return;

    const context = gsap.context(() => {
      // Parallax scroll for watermark text
      gsap.to('[data-process-parallax="fast"]', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          scrub: 0.8,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

      // Animate drawing the progress line along the process steps
      gsap.to('[data-timeline-progress]', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '[data-step-list]',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 0.3,
        },
      });

      gsap.fromTo('[data-process-header]',
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo('[data-process-reveal-line]',
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

      const steps = rootRef.current!.querySelectorAll('[data-step]');
      steps.forEach((step, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(step,
          { x: fromLeft ? -120 : 120, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            ease: 'power1.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 95%',
              end: 'top 65%',
              scrub: 1,
            }
          }
        );
      });
    }, rootRef);

    return () => {
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [prefersReducedMotion]);

  return (
    <section ref={rootRef} id="process" className={styles.process} aria-labelledby="process-title">
      {/* Background watermark text layer */}
      <div className={styles.bgWatermark} data-process-parallax="fast" aria-hidden="true">
        Process
      </div>

      <div className={styles.headerWrap} data-process-header>
        <p className={styles.sectionLabel}>How We Work</p>
        <h2 id="process-title" className={styles.sectionTitle}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }} data-process-reveal-line>Research. Shape.</span>
          </span>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }} data-process-reveal-line>Compose. Engineer. Refine.</span>
          </span>
        </h2>
      </div>

      <div className={styles.stepList} data-step-list>
        {/* Timeline connecting line */}
        <div className={styles.timelineLine} aria-hidden="true">
          <div className={styles.timelineProgress} data-timeline-progress />
        </div>

        {STEPS.map((step) => (
          <div key={step.number} className={styles.step} data-step>
            <span className={styles.stepNumber}>{step.number}</span>
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
