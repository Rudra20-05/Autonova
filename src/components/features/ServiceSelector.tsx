'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { serviceProfiles } from '@/data/services';
import { cn } from '@/lib/utils';

export function ServiceSelector() {
  const [activeProfile, setActiveProfile] = useState(serviceProfiles[0].id);

  const currentProfile = serviceProfiles.find((p) => p.id === activeProfile)!;

  return (
    <div>
      {/* Tabs */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {serviceProfiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => setActiveProfile(profile.id)}
            className={cn(
              'relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300',
              activeProfile === profile.id
                ? 'text-white'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-surface-hover'
            )}
          >
            {activeProfile === profile.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--gradient-1-from)] to-[var(--gradient-1-to)]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              <span>{profile.icon}</span>
              <span>{profile.title}</span>
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProfile.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {currentProfile.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group rounded-xl border border-border bg-bg-surface p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl transition-transform group-hover:scale-110">
                {useCase.icon}
              </div>
              <h4 className="mb-2 text-lg font-semibold text-text-primary">
                {useCase.title}
              </h4>
              <p className="text-sm leading-relaxed text-text-secondary">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
