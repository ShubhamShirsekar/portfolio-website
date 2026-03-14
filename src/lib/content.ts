import type { 
  Project, 
  Experience, 
  Skill, 
  Education, 
  Metric, 
  ValueProposition, 
  NavLink, 
  SocialLink 
} from '@/types';

// ============================================
// GLOBAL CONTENT
// ============================================

export const siteConfig = {
  name: 'Shubham Shirsekar',
  role: 'Data Analyst | Business Analyst',
  availability: 'End-of-studies internship – May 2026',
  email: 'shubhamshirsekar7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/shubhamshirsekar21/',
  github: 'https://github.com/ShubhamShirsekar',
  kaggle: 'https://www.kaggle.com/shubhamshirsekar',
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
  { name: 'Kaggle', url: siteConfig.kaggle, icon: 'kaggle' },
  { name: 'Email', url: `mailto:${siteConfig.email}`, icon: 'mail' },
];

// ============================================
// HOME PAGE CONTENT
// ============================================

export const heroContent = {
  headline: 'Turning Data into Business Decisions',
  subheadline: 'Data analyst blending technical depth with real-world business impact',
  intro: 'Transforming data into decisions through analytics and automation',
  primaryCTA: { label: 'View Projects', href: '/projects' },
  secondaryCTA: { label: 'Download Resume', href: 'https://drive.google.com/file/d/1PplsPHKQ9axNxrZb-mEikH38UY8PrpOe/view?usp=sharing' },
};

export const valuePropositions: ValueProposition[] = [
  {
    title: 'Data-Driven Thinking',
    description: 'Transforming raw data into structured insights that support informed business decisions.',
    icon: 'chart',
  },
  {
    title: 'Automation & Integration',
    description: 'Designing scalable API-driven and automated solutions that reduce manual effort and improve efficiency.',
    icon: 'code',
  },
  {
    title: 'Business Acumen',
    description: 'Bridging technical execution with business needs to deliver measurable impact.',
    icon: 'briefcase',
  },
];

export const impactMetrics: Metric[] = [
  { label: 'Years Experience', value: '3+' },
  { label: 'REST APIs Built', value: '30+' },
  { label: 'Efficiency Improvement', value: '20%' },
  { label: 'Hours Saved / Release', value: '5+' },
];

// ============================================
// ABOUT PAGE CONTENT
// ============================================

export const aboutContent = {
  professionalSummary: `I am a motivated and curious data professional with a foundation in engineering and hands-on experience delivering enterprise-grade solutions. My work spans analytics, automation, and API integrations across CRM platforms for large organizations.

Currently, I am pursuing an MSc in Data Analytics for Business at KEDGE Business School in Bordeaux, where I am deepening my expertise in machine learning, business analytics, and data visualization.

I thrive at the intersection of data, technology, and business, and I am actively seeking an end-of-studies internship as a Data Analyst starting May 2026.`,
  
  careerMotivation: [
    'Solving ambiguous business problems using structured data approaches',
    'Building scalable, automated systems',
    'Translating insights into actions stakeholders can trust',
  ],
  
  personalInterests: [
    'Physical fitness (soccer, cricket, badminton)',
    'Reading mystery novels and thrillers',
    'Playing online video games',
    'Discovering new cultures',
    'Traveling',
  ],
};

// ============================================
// EXPERIENCE DATA
// ============================================

export const experiences: Experience[] = [
  {
    role: 'Engineer',
    company: 'Acidaes Solutions Pvt Ltd',
    location: 'Mumbai, India',
    duration: 'Oct 2023 – Jul 2025',
    achievements: [
      'Delivered technical-business consultations optimizing CRM implementations and improving operational efficiency by 15–20% across 3+ major banks',
      'Built 30+ REST API integrations with external banking systems, reducing service request processing time by 20%',
      'Developed and deployed batch automation scripts, reducing manual deployment effort by 80% and saving 5+ hours per release',
      'Led the creation of dashboards and project trackers, improving governance accuracy by 30%',
    ],
  },
  {
    role: 'Graduate Engineer Trainee',
    company: 'Acidaes Solutions Pvt Ltd',
    location: 'Mumbai, India',
    duration: 'Sep 2022 – Sep 2023',
    achievements: [
      'Collaborated with 5+ cross-functional teams to deploy CRM solutions with error-free delivery',
      'Conducted training sessions for 10+ team members, improving tool adoption and proficiency by 35%',
      'Maintained and updated 50+ technical documents, improving knowledge transfer efficiency by 20%',
    ],
  },
  {
    role: 'Business Development Intern',
    company: 'Livspace',
    location: 'Mumbai, India',
    duration: 'Nov 2021 – Jan 2022',
    achievements: [
      'Managed lead distribution across 8 cities, overseeing 2,000+ leads per month',
      'Improved lead response time by 40% through process optimization',
      'Built dashboards and reports used by leadership to track performance',
    ],
  },
];

// ============================================
// PROJECTS DATA
// ============================================

