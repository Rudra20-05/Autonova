'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PillNav } from '@/components/PillNav';
import { ThemeToggle } from '@/components/features/ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <PillNav
      logo="/images/logo.png"
      logoAlt="AutoNova logo"
      items={navLinks}
      activeHref={pathname ?? '/'}
      className=""
      initialLoadAnimation={false}
      rightContent={
        <>
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:shadow-xl hover:scale-[1.02] sm:inline-flex"
          >
            Book a Call
          </Link>
        </>
      }
      mobileFooter={
        <Link
          href="/contact"
          className="flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] px-6 py-3 font-semibold text-white shadow-lg"
        >
          Book a Call
        </Link>
      }
    />
  );
}
