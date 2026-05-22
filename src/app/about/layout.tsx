import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the AutoNova team — AI engineers, full-stack developers, and creative strategists building the future of business automation.',
  openGraph: {
    title: 'About | AutoNova',
    description:
      'The team behind AutoNova. Learn our story, values, and vision.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
