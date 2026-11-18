'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div
        className="fixed inset-0 bg-primary/60 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-y-0 right-0 flex w-full max-w-sm flex-col justify-between bg-surface p-6 shadow-elevated overflow-y-auto">
        <div>
          <div className="flex items-center justify-between border-b border-border-subtle pb-4">
            <span className="font-display text-xl font-medium text-primary">
              {SITE_CONFIG.hotelName}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.nav.menuClose}
              className="flex h-11 w-11 items-center justify-center rounded-theme-md text-text-primary hover:bg-background"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile links">
            {SITE_CONFIG.footerNav.map((item) => {
              const isActive =
                item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={onClose}
                  className={`min-h-[44px] flex items-center rounded-theme-md px-3.5 py-2.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-background-secondary text-primary font-semibold'
                      : 'text-text-primary hover:bg-background'
                  }`}
                >
                  {t.nav[item.labelKey]}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 pt-6 border-t border-border-subtle flex items-center justify-between">
            <span className="text-sm font-medium text-text-secondary">
              {t.common.adults === 'Adults' ? 'Language' : 'Språk'}
            </span>
            <LanguageSwitcher variant="dark" />
          </div>
        </div>

        <div className="mt-8 space-y-4 pt-6 border-t border-border-subtle">
          <div className="space-y-2 text-sm text-text-secondary">
            <a
              href={SITE_CONFIG.contact.phoneHref}
              className="flex items-center gap-2.5 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <a
              href={SITE_CONFIG.contact.emailHref}
              className="flex items-center gap-2.5 hover:text-primary"
            >
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.email}</span>
            </a>
          </div>
          <Button
            to={SITE_CONFIG.bookingRoute}
            variant="primary"
            className="w-full"
            ariaLabel={t.nav.bookNow}
          >
            <span onClick={onClose}>{t.nav.bookNow}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
