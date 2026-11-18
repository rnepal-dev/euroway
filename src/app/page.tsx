import type { Metadata } from 'next';
import { BookingCTA } from '../components/common/BookingCTA';
import { AboutPreviewSection } from '../components/home/AboutPreviewSection';
import { FacilitiesPreviewSection } from '../components/home/FacilitiesPreviewSection';
import { FeaturedRoomsSection } from '../components/home/FeaturedRoomsSection';
import { GalleryPreviewSection } from '../components/home/GalleryPreviewSection';
import { HeroSection } from '../components/home/HeroSection';
import { LocationSection } from '../components/home/LocationSection';
import { WhyStaySection } from '../components/home/WhyStaySection';
import { SITE_CONFIG } from '../config/site';
import { getServerLocale } from '../i18n/serverLocale';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const title = SITE_CONFIG.seo.defaultTitle[locale];
  const description = SITE_CONFIG.seo.defaultDescription[locale];

  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default async function HomePage() {
  const locale = await getServerLocale();

  return (
    <>
      <HeroSection locale={locale} />
      <AboutPreviewSection locale={locale} />
      <WhyStaySection locale={locale} />
      <FeaturedRoomsSection locale={locale} />
      <FacilitiesPreviewSection locale={locale} />
      <GalleryPreviewSection locale={locale} />
      <LocationSection locale={locale} />
      <BookingCTA locale={locale} />
    </>
  );
}
