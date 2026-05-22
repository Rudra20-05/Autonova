'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { ExpandingCaseStudy } from '@/components/features/ExpandingCaseStudy';
import { Button } from '@/components/ui/Button';
import { caseStudies } from '@/data/caseStudies';

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
              Our Work
            </span>
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span className="gradient-text">Case Studies</span> That
              <br />
              Prove Our Impact
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Real projects, real results. Click on any case study to explore the full story —
              from the challenge to our solution to measurable outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <ExpandingCaseStudy key={study.id} study={study} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="mesh">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Your Project Could Be Next
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Whether you need AI automation, a new web platform, or high-performing
            ad creatives, we&apos;re ready to deliver results like these for your business.
          </p>
          <Button href="/contact" size="lg">
            Start Your Project
          </Button>
        </div>
      </Section>
    </>
  );
}
