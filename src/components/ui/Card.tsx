import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const PADDING_MAP: Record<NonNullable<CardProps['padding']>, string> = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
}) => {
  return (
    <div
      className={`bg-surface border border-border-subtle rounded-theme-lg shadow-card ${PADDING_MAP[padding]} ${className}`}
    >
      {children}
    </div>
  );
};
