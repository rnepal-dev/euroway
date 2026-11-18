import React from 'react';
import { Locale } from '../../types/hotel';
import { Header } from './Header';
import { Footer } from './Footer';

export const SiteLayout: React.FC<{ locale: Locale; children: React.ReactNode }> = ({
  locale,
  children,
}) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text-primary">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  );
};
