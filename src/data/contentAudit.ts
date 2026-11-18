import { ContentAuditEntry } from '../types/hotel';

/**
 * Concise Content Audit comparing official website sources against verified facts
 * and flagging conflicting/incomplete details for hotel-owner confirmation.
 */
export const CONTENT_AUDIT: ContentAuditEntry[] = [
  {
    topic: 'Hotel Identity & Contact Details',
    status: 'verified',
    summary: 'Euroway Hotel (operated by Euroway Hotell M&M AB), Importgatan 2D, 422 46 Hisings Backa, Gothenburg. Phone +46 31 58 07 50 (031-580750), email mail@eurowayhotel.se.',
    sourceNote: 'Verified across eurowayhotel.se/en/contact/ and termsandconditions/',
  },
  {
    topic: 'Room Categories & Sizes',
    status: 'verified',
    summary: '5 active categories: Single Room Economy (15 m², 1 adult), Double Room (16 m², 2 adults), 3-Bed Room (21 m², 3 adults), 4-Bed Room (23 m², 4 adults), 5-Bed Room (25 m², 5 adults).',
    sourceNote: 'Verified from eurowayhotel.se/en/process/public-process.php & room-details/index.php?id=1..5',
  },
  {
    topic: 'Included Amenities & Accessibility',
    status: 'verified',
    summary: 'Free Wi-Fi, complimentary continental breakfast, free garage self-parking, 32" flat-TV, fridge, microwave, kettle, luggage storage, laundry facilities, non-smoking property, no pets, elevator & accessible bathroom features.',
    sourceNote: 'Verified from eurowayhotel.se/en/services/ & room-details/',
  },
  {
    topic: 'Reception Hours vs. 24-Hour Front Desk',
    status: 'requires-confirmation',
    summary: 'Services page states "24-hour front desk" while the site API fetchTime returns reception: "08:30 -17:00". Guests arriving late should confirm key pickup procedure.',
    sourceNote: 'Conflict between /en/services/ and /en/process/public-process.php (fetchTime)',
  },
  {
    topic: 'Cancellation, Prepayment & Refund Terms',
    status: 'requires-confirmation',
    summary: 'Legacy termsandconditions page contains contradictory statements (free cancellation until 1 day prior vs. non-refundable prepayment + generic Shopify e-commerce boilerplate). Room pages state policy varies by room type.',
    sourceNote: 'Needs official Sirvoy rate-plan terms from hotel owner before publishing binding cancellation rules.',
  },
  {
    topic: 'Privacy Policy & GDPR Controller Details',
    status: 'requires-confirmation',
    summary: 'Legacy privacyPolicy page uses generic Shopify-style store text and references Universal Analytics (UA-254158023-1). Requires hotel-approved GDPR notice naming Euroway Hotell M&M AB and Sirvoy data processing.',
    sourceNote: 'Needs review by hotel owner / legal advisor.',
  },
  {
    topic: 'Sirvoy Booking Engine Credentials & Room Mapping',
    status: 'requires-confirmation',
    summary: 'Official Sirvoy script URL, booking engine ID, and room-type prefill IDs must be supplied by Euroway Hotel.',
    sourceNote: 'Configured via src/config/booking.ts or NEXT_PUBLIC_SIRVOY_* environment variables.',
  },
];
