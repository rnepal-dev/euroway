import React from 'react';
import { BookingCTA } from '../components/common/BookingCTA';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { GALLERY_ASSET_IDS, getImageAsset } from '../data/images';
import { useLanguage } from '../i18n/LanguageContext';

export const GalleryPage: React.FC = () => {
  const { t } = useLanguage();
  const galleryAssets = GALLERY_ASSET_IDS.map((id) => getImageAsset(id));

  return (
    <>
      <DocumentHead
        title={`${t.galleryPage.title} | Euroway Hotel`}
        description={t.galleryPage.subtitle}
      />
      <PageHero
        eyebrow={t.galleryPage.eyebrow}
        title={t.galleryPage.title}
        subtitle={t.galleryPage.subtitle}
        imageAssetId="lobby-lounge"
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.gallery },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <GalleryGrid assets={galleryAssets} showFilters />
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
};
