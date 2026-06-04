import Link from 'next/link';
import { cn } from '@/lib/cn';
import styles from './Logo.module.css';

interface LogoProps {
  className?: string;
  asSpan?: boolean;
}

export function Logo({ className, asSpan = false }: LogoProps) {
  const inner = (
    <>
      <span className={styles.mark} aria-hidden="true">
        <img src="/logo.png" alt="Autonova Logo" className={styles.logoImage} />
      </span>

      <span className={styles.wordmark}>
        <span className={styles.name}>Autonova AI</span>
      </span>
    </>
  );

  if (asSpan) {
    return <span className={cn(styles.logo, className)}>{inner}</span>;
  }

  return (
    <Link
      href="/"
      className={cn(styles.logo, className)}
      aria-label="Autonova AI - Return to home"
    >
      {inner}
    </Link>
  );
}
