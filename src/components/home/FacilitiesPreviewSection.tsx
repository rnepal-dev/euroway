import React from 'react';
import { Accessibility, ArrowRight, Ban, Car, Shirt, Utensils } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { HotelImage } from '../ui/HotelImage';
import { IconText } from '../ui/IconText';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const FacilitiesPreviewSection: React.FC = () => {
  const { t, locale } = useLanguage();

  const highlights =
    locale === 'en'
      ? [
          {
            icon: Utensils,
            title: 'Breakfast dining room',
            description: 'Complimentary continental breakfast served daily, including individually wrapped options.',
          },
          {
            icon: Car,
            title: 'Garage self-parking',
            description: 'Free parking included for guests; instructions provided in your arrival key packet.',
          },
          {
            icon: Accessibility,
            title: 'Elevator & accessible rooms',
            description: 'Accessible bathrooms with toilet grab bars and wheelchair availability.',
          },
          {
            icon: Shirt,
            title: 'Laundry & luggage storage',
            description: 'Practical on-site laundry facilities and bag storage for travelers.',
          },
          {
            icon: Ban,
            title: '100% smoke-free premises',
            description: 'Clean non-smoking rooms with 60°C+ sanitized linen laundering.',
          },
        ]
      : [
          {
            icon: Utensils,
            title: 'Frukostmatsal',
            description: 'Kostnadsfri kontinental frukostbuffé varje morgon samt individuellt förpackade alternativ.',
          },
          {
            icon: Car,
            title: 'Fri garageparkering',
            description: 'Parkering i garaget ingår i vistelsen – instruktioner lämnas med nyckeln vid ankomst.',
          },
          {
            icon: Accessibility,
            title: 'Hiss & tillgängliga rum',
            description: 'Tillgänglighetsanpassade badrum med stödhandtag samt rullstol vid behov.',
          },
          {
            icon: Shirt,
            title: 'Tvättstuga & bagagerum',
            description: 'Praktiska tvättmöjligheter på plats och trygg bagageförvaring.',
          },
          {
            icon: Ban,
            title: 'Helt rökfritt hotell',
            description: 'Rökfria rum och sängkläder som tvättas i minst 60°C.',
          },
        ];

  return (
    <Section tone="surface" spacing="default">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
            <SectionHeading
              eyebrow={t.home.facilitiesEyebrow}
              title={t.home.facilitiesTitle}
              subtitle={t.home.facilitiesSubtitle}
            />

            <div className="space-y-4">
              {highlights.map((item) => (
                <IconText
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>

            <div className="pt-2">
              <Button to="/facilities" variant="primary" size="md">
                <span>{t.common.viewAllFacilities}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            <div className="overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
              <HotelImage
                assetId="breakfast-dining"
                className="h-full"
                aspectClassName="aspect-[4/3] sm:h-full"
              />
            </div>
            <div className="overflow-hidden rounded-theme-xl border border-border-subtle shadow-card">
              <HotelImage
                assetId="lobby-lounge"
                className="h-full"
                aspectClassName="aspect-[4/3] sm:h-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
