import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  action,
  className = '',
}) => {
  const isCenter = align === 'center';
  const titleColor = theme === 'dark' ? 'text-text-light' : 'text-text-primary';
  const subtitleColor = theme === 'dark' ? 'text-text-light/80' : 'text-text-secondary';
  const eyebrowColor = theme === 'dark' ? 'text-accent' : 'text-primary';

  return (
    <div
      className={`flex flex-col gap-4 ${
        isCenter
          ? 'items-center text-center max-w-2xl mx-auto'
          : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <div className={isCenter ? 'space-y-3' : 'space-y-3 max-w-2xl'}>
        {eyebrow && (
          <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${eyebrowColor}`}>
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-medium leading-[1.2] tracking-tight ${titleColor}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p className={`text-base sm:text-[1.0625rem] leading-relaxed ${subtitleColor}`}>
            {subtitle}
          </p>
        )}
      </div>
      {action && !isCenter && <div className="shrink-0">{action}</div>}
      {action && isCenter && <div className="pt-2">{action}</div>}
    </div>
  );
};
