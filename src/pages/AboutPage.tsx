import React from 'react';
import { Building2, Car, Coffee, MapPin, Wifi } from 'lucide-react';
import { BookingCTA } from '../components/common/BookingCTA';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { HotelImage } from '../components/ui/HotelImage';
import { IconText } from '../components/ui/IconText';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';

export const AboutPage: React.FC = () => {
  const { t, locale } = useLanguage();

  const facts =
    locale === 'en'
      ? [
          { icon: MapPin, title: 'Stigs Center, Hisingen', desc: 'Importgatan 2D, 422 46 Hisings Backa' },
          { icon: Building2, title: 'Established Neighborhood Hub', desc: 'Stigs Center opened in 1968 near the Göta Älv river' },
          { icon: Coffee, title: 'Complimentary Breakfast', desc: 'Included daily continental breakfast buffet' },
          { icon: Wifi, title: 'Free Wi-Fi', desc: 'Wireless internet included across all 5 room categories' },
          { icon: Car, title: 'Free Garage Parking', desc: 'Direct access off E6 Exit 78 (Backadalsmotet)' },
        ]
      : [
          { icon: MapPin, title: 'Stigs Center, Hisingen', desc: 'Importgatan 2D, 422 46 Hisings Backa' },
          { icon: Building2, title: 'Etablerat läge sedan 1968', desc: 'Stigs Center uppfördes 1968 nära Göta Älv' },
          { icon: Coffee, title: 'Frukost ingår', desc: 'Daglig kontinental frukostbuffé utan extra kostnad' },
          { icon: Wifi, title: 'Gratis Wi-Fi', desc: 'Trådlöst internet i samtliga fem rumskategorier' },
          { icon: Car, title: 'Fri garageparkering', desc: 'Smidig infart från E6 avfart 78 (Backadalsmotet)' },
        ];

  return (
    <>
      <DocumentHead
        title={`${t.aboutPage.title} | Euroway Hotel`}
        description={t.aboutPage.subtitle}
      />
      <PageHero
        eyebrow={t.aboutPage.eyebrow}
        title={t.aboutPage.title}
        subtitle={t.aboutPage.subtitle}
        imageAssetId="exterior-sign"
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.about },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
                {t.aboutPage.storyHeading}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-text-secondary">
                <p>{t.aboutPage.storyP1}</p>
                <p>{t.aboutPage.storyP2}</p>
                <p>{t.aboutPage.storyP3}</p>
              </div>

              <div className="pt-4 border-t border-border-subtle space-y-3">
                <h3 className="text-xl font-semibold text-text-primary">
                  {t.aboutPage.todayHeading}
                </h3>
                <p className="text-base leading-relaxed text-text-secondary">
                  {t.aboutPage.todayText}
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
                <HotelImage assetId="exterior-entrance" aspectClassName="aspect-[4/3]" />
              </div>
              <Card padding="md" className="space-y-4">
                <h3 className="text-base font-semibold text-text-primary">
                  {t.aboutPage.highlightsTitle}
                </h3>
                <div className="space-y-3.5">
                  {facts.map((fact) => (
                    <IconText
                      key={fact.title}
                      icon={fact.icon}
                      title={fact.title}
                      description={fact.desc}
                    />
                  ))}
                </div>
                <p className="pt-2 border-t border-border-subtle text-xs text-text-secondary">
                  {SITE_CONFIG.legalOperator} · {SITE_CONFIG.contact.phoneDisplay}
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
};
