import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';

export const TermsPage: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <>
      <DocumentHead
        title={`${t.legal.termsTitle} | Euroway Hotel`}
        description={t.legal.termsSubtitle}
      />
      <PageHero
        eyebrow={t.legal.termsEyebrow}
        title={t.legal.termsTitle}
        subtitle={t.legal.termsSubtitle}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.legal.termsTitle },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container size="narrow">
          <div className="space-y-6">
            <Card padding="md" className="border-border-strong bg-background-secondary/50">
              <div className="flex items-start gap-3">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="space-y-1 text-sm">
                  <p className="font-semibold text-text-primary">
                    {t.legal.confirmationBannerTitle}
                  </p>
                  <p className="text-text-secondary">{t.legal.confirmationBannerText}</p>
                </div>
              </div>
            </Card>

            <Card padding="lg" className="space-y-6 text-sm sm:text-base leading-relaxed text-text-secondary">
              <div className="space-y-2">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en' ? '1. Verified Stay Policies' : '1. Verifierade vistelseregler'}
                </h2>
                <ul className="list-disc list-inside space-y-1.5">
                  <li>
                    {locale === 'en'
                      ? `Check-in: from ${SITE_CONFIG.policies.checkInTime} (early check-in subject to availability).`
                      : `Incheckning: från kl. ${SITE_CONFIG.policies.checkInTime} (tidig incheckning i mån av tillgång).`}
                  </li>
                  <li>
                    {locale === 'en'
                      ? `Check-out: by ${SITE_CONFIG.policies.checkOutTime}.`
                      : `Utcheckning: senast kl. ${SITE_CONFIG.policies.checkOutTime}.`}
                  </li>
                  <li>
                    {locale === 'en'
                      ? 'Smoking: Euroway Hotel is a completely non-smoking property.'
                      : 'Rökning: Hela hotellet är helt rökfritt.'}
                  </li>
                  <li>
                    {locale === 'en'
                      ? 'Pets: Pets are not permitted on the premises.'
                      : 'Husdjur: Husdjur är inte tillåtna på hotellet.'}
                  </li>
                </ul>
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-5">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en'
                    ? '2. Cancellation, Prepayment & Refund Policy'
                    : '2. Avbokning, förskottsbetalning & återbetalning'}
                </h2>
                <p>
                  {locale === 'en'
                    ? `[${t.common.requiresConfirmation}] The official website lists both "cancel free of charge until 1 day before arrival" and "you won't be eligible for a refund" / "varies by room type". Final binding cancellation and prepayment terms must be confirmed by ${SITE_CONFIG.legalOperator} and match the active Sirvoy rate plans.`
                    : `[${t.common.requiresConfirmation}] Den tidigare webbplatsen innehöll motstridiga uppgifter om fri avbokning upp till 1 dag före ankomst respektive ej återbetalningsbara villkor. Bindande avboknings- och betalningsvillkor ska bekräftas av ${SITE_CONFIG.legalOperator} och spegla aktiva prisplaner i Sirvoy.`}
                </p>
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-5">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en' ? '3. Taxes & Operator Details' : '3. Skatter & hotelloperatör'}
                </h2>
                <p>
                  {locale === 'en'
                    ? `Operated by ${SITE_CONFIG.legalOperator}. The existing terms note 12% Swedish hotel VAT is included and no separate city tax applies (verify with hotel confirmation for corporate/group bookings).`
                    : `Hotellet drivs av ${SITE_CONFIG.legalOperator}. Enligt befintliga villkor ingår 12 % svensk hotellmoms och ingen särskild stadsskatt tillkommer (bekräftas vid bokning).`}
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};
