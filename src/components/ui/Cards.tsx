'use client';

import { motion } from 'framer-motion';
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

          <p className="text-gray-400 text-sm mb-4 flex-grow line-clamp-3">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
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
            View Case Study
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
      <h3 className="text-xl font-semibold text-white mb-2">
        {value.title}
      </h3>
      <p className="text-gray-400 text-sm">
        {value.description}
      </p>
    </motion.div>
  );
}

// ============================================
// EXPERIENCE CARD
// ============================================

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-8 w-3 h-3 rounded-full bg-accent-blue -translate-x-1/2 hidden md:block" />
      
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {experience.role}
          </h3>
          <p className="text-accent-blue">
            {experience.company}
          </p>
        </div>
        <div className="text-sm text-gray-400">
          <p>{experience.location}</p>
          <p>{experience.duration}</p>
        </div>
      </div>
      
      <ul className="space-y-2">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <span className="text-accent-cyan mt-1">•</span>
            {achievement}
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
