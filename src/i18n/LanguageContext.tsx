'use client';

import React, { createContext, useContext, useEffect, useMemo, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Locale, LocalizedText } from '../types/hotel';
import { TRANSLATIONS, TranslationDictionary } from './translations';

interface LanguageContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  isPending: boolean;
  t: TranslationDictionary;
  pick: (text: LocalizedText) => string;
}

const STORAGE_KEY = 'euroway_locale';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider: React.FC<{
  initialLocale?: Locale;
  children: React.ReactNode;
}> = ({ initialLocale = 'en', children }) => {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setLocaleState(initialLocale);
  }, [initialLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=31536000; SameSite=Lax`;
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
    setLocaleState(next);
    startTransition(() => {
      router.refresh();
    });
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      isPending,
      t: TRANSLATIONS[locale],
      pick: (text: LocalizedText) => text[locale],
    }),
    [locale, isPending]
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
