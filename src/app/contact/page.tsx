'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Section, Container, SectionHeading, Button } from '@/components/ui';
import { siteConfig, contactContent, socialLinks } from '@/lib/content';

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'mail':
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/meelqqqg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or reach out via email.');
      }
    } catch {
      alert('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const channelLabel: Record<string, string> = { github: 'View profile', linkedin: 'Connect', mail: 'Write' };

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Image src="/moon.webp" alt="" fill sizes="100vw" className="object-cover object-[50%_15%] opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-space-900/40 via-space-900/85 to-space-900" />
      </div>

      <div className="relative z-10">
        <Section className="pt-12">
          <Container>
            <SectionHeading as="h1" index="//" title={contactContent.headline} subtitle={contactContent.description} />

            {/* Step rail: 01 Connect ——●—— 02 Message */}
            <div className="mx-auto mb-14 flex max-w-xl items-center gap-4" aria-hidden="true">
              <span className="hud-label text-gray-200">01 Connect</span>
              <span className="relative h-px flex-1 bg-glass-border">
                <span className="hud-node absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
              </span>
              <span className="hud-label">02 Message</span>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
              {/* Left column: the summary panel */}
              <motion.aside
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="hud-label !text-[0.6rem]">Status</p>
                  <p className="mt-2 inline-flex items-center gap-3 text-white">
                    <span className="hud-node !h-1.5 !w-1.5 animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                    {contactContent.availability}
                  </p>
                  <div className="mt-4 h-px bg-glass-border" />
                </div>
                <div>
                  <p className="hud-label !text-[0.6rem]">Work authorization</p>
                  <p className="mt-2 text-sm text-gray-300">{siteConfig.workAuthorization}</p>
                </div>
                <div>
                  <p className="hud-label !text-[0.6rem]">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="mt-2 block break-all text-sm text-gray-300 transition-colors hover:text-hud">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="hud-frame p-5">
                  <h2 className="mb-2 font-medium text-white">Want the full picture?</h2>
                  <p className="mb-4 text-sm text-gray-400">Download my resume for a complete overview.</p>
                  <Button href={siteConfig.resumeUrl} variant="secondary" size="sm" external>
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </Button>
                </div>
              </motion.aside>

              <div className="space-y-8">
                {/* Channel tiles */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="sr-only">Let&apos;s Connect</h2>
                  <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {socialLinks.map((social) => (
                      <li key={social.name}>
                        <a
                          href={social.url}
                          target={social.icon !== 'mail' ? '_blank' : undefined}
                          rel={social.icon !== 'mail' ? 'noopener noreferrer' : undefined}
                          className="hud-frame hud-frame-interactive group flex h-full flex-col items-center px-4 pb-5 pt-8 text-center"
                        >
                          <span className="text-gray-200 transition-colors group-hover:text-hud" aria-hidden="true">
                            <SocialIcon icon={social.icon} />
                          </span>
                          <span className="hud-label mt-4 !text-gray-100">{social.name}</span>
                          <span className="mt-1 w-full truncate text-xs text-gray-500">
                            {social.icon === 'mail' ? siteConfig.email : social.url.replace(/^https:\/\/(www\.)?/, '')}
                          </span>
                          <span className="mt-6 w-full border border-hud/40 bg-hud/10 py-2 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-hud-light transition-colors group-hover:bg-hud/20">
                            {channelLabel[social.icon] ?? 'Open'}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Message form */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="hud-frame p-6 md:p-8"
                >
                  <p className="hud-label mb-6 text-hud">{'02 // Send a message'}</p>
                        {submitted ? (
                          <div className="text-center py-8">
                            <div className="w-16 h-16 rounded-full border border-hud/40 bg-hud/10 text-hud flex items-center justify-center mx-auto mb-4">
                              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <h3 className="hud-title text-lg mb-3">
                              Message Received!
                            </h3>
                            <p className="text-gray-400 mb-4">
                              Thank you for reaching out! Your message has been successfully sent.
                            </p>
                            <p className="text-gray-300 text-sm mb-6">
                              I&apos;ll review your inquiry and get back to you within <span className="text-accent-cyan font-medium">24-48 hours</span>. 
                              If you need an immediate response, feel free to reach out via <a href={`mailto:${siteConfig.email}`} className="text-accent-blue hover:underline">email</a> or <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-accent-blue hover:underline">LinkedIn</a>.
                            </p>
                            <Button onClick={() => setSubmitted(false)} variant="secondary">
                              Send Another Message
                            </Button>
                          </div>
                        ) : (
                          <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                              <label htmlFor="name" className="hud-label mb-2 block">
                                Name
                              </label>
                              <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full border border-glass-border bg-black/40 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-hud focus:outline-none"
                                placeholder="Your name"
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="hud-label mb-2 block">
                                Email
                              </label>
                              <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border border-glass-border bg-black/40 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-hud focus:outline-none"
                                placeholder="your@email.com"
                              />
                            </div>

                            <div>
                              <label htmlFor="subject" className="hud-label mb-2 block">
                                Subject
                              </label>
                              <input
                                type="text"
                                id="subject"
                                required
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                className="w-full border border-glass-border bg-black/40 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-hud focus:outline-none"
                                placeholder="What is this about?"
                              />
                            </div>

                            <div>
                              <label htmlFor="message" className="hud-label mb-2 block">
                                Message
                              </label>
                              <textarea
                                id="message"
                                required
                                rows={5}
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full border border-glass-border bg-black/40 px-4 py-3 text-white placeholder-gray-600 transition-colors focus:border-hud focus:outline-none resize-none"
                                placeholder="Your message..."
                              />
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                  </svg>
                                  Sending...
                                </>
                              ) : (
                                <>
                                  Send Message
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                  </svg>
                                </>
                              )}
                            </Button>
                          </form>
                        )}
                </motion.div>
              </div>
            </div>
          </Container>
        </Section>
      </div>
    </div>
  );
}
