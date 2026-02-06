import type { Metadata } from 'next';
import { Section, Container, SectionHeading, ProjectCard } from '@/components/ui';
import { projects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Data analytics and machine learning projects showcasing real-world problem solving.',
};

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen">
      {/* GIF Background - Full Page */}
      <div className="fixed inset-0 z-0">
        <img
          src="/projects-bg.gif"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>
      
      <div className="relative z-10">
        <Section>
          <Container>
            <SectionHeading
              title="Projects"
              subtitle="A collection of data analytics, machine learning, and software development projects demonstrating analytical thinking and technical execution."
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
