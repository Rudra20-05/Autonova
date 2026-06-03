import { TickerStrip } from '@/components/molecules/TickerStrip';
import { StudioHero } from '@/components/organisms/StudioHero';
import styles from './page.module.css';

const SECTION_DATA = [
  {
    id: 'about',
    label: 'About',
    title: 'Just About',
    body:
      'Autonova AI turns ambitious product ideas into cinematic digital experiences, blending product strategy, visual direction, and AI implementation into one exacting practice.',
  },
  {
    id: 'services',
    label: 'Services',
    title: 'AI product design, interfaces, engineering.',
    body:
      'Future section build will expand this service system with radial treatments, oversized copy, and interaction choreography carried from hero.',
  },
  {
    id: 'work',
    label: 'Work',
    title: 'Selected systems and high-signal launches.',
    body:
      'This anchor is live for nav wiring now. Next pass should become editorial case studies with cropped imagery, structural rules, and restrained motion.',
  },
  {
    id: 'process',
    label: 'Process',
    title: 'Research. Shape. Compose. Engineer. Refine.',
    body:
      'Recognition label from reference is parked here for now because this first component set focuses on hero and chrome. Later pass can split process and recognition cleanly.',
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Begin with one hard problem.',
    body:
      'hello@autonova.ai / We build precise digital intelligence for teams that want more than polished templates.',
  },
];

export default function HomePage() {
  return (
    <div className={styles.page}>
      <TickerStrip />
      <StudioHero />

      {SECTION_DATA.map((section) => (
        <section key={section.id} id={section.id} className={styles.stubSection}>
          <p className={styles.stubLabel}>{section.label}</p>
          <h2 className={styles.stubTitle}>{section.title}</h2>
          <p className={styles.stubBody}>{section.body}</p>
        </section>
      ))}

      <footer className={styles.footer}>
        <p>Autonova AI</p>
        <p>Single-page reconstruction in progress.</p>
      </footer>
    </div>
  );
}
