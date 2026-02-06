// Core data types for the portfolio website

export type Project = {
  title: string;
  slug: string;
  summary: string;
  tags: string[];
  tools: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  date: string;
};

export type Experience = {
  role: string;
  company: string;
  location: string;
  duration: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  category: 'technical' | 'soft' | 'language';
};

export type Education = {
  degree: string;
  institution: string;
  location: string;
  years: string;
  details?: string[];
};

export type Metric = {
  label: string;
  value: string;
};

export type ValueProposition = {
  title: string;
  description: string;
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
