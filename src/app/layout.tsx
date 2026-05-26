import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontSerif = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const fontMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'AutoNova — AI Automation, Web Development & Creative Ads Agency',
    template: '%s | AutoNova',
  },
  description:
    'AutoNova helps businesses scale with intelligent AI automation, stunning web experiences, and AI-driven creative campaigns. Book a free discovery call today.',
  keywords: [
    'AI automation',
    'web development',
    'AI creative ads',
    'business automation',
    'Next.js',
    'AI agency',
    'workflow automation',
  ],
  authors: [{ name: 'AutoNova' }],
  creator: 'AutoNova',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aiautonova.com',
    siteName: 'AutoNova',
    title: 'AutoNova — AI Automation, Web Development & Creative Ads Agency',
    description:
      'AutoNova helps businesses scale with intelligent AI automation, stunning web experiences, and AI-driven creative campaigns.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoNova — AI Automation Agency',
    description:
      'AI-powered automation, web development, and creative ads. Scale your business with AutoNova.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'AutoNova',
              description:
                'AI Automation, Web Development & Creative Ads Agency',
              url: 'https://aiautonova.com',
              foundingDate: '2024',
              founder: {
                '@type': 'Person',
                name: 'Rudra Dalvi',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@aiautonova.com',
                contactType: 'sales',
              },
            }),
          }}
        />
      </head>
      <body className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
