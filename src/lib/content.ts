import type {
  Project,
  Experience,
  SkillGroup,
  Certification,
  Language,
  Education,
  Metric,
  ValueProposition,
  NavLink,
  SocialLink,
} from '@/types';

// ============================================
// GLOBAL CONTENT
// Source of truth: resume (Shubham_CV_P.pdf)
// ============================================

export const siteConfig = {
  name: 'Shubham Shirsekar',
  role: 'Forward Deployed Engineer',
  footerTagline: 'Forward Deployed Engineer | AI agents and integrations',
  location: 'Paris, France',
  availability: 'Open to work · Paris, France',
  email: 'shubham.shirsekar@outlook.com',
  linkedin: 'https://linkedin.com/in/shubhamshirsekar21',
  github: 'https://github.com/shubhamshirsekar',
  resumeUrl: 'https://drive.google.com/file/d/1Bs447TbeUBgFPswCiUu9wNEN0S9xuUzb/view?usp=sharing',
};

// ============================================
// NAVIGATION
// ============================================

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact', isCTA: true },
];

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: siteConfig.github, icon: 'github' },
  { name: 'LinkedIn', url: siteConfig.linkedin, icon: 'linkedin' },
  { name: 'Email', url: `mailto:${siteConfig.email}`, icon: 'mail' },
];

// ============================================
// HOME PAGE CONTENT
// ============================================

export const heroContent = {
  headline: 'Forward Deployed Engineer',
  tagline: 'Shipping AI agents into production that cut multi-day workflows to under a few hours.',
  primaryCTA: { label: 'View Projects', href: '/projects' },
  secondaryCTA: { label: 'Download Resume', href: siteConfig.resumeUrl },
};

export const valuePropositions: ValueProposition[] = [
  {
    title: 'AI Agents in Production',
    description:
      'Designing, building and deploying AI agents on a Python and Pydantic AI backend with a TypeScript frontend, across OpenAI, Anthropic, Mistral, DeepSeek and Gemini models. Several are now live.',
    icon: 'agent',
  },
  {
    title: 'Integrations: OAuth, MCP, APIs',
    description:
      'Owning integrations over OAuth, MCP and API keys, and getting each one approved and set up securely. Backed by three years of CRM and integration delivery for financial institutions.',
    icon: 'plug',
  },
  {
    title: 'Client-Facing Delivery',
    description:
      'Running technical discovery with client teams, gathering requirements, and enabling clients to build directly in the platform themselves.',
    icon: 'people',
  },
];

export const impactMetrics: Metric[] = [
  { value: '3 yrs', label: 'CRM and integration delivery for financial institutions' },
  { value: '50+', label: 'Change requests delivered per month' },
  { value: '80%', label: 'Less deployment effort through custom automation' },
  { value: '< 2 hrs', label: 'Per workflow with AI agents, down from 1 to 3 days' },
];

// ============================================
// ABOUT PAGE CONTENT
// ============================================

export const aboutContent = {
  summary: [
    'Forward deployed engineer who has shipped AI agents into production, cutting multi-day workflows to under a few hours. Full-stack across Python and TypeScript, with an MSc in Data Analytics for Business from KEDGE Business School.',
    'At Stackmint.ai I designed, built and deployed AI agents for a 30-person marketing agency, ran technical discovery with the client’s team, owned integrations over OAuth, MCP and API keys, and documented the platform from scratch. Several of those agents are now live.',
    'That work is built on three years delivering CRM and integration projects for banks and financial institutions at BUSINESSNEXT, which taught me where data ends and decisions begin.',
  ],
  quickFacts: [
    { label: 'Location', value: 'Paris, France' },
    { label: 'Role', value: 'Forward Deployed Engineer', detail: 'AI agents and integrations' },
    { label: 'Experience', value: '3 years', detail: 'CRM and integration delivery for financial institutions' },
    { label: 'Education', value: 'M.Sc. Data Analytics for Business', detail: 'KEDGE Business School' },
  ],
};

