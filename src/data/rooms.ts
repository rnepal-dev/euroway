import { RoomCategory } from '../types/hotel';

/**
 * Verified Room Categories from https://eurowayhotel.se/
 * Dynamic room availability and nightly rates are managed exclusively by Sirvoy on /book.
 */
export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: '1',
    slug: 'single-room-economy',
    name: {
      en: 'Single Room Economy',
      sv: 'Enkelrum Ekonomi',
    },
    shortDescription: {
      en: 'Practical 15 m² room for solo travelers with a single bed, work desk, private shower bathroom, and included breakfast.',
      sv: 'Praktiskt rum på 15 m² för ensamresenärer med enkelsäng, skrivbord, eget badrum med dusch och inkluderad frukost.',
    },
    fullDescription: {
      en: 'Designed for business visitors and solo guests looking for an uncomplicated, comfortable base in Gothenburg. The 15 m² room features a single bed, a dedicated work desk, an armchair, and practical everyday essentials including a 32-inch flat-screen TV, refrigerator, microwave, and electric kettle.',
      sv: 'Utformat för affärsresenärer och ensamresenärer som söker ett enkelt och bekvämt boende i Göteborg. Rummet på 15 m² erbjuder en enkelsäng, arbetsbord, fåtölj samt 32-tums platt-TV, kylskåp, mikrovågsugn och vattenkokare.',
    },
    maxAdults: 1,
    maxChildren: 0,
    maxGuests: 1,
    sizeSqm: 15,
    bedArrangement: {
      en: '1 Single Bed',
      sv: '1 enkelsäng',
    },
    images: ['room-1-main', 'room-1-desk', 'room-1-bath', 'room-1-coffee', 'room-1-daybed'],
    amenities: [
      { en: 'Free Wi-Fi', sv: 'Gratis Wi-Fi' },
      { en: 'Complimentary breakfast', sv: 'Frukost ingår' },
      { en: '32-inch flat-screen TV', sv: '32-tums platt-TV' },
      { en: 'Refrigerator & microwave', sv: 'Kylskåp och mikrovågsugn' },
      { en: 'Electric kettle', sv: 'Vattenkokare' },
      { en: 'Work desk & seating chair', sv: 'Skrivbord och fåtölj' },
    ],
    bathroomFeatures: [
      { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      { en: 'Shower', sv: 'Dusch' },
      { en: 'Towels & bed linen provided', sv: 'Handdukar och sängkläder ingår' },
      { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
    ],
    highlights: [
      { en: 'Free garage parking', sv: 'Fri garageparkering' },
      { en: 'Non-smoking room', sv: 'Rökfritt rum' },
      { en: '15 m² floor area', sv: '15 m² rumsyta' },
    ],
  },
  {
    id: '2',
    slug: 'double-room',
    name: {
      en: 'Double Room',
      sv: 'Dubbelrum',
    },
    shortDescription: {
      en: 'Comfortable 16 m² room for two guests with double or twin bedding, seating corner, private bathroom, and complimentary breakfast.',
      sv: 'Bekvämt rum på 16 m² för två gäster med dubbelsäng eller två enkelsängar, sitthörna, eget badrum och frukost.',
    },
    fullDescription: {
      en: 'Well suited for couples or colleagues traveling together on Hisingen or visiting Gothenburg. Each 16 m² Double Room provides comfortable bedding, a seating corner by the window, a work desk, and convenient in-room appliances including a refrigerator, microwave, electric kettle, and 32-inch flat-screen TV.',
      sv: 'Passar utmärkt för par eller kollegor som reser tillsammans till Hisingen eller Göteborg. Varje dubbelrum på 16 m² har bekväma sängar, sitthörna vid fönstret, skrivbord samt kylskåp, mikrovågsugn, vattenkokare och 32-tums platt-TV.',
    },
    maxAdults: 2,
    maxChildren: 0,
    maxGuests: 2,
    sizeSqm: 16,
    bedArrangement: {
      en: 'Double / Twin Bed',
      sv: 'Dubbel / tvåbädd',
    },
    images: ['room-2-main', 'room-2-alt', 'room-2-gallery', 'room-1-bath'],
    amenities: [
      { en: 'Free Wi-Fi', sv: 'Gratis Wi-Fi' },
      { en: 'Complimentary breakfast', sv: 'Frukost ingår' },
      { en: '32-inch flat-screen TV', sv: '32-tums platt-TV' },
      { en: 'Refrigerator & microwave', sv: 'Kylskåp och mikrovågsugn' },
      { en: 'Electric kettle', sv: 'Vattenkokare' },
      { en: 'Seating area & desk', sv: 'Sitthörna och skrivbord' },
    ],
    bathroomFeatures: [
      { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      { en: 'Shower', sv: 'Dusch' },
      { en: 'Towels & bed linen provided', sv: 'Handdukar och sängkläder ingår' },
      { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
    ],
    highlights: [
      { en: 'Free garage parking', sv: 'Fri garageparkering' },
      { en: 'Non-smoking room', sv: 'Rökfritt rum' },
      { en: '16 m² floor area', sv: '16 m² rumsyta' },
    ],
  },
  {
    id: '3',
    slug: '3-bed-room',
    name: {
      en: '3-Bed Room',
      sv: 'Trebäddsrum',
    },
    shortDescription: {
      en: 'Spacious 21 m² room featuring three individual beds, armchair seating, full in-room appliances, and breakfast included.',
      sv: 'Rymligt rum på 21 m² med tre enkelsängar, fåtölj, komplett rumsutrustning och inkluderad frukostbuffé.',
    },
    fullDescription: {
      en: 'A flexible 21 m² room tailored for three travelers, work crews, or small families. Three separate single beds ensure everyone gets comfortable rest, complemented by an armchair, bedside lamps, flat-screen TV, refrigerator, microwave, and kettle.',
      sv: 'Ett flexibelt rum på 21 m² anpassat för tre resenärer, arbetsteam eller mindre familjer. Tre separata enkelsängar ger god sovkomfort och kompletteras med fåtölj, sänglampor, platt-TV, kylskåp, mikrovågsugn och vattenkokare.',
    },
    maxAdults: 3,
    maxChildren: 2,
    maxGuests: 3,
    sizeSqm: 21,
    bedArrangement: {
      en: '3 Single Beds',
      sv: '3 enkelsängar',
    },
    images: ['room-3-main', 'room-3-gallery', 'room-1-desk', 'room-1-bath'],
    amenities: [
      { en: 'Free Wi-Fi', sv: 'Gratis Wi-Fi' },
      { en: 'Complimentary breakfast', sv: 'Frukost ingår' },
      { en: '32-inch flat-screen TV', sv: '32-tums platt-TV' },
      { en: 'Refrigerator & microwave', sv: 'Kylskåp och mikrovågsugn' },
      { en: 'Electric kettle', sv: 'Vattenkokare' },
      { en: 'Armchair & reading lamps', sv: 'Fåtölj och läslampor' },
    ],
    bathroomFeatures: [
      { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      { en: 'Shower', sv: 'Dusch' },
      { en: 'Towels & bed linen provided', sv: 'Handdukar och sängkläder ingår' },
      { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
    ],
    highlights: [
      { en: 'Free garage parking', sv: 'Fri garageparkering' },
      { en: 'Non-smoking room', sv: 'Rökfritt rum' },
      { en: '21 m² floor area', sv: '21 m² rumsyta' },
    ],
  },
  {
    id: '4',
    slug: '4-bed-room',
    name: {
      en: '4-Bed Room',
      sv: 'Fyrbäddsrum',
    },
    shortDescription: {
      en: 'Family-friendly 23 m² room with two floor beds and a two-tier bunk bed, private shower bathroom, and complimentary breakfast.',
      sv: 'Familjevänligt rum på 23 m² med två enkelsängar och våningssäng, eget badrum med dusch samt inkluderad frukost.',
    },
    fullDescription: {
      en: 'Ideal for families visiting Liseberg and Universeum or groups traveling along the E6 corridor. This 23 m² room pairs two standard beds with a sturdy bunk bed, giving up to four guests plenty of floor space alongside a refrigerator, microwave, kettle, and flat-screen TV.',
      sv: 'Perfekt för familjer som besöker Liseberg och Universeum eller grupper som reser längs E6. Rummet på 23 m² kombinerar två ordinarie sängar med en våningssäng för upp till fyra gäster, utrustat med kylskåp, mikrovågsugn, vattenkokare och platt-TV.',
    },
    maxAdults: 4,
    maxChildren: 2,
    maxGuests: 4,
    sizeSqm: 23,
    bedArrangement: {
      en: '2 Single Beds + 1 Bunk Bed (4 Beds)',
      sv: '2 enkelsängar + 1 våningssäng (4 bäddar)',
    },
    images: ['room-4-main', 'room-4-gallery', 'room-1-desk', 'room-1-bath'],
    amenities: [
      { en: 'Free Wi-Fi', sv: 'Gratis Wi-Fi' },
      { en: 'Complimentary breakfast', sv: 'Frukost ingår' },
      { en: '32-inch flat-screen TV', sv: '32-tums platt-TV' },
      { en: 'Refrigerator & microwave', sv: 'Kylskåp och mikrovågsugn' },
      { en: 'Electric kettle', sv: 'Vattenkokare' },
      { en: 'Individual reading lights', sv: 'Individuella läslampor' },
    ],
    bathroomFeatures: [
      { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      { en: 'Shower', sv: 'Dusch' },
      { en: 'Towels & bed linen provided', sv: 'Handdukar och sängkläder ingår' },
      { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
    ],
    highlights: [
      { en: 'Free garage parking', sv: 'Fri garageparkering' },
      { en: 'Non-smoking room', sv: 'Rökfritt rum' },
      { en: '23 m² floor area', sv: '23 m² rumsyta' },
    ],
  },
  {
    id: '5',
    slug: '5-bed-room',
    name: {
      en: '5-Bed Room',
      sv: 'Fembäddsrum',
    },
    shortDescription: {
      en: 'Our largest 25 m² group and family room with three floor beds and a bunk bed, private bathroom, and free breakfast & parking.',
      sv: 'Vårt största familje- och grupprum på 25 m² med tre enkelsängar och våningssäng, eget badrum samt frukost och parkering.',
    },
    fullDescription: {
      en: 'Designed for larger families, sports teams, and project groups needing affordable, practical accommodation together in Gothenburg. At 25 m², the 5-Bed Room combines three individual floor beds and a bunk bed with individual reading lamps, refrigerator, microwave, kettle, and flat-screen TV.',
      sv: 'Utformat för större familjer, idrottslag och arbetsgrupper som vill bo bekvämt och prisvärt tillsammans i Göteborg. På 25 m² rymmer fembäddsrummet tre enkelsängar och en våningssäng med läslampor, kylskåp, mikrovågsugn, vattenkokare och platt-TV.',
    },
    maxAdults: 5,
    maxChildren: 2,
    maxGuests: 5,
    sizeSqm: 25,
    bedArrangement: {
      en: '3 Single Beds + 1 Bunk Bed (5 Beds)',
      sv: '3 enkelsängar + 1 våningssäng (5 bäddar)',
    },
    images: ['room-5-main', 'room-5-alt', 'room-1-desk', 'room-1-bath'],
    amenities: [
      { en: 'Free Wi-Fi', sv: 'Gratis Wi-Fi' },
      { en: 'Complimentary breakfast', sv: 'Frukost ingår' },
      { en: '32-inch flat-screen TV', sv: '32-tums platt-TV' },
      { en: 'Refrigerator & microwave', sv: 'Kylskåp och mikrovågsugn' },
      { en: 'Electric kettle', sv: 'Vattenkokare' },
      { en: 'Individual reading lights', sv: 'Individuella läslampor' },
    ],
    bathroomFeatures: [
      { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      { en: 'Shower', sv: 'Dusch' },
      { en: 'Towels & bed linen provided', sv: 'Handdukar och sängkläder ingår' },
      { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
    ],
    highlights: [
      { en: 'Free garage parking', sv: 'Fri garageparkering' },
      { en: 'Non-smoking room', sv: 'Rökfritt rum' },
      { en: '25 m² floor area', sv: '25 m² rumsyta' },
    ],
  },
];

export function getRoomBySlug(slug: string): RoomCategory | undefined {
  return ROOM_CATEGORIES.find((room) => room.slug === slug);
}
