export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'AutoNova transformed our sales process completely. Their AI lead qualification system saved our team 20+ hours a week and tripled our qualified pipeline. The ROI was evident within the first month.',
    name: 'Sarah Chen',
    role: 'VP of Sales',
    company: 'CloudStack SaaS',
    initials: 'SC',
  },
  {
    id: '2',
    quote:
      'Our new website isn\'t just beautiful — it converts. Since AutoNova rebuilt our e-commerce platform, our mobile conversion rate is up 25% and customers constantly compliment the shopping experience.',
    name: 'Marcus Rivera',
    role: 'Founder & CEO',
    company: 'Velvet Apparel',
    initials: 'MR',
  },
  {
    id: '3',
    quote:
      'We went from producing 10 ad creatives a week to 200+ a month without adding a single designer. AutoNova\'s AI creative engine is a game-changer for any brand running paid ads at scale.',
    name: 'Priyanka Desai',
    role: 'Head of Growth',
    company: 'GlowUp Skincare',
    initials: 'PD',
  },
];
