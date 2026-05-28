'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import type { CaseStudy } from '@/data/caseStudies';

interface ExpandingCaseStudyProps {
  study: CaseStudy;
  index: number;
  isExpandable?: boolean;
}

const categoryColors: Record<string, 'primary' | 'secondary' | 'accent'> = {
  'AI Automation': 'primary',
  'Web Development': 'secondary',
  'AI Creative Ads': 'accent',
  'Website Development & Brand Support': 'primary',
  'Product Catalog & Business Website Development': 'secondary',
};

export function ExpandingCaseStudy({ study, index, isExpandable = true }: ExpandingCaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => isExpandable && setIsExpanded(!isExpanded)}
        className={cn(
          "group overflow-hidden rounded-2xl border border-border bg-bg-surface transition-all duration-300",
          isExpandable 
            ? "cursor-pointer hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5" 
            : "hover:shadow-lg hover:border-border/80"
        )}
      >
        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="mb-3 flex items-center gap-3">
            <Badge variant={categoryColors[study.category] || 'default'}>{study.category}</Badge>
          </div>

          <h3 className="mb-3 text-xl font-bold text-text-primary group-hover:text-primary-light transition-colors md:text-2xl">
            {study.title}
          </h3>

          <p className="mb-5 text-sm leading-relaxed text-text-secondary md:text-base">
            {study.description}
          </p>

          {/* Tech stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg bg-bg-surface-hover px-3 py-1 font-mono text-xs text-text-muted border border-border/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key outcome */}
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-primary/10 px-4 py-2 text-sm font-semibold text-primary-light border border-primary/20">
              📊 {study.outcome}
            </div>
            {isExpandable && (
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-surface-hover text-text-muted hover:text-text-primary transition-colors border border-border/40"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </motion.span>
            )}
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpandable && isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="border-t border-border bg-bg-surface-hover/10 dark:bg-bg-surface-hover/5 p-6 md:p-8">
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left stats & outcome column */}
                  <div className="lg:col-span-4 flex flex-col gap-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
                        Key Metrics
                      </h4>
                      <div className="flex flex-col gap-3">
                        {study.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex flex-col justify-center rounded-2xl border border-border bg-bg-surface p-4 shadow-sm hover:shadow-md hover:border-primary/25 transition-all duration-300"
                          >
                            <span className="text-[10px] uppercase font-bold tracking-wider text-text-muted mb-1">
                              {metric.label}
                            </span>
                            <span className="font-mono text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)] dark:from-primary-light dark:to-[var(--gradient-1-to)]">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right details column */}
                  <div className="lg:col-span-8 flex flex-col gap-5">
                    
                    {/* Problem card */}
                    <div className="flex flex-col gap-3 rounded-2xl border border-rose-500/10 bg-rose-500/5 p-5 dark:border-rose-500/10 dark:bg-rose-500/5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500 dark:bg-rose-500/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        </span>
                        <h4 className="font-bold text-rose-600 dark:text-rose-400 text-base md:text-lg">
                          Problem
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-text-primary/95 dark:text-text-primary/80">
                        {study.problem}
                      </p>
                    </div>

                    {/* Solution card */}
                    <div className="flex flex-col gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5 dark:border-emerald-500/10 dark:bg-emerald-500/5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                            <path d="M9 18h6" />
                            <path d="M10 22h4" />
                          </svg>
                        </span>
                        <h4 className="font-bold text-emerald-600 dark:text-emerald-400 text-base md:text-lg">
                          Solution
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-text-primary/95 dark:text-text-primary/80">
                        {study.solution}
                      </p>
                    </div>

                    {/* Result card */}
                    <div className="flex flex-col gap-3 rounded-2xl border border-purple-500/10 bg-purple-500/5 p-5 dark:border-purple-500/10 dark:bg-purple-500/5">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500 dark:bg-purple-500/20">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                            <path d="M4 22h16" />
                            <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                            <path d="M12 2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z" />
                          </svg>
                        </span>
                        <h4 className="font-bold text-purple-600 dark:text-purple-400 text-base md:text-lg">
                          Result
                        </h4>
                      </div>
                      <p className="text-sm leading-relaxed text-text-primary/95 dark:text-text-primary/80">
                        {study.result}
                      </p>
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
