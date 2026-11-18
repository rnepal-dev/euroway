import { Locale, LocalizedText } from '../types/hotel';
import { TRANSLATIONS, TranslationDictionary } from './translations';

export function getLocalization(locale: Locale = 'en'): {
  locale: Locale;
  t: TranslationDictionary;
  pick: (text: LocalizedText) => string;
} {
  return {
    locale,
    t: TRANSLATIONS[locale],
    pick: (text: LocalizedText) => text[locale],
  };
}
