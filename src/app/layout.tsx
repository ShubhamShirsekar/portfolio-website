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

const siteTitle = 'Shubham Shirsekar | Forward Deployed Engineer';
const siteDescription =
  'Forward Deployed Engineer shipping production AI agents and integrations over OAuth, MCP and APIs, cutting multi-day workflows to under a few hours. Python and TypeScript. Paris, France.';

export const metadata: Metadata = {
  metadataBase: new URL('https://shubham-shirsekar.vercel.app'),
  title: {
    default: siteTitle,
    template: '%s | Shubham Shirsekar',
  },
  description: siteDescription,
  keywords: [
    'Forward Deployed Engineer',
    'AI Agents',
    'Production AI Agents',
    'MCP',
    'Model Context Protocol',
    'Integrations',
    'OAuth',
    'API Integrations',
    'Python',
    'TypeScript',
    'Pydantic AI',
    'LLM Agents',
    'Shubham Shirsekar',
    'Paris, France',
  ],
  authors: [{ name: 'Shubham Shirsekar' }],
  creator: 'Shubham Shirsekar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shubham-shirsekar.vercel.app',
    siteName: 'Shubham Shirsekar',
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
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
