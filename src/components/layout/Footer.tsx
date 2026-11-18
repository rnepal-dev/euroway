import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { getLocalization } from '../../i18n/getLocalization';
import { Locale } from '../../types/hotel';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC<{ locale: Locale }> = ({ locale }) => {
  const { t, pick } = getLocalization(locale);
  const currentYear = new Date().getFullYear();

  const exploreLinks = SITE_CONFIG.footerNav.slice(0, 4);
  const infoLinks = SITE_CONFIG.footerNav.slice(4);

  return (
    <footer className="bg-primary text-text-light border-t border-primary-hover">
      <Container>
        <div className="py-12 sm:py-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block font-display text-2xl font-semibold text-text-light">
              {SITE_CONFIG.hotelName}
            </Link>
            <p className="text-sm leading-relaxed text-text-light/80 max-w-sm">
              {t.footer.description}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button to={SITE_CONFIG.bookingRoute} variant="accent" size="sm">
                {t.nav.bookNow}
              </Button>
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {t.footer.exploreHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {exploreLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-text-light/80 hover:text-text-light transition-colors"
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Links */}
          <div className="lg:col-span-2 space-y-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {t.footer.infoHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {infoLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="text-text-light/80 hover:text-text-light transition-colors"
                  >
                    {t.nav[item.labelKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {t.footer.contactHeading}
            </h2>
            <ul className="space-y-3 text-sm text-text-light/85">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode}{' '}
                  {SITE_CONFIG.address.city}, {pick(SITE_CONFIG.address.country)}
                </span>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-text-light transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.contact.emailHref}
                  className="inline-flex items-center gap-2.5 hover:text-text-light transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-text-light/15 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-xs text-text-light/70">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>{t.footer.copyright.replace('{year}', String(currentYear))}</span>
            <span aria-hidden="true">·</span>
            <span>{t.footer.operator}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="hover:text-text-light transition-colors">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-text-light transition-colors">
              {t.footer.termsConditions}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
