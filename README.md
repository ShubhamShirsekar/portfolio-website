# Shubham Shirsekar Portfolio

A modern, recruiter-friendly portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a space/cosmic dark theme with glassmorphism effects.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Dark Space Theme**: Glassmorphism UI with subtle animations
- **MDX Blog/Projects**: Write project case studies in Markdown
- **SEO Optimized**: Metadata, sitemap, robots.txt
- **Mobile-First**: Fully responsive design
- **Fast Performance**: Optimized for Lighthouse 90+ scores

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── about/
│   ├── contact/
│   ├── education/
│   ├── experience/
│   ├── projects/
│   │   └── [slug]/     # Dynamic project pages
│   └── skills/
├── components/
│   ├── effects/        # Visual effects (Starfield)
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Reusable UI components
├── content/
│   └── projects/       # MDX project case studies
├── lib/
│   ├── analytics.ts    # Event tracking
│   ├── content.ts      # Site content data
│   ├── mdx.ts          # MDX utilities
│   └── utils.ts        # Helper functions
└── types/              # TypeScript definitions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Adding Projects

Create a new MDX file in `src/content/projects/`:

```mdx
---
title: "Project Title"
slug: "project-slug"
summary: "Brief description"
tags: ["Tag1", "Tag2"]
tools: ["Python", "React"]
github: "https://github.com/..."
date: "2024-01"
featured: true
---

## Overview
Your project content here...
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to modify the color scheme:
- `space-*`: Background colors
- `accent-*`: Accent colors (blue, violet, cyan)
- `glass-*`: Glassmorphism effects

### Content
Update `src/lib/content.ts` to change:
- Personal information
- Experience entries
- Skills
- Education

## 📊 Analytics

The site is configured for cookie-less analytics (Plausible/PostHog).
Edit `src/lib/analytics.ts` to add your tracking code.

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

## 📄 License

MIT License - Feel free to use this as a template for your own portfolio.

## 👤 Contact

- **Email**: shubhamshirsekar7@gmail.com
- **LinkedIn**: [/in/shubhamshirsekar21](https://linkedin.com/in/shubhamshirsekar21)
- **GitHub**: [@ShubhamShirsekar](https://github.com/ShubhamShirsekar)
