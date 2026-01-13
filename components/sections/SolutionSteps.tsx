"use client";

import { clsx } from "clsx";
import type { SolutionStep } from "@/lib/types";

interface SolutionStepsProps {
  steps: SolutionStep[];
  className?: string;
}

/**
 * Solution Steps section - Makes the solution feel simple and achievable.
 * Three steps is optimal for cognitive ease.
 */
export function SolutionSteps({ steps, className }: SolutionStepsProps) {
  return (
    <section className={clsx("section-padding bg-white", className)}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Get Certified in 3 Simple Steps
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;ve streamlined the compliance process so you can focus on what
            matters — running your business.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection line - visible on desktop */}
          <div className="hidden lg:block absolute top-24 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={clsx(
                  "relative text-center",
                  "transform transition-all duration-300",
                  "hover:-translate-y-1"
                )}
              >
                {/* Step number */}
                <div className="relative z-10 mb-6">
                  <div
                    className={clsx(
                      "inline-flex items-center justify-center",
                      "w-20 h-20 rounded-full",
                      "bg-gradient-to-br from-primary to-primary-dark",
                      "text-white text-3xl font-bold",
                      "shadow-lg shadow-primary/30"
                    )}
                  >
                    {step.number}
                  </div>

                  {/* Progress indicator */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-8 bg-primary/20 -translate-x-1/2" />
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 px-4">
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gray-50 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 scale-95" />
              </div>
            ))}
          </div>
        </div>

        {/* Arrow indicator to next section */}
        <div className="text-center mt-12 lg:mt-16">
          <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">
            And here&apos;s why we&apos;re different
          </p>
          <svg
            className="w-6 h-6 mx-auto text-gray-400 animate-bounce"
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
    </section>
  );
}

export default SolutionSteps;
