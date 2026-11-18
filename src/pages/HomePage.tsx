import React from 'react';
import { SITE_CONFIG } from '../config/site';
import { useLanguage } from '../i18n/LanguageContext';
import { BookingCTA } from '../components/common/BookingCTA';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { FacilitiesPreviewSection } from '../components/home/FacilitiesPreviewSection';
import { FeaturedRoomsSection } from '../components/home/FeaturedRoomsSection';
import { GalleryPreviewSection } from '../components/home/GalleryPreviewSection';
import { HeroSection } from '../components/home/HeroSection';
import { LocationSection } from '../components/home/LocationSection';
import { WhyStaySection } from '../components/home/WhyStaySection';
import { DocumentHead } from '../components/ui/DocumentHead';

export const HomePage: React.FC = () => {
  const { pick } = useLanguage();

  return (
    <>
      <DocumentHead
        title={pick(SITE_CONFIG.seo.defaultTitle)}
        description={pick(SITE_CONFIG.seo.defaultDescription)}
      />
      <HeroSection />
      <AboutPreviewSection />
      <WhyStaySection />
      <FeaturedRoomsSection />
      <FacilitiesPreviewSection />
      <GalleryPreviewSection />
      <LocationSection />
      <BookingCTA />
    </>
  );
};
