'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { services } from '@/data/services';

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              <span className="gradient-text">Three Pillars</span> of
              <br />
              Digital Transformation
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              From AI-powered automation to world-class web development and intelligent
              creative campaigns — we deliver end-to-end solutions that drive real results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;
        const colorVariant = service.color === 'primary' ? 'primary' : service.color === 'secondary' ? 'secondary' : 'accent';

        return (
          <Section
            key={service.id}
            id={service.id}
            background={isEven ? 'default' : 'surface'}
          >
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${!isEven ? 'lg:direction-rtl' : ''}`}>
              {/* Content side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={!isEven ? 'lg:order-2' : ''}
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-4xl">
                  {service.icon}
                </div>

                <h2 className="mb-2 text-3xl font-bold md:text-4xl">
                  {service.title}
                </h2>
                <p className="mb-2 text-lg font-medium text-primary-light">
                  {service.tagline}
                </p>
                <p className="mb-6 text-text-secondary">{service.description}</p>

                {/* Who it's for */}
                <div className="mb-6 rounded-xl border border-border bg-bg-surface-hover/50 p-4">
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Who It&apos;s For
                  </h4>
                  <p className="text-sm text-text-secondary">{service.whoItsFor}</p>
                </div>

                {/* Problems solved */}
                <div className="mb-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Problems We Solve
                  </h4>
                  <ul className="space-y-2">
                    {service.problemsSolved.map((problem) => (
                      <li key={problem} className="flex items-start gap-2 text-sm text-text-secondary">
                        <span className="mt-0.5 text-primary">✓</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href="/contact">
                  Get Started with {service.title}
                </Button>
              </motion.div>

              {/* Visual side */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={!isEven ? 'lg:order-1' : ''}
              >
                {/* Process steps */}
                <div className="rounded-2xl border border-border bg-bg-surface p-6">
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Our Process
                  </h4>
                  <div className="space-y-4">
                    {service.process.map((step, stepIndex) => (
                      <motion.div
                        key={step.step}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: stepIndex * 0.1 }}
                        className="flex gap-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-mono text-sm font-bold text-primary">
                          {String(stepIndex + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h5 className="font-semibold text-text-primary">
                            {step.step}
                          </h5>
                          <p className="text-sm text-text-secondary">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                    Tools & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool) => (
                      <Badge key={tool} variant={colorVariant}>
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-lg border border-border bg-bg-surface-hover/50 px-3 py-2 text-xs text-text-secondary"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Section>
        );
      })}

      {/* Bottom CTA */}
      <Section background="mesh">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Not Sure Which Service You Need?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Book a free discovery call and we&apos;ll help you identify the highest-impact
            opportunities for your business.
          </p>
          <Button href="/contact" size="lg">
            Book a Free Discovery Call
          </Button>
        </div>
      </Section>
    </>
  );
}
