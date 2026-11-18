import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconTextProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  variant?: 'card' | 'inline';
  className?: string;
}

export const IconText: React.FC<IconTextProps> = ({
  icon: Icon,
  title,
  description,
  variant = 'inline',
  className = '',
}) => {
  if (variant === 'card') {
    return (
      <div
        className={`flex items-start gap-4 rounded-theme-lg border border-border-subtle bg-surface p-5 shadow-card ${className}`}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold text-text-primary">{title}</h3>
          {description && (
            <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <div>
        <span className="text-sm font-medium text-text-primary">{title}</span>
        {description && (
          <p className="mt-0.5 text-sm text-text-secondary">{description}</p>
        )}
      </div>
    </div>
  );
};
