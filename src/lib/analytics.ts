// Analytics event types and tracking functions
// Designed for Plausible or PostHog integration (cookie-less, GDPR compliant)

export type AnalyticsEvent = 
  | 'CTA_Click'
  | 'Project_View'
  | 'Resume_Download'
  | 'Contact_Submit'
  | 'GitHub_Click'
  | 'LinkedIn_Click';

interface EventProperties {
  page?: string;
  project?: string;
  cta?: string;
}

// Track custom events
export function trackEvent(event: AnalyticsEvent, properties?: EventProperties): void {
  // Plausible Analytics
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(event, { props: properties });
  }
  
  // PostHog Analytics (alternative)
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(event, properties);
  }
  
  // Development logging
  if (process.env.NODE_ENV === 'development') {
    console.log('[Analytics]', event, properties);
  }
}

// Track page views (usually automatic with Plausible/PostHog)
export function trackPageView(url: string): void {
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible('pageview', { props: { url } });
  }
}

// Pre-defined tracking functions for common events
export const analytics = {
  ctaClick: (cta: string, page: string) => 
    trackEvent('CTA_Click', { cta, page }),
  
  projectView: (project: string) => 
    trackEvent('Project_View', { project }),
  
  resumeDownload: () => 
    trackEvent('Resume_Download'),
  
  contactSubmit: () => 
    trackEvent('Contact_Submit'),
  
  githubClick: (project?: string) => 
    trackEvent('GitHub_Click', { project }),
  
  linkedinClick: () => 
    trackEvent('LinkedIn_Click'),
};
