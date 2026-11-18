import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';
import { getImageAsset } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';

interface HotelImageProps {
  assetId: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  aspectClassName?: string;
}

export const HotelImage: React.FC<HotelImageProps> = ({
  assetId,
  className = '',
  imgClassName = '',
  priority = false,
  aspectClassName = 'aspect-[4/3]',
}) => {
  const { pick } = useLanguage();
  const asset = getImageAsset(assetId);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-background-secondary ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={asset.localPath}
          alt={pick(asset.alt)}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={pick(asset.alt)}
          className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center text-text-secondary"
        >
          <ImageOff className="h-6 w-6 opacity-60" aria-hidden="true" />
          <span className="text-xs font-medium">{pick(asset.alt)}</span>
        </div>
      )}
    </div>
  );
};
