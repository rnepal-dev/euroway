import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, DoorOpen, Users } from 'lucide-react';
import { SirvoyBookingEngine } from '../components/booking/SirvoyBookingEngine';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { getRoomBySlug } from '../data/rooms';
import { useLanguage } from '../i18n/LanguageContext';
import { parseBookingQuery } from '../lib/booking';

export const BookPage: React.FC = () => {
  const { t, pick } = useLanguage();
  const { search } = useLocation();
  const parsed = parseBookingQuery(search);
  const selectedRoom = parsed.roomSlug ? getRoomBySlug(parsed.roomSlug) : undefined;

  const hasDates = Boolean(parsed.checkIn && parsed.checkOut);
  const hasGuests = typeof parsed.adults === 'number';

  return (
    <>
      <DocumentHead
        title={`${t.bookPage.title} | Euroway Hotel`}
        description={t.bookPage.subtitle}
      />
      <PageHero
        eyebrow={t.bookPage.eyebrow}
        title={t.bookPage.title}
        subtitle={t.bookPage.subtitle}
        imageAssetId="reception-counter"
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.bookNow },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="space-y-8">
            <Card padding="md">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-3">
                  <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                    {t.bookPage.summaryHeading}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <DoorOpen className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-text-secondary">{t.bookPage.selectedRoomLabel}:</span>
                      <span className="font-semibold text-text-primary">
                        {selectedRoom ? pick(selectedRoom.name) : t.bookPage.notSpecified}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 tabular-nums">
                      <Calendar className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-text-secondary">{t.bookPage.datesLabel}:</span>
                      <span className="font-semibold text-text-primary">
                        {hasDates
                          ? `${parsed.checkIn} → ${parsed.checkOut}`
                          : t.bookPage.notSpecified}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 tabular-nums">
                      <Users className="h-4 w-4 text-primary" aria-hidden="true" />
                      <span className="text-text-secondary">{t.bookPage.guestsLabel}:</span>
                      <span className="font-semibold text-text-primary">
                        {hasGuests
                          ? `${parsed.adults} ${
                              parsed.adults === 1 ? t.common.adultSingular : t.common.adults
                            }${
                              parsed.children
                                ? ` · ${parsed.children} ${
                                    parsed.children === 1 ? t.common.childSingular : t.common.children
                                  }`
                                : ''
                            }`
                          : t.bookPage.notSpecified}
                      </span>
                    </div>
                  </div>
                </div>

                <Button to="/rooms" variant="outline" size="sm">
                  {t.bookPage.changeRoom}
                </Button>
              </div>
            </Card>

            <SirvoyBookingEngine searchParams={parsed} />
          </div>
        </Container>
      </Section>
    </>
  );
};
