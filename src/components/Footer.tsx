'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = {
  services: [
    { label: 'WORKFLOW AUTOMATION', href: '/services#ai-automation' },
    { label: 'AI NEURAL CHATBOTS', href: '/services' },
    { label: 'CRM INTEGRATION', href: '/services' },
    { label: 'CUSTOM PROTOCOLS', href: '/services' },
  ],
  company: [
    { label: 'ABOUT SYSTEMS', href: '/about' },
    { label: 'INTELLIGENCE', href: '/portfolio' },
    { label: 'CONTACT', href: '/contact' },
    { label: 'CAREERS', href: '/about' },
  ],
  connect: [
    { label: 'LINKEDIN', href: 'https://linkedin.com', external: true },
    { label: 'INSTAGRAM', href: 'https://instagram.com', external: true },
    { label: 'X', href: 'https://x.com', external: true },
    { label: 'EMAIL', href: 'mailto:contact@aiautonova.com' },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]">
                <span className="text-lg font-black text-white">A</span>
              </div>
              <span className="text-xl font-bold uppercase tracking-wider text-text-primary">
                AUTONOVA
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-xs font-semibold leading-relaxed tracking-wider text-text-secondary">
              AUTOMATE TO DOMINATE. YOUR NEURAL AUTOMATION PARTNER FOR INFINITE SCALABILITY.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              SERVICES
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-wider text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs tracking-wider text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-text-primary">
              NETWORK
            </h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-xs tracking-wider text-text-secondary transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs tracking-wider text-text-muted">
            © 2026 AUTONOVA AI. ALL RIGHTS RESERVED.
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-xl border border-border bg-bg-surface-hover px-4 py-2 text-xs tracking-wider text-text-secondary transition-colors hover:border-primary/30 hover:text-primary"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 15-6-6-6 6" />
            </svg>
            BACK TO TOP
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
