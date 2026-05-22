'use client';

const techItems = [
  'OpenAI',
  'Make',
  'Zapier',
  'Vercel',
  'React',
  'Next.js',
  'Python',
  'TensorFlow',
  'Figma',
  'Framer',
  'n8n',
  'LangChain',
  'Slack',
  'HubSpot',
  'Supabase',
  'Stripe',
];

export function TechStackStrip() {
  // Double the items for seamless loop
  const allItems = [...techItems, ...techItems];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--bg-primary)] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--bg-primary)] to-transparent" />

      {/* Scrolling strip */}
      <div className="group flex animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {allItems.map((tech, index) => (
          <div
            key={`${tech}-${index}`}
            className="flex shrink-0 items-center gap-3 rounded-xl border border-border bg-bg-surface px-5 py-3 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
              {tech.charAt(0)}
            </div>
            <span className="whitespace-nowrap text-sm font-medium text-text-secondary">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
