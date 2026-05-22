'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/autonova/discovery';

  const inputClasses =
    'w-full rounded-xl border border-border bg-bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

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
              Get In Touch
            </span>
            <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Let&apos;s Build Something
              <br />
              <span className="gradient-text">Extraordinary</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-text-secondary">
              Ready to transform your business with AI? Fill out the form below or book a
              free discovery call — we&apos;ll respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Send Us a Message
            </h2>
            <p className="mb-8 text-text-secondary">
              Tell us about your project and we&apos;ll get back to you with a
              tailored proposal.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your full name"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-text-primary">
                  Service Interest
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={inputClasses}
                >
                  <option value="">Select a service...</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Web Development">Web Development</option>
                  <option value="AI Creative Ads">AI Creative Ads</option>
                  <option value="Not Sure">Not Sure — Help Me Decide</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className={inputClasses}
                />
              </div>

              <Button
                type="submit"
                loading={status === 'loading'}
                className="w-full"
                size="lg"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </Button>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-center text-sm text-green-400"
                >
                  ✅ Message sent successfully! We&apos;ll get back to you within 24 hours.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-xl border border-accent/20 bg-accent/10 p-4 text-center text-sm text-accent"
                >
                  ❌ {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Calendly Embed */}
            <div className="rounded-2xl border border-border bg-bg-surface p-6">
              <h3 className="mb-2 text-xl font-bold text-text-primary">
                📅 Book a Free Discovery Call
              </h3>
              <p className="mb-4 text-sm text-text-secondary">
                Skip the form — jump straight to a 30-minute strategy session with our team.
              </p>
              <div className="overflow-hidden rounded-xl border border-border">
                <iframe
                  src={calendlyUrl}
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Schedule a discovery call with AutoNova"
                  className="bg-white"
                />
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="rounded-2xl border border-border bg-bg-surface p-6">
              <h3 className="mb-4 text-xl font-bold text-text-primary">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@aiautonova.com"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:bg-bg-surface-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                    ✉️
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Email</p>
                    <p className="text-sm text-text-secondary">contact@aiautonova.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border p-4 transition-all hover:border-primary/30 hover:bg-bg-surface-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                    💼
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">LinkedIn</p>
                    <p className="text-sm text-text-secondary">Connect with us</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                    ⚡
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-primary">Response Time</p>
                    <p className="text-sm text-text-secondary">Within 24 hours, guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
