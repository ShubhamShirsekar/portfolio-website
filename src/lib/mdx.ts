import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }
  const files = fs.readdirSync(projectsDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getProjectBySlug(slug: string): { 
  meta: Project; 
  content: string 
} | null {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    meta: {
      title: data.title || '',
      slug: data.slug || slug,
      summary: data.summary || '',
      tags: data.tags || [],
      tools: data.tools || [],
      github: data.github,
      demo: data.demo,
      featured: data.featured || false,
      date: data.date || '',
    },
    content,
  };
}

export function getAllProjects(): { meta: Project; content: string }[] {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter((project): project is { meta: Project; content: string } => project !== null)
    .sort((a, b) => (a.meta.date > b.meta.date ? -1 : 1));
  
  return projects;
}
