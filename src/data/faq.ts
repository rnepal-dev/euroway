import { FaqItem } from '../types/hotel';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'check-in',
    question: {
      en: 'What time is check-in?',
      sv: 'Vilken tid är incheckning?',
    },
    answer: {
      en: 'Standard check-in is from 15:00 (3:00 PM). Early check-in may be arranged subject to room availability. Guests typically receive pre-arrival check-in instructions by email 5 days prior to arrival.',
      sv: 'Ordinarie incheckning sker från kl. 15:00. Tidig incheckning kan erbjudas i mån av tillgång. Gäster får normalt incheckningsinstruktioner via e-post 5 dagar före ankomst.',
    },
    confirmationNote: {
      en: 'Note: The official website publishes both 24-hour front desk service and reception hours of 08:30–17:00. If you plan to arrive late at night, please contact +46 31 58 07 50 before arrival to confirm key pickup.',
      sv: 'Obs: Den officiella webbplatsen anger både dygnet-runt-reception och receptionstider 08:30–17:00. Vid sen ankomst rekommenderar vi att du kontaktar +46 31 58 07 50 i förväg.',
    },
  },
  {
    id: 'check-out',
    question: {
      en: 'What time is check-out?',
      sv: 'Vilken tid är utcheckning?',
    },
    answer: {
      en: 'Check-out is by 11:00 AM. Express check-out and luggage storage are available if you need to explore Gothenburg before departing.',
      sv: 'Utcheckning sker senast kl. 11:00. Expressutcheckning och bagageförvaring finns tillgängligt om du vill lämna väskorna innan avresa.',
    },
  },
  {
    id: 'breakfast',
    question: {
      en: 'Is breakfast included?',
      sv: 'Ingår frukost i rumspriset?',
    },
    answer: {
      en: 'Yes, complimentary continental breakfast is included for hotel guests. Individually wrapped breakfast items are also available. Note: official room policies state that children staying free in existing bedding may not automatically include complimentary breakfast—please verify in your booking terms.',
      sv: 'Ja, kostnadsfri kontinental frukost ingår för hotellets gäster, och individuellt förpackade alternativ finns. Barn som bor kostnadsfritt i befintliga sängar omfattas eventuellt inte automatiskt av gratis frukost – kontrollera bokningsvillkoren.',
    },
  },
  {
    id: 'parking',
    question: {
      en: 'Is parking available at the hotel?',
      sv: 'Finns det parkering vid hotellet?',
    },
    answer: {
      en: 'Yes, free self-parking in the garage is included for hotel guests. Detailed instructions for accessing the garage are provided in your key packet upon check-in.',
      sv: 'Ja, fri självparkering i garage ingår för hotellets gäster. Instruktioner för garaget ligger i nyckelfodralet vid ankomst.',
    },
  },
  {
    id: 'wifi',
    question: {
      en: 'Is Wi-Fi free?',
      sv: 'Är Wi-Fi gratis?',
    },
    answer: {
      en: 'Yes, complimentary in-room Wi-Fi is included across all room categories and common areas.',
      sv: 'Ja, kostnadsfritt Wi-Fi ingår i alla rumskategorier och gemensamma utrymmen.',
    },
  },
  {
    id: 'pets',
    question: {
      en: 'Are pets allowed? Is smoking permitted?',
      sv: 'Är husdjur eller rökning tillåtet?',
    },
    answer: {
      en: 'Pets are not allowed at Euroway Hotel. The entire hotel is strictly non-smoking.',
      sv: 'Husdjur är inte tillåtna på Euroway Hotel. Hela hotellet är helt rökfritt.',
    },
  },
  {
    id: 'directions',
    question: {
      en: 'How can I reach the hotel from Gothenburg city center or the E6?',
      sv: 'Hur tar jag mig till hotellet från centrala Göteborg eller E6?',
    },
    answer: {
      en: 'By car, take Exit 78 (Backadalsmotet) off the E6 highway and follow signs for Stigs Center. The hotel entrance ("Entré Hotel") is next to Batterilagret and Subway at Importgatan 2D. By public transit, take the Green Express bus from Nordstaden to Backadalsmotet (approximately 10 minutes).',
      sv: 'Med bil tar du avfart 78 (Backadalsmotet) från E6 och följer skyltar mot Stigs Center. Entrén ("Entré Hotel") ligger precis bredvid Batterilagret och Subway på Importgatan 2D. Med buss tar du Grön Express från Nordstaden till Backadalsmotet (ca 10 minuter).',
    },
  },
  {
    id: 'reservation',
    question: {
      en: 'How do I make, modify, or cancel a reservation?',
      sv: 'Hur bokar, ändrar eller avbokar jag ett rum?',
    },
    answer: {
      en: 'Online reservations, live availability, and nightly rates are handled through our Sirvoy booking page (/book). You can also contact the hotel directly by phone at +46 31 58 07 50 or email at mail@eurowayhotel.se.',
      sv: 'Bokning online, aktuell tillgänglighet och dagspriser hanteras via vår bokningssida med Sirvoy (/book). Du kan även kontakta hotellet direkt på +46 31 58 07 50 eller mail@eurowayhotel.se.',
    },
    confirmationNote: {
      en: 'Cancellation and prepayment terms vary by rate plan and require confirmation inside your Sirvoy reservation confirmation because the legacy website contains conflicting generic clauses.',
      sv: 'Avboknings- och förskottsvillkor varierar beroende på prisalternativ och bekräftas i din bokningsbekräftelse från Sirvoy.',
    },
  },
];
