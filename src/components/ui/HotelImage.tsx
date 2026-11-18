'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ImageOff } from 'lucide-react';
import { getImageAsset } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';

interface HotelImageProps {
  assetId: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  aspectClassName?: string;
  sizes?: string;
}

export const HotelImage: React.FC<HotelImageProps> = ({
  assetId,
  className = '',
  imgClassName = '',
  priority = false,
  aspectClassName = 'aspect-[4/3]',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
}) => {
  const { pick } = useLanguage();
  const asset = getImageAsset(assetId);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-background-secondary ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <Image
          src={asset.localPath}
          alt={pick(asset.alt)}
          fill
          sizes={sizes}
          preload={priority}
          loading={priority ? 'eager' : undefined}
          onError={() => setHasError(true)}
          className={`object-cover ${imgClassName}`}
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
