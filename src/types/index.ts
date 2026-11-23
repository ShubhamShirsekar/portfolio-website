// Core data types for the portfolio website

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  tools: string[];
  github?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  featured: boolean;
  date: string;
};

export type Experience = {
  role: string;
  company: string;
  location?: string;
  duration: string;
  achievements: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  logo?: string;
  /** Link to the certificate (e.g. a shared Drive file). */
  url?: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Education = {
  degree: string;
  institution: string;
  years: string;
  /** Institution logo shown on the right of the card. */
  logo?: string;
  /** Render a dark/black logo as white on the dark card. */
  logoInvert?: boolean;
};

export type Metric = {
  label: string;
  value: string;
};

export type ValueProposition = {
  title: string;
  /** Short, self-contained phrases shown one per line. */
  points: string[];
  icon?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type NavLink = {
  label: string;
  href: string;
  isCTA?: boolean;
};

export type FunFact = {
  title: string;
  text: string;
  icon: 'sport' | 'book' | 'game' | 'globe';
};
