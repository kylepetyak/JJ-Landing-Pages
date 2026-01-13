"use client";

import {
  Clock,
  FileText,
  X,
  Briefcase,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { clsx } from "clsx";
import type { PainPoint } from "@/lib/types";

interface ProblemAgitationProps {
  painPoints: PainPoint[];
  platformName: string;
  className?: string;
}

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  "file-text": FileText,
  x: X,
  briefcase: Briefcase,
  "alert-circle": AlertCircle,
  "help-circle": HelpCircle,
};

/**
 * Problem Agitation section - Builds emotional connection by addressing pain points.
 * Shows empathy and understanding of the prospect's frustrations.
 */
export function ProblemAgitation({
  painPoints,
  platformName,
  className,
}: ProblemAgitationProps) {
  return (
    <section className={clsx("section-padding bg-white", className)}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Struggling with {platformName}?
          </h2>
          <p className="text-lg text-gray-600">
            You&apos;re not alone. These are the challenges we hear every day from
            contractors like you.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {painPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon] || AlertCircle;
            return (
              <div
                key={index}
                className={clsx(
                  "relative p-6 lg:p-8 rounded-2xl",
                  "bg-gradient-to-br from-gray-50 to-gray-100/50",
                  "border border-gray-100",
                  "transition-all duration-300",
                  "hover:shadow-soft hover:border-gray-200"
                )}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                  <IconComponent className="w-7 h-7 text-red-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-red-500/[0.03] rounded-full -z-10" />
              </div>
            );
          })}
        </div>

        {/* Transition text */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Sound familiar? It doesn&apos;t have to be this hard.
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-semibold">
            <span>There&apos;s a better way</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemAgitation;
