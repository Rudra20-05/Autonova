'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components/atoms/Logo';
import { cn } from '@/lib/cn';
import { MobileMenu, type NavItem } from './MobileMenu';
import styles from './Navbar.module.css';

const PRIMARY_LINKS: NavItem[] = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Recognition' },
  { href: '#contact', label: 'Contact Us' },
];

const SECONDARY_LINKS: NavItem[] = [{ href: '#home', label: 'Archive' }];

const ALL_LINKS = [...PRIMARY_LINKS, ...SECONDARY_LINKS];

const EASE_CINEMA = [0.16, 1, 0.3, 1] as [number, number, number, number];

const navItemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6 + index * 0.06,
      duration: 0.5,
      ease: EASE_CINEMA,
    },
  }),
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      hamburgerRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'work', 'process', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleAnchorClick = (href: string) => {
    setMenuOpen(false);

    const target = document.getElementById(href.replace('#', ''));
    if (!target) return;

    const lenisWindow = window as typeof window & {
      lenis?: {
        scrollTo: (element: HTMLElement, options?: { offset?: number }) => void;
      };
    };

    if (lenisWindow.lenis) {
      lenisWindow.lenis.scrollTo(target, { offset: -64 });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={cn(styles.navbar, scrolled && styles.scrolled)}
        role="banner"
      >
        <div className={styles.logoArea}>
          <Logo />
        </div>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.navList} role="list">
            {PRIMARY_LINKS.map((link, index) => (
              <motion.li
                key={link.href}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleAnchorClick(link.href);
                  }}
                  className={cn(styles.navLink, activeHref === link.href && styles.active)}
                  aria-current={activeHref === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}

            <li className={styles.navDivider} aria-hidden="true" role="separator" />

            {SECONDARY_LINKS.map((link, index) => (
              <motion.li
                key={link.href}
                custom={PRIMARY_LINKS.length + index + 1}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <a
                  href={link.href}
                  onClick={(event) => {
                    event.preventDefault();
                    handleAnchorClick(link.href);
                  }}
                  className={cn(
                    styles.navLink,
                    styles.secondary,
                    activeHref === link.href && styles.active,
                  )}
                  aria-current={activeHref === link.href ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <button
          ref={hamburgerRef}
          className={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={styles.hLine} />
          <span className={styles.hLine} />
        </button>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen && (
          <MobileMenu
            id="mobile-menu"
            links={ALL_LINKS}
            pathname={activeHref}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
