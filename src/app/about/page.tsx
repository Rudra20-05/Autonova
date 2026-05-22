'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';
import { team } from '@/data/team';

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="relative mx-auto max-w-[1280px] px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6 font-mono text-4xl font-extrabold tracking-widest sm:text-5xl md:text-7xl uppercase text-text-primary">
              SYSTEM GENESIS
            </h1>
            <p className="mx-auto max-w-3xl text-lg md:text-xl font-medium text-text-primary">
              We are Autonova, an engineering team that designs and builds AI solutions and experiences
            </p>
            <p className="mt-2 text-sm md:text-base font-semibold tracking-wider text-primary-light">
              Based in Mumbai, India. Tinkering since 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin Section */}
      <Section>
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 font-mono text-2xl font-bold tracking-widest uppercase text-text-primary md:text-3xl">
              ORIGIN
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-text-secondary">
              At AUTONOVA, our team of computer engineering experts specializes in building custom AI automation for businesses. We harness artificial intelligence to solve real-world business challenges, helping companies scale, streamline operations, and increase productivity.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Directives Section */}
      <Section background="surface">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 font-mono text-xl font-bold tracking-widest uppercase text-text-primary md:text-2xl">
                PRIMARY DIRECTIVE
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Empower organizations of all sizes with accessible AI automation—streamlining workflows, reducing operational costs, and boosting efficiency. Our solutions are designed to adapt to your unique business needs and deliver measurable performance improvements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="mb-4 font-mono text-xl font-bold tracking-widest uppercase text-text-primary md:text-2xl">
                FUTURE PROTOCOL
              </h3>
              <p className="leading-relaxed text-text-secondary">
                Set the standard as the top AI automation partner—driving business growth and digital transformation through cutting-edge automation platforms. Unlock greater productivity and future-proof your organization with innovative, scalable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Operational Advantages */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-2xl font-bold tracking-widest uppercase text-text-primary md:text-4xl"
          >
            OPERATIONAL ADVANTAGES
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Advantage 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full text-center hover:border-primary/20">
              <h3 className="mb-3 font-mono text-base font-bold tracking-widest uppercase text-text-primary">
                PROVEN ALGORITHMS
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                40+ hours of weekly algorithm optimization for top performance.
              </p>
            </Card>
          </motion.div>

          {/* Advantage 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full text-center hover:border-primary/20">
              <h3 className="mb-3 font-mono text-base font-bold tracking-widest uppercase text-text-primary">
                RAPID DEPLOYMENT
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Go live with AI automation in 72 hours.
              </p>
            </Card>
          </motion.div>

          {/* Advantage 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full text-center hover:border-primary/20">
              <h3 className="mb-3 font-mono text-base font-bold tracking-widest uppercase text-text-primary">
                DEDICATED SYSTEMS
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                Personal automation specialists for your business.
              </p>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* Founders Section */}
      <Section background="surface">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-2xl font-bold tracking-widest uppercase text-text-primary md:text-4xl"
          >
            MEET THE FOUNDERS
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="text-center h-full flex flex-col justify-between items-center p-8">
                <div className="w-full flex flex-col items-center">
                  {/* Founder Image */}
                  <div 
                    className="relative mb-6 h-32 w-32 overflow-hidden rounded-full p-1"
                    style={{
                      background: `linear-gradient(135deg, ${member.gradientFrom}, ${member.gradientTo})`
                    }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-full bg-bg-surface">
                      {member.image ? (
                        <Image 
                          src={member.image} 
                          alt={member.name} 
                          width={128}
                          height={128}
                          className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center font-mono text-2xl font-bold text-text-primary">
                          {member.initials}
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-mono text-lg font-bold uppercase tracking-wider text-text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-light">
                    {member.role}
                  </p>
                  <p className="mb-6 text-sm text-text-secondary leading-relaxed font-medium">
                    {member.bio}
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-4 mt-auto">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface-hover border border-border text-text-muted hover:text-primary transition-all duration-300 shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.87c0-.26.05-.52.13-.7a1.11 1.11 0 0 1 .98-.7c.75 0 1 .56 1 1.4v4.87h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5v8.37h3z" />
                      </svg>
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-surface-hover border border-border text-text-muted hover:text-accent transition-all duration-300 shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="mesh">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s Build Something Together
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-text-secondary">
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s discuss how AutoNova can help your business grow.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">
              Get In Touch
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg">
              See Our Work
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
