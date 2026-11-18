import type { Metadata } from 'next';
import { BookingCTA } from '../../components/common/BookingCTA';
import { Accordion } from '../../components/ui/Accordion';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { FAQ_ITEMS } from '../../data/faq';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.faqPage.title,
    description: t.faqPage.subtitle,
    openGraph: {
      title: `${t.faqPage.title} | Euroway Hotel`,
      description: t.faqPage.subtitle,
    },
  };
}

export default async function FaqPage() {
  const { locale, t, pick } = await getServerTranslations();

  const accordionItems = FAQ_ITEMS.map((item) => ({
    id: item.id,
    question: pick(item.question),
    answer: pick(item.answer),
    note: item.confirmationNote ? pick(item.confirmationNote) : undefined,
  }));

  return (
    <>
      <PageHero
        eyebrow={t.faqPage.eyebrow}
        title={t.faqPage.title}
        subtitle={t.faqPage.subtitle}
        imageAssetId="hotel-corridor"
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.faq },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container size="narrow">
          <div className="space-y-10">
            <Accordion items={accordionItems} />

            <Card padding="lg" className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <h2 className="font-sans text-lg font-semibold text-text-primary">
                  {t.faqPage.stillHaveQuestions}
                </h2>
                <p className="text-sm text-text-secondary">
                  {t.faqPage.stillHaveQuestionsText}
                </p>
              </div>
              <Button to="/contact" variant="outline" size="md">
                {t.nav.contact}
              </Button>
            </Card>
          </div>
        </Container>
      </Section>

      <BookingCTA locale={locale} />
    </>
  );
}
