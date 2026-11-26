import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Don't block /_next/: crawlers need its CSS, JS and images to render the pages
      disallow: ['/api/'],
    },
    sitemap: 'https://shubham-shirsekar.vercel.app/sitemap.xml',
  };
}
