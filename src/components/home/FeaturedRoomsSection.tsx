import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ROOM_CATEGORIES } from '../../data/rooms';
import { useLanguage } from '../../i18n/LanguageContext';
import { RoomCard } from '../rooms/RoomCard';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const FeaturedRoomsSection: React.FC = () => {
  const { t } = useLanguage();
  // Feature the first 4 primary categories on homepage with link to view all 5
  const featuredRooms = ROOM_CATEGORIES.slice(0, 4);

  return (
    <Section tone="background" spacing="default">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t.home.roomsEyebrow}
            title={t.home.roomsTitle}
            subtitle={t.home.roomsSubtitle}
            action={
              <Button to="/rooms" variant="outline" size="md">
                <span>{t.common.exploreRooms}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            }
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <p className="text-center text-xs sm:text-sm text-text-secondary">
            {t.home.roomsRateNote}
          </p>
        </div>
      </Container>
    </Section>
  );
};
