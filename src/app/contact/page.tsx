import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { BookingCTA } from '../../components/common/BookingCTA';
import { ContactDetails } from '../../components/common/ContactDetails';
import { LocationPreview } from '../../components/common/LocationPreview';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { SITE_CONFIG } from '../../config/site';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.contactPage.title,
    description: t.contactPage.subtitle,
    openGraph: {
      title: `${t.contactPage.title} | Euroway Hotel`,
      description: t.contactPage.subtitle,
    },
  };
}

export default async function ContactPage() {
  const { locale, t } = await getServerTranslations();

  return (
    <>
      <PageHero
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        subtitle={t.contactPage.subtitle}
        imageAssetId="reception-counter"
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.contact },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
                    {t.contactPage.directHeading}
                  </h2>
                  <p className="text-base text-text-secondary">
                    {t.contactPage.directSubtitle}
                  </p>
                </div>
                <ContactDetails locale={locale} />
              </div>

              <div className="lg:col-span-5">
                <Card padding="lg" className="space-y-5">
                  <h2 className="font-display text-2xl font-medium text-text-primary">
                    {t.common.callHotel} / {t.common.emailHotel}
                  </h2>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {t.contactPage.directActionNote}
                  </p>
                  <div className="flex flex-col gap-3 pt-1">
                    <Button href={SITE_CONFIG.contact.phoneHref} variant="primary" size="lg">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                    </Button>
                    <Button href={SITE_CONFIG.contact.emailHref} variant="outline" size="lg">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>{t.contactPage.composeEmail}</span>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            <LocationPreview showDirectionsButton locale={locale} />
          </div>
        </Container>
      </Section>

      <BookingCTA locale={locale} />
    </>
  );
}
