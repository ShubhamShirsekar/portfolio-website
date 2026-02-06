import type { Metadata } from 'next';
import { Section, Container, SectionHeading, ExperienceCard } from '@/components/ui';
import { experiences } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Professional experience in data analytics, CRM implementations, and API integrations.',
};

export default function ExperiencePage() {
  return (
    <>
      <Section className="pt-8">
        <Container>
          <SectionHeading
            title="Professional Experience"
            subtitle="A track record of delivering impact through analytics, automation, and technical consulting."
          />
          
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line (hidden on mobile) */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-glass-border" />
            
            <div className="space-y-6 md:pl-8">
              {experiences.map((experience, index) => (
                <ExperienceCard 
                  key={`${experience.company}-${experience.role}`} 
                  experience={experience} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="glass-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to know more?
            </h2>
            <p className="text-gray-400 mb-6">
              Download my resume for a complete overview of my experience and qualifications.
            </p>
            <a
              href="https://drive.google.com/file/d/1PplsPHKQ9axNxrZb-mEikH38UY8PrpOe/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-blue text-white font-medium hover:bg-accent-blue/90 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
