import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Settings2 } from 'lucide-react';
import { SIRVOY_CONFIG } from '../../config/booking';
import { SITE_CONFIG } from '../../config/site';
import { useLanguage } from '../../i18n/LanguageContext';
import { BookingSearchValues } from '../../types/hotel';
import { Button } from '../ui/Button';
import { ErrorState, LoadingState } from '../ui/StateFeedback';

interface SirvoyBookingEngineProps {
  searchParams: Partial<BookingSearchValues>;
}

/**
 * Isolated Sirvoy PMS Embed Adapter.
 * Handles client-only script injection, duplicate-load prevention,
 * loading/error states, and explicit configuration-pending guidance.
 */
export const SirvoyBookingEngine: React.FC<SirvoyBookingEngineProps> = ({
  searchParams,
}) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>(
    SIRVOY_CONFIG.isConfigured ? 'loading' : 'idle'
  );

  useEffect(() => {
    if (!SIRVOY_CONFIG.isConfigured || !SIRVOY_CONFIG.scriptUrl) {
      return;
    }

    let cancelled = false;
    const container = containerRef.current;
    if (!container) return;

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[data-sirvoy-engine="${SIRVOY_CONFIG.bookingEngineId}"]`
    );

    if (existingScript) {
      setStatus('ready');
      return;
    }

    setStatus('loading');
    const script = document.createElement('script');
    script.src = SIRVOY_CONFIG.scriptUrl;
    script.async = true;
    script.dataset.sirvoyEngine = SIRVOY_CONFIG.bookingEngineId;
    script.dataset.formId = SIRVOY_CONFIG.bookingEngineId;

    if (SIRVOY_CONFIG.supportsPrefill && searchParams.roomSlug) {
      const mappedRoomId = SIRVOY_CONFIG.roomMappings[searchParams.roomSlug];
      if (mappedRoomId) {
        script.dataset.roomTypeId = mappedRoomId;
      }
    }

    script.onload = () => {
      if (!cancelled) setStatus('ready');
    };
    script.onerror = () => {
      if (!cancelled) setStatus('error');
    };

    container.appendChild(script);

    return () => {
      cancelled = true;
      if (script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, [searchParams.roomSlug]);

  if (!SIRVOY_CONFIG.isConfigured) {
    return (
      <div className="rounded-theme-lg border border-border-subtle bg-surface p-6 sm:p-8 shadow-card space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-theme-md bg-background-secondary text-primary">
            <Settings2 className="h-5 w-5" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            <h2 className="font-display text-xl sm:text-2xl font-medium text-text-primary">
              {t.bookPage.unconfiguredTitle}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-text-secondary max-w-3xl">
              {t.bookPage.unconfiguredText}
            </p>
          </div>
        </div>

        <div className="rounded-theme-md bg-background p-5 border border-border-subtle space-y-2.5">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">
            {t.bookPage.unconfiguredStepsTitle}
          </h3>
          <ol className="list-decimal list-inside space-y-1.5 text-sm text-text-secondary">
            {t.bookPage.unconfiguredSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="border-t border-border-subtle pt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary">
              {t.bookPage.directContactHeading}
            </p>
            <p className="text-sm text-text-secondary">{t.bookPage.directContactText}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={SITE_CONFIG.contact.phoneHref} variant="primary" size="sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </Button>
            <Button href={SITE_CONFIG.contact.emailHref} variant="outline" size="sm">
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.email}</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-theme-lg border border-border-subtle bg-surface p-4 sm:p-6 shadow-card">
      {status === 'loading' && <LoadingState message={t.bookPage.loadingText} />}
      {status === 'error' && (
        <ErrorState
          title={t.bookPage.errorTitle}
          description={t.bookPage.errorText}
          action={
            <Button href={SITE_CONFIG.contact.phoneHref} variant="primary" size="sm">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.phoneDisplay}</span>
            </Button>
          }
        />
      )}
      <div
        ref={containerRef}
        id="sirvoy-booking-container"
        data-testid="sirvoy-booking-container"
        className={status === 'ready' ? 'min-h-[420px]' : 'hidden'}
      />
    </div>
  );
};
