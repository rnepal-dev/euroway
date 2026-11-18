import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getLocalization } from '../../i18n/getLocalization';
import { Locale } from '../../types/hotel';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HotelImage } from '../ui/HotelImage';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const GalleryPreviewSection: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
  const { t } = getLocalization(locale);

  return (
    <Section tone="background" spacing="default">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t.home.galleryEyebrow}
            title={t.home.galleryTitle}
            subtitle={t.home.gallerySubtitle}
            action={
              <Button to="/gallery" variant="outline" size="md">
                <span>{t.common.viewGallery}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            }
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
            <div className="md:col-span-6 overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
              <HotelImage
                assetId="breakfast-buffet"
                className="h-full"
                aspectClassName="aspect-[16/10] md:h-full"
              />
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-theme-lg border border-border-subtle shadow-card">
                <HotelImage assetId="room-2-main" aspectClassName="aspect-[4/3]" />
              </div>
              <div className="overflow-hidden rounded-theme-lg border border-border-subtle shadow-card">
                <HotelImage assetId="room-4-main" aspectClassName="aspect-[4/3]" />
              </div>
              <div className="overflow-hidden rounded-theme-lg border border-border-subtle shadow-card">
                <HotelImage assetId="hotel-corridor" aspectClassName="aspect-[4/3]" />
              </div>
              <div className="overflow-hidden rounded-theme-lg border border-border-subtle shadow-card">
                <HotelImage assetId="room-1-bath" aspectClassName="aspect-[4/3]" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
