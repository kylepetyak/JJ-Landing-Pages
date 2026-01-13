"use client";

import {
  Zap,
  ShieldCheck,
  Headphones,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Award,
  CheckCircle,
  Target,
} from "lucide-react";
import { clsx } from "clsx";
import type { Benefit } from "@/lib/types";

interface BenefitsGridProps {
  benefits: Benefit[];
  className?: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  zap: Zap,
  "shield-check": ShieldCheck,
  headphones: Headphones,
  "file-text": FileText,
  users: Users,
  "trending-up": TrendingUp,
  clock: Clock,
  award: Award,
  "check-circle": CheckCircle,
  target: Target,
};

/**
 * Benefits Grid section - Logical appeal showing WHY the service works.
 * Addresses common objections with clear value propositions.
 */
export function BenefitsGrid({ benefits, className }: BenefitsGridProps) {
  return (
    <section
      className={clsx(
        "section-padding bg-gradient-to-b from-gray-50 to-white",
        className
      )}
    >
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            The JJ Safety Advantage
          </h2>
          <p className="text-lg text-gray-600">
            We don&apos;t just help you get certified — we make sure you stay
            compliant and win more contracts.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon] || CheckCircle;
            return (
              <div
                key={index}
                className={clsx(
                  "group relative p-6 lg:p-8",
                  "bg-white rounded-2xl",
                  "border border-gray-100",
                  "shadow-soft",
                  "transition-all duration-300",
                  "hover:shadow-elevated hover:border-primary/20",
                  "hover:-translate-y-1"
                )}
              >
                {/* Icon */}
                <div
                  className={clsx(
                    "w-14 h-14 rounded-xl mb-5",
                    "bg-primary/10 text-primary",
                    "flex items-center justify-center",
                    "transition-all duration-300",
                    "group-hover:bg-primary group-hover:text-white",
                    "group-hover:shadow-lg group-hover:shadow-primary/30"
                  )}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover indicator */}
                <div
                  className={clsx(
                    "absolute bottom-0 left-0 right-0 h-1",
                    "bg-gradient-to-r from-primary to-primary-light",
                    "rounded-b-2xl opacity-0",
                    "transition-opacity duration-300",
                    "group-hover:opacity-100"
                  )}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BenefitsGrid;
