import React from 'react';
import { AlertCircle, Inbox, Loader2 } from 'lucide-react';

export const LoadingState: React.FC<{ message: string }> = ({ message }) => (
  <div
    role="status"
    className="flex flex-col items-center justify-center gap-3 rounded-theme-lg border border-border-subtle bg-surface p-10 text-center"
  >
    <Loader2 className="h-7 w-7 animate-spin text-primary" aria-hidden="true" />
    <p className="text-sm font-medium text-text-secondary">{message}</p>
  </div>
);

export const EmptyState: React.FC<{ title: string; action?: React.ReactNode }> = ({
  title,
  action,
}) => (
  <div className="flex flex-col items-center justify-center gap-3 rounded-theme-lg border border-border-subtle bg-surface p-10 text-center">
    <Inbox className="h-7 w-7 text-text-secondary" aria-hidden="true" />
    <p className="text-base font-medium text-text-primary">{title}</p>
    {action}
  </div>
);

export const ErrorState: React.FC<{
  title: string;
  description: string;
  action?: React.ReactNode;
}> = ({ title, description, action }) => (
  <div
    role="alert"
    className="flex flex-col items-start gap-3 rounded-theme-lg border border-border-strong bg-surface p-6"
  >
    <div className="flex items-center gap-2.5 text-primary">
      <AlertCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <h3 className="text-base font-semibold text-text-primary">{title}</h3>
    </div>
    <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    {action && <div className="pt-1">{action}</div>}
  </div>
);
