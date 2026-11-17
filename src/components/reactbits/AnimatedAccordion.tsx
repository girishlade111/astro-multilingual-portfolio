import React, { useRef } from 'react';
import { getNextAccordionFocusIndex } from '../../utils/accordion';

export interface AnimatedAccordionItemProps {
  id: string;
  indexLabel?: string;
  title: string;
  subtitle?: string;
  metaLabel?: string;
  icon?: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  triggerRef?: (el: HTMLButtonElement | null) => void;
  expandHint?: string;
  collapseHint?: string;
  testIdPrefix?: string;
  variant?: 'primary' | 'nested';
  children: React.ReactNode;
}

export const AnimatedAccordionItem: React.FC<AnimatedAccordionItemProps> = ({
  id,
  indexLabel,
  title,
  subtitle,
  metaLabel,
  icon,
  isOpen,
  onToggle,
  onKeyDown,
  triggerRef,
  expandHint = 'Click to expand section',
  collapseHint = 'Click to collapse',
  testIdPrefix = 'section',
  variant = 'primary',
  children,
}) => {
  const isPrimary = variant === 'primary';
  const Heading = isPrimary ? 'h2' : 'h3';

  return (
    <div className={isPrimary ? 'portfolio-section' : 'portfolio-topic'}>
      <div
        id={`${testIdPrefix}-${id}`}
        data-testid={isPrimary ? `portfolio-section-${id}` : `${testIdPrefix}-item-${id}`}
        className="scroll-mt-20"
      >
        <Heading className="accordion-heading">
          <button
            ref={triggerRef}
            type="button"
            onClick={onToggle}
            onKeyDown={onKeyDown}
            id={`${testIdPrefix}-heading-${id}`}
            aria-expanded={isOpen}
            aria-controls={`${testIdPrefix}-panel-${id}`}
            data-testid={`${testIdPrefix}-trigger-${id}`}
            className="accordion-trigger group"
          >
            <span className="accordion-label">
              {isPrimary && (
                <span className="inline-flex items-center gap-2.5">
                  {indexLabel && (
                    <span className="font-mono text-[11px] font-semibold text-zinc-400 dark:text-zinc-500">
                      {indexLabel}
                    </span>
                  )}
                  {icon && (
                    <span className="accordion-section-icon" aria-hidden="true">{icon}</span>
                  )}
                </span>
              )}
              <span className="font-semibold text-zinc-900 group-hover:text-zinc-700 dark:text-zinc-100 dark:group-hover:text-zinc-300 transition-colors">
                {title}
              </span>
            </span>

            <span className="inline-flex items-center gap-2.5 shrink-0">
              {metaLabel && (
                <span className="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-700/50">
                  {metaLabel}
                </span>
              )}
              <span
                className="accordion-indicator inline-flex items-center justify-center w-6 h-6 rounded-md text-zinc-400 group-hover:text-zinc-700 group-hover:bg-zinc-100 dark:group-hover:text-zinc-200 dark:group-hover:bg-zinc-800 transition-all"
                aria-hidden="true"
                title={isOpen ? collapseHint : expandHint}
              >
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-45 text-zinc-900 dark:text-zinc-100' : ''}`}
                >
                  <path d="M8 3v10M3 8h10" />
                </svg>
              </span>
            </span>
          </button>
        </Heading>

        <div
          hidden={!isOpen}
          id={`${testIdPrefix}-panel-${id}`}
          role="region"
          aria-labelledby={`${testIdPrefix}-heading-${id}`}
          data-testid={`${testIdPrefix}-panel-${id}`}
          className="accordion-panel"
        >
          <div className="accordion-body space-y-4 pt-1">
            {subtitle && (
              <div className="accordion-overview pb-2">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{subtitle}</p>
              </div>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export interface AnimatedAccordionGroupProps {
  ariaLabel: string;
  itemIds: readonly string[];
  className?: string;
  children: (helpers: {
    getTriggerProps: (index: number) => {
      triggerRef: (el: HTMLButtonElement | null) => void;
      onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
    };
  }) => React.ReactNode;
}

export const AnimatedAccordionGroup: React.FC<AnimatedAccordionGroupProps> = ({
  ariaLabel,
  itemIds,
  className = 'space-y-2',
  children,
}) => {
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const getTriggerProps = (index: number) => ({
    triggerRef: (el: HTMLButtonElement | null) => {
      triggerRefs.current[index] = el;
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const nextIndex = getNextAccordionFocusIndex(index, itemIds.length, e.key);
      if (nextIndex !== null) {
        e.preventDefault();
        triggerRefs.current[nextIndex]?.focus();
      }
    },
  });

  return (
    <div className={className} role="region" aria-label={ariaLabel}>
      {children({ getTriggerProps })}
    </div>
  );
};

export default AnimatedAccordionItem;
