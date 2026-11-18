import React from 'react';
import { Container } from './Container';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';
import { getImageAsset } from '../../data/images';
import { useLanguage } from '../../i18n/LanguageContext';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  imageAssetId?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  imageAssetId,
  breadcrumbs,
}) => {
  const { pick } = useLanguage();
  const asset = imageAssetId ? getImageAsset(imageAssetId) : undefined;

  return (
    <section className="relative overflow-hidden bg-primary text-text-light pt-28 pb-14 sm:pt-32 sm:pb-16">
      {asset && (
        <>
          <img
            src={asset.localPath}
            alt={pick(asset.alt)}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/80 to-primary"
          />
        </>
      )}
      <Container className="relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbs} theme="dark" />
          </div>
        )}
        <div className="max-w-3xl space-y-3">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.15] tracking-tight text-text-light">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base sm:text-lg leading-relaxed text-text-light/85 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};
