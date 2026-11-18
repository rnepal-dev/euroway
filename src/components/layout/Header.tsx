'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavigation } from './MobileNavigation';

export const Header: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const useTransparentStyle = isHome && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
          useTransparentStyle
            ? 'bg-gradient-to-b from-primary/80 to-transparent text-text-light'
            : 'bg-surface/95 backdrop-blur-md text-text-primary border-b border-border-subtle shadow-card'
        }`}
      >
        <Container>
          <div className="flex h-16 sm:h-[72px] items-center justify-between gap-6 lg:gap-8">
            <Link
              href="/"
              className={`font-display text-xl sm:text-2xl font-semibold tracking-tight whitespace-nowrap shrink-0 transition-colors ${
                useTransparentStyle ? 'text-text-light' : 'text-primary'
              }`}
            >
              {SITE_CONFIG.hotelName}
            </Link>

            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7"
            >
              {SITE_CONFIG.headerNav.map((item) => {
                const isActive =
                  item.path === '/' ? pathname === '/' : pathname.startsWith(item.path);
                const base =
                  'text-sm font-medium whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors';
                const stateClass = useTransparentStyle
                  ? isActive
                    ? 'text-text-light border-accent'
                    : 'text-text-light/85 border-transparent hover:text-text-light hover:border-text-light/40'
                  : isActive
                    ? 'text-primary border-primary font-semibold'
                    : 'text-text-secondary border-transparent hover:text-primary hover:border-border-strong';

                return (
                  <Link key={item.path} href={item.path} className={`${base} ${stateClass}`}>
                    {t.nav[item.labelKey]}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <div className="hidden sm:block">
                <LanguageSwitcher variant={useTransparentStyle ? 'light' : 'dark'} />
              </div>

              <Button
                to={SITE_CONFIG.bookingRoute}
                variant={useTransparentStyle ? 'accent' : 'primary'}
                size="sm"
              >
                {t.nav.bookNow}
              </Button>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label={t.nav.menuOpen}
                aria-expanded={mobileOpen}
                className={`lg:hidden flex h-11 w-11 items-center justify-center rounded-theme-md transition-colors ${
                  useTransparentStyle
                    ? 'text-text-light hover:bg-surface/15'
                    : 'text-text-primary hover:bg-background'
                }`}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNavigation isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
