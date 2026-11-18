import React from 'react';

interface BaseFieldProps {
  id: string;
  label: string;
  error?: string;
  className?: string;
}

type FormInputProps = BaseFieldProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'id' | 'className'>;

type SelectInputProps = BaseFieldProps &
  Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'id' | 'className'> & {
    options: Array<{ value: string | number; label: string }>;
  };

const BASE_CONTROL_CLASSES =
  'w-full min-h-[44px] rounded-theme-md border border-border-strong bg-surface px-3.5 py-2 text-sm text-text-primary transition-colors focus:border-primary focus:outline-none';

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  error,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </label>
      <input id={id} className={BASE_CONTROL_CLASSES} {...rest} />
      {error && (
        <p role="alert" className="text-xs font-medium text-primary">
          {error}
        </p>
      )}
    </div>
  );
};

export const DateInput: React.FC<FormInputProps> = (props) => {
  return <FormInput type="date" {...props} />;
};

export const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  error,
  options,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
        {label}
      </label>
      <select id={id} className={BASE_CONTROL_CLASSES} {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && (
        <p role="alert" className="text-xs font-medium text-primary">
          {error}
        </p>
      )}
    </div>
  );
};
