import type { Metadata } from 'next';
import Image from 'next/image';
import ReflectiveCard from '@/components/reactbits/ReflectiveCard';
import SpecularSurface from '@/components/reactbits/SpecularSurface';
import { Section, Container, SectionHeading, ExperienceTimeline, FunFacts } from '@/components/ui';
import {
  aboutContent,
  siteConfig,
  experiences,
  education,
  skillGroups,
  certifications,
  languages,
  funFacts,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Shubham Shirsekar, Forward Deployed Engineer. AI agents in production, integrations over OAuth, MCP and APIs, and three years of CRM and integration delivery for financial institutions.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/about-bg-tv.jpg"
          alt=""
          fill
          className="scale-110 object-cover object-[center_55%] opacity-40 blur-md"
          priority
        />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <Section className="pt-8">
          <Container>
            <div className="flex max-w-5xl flex-col items-center gap-8 md:flex-row">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-glass-border md:h-64 md:w-64">
                  <Image
                    src="/pfp_2.jpg"
                    alt="Portrait of Shubham Shirsekar"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-right">
                <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">About Me</h1>
                <p className="mb-4 text-xl text-gray-300">{siteConfig.role}</p>
                <p className="text-accent-cyan">{siteConfig.availability}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Summary + Quick Facts */}
        <Section className="pt-8">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <SectionHeading title="Summary" className="mb-6 text-left" />
                <div className="glass-card space-y-4 p-8">
                  {aboutContent.summary.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading title="Quick Facts" className="mb-6 text-left" />
                <dl className="glass-card space-y-4 p-6">
                  {aboutContent.quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-sm text-gray-400">{fact.label}</dt>
                      <dd className="text-white">{fact.value}</dd>
                      {fact.detail && <dd className="text-sm text-gray-400">{fact.detail}</dd>}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experience Timeline */}
        <Section id="experience">
          <Container>
            <SectionHeading
              title="Experience"
              subtitle="From CRM and integration delivery for financial institutions to AI agents in production."
            />
            <ExperienceTimeline experiences={experiences} />
          </Container>
        </Section>

        {/* Education + Certifications */}
        <Section id="education">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Column stretches to the Certifications column; the cards split that height */}
              <div className="flex flex-col">
                <h2 className="mb-4 text-2xl font-semibold text-white">Education</h2>
                <div className="flex flex-1 flex-col gap-5">
                  {education.map((edu) => (
                    <div key={edu.degree} className="min-h-[112px] flex-1">
                      <ReflectiveCard
                        width="100%"
                        height="100%"
                        radius={18}
                        theme="dark"
                        tiltStrength={8}
                        tint="#7d8fb8"
                        shine={0.6}
                        glare={0.35}
                      >
                        <div className="flex h-full items-center gap-4">
                          <div className="min-w-0 flex-1">
                            <h3 className="text-lg font-semibold leading-snug text-white">
                              {edu.degree}
                            </h3>
                            <p className="text-sm font-medium text-gray-100">{edu.institution}</p>
                            <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-gray-300">
                              {edu.years}
                            </p>
                          </div>
                          {edu.logo && (
                            <Image
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              unoptimized
                              width={128}
                              height={128}
                              className={`shrink-0 ${edu.logoClassName ?? ''}`}
                            />
                          )}
                        </div>
                      </ReflectiveCard>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="mb-4 text-2xl font-semibold text-white">Certifications</h2>
                <ul className="glass-card grid grid-cols-1 gap-3 p-6">
                  {certifications.map((certification) => {
                    const body = (
                      <>
                        {certification.logo ? (
                          <Image
                            src={certification.logo}
                            alt=""
                            width={28}
                            height={28}
                            className="h-7 w-7 shrink-0 object-contain"
                          />
                        ) : (
                          <span className="h-7 w-7 shrink-0" aria-hidden="true" />
                        )}
                        <span className="flex-1 text-sm text-gray-100">
                          {certification.name}
                          <span className="text-gray-400"> · {certification.issuer}</span>
                        </span>
                        {certification.url && (
                          <svg
                            className="h-4 w-4 shrink-0 text-gray-400 transition-colors group-hover:text-accent-blue"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        )}
                      </>
                    );
                    const rowClass =
                      'flex items-center gap-3 rounded-lg border border-accent-green/20 bg-accent-green/10 px-4 py-3';

                    return (
                      <li key={certification.name}>
                        {certification.url ? (
                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View certificate: ${certification.name} by ${certification.issuer} (opens in a new tab)`}
                            className={`${rowClass} group transition-colors hover:border-accent-blue/40 hover:bg-glass-white-hover`}
                          >
                            {body}
                          </a>
                        ) : (
                          <div className={rowClass}>{body}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Skills & Languages */}
        <Section id="skills">
          <Container>
            <SectionHeading
              title="Skills & Languages"
              subtitle="What I build with, and how I work with clients."
            />
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-4 text-xl font-semibold text-white">{group.title}</h3>
                  <SpecularSurface
                    radius={16}
                    tintOpacity={0.05}
                    blur={8}
                    lineColor="#bfdbfe"
                    baseColor="#3f3f56"
                  >
                    <ul className="flex flex-wrap gap-3 p-6">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-lg border border-accent-blue/40 bg-space-900/70 px-4 py-2 text-sm text-accent-blue-light backdrop-blur-sm"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </SpecularSurface>
                </div>
              ))}

              <div className="md:col-span-2">
                <h3 className="mb-4 text-xl font-semibold text-white">Languages</h3>
                {/* One pill per language */}
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <SpecularSurface
                        radius={16}
                        tintOpacity={0.05}
                        blur={8}
                        lineColor="#bfdbfe"
                        baseColor="#3f3f56"
                      >
                        <div className="flex items-center justify-between gap-4 px-6 py-4">
                          <span className="font-medium text-white">{lang.name}</span>
                          <span className="text-right text-sm">
                            <span className="font-medium text-accent-cyan">{lang.level}</span>
                            <span className="text-gray-400"> · {lang.proficiency}</span>
                          </span>
                        </div>
                      </SpecularSurface>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        {/* Fun facts */}
        <Section id="beyond-work">
          <Container>
            <SectionHeading
              title="Beyond Work"
              subtitle="A few things that keep me curious off the clock."
            />
            <FunFacts facts={funFacts} />
          </Container>
        </Section>
      </div>
    </div>
  );
}
