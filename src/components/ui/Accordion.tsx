import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface AccordionEntry {
  id: string;
  question: string;
  answer: string;
  note?: string;
}

interface AccordionProps {
  items: AccordionEntry[];
  defaultOpenId?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? items[0]?.id ?? null);

  return (
    <div className="divide-y divide-border-subtle rounded-theme-lg border border-border-subtle bg-surface shadow-card">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const btnId = `faq-btn-${item.id}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left text-base font-semibold text-text-primary hover:bg-background/60 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6 sm:pb-6"
            >
              <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
                {item.answer}
              </p>
              {item.note && (
                <p className="mt-3 rounded-theme-md bg-background px-3.5 py-2.5 text-xs sm:text-sm text-text-primary border border-border-subtle">
                  {item.note}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
