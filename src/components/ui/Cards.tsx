'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from './Badge';
import { cn } from '@/lib/utils';
import type { Project, Metric, ValueProposition, Experience } from '@/types';

// ============================================
// PROJECT CARD
// ============================================

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.slug}`}>
        <article
          className={cn(
            'glass-card p-6 h-full flex flex-col',
            'hover:shadow-glow-blue/20 hover:-translate-y-1 transition-all duration-300'
          )}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="blue">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {project.summary}
          </p>

          <div className="mt-auto flex flex-wrap gap-2 mb-4">
            {project.tools.slice(0, 3).map((tool) => (
              <span key={tool} className="text-xs text-gray-500">
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-xs text-gray-500">
                +{project.tools.length - 3} more
              </span>
            )}
          </div>

          <div className="flex items-center text-accent-blue text-sm font-medium group">
            More details
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

// ============================================
// METRIC CARD
// ============================================

interface MetricCardProps {
  metric: Metric;
  index?: number;
}

export function MetricCard({ metric, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {metric.value}
      </div>
      <div className="text-gray-400 text-sm">
        {metric.label}
      </div>
    </motion.div>
  );
}

// ============================================
// VALUE PROPOSITION CARD
// ============================================

interface ValueCardProps {
  value: ValueProposition;
  index?: number;
}

function ValueIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case 'agent':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2m-4 3h8a3 3 0 013 3v5a3 3 0 01-3 3H8a3 3 0 01-3-3v-5a3 3 0 013-3zm1.5 5h.01m4.99 0h.01M9.5 16.5h5M3 13v2m18-2v2" />
        </svg>
      );
    case 'plug':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    case 'people':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    case 'chart':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 'code':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function ValueCard({ value, index = 0 }: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="glass-card p-6 text-center hover:shadow-glow-violet/20 transition-all duration-300"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-accent-violet/10 text-accent-violet mb-4">
        <ValueIcon icon={value.icon} />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {value.title}
      </h3>
      <ul className="space-y-1.5">
        {value.points.map((point) => (
          <li key={point} className="text-gray-400 text-sm">
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ============================================
// EXPERIENCE CARD
// ============================================

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
  /** Render the card's own timeline dot (off when a parent timeline draws dots). */
  showDot?: boolean;
}

export function ExperienceCard({ experience, index = 0, showDot = true }: ExperienceCardProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 12, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card p-6 relative"
    >
      {/* Timeline dot */}
      {showDot && (
        <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-accent-blue -translate-x-1/2 hidden md:block" />
      )}
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {experience.role}
          </h3>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-accent-blue hover:text-accent-blue-light transition-colors"
              aria-label={`${experience.company} website (opens in a new tab)`}
            >
              {experience.company}
              <svg
                className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          ) : (
            <p className="text-accent-blue">{experience.company}</p>
          )}
        </div>
        <div className="text-sm text-gray-400 md:text-right">
          <p>{experience.duration}</p>
          {experience.location && <p>{experience.location}</p>}
        </div>
      </div>
      
      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
            <span className="mt-[calc(0.8125em-3px)] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-cyan" aria-hidden="true" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

// ============================================
// SKILL CARD
// ============================================

interface SkillCardProps {
  skill: string;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card px-4 py-2 text-center hover:border-accent-blue/30 transition-colors"
    >
      <span className="text-gray-200 text-sm">{skill}</span>
    </motion.div>
  );
}
