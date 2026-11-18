import React from 'react';
import Link from 'next/link';
import { ArrowRight, BedDouble, Maximize2, Users } from 'lucide-react';
import { Locale, RoomCategory } from '../../types/hotel';
import { getLocalization } from '../../i18n/getLocalization';
import { buildBookingUrl } from '../../lib/booking';
import { Button } from '../ui/Button';
import { HotelImage } from '../ui/HotelImage';

interface RoomCardProps {
  room: RoomCategory;
  locale?: Locale;
  priority?: boolean;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, locale = 'en', priority = false }) => {
  const { t, pick } = getLocalization(locale);
  const detailUrl = `/rooms/${room.slug}`;
  const bookingUrl = buildBookingUrl({ roomSlug: room.slug });

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-theme-lg border border-border-subtle bg-surface shadow-card transition-shadow duration-200 hover:shadow-elevated">
      <Link href={detailUrl} className="block overflow-hidden">
        <HotelImage
          assetId={room.images[0]}
          priority={priority}
          aspectClassName="aspect-[16/10]"
          imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
        <div className="space-y-3">
          {/* Unboxed clean metadata line (zero pill boxes) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-text-secondary tabular-nums">
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {room.maxGuests === 1
                ? t.common.upToGuestSingular
                : t.common.upToGuests.replace('{count}', String(room.maxGuests))}
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <Maximize2 className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {room.sizeSqm} m²
            </span>
            <span aria-hidden="true">·</span>
            <span className="inline-flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
              {pick(room.bedArrangement)}
            </span>
          </div>

          <h3 className="text-xl font-semibold text-text-primary">
            <Link href={detailUrl} className="hover:text-primary transition-colors">
              {pick(room.name)}
            </Link>
          </h3>

          <p className="text-sm leading-relaxed text-text-secondary">
            {pick(room.shortDescription)}
          </p>

          <ul className="pt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-text-secondary">
            {room.amenities.slice(0, 3).map((amenity, idx) => (
              <li key={pick(amenity)} className="inline-flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true">·</span>}
                <span>{pick(amenity)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-border-subtle flex flex-wrap items-center justify-between gap-3">
          <Link
            href={detailUrl}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors whitespace-nowrap"
          >
            <span>{t.common.viewDetails}</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Button to={bookingUrl} variant="primary" size="sm">
            {t.common.selectRoom}
          </Button>
        </div>
      </div>
    </article>
  );
};
