"use client";

import {
  Users,
  Star,
  ShieldCheck,
  CheckCircle,
  Clock,
  FileText,
  Award,
  Phone,
} from "lucide-react";
import { clsx } from "clsx";
import { LeadForm } from "@/components/ui/LeadForm";
import type { TrustMetric, HeroContent } from "@/lib/types";

interface HeroSectionProps {
  content: HeroContent;
  trustMetrics: TrustMetric[];
  platformName: string;
  className?: string;
}

// Icon mapping for trust metrics
const iconMap: Record<string, React.ElementType> = {
  users: Users,
  star: Star,
  "shield-check": ShieldCheck,
  "check-circle": CheckCircle,
  clock: Clock,
  "file-text": FileText,
  award: Award,
  phone: Phone,
};

/**
 * Hero section - Above the fold content with headline and lead form.
 * This is the most critical section for capturing attention and leads.
 */
export function HeroSection({
  content,
  trustMetrics,
  platformName,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={clsx(
        "relative bg-gradient-to-b from-gray-50 to-white",
        "pt-8 pb-16 lg:pt-12 lg:pb-20",
        className
      )}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left column - Content (60%) */}
          <div className="lg:col-span-7 lg:pr-8">
            {/* Eyebrow text */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                {content.eyebrow}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-dark leading-tight mb-6">
              {content.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {content.subheadline}
            </p>

            {/* Trust metrics row */}
            <div className="flex flex-wrap gap-6 lg:gap-8 mb-8">
              {trustMetrics.map((metric, index) => {
                const IconComponent = iconMap[metric.icon] || CheckCircle;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xl font-bold text-dark">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-500">{metric.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA - shown on mobile only */}
            <div className="lg:hidden mb-8">
              <a
                href="#contact-form"
                className="btn btn-primary btn-lg w-full justify-center"
              >
                Get Your Free Assessment
              </a>
            </div>

            {/* Trust badges - Desktop only */}
            <div className="hidden lg:flex items-center gap-4 pt-8 border-t border-gray-200">
              <ShieldCheck className="w-5 h-5 text-success" />
              <span className="text-sm text-gray-500">
                100% Acceptance Guarantee • No Obligation • Results in Days
              </span>
            </div>
          </div>

          {/* Right column - Lead Form (40%) */}
          <div className="lg:col-span-5" id="contact-form">
            <div className="lg:sticky lg:top-8">
              <LeadForm
                headline={`Start Your ${platformName} Certification`}
                subheadline="Get a free assessment in 24 hours"
                ctaText="Get My Free Assessment"
                showMessage={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent pointer-events-none" />
    </section>
  );
}

export default HeroSection;