// ============================================
// EXPERIENCE DATA
// ============================================

export const experiences: Experience[] = [
  {
    role: 'Forward Deployed Engineering Intern',
    company: 'Stackmint.ai',
    location: 'Paris, France',
    duration: 'May 2026 – Nov 2026',
    achievements: [
      'Designed, built and deployed AI agents for a 30-person marketing agency, cutting workflows that took 1 to 3 days down to under 2 hours with review-only manual effort; several agents now live',
      'Primary tech stack: TypeScript frontend, Python backend, Pydantic AI agent runtime, Supabase and Render deployment, across OpenAI, Anthropic, Mistral, DeepSeek and Gemini models',
      'Owned integrations over OAuth, MCP and API keys, getting each one approved and set up securely',
      "Ran technical discovery with the client's team to scope the agents and enable the client to build directly in the platform using the Stackmint MCP",
      'Worked directly with the founder, and documented the platform from scratch for the team',
    ],
  },
  {
    role: 'Engineer',
    company: 'BUSINESSNEXT',
    duration: 'Jun 2022 – Jul 2025',
    achievements: [
      'Delivered CRM and integration solutions for banks and financial institutions; joined as an intern and took full ownership of an independent client project within 6 months',
      'Led delivery of 50+ change requests per month across concurrent client projects and reviewed production migrations; cut deployment effort by 80% with a custom automation solution',
      'Led the full on-premises to cloud migration, building CI/CD pipelines on Azure DevOps',
    ],
  },
];

// ============================================
// PROJECTS DATA
// Featured projects come first; detail pages live in src/content/projects/*.mdx
// ============================================

