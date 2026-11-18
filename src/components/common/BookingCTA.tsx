import React from 'react';
import { Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

export const BookingCTA: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section tone="primary" spacing="default">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {SITE_CONFIG.hotelName} · {SITE_CONFIG.address.region}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-medium leading-tight text-text-light">
              {t.home.ctaTitle}
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-text-light/85">
              {t.home.ctaSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Button to={SITE_CONFIG.bookingRoute} variant="accent" size="lg">
              {t.common.bookStay}
            </Button>
            <Button href={SITE_CONFIG.contact.phoneHref} variant="outline-light" size="lg">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
