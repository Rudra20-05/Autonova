import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore AutoNova\'s portfolio of AI automation, web development, and creative ad projects. See real case studies with measurable results.',
  openGraph: {
    title: 'Portfolio | AutoNova',
    description:
      'Real projects, real results. See how AutoNova transforms businesses with AI.',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
