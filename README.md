# Euroway Hotel — Frontend Website

A modern, bilingual (English / Swedish), mobile-first hotel website for **Euroway Hotel** at Stigs Center in Hisings Backa, Gothenburg, Sweden.

> **Implementation Stack:** Built with **Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 (`@tailwindcss/postcss`), and Lucide React**, using Server Components for static hotel pages, the Next.js Metadata API for per-route SEO, `next/image` for hotel photography, and isolated client islands for interactive features.

---

## Local Development & Build

```bash
npm install
npm run dev      # Starts Next.js dev server on http://localhost:3000
npm run lint     # Generates Next.js route types and runs tsc --noEmit
npm run build    # Produces Next.js production build in .next/
npm run start    # Serves production build on port 3000
```

Run unit tests for pure booking/room utilities:

```bash
npx --yes tsx --test src/lib/booking.test.ts src/lib/rooms.test.ts
```

---

## Maintenance & Configuration Guides

### 1. Changing Brand Colors & Design Tokens
All brand colors, fonts, radii, and elevation tokens live in a single source of truth:
- `src/styles/theme.css` (`:root` CSS custom properties mapped into Tailwind v4 `@theme`)

Update `--color-primary`, `--color-background`, `--color-background-secondary`, `--color-accent`, etc. in `src/styles/theme.css` to re-theme the entire site without editing components.

### 2. Updating Room Information
Edit `src/data/rooms.ts`. Each entry in `ROOM_CATEGORIES` defines the room `slug`, bilingual `name` and descriptions, verified `maxAdults`/`maxGuests`, `sizeSqm`, `bedArrangement`, `amenities`, `bathroomFeatures`, and `images` (referencing keys from `src/data/images.ts`).

### 3. Replacing or Adding Hotel Photos
1. Place optimized authentic hotel images inside `public/images/hotel/`, `public/images/rooms/`, or `public/images/gallery/`.
2. Register each image with its local path and English/Swedish `alt` text in `src/data/images.ts`.
3. Reference its key in `GALLERY_ASSET_IDS` or the corresponding room's `images` array. Images render through Next.js `<Image>` (`src/components/ui/HotelImage.tsx`, `HeroSection.tsx`, `PageHero.tsx`, `GalleryLightbox.tsx`).

### 4. Editing Hotel Content & Translations
- **Contact details, address, map URLs, navigation links, check-in/out hours:** `src/config/site.ts`
- **Bilingual UI copy & marketing text:** `src/i18n/translations.ts` (`en` and `sv`), synchronized across Server Components (`src/i18n/serverLocale.ts` cookie) and Client Components (`src/i18n/LanguageContext.tsx`).
- **Facilities & building-shared services:** `src/data/facilities.ts`
- **FAQ entries:** `src/data/faq.ts`

### 5. Adding a New Page
1. Create a file-based Server Component route under `src/app/<route>/page.tsx` exporting `generateMetadata` (Next.js Metadata API) and using shared `PageHero`, `Section`, and `Container` primitives.
2. Add navigation labels in `src/i18n/translations.ts` and link entries in `src/config/site.ts` (and `public/sitemap.xml`).

### 6. Configuring the Sirvoy Booking Engine (`/book`)
Sirvoy is isolated behind `src/components/booking/SirvoyBookingEngine.tsx` and `src/config/booking.ts`:
1. Set `NEXT_PUBLIC_SIRVOY_SCRIPT_URL` and `NEXT_PUBLIC_SIRVOY_ENGINE_ID` in your environment (or update `SIRVOY_CONFIG` in `src/config/booking.ts`).
2. If your Sirvoy account supports prefilling room types, set `supportsPrefill: true` and populate `roomMappings` with each room slug's Sirvoy room-type ID.
3. Until configured, `/book` explicitly displays an integration-ready notice and direct phone/email contact options rather than fake availability or mock prices.

---

## Content Audit: Verified Facts vs. Items Requiring Hotel-Owner Confirmation

### Verified from `eurowayhotel.se`
- **Operator & Address:** Euroway Hotell M&M AB · Importgatan 2D, 422 46 Hisings Backa, Gothenburg (Stigs Center, Hisingen).
- **Contact:** `+46 31 58 07 50` (`031-580750`), `mail@eurowayhotel.se`.
- **Room Categories:** Single Room Economy (15 m², 1 adult), Double Room (16 m², 2 adults), 3-Bed Room (21 m², 3 adults), 4-Bed Room (23 m², 4 adults), 5-Bed Room (25 m², 5 adults).
- **Included Perks & Equipment:** Free Wi-Fi, complimentary continental breakfast, free garage self-parking, 32" flat-screen TV, refrigerator, microwave, kettle, private shower bathroom, luggage storage, laundry facilities, elevator, accessible bathrooms, smoke-free property, no pets.
- **Authentic Photography:** 28 original hotel photographs downloaded locally from `eurowayhotel.se` into `public/images/`.

### Requiring Hotel-Owner Confirmation
1. **Reception Desk Hours vs. 24-Hour Front Desk:** `/en/services/` states "24-hour front desk", while `public-process.php` (`fetchTime`) returns `reception: "08:30 -17:00"`. Late-arrival procedures should be confirmed.
2. **Cancellation, Prepayment & Refund Terms:** Legacy `termsandconditions/` contains contradictory clauses (free cancellation 1 day prior vs. non-refundable prepayment + generic Shopify e-commerce boilerplate). Final rate rules should match Sirvoy rate plans.
3. **Privacy Policy & GDPR Disclosures:** Legacy `privacyPolicy/` uses generic Shopify store wording and legacy Universal Analytics tags (`UA-254158023-1`). Needs formal GDPR approval naming `Euroway Hotell M&M AB` and Sirvoy.
4. **Live Sirvoy Credentials:** Official Sirvoy embed script URL, engine ID, and room-type prefill IDs.
5. **Nearby Building Facilities:** Current opening hours and guest gym discount details for the independently operated restaurants, bowling hall, and fitness/sauna center at Stigs Center.
