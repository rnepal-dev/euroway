import { BookingSearchValues } from '../types/hotel';

export interface DateValidationResult {
  valid: boolean;
  errorKey?: 'missingDates' | 'invalidOrder' | 'invalidPastDate' | 'invalidAdults';
}

export function getTodayIsoDate(referenceDate = new Date()): string {
  const year = referenceDate.getFullYear();
  const month = String(referenceDate.getMonth() + 1).padStart(2, '0');
  const day = String(referenceDate.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function getOffsetIsoDate(daysFromToday: number, referenceDate = new Date()): string {
  const target = new Date(referenceDate);
  target.setDate(target.getDate() + daysFromToday);
  return getTodayIsoDate(target);
}

export function validateBookingSearch(
  values: BookingSearchValues,
  todayIso = getTodayIsoDate()
): DateValidationResult {
  if (!values.checkIn || !values.checkOut) {
    return { valid: false, errorKey: 'missingDates' };
  }
  if (values.checkIn < todayIso) {
    return { valid: false, errorKey: 'invalidPastDate' };
  }
  if (values.checkOut <= values.checkIn) {
    return { valid: false, errorKey: 'invalidOrder' };
  }
  if (!Number.isFinite(values.adults) || values.adults < 1) {
    return { valid: false, errorKey: 'invalidAdults' };
  }
  return { valid: true };
}

export function buildBookingUrl(values: Partial<BookingSearchValues>): string {
  const params = new URLSearchParams();
  if (values.roomSlug) {
    params.set('room', values.roomSlug);
  }
  if (values.checkIn) {
    params.set('checkIn', values.checkIn);
  }
  if (values.checkOut) {
    params.set('checkOut', values.checkOut);
  }
  if (typeof values.adults === 'number' && values.adults > 0) {
    params.set('adults', String(values.adults));
  }
  if (typeof values.children === 'number' && values.children >= 0) {
    params.set('children', String(values.children));
  }
  const query = params.toString();
  return query ? `/book?${query}` : '/book';
}

export function parseBookingQuery(search: string): Partial<BookingSearchValues> {
  const params = new URLSearchParams(search);
  const checkIn = params.get('checkIn') || undefined;
  const checkOut = params.get('checkOut') || undefined;
  const roomSlug = params.get('room') || undefined;
  const adultsRaw = params.get('adults');
  const childrenRaw = params.get('children');

  const adults = adultsRaw ? Number.parseInt(adultsRaw, 10) : undefined;
  const children = childrenRaw ? Number.parseInt(childrenRaw, 10) : undefined;

  return {
    roomSlug,
    checkIn,
    checkOut,
    adults: adults && Number.isFinite(adults) && adults > 0 ? adults : undefined,
    children: children !== undefined && Number.isFinite(children) && children >= 0 ? children : undefined,
  };
}
