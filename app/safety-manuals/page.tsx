import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { VideoSection } from "@/components/sections/VideoSection";
import { SolutionSteps } from "@/components/sections/SolutionSteps";
import { BenefitsGrid } from "@/components/sections/BenefitsGrid";
import { SocialProof } from "@/components/sections/SocialProof";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { MinimalFooter } from "@/components/sections/MinimalFooter";

// Get content for this page
const content = getContent("safety-manuals")!;

export const metadata: Metadata = {
  title: "Custom Safety Manuals for Contractors | Written Safety Programs",
  description:
    "Need a safety manual? JJ Safety writes custom OSHA-compliant safety programs for contractors. Not templates — tailored to your operations. Site-specific safety plans, JSAs, HazCom, fall protection. Call (833) 277-7022.",
  openGraph: {
    title: "Custom Safety Manuals for Contractors | JJ Safety",
    description:
      "Custom safety manuals and written programs for contractors. OSHA-compliant, platform-ready documentation. 7,000+ contractors served.",
  },
};

/**
 * Safety Manuals Landing Page
 *
 * This is a Google Ads landing page for contractors searching for safety manuals,
 * written safety programs, site-specific safety plans, and OSHA documentation.
 *
 * Page flow:
 * 1. Hero with phone + form (capture attention, immediate conversion path)
 * 2. Trust bar (7,000+ contractors, OSHA compliant, 100% platform acceptance)
 * 3. Problem agitation (need documents, templates rejected, no safety staff)
 * 4. How it works (3 steps: tell us → we write → you pass)
 * 5. What we write (document types grid)
 * 6. Video explainer
 * 7. Social proof (testimonials)
 * 8. What you get (deliverables)
 * 9. FAQ (cost, turnaround, templates vs custom, updates)
 * 10. Final CTA with phone + form
 */
export default function SafetyManualsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO - Phone number + form above the fold */}
      <HeroSection
        content={content.hero}
        trustMetrics={content.trustMetrics}
        platformName={content.platformName}
        phone={content.finalCta.phone}
        phoneDisplay={content.finalCta.phoneDisplay}
        formHeadline="Get Your Free Quote"
        showMessage={true}
        messageLabel="What documents do you need?"
        messagePlaceholder="Safety manual, site-specific safety plan, JSAs, etc..."
      />

      {/* Trust Bar - 7,000+ contractors, OSHA compliant, 100% acceptance */}
      <TrustBar metrics={content.trustMetrics} />

      {/* Problem Agitation - Why contractors need safety documentation */}
      <ProblemAgitation
        painPoints={content.painPoints}
        platformName="Safety Documentation"
      />

      {/* How It Works - 3 simple steps */}
      <SolutionSteps steps={content.steps} />

      {/* What We Write - Document types (using BenefitsGrid) */}
      <BenefitsGrid benefits={content.benefits} />

      {/* Video Explainer */}
      <VideoSection content={content.video} />

      {/* Social Proof - Testimonials */}
      <SocialProof
        testimonials={content.testimonials}
        clientLogos={content.clientLogos}
      />

      {/* What You Get - Deliverables checklist */}
      <WhatYouGet
        items={content.included}
        platformName="Safety Manual"
      />

      {/* FAQ - Cost, turnaround, templates vs custom, annual updates */}
      <FAQSection faqs={content.faqs} />

      {/* Final CTA - Phone + form */}
      <FinalCTA
        content={content.finalCta}
        platformName="Safety Manual"
        showMessage={true}
        messageLabel="What documents do you need?"
        messagePlaceholder="Safety manual, site-specific safety plan, JSAs, etc..."
      />

      {/* Minimal Footer */}
      <MinimalFooter />
    </main>
  );
}
