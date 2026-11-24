import type {
  Project,
  Experience,
  SkillGroup,
  Certification,
  Language,
  FunFact,
  BrandLogo,
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
  footerTagline: 'Forward Deployed Engineer',
  location: 'Paris, France',
  availability: 'Open to work · Paris, France',
  workAuthorization: 'Authorized to work in France',
  email: 'shubham.shirsekar@outlook.com',
  linkedin: 'https://linkedin.com/in/shubhamshirsekar21',
  github: 'https://github.com/shubhamshirsekar',
  resumeUrl: 'https://drive.google.com/file/d/13PTs48cSzH7EdIVKsRum5NEuvmCJx6No/view?usp=sharing',
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
  // Rotated in the hero with a typewriter effect (first line is the default / SSR text)
  taglines: [
    'Shipping AI agents into production that cut multi-day workflows to under a few hours.',
    'Connecting agents to the tools clients already use, securely, over OAuth, MCP and APIs.',
    'Enabling clients to turn their expertise into productized and reusable agents.',
    'Running technical discovery with client teams to scope agents around how their work really happens.',
    'Staying close to client teams after launch until the agents actually work for the people using them.',
  ],
  primaryCTA: { label: 'View Projects', href: '/projects' },
  secondaryCTA: { label: 'Download Resume', href: siteConfig.resumeUrl },
};

export const valuePropositions: ValueProposition[] = [
  {
    title: 'AI Agents in Production',
    points: [
      'From prototype to production, end to end.',
      'Agents that run in production, not demos.',
      'Model-agnostic agents.',
    ],
    icon: 'agent',
  },
  {
    title: 'Integrations',
    points: [
      'Secure and production-ready integrations.',
      'Agents wired to your existing tools.',
      'OAuth, MCP and API keys, done right.',
    ],
    icon: 'plug',
  },
  {
    title: 'Client-Facing Delivery',
    points: [
      'Discovery to delivery.',
      'Scoped with clients, built for their teams.',
      'Clear communication.',
    ],
    icon: 'people',
  },
];

export const impactMetrics: Metric[] = [
  { value: '3+ yrs', label: 'Building client-facing systems, from banks to AI agents' },
  { value: '50+', label: 'Change requests delivered per month' },
  { value: '0 → 1', label: 'Platform docs, written from scratch' },
  { value: '< 2 hrs', label: 'Per workflow, down from days' },
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
    { label: 'Work authorization', value: 'Authorized to work in France' },
    { label: 'Role', value: 'Forward Deployed Engineer' },
    { label: 'Experience', value: '3+ years', detail: 'Building client-facing systems, from banks to AI agents' },
    { label: 'Education', value: 'M.Sc. Data Analytics for Business', detail: 'KEDGE Business School' },
  ],
};

// Fun facts (from the interests on the previous About page; edit freely)
export const funFacts: FunFact[] = [
  { title: 'On the pitch', text: 'Football, cricket and badminton keep me moving.', icon: 'sport' },
  { title: 'Plot twists', text: 'Mystery novels and thrillers are my go-to reads.', icon: 'book' },
  { title: 'Player two', text: 'Online video games, usually with friends.', icon: 'game' },
  { title: 'Culture curious', text: 'Travelling and discovering new cultures.', icon: 'globe' },
];

// ============================================
// EXPERIENCE DATA
// ============================================

