'use client';

import { useEffect, useState, type ReactNode, type CSSProperties } from 'react';
import Link from 'next/link';
import Image, { type StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface PillNavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  logo?: string | StaticImageData;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  theme?: 'light' | 'dark';
  initialLoadAnimation?: boolean;
  rightContent?: ReactNode;
}

export function PillNav({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className,
  baseColor = 'var(--card)',
  pillColor = 'var(--background)',
  hoveredPillTextColor = 'var(--foreground)',
  pillTextColor,
  initialLoadAnimation = true,
  rightContent,
}: PillNavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const resolvedPillTextColor = pillTextColor ?? 'var(--muted-foreground)';
  const pillStyles = {
    '--pill-shell': baseColor,
    '--pill-bg': pillColor,
    '--pill-text': resolvedPillTextColor,
    '--pill-hover-text': hoveredPillTextColor,
    '--pill-accent': 'var(--primary)',
    '--pill-gap': '4px',
  } as CSSProperties;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={initialLoadAnimation ? { y: -18, opacity: 0 } : false}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={cn(
          'fixed inset-x-0 top-3 z-50 [--nav-h:56px] [--pill-pad-x:16px] md:[--nav-h:52px] md:[--pill-pad-x:18px] lg:[--nav-h:48px] lg:[--pill-pad-x:20px]',
          className
        )}
        style={pillStyles}
      >
        <div
          className={cn(
            'mx-auto flex h-[var(--nav-h)] w-[min(1200px,calc(100%-1.5rem))] items-center justify-between gap-3 rounded-full border border-border/60 bg-[color:var(--pill-shell)] px-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-300 transition-colors md:grid md:grid-cols-[auto,1fr,auto] md:gap-4',
            isScrolled ? 'shadow-[0_14px_36px_rgba(0,0,0,0.16)]' : ''
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            {logo ? (
              <Image
                src={logo}
                alt={logoAlt}
                width={36}
                height={36}
                className="h-[calc(var(--nav-h)-8px)] w-[calc(var(--nav-h)-8px)] rounded-full dark:invert-0 invert transition-all duration-300"
                priority
              />
            ) : (
              <div className="flex h-[calc(var(--nav-h)-8px)] w-[calc(var(--nav-h)-8px)] items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]">
                <span className="text-sm font-black text-white">A</span>
              </div>
            )}
            <span className="hidden text-base font-semibold text-text-primary sm:inline">
              <span className="gradient-text">Auto</span>
              <span className="text-text-primary">Nova</span>
            </span>
          </Link>

          <div className="flex h-full flex-1 items-center gap-2 overflow-x-auto rounded-full bg-transparent p-[3px] md:justify-center md:overflow-visible">
            {items.map((item) => {
              const isActive = activeHref === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'group relative inline-flex h-[calc(var(--nav-h)-8px)] items-center justify-center rounded-full bg-[color:var(--pill-bg)] px-[var(--pill-pad-x)] text-[13px] font-semibold text-[color:var(--pill-text)] transition-all duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:translate-y-[1px] active:scale-[0.96] md:text-[14px]',
                    isActive && 'shadow-[0_8px_18px_rgba(0,0,0,0.14)]'
                  )}
                >
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full bg-[color:var(--pill-accent)] opacity-0 scale-95 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-100 group-hover:opacity-20"
                    aria-hidden="true"
                  />
                  {isActive && (
                    <motion.span
                      layoutId="pillNavActive"
                      className="absolute inset-0 rounded-full bg-[color:var(--pill-bg)] transition-colors duration-300"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10 inline-block overflow-hidden leading-none">
                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-5">
                      {item.label}
                    </span>
                    <span className="absolute left-0 top-0 block translate-y-5 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:translate-y-0 group-hover:opacity-100 text-[color:var(--pill-hover-text)]">
                      {item.label}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-[7px] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[color:var(--pill-accent)] shadow-[0_6px_14px_rgba(0,0,0,0.16)]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex items-center gap-2">{rightContent}</div>
          </div>
        </div>
      </motion.nav>
      <div className="h-16" />
    </>
  );
}
