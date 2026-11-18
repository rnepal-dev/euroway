import type { Metadata } from 'next';
import { BookingCTA } from '../../components/common/BookingCTA';
import { RoomsFilterView } from '../../components/rooms/RoomsFilterView';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { ROOM_CATEGORIES } from '../../data/rooms';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.roomsPage.title,
    description: t.roomsPage.subtitle,
    openGraph: {
      title: `${t.roomsPage.title} | Euroway Hotel`,
      description: t.roomsPage.subtitle,
    },
  };
}

export default async function RoomsPage() {
  const { locale, t } = await getServerTranslations();

  return (
    <>
      <PageHero
        eyebrow={t.roomsPage.eyebrow}
        title={t.roomsPage.title}
        subtitle={t.roomsPage.subtitle}
        imageAssetId="room-2-main"
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.rooms },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <RoomsFilterView rooms={ROOM_CATEGORIES} />
        </Container>
      </Section>

      <BookingCTA locale={locale} />
    </>
  );
}
