import Link from 'next/link';
import { Section, Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container className="text-center">
        <div className="mb-6 font-display text-7xl tracking-[0.15em] text-gradient md:text-8xl">404</div>
        <h1 className="hud-title mb-4 text-xl md:text-2xl">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/">
            Go Home
          </Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
        </div>
      </Container>
    </Section>
  );
}
