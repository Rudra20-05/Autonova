import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with AutoNova. Book a free discovery call or send us a message about your AI automation, web development, or creative ads project.',
  openGraph: {
    title: 'Contact | AutoNova',
    description:
      'Ready to transform your business? Contact AutoNova for a free consultation.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
