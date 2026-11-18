import type { Metadata } from 'next';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { getServerTranslations } from '../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.notFound.title,
    description: t.notFound.subtitle,
  };
}

export default async function NotFoundPage() {
  const { t } = await getServerTranslations();

  return (
    <Section tone="background" className="pt-32 pb-20">
      <Container size="narrow">
        <Card padding="lg" className="text-center space-y-5">
          <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-primary">
            {t.notFound.title}
          </h1>
          <p className="text-base text-text-secondary max-w-md mx-auto">
            {t.notFound.subtitle}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button to="/" variant="primary">
              {t.notFound.backHome}
            </Button>
            <Button to="/rooms" variant="outline">
              {t.common.exploreRooms}
            </Button>
          </div>
        </Card>
      </Container>
    </Section>
  );
}
