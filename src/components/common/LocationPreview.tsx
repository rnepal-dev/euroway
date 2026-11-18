import React from 'react';
import { Bus, Car, ExternalLink, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { IconText } from '../ui/IconText';

interface LocationPreviewProps {
  showDirectionsButton?: boolean;
}

export const LocationPreview: React.FC<LocationPreviewProps> = ({
  showDirectionsButton = true,
}) => {
  const { t, pick } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
      <div className="lg:col-span-5 flex flex-col justify-between rounded-theme-xl border border-border-subtle bg-surface p-6 sm:p-8 shadow-card space-y-6">
        <div className="space-y-5">
          <IconText
            icon={MapPin}
            title={t.locationPage.addressHeading}
            description={`${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.postalCode} ${SITE_CONFIG.address.city}, ${pick(SITE_CONFIG.address.country)} (${SITE_CONFIG.address.area})`}
          />
          <IconText
            icon={Car}
            title={SITE_CONFIG.location.highwayExit}
            description={SITE_CONFIG.location.entranceLandmark}
          />
          <IconText
            icon={Bus}
            title={`${t.locationPage.transitHeading}: ${SITE_CONFIG.location.busStop}`}
            description={t.home.locationSubtitle}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border-subtle">
          {showDirectionsButton && (
            <Button to="/location" variant="primary" size="md">
              {t.common.getDirections}
            </Button>
          )}
          <Button
            href={SITE_CONFIG.location.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="md"
          >
            <span>{t.locationPage.openInMaps}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="lg:col-span-7 overflow-hidden rounded-theme-xl border border-border-subtle bg-surface shadow-card min-h-[320px] lg:min-h-[380px]">
        <iframe
          title={`${SITE_CONFIG.hotelName} Map — ${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`}
          src={SITE_CONFIG.location.openStreetMapEmbedUrl}
          className="h-full w-full min-h-[320px] border-0"
          loading="lazy"
        />
      </div>
    </div>
  );
};
