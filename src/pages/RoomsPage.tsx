import React, { useState } from 'react';
import { BookingCTA } from '../components/common/BookingCTA';
import { RoomCard } from '../components/rooms/RoomCard';
import { Container } from '../components/ui/Container';
import { DocumentHead } from '../components/ui/DocumentHead';
import { PageHero } from '../components/ui/PageHero';
import { Section } from '../components/ui/Section';
import { EmptyState } from '../components/ui/StateFeedback';
import { ROOM_CATEGORIES } from '../data/rooms';
import { useLanguage } from '../i18n/LanguageContext';
import { CapacityFilter, filterRoomsByCapacity } from '../lib/rooms';

export const RoomsPage: React.FC = () => {
  const { t, locale } = useLanguage();
  const [capacityFilter, setCapacityFilter] = useState<CapacityFilter>('all');

  const filteredRooms = filterRoomsByCapacity(ROOM_CATEGORIES, capacityFilter);

  const filterButtons: Array<{ key: CapacityFilter; label: string }> = [
    { key: 'all', label: t.roomsPage.filterAll },
    { key: '2', label: t.roomsPage.filterTwoPlus },
    { key: '3+', label: t.roomsPage.filterThreePlus },
  ];

  return (
    <>
      <DocumentHead
        title={`${t.roomsPage.title} | Euroway Hotel`}
        description={t.roomsPage.subtitle}
      />
      <PageHero
        eyebrow={t.roomsPage.eyebrow}
        title={t.roomsPage.title}
        subtitle={t.roomsPage.subtitle}
        imageAssetId="room-2-main"
        breadcrumbs={[
          { label: t.nav.home, to: '/' },
          { label: t.nav.rooms },
        ]}
      />

      <Section tone="background" spacing="default">
        <Container>
          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border-subtle pb-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-text-secondary">
                  {t.roomsPage.filterLabel}
                </span>
                <div
                  role="group"
                  aria-label={t.roomsPage.filterLabel}
                  className="inline-flex flex-wrap items-center gap-1 rounded-theme-lg border border-border-subtle bg-surface p-1"
                >
                  {filterButtons.map((btn) => {
                    const active = capacityFilter === btn.key;
                    return (
                      <button
                        key={btn.key}
                        type="button"
                        onClick={() => setCapacityFilter(btn.key)}
                        aria-pressed={active}
                        className={`min-h-[38px] rounded-theme-md px-3.5 py-1.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                          active
                            ? 'bg-primary text-text-light'
                            : 'text-text-secondary hover:bg-background hover:text-text-primary'
                        }`}
                      >
                        {btn.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-text-secondary max-w-md">
                {t.roomsPage.ratesNotice}
              </p>
            </div>

            {filteredRooms.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredRooms.map((room) => (
                  <RoomCard key={room.id} room={room} />
                ))}
              </div>
            ) : (
              <EmptyState title={t.roomsPage.emptyState} />
            )}

            <p className="text-xs text-text-secondary">
              {locale === 'en'
                ? 'All guest rooms are strictly non-smoking. Pets are not permitted.'
                : 'Samtliga gästrum är helt rökfria. Husdjur är inte tillåtna.'}
            </p>
          </div>
        </Container>
      </Section>

      <BookingCTA />
    </>
  );
};
