'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface CounterItemProps {
  value: number;
  suffix: string;
  label: string;
}

function CounterItem({ value, suffix, label }: CounterItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: 'easeOut',
      });
      return controls.stop;
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl font-extrabold md:text-5xl"
      >
        <span className="gradient-text">
          {displayValue.toLocaleString()}{suffix}
        </span>
      </motion.div>
      <p className="mt-2 text-sm text-text-secondary md:text-base">{label}</p>
    </div>
  );
}

const stats = [
  { value: 50, suffix: '+', label: 'Automations Built' },
  { value: 10000, suffix: '+', label: 'Hours Saved for Clients' },
  { value: 30, suffix: '+', label: 'Clients Served' },
  { value: 75, suffix: '+', label: 'Projects Delivered' },
];

export function AnimatedCounter() {
  return (
    <div className="gradient-border rounded-2xl bg-bg-surface p-8 md:p-12">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
        {stats.map((stat) => (
          <CounterItem key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}
