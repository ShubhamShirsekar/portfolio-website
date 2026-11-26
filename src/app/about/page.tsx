import type { Metadata } from 'next';
import Image from 'next/image';
import { Button, Section, Container, SectionHeading, ExperienceTimeline, FunFacts } from '@/components/ui';
import { DoubleTapHeart } from '@/components/ui/DoubleTapHeart';
import {
  aboutContent,
  siteConfig,
  experiences,
  education,
  skillGroups,
  certifications,
  languages,
  funFacts,
  thesis,
} from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Shubham Shirsekar, Forward Deployed Engineer. AI agents in production, integrations over OAuth, MCP and APIs, and three years of CRM and integration delivery for financial institutions.',
};

/** Small heading used inside a section: "01 — Education" */
function PanelHeading({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3">
      <span className="hud-label text-hud">{index}</span>
      <span className="hud-label text-gray-200">{children}</span>
      <span className="h-px flex-1 bg-glass-border" aria-hidden="true" />
    </h2>
  );
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background: the horizon image, faint and blurred */}
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Image src="/hero/horizon.webp" alt="" fill sizes="100vw" className="scale-110 object-cover opacity-25 blur-sm" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900/50 via-space-900/85 to-space-900" />
      </div>

      <div className="relative z-10">
        {/* Hero */}
        <Section className="pt-12">
          <Container>
            <div className="flex flex-col items-center gap-10 md:flex-row md:items-end">
              <div className="flex-shrink-0 text-center">
                <div className="hud-frame p-2">
                  <DoubleTapHeart className="h-56 w-56 overflow-hidden md:h-64 md:w-64">
                    <Image
                      src="/pfp_2.jpg"
                      alt="Portrait of Shubham Shirsekar"
                      fill
                      className="pointer-events-none object-cover grayscale-[30%]"
                      draggable={false}
                      priority
                    />
                  </DoubleTapHeart>
                </div>
                <p className="hud-label mt-3 !text-[0.6rem] text-gray-500" aria-hidden="true">
                  Double-tap the photo
                </p>
              </div>

              <div className="flex-1 pb-8 text-center md:text-left">
                <p className="hud-label mb-5 text-hud">{'// Profile'}</p>
                <h1 className="hud-title text-3xl md:text-5xl">About Me</h1>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.35em] text-gray-300 md:tracking-[0.6em]">{siteConfig.role}</p>
                <p className="hud-label mt-6 inline-flex items-center gap-3 text-gray-300">
                  <span className="hud-node !h-1.5 !w-1.5" aria-hidden="true" />
                  {siteConfig.availability}
                </p>
                <p className="hud-label mt-2 !text-[0.6rem] text-gray-500 md:pl-[1.125rem]">{siteConfig.workAuthorization}</p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Summary + Quick Facts */}
        <Section className="pt-0">
          <Container>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PanelHeading index="01">Summary</PanelHeading>
                <div className="hud-frame space-y-4 p-7">
                  {aboutContent.summary.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <PanelHeading index="02">Quick Facts</PanelHeading>
                <dl className="hud-frame divide-y divide-glass-border">
                  {aboutContent.quickFacts.map((fact) => (
                    <div key={fact.label} className="px-6 py-4">
                      <dt className="hud-label !text-[0.6rem]">{fact.label}</dt>
                      <dd className="mt-1.5 text-white">{fact.value}</dd>
                      {fact.detail && <dd className="mt-0.5 text-sm text-gray-400">{fact.detail}</dd>}
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>

        {/* Experience */}
        <Section id="experience">
          <Container>
            <SectionHeading
              index="03"
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
              <div className="flex flex-col">
                <PanelHeading index="04">Education</PanelHeading>
                <div className="flex flex-1 flex-col gap-4">
                  {education.map((edu) => (
                    <div key={edu.degree} className="hud-frame flex min-h-[112px] items-center gap-4 p-6 lg:flex-1">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-snug text-white">{edu.degree}</h3>
                        <p className="text-sm text-gray-200">{edu.institution}</p>
                        <p className="hud-label mt-2 !text-[0.6rem]">{edu.years}</p>
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
                  ))}
                </div>
              </div>

              <div>
                <PanelHeading index="05">Certifications</PanelHeading>
                <ul className="grid grid-cols-1 gap-3">
                  {certifications.map((certification) => {
                    const body = (
                      <>
                        {certification.logo ? (
                          <Image src={certification.logo} alt="" width={28} height={28} className="h-7 w-7 shrink-0 object-contain" />
                        ) : (
                          <span className="h-7 w-7 shrink-0" aria-hidden="true" />
                        )}
                        <span className="flex-1 text-sm text-gray-100">
                          {certification.name}
                          <span className="text-gray-400"> · {certification.issuer}</span>
                        </span>
                        {certification.url && (
                          <svg
                            className="h-4 w-4 shrink-0 text-gray-500 transition-colors group-hover:text-hud"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        )}
                      </>
                    );
                    const rowClass = 'hud-frame flex items-center gap-4 px-5 py-4';

                    return (
                      <li key={certification.name}>
                        {certification.url ? (
                          <a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View certificate: ${certification.name} by ${certification.issuer} (opens in a new tab)`}
                            className={`${rowClass} hud-frame-interactive group`}
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

        {/* Thesis */}
        <Section id="thesis">
          <Container>
            <SectionHeading index="06" title="Master's Thesis" subtitle={thesis.programme} />
            <div className="hud-frame grid grid-cols-1 gap-8 p-7 lg:grid-cols-3 lg:gap-10">
              <div className="lg:col-span-2">
                <p className="hud-label !text-[0.6rem] text-hud">{thesis.status}</p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-white md:text-2xl">{thesis.title}</h3>
                <p className="mt-1 text-sm italic text-gray-400">{thesis.fullTitle}</p>
                <p className="mt-5 leading-relaxed text-gray-300">{thesis.summary}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={`/projects/${thesis.projectSlug}`} variant="secondary" size="md">
                    Read the write-up
                  </Button>
                  <Button href={thesis.github} variant="ghost" size="md" external>
                    Code on GitHub
                  </Button>
                </div>
              </div>
              <dl className="grid grid-cols-1 gap-px self-start border border-glass-border bg-glass-border sm:grid-cols-3 lg:grid-cols-1">
                {thesis.highlights.map((h) => (
                  <div key={h.label} className="bg-space-900/80 px-5 py-4">
                    <dt className="hud-label !text-[0.6rem]">{h.label}</dt>
                    <dd className="mt-1 font-display text-2xl text-hud">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </Section>

        {/* Skills & Languages */}
        <Section id="skills">
          <Container>
            <SectionHeading index="07" title="Skills & Languages" subtitle="What I build with, and how I work with clients." />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.title} className="hud-frame p-6">
                  <h3 className="hud-label mb-5 !text-gray-200">{group.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="border border-hud/25 bg-hud/[0.06] px-3 py-1.5 text-sm text-hud-light">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="md:col-span-2">
                <h3 className="sr-only">Languages</h3>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {languages.map((lang) => (
                    <li key={lang.name} className="hud-frame flex items-center justify-between gap-4 px-6 py-5">
                      <div>
                        <p className="hud-label !text-[0.6rem]">Language</p>
                        <p className="mt-1 font-medium text-white">{lang.name}</p>
                        <p className="text-sm text-gray-400">{lang.proficiency}</p>
                      </div>
                      <span className="font-display text-3xl text-hud">{lang.level}</span>
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
            <SectionHeading index="08" title="Beyond Work" subtitle="A few things that keep me curious off the clock." />
            <FunFacts facts={funFacts} />
          </Container>
        </Section>
      </div>
    </div>
  );
}
