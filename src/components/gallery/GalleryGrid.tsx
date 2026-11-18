'use client';

import React, { useState } from 'react';
import { Expand } from 'lucide-react';
import { ImageAsset } from '../../types/hotel';
import { useLanguage } from '../../i18n/LanguageContext';
import { HotelImage } from '../ui/HotelImage';
import { GalleryLightbox } from './GalleryLightbox';

interface GalleryGridProps {
  assets: ImageAsset[];
  showFilters?: boolean;
}

type GalleryFilter = 'all' | 'exterior' | 'interior' | 'dining' | 'rooms';

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  assets,
  showFilters = true,
}) => {
  const { t, pick } = useLanguage();
  const [filter, setFilter] = useState<GalleryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleAssets =
    filter === 'all' ? assets : assets.filter((item) => item.category === filter);

  const filterButtons: Array<{ key: GalleryFilter; label: string }> = [
    { key: 'all', label: t.galleryPage.categories.all },
    { key: 'rooms', label: t.galleryPage.categories.rooms },
    { key: 'dining', label: t.galleryPage.categories.dining },
    { key: 'interior', label: t.galleryPage.categories.interior },
    { key: 'exterior', label: t.galleryPage.categories.exterior },
  ];

  return (
    <div className="space-y-8">
      {showFilters && (
        <div
          role="group"
          aria-label="Gallery category filter"
          className="inline-flex flex-wrap items-center gap-1.5 rounded-theme-lg border border-border-subtle bg-surface p-1.5"
        >
          {filterButtons.map((btn) => {
            const active = filter === btn.key;
            return (
              <button
                key={btn.key}
                type="button"
                onClick={() => {
                  setFilter(btn.key);
                  setLightboxIndex(null);
                }}
                aria-pressed={active}
                className={`min-h-[40px] rounded-theme-md px-3.5 py-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  active
                    ? 'bg-primary text-text-light'
                    : 'text-text-secondary hover:bg-background hover:text-text-primary'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleAssets.map((asset, index) => (
          <figure
            key={asset.id}
            className="group overflow-hidden rounded-theme-lg border border-border-subtle bg-surface shadow-card"
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(index)}
              aria-label={`${pick(asset.alt)} — ${t.common.viewGallery}`}
              className="relative block w-full text-left overflow-hidden"
            >
              <HotelImage
                assetId={asset.id}
                priority={index < 3}
                aspectClassName="aspect-[4/3]"
                imgClassName="transition-transform duration-300 group-hover:scale-[1.03]"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-theme-md bg-surface/90 text-primary opacity-0 shadow-card transition-opacity duration-150 group-hover:opacity-100"
              >
                <Expand className="h-4 w-4" />
              </span>
            </button>
            {asset.caption && (
              <figcaption className="px-4 py-3 text-xs sm:text-sm font-medium text-text-primary border-t border-border-subtle">
                {pick(asset.caption)}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      <GalleryLightbox
        assets={visibleAssets}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </div>
  );
};
