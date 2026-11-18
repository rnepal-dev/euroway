import { RoomCategory } from '../types/hotel';

export type CapacityFilter = 'all' | '1' | '2' | '3+';

export function filterRoomsByCapacity(
  rooms: RoomCategory[],
  filter: CapacityFilter
): RoomCategory[] {
  switch (filter) {
    case '1':
      return rooms.filter((room) => room.maxGuests >= 1);
    case '2':
      return rooms.filter((room) => room.maxGuests >= 2);
    case '3+':
      return rooms.filter((room) => room.maxGuests >= 3);
    case 'all':
    default:
      return rooms;
  }
}

export function getRelatedRooms(
  rooms: RoomCategory[],
  currentSlug: string,
  limit = 3
): RoomCategory[] {
  return rooms.filter((room) => room.slug !== currentSlug).slice(0, limit);
}
