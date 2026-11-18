import React from 'react';
import { BookingCTA } from '../components/common/BookingCTA';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { FAQ_ITEMS } from '../data/faq';
import { useLanguage } from '../i18n/LanguageContext';

export const FaqPage: React.FC = () => {
  const { t, pick } = useLanguage();

  const accordionItems = FAQ_ITEMS.map((item) => ({
    id: item.id,
    question: pick(item.question),
    answer: pick(item.answer),
    note: item.confirmationNote ? pick(item.confirmationNote) : undefined,
  }));

  return (
    <>
      <DocumentHead
        title={`${t.faqPage.title} | Euroway Hotel`}
        description={t.faqPage.subtitle}
      />
      <PageHero
        eyebrow={t.faqPage.eyebrow}
        title={t.faqPage.title}
        subtitle={t.faqPage.subtitle}
        imageAssetId="hotel-corridor"
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

      <BookingCTA />
    </>
  );
};
