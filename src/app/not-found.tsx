import Link from 'next/link';
import { Section, Container, Button } from '@/components/ui';

export default function NotFound() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <Container className="text-center">
        <div className="text-8xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">
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
