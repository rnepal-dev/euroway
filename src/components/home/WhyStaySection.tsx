import React from 'react';
import { BedDouble, Car, Coffee, Luggage, Route, Wifi } from 'lucide-react';
import { getLocalization } from '../../i18n/getLocalization';
import { Locale } from '../../types/hotel';
import { Container } from '../ui/Container';
import { IconText } from '../ui/IconText';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyStaySection: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
  const { t } = getLocalization(locale);

  const benefits = [
    {
      icon: Coffee,
      title: t.whyBenefits.breakfastTitle,
      description: t.whyBenefits.breakfastDesc,
    },
    {
      icon: Wifi,
      title: t.whyBenefits.wifiTitle,
      description: t.whyBenefits.wifiDesc,
    },
    {
      icon: Car,
      title: t.whyBenefits.parkingTitle,
      description: t.whyBenefits.parkingDesc,
    },
    {
      icon: Route,
      title: t.whyBenefits.locationTitle,
      description: t.whyBenefits.locationDesc,
    },
    {
      icon: BedDouble,
      title: t.whyBenefits.roomsTitle,
      description: t.whyBenefits.roomsDesc,
    },
    {
      icon: Luggage,
      title: t.whyBenefits.assistanceTitle,
      description: t.whyBenefits.assistanceDesc,
    },
  ];

  return (
    <Section tone="secondary" spacing="default">
      <Container>
        <div className="space-y-10">
          <SectionHeading
            eyebrow={t.home.whyEyebrow}
            title={t.home.whyTitle}
            subtitle={t.home.whySubtitle}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <IconText
                key={item.title}
                variant="card"
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
