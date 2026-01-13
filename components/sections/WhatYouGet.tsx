"use client";

import { Check } from "lucide-react";
import { clsx } from "clsx";
import { Button } from "@/components/ui/Button";
import type { IncludedItem } from "@/lib/types";

interface WhatYouGetProps {
  items: IncludedItem[];
  platformName: string;
  className?: string;
}

/**
 * What You Get section - Tangible deliverables to justify the investment.
 * Checklist format makes the value concrete and scannable.
 */
export function WhatYouGet({
  items,
  platformName,
  className,
}: WhatYouGetProps) {
  const scrollToForm = () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={clsx(
        "section-padding bg-gradient-to-br from-primary to-primary-dark text-white",
        className
      )}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything Included in Your {platformName} Certification
          </h2>
          <p className="text-lg text-white/80">
            No hidden fees, no surprises. Here&apos;s exactly what you get when you
            work with JJ Safety.
          </p>
        </div>

        {/* Checklist grid */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto mb-12 lg:mb-16">
          {items.map((item, index) => (
            <div
              key={index}
              className={clsx(
                "flex gap-4 p-5 lg:p-6",
                "bg-white/5 rounded-xl",
                "border border-white/10",
                "transition-all duration-300",
                "hover:bg-white/10 hover:border-white/20"
              )}
            >
              {/* Checkmark */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-success flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline-white"
            size="lg"
            onClick={scrollToForm}
          >
            Get Started Today
          </Button>

          <p className="mt-4 text-white/60 text-sm">
            No obligation • Free assessment • Results guaranteed
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatYouGet;
