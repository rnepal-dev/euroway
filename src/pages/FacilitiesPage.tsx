import React from 'react';
import { BookingCTA } from '../components/common/BookingCTA';
import { FacilityCategory } from '../components/facilities/FacilityCategory';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { FACILITY_CATEGORIES } from '../data/facilities';
import { useLanguage } from '../i18n/LanguageContext';

export const FacilitiesPage: React.FC = () => {
  const { t } = useLanguage();

  const hotelFacilities = FACILITY_CATEGORIES.filter((c) => c.scope === 'hotel');
  const nearbyFacilities = FACILITY_CATEGORIES.filter((c) => c.scope === 'nearby');

  return (
    <>
      <DocumentHead
        title={`${t.facilitiesPage.title} | Euroway Hotel`}
        description={t.facilitiesPage.subtitle}
      />
      <PageHero
        eyebrow={t.facilitiesPage.eyebrow}
        title={t.facilitiesPage.title}
        subtitle={t.facilitiesPage.subtitle}
        imageAssetId="breakfast-buffet"
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.facilities },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="space-y-14">
            <div className="border-b border-border-subtle pb-4">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
                {t.facilitiesPage.hotelScopeHeading}
              </h2>
            </div>

            {hotelFacilities.map((category) => (
              <FacilityCategory key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="secondary" spacing="default">
        <Container>
          <div className="space-y-10">
            <div className="border-b border-border-strong pb-4">
              <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
                {t.facilitiesPage.nearbyScopeHeading}
              </h2>
            </div>

            {nearbyFacilities.map((category) => (
              <FacilityCategory key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
};
