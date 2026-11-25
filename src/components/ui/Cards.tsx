'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from './Badge';
import type { BrandLogo, Project, Metric, ValueProposition, Experience } from '@/types';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-05" -> "May 2026" */
function formatMonth(date: string) {
  const [year, month] = date.split('-').map(Number);
  return month ? `${MONTHS[month - 1]} ${year}` : String(year);
}

// ============================================
// BRAND MARK
// ============================================

const LOGO_HEIGHT = 16;

/** Logo recoloured to the HUD tint via CSS mask (uses the logo file's alpha as its shape). */
export function BrandMark({ logo }: { logo: BrandLogo }) {
  const mask = `url(${logo.src}) center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={logo.name}
      className="block bg-gray-200"
      style={{
        width: LOGO_HEIGHT * (logo.scale ?? 1) * logo.aspect,
        height: LOGO_HEIGHT * (logo.scale ?? 1),
        mask,
        WebkitMask: mask,
      }}
    />
  );
}

// ============================================
// PROJECT TILE
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
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="h-full"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="hud-frame hud-frame-interactive group flex h-full flex-col"
        aria-label={`${project.title}: more details`}
      >
        {/* Header strip: index · date */}
        <div className="flex items-center justify-between border-b border-glass-border px-5 py-3">
          <span className="hud-label text-hud">{String(index + 1).padStart(2, '0')}</span>
          <span className="hud-label">{formatMonth(project.date)}</span>
        </div>

        {project.image && (
          <div className="relative aspect-[16/9] overflow-hidden border-b border-glass-border">
            <Image
              src={project.image}
              alt={project.imageAlt ?? ''}
              fill
              unoptimized
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            />
            <div className="scanlines absolute inset-0 opacity-30" aria-hidden="true" />
            {project.logos && project.logos.length > 0 && (
              <div className="absolute bottom-3 right-3 flex items-center gap-3 border border-white/10 bg-black/60 px-3 py-2 backdrop-blur-sm">
                {project.logos.map((logo) => (
                  <BrandMark key={logo.name} logo={logo} />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-4 flex flex-wrap gap-2">
            {project.featured && <Badge variant="violet">Featured</Badge>}
            {project.tags.map((tag) => (
              <Badge key={tag} variant="blue">
                {tag}
              </Badge>
            ))}
          </div>

          <h3 className="mb-3 text-lg font-semibold leading-snug text-white">{project.title}</h3>

          <p className="mb-5 line-clamp-4 text-sm leading-relaxed text-gray-400">{project.summary}</p>

          <ul className="mt-auto mb-5 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.68rem] text-gray-500" aria-label="Tools">
            {project.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>

          <span className="hud-label inline-flex items-center gap-2 !text-hud transition-colors group-hover:!text-hud-light">
            More details
            <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

// ============================================
// METRIC TILE  (big number, small caps above, detail below)
// ============================================

interface MetricCardProps {
  metric: Metric;
  index?: number;
}

export function MetricCard({ metric, index = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="hud-frame hud-frame-interactive flex h-full flex-col items-center px-4 py-7 text-center"
    >
      <span className="hud-label mb-4">{String(index + 1).padStart(2, '0')}</span>
      <span className="mb-4 whitespace-nowrap font-display text-2xl text-white md:text-[1.7rem]">{metric.value}</span>
      <span className="max-w-[16rem] font-mono text-[0.7rem] leading-relaxed text-gray-400">{metric.label}</span>
    </motion.div>
  );
}

// ============================================
// VALUE PROPOSITION CARD
// ============================================

export function ValueCard({ value, index = 0 }: { value: ValueProposition; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="hud-frame p-6"
    >
      <span className="hud-label text-hud">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="mb-3 mt-3 text-lg font-semibold text-white">{value.title}</h3>
      <ul className="space-y-1.5">
        {value.points.map((point) => (
          <li key={point} className="text-sm text-gray-400">
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
  /** Kept for API compatibility; the timeline draws its own nodes. */
  showDot?: boolean;
}

export function ExperienceCard({ experience, index = 0 }: ExperienceCardProps) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 12, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="hud-frame relative p-6 md:p-7"
    >
      <div className="mb-5 flex flex-col gap-2 border-b border-glass-border pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white md:text-xl">{experience.role}</h3>
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-1 inline-flex items-center gap-1 font-mono text-sm uppercase tracking-[0.15em] text-hud transition-colors hover:text-hud-light"
              aria-label={`${experience.company} website (opens in a new tab)`}
            >
              {experience.company}
              <svg
                className="h-3.5 w-3.5 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M9 7h8v8" />
              </svg>
            </a>
          ) : (
            <p className="mt-1 font-mono text-sm uppercase tracking-[0.15em] text-hud">{experience.company}</p>
          )}
        </div>
        <div className="hud-label md:text-right">
          <p>{experience.duration}</p>
          {experience.location && <p className="mt-1">{experience.location}</p>}
        </div>
      </div>

      <ul className="space-y-2.5">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
            <span className="mt-[0.6em] h-px w-3 shrink-0 bg-hud" aria-hidden="true" />
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

export function SkillCard({ skill, index = 0 }: { skill: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="hud-frame px-4 py-2 text-center"
    >
      <span className="text-sm text-gray-200">{skill}</span>
    </motion.div>
  );
}
