import type { Metadata } from 'next';
import { Section, Container, SectionHeading, ProjectCard } from '@/components/ui';
import { featuredProjects, secondaryProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Production AI agents, integrations and applied AI projects by Shubham Shirsekar, Forward Deployed Engineer.',
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background - Full Page */}
      <div className="fixed inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/projects-bg.webp" alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>

      <div className="relative z-10">
        <Section>
          <Container>
            <SectionHeading
              as="h1"
              title="Projects"
              subtitle="AI agents shipped to production for clients, plus the applied AI and machine learning work that led there."
            />

            <h2 className="text-2xl font-semibold text-white mb-6">Featured</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-white mt-16 mb-6">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {secondaryProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
