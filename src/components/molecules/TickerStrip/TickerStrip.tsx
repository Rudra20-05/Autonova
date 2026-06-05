import styles from './TickerStrip.module.css';

const TICKER_ITEMS = [
  'Intelligent Interfaces',
  'Creative Systems',
  'Web Engineering',
  'AI Product Design',
];

export function TickerStrip() {
  const repeated = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className={styles.ticker} aria-hidden="true">
      <div className={styles.track}>
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
