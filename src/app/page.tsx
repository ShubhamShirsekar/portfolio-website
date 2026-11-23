'use client';

import { motion } from 'framer-motion';
import { Button, Section, Container, SectionHeading, ProjectCard, MetricCard, ValueCard } from '@/components/ui';
import { heroContent, valuePropositions, impactMetrics, featuredProjects, siteConfig } from '@/lib/content';

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Container className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="font-silkscreen text-hero-mobile md:text-hero text-white mb-3"
          >
            Shubham Shirsekar
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-sm font-medium tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {siteConfig.availability}
            </span>
          </motion.div>

          <h1 className="text-hero-mobile md:text-hero font-bold text-white mb-6">
            <span className="text-gradient">{heroContent.headline}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            {heroContent.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href={heroContent.primaryCTA.href} size="lg">
              {heroContent.primaryCTA.label}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <Button href={heroContent.secondaryCTA.href} variant="secondary" size="lg" external>
              {heroContent.secondaryCTA.label}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

// Value Propositions Section
function ValueSection() {
  return (
    <Section id="value">
      <Container>
        <SectionHeading
          title="What I Do"
          subtitle="Taking AI agents from client discovery to production, and wiring them into the tools teams already use."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valuePropositions.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

// Impact Metrics Section
function MetricsSection() {
  return (
    <Section className="bg-space-800/30">
      <Container>
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Track Record
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <MetricCard key={metric.label} metric={metric} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

// Featured Projects Section
function ProjectsSection() {
  return (
    <Section id="featured-projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          subtitle="Production agents, applied AI and the hackathons along the way."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button href="/projects" variant="secondary" size="lg">
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// CTA Section
function CTASection() {
  return (
    <Section>
      <Container>
        <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
          {/* Glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-glow-blue opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-glow-violet opacity-20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Caught your attention? Let&apos;s chat.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              I&apos;m looking for forward deployed engineering roles where I sit with clients, understand how their work really happens, and ship AI agents and integrations that run in production.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* Replaced heavy GIF background with subtle CSS gradient orbs */}
      <div className="fixed inset-0 z-0 bg-orbs bg-space-900/80" />
      <div className="absolute inset-0 bg-space-900/40" />

      <div className="relative z-10">
        <HeroSection />
        <ValueSection />
        <MetricsSection />
        <ProjectsSection />
        <CTASection />
      </div>
    </div>
  );
}