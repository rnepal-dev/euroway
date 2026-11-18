import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark' | 'footer';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'dark' }) => {
  const { locale, setLocale } = useLanguage();

  const containerClasses =
    variant === 'light'
      ? 'bg-primary/45 border border-text-light/25'
      : variant === 'footer'
        ? 'bg-primary-hover/60 border border-text-light/20'
        : 'bg-background border border-border-subtle';

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-theme-md p-0.5 ${containerClasses}`}
    >
      {SITE_CONFIG.supportedLocales.map((item) => {
        const isActive = locale === item.code;
        const activeClasses =
          variant === 'light' || variant === 'footer'
            ? 'bg-surface text-primary shadow-sm'
            : 'bg-primary text-text-light shadow-sm';
        const inactiveClasses =
          variant === 'light' || variant === 'footer'
            ? 'text-text-light/85 hover:text-text-light'
            : 'text-text-secondary hover:text-text-primary';

        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLocale(item.code)}
            aria-pressed={isActive}
            aria-label={item.nativeName}
            className={`min-h-[34px] px-2.5 py-1 text-xs font-semibold rounded-theme-sm whitespace-nowrap shrink-0 transition-colors ${
              isActive ? activeClasses : inactiveClasses
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};