export const projects: Project[] = [
  {
    title: 'Production AI Agents for a Marketing Agency',
    slug: 'stackmint-agents',
    summary:
      'Designed, built and deployed AI agents for a 30-person marketing agency at Stackmint.ai, cutting workflows that took 1 to 3 days down to under 2 hours with review-only manual effort.',
    tags: ['AI Agents', 'Integrations', 'Client Delivery'],
    tools: ['TypeScript', 'Python', 'Pydantic AI', 'Supabase', 'Render', 'MCP', 'OAuth'],
    featured: true,
    date: '2026-05',
  },
  {
    title: 'SynthPanel',
    slug: 'synthpanel',
    summary:
      'Azure OpenAI powered platform that clusters 2,400+ consumer survey records into validated personas for synthetic panel simulations with confidence scoring, cutting traditional market research cost and time by 80%.',
    tags: ['Generative AI', 'Hackathon'],
    tools: ['Azure OpenAI', 'Streamlit'],
    github: 'https://github.com/ShubhamShirsekar/Synthpanel',
    demo: 'https://synthpanel-chatbot.streamlit.app/',
    featured: true,
    date: '2026-02',
  },
  {
    title: "L'Oréal Product Classification",
    slug: 'loreal-hackathon',
    summary:
      "Fine-tuned RoBERTa on a custom product description dataset provided by L'Oréal, reaching 79% accuracy on product classification and enabling segmentation from descriptions alone.",
    tags: ['NLP', 'Hackathon'],
    tools: ['Python', 'RoBERTa', 'PyTorch', 'TensorFlow'],
    github: 'https://github.com/ShubhamShirsekar/L-Oreal-Hackathon',
    featured: true,
    date: '2026-01',
  },
  {
    title: 'Spotify Playlist Reconstruction',
    slug: 'spotify-reconstruction',
    summary:
      'Reconstructing deleted Spotify playlists using machine learning. Used a two-stage classification approach to predict missing user and year labels for unlabeled songs in a mixed family Spotify account.',
    tags: ['Machine Learning', 'Classification'],
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/ShubhamShirsekar/Data_Analytics/tree/main/MLI_Spotify_Project_Task1',
    featured: false,
    date: '2024-12',
  },
  {
    title: 'Spotify Recommendation System',
    slug: 'spotify-recommendation',
    summary:
      'Enhancing music recommendations through feature engineering and advanced modeling. Built a personalized recommendation system using correlation analysis and ML models.',
    tags: ['Recommendation Systems', 'ML'],
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/ShubhamShirsekar/Data_Analytics/tree/main/MLI_Spotify_Project_Task2',
    featured: false,
    date: '2024-10',
  },
  {
    title: 'EventSphere',
    slug: 'eventsphere',
    summary:
      'Django-based event management platform with user authentication, event creation, and ticketing.',
    tags: ['Web Development', 'Full Stack'],
    tools: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    github: 'https://github.com/ShubhamShirsekar/eventsphere',
    demo: 'https://eventsphere-demo.vercel.app',
    featured: false,
    date: '2025-11',
  },
  {
    title: 'IEA Energy Analysis',
    slug: 'iea-analysis',
    summary:
      'Analysis of International Energy Agency data to uncover trends in energy consumption and electricity trade.',
    tags: ['Data Analysis', 'Visualization'],
    tools: ['Python', 'Pandas', 'Plotly', 'Power BI'],
    github: 'https://github.com/ShubhamShirsekar/Data_Analytics/tree/main/Python_Bootcamp_Project',
    featured: false,
    date: '2025-10',
  },
  {
    title: 'BTC DCA vs Buy the Dip',
    slug: 'btc-dca-vs-dip',
    summary:
      'A quantitative comparison of Dollar Cost Averaging vs Buy-the-Dip Bitcoin investment strategies across 3,950 rolling 3-year windows.',
    tags: ['Finance', 'Quantitative Analysis'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/ShubhamShirsekar/Data_Analytics/tree/main/BTC_DCA_vs_Dip',
    featured: false,
    date: '2025-01',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const secondaryProjects = projects.filter((p) => !p.featured);

// ============================================
// SKILLS, CERTIFICATIONS, LANGUAGES
// ============================================

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'TypeScript', 'SQL', 'Pydantic', 'Git', 'Power BI'],
  },
  {
    title: 'AI',
    skills: [
      'LLM Agents',
      'Pydantic AI',
      'Azure OpenAI',
      'OpenAI',
      'Anthropic',
      'Mistral',
      'DeepSeek',
      'Gemini',
      'RoBERTa fine-tuning',
    ],
  },
  {
    title: 'Integrations & Platforms',
    skills: ['MCP', 'OAuth', 'REST APIs', 'Supabase', 'Render', 'Azure', 'Azure DevOps CI/CD'],
  },
  {
    title: 'Client Skills',
    skills: [
      'Technical Discovery',
      'Requirements Gathering',
      'Client Communication',
      'Ownership',
      'Active Listening',
      'Problem Solving',
      'Quick Learner',
    ],
  },
];

export const certifications: Certification[] = [
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', logo: '/logos/Microsoft.svg' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', logo: '/logos/scrum.png' },
  { name: 'AI Fluency: Framework & Foundations', issuer: 'Anthropic', logo: '/logos/Claude.svg' },
  { name: 'SQL (Advanced)', issuer: 'HackerRank' },
];

export const languages: Language[] = [
  { name: 'English', level: 'C2' },
  { name: 'French', level: 'B2' },
];

// ============================================
// EDUCATION DATA
// ============================================

export const education: Education[] = [
  {
    degree: 'M.Sc. Data Analytics for Business',
    institution: 'KEDGE Business School',
    years: 'Sept 2025 – Apr 2027',
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'University of Mumbai',
    years: 'Aug 2018 – May 2022',
  },
];

// ============================================
// CONTACT PAGE CONTENT
// ============================================

export const contactContent = {
  headline: 'Get in Touch',
  description:
    'Looking for a forward deployed engineer to ship production AI agents and integrations with your clients? Let’s talk.',
  availability: siteConfig.availability,
};
