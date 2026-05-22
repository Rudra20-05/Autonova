'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { AnimatedCounter } from '@/components/features/AnimatedCounter';
import { ServiceSelector } from '@/components/features/ServiceSelector';
import { ProcessTimeline } from '@/components/features/ProcessTimeline';
import { TechStackStrip } from '@/components/features/TechStackStrip';
import { ExpandingCaseStudy } from '@/components/features/ExpandingCaseStudy';
import { caseStudies } from '@/data/caseStudies';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { useState, useEffect } from 'react';

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 mesh-gradient" />

        {/* Floating orbs */}
        <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-float rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[15%] top-[40%] h-64 w-64 animate-float rounded-full bg-secondary/10 blur-3xl" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[20%] left-[30%] h-48 w-48 animate-float rounded-full bg-accent/8 blur-3xl" style={{ animationDelay: '4s' }} />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative mx-auto flex min-h-[90vh] max-w-[1280px] items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary-light">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                AI Automation Agency
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              We Build{' '}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Automation, Web Products
              <br />
              <span className="text-secondary">&</span>{' '}
              <span className="gradient-text-warm">Creative Ads</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl"
            >
              AutoNova helps businesses scale with intelligent automation, stunning
              web experiences, and AI-driven creative campaigns.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Book a Free Discovery Call
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                See Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TECH STACK STRIP ===== */}
      <Section background="surface">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-text-muted">
          Powered by modern technology
        </p>
        <TechStackStrip />
      </Section>

      {/* ===== SERVICES OVERVIEW ===== */}
      <Section>
        <SectionHeading
          title="What We Do"
          subtitle="Three core pillars that drive measurable business growth for our clients."
          gradient
        />

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="h-full">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-text-primary">
                  {service.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-primary-light">
                  {service.tagline}
                </p>
                <p className="mb-4 text-sm text-text-secondary">
                  {service.description}
                </p>
                <Button href="/services" variant="link" size="sm">
                  Learn More →
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ===== SERVICE SELECTOR ===== */}
      <Section background="surface">
        <SectionHeading
          title="Find Your Perfect Solution"
          subtitle="Select your business profile to discover how AutoNova can accelerate your growth."
        />
        <ServiceSelector />
      </Section>

      {/* ===== STATS COUNTER ===== */}
      <Section>
        <SectionHeading
          title="Results That Speak"
          subtitle="Real numbers from real projects. Here's what we've accomplished."
          gradient
        />
        <AnimatedCounter />
      </Section>

      {/* ===== FEATURED CASE STUDIES ===== */}
      <Section background="surface">
        <SectionHeading
          title="Featured Work"
          subtitle="Click on any project to see the full story — from problem to solution to results."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((study, index) => (
            <ExpandingCaseStudy key={study.id} study={study} index={index} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button href="/portfolio" variant="secondary">
            View All Case Studies
          </Button>
        </div>
      </Section>

      {/* ===== PROCESS TIMELINE ===== */}
      <Section>
        <SectionHeading
          title="How We Work"
          subtitle="A proven 5-step process that delivers predictable, high-quality results every time."
          gradient
        />
        <ProcessTimeline />
      </Section>

      {/* ===== TESTIMONIALS ===== */}
      <Section background="surface">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it — hear from businesses we've helped grow."
        />

        <div className="relative mx-auto max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeTestimonial === index ? 1 : 0,
                scale: activeTestimonial === index ? 1 : 0.95,
              }}
              transition={{ duration: 0.5 }}
              className={`${activeTestimonial === index ? 'relative' : 'absolute inset-0'}`}
            >
              {activeTestimonial === index && (
                <div className="rounded-2xl border border-border bg-bg-surface p-8 text-center md:p-12">
                  {/* Quote mark */}
                  <div className="mb-6 text-5xl text-primary/30">&ldquo;</div>
                  <p className="mb-8 text-lg leading-relaxed text-text-secondary md:text-xl">
                    {testimonial.quote}
                  </p>
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] text-sm font-bold text-white">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-text-muted">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Dots */}
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === index
                    ? 'w-8 bg-primary'
                    : 'w-2.5 bg-border hover:bg-text-muted'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CTA BANNER ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] opacity-90" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-[1280px] px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8"
        >
          <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Ready to Automate Your Growth?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-white/80">
            Join 30+ businesses that have transformed their operations with
            AutoNova. Book your free discovery call today.
          </p>
          <Button
            href="/contact"
            size="lg"
            className="!bg-white !text-[var(--gradient-1-from)] shadow-xl hover:!bg-white/90"
          >
            Book a Free Discovery Call
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
