'use client';

import { motion } from 'framer-motion';
import { Button, Section, Container, SectionHeading, ProjectCard, MetricCard, ValueCard } from '@/components/ui';
import { heroContent, valuePropositions, impactMetrics, featuredProjects } from '@/lib/content';

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <Container className="text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-silkscreen text-hero-mobile md:text-hero text-white mb-3"
          >
            Shubham Shirsekar
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-accent-cyan text-sm md:text-base font-medium tracking-wider uppercase mb-6"
          >
            Available for internship • May 2026
          </motion.p>

          <h1 className="text-hero-mobile md:text-hero font-bold text-white mb-6">
            <span className="text-gradient">{heroContent.headline}</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-4"
          >
            {heroContent.subheadline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 mb-10 max-w-xl mx-auto"
          >
            {heroContent.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
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
          transition={{ delay: 1, duration: 0.6 }}
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
          title="What I Bring to the Table"
          subtitle="Combining technical expertise with business understanding to deliver meaningful outcomes."
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
          <h3 className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8">
            Impact by the Numbers
          </h3>
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
          subtitle="A selection of data analytics and machine learning projects demonstrating real-world impact."
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
              Let&apos;s Work Together
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              I&apos;m actively seeking an end-of-studies internship starting May 2026.
              If you&apos;re looking for a data analyst who can deliver business impact, let&apos;s connect.
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
      {/* GIF Background - Full Page */}
      <div className="fixed inset-0 z-0">
        <img
          src="/home-bg.gif"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>
      
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
