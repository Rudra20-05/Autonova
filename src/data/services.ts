export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  whoItsFor: string;
  problemsSolved: string[];
  process: { step: string; description: string }[];
  tools: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Automate the boring. Amplify the brilliant.',
    description:
      'We design and build custom AI workflows, intelligent chatbots, and data pipelines that eliminate repetitive tasks and unlock operational efficiency at scale.',
    icon: '⚡',
    color: 'primary',
    whoItsFor: 'Businesses drowning in manual, repetitive processes that drain team productivity and limit growth.',
    problemsSolved: [
      'Manual lead qualification taking hours daily',
      'Data entry and document processing bottlenecks',
      'Slow customer support response times',
      'Invoice and expense processing delays',
      'Disconnected tools requiring manual data transfer',
    ],
    process: [
      { step: 'Audit', description: 'We map your current workflows to identify automation opportunities and ROI potential.' },
      { step: 'Design', description: 'We architect the automation solution, selecting the right AI models and integration points.' },
      { step: 'Build', description: 'Our engineers build and test the automation pipeline with rigorous quality standards.' },
      { step: 'Integrate', description: 'We connect the automation to your existing tools and train your team.' },
      { step: 'Monitor', description: 'Ongoing monitoring, optimization, and iteration to maximize performance.' },
    ],
    tools: ['OpenAI', 'Make', 'Zapier', 'n8n', 'LangChain', 'Python'],
    features: [
      'Custom AI workflow design',
      'Intelligent chatbot development',
      'Data pipeline automation',
      'API integration & orchestration',
      'Natural language processing',
      'Predictive analytics',
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    tagline: 'Websites that work as hard as you do.',
    description:
      'We build high-performance websites, web applications, and SaaS platforms that deliver exceptional user experiences and drive measurable business results.',
    icon: '🌐',
    color: 'secondary',
    whoItsFor: 'Startups, agencies, and businesses that need a world-class digital presence to compete and convert.',
    problemsSolved: [
      'Slow, outdated websites hurting SEO and conversions',
      'Poor mobile experience losing customers',
      'No conversion optimization or analytics',
      'Difficult-to-maintain legacy codebases',
      'Lack of scalable architecture for growth',
    ],
    process: [
      { step: 'Wireframe', description: 'We map the user journey and create detailed wireframes for every page and interaction.' },
      { step: 'Design', description: 'Pixel-perfect UI designs that align with your brand and delight your users.' },
      { step: 'Develop', description: 'Clean, performant code built with modern frameworks and best practices.' },
      { step: 'Test', description: 'Rigorous QA across devices, browsers, and performance benchmarks.' },
      { step: 'Launch', description: 'Deployment, monitoring, and post-launch optimization.' },
    ],
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Supabase', 'Prisma'],
    features: [
      'Responsive web design',
      'Full-stack web applications',
      'SaaS platform development',
      'E-commerce solutions',
      'Progressive web apps',
      'API development',
    ],
  },
  {
    id: 'ai-creative-ads',
    title: 'AI Creative Ads',
    tagline: 'Creative that converts. At scale.',
    description:
      'We harness AI to generate stunning ad creatives, compelling copy, and data-driven campaign strategies that maximize ROAS and minimize creative fatigue.',
    icon: '🎨',
    color: 'accent',
    whoItsFor: 'Marketing teams, e-commerce brands, and growth-stage startups that need high-volume, high-performing ad creatives.',
    problemsSolved: [
      'Creative fatigue driving up ad costs',
      'Slow turnaround on new ad variations',
      'Inconsistent brand messaging across campaigns',
      'Manual A/B testing taking weeks',
      'Scaling creative production without scaling headcount',
    ],
    process: [
      { step: 'Brief', description: 'We understand your brand, audience, and campaign objectives.' },
      { step: 'Generate', description: 'AI produces dozens of creative variations aligned to your brand guidelines.' },
      { step: 'A/B Test', description: 'Automated multivariate testing across platforms to find winners fast.' },
      { step: 'Optimize', description: 'Data-driven iteration on top performers to maximize ROAS.' },
      { step: 'Scale', description: 'Expand winning creatives across channels and audiences.' },
    ],
    tools: ['DALL·E', 'Midjourney', 'GPT-4', 'Meta Ads', 'Google Ads', 'Figma'],
    features: [
      'AI-generated ad creatives',
      'Automated copywriting',
      'Campaign strategy & optimization',
      'Multivariate testing',
      'Brand-consistent content at scale',
      'Performance analytics & reporting',
    ],
  },
];

export interface ServiceProfile {
  id: string;
  title: string;
  icon: string;
  useCases: { title: string; description: string; icon: string }[];
}

export const serviceProfiles: ServiceProfile[] = [
  {
    id: 'startup',
    title: 'Startup Founder',
    icon: '🚀',
    useCases: [
      {
        title: 'AI Lead Generation',
        description: 'Automatically find, qualify, and nurture leads while you focus on building your product.',
        icon: '🎯',
      },
      {
        title: 'MVP Development',
        description: 'Launch your web app in weeks, not months, with a production-ready tech stack.',
        icon: '⚡',
      },
      {
        title: 'Growth Ad Creatives',
        description: 'AI-generated ad variations that test and optimize automatically for maximum ROI.',
        icon: '📈',
      },
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Owner',
    icon: '🛒',
    useCases: [
      {
        title: 'Inventory Automation',
        description: 'Real-time stock management, automated reordering, and demand forecasting with AI.',
        icon: '📦',
      },
      {
        title: 'Storefront Rebuild',
        description: 'Lightning-fast, conversion-optimized online store built with Next.js and modern UX.',
        icon: '🏪',
      },
      {
        title: 'Product Ad Engine',
        description: 'Generate hundreds of product-specific ad creatives automatically from your catalog.',
        icon: '🎨',
      },
    ],
  },
  {
    id: 'agency',
    title: 'Agency / Consultancy',
    icon: '🏢',
    useCases: [
      {
        title: 'White-Label Automation',
        description: 'Offer AI automation services to your clients under your own brand.',
        icon: '🤖',
      },
      {
        title: 'Client Dashboards',
        description: 'Beautiful, real-time reporting dashboards that impress your clients and save reporting hours.',
        icon: '📊',
      },
      {
        title: 'Branded Content at Scale',
        description: 'AI-powered creative production that maintains brand consistency across all clients.',
        icon: '✨',
      },
    ],
  },
  {
    id: 'enterprise',
    title: 'Enterprise / SMB',
    icon: '🏛️',
    useCases: [
      {
        title: 'Process Automation',
        description: 'Streamline operations from HR onboarding to finance workflows with intelligent automation.',
        icon: '⚙️',
      },
      {
        title: 'Internal Tools',
        description: 'Custom web applications that connect your tech stack and empower your team.',
        icon: '🔧',
      },
      {
        title: 'Corporate Campaigns',
        description: 'Enterprise-grade AI creative production with compliance and brand governance built in.',
        icon: '📣',
      },
    ],
  },
];
