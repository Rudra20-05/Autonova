'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { TextRoll } from '@/components/atoms/TextRoll';
import styles from './AboutSection.module.css';

interface Founder {
  name: string;
  role: string;
  initials: string;
  spec: string;
  gradient: string;
  linkedin: string;
  instagram: string;
}

const FOUNDERS: Founder[] = [
  {
    name: 'M Sreejith',
    role: 'Co-Founder',
    initials: 'MS',
    spec: 'Technical Pricing Specialist • Client Relations & Outreach',
    gradient: 'linear-gradient(135deg, #efece2, #b89b72)',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Aryan Nate',
    role: 'Founder',
    initials: 'AN',
    spec: 'Full-Stack Architect • System Design & Engineering Lead',
    gradient: 'linear-gradient(135deg, #d9ddbb, #7e8652)',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
  {
    name: 'Zayd Baig',
    role: 'Co-Founder',
    initials: 'ZB',
    spec: 'Operations & Strategy • Business Optimization Lead',
    gradient: 'linear-gradient(135deg, #d8d2c3, #b3bb80)',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
  },
];

export function AboutSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!rootRef.current || prefersReducedMotion) return;

    const context = gsap.context(() => {
      // Parallax scroll for visual background layers
      gsap.to('[data-about-parallax="slow"]', {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

      gsap.to('[data-about-parallax="fast"]', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          scrub: 0.8,
          start: 'top bottom',
          end: 'bottom top',
        },
      });

      gsap.fromTo('[data-about-header]',
        { scale: 0.8, y: 100, autoAlpha: 0, filter: 'blur(10px)' },
        {
          scale: 1,
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 90%',
            end: 'top 30%',
            scrub: 1.2,
          },
        }
      );

      gsap.fromTo('[data-about-block]',
        { y: 60, autoAlpha: 0, filter: 'blur(8px)' },
        {
          y: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('[data-about-reveal-line]',
        { yPercent: 120, rotate: 5, autoAlpha: 0 },
        {
          yPercent: 0,
          rotate: 0,
          autoAlpha: 1,
          stagger: 0.12,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 85%',
            end: 'top 35%',
            scrub: 1.2,
          },
        }
      );

      const isMobile = window.innerWidth < 768;

      // Mission Cards slide in from left/right on scroll (scrubbed)
      const missionCards = rootRef.current!.querySelectorAll(`.${styles.missionCard}`);
      missionCards.forEach((card, i) => {
        const fromLeft = i === 0;
        const xOffset = isMobile ? 0 : (fromLeft ? -100 : 100);
        const yOffset = isMobile ? 40 : 50;
        const scaleVal = isMobile ? 1 : 0.9;
        const rotateYVal = isMobile ? 0 : (fromLeft ? -15 : 15);
        const rotateXVal = isMobile ? 0 : 10;
        const filterVal = isMobile ? 'none' : 'blur(10px)';

        gsap.fromTo(card,
          { x: xOffset, y: yOffset, scale: scaleVal, rotateY: rotateYVal, rotateX: rotateXVal, autoAlpha: 0, filter: filterVal },
          {
            x: 0,
            y: 0,
            scale: 1,
            rotateY: 0,
            rotateX: 0,
            autoAlpha: 1,
            filter: 'blur(0px)',
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              end: 'top 40%',
              scrub: 1.2,
            }
          }
        );
      });

      // Founder Cards slide in dynamically from sides/bottom (scrubbed)
      const cards = rootRef.current!.querySelectorAll('[data-founder]');
      cards.forEach((card, i) => {
        let xVal = 0;
        let yVal = 0;
        let rotY = 0;
        let scaleVal = 0.8;
        if (isMobile) {
          yVal = 40;
          scaleVal = 1;
        } else {
          if (i === 0) { xVal = -150; yVal = 50; rotY = -20; }
          if (i === 1) { yVal = 150; rotY = 0; }
          if (i === 2) { xVal = 150; yVal = 50; rotY = 20; }
        }

        gsap.fromTo(card,
          { x: xVal, y: yVal, rotateY: rotY, scale: scaleVal, autoAlpha: 0, filter: 'blur(10px)' },
          {
            x: 0,
            y: 0,
            rotateY: 0,
            scale: 1,
            autoAlpha: 1,
            filter: 'blur(0px)',
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              end: 'top 50%',
              scrub: 1.5,
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
    <section ref={rootRef} id="about" className={styles.about} aria-labelledby="about-title">
      {/* Visual background layers */}
      <div className={styles.bgTexture} data-about-parallax="slow" aria-hidden="true" />
      <div className={styles.bgFoldLeft} data-about-parallax="fast" aria-hidden="true" />
      <div className={styles.bgFoldRight} data-about-parallax="slow" aria-hidden="true" />

      {/* Section Header */}
      <div className={styles.headerWrap} data-about-header>
        {/* Background rotating wheel */}
        <img src="/sun.svg?v=2" className={styles.sunBackground} alt="" aria-hidden="true" />

        <h2 id="about-title" className={styles.sectionTitle}>
          <span style={{ display: 'block', overflow: 'hidden' }}>
            <span style={{ display: 'inline-block' }} data-about-reveal-line>ABOUT</span>
          </span>
        </h2>
        <div className={styles.dividerLine} aria-hidden="true" />
      </div>

      {/* Studio Statement */}
      <div className={styles.studioBlock} data-about-block>

        <p className={styles.studioDescription}>
          At AUTONOVA, our team of computer engineering experts specializes in building
          custom web solutions for businesses. We harness modern technologies to craft
          pixel-perfect, high-performance websites and applications that solve real-world
          challenges and drive measurable business growth.
        </p>

        <p className={styles.studioMeta}>Based in Mumbai, India. Engineering since 2025.</p>
      </div>

      {/* Mission / Vision */}
      <div className={styles.missionGrid} data-about-block>
        <div className={styles.missionCard}>
          <h3 className={styles.missionTitle}>Primary Directive</h3>
          <p className={styles.missionBody}>
            Empower organizations of all sizes with accessible, high-performance web
            solutions - streamlining digital presence, reducing development costs, and
            delivering exceptional user experiences that convert.
          </p>
        </div>
        <div className={styles.missionCard}>
          <h3 className={styles.missionTitle}>Future Protocol</h3>
          <p className={styles.missionBody}>
            Set the standard as the premier web development partner - driving
            business growth and digital transformation through cutting-edge
            front-end engineering and scalable full-stack architectures.
          </p>
        </div>
      </div>

      {/* Team */}
      <div className={styles.teamBlock}>
        <h3 className={styles.teamTitle} data-about-block>Meet the Founders</h3>

        <div className={styles.teamGrid}>
          {FOUNDERS.map((founder) => (
            <div key={founder.name} className={`${styles.founderCard} textRollTrigger`} data-founder>
              <div className={styles.avatarRing} style={{ background: founder.gradient }}>
                <div className={styles.avatarInner}>{founder.initials}</div>
              </div>

              <h4 className={styles.founderName}>
                <TextRoll text={founder.name} />
              </h4>
              <p className={styles.founderRole}>{founder.role}</p>
              <p className={styles.founderSpec}>{founder.spec}</p>

              <div className={styles.socialRow}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`${founder.name} LinkedIn`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.13-.7a1.11 1.11 0 0 1 .98-.7c.75 0 1 .56 1 1.4v4.87h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z" />
                  </svg>
                </a>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={`${founder.name} Instagram`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
