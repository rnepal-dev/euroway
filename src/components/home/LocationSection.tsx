import React from 'react';
import { getLocalization } from '../../i18n/getLocalization';
import { Locale } from '../../types/hotel';
import { LocationPreview } from '../common/LocationPreview';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const LocationSection: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
  const { t } = getLocalization(locale);

  return (
    <Section tone="secondary" spacing="default">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t.home.locationEyebrow}
            title={t.home.locationTitle}
            subtitle={t.home.locationSubtitle}
          />
          <LocationPreview showDirectionsButton locale={locale} />
        </div>
      </Container>
    </Section>
  );
};
