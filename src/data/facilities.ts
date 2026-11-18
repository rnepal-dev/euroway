import { FacilityCategoryData } from '../types/hotel';

export const FACILITY_CATEGORIES: FacilityCategoryData[] = [
  {
    id: 'hotel-services',
    title: {
      en: 'Hotel Services',
      sv: 'Hotelltjänster',
    },
    description: {
      en: 'Practical everyday services available inside Euroway Hotel for business and leisure stays.',
      sv: 'Praktiska tjänster på Euroway Hotel för både affärs- och fritidsresenärer.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'front-desk',
        iconName: 'ConciergeBell',
        label: { en: 'Front desk & guest assistance', sv: 'Reception och gästservice' },
        detail: {
          en: 'Pre-arrival check-in details are sent 5 days before arrival; please confirm late-arrival desk hours directly with the hotel.',
          sv: 'Incheckningsinformation skickas 5 dagar före ankomst; vänligen bekräfta receptionens sena öppettider direkt med hotellet.',
        },
      },
      {
        id: 'luggage',
        iconName: 'Luggage',
        label: { en: 'Luggage storage', sv: 'Bagageförvaring' },
        detail: {
          en: 'Store bags safely before check-in or after check-out.',
          sv: 'Förvara bagage tryggt före incheckning eller efter utcheckning.',
        },
      },
      {
        id: 'laundry',
        iconName: 'Shirt',
        label: { en: 'Laundry facilities', sv: 'Tvättmöjligheter' },
        detail: {
          en: 'On-site laundry access suitable for extended work stays and families.',
          sv: 'Tillgång till tvättmöjligheter för längre vistelser och familjer.',
        },
      },
      {
        id: 'smoke-free',
        iconName: 'Ban',
        label: { en: 'Completely non-smoking premises', sv: 'Helt rökfria lokaler' },
        detail: {
          en: 'All guest rooms and shared interior spaces are smoke-free.',
          sv: 'Samtliga gästrum och gemensamma utrymmen är rökfria.',
        },
      },
      {
        id: 'lobby-tv',
        iconName: 'Tv',
        label: { en: 'Lobby lounge with TV', sv: 'Lobby med TV-hörna' },
        detail: {
          en: 'Comfortable shared seating area near reception.',
          sv: 'Bekväm sällskapsyta och TV-hörna i anslutning till receptionen.',
        },
      },
      {
        id: 'hygiene',
        iconName: 'ShieldCheck',
        label: { en: 'High-temperature linen care', sv: 'Hygien och tvättrutiner' },
        detail: {
          en: 'Property cleaned with disinfectant; sheets and towels washed at 60°C or hotter.',
          sv: 'Rummen rengörs med desinfektionsmedel och lakan samt handdukar tvättas i minst 60°C.',
        },
      },
    ],
  },
  {
    id: 'in-room',
    title: {
      en: 'In-Room Amenities',
      sv: 'Rumsutrustning',
    },
    description: {
      en: 'Every room category includes practical appliances so you can work, relax, and prepare light snacks.',
      sv: 'Varje rumskategori är utrustad med praktiska bekvämligheter för arbete, vila och enklare måltider.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'wifi',
        iconName: 'Wifi',
        label: { en: 'Free in-room Wi-Fi', sv: 'Gratis Wi-Fi på rummet' },
        detail: {
          en: 'Complimentary wireless internet across all guest rooms.',
          sv: 'Kostnadsfritt trådlöst internet i alla gästrum.',
        },
      },
      {
        id: 'flat-tv',
        iconName: 'Monitor',
        label: { en: '32-inch flat-screen cable TV', sv: '32-tums platt-TV med kabelkanaler' },
      },
      {
        id: 'fridge',
        iconName: 'Refrigerator',
        label: { en: 'In-room refrigerator', sv: 'Kylskåp på rummet' },
      },
      {
        id: 'microwave',
        iconName: 'Microwave',
        label: { en: 'Microwave oven', sv: 'Mikrovågsugn' },
      },
      {
        id: 'kettle',
        iconName: 'Coffee',
        label: { en: 'Electric kettle', sv: 'Vattenkokare' },
      },
      {
        id: 'linens',
        iconName: 'BedDouble',
        label: { en: 'Fresh bed sheets included', sv: 'Sängkläder ingår' },
      },
    ],
  },
  {
    id: 'bathroom',
    title: {
      en: 'Bathroom Features',
      sv: 'Badrumsutrustning',
    },
    description: {
      en: 'Clean, private bathrooms stocked with daily essentials in every room.',
      sv: 'Rena, privata badrum med det viktigaste för en bekväm vistelse.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'private-bath',
        iconName: 'Bath',
        label: { en: 'Private en-suite bathroom', sv: 'Privat badrum' },
      },
      {
        id: 'shower-only',
        iconName: 'Droplets',
        label: { en: 'Private shower', sv: 'Dusch' },
      },
      {
        id: 'toiletries',
        iconName: 'Sparkles',
        label: { en: 'Complimentary toiletries', sv: 'Gratis toalettartiklar' },
      },
      {
        id: 'towels',
        iconName: 'Layers',
        label: { en: 'Fresh towels provided', sv: 'Handdukar ingår' },
      },
    ],
  },
  {
    id: 'accessibility',
    title: {
      en: 'Accessibility',
      sv: 'Tillgänglighet',
    },
    description: {
      en: 'Published accessibility features to help guests plan a smooth stay. Contact us ahead of arrival for specific room requests.',
      sv: 'Publicerade tillgänglighetsfunktioner för en smidig vistelse. Kontakta oss gärna före ankomst vid särskilda önskemål.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'elevator',
        iconName: 'ArrowUpDown',
        label: { en: 'Elevator access', sv: 'Hiss finns i byggnaden' },
      },
      {
        id: 'accessible-rooms',
        iconName: 'Accessibility',
        label: { en: 'Accessible rooms & bathrooms', sv: 'Tillgänglighetsanpassade rum och badrum' },
        detail: {
          en: 'Rooms and facilities adapted for guests with reduced mobility.',
          sv: 'Rum och faciliteter anpassade för gäster med nedsatt rörlighet.',
        },
      },
      {
        id: 'grab-bars',
        iconName: 'Shield',
        label: { en: 'Toilet grab bars / armrests', sv: 'Stödhandtag / armstöd vid toalett' },
      },
      {
        id: 'wheelchair',
        iconName: 'Accessibility',
        label: { en: 'Wheelchair availability', sv: 'Rullstol tillgänglig vid behov' },
      },
    ],
  },
  {
    id: 'dining',
    title: {
      en: 'Dining & Breakfast',
      sv: 'Frukost och mat',
    },
    description: {
      en: 'Start the morning with a complimentary breakfast buffet before heading into Gothenburg or out onto Hisingen.',
      sv: 'Börja dagen med kostnadsfri frukostbuffé innan du ger dig ut i Göteborg eller till företagen på Hisingen.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'free-breakfast',
        iconName: 'Utensils',
        label: { en: 'Complimentary continental breakfast', sv: 'Kostnadsfri kontinental frukost' },
        detail: {
          en: 'Included with standard adult stays; individually wrapped breakfast options are also available.',
          sv: 'Ingår i vistelsen; individuellt förpackade frukostalternativ finns tillgängliga.',
        },
      },
      {
        id: 'dining-room',
        iconName: 'Coffee',
        label: { en: 'On-site breakfast dining room', sv: 'Matsal för frukostservering' },
      },
    ],
  },
  {
    id: 'parking-transport',
    title: {
      en: 'Parking & Transportation',
      sv: 'Parkering och kommunikationer',
    },
    description: {
      en: 'Direct E6 motorway access at Exit 78 and straightforward bus links to central Gothenburg.',
      sv: 'Direkt anslutning till E6 vid avfart 78 och smidiga bussförbindelser till centrala Göteborg.',
    },
    scope: 'hotel',
    items: [
      {
        id: 'garage-parking',
        iconName: 'Car',
        label: { en: 'Free garage self-parking', sv: 'Fri självparkering i garage' },
        detail: {
          en: 'Included in your stay. Garage access instructions are provided in your key packet at check-in.',
          sv: 'Ingår i priset. Instruktioner för garaget finns i nyckelfodralet vid ankomst.',
        },
      },
      {
        id: 'highway',
        iconName: 'Route',
        label: { en: 'E6 Exit 78 (Backadalsmotet)', sv: 'Avfart 78 Backadalsmotet vid E6' },
      },
      {
        id: 'bus-access',
        iconName: 'Bus',
        label: { en: 'Backadalsmotet bus stop (Green Express)', sv: 'Busshållplats Backadalsmotet (Grön Express)' },
        detail: {
          en: 'Approximately 10 minutes by bus to Nordstaden in central Gothenburg.',
          sv: 'Cirka 10 minuter med buss till Nordstaden i centrala Göteborg.',
        },
      },
    ],
  },
  {
    id: 'building-nearby',
    title: {
      en: 'In the Stigs Center Building & Nearby',
      sv: 'I Stigs Center-byggnaden och närområdet',
    },
    description: {
      en: 'Independently operated restaurants, leisure venues, and everyday services located in the same building complex or immediately adjacent.',
      sv: 'Fristående restauranger, fritidsaktiviteter och service i samma byggnadskomplex eller i direkt anslutning.',
    },
    scope: 'nearby',
    items: [
      {
        id: 'restaurants-building',
        iconName: 'UtensilsCrossed',
        label: { en: 'Restaurants in the building', sv: 'Restauranger i huset' },
        detail: {
          en: 'Independently operated dining options serving à la carte, pizza, sushi, Asian dishes, and home-style Swedish food.',
          sv: 'Fristående restauranger i byggnaden som erbjuder à la carte, pizza, sushi, asiatisk mat och husmanskost.',
        },
      },
      {
        id: 'bowling',
        iconName: 'CircleDot',
        label: { en: 'Bowling hall in the same building', sv: 'Bowlinghall i samma hus' },
        detail: {
          en: 'Independently operated bowling venue located inside Stigs Center.',
          sv: 'Bowlinghall belägen i samma byggnad på Stigs Center.',
        },
      },
      {
        id: 'gym-sauna',
        iconName: 'Dumbbell',
        label: { en: 'Adjacent fitness gym & sauna', sv: 'Gym och bastu i direkt anslutning' },
        detail: {
          en: 'Fitness facility and sauna located in the building complex (independently operated).',
          sv: 'Träningsanläggning och bastu i anslutande lokaler (fristående verksamhet).',
        },
      },
      {
        id: 'atm-services',
        iconName: 'Banknote',
        label: { en: 'ATM & local retail at Stigs Center', sv: 'Bankomat och närservice vid Stigs Center' },
        detail: {
          en: 'Nearby Subway, bakery, auto services, and ATM access at Stigs Center.',
          sv: 'Subway, bageri, bilservice och bankomat finns i närområdet vid Stigs Center.',
        },
      },
    ],
  },
];
