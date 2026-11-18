'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, DoorOpen, Users } from 'lucide-react';
import { getRoomBySlug } from '../../data/rooms';
import { useLanguage } from '../../i18n/LanguageContext';
import { parseBookingQuery } from '../../lib/booking';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SirvoyBookingEngine } from './SirvoyBookingEngine';

export const BookClientView: React.FC = () => {
  const { t, pick } = useLanguage();
  const searchParams = useSearchParams();
  const parsed = parseBookingQuery(searchParams.toString());
  const selectedRoom = parsed.roomSlug ? getRoomBySlug(parsed.roomSlug) : undefined;

  const hasDates = Boolean(parsed.checkIn && parsed.checkOut);
  const hasGuests = typeof parsed.adults === 'number';

  return (
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
  );
};
