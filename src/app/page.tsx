import Image from 'next/image';
import { Button, Section, Container, SectionHeading, ProjectCard, MetricCard } from '@/components/ui';
import { HeroSlider } from '@/components/home/HeroSlider';
import { impactMetrics, featuredProjects } from '@/lib/content';

function Arrow() {
  return (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

// Track record: big-number tiles
function MetricsSection() {
  return (
    <Section>
      <Container>
        <SectionHeading index="01" title="Track Record" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {impactMetrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="featured-projects" className="pt-0 md:pt-4">
      <Container>
        <SectionHeading
          index="02"
          title="Featured Projects"
          subtitle="Production agents, applied AI and the hackathons along the way."
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/projects" variant="secondary" size="lg">
            View All Projects
            <Arrow />
          </Button>
        </div>
      </Container>
    </Section>
  );
}

// Closing call to action over the moon
function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Image src="/moon.webp" alt="" fill sizes="100vw" className="object-cover object-[50%_30%] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900 via-space-900/30 to-space-900" />
        <div className="scanlines absolute inset-0 opacity-30" />
      </div>
      <Container className="relative py-32 text-center md:py-44">
        <p className="hud-label mb-6 text-hud">{'03 // Next step'}</p>
        <h2 className="hud-title mx-auto max-w-3xl text-2xl leading-snug md:text-4xl">
          Caught your attention? Let&apos;s chat.
        </h2>
        <p className="mx-auto mb-10 mt-6 max-w-xl font-mono text-sm leading-relaxed text-gray-300">
          I&apos;m looking for forward deployed engineering roles where I sit with clients, understand how their work really happens, and ship AI agents and integrations that run in production.
        </p>
        <Button href="/contact" size="lg">
          Get in Touch
          <Arrow />
        </Button>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <MetricsSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}
