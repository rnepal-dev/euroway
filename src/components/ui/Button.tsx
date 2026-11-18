import React from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light' | 'ghost' | 'accent';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ActionButtonProps
  extends BaseButtonProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> {
  to?: undefined;
  href?: undefined;
}

interface RouterLinkButtonProps extends BaseButtonProps {
  to: string;
  href?: undefined;
  ariaLabel?: string;
}

interface ExternalLinkButtonProps extends BaseButtonProps {
  href: string;
  to?: undefined;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export type ButtonProps = ActionButtonProps | RouterLinkButtonProps | ExternalLinkButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-text-light hover:bg-primary-hover border border-transparent shadow-card',
  secondary:
    'bg-background-secondary text-text-primary hover:bg-surface border border-border-strong',
  outline:
    'bg-transparent text-primary border border-primary hover:bg-primary hover:text-text-light',
  'outline-light':
    'bg-transparent text-text-light border border-text-light/70 hover:bg-surface hover:text-primary hover:border-surface',
  ghost:
    'bg-transparent text-text-primary hover:bg-background-secondary/70 border border-transparent',
  accent:
    'bg-accent text-primary hover:bg-surface border border-transparent font-semibold shadow-card',
};

const SIZE_CLASSES: Record<ButtonSize, string> = {
  sm: 'min-h-[40px] px-4 py-2 text-sm',
  md: 'min-h-[44px] px-5 py-2.5 text-sm sm:text-base',
  lg: 'min-h-[48px] px-7 py-3 text-base',
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'primary', size = 'md', className = '', children } = props;
  const classes = `inline-flex items-center justify-center gap-2 rounded-theme-md font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if ('to' in props && props.to) {
    return (
      <Link href={props.to} className={classes} aria-label={props.ariaLabel}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    return (
      <a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={classes}
        aria-label={props.ariaLabel}
      >
        {children}
      </a>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } =
    props as ActionButtonProps;

  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
};
