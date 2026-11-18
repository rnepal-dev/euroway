import test from 'node:test';
import assert from 'node:assert/strict';
import { ROOM_CATEGORIES } from '../data/rooms';
import { filterRoomsByCapacity, getRelatedRooms } from './rooms';

test('filterRoomsByCapacity filters verified room categories accurately', () => {
  assert.equal(filterRoomsByCapacity(ROOM_CATEGORIES, 'all').length, 5);
  assert.equal(filterRoomsByCapacity(ROOM_CATEGORIES, '2').length, 4);
  assert.deepEqual(
    filterRoomsByCapacity(ROOM_CATEGORIES, '3+').map((r) => r.slug),
    ['3-bed-room', '4-bed-room', '5-bed-room']
  );
});

test('getRelatedRooms excludes active room and honors limit', () => {
  const related = getRelatedRooms(ROOM_CATEGORIES, 'double-room', 3);
  assert.equal(related.length, 3);
  assert.equal(
    related.some((r) => r.slug === 'double-room'),
    false
  );
});
