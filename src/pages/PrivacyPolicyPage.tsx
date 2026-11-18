import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';

export const PrivacyPolicyPage: React.FC = () => {
  const { t, locale } = useLanguage();

  return (
    <>
      <DocumentHead
        title={`${t.legal.privacyTitle} | Euroway Hotel`}
        description={t.legal.privacySubtitle}
      />
      <PageHero
        eyebrow={t.legal.privacyEyebrow}
        title={t.legal.privacyTitle}
        subtitle={t.legal.privacySubtitle}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.legal.privacyTitle },
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
                  <p className="text-text-secondary">
                    {locale === 'en'
                      ? 'The legacy website’s privacy page contained generic e-commerce template wording. Below is the verified operator identity alongside items awaiting final legal sign-off by the hotel owner.'
                      : 'Den äldre webbplatsens integritetssida innehöll generiska malltexter. Nedan visas verifierade företagsuppgifter samt punkter som inväntar hotellets slutliga godkännande.'}
                  </p>
                </div>
              </div>
            </Card>

            <Card padding="lg" className="space-y-6 text-sm sm:text-base leading-relaxed text-text-secondary">
              <div className="space-y-2">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en' ? '1. Verified Data Controller Contact' : '1. Verifierad kontakt för personuppgiftsansvarig'}
                </h2>
                <p>
                  {SITE_CONFIG.hotelName} ({SITE_CONFIG.legalOperator}),{' '}
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode}{' '}
                  {SITE_CONFIG.address.city}, Sweden. Email:{' '}
                  <a href={SITE_CONFIG.contact.emailHref} className="text-primary underline">
                    {SITE_CONFIG.contact.email}
                  </a>
                  , Telephone:{' '}
                  <a href={SITE_CONFIG.contact.phoneHref} className="text-primary underline">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </a>
                  .
                </p>
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-5">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en' ? '2. Reservation Processing (Sirvoy)' : '2. Bokningshantering (Sirvoy)'}
                </h2>
                <p>
                  {locale === 'en'
                    ? 'Online room reservations, guest check-in records, and payment processing are handled through the Sirvoy booking engine once activated on /book.'
                    : 'Onlinebokning, gästregistrering och eventuell betalning hanteras via bokningssystemet Sirvoy när bokningsmotorn aktiveras på /book.'}
                </p>
              </div>

              <div className="space-y-2 border-t border-border-subtle pt-5">
                <h2 className="font-display text-xl font-medium text-text-primary">
                  {locale === 'en'
                    ? '3. Cookies, Analytics & GDPR Retention Details'
                    : '3. Cookies, analys och GDPR-lagring'}
                </h2>
                <p>
                  {locale === 'en'
                    ? `[${t.common.requiresConfirmation}] No unnecessary third-party analytics trackers are loaded by this frontend. Exact retention periods, GDPR legal bases, and cookie consent disclosures should be finalized and approved by ${SITE_CONFIG.legalOperator} prior to production launch.`
                    : `[${t.common.requiresConfirmation}] Denna webbplats laddar inga onödiga spårningsskript från tredje part. Exakta lagringstider, rättslig grund enligt GDPR och cookie-information ska fastställas av ${SITE_CONFIG.legalOperator} före lansering.`}
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
};
