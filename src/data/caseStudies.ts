export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  outcome: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'art-heart',
    title: 'Art Heart',
    category: 'Website Development & Brand Support',
    description:
      'Redesigned and rebuilt a modern, fully responsive web experience and integrated social/community outreach strategies to revitalize Art Heart\'s digital presence.',
    techStack: ['Next.js', 'React', 'Framer Motion', 'Vanilla CSS', 'Brand Support'],
    outcome: 'Fully responsive site & enhanced brand engagement',
    problem:
      'Art Heart’s previous website was outdated, non-responsive, and partially broken, with several UI and functionality issues affecting user experience and brand presentation.',
    solution:
      'We redesigned and rebuilt the complete website experience for Art Heart, making it modern, responsive, and fully functional across devices. Alongside the website development, we also helped support their art gatherings and connected them with social media agency partners to improve their online presence and outreach.',
    result:
      'Delivered a fully responsive and stable website experience that improved accessibility, usability, and overall brand presentation for their events and community initiatives.',
    metrics: [
      { label: 'Device Compatibility', value: '100%' },
      { label: 'Brand Outreach Reach', value: '2.5x' },
      { label: 'Community Sign-ups', value: '+45%' },
    ],
  },
  {
    id: 'bhumee-exports',
    title: 'Bhumee Exports',
    category: 'Product Catalog & Business Website Development',
    description:
      'Created a professional digital storefront, online product catalog, and secure payment workflows to elevate Bhumee Exports\' global business footprint.',
    techStack: ['Next.js', 'React', 'Payment Integration', 'Tailwind CSS', 'UI/UX Design'],
    outcome: 'Centralized catalog & streamlined payment flow',
    problem:
      'Bhumi Exports required a professional online presence that could properly showcase their export business, products, and payment systems in a structured and scalable way.',
    solution:
      'We built a complete portfolio and product catalog website for the company, allowing them to professionally display their products and business information online. We also implemented payment integration systems and streamlined customer interaction workflows through the platform.',
    result:
      'Created a centralized digital platform that improved product presentation, simplified customer communication, and strengthened the company’s online business presence.',
    metrics: [
      { label: 'Product Reach Visibility', value: '3x' },
      { label: 'Inquiry Efficiency', value: '+50%' },
      { label: 'Payment Processing Time', value: '-80%' },
    ],
  },
];

