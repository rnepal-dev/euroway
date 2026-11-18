import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { BookClientView } from '../../components/booking/BookClientView';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { LoadingState } from '../../components/ui/StateFeedback';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.bookPage.title,
    description: t.bookPage.subtitle,
    openGraph: {
      title: `${t.bookPage.title} | Euroway Hotel`,
      description: t.bookPage.subtitle,
    },
  };
}

export default async function BookPage() {
  const { locale, t } = await getServerTranslations();

  return (
    <>
      <PageHero
        eyebrow={t.bookPage.eyebrow}
        title={t.bookPage.title}
        subtitle={t.bookPage.subtitle}
        imageAssetId="reception-counter"
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.bookNow },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <Suspense fallback={<LoadingState message={t.bookPage.loadingText} />}>
            <BookClientView />
          </Suspense>
        </Container>
      </Section>
    </>
  );
}
