'use client';

import React from 'react';
import { TextRoll } from '@/components/atoms/TextRoll';
import styles from './Footer.module.css';

export function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.grid}>
          {/* Logo & Tagline */}
          <div className={styles.col}>
            <div className={styles.studioName}>Autonova</div>
            <p className={styles.studioTagline}>
              A premium web development studio building high-end digital experiences that drive real business growth.
            </p>
          </div>

          {/* Capabilities */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Capabilities</span>
            <ul className={styles.linksList}>
              <li><span className={`${styles.link} textRollTrigger`}><TextRoll text="UI/UX Design" /></span></li>
              <li><span className={`${styles.link} textRollTrigger`}><TextRoll text="Web Design" /></span></li>
              <li><span className={`${styles.link} textRollTrigger`}><TextRoll text="Creative Front-End" /></span></li>
              <li><span className={`${styles.link} textRollTrigger`}><TextRoll text="Full-Stack Development" /></span></li>
              <li><span className={`${styles.link} textRollTrigger`}><TextRoll text="Performance Optimization" /></span></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Explore</span>
            <ul className={styles.linksList}>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="About Us" />
                </a>
              </li>
              <li>
                <a href="#work" onClick={(e) => handleLinkClick(e, 'work')} className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="Our Work" />
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleLinkClick(e, 'process')} className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="How We Work" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className={styles.col}>
            <span className={styles.colLabel}>Connect</span>
            <ul className={styles.linksList}>
              <li>
                <a href="https://www.linkedin.com/company/autonova-ai/" target="_blank" rel="noopener noreferrer" className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="LinkedIn" /> ↗
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/autonova_ai?igsh=MTZuanFrNzgxZDN0dQ==" target="_blank" rel="noopener noreferrer" className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="Instagram" /> ↗
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${styles.link} textRollTrigger`}>
                  <TextRoll text="GitHub" /> ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} AUTONOVA. All rights reserved.
          </p>
          <button onClick={handleScrollToTop} className={styles.backToTop} aria-label="Scroll back to top">
            Back to Top <span className={styles.arrowUp}>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
