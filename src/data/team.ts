export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  linkedin?: string;
  instagram?: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    id: 'sreejith',
    name: 'M SREEJITH',
    role: 'CO-FOUNDER',
    bio: 'TECHNICAL PRICING SPECIALIST • HANDLES ALL MEETINGS & OUTREACH PROTOCOLS',
    initials: 'MS',
    gradientFrom: '#5A4BD1',
    gradientTo: '#00B4DB',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    image: '/images/team/sreejith.png',
  },
  {
    id: 'aryan',
    name: 'ARYAN NATE',
    role: 'FOUNDER',
    bio: 'AUTOMATION EXPERT • NEURAL SYSTEMS & AI IMPLEMENTATION ARCHITECT',
    initials: 'AN',
    gradientFrom: '#6C5CE7',
    gradientTo: '#00D2FF',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    image: '/images/team/aryan.png',
  },
  {
    id: 'zayd',
    name: 'ZAYD BAIG',
    role: 'CO-FOUNDER',
    bio: 'OPERATIONS & STRATEGIC IMPLEMENTATION LEAD • BUSINESS OPTIMIZATION',
    initials: 'ZB',
    gradientFrom: '#E55555',
    gradientTo: '#F0B429',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    image: '/images/team/zayd.png',
  },
];
