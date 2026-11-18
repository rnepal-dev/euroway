import React from 'react';

type SectionTone = 'background' | 'secondary' | 'surface' | 'primary';

interface SectionProps {
  children: React.ReactNode;
  tone?: SectionTone;
  spacing?: 'default' | 'compact' | 'none';
  className?: string;
  id?: string;
}

const TONE_CLASSES: Record<SectionTone, string> = {
  background: 'bg-background text-text-primary',
  secondary: 'bg-background-secondary text-text-primary',
  surface: 'bg-surface text-text-primary',
  primary: 'bg-primary text-text-light',
};

const SPACING_CLASSES: Record<NonNullable<SectionProps['spacing']>, string> = {
  default: 'py-14 sm:py-20',
  compact: 'py-10 sm:py-14',
  none: '',
};

export const Section: React.FC<SectionProps> = ({
  children,
  tone = 'background',
  spacing = 'default',
  className = '',
  id,
}) => {
  return (
    <section
      id={id}
      className={`${TONE_CLASSES[tone]} ${SPACING_CLASSES[spacing]} ${className}`}
    >
      {children}
    </section>
  );
};
