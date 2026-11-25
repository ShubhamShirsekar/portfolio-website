import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, Container, SectionHeading, ProjectCard } from '@/components/ui';
import { featuredProjects, secondaryProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Production AI agents, integrations and applied AI projects by Shubham Shirsekar, Forward Deployed Engineer.',
};

/** Step label with a rail, like a booking-flow step header: "01 — Featured ———" */
function StepLabel({ index, label, count }: { index: string; label: string; count: number }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="hud-label text-hud">{index}</span>
      <span className="hud-label text-gray-200">{label}</span>
      <span className="h-px flex-1 bg-glass-border" aria-hidden="true" />
      <span className="hud-label">{String(count).padStart(2, '0')}</span>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Image src="/moon.webp" alt="" fill sizes="100vw" className="object-cover object-[50%_20%] opacity-25" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900/60 via-space-900/85 to-space-900" />
      </div>

      <div className="relative z-10">
        <Section className="pb-8 pt-12">
          <Container>
            <SectionHeading
              as="h1"
              index="//"
              title="Projects"
              subtitle="AI agents shipped to production for clients, plus the applied AI and machine learning work that led there."
            />
          </Container>
        </Section>

        <Section className="pt-0">
          <Container className="space-y-16">
            <div>
              <StepLabel index="01" label="Featured" count={featuredProjects.length} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={index} />
                ))}
              </div>
            </div>

            <div>
              <StepLabel index="02" label="More projects" count={secondaryProjects.length} />
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                {secondaryProjects.map((project, index) => (
                  <ProjectCard key={project.slug} project={project} index={featuredProjects.length + index} />
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
