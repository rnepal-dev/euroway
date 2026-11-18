export type Locale = 'en' | 'sv';

export interface LocalizedText {
  en: string;
  sv: string;
}

export interface ImageAsset {
  id: string;
  localPath: string;
  sourceUrl: string;
  alt: LocalizedText;
  caption?: LocalizedText;
  category: 'exterior' | 'interior' | 'dining' | 'rooms' | 'amenities';
  roomId?: string;
  aspectHint?: 'landscape' | 'portrait';
}

export interface RoomCategory {
  id: string;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  fullDescription: LocalizedText;
  maxAdults: number;
  maxChildren: number;
  maxGuests: number;
  sizeSqm: number;
  bedArrangement: LocalizedText;
  images: string[]; // ImageAsset IDs
  amenities: LocalizedText[];
  bathroomFeatures: LocalizedText[];
  highlights: LocalizedText[];
  sirvoyRoomTypeId?: string;
}

export interface FacilityItem {
  id: string;
  label: LocalizedText;
  detail?: LocalizedText;
  iconName: string;
}

export interface FacilityCategoryData {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  scope: 'hotel' | 'nearby';
  items: FacilityItem[];
}

export interface FaqItem {
  id: string;
  question: LocalizedText;
  answer: LocalizedText;
  confirmationNote?: LocalizedText;
}

export interface NavLinkItem {
  path: string;
  labelKey: 'home' | 'rooms' | 'facilities' | 'gallery' | 'about' | 'contact' | 'location' | 'faq';
}

export interface BookingSearchValues {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomSlug?: string;
}

export interface SirvoyIntegrationConfig {
  isConfigured: boolean;
  /** Official Sirvoy embed script URL provided by Sirvoy dashboard */
  scriptUrl: string;
  /** Official Sirvoy property / booking engine identifier */
  bookingEngineId: string;
  /** Whether Sirvoy room-type IDs and date query forwarding are verified for prefill */
  supportsPrefill: boolean;
  /** Map internal room slugs to Sirvoy roomTypeId once configured */
  roomMappings: Record<string, string>;
}

export interface ContentAuditEntry {
  topic: string;
  status: 'verified' | 'requires-confirmation';
  summary: string;
  sourceNote: string;
}
