import { SirvoyIntegrationConfig } from '../types/hotel';

/**
 * Centralized Sirvoy PMS / Booking Engine Configuration.
 *
 * To activate the live Sirvoy booking widget:
 * 1. Obtain your official Sirvoy embed script URL and booking engine ID from Sirvoy.
 * 2. Populate `scriptUrl`, `bookingEngineId`, and set `isConfigured: true` (or supply via NEXT_PUBLIC_SIRVOY_* env vars).
 * 3. If Sirvoy prefilling is enabled for your account, map each room slug in `roomMappings` and set `supportsPrefill: true`.
 */
const scriptUrl = process.env.NEXT_PUBLIC_SIRVOY_SCRIPT_URL ?? '';
const bookingEngineId = process.env.NEXT_PUBLIC_SIRVOY_ENGINE_ID ?? '';

export const SIRVOY_CONFIG: SirvoyIntegrationConfig = {
  isConfigured: Boolean(scriptUrl && bookingEngineId),
  scriptUrl,
  bookingEngineId,
  supportsPrefill: false,
  roomMappings: {
    'single-room-economy': '',
    'double-room': '',
    '3-bed-room': '',
    '4-bed-room': '',
    '5-bed-room': '',
  },
};
