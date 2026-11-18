import React from 'react';
import {
  Accessibility,
  ArrowUpDown,
  Ban,
  Banknote,
  Bath,
  BedDouble,
  Bus,
  Car,
  CircleDot,
  Coffee,
  ConciergeBell,
  Droplets,
  Dumbbell,
  Layers,
  Luggage,
  Microwave,
  Monitor,
  Refrigerator,
  Route,
  Shield,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tv,
  Utensils,
  UtensilsCrossed,
  Wifi,
  LucideIcon,
} from 'lucide-react';
import { FacilityCategoryData, FacilityItem, Locale } from '../../types/hotel';
import { getLocalization } from '../../i18n/getLocalization';

const ICON_MAP: Record<string, LucideIcon> = {
  Accessibility,
  ArrowUpDown,
  Ban,
  Banknote,
  Bath,
  BedDouble,
  Bus,
  Car,
  CircleDot,
  Coffee,
  ConciergeBell,
  Droplets,
  Dumbbell,
  Layers,
  Luggage,
  Microwave,
  Monitor,
  Refrigerator,
  Route,
  Shield,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tv,
  Utensils,
  UtensilsCrossed,
  Wifi,
};

export const AmenityCard: React.FC<{ item: FacilityItem; locale?: Locale }> = ({
  item,
  locale = 'en',
}) => {
  const { pick } = getLocalization(locale);
  const Icon = ICON_MAP[item.iconName] ?? Sparkles;

  return (
    <div className="flex items-start gap-3.5 rounded-theme-lg border border-border-subtle bg-surface p-4 sm:p-5 shadow-card">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="space-y-1">
        <h4 className="text-sm sm:text-base font-semibold text-text-primary">
          {pick(item.label)}
        </h4>
        {item.detail && (
          <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
            {pick(item.detail)}
          </p>
        )}
      </div>
    </div>
  );
};

interface FacilityCategoryProps {
  category: FacilityCategoryData;
  locale?: Locale;
}

export const FacilityCategory: React.FC<FacilityCategoryProps> = ({
  category,
  locale = 'en',
}) => {
  const { t, pick } = getLocalization(locale);

  return (
    <div className="space-y-5">
      <div className="space-y-1.5 max-w-2xl">
        {category.scope === 'nearby' && (
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            {t.facilitiesPage.nearbyBadgeText}
          </p>
        )}
        <h3 className="font-display text-2xl font-medium text-text-primary">
          {pick(category.title)}
        </h3>
        <p className="text-sm sm:text-base text-text-secondary">
          {pick(category.description)}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item) => (
          <AmenityCard key={item.id} item={item} locale={locale} />
        ))}
      </div>
    </div>
  );
};
