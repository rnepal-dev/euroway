import { NavLinkItem } from '../types/hotel';

export const SITE_CONFIG = {
  hotelName: 'Euroway Hotel',
  legalOperator: 'Euroway Hotell M&M AB',
  classification: {
    en: '3-Star Hotel',
    sv: '3-stjärnigt hotell',
  },
  address: {
    street: 'Importgatan 2D',
    postalCode: '422 46',
    city: 'Hisings Backa',
    region: 'Gothenburg',
    country: {
      en: 'Sweden',
      sv: 'Sverige',
    },
    area: 'Stigs Center, Hisingen',
  },
  contact: {
    phoneDisplay: '+46 31 58 07 50',
    phoneLocal: '031-580750',
    phoneHref: 'tel:+4631580750',
    email: 'mail@eurowayhotel.se',
    emailHref: 'mailto:mail@eurowayhotel.se',
  },
  location: {
    highwayExit: 'E6 · Exit 78 (Backadalsmotet)',
    busStop: 'Backadalsmotet',
    entranceLandmark: 'Entré Hotel (beside Batterilagret / Subway)',
    coordinates: {
      lat: 57.7438,
      lng: 11.9885,
    },
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Euroway+Hotel+Importgatan+2D+422+46+Hisings+Backa+Sweden',
    openStreetMapEmbedUrl:
      'https://www.openstreetmap.org/export/embed.html?bbox=11.9765%2C57.7378%2C12.0005%2C57.7498&layer=mapnik&marker=57.7438%2C11.9885',
  },
  policies: {
    checkInTime: '15:00',
    checkOutTime: '11:00',
    receptionHoursReported: '08:30 – 17:00',
    petsAllowed: false,
    smokingAllowed: false,
  },
  officialSiteUrl: 'https://eurowayhotel.se/en/index.html',
  bookingRoute: '/book',
  defaultLocale: 'en' as const,
  supportedLocales: [
    { code: 'en' as const, label: 'EN', nativeName: 'English' },
    { code: 'sv' as const, label: 'SV', nativeName: 'Svenska' },
  ],
  headerNav: [
    { path: '/', labelKey: 'home' },
    { path: '/rooms', labelKey: 'rooms' },
    { path: '/facilities', labelKey: 'facilities' },
    { path: '/gallery', labelKey: 'gallery' },
    { path: '/about', labelKey: 'about' },
    { path: '/contact', labelKey: 'contact' },
  ] satisfies NavLinkItem[],
  footerNav: [
    { path: '/', labelKey: 'home' },
    { path: '/rooms', labelKey: 'rooms' },
    { path: '/facilities', labelKey: 'facilities' },
    { path: '/gallery', labelKey: 'gallery' },
    { path: '/about', labelKey: 'about' },
    { path: '/location', labelKey: 'location' },
    { path: '/faq', labelKey: 'faq' },
    { path: '/contact', labelKey: 'contact' },
  ] satisfies NavLinkItem[],
  seo: {
    titleTemplate: '%s | Euroway Hotel Gothenburg',
    defaultTitle: {
      en: 'Euroway Hotel – Comfortable 3-Star Stay in Gothenburg',
      sv: 'Euroway Hotel – Prisvärt 3-stjärnigt hotell i Göteborg',
    },
    defaultDescription: {
      en: 'Comfortable 3-star hotel at Stigs Center in Hisings Backa, Gothenburg. Includes complimentary breakfast, free Wi-Fi, and free garage parking near the E6 highway.',
      sv: 'Bekvämt 3-stjärnigt hotell vid Stigs Center i Hisings Backa, Göteborg. Inkluderar gratis frukost, fritt Wi-Fi och fri garageparkering nära E6.',
    },
  },
} as const;
