import React from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { LocationPreview } from '../common/LocationPreview';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section tone="secondary" spacing="default">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t.home.locationEyebrow}
            title={t.home.locationTitle}
            subtitle={t.home.locationSubtitle}
          />
          <LocationPreview showDirectionsButton />
        </div>
      </Container>
    </Section>
  );
};
