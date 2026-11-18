import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Locale, LocalizedText } from '../types/hotel';
import { TRANSLATIONS, TranslationDictionary } from './translations';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: TranslationDictionary;
  pick: (text: LocalizedText) => string;
}

const STORAGE_KEY = 'euroway_locale';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') {
    return 'en';
  }
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved === 'en' || saved === 'sv') {
    return saved;
  }
  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      t: TRANSLATIONS[locale],
      pick: (text: LocalizedText) => text[locale],
    }),
    [locale]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
