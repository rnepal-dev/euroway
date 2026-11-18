import React, { useState } from 'react';
import { getImageAsset } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';
import { HotelImage } from '../ui/HotelImage';

interface RoomGalleryProps {
  imageIds: string[];
  roomName: string;
}

export const RoomGallery: React.FC<RoomGalleryProps> = ({ imageIds, roomName }) => {
  const { pick } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const safeIds = imageIds.length > 0 ? imageIds : ['room-1-main'];
  const currentId = safeIds[activeIndex] ?? safeIds[0];
  const currentAsset = getImageAsset(currentId);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-theme-xl border border-border-subtle bg-surface shadow-card">
        <HotelImage
          assetId={currentId}
          priority
          aspectClassName="aspect-[16/10]"
        />
      </div>

      {currentAsset.caption && (
        <p className="text-xs text-text-secondary">
          {pick(currentAsset.caption)}
        </p>
      )}

      {safeIds.length > 1 && (
        <div
          className="grid grid-cols-4 sm:grid-cols-5 gap-2.5"
          role="group"
          aria-label={`${roomName} photo thumbnails`}
        >
          {safeIds.map((id, idx) => {
            const isSelected = idx === activeIndex;
            const thumbAsset = getImageAsset(id);
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-pressed={isSelected}
                aria-label={`${roomName} view ${idx + 1}: ${pick(thumbAsset.alt)}`}
                className={`overflow-hidden rounded-theme-md border-2 transition-all ${
                  isSelected
                    ? 'border-primary ring-2 ring-accent/50'
                    : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <HotelImage assetId={id} aspectClassName="aspect-[4/3]" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
