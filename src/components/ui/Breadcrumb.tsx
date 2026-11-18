import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'light' | 'dark';
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, theme = 'light' }) => {
  const linkColor =
    theme === 'dark'
      ? 'text-text-light/80 hover:text-text-light'
      : 'text-text-secondary hover:text-text-primary';
  const activeColor = theme === 'dark' ? 'text-text-light' : 'text-text-primary';

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight
                  className={`h-3.5 w-3.5 ${theme === 'dark' ? 'text-text-light/50' : 'text-text-secondary/60'}`}
                  aria-hidden="true"
                />
              )}
              {item.to && !isLast ? (
                <Link href={item.to} className={`transition-colors ${linkColor}`}>
                  {item.label}
                </Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined} className={`font-medium ${activeColor}`}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
