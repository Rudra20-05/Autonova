'use client';

import { 
  Cpu, 
  Zap, 
  Atom, 
  Terminal, 
  Database, 
  CreditCard, 
  Workflow, 
  Layers, 
  Triangle, 
  Globe, 
  Link as LinkIcon, 
  MessageSquare,
  Code2
} from 'lucide-react';

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

const getTechIcon = (tech: string) => {
  const iconClass = "h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110";
  
  switch (tech.toLowerCase()) {
    case 'openai':
      return { 
        icon: <Cpu className={`${iconClass} text-[#10a37f]`} />, 
        color: 'from-[#10a37f]/10 to-[#10a37f]/2 border-[#10a37f]/20 hover:border-[#10a37f]/40 hover:shadow-[#10a37f]/5' 
      };
    case 'make':
      return { 
        icon: <Workflow className={`${iconClass} text-[#eb4034]`} />, 
        color: 'from-[#eb4034]/10 to-[#eb4034]/2 border-[#eb4034]/20 hover:border-[#eb4034]/40 hover:shadow-[#eb4034]/5' 
      };
    case 'zapier':
      return { 
        icon: <Zap className={`${iconClass} text-[#ff4a00]`} />, 
        color: 'from-[#ff4a00]/10 to-[#ff4a00]/2 border-[#ff4a00]/20 hover:border-[#ff4a00]/40 hover:shadow-[#ff4a00]/5' 
      };
    case 'vercel':
      return { 
        icon: <Triangle className={`${iconClass} text-foreground fill-none rotate-180`} />, 
        color: 'from-foreground/10 to-foreground/2 border-foreground/10 hover:border-foreground/30 hover:shadow-foreground/5' 
      };
    case 'react':
      return { 
        icon: <Atom className={`${iconClass} text-[#61dafb]`} />, 
        color: 'from-[#61dafb]/10 to-[#61dafb]/2 border-[#61dafb]/20 hover:border-[#61dafb]/40 hover:shadow-[#61dafb]/5' 
      };
    case 'next.js':
      return { 
        icon: <Layers className={`${iconClass} text-foreground`} />, 
        color: 'from-foreground/10 to-foreground/2 border-foreground/10 hover:border-foreground/30 hover:shadow-foreground/5' 
      };
    case 'python':
      return { 
        icon: <Terminal className={`${iconClass} text-[#3776ab]`} />, 
        color: 'from-[#3776ab]/10 to-[#3776ab]/2 border-[#3776ab]/20 hover:border-[#3776ab]/40 hover:shadow-[#3776ab]/5' 
      };
    case 'tensorflow':
      return { 
        icon: <Cpu className={`${iconClass} text-[#ff6f00]`} />, 
        color: 'from-[#ff6f00]/10 to-[#ff6f00]/2 border-[#ff6f00]/20 hover:border-[#ff6f00]/40 hover:shadow-[#ff6f00]/5' 
      };
    case 'figma':
      return { 
        icon: <Globe className={`${iconClass} text-[#f24e1e]`} />, 
        color: 'from-[#f24e1e]/10 to-[#f24e1e]/2 border-[#f24e1e]/20 hover:border-[#f24e1e]/40 hover:shadow-[#f24e1e]/5' 
      };
    case 'framer':
      return { 
        icon: <Layers className={`${iconClass} text-[#0055ff]`} />, 
        color: 'from-[#0055ff]/10 to-[#0055ff]/2 border-[#0055ff]/20 hover:border-[#0055ff]/40 hover:shadow-[#0055ff]/5' 
      };
    case 'n8n':
      return { 
        icon: <Workflow className={`${iconClass} text-[#ff6d5a]`} />, 
        color: 'from-[#ff6d5a]/10 to-[#ff6d5a]/2 border-[#ff6d5a]/20 hover:border-[#ff6d5a]/40 hover:shadow-[#ff6d5a]/5' 
      };
    case 'langchain':
      return { 
        icon: <LinkIcon className={`${iconClass} text-[#13c160]`} />, 
        color: 'from-[#13c160]/10 to-[#13c160]/2 border-[#13c160]/20 hover:border-[#13c160]/40 hover:shadow-[#13c160]/5' 
      };
    case 'slack':
      return { 
        icon: <MessageSquare className={`${iconClass} text-[#4a154b]`} />, 
        color: 'from-[#4a154b]/10 to-[#4a154b]/2 border-[#4a154b]/20 hover:border-[#4a154b]/40 hover:shadow-[#4a154b]/5' 
      };
    case 'hubspot':
      return { 
        icon: <Database className={`${iconClass} text-[#ff7a59]`} />, 
        color: 'from-[#ff7a59]/10 to-[#ff7a59]/2 border-[#ff7a59]/20 hover:border-[#ff7a59]/40 hover:shadow-[#ff7a59]/5' 
      };
    case 'supabase':
      return { 
        icon: <Database className={`${iconClass} text-[#3ecf8e]`} />, 
        color: 'from-[#3ecf8e]/10 to-[#3ecf8e]/2 border-[#3ecf8e]/20 hover:border-[#3ecf8e]/40 hover:shadow-[#3ecf8e]/5' 
      };
    case 'stripe':
      return { 
        icon: <CreditCard className={`${iconClass} text-[#635bff]`} />, 
        color: 'from-[#635bff]/10 to-[#635bff]/2 border-[#635bff]/20 hover:border-[#635bff]/40 hover:shadow-[#635bff]/5' 
      };
    default:
      return { 
        icon: <Code2 className={`${iconClass} text-primary`} />, 
        color: 'from-primary/10 to-primary/2 border-primary/20 hover:border-primary/40 hover:shadow-primary/5' 
      };
  }
};

export function TechStackStrip() {
  // Double the items for seamless loop
  const allItems = [...techItems, ...techItems];

  return (
    <div className="relative overflow-hidden py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[var(--card)] to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[var(--card)] to-transparent" />

      {/* Scrolling strip */}
      <div className="group flex animate-marquee items-center gap-8 hover:[animation-play-state:paused]">
        {allItems.map((tech, index) => {
          const { icon, color } = getTechIcon(tech);
          return (
            <div
              key={`${tech}-${index}`}
              className={`group flex shrink-0 items-center gap-3 rounded-xl border bg-gradient-to-br bg-bg-surface ${color} px-5 py-3 transition-all duration-300 hover:scale-[1.03] hover:shadow-md`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-surface-hover/80 shadow-sm border border-border/40">
                {icon}
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-text-primary">
                {tech}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
