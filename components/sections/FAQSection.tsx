"use client";

import { clsx } from "clsx";
import { Accordion } from "@/components/ui/Accordion";
import type { FAQItem } from "@/lib/types";

interface FAQSectionProps {
  faqs: FAQItem[];
  className?: string;
}

/**
 * FAQ Section - Overcomes objections before the final CTA.
 * Addresses common questions to reduce friction in conversion.
 */
export function FAQSection({ faqs, className }: FAQSectionProps) {
  return (
    <section className={clsx("section-padding bg-gray-50", className)}>
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-4">
            Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-lg text-gray-600">
            Still have questions? Here are answers to the most common ones we
            hear from contractors like you.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-soft p-6 lg:p-8">
            <Accordion items={faqs} />
          </div>
        </div>

        {/* Additional help text */}
        <div className="text-center mt-10 lg:mt-12">
          <p className="text-gray-600 mb-2">
            Don&apos;t see your question here?
          </p>
          <p className="text-gray-500">
            Call us at{" "}
            <a
              href="tel:18005551234"
              className="text-primary font-semibold hover:underline"
            >
              1-800-555-1234
            </a>{" "}
            or use the form above to get in touch.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
