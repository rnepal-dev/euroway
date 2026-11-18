import { ImageAsset } from '../types/hotel';

/**
 * Centralized Manifest of Authentic Euroway Hotel Photography.
 * All files are local copies downloaded directly from https://eurowayhotel.se/
 * No external stock imagery or generated hotel photos are used.
 */
export const HOTEL_IMAGES: Record<string, ImageAsset> = {
  // Exterior & Public Areas
  'exterior-night-wide': {
    id: 'exterior-night-wide',
    localPath: '/images/gallery/1.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/1.jpg',
    alt: {
      en: 'Euroway Hotel exterior at Stigs Center in Hisings Backa with illuminated hotel sign and guest parking',
      sv: 'Euroway Hotels fasad vid Stigs Center i Hisings Backa med belyst skylt och gästparkering',
    },
    caption: {
      en: 'Euroway Hotel at Stigs Center, Hisings Backa',
      sv: 'Euroway Hotel vid Stigs Center, Hisings Backa',
    },
    category: 'exterior',
    aspectHint: 'landscape',
  },
  'exterior-sign': {
    id: 'exterior-sign',
    localPath: '/images/hotel/euroway-hotel-1.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/backgrounds/euroway-hotel-1.jpg',
    alt: {
      en: 'Close-up of the illuminated Euroway Hotel exterior facade and ground-floor restaurant windows',
      sv: 'Närbild på Euroway Hotels belysta fasad och restaurangfönster',
    },
    caption: {
      en: 'Building exterior and restaurant frontage',
      sv: 'Hotellets fasad och restaurangdel',
    },
    category: 'exterior',
    aspectHint: 'portrait',
  },
  'exterior-entrance': {
    id: 'exterior-entrance',
    localPath: '/images/gallery/2.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/2.jpg',
    alt: {
      en: 'Daytime street-level entrance marked Entré Hotel, Restaurant & Bowling at Stigs Center',
      sv: 'Entré i markplan märkt Entré Hotel, Restaurang & Bowling vid Stigs Center',
    },
    caption: {
      en: 'Main hotel entrance (Entré Hotel) at Importgatan 2D',
      sv: 'Huvudentré (Entré Hotel) vid Importgatan 2D',
    },
    category: 'exterior',
    aspectHint: 'landscape',
  },
  'reception-counter': {
    id: 'reception-counter',
    localPath: '/images/hotel/hero-2.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/slider/3.jpg',
    alt: {
      en: 'Euroway Hotel stone-clad reception and lobby service desk',
      sv: 'Euroway Hotels reception och servicedisk i lobbyn',
    },
    caption: {
      en: 'Hotel reception and welcome desk',
      sv: 'Hotellets reception och välkomstdisk',
    },
    category: 'interior',
    aspectHint: 'landscape',
  },
  'lobby-lounge': {
    id: 'lobby-lounge',
    localPath: '/images/hotel/euroway-hotel-5.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/backgrounds/euroway-hotel-5.jpg',
    alt: {
      en: 'Guest lounge area with patterned sofas, armchairs, coffee tables, and wall-mounted television',
      sv: 'Gästlounge med soffor, fåtöljer, soffbord och väggmonterad TV',
    },
    caption: {
      en: 'Lobby lounge seating area with television',
      sv: 'Sittgrupp och TV i hotellobbyn',
    },
    category: 'interior',
    aspectHint: 'landscape',
  },
  'hotel-corridor': {
    id: 'hotel-corridor',
    localPath: '/images/hotel/euroway-hotel-4.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/backgrounds/euroway-hotel-4.jpg',
    alt: {
      en: 'Well-lit hotel guestroom corridor with numbered doors and warm wall sconces',
      sv: 'Upplyst hotellkorridor med numrerade rumsdörrar och vägglampor',
    },
    caption: {
      en: 'Guestroom hallway',
      sv: 'Korridor till gästrummen',
    },
    category: 'interior',
    aspectHint: 'landscape',
  },
  'breakfast-dining': {
    id: 'breakfast-dining',
    localPath: '/images/hotel/hero-1.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/slider/1.jpg',
    alt: {
      en: 'Euroway Hotel breakfast and dining room with wooden flooring, dark dining chairs, and bright windows',
      sv: 'Euroway Hotels frukost- och matsal med trägolv, mörka stolar och stora fönster',
    },
    caption: {
      en: 'Complimentary breakfast dining room',
      sv: 'Matsal för hotellets kostnadsfria frukost',
    },
    category: 'dining',
    aspectHint: 'landscape',
  },
  'breakfast-buffet': {
    id: 'breakfast-buffet',
    localPath: '/images/gallery/4.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/4.jpg',
    alt: {
      en: 'Breakfast buffet service counter with cereal dispensers, tableware, and communal dining tables',
      sv: 'Frukostbuffé med serveringsdisk, porslin och sittplatser i matsalen',
    },
    caption: {
      en: 'Continental breakfast buffet station',
      sv: 'Kontinental frukostbuffé',
    },
    category: 'dining',
    aspectHint: 'landscape',
  },

  // Single Room Economy (ID 1)
  'room-1-main': {
    id: 'room-1-main',
    localPath: '/images/rooms/1-1.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/1-1.png',
    alt: {
      en: 'Single Room Economy with single bed, dark armchair, bedside table, and sunlit windows',
      sv: 'Enkelrum Ekonomi med enkelsäng, fåtölj, sängbord och fönster',
    },
    caption: {
      en: 'Single Room Economy — bedroom view',
      sv: 'Enkelrum Ekonomi — sovrumsdel',
    },
    category: 'rooms',
    roomId: '1',
    aspectHint: 'landscape',
  },
  'room-1-desk': {
    id: 'room-1-desk',
    localPath: '/images/rooms/1-5.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/1-5.png',
    alt: {
      en: 'Work desk, reading lamp, mirror, and wall-mounted flat-screen TV inside guest room',
      sv: 'Skrivbord, läslampa, spegel och väggmonterad platt-TV i gästrummet',
    },
    caption: {
      en: 'In-room work desk and flat-screen TV',
      sv: 'Skrivbord och platt-TV på rummet',
    },
    category: 'rooms',
    roomId: '1',
    aspectHint: 'landscape',
  },
  'room-1-bath': {
    id: 'room-1-bath',
    localPath: '/images/rooms/1-4.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/1-4.png',
    alt: {
      en: 'Private tiled bathroom with sink, mirror, toilet, and walk-in shower curtain',
      sv: 'Privat helkaklat badrum med handfat, spegel, toalett och dusch',
    },
    caption: {
      en: 'Private en-suite bathroom with shower',
      sv: 'Privat badrum med dusch',
    },
    category: 'rooms',
    roomId: '1',
    aspectHint: 'landscape',
  },
  'room-1-coffee': {
    id: 'room-1-coffee',
    localPath: '/images/rooms/1-3.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/1-3.png',
    alt: {
      en: 'In-room tea and coffee cup station with work desk and TV in background',
      sv: 'Kaffe- och tekoppar på rummet med skrivbord och TV i bakgrunden',
    },
    caption: {
      en: 'In-room tea and coffee essentials',
      sv: 'Te- och kaffefaciliteter på rummet',
    },
    category: 'amenities',
    roomId: '1',
    aspectHint: 'landscape',
  },
  'room-1-daybed': {
    id: 'room-1-daybed',
    localPath: '/images/rooms/1-761356.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/1-761356.png',
    alt: {
      en: 'Single guest room with white bed frame, reading light, armchair, and window',
      sv: 'Enkelrum med vit sängram, läslampa, fåtölj och fönster',
    },
    caption: {
      en: 'Single Room layout with seating chair',
      sv: 'Enkelrum med fåtölj',
    },
    category: 'rooms',
    roomId: '1',
    aspectHint: 'landscape',
  },

  // Double Room (ID 2)
  'room-2-main': {
    id: 'room-2-main',
    localPath: '/images/rooms/2-1.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/2-1.png',
    alt: {
      en: 'Double Room showing beds, armchairs, small round table, work desk, flat-screen TV, microwave, and refrigerator',
      sv: 'Dubbelrum med sängar, fåtölj, litet bord, skrivbord, platt-TV, mikrovågsugn och kylskåp',
    },
    caption: {
      en: 'Double Room with seating corner, TV, fridge, and microwave',
      sv: 'Dubbelrum med sitthörna, TV, kylskåp och mikrovågsugn',
    },
    category: 'rooms',
    roomId: '2',
    aspectHint: 'landscape',
  },
  'room-2-alt': {
    id: 'room-2-alt',
    localPath: '/images/rooms/2-2.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/2-2.png',
    alt: {
      en: 'Double Room with two pushed-together beds, armchair by wide windows, and hardwood-style flooring',
      sv: 'Dubbelrum med två sängar, fåtölj vid stora fönster och trägolv',
    },
    caption: {
      en: 'Double Room sleeping and lounge area',
      sv: 'Sov- och sittdel i dubbelrum',
    },
    category: 'rooms',
    roomId: '2',
    aspectHint: 'landscape',
  },
  'room-2-gallery': {
    id: 'room-2-gallery',
    localPath: '/images/gallery/6.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/6.jpg',
    alt: {
      en: 'Twin beds with white linens and warm bedside reading lamps against accent wall',
      sv: 'Två enkelsängar med vita sängkläder och sänglampor',
    },
    caption: {
      en: 'Twin bed arrangement',
      sv: 'Tvåbäddsrum',
    },
    category: 'rooms',
    roomId: '2',
    aspectHint: 'landscape',
  },

  // 3-Bed Room (ID 3)
  'room-3-main': {
    id: 'room-3-main',
    localPath: '/images/rooms/3-1.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/3-1.png',
    alt: {
      en: '3-Bed Room featuring three individual beds, corner armchair, bedside tables, and wide window',
      sv: 'Trebäddsrum med tre enkelsängar, fåtölj, sängbord och stort fönster',
    },
    caption: {
      en: '3-Bed Room for small groups or families',
      sv: 'Trebäddsrum för mindre sällskap eller familjer',
    },
    category: 'rooms',
    roomId: '3',
    aspectHint: 'landscape',
  },
  'room-3-gallery': {
    id: 'room-3-gallery',
    localPath: '/images/gallery/7.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/7.jpg',
    alt: {
      en: 'Bright 3-Bed Room view showing three single beds and dark armchair near window',
      sv: 'Ljust trebäddsrum med tre enkelsängar och fåtölj vid fönstret',
    },
    caption: {
      en: '3-Bed Room daylight view',
      sv: 'Trebäddsrum i dagsljus',
    },
    category: 'rooms',
    roomId: '3',
    aspectHint: 'landscape',
  },

  // 4-Bed Room (ID 4)
  'room-4-main': {
    id: 'room-4-main',
    localPath: '/images/rooms/4-1.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/4-1.png',
    alt: {
      en: '4-Bed Room with two floor beds and a two-tier bunk bed with individual reading lamps',
      sv: 'Fyrbäddsrum med två sängar och en våningssäng med individuella läslampor',
    },
    caption: {
      en: '4-Bed Room with twin beds and bunk bed',
      sv: 'Fyrbäddsrum med enkelsängar och våningssäng',
    },
    category: 'rooms',
    roomId: '4',
    aspectHint: 'landscape',
  },
  'room-4-gallery': {
    id: 'room-4-gallery',
    localPath: '/images/gallery/8.jpg',
    sourceUrl: 'https://eurowayhotel.se/en/img/gallery/8.jpg',
    alt: {
      en: 'Spacious 4-Bed family room showing bedside lamps, white linens, and bunk beds',
      sv: 'Rymligt fyrbäddsrum med sänglampor, vita lakan och våningssäng',
    },
    caption: {
      en: 'Family 4-Bed Room layout',
      sv: 'Familjerum med 4 bäddar',
    },
    category: 'rooms',
    roomId: '4',
    aspectHint: 'landscape',
  },

  // 5-Bed Room (ID 5)
  'room-5-main': {
    id: 'room-5-main',
    localPath: '/images/rooms/5-1.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/5-1.png',
    alt: {
      en: '5-Bed Room featuring three floor beds and a white bunk bed with reading lights',
      sv: 'Fembäddsrum med tre golvsängar och en vit våningssäng med läslampor',
    },
    caption: {
      en: '5-Bed Room sleeping up to five guests',
      sv: 'Fembäddsrum med plats för upp till fem gäster',
    },
    category: 'rooms',
    roomId: '5',
    aspectHint: 'landscape',
  },
  'room-5-alt': {
    id: 'room-5-alt',
    localPath: '/images/rooms/5-2.png',
    sourceUrl: 'https://eurowayhotel.se/img/rooms/5-2.png',
    alt: {
      en: 'Alternate angle of 5-Bed Room showing three single beds, nightstand, and bunk bed',
      sv: 'Alternativ vy av fembäddsrum med tre enkelsängar, sängbord och våningssäng',
    },
    caption: {
      en: '5-Bed Room interior view',
      sv: 'Interiörbild av fembäddsrum',
    },
    category: 'rooms',
    roomId: '5',
    aspectHint: 'landscape',
  },
};

export const GALLERY_ASSET_IDS: string[] = [
  'exterior-night-wide',
  'exterior-entrance',
  'reception-counter',
  'lobby-lounge',
  'breakfast-dining',
  'breakfast-buffet',
  'hotel-corridor',
  'room-1-main',
  'room-1-desk',
  'room-1-bath',
  'room-2-main',
  'room-2-gallery',
  'room-3-main',
  'room-4-main',
  'room-5-main',
];

export function getImageAsset(id: string): ImageAsset {
  return HOTEL_IMAGES[id] ?? HOTEL_IMAGES['exterior-night-wide'];
}
