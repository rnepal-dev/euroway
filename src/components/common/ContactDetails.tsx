import React from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { getLocalization } from '../../i18n/getLocalization';
import { Locale } from '../../types/hotel';
import { Card } from '../ui/Card';

export const ContactDetails: React.FC<{ locale?: Locale }> = ({ locale = 'en' }) => {
  const { t, pick } = getLocalization(locale);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Card>
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.contactPage.phoneLabel}
            </h3>
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="block text-base font-semibold text-primary hover:underline tabular-nums"
            >
              {SITE_CONFIG.contact.phoneDisplay}
            </a>
            <p className="text-xs text-text-secondary tabular-nums">
              {SITE_CONFIG.contact.phoneLocal}
            </p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
            <Mail className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.contactPage.emailLabel}
            </h3>
            <a
              href={SITE_CONFIG.contact.emailHref}
              className="block text-base font-semibold text-primary hover:underline break-all"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.contactPage.addressLabel}
            </h3>
            <p className="text-sm sm:text-base font-medium text-text-primary">
              {SITE_CONFIG.address.street}
              <br />
              {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city},{' '}
              {pick(SITE_CONFIG.address.country)}
            </p>
            <p className="text-xs text-text-secondary">{SITE_CONFIG.address.area}</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-start gap-3.5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
            <Clock className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.contactPage.receptionLabel}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {t.contactPage.receptionNote}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
