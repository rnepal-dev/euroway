import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Bath,
  BedDouble,
  Check,
  Clock,
  Maximize2,
  Users,
} from 'lucide-react';
import { RoomCard } from '../../../components/rooms/RoomCard';
import { RoomGallery } from '../../../components/rooms/RoomGallery';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { Button } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { Container } from '../../../components/ui/Container';
import { Section } from '../../../components/ui/Section';
import { SITE_CONFIG } from '../../../config/site';
import { getImageAsset } from '../../../data/images';
import { getRoomBySlug, ROOM_CATEGORIES } from '../../../data/rooms';
import { getServerTranslations } from '../../../i18n/serverLocale';
import { buildBookingUrl } from '../../../lib/booking';
import { getRelatedRooms } from '../../../lib/rooms';

export function generateStaticParams() {
  return ROOM_CATEGORIES.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  if (!room) {
    return { title: 'Room Not Found' };
  }
  const { pick } = await getServerTranslations();
  const primaryImage = getImageAsset(room.images[0]);

  return {
    title: pick(room.name),
    description: pick(room.shortDescription),
    openGraph: {
      title: `${pick(room.name)} | Euroway Hotel`,
      description: pick(room.shortDescription),
      images: [
        {
          url: primaryImage.localPath,
          alt: pick(primaryImage.alt),
        },
      ],
    },
  };
}

export default async function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const { t, pick, locale } = await getServerTranslations();
  const relatedRooms = getRelatedRooms(ROOM_CATEGORIES, room.slug, 3);
  const bookingHref = buildBookingUrl({ roomSlug: room.slug });

  return (
    <>
      <Section tone="background" className="pt-24 sm:pt-28 pb-14">
        <Container>
          <div className="space-y-6">
            <Breadcrumb
              items={[
                { label: t.nav.home, to: '/' },
                { label: t.roomDetail.breadcrumbRooms, to: '/rooms' },
                { label: pick(room.name) },
              ]}
            />

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Interactive Photo Gallery */}
              <div className="lg:col-span-7">
                <RoomGallery imageIds={room.images} roomName={pick(room.name)} />
              </div>

              {/* Right Column: Room Summary & Booking Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-wider text-primary tabular-nums">
                    <span>
                      {room.maxGuests === 1
                        ? t.common.upToGuestSingular
                        : t.common.upToGuests.replace('{count}', String(room.maxGuests))}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{room.sizeSqm} m²</span>
                    <span aria-hidden="true">·</span>
                    <span>{pick(room.bedArrangement)}</span>
                  </div>

                  <h1 className="font-display text-3xl sm:text-4xl font-medium text-text-primary">
                    {pick(room.name)}
                  </h1>

                  <p className="text-base leading-relaxed text-text-secondary">
                    {pick(room.fullDescription)}
                  </p>
                </div>

                <Card padding="md" className="space-y-4">
                  <div className="grid grid-cols-3 gap-3 border-b border-border-subtle pb-4 text-center">
                    <div className="space-y-1">
                      <Users className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
                      <p className="text-xs text-text-secondary">{t.common.adults}</p>
                      <p className="text-sm font-semibold text-text-primary tabular-nums">
                        {room.maxAdults}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <Maximize2 className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
                      <p className="text-xs text-text-secondary">{t.common.roomSize}</p>
                      <p className="text-sm font-semibold text-text-primary tabular-nums">
                        {room.sizeSqm} m²
                      </p>
                    </div>
                    <div className="space-y-1">
                      <BedDouble className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
                      <p className="text-xs text-text-secondary">{t.common.bedType}</p>
                      <p className="text-xs font-semibold text-text-primary">
                        {pick(room.bedArrangement)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h2 className="font-sans text-base font-semibold text-text-primary">
                      {t.roomDetail.reserveRoomTitle}
                    </h2>
                    <p className="text-xs sm:text-sm text-text-secondary">
                      {t.roomDetail.reserveRoomText}
                    </p>
                  </div>

                  <Button to={bookingHref} variant="primary" size="lg" className="w-full">
                    {t.common.selectRoom}
                  </Button>
                </Card>

                <Link
                  href="/rooms"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  <span>{t.common.backToRooms}</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Facilities & Policies Details */}
      <Section tone="surface" spacing="default">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card padding="lg" className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-text-primary">
                {t.roomDetail.includedHeading}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.amenities.map((item) => (
                  <li key={pick(item)} className="flex items-start gap-2.5 text-sm text-text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{pick(item)}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg" className="space-y-4">
              <h2 className="font-display text-2xl font-medium text-text-primary flex items-center gap-2.5">
                <Bath className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>{t.roomDetail.bathroomHeading}</span>
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.bathroomFeatures.map((item) => (
                  <li key={pick(item)} className="flex items-start gap-2.5 text-sm text-text-primary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{pick(item)}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-8 rounded-theme-lg border border-border-subtle bg-background p-6 sm:p-8 space-y-5">
            <h2 className="font-display text-2xl font-medium text-text-primary">
              {t.roomDetail.policiesHeading}
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 text-sm">
              <div className="space-y-1">
                <p className="font-semibold text-text-primary flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span>{t.roomDetail.checkInOutLabel}</span>
                </p>
                <p className="text-text-secondary tabular-nums">
                  {t.common.checkIn}: {SITE_CONFIG.policies.checkInTime}
                  <br />
                  {t.common.checkOut}: {SITE_CONFIG.policies.checkOutTime}
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">{t.roomDetail.petsLabel}</p>
                <p className="text-text-secondary">
                  {locale === 'en' ? 'Pets are not allowed.' : 'Husdjur är inte tillåtna.'}
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">{t.roomDetail.smokingLabel}</p>
                <p className="text-text-secondary">
                  {locale === 'en'
                    ? 'Completely non-smoking hotel.'
                    : 'Helt rökfritt hotell.'}
                </p>
              </div>
              <div className="space-y-1">
                <p className="font-semibold text-text-primary">{t.roomDetail.cancellationLabel}</p>
                <p className="text-text-secondary">{t.roomDetail.cancellationText}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary border-t border-border-subtle pt-4">
              <strong className="text-text-primary">{t.roomDetail.childrenLabel}: </strong>
              {t.roomDetail.childrenText}
            </p>
          </div>
        </Container>
      </Section>

      {/* Related Rooms */}
      <Section tone="secondary" spacing="default">
        <Container>
          <div className="space-y-8">
            <h2 className="font-display text-2xl sm:text-3xl font-medium text-text-primary">
              {t.roomDetail.relatedHeading}
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {relatedRooms.map((item) => (
                <RoomCard key={item.id} room={item} locale={locale} />
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
