import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildBookingUrl,
  getOffsetIsoDate,
  getTodayIsoDate,
  parseBookingQuery,
  validateBookingSearch,
} from './booking';

test('getTodayIsoDate and getOffsetIsoDate format dates deterministically', () => {
  const ref = new Date(2026, 10, 17); // 2026-11-17
  assert.equal(getTodayIsoDate(ref), '2026-11-17');
  assert.equal(getOffsetIsoDate(2, ref), '2026-11-19');
});

test('validateBookingSearch rejects missing dates, past check-in, and invalid checkout order', () => {
  const today = '2026-11-17';

  assert.deepEqual(
    validateBookingSearch({ checkIn: '', checkOut: '2026-11-19', adults: 2, children: 0 }, today),
    { valid: false, errorKey: 'missingDates' }
  );

  assert.deepEqual(
    validateBookingSearch({ checkIn: '2026-11-16', checkOut: '2026-11-18', adults: 2, children: 0 }, today),
    { valid: false, errorKey: 'invalidPastDate' }
  );

  assert.deepEqual(
    validateBookingSearch({ checkIn: '2026-11-20', checkOut: '2026-11-20', adults: 2, children: 0 }, today),
    { valid: false, errorKey: 'invalidOrder' }
  );

  assert.deepEqual(
    validateBookingSearch({ checkIn: '2026-11-20', checkOut: '2026-11-22', adults: 0, children: 0 }, today),
    { valid: false, errorKey: 'invalidAdults' }
  );

  assert.deepEqual(
    validateBookingSearch({ checkIn: '2026-11-20', checkOut: '2026-11-22', adults: 2, children: 1 }, today),
    { valid: true }
  );
});

test('buildBookingUrl and parseBookingQuery round-trip search parameters safely', () => {
  const url = buildBookingUrl({
    roomSlug: '3-bed-room',
    checkIn: '2026-11-20',
    checkOut: '2026-11-22',
    adults: 3,
    children: 1,
  });
  assert.equal(url, '/book?room=3-bed-room&checkIn=2026-11-20&checkOut=2026-11-22&adults=3&children=1');

  const query = url.split('?')[1];
  assert.deepEqual(parseBookingQuery(query), {
    roomSlug: '3-bed-room',
    checkIn: '2026-11-20',
    checkOut: '2026-11-22',
    adults: 3,
    children: 1,
  });
});
