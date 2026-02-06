'use client';

import { motion } from 'framer-motion';
import { Section, Container, SectionHeading } from '@/components/ui';
import { education } from '@/lib/content';

export default function EducationPage() {
  return (
    <>
      <Section className="pt-8">
        <Container>
          <SectionHeading
            title="Education"
            subtitle="Academic foundation in data analytics and engineering."
          />
          
          <div className="space-y-8 max-w-3xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={`${edu.institution}-${edu.degree}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-cyan" />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-accent-blue">{edu.institution}</p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <div className="text-gray-400 text-sm md:text-right">
                    {edu.years}
                  </div>
                </div>
                
                {edu.details && edu.details.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-glass-border">
                    <p className="text-sm text-gray-400 mb-3">Key Areas:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.details.map((detail, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-glass-white border border-glass-border text-sm text-gray-300"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