export const projects: Project[] = [
  {
    title: 'Synthpanel Chatbot',
    slug: 'synthpanel',
    summary: 'An interactive AI chatbot application built with Streamlit, providing users with a seamless and real-time interface to interact with language models.',
    tags: ['AI', 'Web Development'],
    tools: ['Python', 'Streamlit'],
    github: 'https://github.com/ShubhamShirsekar/Synthpanel',
    demo: 'https://synthpanel-chatbot.streamlit.app/',
    featured: true,
    date: '2026-03',
  },
  {
    title: 'BTC DCA vs Buy the Dip',
    slug: 'btc-dca-vs-dip',
    summary: 'A quantitative comparison of Dollar Cost Averaging vs Buy-the-Dip Bitcoin investment strategies. Analyzed Bitcoin price data from 2012–2025 using 3,950 rolling 3-year windows to compare risk-adjusted returns between passive and tactical investment strategies.',
    tags: ['Finance', 'Quantitative Analysis'],
    tools: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/ShubhamShirsekar/btc-dca-vs-dip',
    featured: false,
    date: '2025-01',
  },
  {
    title: 'Spotify Playlist Reconstruction',
    slug: 'spotify-reconstruction',
    summary: 'Reconstructing deleted Spotify playlists using machine learning. Used a two-stage classification approach to predict missing user and year labels for unlabeled songs in a mixed family Spotify account.',
    tags: ['Machine Learning', 'Classification'],
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/ShubhamShirsekar/spotify-reconstruction',
    featured: true,
    date: '2024-12',
  },
  {
    title: "L'Oréal Skin Condition Classification",
    slug: 'loreal-hackathon',
    summary: 'Knowledge distillation and Green AI optimization for skin condition classification. Achieved model compression with significant CO₂ reduction while maintaining accuracy.',
    tags: ['Deep Learning', 'Green AI', 'Hackathon'],
    tools: ['Python', 'PyTorch', 'TensorFlow'],
    github: 'https://github.com/ShubhamShirsekar/loreal-hackathon',
    featured: true,
    date: '2024-11',
  },
  {
    title: 'Spotify Recommendation System',
    slug: 'spotify-recommendation',
    summary: 'Enhancing music recommendations through feature engineering and advanced modeling. Built a personalized recommendation system using correlation analysis and ML models.',
    tags: ['Recommendation Systems', 'ML'],
    tools: ['Python', 'Pandas', 'Scikit-learn'],
    github: 'https://github.com/ShubhamShirsekar/spotify-recommendation',
    featured: false,
    date: '2024-10',
  },
  {
    title: 'IEA Energy Analysis',
    slug: 'iea-analysis',
    summary: 'Comprehensive analysis of International Energy Agency data to uncover trends in global energy consumption and renewable energy adoption.',
    tags: ['Data Analysis', 'Visualization'],
    tools: ['Python', 'Pandas', 'Plotly', 'Power BI'],
    github: 'https://github.com/ShubhamShirsekar/iea-analysis',
    featured: false,
    date: '2024-09',
  },
  {
    title: 'EventSphere',
    slug: 'eventsphere',
    summary: 'Django-based event management platform with user authentication, event creation, and RSVP functionality.',
    tags: ['Web Development', 'Full Stack'],
    tools: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    github: 'https://github.com/ShubhamShirsekar/eventsphere',
    demo: 'https://eventsphere-demo.vercel.app',
    featured: false,
    date: '2024-08',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

// ============================================
// SKILLS DATA
// ============================================

export const skills: Skill[] = [
  // Technical Skills
  { name: 'Python', category: 'technical' },
  { name: 'SQL', category: 'technical' },
  { name: 'Advanced Excel', category: 'technical' },
  { name: 'Power BI', category: 'technical' },
  { name: 'Tableau', category: 'technical' },
  { name: 'API Integration', category: 'technical' },
  { name: 'XSLT', category: 'technical' },
  { name: 'C#', category: 'technical' },
  
  // Soft Skills
  { name: 'Project Management (Agile, Scrum)', category: 'soft' },
  { name: 'Communication', category: 'soft' },
  { name: 'Collaboration', category: 'soft' },
  { name: 'Adaptability', category: 'soft' },
  { name: 'Time Management', category: 'soft' },
  
  // Languages
  { name: 'English — C1 (Advanced)', category: 'language' },
  { name: 'French — B1 (Professional Working Proficiency)', category: 'language' },
];

export const technicalSkills = skills.filter((s) => s.category === 'technical');
export const softSkills = skills.filter((s) => s.category === 'soft');
export const languages = skills.filter((s) => s.category === 'language');

// ============================================
// EDUCATION DATA
// ============================================

export const education: Education[] = [
  {
    degree: 'MSc Data Analytics for Business',
    institution: 'KEDGE Business School',
    location: 'Bordeaux, France',
    years: '2024 – 2026',
    details: [
      'Machine Learning',
      'Business Analytics',
      'Python Programming',
      'Legal and Social Impacts of AI',
      'Change Management',
      'Data Visualization',
      'Agile Project Management',
    ],
  },
  {
    degree: 'Bachelor of Engineering — Electronics & Telecommunications',
    institution: 'University of Mumbai',
    location: 'Mumbai, India',
    years: '2018 – 2022',
    details: ['CGPA: 8.35 / 10'],
  },
];

// ============================================
// CONTACT PAGE CONTENT
// ============================================

export const contactContent = {
  headline: 'Get in Touch',
  description: "I'm actively seeking an end-of-studies internship starting May 2026. Let's connect and discuss how I can contribute to your team.",
  availability: 'Available for Data Analyst / Business Analytics internships',
};
