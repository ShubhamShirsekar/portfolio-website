import type { Metadata } from 'next';
import { Inter, Silkscreen } from 'next/font/google';
import { Navbar, Footer } from '@/components/layout';
import { Starfield } from '@/components/effects';
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
  metadataBase: new URL('https://shubhamshirsekar.com'),
  title: {
    default: 'Shubham Shirsekar | Data Analyst & Business Analytics',
    template: '%s | Shubham Shirsekar',
  },
  description: 'Data analyst specializing in analytics, automation, and business-driven insights. Seeking end-of-studies internship starting May 2026.',
  keywords: [
    'Data Analyst Portfolio',
    'Business Analytics',
    'Machine Learning Projects',
    'Data Analytics Internship',
    'Python',
    'SQL',
    'Power BI',
    'Tableau',
  ],
  authors: [{ name: 'Shubham Shirsekar' }],
  creator: 'Shubham Shirsekar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubhamshirsekar.com',
    siteName: 'Shubham Shirsekar Portfolio',
    title: 'Shubham Shirsekar | Data Analyst & Business Analytics',
    description: 'Data analyst specializing in analytics, automation, and business-driven insights.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shubham Shirsekar - Data Analyst Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shubham Shirsekar | Data Analyst & Business Analytics',
    description: 'Data analyst specializing in analytics, automation, and business-driven insights.',
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
        <Starfield />
        <Navbar />
        <main className="relative z-10 min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
