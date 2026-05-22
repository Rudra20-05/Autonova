'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Free consultation to understand your business, goals, and pain points.',
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Scope',
    description: 'Define deliverables, timeline, and pricing with full transparency.',
    icon: '📋',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Agile development with weekly check-ins and demos.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Launch, test, and optimize for peak performance.',
    icon: '🚀',
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance, monitoring, and iteration.',
    icon: '🛡️',
  },
];

export function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Desktop horizontal timeline */}
      <div className="hidden md:block">
        {/* Connecting line */}
        <div className="absolute left-0 right-0 top-16 h-0.5 bg-border">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="h-full origin-left bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]"
          />
        </div>

        <div className="grid grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative pt-8 text-center"
            >
              {/* Node */}
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-bg-surface text-xl shadow-lg shadow-primary/20">
                {step.icon}
              </div>

              <div className="rounded-xl border border-border bg-bg-surface p-4 transition-all hover:border-primary/30 hover:shadow-md">
                <span className="mb-1 block font-mono text-xs text-primary">
                  STEP {step.number}
                </span>
                <h4 className="mb-2 text-lg font-semibold text-text-primary">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="md:hidden">
        <div className="relative space-y-8 pl-8">
          {/* Vertical line */}
          <div className="absolute bottom-0 left-3 top-0 w-0.5 bg-border">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full origin-top bg-gradient-to-b from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Node */}
              <div className="absolute -left-8 flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-bg-surface text-sm">
                {step.icon}
              </div>

              <div className="rounded-xl border border-border bg-bg-surface p-4">
                <span className="mb-1 block font-mono text-xs text-primary">
                  STEP {step.number}
                </span>
                <h4 className="mb-1 font-semibold text-text-primary">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
