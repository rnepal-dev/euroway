import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import {
  buildBookingUrl,
  getOffsetIsoDate,
  getTodayIsoDate,
  validateBookingSearch,
} from '../../lib/booking';
import { Button } from '../ui/Button';
import { DateInput, SelectInput } from '../ui/FormControls';

interface BookingSearchBarProps {
  initialRoomSlug?: string;
  compact?: boolean;
}

export const BookingSearchBar: React.FC<BookingSearchBarProps> = ({
  initialRoomSlug,
  compact = false,
}) => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const today = getTodayIsoDate();
  const [checkIn, setCheckIn] = useState<string>(today);
  const [checkOut, setCheckOut] = useState<string>(getOffsetIsoDate(1));
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCheckInChange = (value: string) => {
    setCheckIn(value);
    setErrorMsg(null);
    if (value && checkOut && checkOut <= value) {
      const nextDay = new Date(`${value}T12:00:00`);
      if (!Number.isNaN(nextDay.getTime())) {
        setCheckOut(getOffsetIsoDate(1, nextDay));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateBookingSearch({ checkIn, checkOut, adults, children }, today);
    if (!result.valid && result.errorKey) {
      setErrorMsg(t.bookingBar.errors[result.errorKey]);
      return;
    }
    setErrorMsg(null);
    navigate(
      buildBookingUrl({
        roomSlug: initialRoomSlug,
        checkIn,
        checkOut,
        adults,
        children,
      })
    );
  };

  const adultOptions = [1, 2, 3, 4, 5].map((n) => ({
    value: n,
    label: `${n} ${n === 1 ? t.common.adultSingular : t.common.adults}`,
  }));

  const childOptions = [0, 1, 2, 3].map((n) => ({
    value: n,
    label: `${n} ${n === 1 ? t.common.childSingular : t.common.children}`,
  }));

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label={t.bookingBar.heading}
      className={`rounded-theme-xl border border-border-subtle bg-surface shadow-elevated ${
        compact ? 'p-4 sm:p-5' : 'p-5 sm:p-6 lg:p-7'
      }`}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_0.8fr_auto] lg:items-end">
        <div>
          <DateInput
            id="booking-check-in"
            label={t.bookingBar.checkInLabel}
            value={checkIn}
            min={today}
            onChange={(e) => handleCheckInChange(e.target.value)}
            required
          />
        </div>

        <div>
          <DateInput
            id="booking-check-out"
            label={t.bookingBar.checkOutLabel}
            value={checkOut}
            min={checkIn || today}
            onChange={(e) => {
              setCheckOut(e.target.value);
              setErrorMsg(null);
            }}
            required
          />
        </div>

        <div>
          <SelectInput
            id="booking-adults"
            label={t.bookingBar.adultsLabel}
            value={adults}
            options={adultOptions}
            onChange={(e) => {
              setAdults(Number(e.target.value));
              setErrorMsg(null);
            }}
          />
        </div>

        <div>
          <SelectInput
            id="booking-children"
            label={t.bookingBar.childrenLabel}
            value={children}
            options={childOptions}
            onChange={(e) => setChildren(Number(e.target.value))}
          />
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <Button type="submit" variant="primary" className="w-full lg:w-auto lg:px-6">
            <CalendarCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{t.bookingBar.submitLabel}</span>
          </Button>
        </div>
      </div>

      {errorMsg && (
        <p role="alert" className="mt-3 text-sm font-medium text-primary">
          {errorMsg}
        </p>
      )}
    </form>
  );
};