export const experiences: Experience[] = [
  {
    role: 'Forward Deployed Engineering Intern',
    company: 'Stackmint.ai',
    companyUrl: 'https://stackmint.ai/en',
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
    companyUrl: 'https://www.businessnext.com/',
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

const projectList: Project[] = [
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
      'Led a team of 6 to build an Azure OpenAI powered platform that turns 2,400+ survey responses from real BNP Paribas Personal Finance customers into personas for synthetic panel simulations with confidence scoring: panel answers in minutes instead of weeks.',
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
      "Led a team of 5 to tag 6,240 L'Oréal product descriptions with 33 labels (skin concerns, skin type, age, routine step): 78% weighted F1 with RoBERTa-large, then distilled it into DistilRoBERTa with 77% fewer parameters while keeping 97.6% of its weighted F1.",
    tags: ['NLP', 'Hackathon'],
    tools: ['Python', 'RoBERTa', 'DistilRoBERTa', 'PyTorch', 'CodeCarbon'],
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
      'Content-based music recommender: a One-Class SVM per user learns the audio-feature profile of their tracks and flags new tracks that fit it, reaching 86% average recall.',
    tags: ['Recommendation Systems', 'ML'],
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/ShubhamShirsekar/Data_Analytics/tree/main/MLI_Spotify_Project_Task2',
    featured: false,
    date: '2024-10',
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

// Cover illustrations live in public/images/projects/<slug>.svg
// (generated by scripts/generate-project-images.mjs).
const projectImageAlts: Record<string, string> = {
  'stackmint-agents': 'Illustration of an AI agent hub connected to six integration nodes',
  synthpanel: 'Illustration of survey data points grouped into four persona clusters',
  'loreal-hackathon': 'Illustration of text tokens flowing through model layers into skin-condition classification bars',
  'spotify-reconstruction': 'Illustration of a mixed audio waveform sorted into four colour-coded playlists',
  'spotify-recommendation': 'Illustration of tracks on vinyl-style rings with recommended tracks highlighted',
  'iea-analysis': 'Illustration of energy trend lines with a lightning bolt',
  'btc-dca-vs-dip': 'Illustration of a price chart with regular buys and buy-the-dip markers',
};

// Brand logos shown in the corner of each project image (files in public/logos/brands/).
// Missing files are simply not listed yet.
// Raster masks are generated by scripts/prepare-brand-logos.mjs.
const projectLogos: Record<string, BrandLogo[]> = {
  'stackmint-agents': [{ name: 'Stackmint', src: '/logos/brands/stackmint.png', aspect: 4.55 }],
  synthpanel: [
    { name: 'BNP Paribas', src: '/logos/brands/bnp-paribas.png', aspect: 4.85 },
    { name: 'CGI', src: '/logos/brands/cgi.png', aspect: 2.15, scale: 0.7 }, // heavy letterforms: optically match BNP
  ],
  'loreal-hackathon': [{ name: "L'Oréal", src: '/logos/brands/loreal.png', aspect: 5.52 }],
  'iea-analysis': [{ name: 'IEA', src: '/logos/brands/iea.png', aspect: 2.39 }],
  'btc-dca-vs-dip': [{ name: 'Bitcoin', src: '/logos/brands/bitcoin.png', aspect: 1 }],
  'spotify-reconstruction': [{ name: 'Spotify', src: '/logos/brands/spotify.svg', aspect: 1 }],
  'spotify-recommendation': [{ name: 'Spotify', src: '/logos/brands/spotify.svg', aspect: 1 }],
};

export const projects: Project[] = projectList.map((project) => ({
  ...project,
  image: `/images/projects/${project.slug}.svg`,
  imageAlt: projectImageAlts[project.slug],
  logos: projectLogos[project.slug],
}));

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
    title: 'Integrations & Platforms',
    skills: ['MCP', 'OAuth', 'REST APIs', 'Supabase', 'Render', 'Azure', 'DevOps CI/CD'],
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
      'Model fine-tuning',
    ],
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
  {
    name: 'Azure AI Fundamentals',
    issuer: 'Microsoft',
    logo: '/logos/Microsoft.svg',
    url: 'https://drive.google.com/file/d/1BynB33p5JObW7ve7p06ul1vMzHPJtQdI/view?usp=drive_link',
  },
  {
    name: 'Professional Scrum Master I',
    issuer: 'Scrum.org',
    logo: '/logos/scrum.png',
    url: 'https://drive.google.com/file/d/1sFjoNQYdH4ueM0Gu-ZeZX511Xb6vc0t5/view?usp=drive_link',
  },
  {
    name: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic',
    logo: '/logos/Claude.svg',
    url: 'https://drive.google.com/file/d/1ak3HcfUamfkmBAlaplVaHRNa0w07GHsn/view?usp=drive_link',
  },
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    logo: '/logos/HackerRank.svg',
    url: 'https://drive.google.com/file/d/10SNRg0-xmBexSg9I_BDe3eZbAwNmbyM0/view?usp=drive_link',
  },
];

export const languages: Language[] = [
  { name: 'English', level: 'C2', proficiency: 'Bilingual/Native' },
  { name: 'French', level: 'B2', proficiency: 'Professional working proficiency' },
];

// ============================================
// EDUCATION DATA
// ============================================

export const education: Education[] = [
  {
    degree: 'M.Sc. Data Analytics for Business',
    institution: 'KEDGE Business School',
    years: 'Sept 2025 – Apr 2027',
    logo: '/logos/kedge.png',
    // Square PNG with lots of padding: object-cover on a wide box crops to the wordmark; black -> white
    logoClassName: 'h-12 w-32 object-cover brightness-0 invert opacity-90',
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'University of Mumbai',
    years: 'Aug 2018 – May 2022',
    logo: '/logos/university-of-mumbai.svg',
    // Dark line-art crest: invert to light (keeps detail)
    logoClassName: 'h-14 w-14 object-contain invert opacity-90',
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
