import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '@/lib/mdx';
import { projects } from '@/lib/content';
import { ProjectDetailClient } from './ProjectDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const mdxSlugs = getProjectSlugs();
  const contentSlugs = projects.map((p) => p.slug);
  const allSlugs = [...new Set([...mdxSlugs, ...contentSlugs])];
  
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Try MDX first
  const mdxProject = getProjectBySlug(slug);
  if (mdxProject) {
    return {
      title: mdxProject.meta.title,
      description: mdxProject.meta.summary,
    };
  }
  
  // Fall back to content.ts
  const project = projects.find((p) => p.slug === slug);
  if (project) {
    return {
      title: project.title,
      description: project.summary,
    };
  }
  
  return {
    title: 'Project Not Found',
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Try MDX first
  const mdxProject = getProjectBySlug(slug);
  if (mdxProject) {
    return <ProjectDetailClient project={mdxProject.meta} content={mdxProject.content} />;
  }
  
  // Fall back to content.ts
  const project = projects.find((p) => p.slug === slug);
  if (project) {
    return <ProjectDetailClient project={project} content={null} />;
  }
  
  notFound();
}
