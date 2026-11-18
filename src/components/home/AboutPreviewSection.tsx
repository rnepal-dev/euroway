import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HotelImage } from '../ui/HotelImage';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const AboutPreviewSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section tone="background" spacing="default">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-stretch">
            <div className="col-span-7 overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
              <HotelImage
                assetId="reception-counter"
                className="h-full"
                aspectClassName="aspect-[4/3] lg:h-full"
              />
            </div>
            <div className="col-span-5 overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
              <HotelImage
                assetId="exterior-entrance"
                className="h-full"
                aspectClassName="aspect-[3/4] lg:h-full"
              />
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <SectionHeading
              eyebrow={t.home.aboutEyebrow}
              title={t.home.aboutTitle}
            />
            <div className="space-y-4 text-base leading-relaxed text-text-secondary">
              <p>{t.home.aboutParagraph1}</p>
              <p>{t.home.aboutParagraph2}</p>
            </div>
            <div>
              <Button to="/about" variant="outline" size="md">
                <span>{t.common.discoverHotel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
