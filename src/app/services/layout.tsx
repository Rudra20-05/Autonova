import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'AutoNova offers AI Automation, Web Development, and AI Creative Ads. Discover how our three pillars of digital transformation can accelerate your business growth.',
  openGraph: {
    title: 'Services | AutoNova',
    description:
      'AI Automation, Web Development, and AI Creative Ads — end-to-end solutions for modern businesses.',
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
