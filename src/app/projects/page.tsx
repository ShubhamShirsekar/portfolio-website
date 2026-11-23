import type { Metadata } from 'next';
import { HorizontalProjectGallery } from '@/components/ui';
import { featuredProjects, secondaryProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Production AI agents, integrations and applied AI projects by Shubham Shirsekar, Forward Deployed Engineer.',
};

const allProjects = [...featuredProjects, ...secondaryProjects];

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
        <HorizontalProjectGallery
          projects={allProjects}
          as="h1"
          title="Projects"
          subtitle="AI agents shipped to production for clients, plus the applied AI and machine learning work that led there. Scroll to browse."
        />
      </div>
    </div>
  );
}
