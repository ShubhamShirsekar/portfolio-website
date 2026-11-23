import { MetadataRoute } from 'next';
import { projects } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shubham-shirsekar.vercel.app';

  // Static pages
  const staticPages = ['', '/projects', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Project pages (featured projects rank higher)
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.7 : 0.5,
  }));

  return [...staticPages, ...projectPages];
}
