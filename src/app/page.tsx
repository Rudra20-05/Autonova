import { TickerStrip } from '@/components/molecules/TickerStrip';
import { StudioHero } from '@/components/organisms/StudioHero';
import { AboutSection } from '@/components/organisms/AboutSection';
import { WorkSection } from '@/components/organisms/WorkSection';
import { ProcessSection } from '@/components/organisms/ProcessSection';
import { ContactSection } from '@/components/organisms/ContactSection';
import { Footer } from '@/components/organisms/Footer';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <TickerStrip />
      <div id="home">
        <StudioHero />
      </div>
      <AboutSection />
      <WorkSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
