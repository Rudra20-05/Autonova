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
        <span className={styles.loopOne} />
        <span className={styles.loopTwo} />
        <span className={styles.stem} />
      </span>

      <span className={styles.wordmark}>
        <span className={styles.name}>Autonova AI</span>
        <span className={styles.tagline}>Digital Intelligence Studio</span>
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
