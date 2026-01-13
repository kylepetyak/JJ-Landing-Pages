"use client";

import { useState, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import { clsx } from "clsx";
import type { FAQItem } from "@/lib/types";

interface AccordionProps {
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

/**
 * Individual accordion item with smooth expand/collapse animation.
 */
function AccordionItem({ item, isOpen, onToggle, index }: AccordionItemProps) {
  return (
    <div
      className={clsx(
        "border-b border-gray-200 last:border-b-0",
        "transition-colors duration-200"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className={clsx(
          "flex items-center justify-between w-full",
          "py-5 px-1 text-left",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "group"
        )}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-button-${index}`}
      >
        <span
          className={clsx(
            "text-lg font-semibold text-gray-900 pr-4",
            "group-hover:text-primary transition-colors duration-200"
          )}
        >
          {item.question}
        </span>
        <span
          className={clsx(
            "flex-shrink-0 w-8 h-8 rounded-full",
            "flex items-center justify-center",
            "bg-gray-100 text-gray-600",
            "group-hover:bg-primary/10 group-hover:text-primary",
            "transition-all duration-200"
          )}
        >
          <ChevronDown
            className={clsx(
              "w-5 h-5 transition-transform duration-300",
              isOpen && "rotate-180"
            )}
          />
        </span>
      </button>

      <div
        id={`accordion-content-${index}`}
        role="region"
        aria-labelledby={`accordion-button-${index}`}
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-5 px-1 text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

/**
 * Accordion component for FAQ sections.
 * Supports single or multiple open items.
 */
export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndexes((prev) => {
        const next = new Set(prev);

        if (next.has(index)) {
          next.delete(index);
        } else {
          if (!allowMultiple) {
            next.clear();
          }
          next.add(index);
        }

        return next;
      });
    },
    [allowMultiple]
  );

  return (
    <div className={clsx("divide-y divide-gray-200", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          index={index}
          isOpen={openIndexes.has(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
