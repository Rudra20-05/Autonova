/**
 * layout.tsx
 * ─────────────────────────────────────────────────────────
 * Autonova AI — Root Layout
 * Next.js App Router root layout.
 * Configures fonts, metadata, viewport, and global providers.
 * ─────────────────────────────────────────────────────────
 */

import type { Metadata, Viewport } from 'next';
import { Inter, Syne, JetBrains_Mono } from 'next/font/google';
import { SmoothScrollProvider } from '@/providers/SmoothScrollProvider';
import '@/styles/globals.css';

// ─────────────────────────────────────────
// FONT DEFINITIONS
// Self-hosted via next/font — zero layout shift, no Google requests at runtime.
// ─────────────────────────────────────────

/** Primary body / UI font — Inter variable */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  fallback: ['system-ui', 'sans-serif'],
});

/** Display / heading font — Syne (bold geometric) */
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700', '800'],
});

/** Monospace font — JetBrains Mono */
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  fallback: ['monospace'],
  weight: ['400', '500', '600', '700'],
});

// ─────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL('https://autonova.ai'),

  title: {
    default: 'Autonova AI — Intelligent Automation for the Modern Enterprise',
    template: '%s | Autonova AI',
  },

  description:
    'Autonova AI delivers cutting-edge artificial intelligence and automation solutions that transform how enterprises operate, scale, and innovate.',

  keywords: [
    'AI automation',
    'artificial intelligence',
    'enterprise AI',
    'machine learning',
    'workflow automation',
    'intelligent systems',
    'Autonova',
  ],

  authors: [{ name: 'Autonova AI', url: 'https://autonova.ai' }],
  creator: 'Autonova AI',
  publisher: 'Autonova AI',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://autonova.ai',
    siteName: 'Autonova AI',
    title: 'Autonova AI — Intelligent Automation for the Modern Enterprise',
    description:
      'Cutting-edge AI and automation solutions that transform how enterprises operate, scale, and innovate.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Autonova AI',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@autonovaai',
    creator: '@autonovaai',
    title: 'Autonova AI — Intelligent Automation',
    description:
      'Cutting-edge AI and automation solutions for the modern enterprise.',
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon-32x32.png',
  },

  manifest: '/site.webmanifest',

  alternates: {
    canonical: 'https://autonova.ai',
  },
};

// ─────────────────────────────────────────
// VIEWPORT
// ─────────────────────────────────────────

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050508' },
    { media: '(prefers-color-scheme: light)', color: '#050508' },
  ],
  colorScheme: 'dark',
};

// ─────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* ── Noise texture overlay — cinematic grain effect ── */}
        <div
          className="noise-overlay"
          aria-hidden="true"
          role="presentation"
        />

        {/* ── Smooth scroll provider ── */}
        <SmoothScrollProvider>
          {/* ── Skip to content — accessibility ── */}
          <a
            href="#main-content"
            className="sr-only"
            style={{
              /* Make visible on focus for keyboard users */
              /* Can't use CSS Module here as it's in layout — handled via globals.css */
            }}
            onFocus={(e) => {
              const target = e.currentTarget;
              target.style.position = 'fixed';
              target.style.top = '1rem';
              target.style.left = '1rem';
              target.style.zIndex = '9999';
              target.style.padding = '0.75rem 1.5rem';
              target.style.background = 'var(--color-brand-500)';
              target.style.color = '#fff';
              target.style.borderRadius = 'var(--radius-md)';
              target.style.fontFamily = 'var(--font-sans)';
              target.style.fontWeight = '600';
              target.style.width = 'auto';
              target.style.height = 'auto';
              target.style.clip = 'auto';
              target.style.overflow = 'visible';
              target.style.whiteSpace = 'normal';
            }}
            onBlur={(e) => {
              const target = e.currentTarget;
              target.style.position = 'absolute';
              target.style.width = '1px';
              target.style.height = '1px';
              target.style.overflow = 'hidden';
              target.style.clip = 'rect(0,0,0,0)';
            }}
          >
            Skip to main content
          </a>

          {/* ── Main content mount point ── */}
          <main id="main-content">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
