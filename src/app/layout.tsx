import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const silkscreen = Silkscreen({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkscreen',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shubham-shirsekar.vercel.app'),
  title: {
    default: 'Shubham Shirsekar | MSc Data Analytics',
    template: '%s | Shubham Shirsekar',
  },
  description: 'Started my career building systems that power financial institutions. That foundation taught me where data ends and decisions begin. Now, pairing engineering instincts with an MSc in Data Analytics and a critical understanding of AI, to create impactfulsolutions.',
  keywords: [
    'Data Analyst Portfolio',
    'Business Analytics',
    'Machine Learning Projects',
    'Data Analytics Internship',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
    'Data Visualization',
    'Data-Driven Decision Making',
    'Shubham Shirsekar',
    'Excel',
    'Business Intelligence',
    'Data Storytelling',
    'Business Analyst'
  ],
  authors: [{ name: 'Shubham Shirsekar' }],
  creator: 'Shubham Shirsekar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubham-shirsekar.vercel.app',
    siteName: 'Shubham Shirsekar Portfolio',
    title: 'Shubham Shirsekar | MSc Data Analytics',
    description: 'Started my career building systems that power financial institutions. That foundation taught me where data ends and decisions begin. Now, pairing engineering instincts with an MSc in Data Analytics and a critical understanding of AI, to create impactful solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shubham Shirsekar - MSc Data Analytics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Shirsekar | MSc Data Analytics',
    description: 'Started my career building systems that power financial institutions. That foundation taught me where data ends and decisions begin. Now, pairing engineering instincts with an MSc in Data Analytics and a critical understanding of AI, to create impactful solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${silkscreen.variable} font-sans`}>
        <Navbar />
        <main className="relative z-10 min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
