'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import type { CaseStudy } from '@/data/caseStudies';

interface ExpandingCaseStudyProps {
  study: CaseStudy;
  index: number;
}

const categoryColors: Record<string, 'primary' | 'secondary' | 'accent'> = {
  'AI Automation': 'primary',
  'Web Development': 'secondary',
  'AI Creative Ads': 'accent',
};

export function ExpandingCaseStudy({ study, index }: ExpandingCaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-bg-surface transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      >
        {/* Header */}
        <div className="p-6">
          <div className="mb-3 flex items-center gap-3">
            <Badge variant={categoryColors[study.category]}>{study.category}</Badge>
          </div>

          <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors">
            {study.title}
          </h3>

          <p className="mb-4 text-sm text-text-secondary">
            {study.description}
          </p>

          {/* Tech stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-bg-surface-hover px-2.5 py-1 font-mono text-xs text-text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key outcome */}
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary-light">
              📊 {study.outcome}
            </div>
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-text-muted"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-border bg-bg-surface-hover/50 p-6">
                <div className="grid gap-6 md:grid-cols-3">
                  {/* Problem */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-sm">❌</span>
                      <h4 className="font-semibold text-accent">Problem</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm">💡</span>
                      <h4 className="font-semibold text-primary-light">Solution</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-text-secondary">
                      {study.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary/10 text-sm">🎯</span>
                      <h4 className="font-semibold text-secondary">Result</h4>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {study.result}
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="flex items-center justify-between rounded-lg bg-bg-surface px-3 py-2"
                        >
                          <span className="text-xs text-text-muted">{metric.label}</span>
                          <span className="font-mono text-sm font-bold text-secondary">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
