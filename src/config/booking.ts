import { SirvoyIntegrationConfig } from '../types/hotel';

/**
 * Centralized Sirvoy PMS / Booking Engine Configuration.
 *
 * To activate the live Sirvoy booking widget:
 * 1. Obtain your official Sirvoy embed script URL and booking engine ID from Sirvoy.
 * 2. Populate `scriptUrl`, `bookingEngineId`, and set `isConfigured: true` (or supply via VITE_SIRVOY_* env vars).
 * 3. If Sirvoy prefilling is enabled for your account, map each room slug in `roomMappings` and set `supportsPrefill: true`.
 */
export const SIRVOY_CONFIG: SirvoyIntegrationConfig = {
  isConfigured: Boolean(
    import.meta.env.VITE_SIRVOY_SCRIPT_URL && import.meta.env.VITE_SIRVOY_ENGINE_ID
  ),
  scriptUrl: import.meta.env.VITE_SIRVOY_SCRIPT_URL ?? '',
  bookingEngineId: import.meta.env.VITE_SIRVOY_ENGINE_ID ?? '',
  supportsPrefill: false,
  roomMappings: {
    'single-room-economy': '',
    'double-room': '',
    '3-bed-room': '',
    '4-bed-room': '',
    '5-bed-room': '',
  },
};
