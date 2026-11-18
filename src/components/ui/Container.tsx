import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'default',
}) => {
  const maxWidthClass =
    size === 'narrow'
      ? 'max-w-4xl'
      : size === 'wide'
        ? 'max-w-[84rem]'
        : 'max-w-[76rem]';

  return (
    <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};
