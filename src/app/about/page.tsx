import type { Metadata } from 'next';
import Image from 'next/image';
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
        <Image src="/about-bg-tv.jpg" alt="" fill className="object-cover object-[center_55%] opacity-40 blur-md scale-110" priority />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <Section className="pt-8">
          <Container>
            <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-glass-border">
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
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h1>
                <p className="text-xl text-gray-300 mb-4">{siteConfig.role}</p>
                <p className="text-accent-cyan">{siteConfig.availability}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Summary + Quick Facts */}
        <Section className="pt-8">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <SectionHeading title="Summary" className="text-left mb-6" />
                <div className="glass-card p-8 space-y-4">
                  {aboutContent.summary.map((paragraph) => (
                    <p key={paragraph} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading title="Quick Facts" className="text-left mb-6" />
                <dl className="glass-card p-6 space-y-4">
                  {aboutContent.quickFacts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-sm text-gray-400">{fact.label}</dt>
                      <dd className="text-white">{fact.value}</dd>
                      {fact.detail && <dd className="text-gray-400 text-sm">{fact.detail}</dd>}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.degree} className="glass-card p-6 relative overflow-hidden">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan"
                        aria-hidden="true"
                      />
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <p className="text-accent-blue">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mt-1">{edu.years}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Certifications</h2>
                <ul className="glass-card p-6 grid grid-cols-1 gap-3">
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
                        <span className="text-sm text-gray-100 flex-1">
                          {certification.name}
                          <span className="text-gray-400"> · {certification.issuer}</span>
                        </span>
                        {certification.url && (
                          <svg
                            className="w-4 h-4 shrink-0 text-gray-400 group-hover:text-accent-blue transition-colors"
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
                            className={`${rowClass} group hover:border-accent-blue/40 hover:bg-glass-white-hover transition-colors`}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
                  <ul className="glass-card p-6 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="px-4 py-2 rounded-lg bg-space-900/70 backdrop-blur-sm border border-accent-blue/40 text-accent-blue-light text-sm"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
                <dl className="glass-card p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center justify-between gap-4">
                      <dt className="text-gray-300">{lang.name}</dt>
                      <dd className="text-accent-cyan text-sm">{lang.level}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>

        {/* Fun facts */}
        <Section id="beyond-work">
          <Container>
            <SectionHeading title="Beyond Work" subtitle="A few things that keep me curious off the clock." />
            <FunFacts facts={funFacts} />
          </Container>
        </Section>
      </div>
    </div>
  );
}
