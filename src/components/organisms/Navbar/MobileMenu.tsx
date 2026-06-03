'use client';

import type { MouseEvent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import styles from './MobileMenu.module.css';

export interface NavItem {
  href: string;
  label: string;
}

interface MobileMenuProps {
  id: string;
  links: NavItem[];
  pathname: string;
  onClose: () => void;
}

const EASE_CINEMA = [0.16, 1, 0.3, 1] as [number, number, number, number];
const EASE_OUT = [0.4, 0, 1, 1] as [number, number, number, number];

const overlayVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: EASE_CINEMA },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: EASE_OUT, delay: 0.15 },
  },
};

const listVariants: import('framer-motion').Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

const itemVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 48, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: EASE_CINEMA },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
};

const footerVariants: import('framer-motion').Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_CINEMA, delay: 0.4 },
  },
  exit: { opacity: 0 },
};

export function MobileMenu({ id, links, pathname, onClose }: MobileMenuProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    onClose();
  };

  return (
    <motion.div
      id={id}
      className={styles.overlay}
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <button
        className={styles.closeBtn}
        onClick={onClose}
        aria-label="Close navigation menu"
      >
        <span className={styles.closeIcon} aria-hidden="true" />
      </button>

      <motion.nav
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={styles.nav}
        aria-label="Mobile navigation"
      >
        {links.map((link, index) => (
          <motion.div key={link.href} variants={itemVariants}>
            <Link
              href={link.href}
              className={cn(styles.link, pathname === link.href && styles.active)}
              onClick={(event) => handleClick(event, link.href)}
              aria-current={pathname === link.href ? 'page' : undefined}
            >
              <span className={styles.linkNum} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <span className={styles.linkLabel}>{link.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.nav>

      <motion.footer
        className={styles.footer}
        variants={footerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <nav className={styles.socialRow} aria-label="Social links">
          <a
            href="https://github.com"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            className={styles.social}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </nav>
        <span className={styles.footerTagline}>Autonova AI / 2026</span>
      </motion.footer>
    </motion.div>
  );
}
