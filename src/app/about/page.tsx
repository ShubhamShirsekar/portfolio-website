import type { Metadata } from 'next';
import Image from 'next/image';
import { Section, Container, SectionHeading } from '@/components/ui';
import { aboutContent, siteConfig, technicalSkills, languages } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Shubham Shirsekar - Data Analyst with expertise in analytics, automation, and API integrations.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background GIF */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/about-bg.gif"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-space-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero */}
        <Section className="pt-8">
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl">
            {/* Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-glass-border">
                <Image
                  src="/pfp.png"
                  alt="Shubham Shirsekar"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {siteConfig.role}
              </p>
              <p className="text-accent-cyan">
                {siteConfig.availability}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Professional Summary */}
      <Section className="pt-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <SectionHeading 
                title="Professional Summary" 
                className="text-left mb-6"
              />
              <div className="glass-card p-8">
                {aboutContent.professionalSummary.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading 
                title="Quick Facts" 
                className="text-left mb-6"
              />
              <div className="glass-card p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Bordeaux, France</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Education</p>
                  <p className="text-white">MSc Data Analytics</p>
                  <p className="text-gray-400 text-sm">KEDGE Business School</p>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Focus Areas</p>
                  <p className="text-white">Analytics, Automation, ML</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Skills & Languages */}
      <Section>
        <Container>
          <SectionHeading 
            title="Skills & Languages" 
            subtitle="Technical expertise and communication abilities"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
              <div className="glass-card p-6">
                <div className="flex flex-wrap gap-3">
                  {technicalSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-sm"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
              <div className="glass-card p-6 space-y-4">
                {languages.map((lang, i) => (
                  <div key={i} className="grid grid-cols-2 items-center gap-4">
                    <span className="text-gray-300 text-left truncate">{lang.name.split(' — ')[0]}</span>
                    <span className="text-accent-cyan text-sm text-right truncate">{lang.name.split(' — ')[1]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Career Motivation */}
      <Section>
        <Container>
          <SectionHeading 
            title="What Drives Me" 
            subtitle="Core motivations that guide my career path"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aboutContent.careerMotivation.map((motivation, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-accent-violet/10 text-accent-violet flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{i + 1}</span>
                </div>
                <p className="text-gray-300">{motivation}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Personal Interests */}
      <Section className="bg-space-800/30">
        <Container>
          <SectionHeading 
            title="Beyond Work" 
            subtitle="Interests and hobbies that keep me balanced"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {aboutContent.personalInterests.map((interest, i) => (
              <div 
                key={i} 
                className="glass-card px-6 py-3 hover:border-accent-cyan/30 transition-colors"
              >
                <span className="text-gray-200">{interest}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      </div>
    </div>
  );
}
