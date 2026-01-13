"use client";

import { clsx } from "clsx";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { Placeholder } from "@/components/Placeholder";
import type { Testimonial, ClientLogo } from "@/lib/types";

interface SocialProofProps {
  testimonials: Testimonial[];
  clientLogos: ClientLogo[];
  className?: string;
}

/**
 * Social Proof section - Third-party validation to reduce perceived risk.
 * Combines testimonials with client logos for maximum credibility.
 */
export function SocialProof({
  testimonials,
  clientLogos,
  className,
}: SocialProofProps) {
  return (
    <section className={clsx("section-padding bg-white", className)}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-success/10 text-success text-sm font-semibold rounded-full mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Trusted by Thousands of Contractors
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to
            say about working with JJ Safety.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              variant={index === 1 ? "featured" : "default"}
            />
          ))}
        </div>

        {/* Client logos section */}
        <div className="border-t border-gray-100 pt-12 lg:pt-16">
          <p className="text-center text-gray-500 text-sm uppercase tracking-wide mb-8">
            Our clients work with leading companies including
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <Placeholder
                  type="logo"
                  label={logo.placeholder}
                  width="140px"
                  height="50px"
                  className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                  notes={`Replace with ${logo.name} logo. Should be monochrome/grayscale for consistency.`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
