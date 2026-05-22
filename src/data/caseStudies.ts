export interface CaseStudy {
  id: string;
  title: string;
  category: 'AI Automation' | 'Web Development' | 'AI Creative Ads';
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
    id: 'ai-lead-qualification',
    title: 'AI Lead Qualification Bot for SaaS',
    category: 'AI Automation',
    description:
      'Built an intelligent lead scoring and qualification system that automatically evaluates, scores, and routes inbound leads using GPT-4 and custom business logic.',
    techStack: ['OpenAI', 'Make', 'HubSpot', 'Python'],
    outcome: '3x qualified leads, 60% less manual screening',
    problem:
      'A B2B SaaS company was drowning in unqualified leads. Their sales team spent 70% of their time manually reviewing and scoring leads from web forms, wasting hours on prospects that would never convert.',
    solution:
      'We designed and deployed an AI-powered lead qualification pipeline. Every inbound lead is automatically analyzed by GPT-4 against custom ICP criteria, scored on a 1-100 scale, enriched with company data, and routed to the appropriate sales rep in HubSpot — all within 30 seconds of form submission.',
    result:
      'Within 60 days, the client saw a 3x increase in qualified leads reaching sales reps, a 60% reduction in manual screening time, and a 22% improvement in close rates because reps were only talking to high-intent prospects.',
    metrics: [
      { label: 'Qualified Leads', value: '3x' },
      { label: 'Manual Screening Reduced', value: '60%' },
      { label: 'Close Rate Improvement', value: '22%' },
    ],
  },
  {
    id: 'invoice-processing',
    title: 'Automated Invoice Processing for Logistics',
    category: 'AI Automation',
    description:
      'End-to-end invoice processing automation using OCR, AI extraction, and QuickBooks integration for a mid-size logistics company.',
    techStack: ['Python', 'OCR', 'Zapier', 'QuickBooks'],
    outcome: '85% faster processing, 99.2% accuracy',
    problem:
      'A logistics company processed 500+ invoices monthly across multiple formats (PDF, scanned images, emails). Their finance team manually entered data into QuickBooks, leading to bottlenecks, errors, and delayed payments.',
    solution:
      'We built a custom OCR pipeline that ingests invoices from email, extracts key fields (vendor, amount, line items, due date) using AI, validates against purchase orders, and automatically creates entries in QuickBooks. Exception handling flags anomalies for human review.',
    result:
      'Invoice processing time dropped from 12 minutes to under 2 minutes per invoice. Data accuracy improved to 99.2%, and the finance team reallocated 20+ hours per week to strategic work instead of data entry.',
    metrics: [
      { label: 'Processing Speed', value: '85%↑' },
      { label: 'Data Accuracy', value: '99.2%' },
      { label: 'Hours Saved Weekly', value: '20+' },
    ],
  },
  {
    id: 'ecommerce-rebuild',
    title: 'E-commerce Platform Rebuild',
    category: 'Web Development',
    description:
      'Complete redesign and rebuild of a DTC fashion brand\'s online store, migrating from a legacy platform to a blazing-fast Next.js + Supabase stack.',
    techStack: ['Next.js', 'Tailwind', 'Supabase', 'Stripe'],
    outcome: '40% faster load times, 25% conversion lift',
    problem:
      'An established fashion brand was losing customers to a slow, outdated e-commerce site built on a legacy CMS. Page load times exceeded 6 seconds, mobile experience was poor, and the checkout flow had a 73% abandonment rate.',
    solution:
      'We rebuilt the entire storefront using Next.js with SSR for instant page loads, integrated Supabase for real-time inventory management, implemented Stripe for seamless checkout, and designed a mobile-first UI with Tailwind CSS. We also added AI-powered product recommendations.',
    result:
      'Page load times dropped to under 1.8 seconds. Mobile conversion rates increased by 25%, cart abandonment decreased by 31%, and average order value grew by 18% thanks to AI recommendations.',
    metrics: [
      { label: 'Load Time Reduction', value: '40%' },
      { label: 'Conversion Lift', value: '25%' },
      { label: 'Cart Abandonment Drop', value: '31%' },
    ],
  },
  {
    id: 'ai-ad-creative',
    title: 'AI Ad Creative Engine for DTC Brand',
    category: 'AI Creative Ads',
    description:
      'An automated creative production pipeline that generates, tests, and optimizes ad creatives across Meta and Google Ads using AI.',
    techStack: ['DALL·E', 'GPT-4', 'Meta Ads API', 'Python'],
    outcome: '200+ creatives/month, 35% lower CPA',
    problem:
      'A DTC skincare brand needed 50+ new ad creatives weekly but their in-house design team could only produce 10-15. Creative fatigue was driving up costs, with CPA increasing 40% over 6 months.',
    solution:
      'We built an AI creative engine that generates ad variations (images + copy) using DALL·E and GPT-4 based on the brand\'s style guide. The system automatically publishes winning variants to Meta and Google Ads, runs multivariate tests, and iterates on top performers.',
    result:
      'The brand now produces 200+ unique creatives per month (up from 50). CPA dropped by 35%, ROAS improved by 2.4x, and the design team now focuses on brand strategy instead of production.',
    metrics: [
      { label: 'Creatives Per Month', value: '200+' },
      { label: 'CPA Reduction', value: '35%' },
      { label: 'ROAS Improvement', value: '2.4x' },
    ],
  },
  {
    id: 'operations-dashboard',
    title: 'Internal Operations Dashboard for Fintech',
    category: 'Web Development',
    description:
      'A real-time operations dashboard for a fintech startup, consolidating data from 8 different tools into a single, actionable interface.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Recharts'],
    outcome: '15 hrs/week saved, real-time reporting',
    problem:
      'A growing fintech startup had data scattered across Slack, Jira, Salesforce, Stripe, and 4 other tools. Managers spent 3+ hours daily compiling reports from multiple dashboards to understand business health.',
    solution:
      'We built a centralized operations dashboard that pulls real-time data from all 8 tools via APIs, presents key metrics (revenue, pipeline, engineering velocity, support tickets) in an intuitive interface with drill-down capabilities, and sends automated daily/weekly digest reports.',
    result:
      'The executive team saves 15 hours per week on reporting. Decision-making speed improved dramatically with real-time visibility. The dashboard became the company\'s "single source of truth" for operations.',
    metrics: [
      { label: 'Hours Saved Weekly', value: '15+' },
      { label: 'Tools Consolidated', value: '8' },
      { label: 'Report Generation', value: 'Real-time' },
    ],
  },
];
