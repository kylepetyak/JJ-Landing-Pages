"use client";

import { Phone, ShieldCheck } from "lucide-react";
import { clsx } from "clsx";
import { LeadForm } from "@/components/ui/LeadForm";
import type { FinalCTAContent } from "@/lib/types";

interface FinalCTAProps {
  content: FinalCTAContent;
  platformName: string;
  className?: string;
}

/**
 * Final CTA section - Creates urgency and provides final push to action.
 * Includes both phone number and form for maximum conversion options.
 */
export function FinalCTA({ content, platformName, className }: FinalCTAProps) {
  return (
    <section
      className={clsx(
        "section-padding bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800",
        className
      )}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
              {content.headline}
            </h2>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-300 mb-8">
              {content.subheadline}
            </p>

            {/* Phone CTA */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-3">
                Talk to an expert now
              </p>
              <a
                href={`tel:${content.phone}`}
                className={clsx(
                  "inline-flex items-center gap-3",
                  "text-2xl lg:text-3xl font-bold text-white",
                  "hover:text-accent transition-colors duration-200"
                )}
              >
                <Phone className="w-8 h-8" />
                {content.phoneDisplay}
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <span>100% Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <span>5,000+ Contractors Served</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-success" />
                <span>Fast Results</span>
              </div>
            </div>
          </div>

          {/* Right column - Form */}
          <div id="final-form">
            <LeadForm
              headline={`Get Your ${platformName} Certification`}
              subheadline="Free assessment • No obligation"
              ctaText="Start My Certification"
              variant="dark"
              showMessage={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
