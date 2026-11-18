import { cookies } from 'next/headers';
import { Locale } from '../types/hotel';
import { getLocalization } from './getLocalization';

export const LOCALE_COOKIE_NAME = 'euroway_locale';

export async function getServerLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const value = cookieStore.get(LOCALE_COOKIE_NAME)?.value;
  return value === 'sv' ? 'sv' : 'en';
}

export async function getServerTranslations() {
  const locale = await getServerLocale();
  return getLocalization(locale);
}
