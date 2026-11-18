import { Locale } from '../types/hotel';

export interface TranslationDictionary {
  nav: {
    home: string;
    rooms: string;
    facilities: string;
    gallery: string;
    about: string;
    contact: string;
    location: string;
    faq: string;
    bookNow: string;
    menuOpen: string;
    menuClose: string;
  };
  common: {
    bookStay: string;
    exploreRooms: string;
    viewDetails: string;
    selectRoom: string;
    discoverHotel: string;
    viewAllFacilities: string;
    viewGallery: string;
    getDirections: string;
    checkAvailability: string;
    callHotel: string;
    emailHotel: string;
    backToRooms: string;
    upToGuestSingular: string;
    upToGuests: string;
    adultSingular: string;
    adults: string;
    childSingular: string;
    children: string;
    checkIn: string;
    checkOut: string;
    roomSize: string;
    bedType: string;
    close: string;
    previous: string;
    next: string;
    requiresConfirmation: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    factBreakfast: string;
    factWifi: string;
    factParking: string;
    factHighway: string;
  };
  bookingBar: {
    heading: string;
    checkInLabel: string;
    checkOutLabel: string;
    adultsLabel: string;
    childrenLabel: string;
    submitLabel: string;
    errors: {
      missingDates: string;
      invalidPastDate: string;
      invalidOrder: string;
      invalidAdults: string;
    };
  };
  home: {
    aboutEyebrow: string;
    aboutTitle: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    whyEyebrow: string;
    whyTitle: string;
    whySubtitle: string;
    roomsEyebrow: string;
    roomsTitle: string;
    roomsSubtitle: string;
    roomsRateNote: string;
    facilitiesEyebrow: string;
    facilitiesTitle: string;
    facilitiesSubtitle: string;
    galleryEyebrow: string;
    galleryTitle: string;
    gallerySubtitle: string;
    locationEyebrow: string;
    locationTitle: string;
    locationSubtitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
  whyBenefits: {
    breakfastTitle: string;
    breakfastDesc: string;
    wifiTitle: string;
    wifiDesc: string;
    parkingTitle: string;
    parkingDesc: string;
    locationTitle: string;
    locationDesc: string;
    roomsTitle: string;
    roomsDesc: string;
    assistanceTitle: string;
    assistanceDesc: string;
  };
  roomsPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterLabel: string;
    filterAll: string;
    filterTwoPlus: string;
    filterThreePlus: string;
    emptyState: string;
    ratesNotice: string;
  };
  roomDetail: {
    breadcrumbRooms: string;
    overviewHeading: string;
    includedHeading: string;
    bathroomHeading: string;
    policiesHeading: string;
    checkInOutLabel: string;
    petsLabel: string;
    smokingLabel: string;
    childrenLabel: string;
    childrenText: string;
    cancellationLabel: string;
    cancellationText: string;
    relatedHeading: string;
    reserveRoomTitle: string;
    reserveRoomText: string;
  };
  facilitiesPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    hotelScopeHeading: string;
    nearbyScopeHeading: string;
    nearbyBadgeText: string;
  };
  galleryPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      exterior: string;
      interior: string;
      dining: string;
      rooms: string;
    };
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    storyHeading: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    todayHeading: string;
    todayText: string;
    highlightsTitle: string;
  };
  locationPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressHeading: string;
    drivingHeading: string;
    drivingText: string;
    transitHeading: string;
    transitText: string;
    parkingHeading: string;
    parkingText: string;
    nearbyHeading: string;
    approximateNote: string;
    openInMaps: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directHeading: string;
    directSubtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    receptionLabel: string;
    receptionNote: string;
    directActionNote: string;
    composeEmail: string;
  };
  faqPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stillHaveQuestions: string;
    stillHaveQuestionsText: string;
  };
  bookPage: {
    eyebrow: string;
    title: string;
    subtitle: string;
    summaryHeading: string;
    selectedRoomLabel: string;
    datesLabel: string;
    guestsLabel: string;
    notSpecified: string;
    engineTitle: string;
    loadingText: string;
    errorTitle: string;
    errorText: string;
    unconfiguredTitle: string;
    unconfiguredText: string;
    unconfiguredStepsTitle: string;
    unconfiguredSteps: string[];
    directContactHeading: string;
    directContactText: string;
    changeRoom: string;
  };
  legal: {
    privacyEyebrow: string;
    privacyTitle: string;
    privacySubtitle: string;
    termsEyebrow: string;
    termsTitle: string;
    termsSubtitle: string;
    confirmationBannerTitle: string;
    confirmationBannerText: string;
  };
  footer: {
    description: string;
    exploreHeading: string;
    infoHeading: string;
    contactHeading: string;
    privacyPolicy: string;
    termsConditions: string;
    copyright: string;
    operator: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationDictionary> = {
  en: {
    nav: {
      home: 'Home',
      rooms: 'Rooms',
      facilities: 'Facilities',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
      location: 'Location',
      faq: 'FAQ',
      bookNow: 'Book Now',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    common: {
      bookStay: 'Book Your Stay',
      exploreRooms: 'Explore Rooms',
      viewDetails: 'View Details',
      selectRoom: 'Select Room',
      discoverHotel: 'Discover Our Hotel',
      viewAllFacilities: 'Explore All Facilities',
      viewGallery: 'View Full Gallery',
      getDirections: 'Directions & Transport',
      checkAvailability: 'Check Availability',
      callHotel: 'Call Hotel',
      emailHotel: 'Email Hotel',
      backToRooms: 'Back to All Rooms',
      upToGuestSingular: 'Up to 1 guest',
      upToGuests: 'Up to {count} guests',
      adultSingular: 'Adult',
      adults: 'Adults',
      childSingular: 'Child',
      children: 'Children',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      roomSize: 'Room size',
      bedType: 'Bedding',
      close: 'Close',
      previous: 'Previous',
      next: 'Next',
      requiresConfirmation: 'Requires hotel confirmation',
    },
    hero: {
      eyebrow: 'Hisings Backa · Gothenburg',
      title: 'Your Comfortable Stay in Gothenburg',
      subtitle:
        'A welcoming 3-star hotel at Stigs Center along the E6 highway—offering practical rooms, complimentary breakfast, free Wi-Fi, and free garage parking.',
      factBreakfast: 'Complimentary Breakfast',
      factWifi: 'Free Wi-Fi',
      factParking: 'Free Garage Parking',
      factHighway: 'E6 Exit 78 Access',
    },
    bookingBar: {
      heading: 'Check Room Availability',
      checkInLabel: 'Check-in Date',
      checkOutLabel: 'Check-out Date',
      adultsLabel: 'Adults',
      childrenLabel: 'Children',
      submitLabel: 'Check Availability',
      errors: {
        missingDates: 'Please select both a check-in and check-out date.',
        invalidPastDate: 'Check-in date cannot be in the past.',
        invalidOrder: 'Check-out date must be at least one night after check-in.',
        invalidAdults: 'Please select at least 1 adult guest.',
      },
    },
    home: {
      aboutEyebrow: 'Welcome to Euroway Hotel',
      aboutTitle: 'Straightforward Scandinavian hospitality at Stigs Center',
      aboutParagraph1:
        'Situated on Hisingen—Sweden’s fourth largest island—Euroway Hotel combines easy motorway connectivity along the E6 with a practical base for both business travelers and visiting families.',
      aboutParagraph2:
        'Stigs Center has served Gothenburg travelers since 1968. Today, the neighborhood blends residential quarters, local businesses, restaurants, and leisure facilities just a short bus ride from the city center.',
      whyEyebrow: 'Included Essentials',
      whyTitle: 'Everything you need for a comfortable stay',
      whySubtitle:
        'No unnecessary extras—just clean rooms, helpful everyday amenities, and straightforward value in Gothenburg.',
      roomsEyebrow: 'Accommodation',
      roomsTitle: 'Rooms for solo travelers, couples, and families',
      roomsSubtitle:
        'Choose from five verified room categories with private bathrooms, flat-screen TVs, refrigerators, microwaves, and kettles.',
      roomsRateNote: 'Live room rates and real-time availability are displayed in our Sirvoy booking engine.',
      facilitiesEyebrow: 'Facilities & Services',
      facilitiesTitle: 'Practical comforts inside the hotel and building',
      facilitiesSubtitle:
        'Enjoy a daily breakfast buffet, free garage parking, laundry access, and independently operated restaurants and bowling right in Stigs Center.',
      galleryEyebrow: 'Inside Euroway Hotel',
      galleryTitle: 'Authentic views of our rooms and shared spaces',
      gallerySubtitle:
        'Browse real photographs of our guest rooms, breakfast room, reception, and Stigs Center entrance.',
      locationEyebrow: 'Location & Access',
      locationTitle: 'Easy arrival off the E6 at Backadalsmotet',
      locationSubtitle:
        'Reach Gothenburg city center in roughly 5 minutes by car or 10 minutes via Green Express bus, without crossing the river if you are working on Hisingen.',
      ctaTitle: 'Ready for Your Stay in Gothenburg?',
      ctaSubtitle:
        'Check live room availability and book directly through our reservation engine, or call our team for assistance.',
    },
    whyBenefits: {
      breakfastTitle: 'Complimentary Breakfast',
      breakfastDesc: 'Start your morning in our bright dining room with continental buffet options included.',
      wifiTitle: 'Free In-Room Wi-Fi',
      wifiDesc: 'Stay connected for work or planning your Gothenburg itinerary with complimentary wireless internet.',
      parkingTitle: 'Free Garage Parking',
      parkingDesc: 'Self-parking in the garage is included in your stay—access instructions are provided at check-in.',
      locationTitle: 'Convenient E6 Location',
      locationDesc: 'Direct access from E6 Exit 78 (Backadalsmotet), minutes from Hisingen industries and city buses.',
      roomsTitle: 'Well-Equipped Rooms',
      roomsDesc: 'Every room features a private shower bathroom, 32-inch TV, refrigerator, microwave, and kettle.',
      assistanceTitle: 'Guest Support & Storage',
      assistanceDesc: 'Luggage storage, on-site laundry facilities, accessible rooms, and pre-arrival check-in guidance.',
    },
    roomsPage: {
      eyebrow: 'Guest Rooms',
      title: 'Rooms & Accommodation',
      subtitle:
        'Five straightforward room types—from 15 m² Economy Singles to 25 m² 5-Bed Family Rooms—all including breakfast, Wi-Fi, and garage parking.',
      filterLabel: 'Filter by guest capacity:',
      filterAll: 'All Rooms (5)',
      filterTwoPlus: '2+ Guests',
      filterThreePlus: '3+ Guests',
      emptyState: 'No rooms match the selected filter.',
      ratesNotice:
        'Current nightly rates and live room availability are managed exclusively through Sirvoy when you select a room.',
    },
    roomDetail: {
      breadcrumbRooms: 'Rooms',
      overviewHeading: 'Room Overview',
      includedHeading: 'In-Room Amenities',
      bathroomHeading: 'Bathroom & Linens',
      policiesHeading: 'Stay & House Policies',
      checkInOutLabel: 'Check-in & Check-out',
      petsLabel: 'Pets',
      smokingLabel: 'Smoking',
      childrenLabel: 'Children & Extra Beds',
      childrenText:
        'Children are welcome and stay free when using existing bedding (complimentary breakfast eligibility for children varies by rate). Rollaway beds may be available at an extra daily charge.',
      cancellationLabel: 'Cancellation & Prepayment',
      cancellationText:
        'Cancellation and prepayment policies depend on the selected rate plan inside Sirvoy. Because legacy site terms contain conflicting clauses, please review the exact rate terms shown during booking.',
      relatedHeading: 'Other Room Categories',
      reserveRoomTitle: 'Check Dates for This Room',
      reserveRoomText:
        'Continue to our Sirvoy booking engine to view live availability and current nightly rates.',
    },
    facilitiesPage: {
      eyebrow: 'Services & Amenities',
      title: 'Hotel Facilities & Building Services',
      subtitle:
        'A transparent overview of amenities provided directly by Euroway Hotel alongside independently operated venues within Stigs Center.',
      hotelScopeHeading: 'Provided by Euroway Hotel',
      nearbyScopeHeading: 'In the Stigs Center Building & Nearby',
      nearbyBadgeText: 'Independently operated in building / nearby',
    },
    galleryPage: {
      eyebrow: 'Photo Gallery',
      title: 'Explore Euroway Hotel',
      subtitle:
        'Authentic photography of our guest rooms, breakfast room, reception, lobby lounge, and Stigs Center exterior.',
      categories: {
        all: 'All Photos',
        exterior: 'Exterior & Entrance',
        interior: 'Reception & Lounge',
        dining: 'Breakfast & Dining',
        rooms: 'Guest Rooms',
      },
    },
    aboutPage: {
      eyebrow: 'Our Story & Area',
      title: 'About Euroway Hotel',
      subtitle: 'Comfortable, accessible 3-star hospitality rooted in Stigs Center on Hisingen since 1968.',
      storyHeading: 'From 1968 Motorist Hub to Modern Gothenburg Base',
      storyP1:
        'Euroway Hotel is located at Stigs Center in Hisings Backa on Hisingen—Sweden’s fourth largest island—just a few hundred meters from the Göta Älv river.',
      storyP2:
        'Stigs Center was originally built in 1968 by Stig Andersson as the very first commercial complex in the area. In its early days it brought together a fuel station, bank, supermarket, restaurant, motel, bowling alley, and automotive workshops—offering everything travelers and passing skiers needed along the route.',
      storyP3:
        'Today, the surrounding district has grown into a lively mix of residential neighborhoods, shopping centers, and major industrial employers across Hisingen.',
      todayHeading: 'Euroway Hotel Today',
      todayText:
        'Operated by Euroway Hotell M&M AB, the hotel provides 3-star value focused on what matters most to working travelers, road-trippers, and families: a clean room with private bath, included continental breakfast, free Wi-Fi, and complimentary garage parking right next to the E6.',
      highlightsTitle: 'Hotel Facts at a Glance',
    },
    locationPage: {
      eyebrow: 'Directions & Transit',
      title: 'Location & Getting Here',
      subtitle: 'Conveniently positioned at Importgatan 2D, Hisings Backa—right alongside the E6 motorway.',
      addressHeading: 'Hotel Address & Entrance',
      drivingHeading: 'Arriving by Car (E6 Highway)',
      drivingText:
        'Take Exit 78 at Backadalsmotet on the E6 highway and follow signs toward Stigs Center. Look for "Entré Hotel" directly beside Batterilagret and Subway. Central Gothenburg is approximately 5 minutes away by car, and Landvetter Airport (GOT) is roughly 23–25 minutes away via the E6.',
      transitHeading: 'Public Transportation',
      transitText:
        'The nearest bus stop is Backadalsmotet. Take the Green Express bus from Nordstaden in central Gothenburg to reach the hotel in approximately 10 minutes. The same direct route connects guests to Liseberg and Universeum in around 20 minutes, as well as Ullevi and Scandinavium arenas.',
      parkingHeading: 'Complimentary Garage Parking',
      parkingText:
        'Free self-parking in the garage is included with your stay. Access instructions are placed in your key packet upon arrival at the hotel.',
      nearbyHeading: 'Approximate Distances & Nearby Landmarks',
      approximateNote: 'All travel times below are approximate estimates published on the official hotel website.',
      openInMaps: 'Open in Google Maps',
    },
    contactPage: {
      eyebrow: 'Get in Touch',
      title: 'Contact Euroway Hotel',
      subtitle: 'Reach our team by telephone or email for room questions, group inquiries, or arrival assistance.',
      directHeading: 'Direct Contact Channels',
      directSubtitle: 'For reservations, please use our online Sirvoy booking page or contact the hotel directly.',
      phoneLabel: 'Telephone',
      emailLabel: 'Email Address',
      addressLabel: 'Street Address',
      receptionLabel: 'Front Desk & Arrival Note',
      receptionNote:
        'Check-in begins at 15:00 and check-out is at 11:00. Note: official sources list both 24-hour front desk and 08:30–17:00 reception hours; please call ahead if arriving late.',
      directActionNote:
        'This website uses direct phone and email links so your message goes straight to the hotel team without an unverified web form.',
      composeEmail: 'Send Email to Hotel',
    },
    faqPage: {
      eyebrow: 'Guest Information',
      title: 'Frequently Asked Questions',
      subtitle: 'Verified answers regarding check-in, breakfast, garage parking, directions, and reservations.',
      stillHaveQuestions: 'Need further clarification before your trip?',
      stillHaveQuestionsText: 'Call +46 31 58 07 50 or email mail@eurowayhotel.se and our team will be happy to assist.',
    },
    bookPage: {
      eyebrow: 'Reservations',
      title: 'Book Your Stay',
      subtitle:
        'Live room availability, dynamic nightly rates, and reservations are powered by Sirvoy.',
      summaryHeading: 'Your Selected Stay Details',
      selectedRoomLabel: 'Selected Room Preference',
      datesLabel: 'Selected Dates',
      guestsLabel: 'Guests',
      notSpecified: 'Select inside booking engine',
      engineTitle: 'Sirvoy Booking Engine',
      loadingText: 'Loading live reservation engine...',
      errorTitle: 'Unable to load the booking engine',
      errorText:
        'The Sirvoy reservation widget could not be initialized right now. Please try refreshing the page or contact Euroway Hotel directly.',
      unconfiguredTitle: 'Sirvoy Booking Engine Integration Ready',
      unconfiguredText:
        'This dedicated reservation route is prepared for Euroway Hotel’s official Sirvoy Property Management System embed. Because live Sirvoy account credentials have not yet been supplied in the environment configuration, no simulated prices or mock bookings are shown.',
      unconfiguredStepsTitle: 'To activate live reservations:',
      unconfiguredSteps: [
        'Add NEXT_PUBLIC_SIRVOY_SCRIPT_URL and NEXT_PUBLIC_SIRVOY_ENGINE_ID in your deployment environment or update src/config/booking.ts.',
        'Map each room slug in roomMappings if Sirvoy room preselection is enabled.',
        'Sirvoy will automatically handle live room inventory, dynamic SEK pricing, confirmations, and payment workflows.',
      ],
      directContactHeading: 'Prefer to book directly by phone or email?',
      directContactText: 'Contact Euroway Hotel directly to inquire about availability or group stays.',
      changeRoom: 'Browse Room Types',
    },
    legal: {
      privacyEyebrow: 'Legal Information',
      privacyTitle: 'Privacy Policy',
      privacySubtitle: 'Data handling transparency and pending GDPR confirmation notice for Euroway Hotel.',
      termsEyebrow: 'Legal Information',
      termsTitle: 'Terms & Conditions',
      termsSubtitle: 'Verified house policies and items pending final confirmation from Euroway Hotell M&M AB.',
      confirmationBannerTitle: 'Hotel Confirmation Notice',
      confirmationBannerText:
        'The legacy website contained generic e-commerce boilerplate and conflicting cancellation statements. Rather than inventing binding legal terms, this page presents verified house rules and clearly flags clauses awaiting hotel-owner approval.',
    },
    footer: {
      description:
        'A comfortable 3-star hotel at Stigs Center in Hisings Backa, Gothenburg—featuring complimentary breakfast, free Wi-Fi, and free garage parking.',
      exploreHeading: 'Explore',
      infoHeading: 'Guest Info',
      contactHeading: 'Contact & Address',
      privacyPolicy: 'Privacy Policy',
      termsConditions: 'Terms & Conditions',
      copyright: '© {year} Euroway Hotel. All rights reserved.',
      operator: 'Operated by Euroway Hotell M&M AB',
    },
    notFound: {
      title: 'Page Not Found',
      subtitle: 'The page you requested could not be found. Return to the homepage or browse our rooms.',
      backHome: 'Return to Homepage',
    },
  },
  sv: {
    nav: {
      home: 'Hem',
      rooms: 'Rum',
      facilities: 'Faciliteter',
      gallery: 'Galleri',
      about: 'Om oss',
      contact: 'Kontakt',
      location: 'Hitta hit',
      faq: 'Vanliga frågor',
      bookNow: 'Boka nu',
      menuOpen: 'Öppna navigeringsmeny',
      menuClose: 'Stäng navigeringsmeny',
    },
    common: {
      bookStay: 'Boka din vistelse',
      exploreRooms: 'Utforska rummen',
      viewDetails: 'Visa detaljer',
      selectRoom: 'Välj rum',
      discoverHotel: 'Upptäck vårt hotell',
      viewAllFacilities: 'Se alla faciliteter',
      viewGallery: 'Se hela galleriet',
      getDirections: 'Vägbeskrivning & buss',
      checkAvailability: 'Sök tillgänglighet',
      callHotel: 'Ring hotellet',
      emailHotel: 'Mejla hotellet',
      backToRooms: 'Tillbaka till alla rum',
      upToGuestSingular: 'Upp till 1 gäst',
      upToGuests: 'Upp till {count} gäster',
      adultSingular: 'vuxen',
      adults: 'vuxna',
      childSingular: 'barn',
      children: 'barn',
      checkIn: 'Incheckning',
      checkOut: 'Utcheckning',
      roomSize: 'Rumsyta',
      bedType: 'Sängtyp',
      close: 'Stäng',
      previous: 'Föregående',
      next: 'Nästa',
      requiresConfirmation: 'Kräver bekräftelse från hotellet',
    },
    hero: {
      eyebrow: 'Hisings Backa · Göteborg',
      title: 'Din bekväma vistelse i Göteborg',
      subtitle:
        'Ett prisvärt och välkomnande 3-stjärnigt hotell vid Stigs Center längs E6 – med praktiska rum, gratis frukost, fritt Wi-Fi och fri garageparkering.',
      factBreakfast: 'Gratis frukost',
      factWifi: 'Fritt Wi-Fi',
      factParking: 'Fri garageparkering',
      factHighway: 'E6 Avfart 78',
    },
    bookingBar: {
      heading: 'Sök lediga rum',
      checkInLabel: 'Incheckningsdatum',
      checkOutLabel: 'Utcheckningsdatum',
      adultsLabel: 'Vuxna',
      childrenLabel: 'Barn',
      submitLabel: 'Sök tillgänglighet',
      errors: {
        missingDates: 'Vänligen välj både inchecknings- och utcheckningsdatum.',
        invalidPastDate: 'Incheckningsdatum kan inte ligga bakåt i tiden.',
        invalidOrder: 'Utcheckning måste ske minst en natt efter incheckning.',
        invalidAdults: 'Välj minst 1 vuxen gäst.',
      },
    },
    home: {
      aboutEyebrow: 'Välkommen till Euroway Hotel',
      aboutTitle: 'Okonstlad skandinavisk gästfrihet vid Stigs Center',
      aboutParagraph1:
        'Euroway Hotel ligger på Hisingen – Sveriges fjärde största ö – och kombinerar smidig anslutning till E6 med ett bekvämt läge för både affärsresenärer och familjer.',
      aboutParagraph2:
        'Stigs Center har välkomnat resenärer sedan 1968. Idag möts bostadsområden, handel, restauranger och företag i området – bara en kort bussresa från centrala Göteborg.',
      whyEyebrow: 'Detta ingår alltid',
      whyTitle: 'Allt du behöver för en smidig vistelse',
      whySubtitle:
        'Inga onödiga krusiduller – bara rena rum, användbara bekvämligheter och prisvärd komfort i Göteborg.',
      roomsEyebrow: 'Boende',
      roomsTitle: 'Rum för ensamresenärer, par och familjer',
      roomsSubtitle:
        'Välj mellan fem verifierade rumskategorier med eget badrum, platt-TV, kylskåp, mikrovågsugn och vattenkokare.',
      roomsRateNote: 'Aktuella rumspriser och lediga rum visas direkt i vår bokningsmotor från Sirvoy.',
      facilitiesEyebrow: 'Tjänster & faciliteter',
      facilitiesTitle: 'Praktiska bekvämligheter i hotellet och byggnaden',
      facilitiesSubtitle:
        'Njut av kostnadsfri frukostbuffé, fri garageparkering, tvättmöjligheter samt fristående restauranger och bowling i samma byggnad.',
      galleryEyebrow: 'Bilder från hotellet',
      galleryTitle: 'Autentiska foton av rum och gemensamma ytor',
      gallerySubtitle:
        'Se verkliga fotografier från våra gästrum, frukostmatsal, reception och entré vid Stigs Center.',
      locationEyebrow: 'Läge & kommunikationer',
      locationTitle: 'Enkel ankomst från E6 vid Backadalsmotet',
      locationSubtitle:
        'Du når centrala Göteborg på cirka 5 minuter med bil eller 10 minuter med Grön Express – och slipper korsa älven om du ska arbeta på Hisingen.',
      ctaTitle: 'Redo för din vistelse i Göteborg?',
      ctaSubtitle:
        'Kontrollera tillgänglighet och boka direkt via vår bokningsmotor, eller kontakta oss om du har frågor.',
    },
    whyBenefits: {
      breakfastTitle: 'Kostnadsfri frukost',
      breakfastDesc: 'Börja morgonen i vår ljusa matsal med kontinental frukostbuffé inkluderad.',
      wifiTitle: 'Fritt Wi-Fi på rummet',
      wifiDesc: 'Håll dig uppkopplad för arbete eller utflyktsplanering med gratis trådlöst internet.',
      parkingTitle: 'Fri garageparkering',
      parkingDesc: 'Självparkering i garage ingår i vistelsen – instruktioner lämnas vid incheckning.',
      locationTitle: 'Nära E6 & Hisingen',
      locationDesc: 'Direkt avfart vid E6 Backadalsmotet, nära Hisingens företag och snabbussar till city.',
      roomsTitle: 'Välutrustade rum',
      roomsDesc: 'Alla rum har eget badrum med dusch, 32-tums TV, kylskåp, mikrovågsugn och vattenkokare.',
      assistanceTitle: 'Bagage & gästservice',
      assistanceDesc: 'Bagageförvaring, tvättmöjligheter, tillgängliga rum och tydlig ankomstinformation.',
    },
    roomsPage: {
      eyebrow: 'Gästrum',
      title: 'Rum & boende',
      subtitle:
        'Fem tydliga rumstyper – från 15 m² enkelrum till 25 m² fembäddsrum – alla med frukost, Wi-Fi och garageparkering inkluderat.',
      filterLabel: 'Filtrera efter antal gäster:',
      filterAll: 'Alla rum (5)',
      filterTwoPlus: '2+ gäster',
      filterThreePlus: '3+ gäster',
      emptyState: 'Inga rum matchar det valda filtret.',
      ratesNotice:
        'Dagspriser och lediga rum hanteras direkt via Sirvoy när du väljer rum.',
    },
    roomDetail: {
      breadcrumbRooms: 'Rum',
      overviewHeading: 'Rumsbeskrivning',
      includedHeading: 'Rumsutrustning',
      bathroomHeading: 'Badrum & sängkläder',
      policiesHeading: 'Ordnings- och vistelseregler',
      checkInOutLabel: 'Incheckning & utcheckning',
      petsLabel: 'Husdjur',
      smokingLabel: 'Rökning',
      childrenLabel: 'Barn & extrasängar',
      childrenText:
        'Barn är välkomna och bor gratis i befintliga sängar (kostnadsfri frukost för barn beror på bokat pris). Extrasängar kan erbjudas mot tillägg.',
      cancellationLabel: 'Avbokning & förskottsbetalning',
      cancellationText:
        'Avboknings- och betalningsvillkor styrs av valt prisalternativ i Sirvoy. Eftersom den äldre webbplatsen innehåller motstridiga texter visas exakta villkor vid bokningstillfället.',
      relatedHeading: 'Övriga rumskategorier',
      reserveRoomTitle: 'Sök datum för detta rum',
      reserveRoomText:
        'Gå vidare till vår bokningsmotor från Sirvoy för att se aktuell tillgänglighet och priser.',
    },
    facilitiesPage: {
      eyebrow: 'Tjänster & bekvämligheter',
      title: 'Hotellets faciliteter & service',
      subtitle:
        'En tydlig översikt av vad som ingår på Euroway Hotel samt fristående verksamheter i Stigs Center-byggnaden.',
      hotelScopeHeading: 'Erbjuds av Euroway Hotel',
      nearbyScopeHeading: 'I Stigs Center-byggnaden & närområdet',
      nearbyBadgeText: 'Fristående verksamhet i byggnaden / nära hotellet',
    },
    galleryPage: {
      eyebrow: 'Fotogalleri',
      title: 'Upptäck Euroway Hotel',
      subtitle:
        'Verkliga bilder från våra gästrum, frukostmatsal, reception, lobby och entrén vid Stigs Center.',
      categories: {
        all: 'Alla bilder',
        exterior: 'Exteriör & entré',
        interior: 'Reception & lobby',
        dining: 'Frukost & matsal',
        rooms: 'Gästrum',
      },
    },
    aboutPage: {
      eyebrow: 'Historia & område',
      title: 'Om Euroway Hotel',
      subtitle: 'Bekvämt och prisvärt 3-stjärnigt boende med rötter i Stigs Center på Hisingen sedan 1968.',
      storyHeading: 'Från klassisk trafikplats 1968 till modernt Göteborgshotell',
      storyP1:
        'Euroway Hotel ligger vid Stigs Center i Hisings Backa på Hisingen – Sveriges fjärde största ö – endast några hundra meter från Göta Älv.',
      storyP2:
        'Stigs Center byggdes 1968 av Stig Andersson som områdets första affärsanläggning. Då rymde centret bensinstation, bank, stormarknad, restaurang, motell, bowling och verkstäder – allt resenärer behövde längs vägen.',
      storyP3:
        'Idag omges anläggningen av bostadsområden, köpcentrum och flera av Göteborgs största arbetsplatser och industrier på Hisingen.',
      todayHeading: 'Euroway Hotel idag',
      todayText:
        'Hotellet drivs av Euroway Hotell M&M AB och erbjuder okomplicerad 3-stjärnig standard med fokus på det viktigaste: eget badrum, frukost inkluderad, fritt Wi-Fi och kostnadsfri garageparkering precis vid E6.',
      highlightsTitle: 'Snabbfakta om hotellet',
    },
    locationPage: {
      eyebrow: 'Vägbeskrivning & resor',
      title: 'Läge & hitta hit',
      subtitle: 'Smidigt läge på Importgatan 2D i Hisings Backa, precis intill motorvägen E6.',
      addressHeading: 'Adress & entré',
      drivingHeading: 'Med bil längs E6',
      drivingText:
        'Ta avfart 78 vid Backadalsmotet på E6 och följ skyltar mot Stigs Center. Ingången är skyltad "Entré Hotel" precis bredvid Batterilagret och Subway. Centrala Göteborg nås på ca 5 minuter med bil och Landvetter flygplats på ca 23–25 minuter.',
      transitHeading: 'Kollektivtrafik',
      transitText:
        'Närmaste hållplats är Backadalsmotet. Med bussen Grön Express från Nordstaden i centrala Göteborg tar resan cirka 10 minuter. Samma linje tar dig vidare till Liseberg och Universeum på ca 20 minuter samt Ullevi och Scandinavium.',
      parkingHeading: 'Fri garageparkering',
      parkingText:
        'Kostnadsfri självparkering i garage ingår i vistelsen. Instruktioner för garageinfart finns i ditt nyckelfodral vid ankomst.',
      nearbyHeading: 'Ungefärliga restider till platser i närheten',
      approximateNote: 'Samtliga restider nedan är ungefärliga uppgifter hämtade från hotellets officiella webbplats.',
      openInMaps: 'Öppna i Google Maps',
    },
    contactPage: {
      eyebrow: 'Kontakta oss',
      title: 'Kontaktuppgifter',
      subtitle: 'Hör av dig via telefon eller e-post vid frågor om rum, gruppbokningar eller ankomst.',
      directHeading: 'Direktkontakt',
      directSubtitle: 'För onlinebokning hänvisar vi till vår bokningssida med Sirvoy eller direktkontakt med receptionen.',
      phoneLabel: 'Telefon',
      emailLabel: 'E-postadress',
      addressLabel: 'Besöksadress',
      receptionLabel: 'Reception & ankomst',
      receptionNote:
        'Incheckning från kl. 15:00 och utcheckning senast kl. 11:00. Obs: officiella uppgifter anger både 24-timmarsreception och öppettider 08:30–17:00; kontakta oss vid sen ankomst.',
      directActionNote:
        'Vi använder direkta telefon- och mejllänkar så att ditt ärende når hotellet utan mellanhänder.',
      composeEmail: 'Skicka e-post till hotellet',
    },
    faqPage: {
      eyebrow: 'Gästinformation',
      title: 'Vanliga frågor',
      subtitle: 'Verifierade svar om incheckning, frukost, parkering, vägbeskrivning och bokning.',
      stillHaveQuestions: 'Har du fler frågor inför din resa?',
      stillHaveQuestionsText: 'Ring +46 31 58 07 50 eller mejla mail@eurowayhotel.se så hjälper vi dig.',
    },
    bookPage: {
      eyebrow: 'Rumsbokning',
      title: 'Boka din vistelse',
      subtitle: 'Aktuell tillgänglighet, dagspriser och bokningsbekräftelser hanteras av Sirvoy.',
      summaryHeading: 'Valda sökkriterier',
      selectedRoomLabel: 'Önskad rumstyp',
      datesLabel: 'Valda datum',
      guestsLabel: 'Gäster',
      notSpecified: 'Väljs i bokningsmotorn',
      engineTitle: 'Sirvoy bokningsmotor',
      loadingText: 'Laddar bokningsmotorn...',
      errorTitle: 'Kunde inte ladda bokningsmotorn',
      errorText:
        'Sirvoys bokningsmodul kunde inte laddas just nu. Försök ladda om sidan eller kontakta hotellet direkt.',
      unconfiguredTitle: 'Förberedd för Sirvoy bokningsmotor',
      unconfiguredText:
        'Denna bokningssida är byggd för att ladda Euroway Hotels officiella bokningsmodul från Sirvoy. Eftersom live-uppgifter för Sirvoy ännu inte lagts in i konfigurationen visas inga påhittade priser eller fiktiv tillgänglighet.',
      unconfiguredStepsTitle: 'Så aktiverar ni live-bokning:',
      unconfiguredSteps: [
        'Lägg in NEXT_PUBLIC_SIRVOY_SCRIPT_URL och NEXT_PUBLIC_SIRVOY_ENGINE_ID i miljövariablerna eller uppdatera src/config/booking.ts.',
        'Koppla respektive rums-slug i roomMappings om förval av rum är aktiverat i Sirvoy.',
        'Sirvoy hanterar därefter lagersaldo, dagspriser, bokningsbekräftelser och betalningar automatiskt.',
      ],
      directContactHeading: 'Vill du hellre boka via telefon eller e-post?',
      directContactText: 'Kontakta Euroway Hotel direkt vid frågor om tillgänglighet eller gruppboende.',
      changeRoom: 'Se alla rumstyper',
    },
    legal: {
      privacyEyebrow: 'Juridisk information',
      privacyTitle: 'Integritetspolicy',
      privacySubtitle: 'Information om personuppgifter samt punkter som inväntar slutlig bekräftelse.',
      termsEyebrow: 'Juridisk information',
      termsTitle: 'Allmänna villkor',
      termsSubtitle: 'Verifierade trivselregler samt villkor som inväntar slutligt godkännande av Euroway Hotell M&M AB.',
      confirmationBannerTitle: 'Information kräver bekräftelse',
      confirmationBannerText:
        'Den tidigare webbplatsen innehöll generiska e-handelstexter och motstridiga avbokningsvillkor. Här presenteras endast verifierade husregler medan oklara juridiska villkor markeras för hotellägarens bekräftelse.',
    },
    footer: {
      description:
        'Ett bekvämt 3-stjärnigt hotell vid Stigs Center i Hisings Backa, Göteborg – med frukost, Wi-Fi och garageparkering inkluderat.',
      exploreHeading: 'Utforska',
      infoHeading: 'Gästinfo',
      contactHeading: 'Kontakt & adress',
      privacyPolicy: 'Integritetspolicy',
      termsConditions: 'Allmänna villkor',
      copyright: '© {year} Euroway Hotel. Alla rättigheter förbehållna.',
      operator: 'Drivs av Euroway Hotell M&M AB',
    },
    notFound: {
      title: 'Sidan hittades inte',
      subtitle: 'Sidan du sökte finns inte. Gå tillbaka till startsidan eller utforska våra rum.',
      backHome: 'Till startsidan',
    },
  },
};
