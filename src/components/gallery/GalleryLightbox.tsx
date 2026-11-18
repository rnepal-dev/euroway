'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ImageAsset } from '../../types/hotel';
import { useLanguage } from '../../i18n/LanguageContext';

interface GalleryLightboxProps {
  assets: ImageAsset[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  assets,
  activeIndex,
  onClose,
  onNavigate,
}) => {
  const { t, pick } = useLanguage();

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((activeIndex + 1) % assets.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((activeIndex - 1 + assets.length) % assets.length);
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, assets.length, onClose, onNavigate]);

  if (activeIndex === null || !assets[activeIndex]) {
    return null;
  }

  const current = assets[activeIndex];
  const prevIndex = (activeIndex - 1 + assets.length) % assets.length;
  const nextIndex = (activeIndex + 1) % assets.length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={pick(current.alt)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary/90 p-4 sm:p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl rounded-theme-xl bg-surface p-3 sm:p-5 shadow-elevated"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 pb-3">
          <p className="text-xs sm:text-sm font-medium text-text-secondary tabular-nums">
            {activeIndex + 1} / {assets.length}
            {current.caption && (
              <>
                <span className="mx-2" aria-hidden="true">·</span>
                <span className="text-text-primary">{pick(current.caption)}</span>
              </>
            )}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.common.close}
            className="flex h-10 w-10 items-center justify-center rounded-theme-md text-text-primary hover:bg-background transition-colors"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative overflow-hidden rounded-theme-lg bg-background">
          <Image
            src={current.localPath}
            alt={pick(current.alt)}
            width={1200}
            height={800}
            sizes="(max-width: 1024px) 95vw, 1024px"
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
          />

          {assets.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onNavigate(prevIndex)}
                aria-label={t.common.previous}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-theme-md bg-surface/90 text-primary shadow-card hover:bg-surface transition-colors"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate(nextIndex)}
                aria-label={t.common.next}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-theme-md bg-surface/90 text-primary shadow-card hover:bg-surface transition-colors"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
