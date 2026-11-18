import type { Metadata } from 'next';
import { Bus, Car, Landmark, ParkingCircle, Plane } from 'lucide-react';
import { BookingCTA } from '../../components/common/BookingCTA';
import { LocationPreview } from '../../components/common/LocationPreview';
import { Card } from '../../components/ui/Card';
import { Container } from '../../components/ui/Container';
import { PageHero } from '../../components/ui/PageHero';
import { Section } from '../../components/ui/Section';
import { getServerTranslations } from '../../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getServerTranslations();
  return {
    title: t.locationPage.title,
    description: t.locationPage.subtitle,
    openGraph: {
      title: `${t.locationPage.title} | Euroway Hotel`,
      description: t.locationPage.subtitle,
    },
  };
}

export default async function LocationPage() {
  const { locale, t } = await getServerTranslations();

  const landmarks =
    locale === 'en'
      ? [
          { place: 'Gothenburg City Center (by car)', time: '~5 min drive' },
          { place: 'Nordstaden (Green Express bus)', time: '~10 min by bus' },
          { place: 'Hj. Brantingsplatsen Station', time: '~4 min drive' },
          { place: 'Gamlestaden Station', time: '~5 min drive' },
          { place: 'Nya Ullevi Stadium & Golf Courses on Hisingen', time: '~10 min drive' },
          { place: 'St. Jörgen Golf Club', time: '~11 min drive' },
          { place: 'Gothenburg Town Hall & Kungsgatan', time: '~12–14 min drive' },
          { place: 'Liseberg & Universeum (direct bus)', time: '~20 min by bus' },
          { place: 'Göteborg Landvetter Airport (GOT)', time: '~23–25 min drive' },
        ]
      : [
          { place: 'Göteborgs centrum (med bil)', time: 'ca 5 min bilfärd' },
          { place: 'Nordstaden (buss Grön Express)', time: 'ca 10 min med buss' },
          { place: 'Hjalmar Brantingsplatsen', time: 'ca 4 min bilfärd' },
          { place: 'Gamlestadens station', time: 'ca 5 min bilfärd' },
          { place: 'Ullevi & golfbanor på Hisingen', time: 'ca 10 min bilfärd' },
          { place: 'St. Jörgen Golf Club', time: 'ca 11 min bilfärd' },
          { place: 'Göteborgs rådhus & Kungsgatan', time: 'ca 12–14 min bilfärd' },
          { place: 'Liseberg & Universeum (direktbuss)', time: 'ca 20 min med buss' },
          { place: 'Landvetter flygplats (GOT)', time: 'ca 23–25 min bilfärd' },
        ];

  return (
    <>
      <PageHero
        eyebrow={t.locationPage.eyebrow}
        title={t.locationPage.title}
        subtitle={t.locationPage.subtitle}
        imageAssetId="exterior-night-wide"
        locale={locale}
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.location },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="space-y-12">
            <LocationPreview showDirectionsButton={false} locale={locale} />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="space-y-3">
                <div className="flex items-center gap-2.5 text-primary">
                  <Car className="h-5 w-5" aria-hidden="true" />
                  <h2 className="font-sans text-lg font-semibold text-text-primary">
                    {t.locationPage.drivingHeading}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t.locationPage.drivingText}
                </p>
              </Card>

              <Card className="space-y-3">
                <div className="flex items-center gap-2.5 text-primary">
                  <Bus className="h-5 w-5" aria-hidden="true" />
                  <h2 className="font-sans text-lg font-semibold text-text-primary">
                    {t.locationPage.transitHeading}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t.locationPage.transitText}
                </p>
              </Card>

              <Card className="space-y-3">
                <div className="flex items-center gap-2.5 text-primary">
                  <ParkingCircle className="h-5 w-5" aria-hidden="true" />
                  <h2 className="font-sans text-lg font-semibold text-text-primary">
                    {t.locationPage.parkingHeading}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {t.locationPage.parkingText}
                </p>
              </Card>
            </div>

            <Card padding="lg" className="space-y-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2.5 text-primary">
                  <Landmark className="h-5 w-5" aria-hidden="true" />
                  <h2 className="font-display text-2xl font-medium text-text-primary">
                    {t.locationPage.nearbyHeading}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {t.locationPage.approximateNote}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {landmarks.map((item) => (
                  <div
                    key={item.place}
                    className="flex items-center justify-between gap-3 rounded-theme-md border border-border-subtle bg-background px-4 py-3 text-sm"
                  >
                    <span className="font-medium text-text-primary">{item.place}</span>
                    <span className="shrink-0 font-semibold text-primary tabular-nums">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs text-text-secondary pt-1">
                <Plane className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>
                  {locale === 'en'
                    ? 'Business travelers heading to Hisingen industrial sites do not need to cross the Göta Älv river from the city center.'
                    : 'Affärsresenärer som besöker företag på Hisingen slipper korsa Göta Älv från centrum.'}
                </span>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <BookingCTA locale={locale} />
    </>
  );
}
