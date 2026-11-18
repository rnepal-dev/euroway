import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { SITE_CONFIG } from '../config/site';
import { LanguageProvider } from '../i18n/LanguageContext';
import { getServerLocale } from '../i18n/serverLocale';
import { SiteLayout } from '../components/layout/SiteLayout';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-fraunces',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

const metadataBaseUrl = process.env.APP_URL || 'https://eurowayhotel.se';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const title = SITE_CONFIG.seo.defaultTitle[locale];
  const description = SITE_CONFIG.seo.defaultDescription[locale];

  return {
    metadataBase: new URL(metadataBaseUrl),
    title: {
      default: title,
      template: '%s | Euroway Hotel',
    },
    description,
    icons: {
      icon: '/images/hotel/favicon.png',
    },
    openGraph: {
      type: 'website',
      siteName: SITE_CONFIG.hotelName,
      title,
      description,
      images: [
        {
          url: '/images/gallery/1.jpg',
          width: 1200,
          height: 800,
          alt: 'Euroway Hotel exterior at Stigs Center in Hisings Backa, Gothenburg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/gallery/1.jpg'],
    },
  };
}

const HOTEL_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Hotel',
  name: 'Euroway Hotel',
  description:
    'Comfortable 3-star hotel located at Stigs Center in Hisings Backa, Gothenburg, Sweden, featuring complimentary breakfast, free Wi-Fi, and free garage parking.',
  url: 'https://eurowayhotel.se/',
  telephone: '+46 31 58 07 50',
  email: 'mail@eurowayhotel.se',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Importgatan 2D',
    addressLocality: 'Hisings Backa',
    addressRegion: 'Västra Götaland',
    postalCode: '422 46',
    addressCountry: 'SE',
  },
  checkinTime: '15:00',
  checkoutTime: '11:00',
  petsAllowed: false,
  smokingAllowed: false,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Complimentary Breakfast', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Garage Parking', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible Facilities', value: true },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getServerLocale();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(HOTEL_JSON_LD) }}
        />
        <LanguageProvider initialLocale={locale}>
          <SiteLayout locale={locale}>{children}</SiteLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
