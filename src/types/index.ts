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
  /** Partner/brand logos shown subtly in the image corner (recoloured to the site palette). */
  logos?: BrandLogo[];
  featured: boolean;
  date: string;
};

/** Single-colour logo file (SVG or transparent PNG); its shape is used as a mask and filled with the site gradient. */
export type BrandLogo = {
  name: string;
  src: string;
  /** Width/height ratio of the logo artwork */
  aspect: number;
  /** Optical size tweak relative to the standard logo height (default 1) */
  scale?: number;
};

export type Experience = {
  role: string;
  company: string;
  /** Company website */
  companyUrl?: string;
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
  /** CEFR level, e.g. C2 */
  level: string;
  /** Plain-language proficiency, e.g. Bilingual/Native */
  proficiency: string;
};

export type Education = {
  degree: string;
  institution: string;
  years: string;
  /** Institution logo shown on the right of the card. */
  logo?: string;
  /** Extra classes to make the logo read on the dark card (e.g. turning a black logo white). */
  logoClassName?: string;
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
