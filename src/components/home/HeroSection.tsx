import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { getImageAsset } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';
import { BookingSearchBar } from '../booking/BookingSearchBar';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export const HeroSection: React.FC = () => {
  const { t, pick } = useLanguage();
  const heroAsset = getImageAsset('exterior-night-wide');

  return (
    <section className="relative bg-background pb-10 sm:pb-14">
      <div className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[640px] flex items-center overflow-hidden bg-primary">
        <img
          src={heroAsset.localPath}
          alt={pick(heroAsset.alt)}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Measured gradient scrim for WCAG AA contrast across hero copy */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary/85 via-transparent to-primary/40"
        />

        <Container className="relative z-10 pt-24 pb-20 sm:pt-28 sm:pb-24">
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              {t.hero.eyebrow}
            </p>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-text-light">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-text-light/90 max-w-xl">
              {t.hero.subtitle}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button to={SITE_CONFIG.bookingRoute} variant="accent" size="lg">
                {t.common.bookStay}
              </Button>
              <Button to="/rooms" variant="outline-light" size="lg">
                {t.common.exploreRooms}
              </Button>
            </div>

            <div className="pt-3 text-xs sm:text-sm font-medium text-text-light/85 grid grid-cols-2 gap-x-4 gap-y-1.5 sm:flex sm:flex-wrap sm:items-center sm:gap-x-2.5">
              <span>{t.hero.factBreakfast}</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>{t.hero.factWifi}</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>{t.hero.factParking}</span>
              <span className="hidden sm:inline" aria-hidden="true">·</span>
              <span>{t.hero.factHighway}</span>
            </div>
          </div>
        </Container>
      </div>

      {/* Overlapping Booking Search Bar */}
      <Container className="relative z-20 -mt-10 sm:-mt-12">
        <BookingSearchBar />
      </Container>
    </section>
  );
};
