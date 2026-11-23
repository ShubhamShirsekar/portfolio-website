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
};

export type Language = {
  name: string;
  level: string;
};

export type Education = {
  degree: string;
  institution: string;
  years: string;
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
