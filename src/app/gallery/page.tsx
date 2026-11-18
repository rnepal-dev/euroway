import type { Metadata } from 'next';
import { BookingCTA } from '../../components/common/BookingCTA';
import { GalleryGrid } from '../../components/gallery/GalleryGrid';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { GALLERY_ASSET_IDS, getImageAsset } from '../../data/images';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.galleryPage.title,
    description: t.galleryPage.subtitle,
    openGraph: {
      title: `${t.galleryPage.title} | Euroway Hotel`,
      description: t.galleryPage.subtitle,
    },
  };
}

export default async function GalleryPage() {
  const { locale, t } = await getServerTranslations();
  const galleryAssets = GALLERY_ASSET_IDS.map((id) => getImageAsset(id));

  return (
    <>
      <PageHero
        eyebrow={t.galleryPage.eyebrow}
        title={t.galleryPage.title}
        subtitle={t.galleryPage.subtitle}
        imageAssetId="lobby-lounge"
        locale={locale}
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

      <BookingCTA locale={locale} />
    </>
  );
}
