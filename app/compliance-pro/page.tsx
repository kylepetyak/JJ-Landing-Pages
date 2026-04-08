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
const content = getContent("compliance-pro")!;

export const metadata: Metadata = {
  title: "Compliance Pro (PEC Safety) Certification | Oil & Gas Contractors",
  description:
    "Get Compliance Pro / PEC Safety compliant fast. JJ Safety helps oil & gas contractors pass prequalification with safety manuals, questionnaire assistance, SafeLand verification, and ongoing compliance. Call (833) 277-7022.",
  openGraph: {
    title: "Compliance Pro (PEC Safety) Certification | JJ Safety",
    description:
      "Oil & gas contractor compliance experts. PEC Safety questionnaires, safety manuals, SafeLand verification. 7,000+ contractors served. 100% acceptance guarantee.",
  },
};

/**
 * Compliance Pro (PEC Safety) Landing Page
 *
 * This is a Google Ads landing page for oil & gas contractors searching for
 * Compliance Pro / PEC Safety prequalification help.
 *
 * Copy style: Russell Brunson persuasive, Ed Bernays emotional triggers
 * - Pain points hit hard on lost work and operator rejection
 * - Urgency around getting back on site
 * - Authority from oil & gas industry expertise
 * - Social proof from similar contractors
 *
 * Page flow (Neil Patel / Hook-Story-Offer):
 * 1. Hero - Hook with pain point headline, phone above fold
 * 2. Trust bar - Credibility metrics
 * 3. Problem agitation - Emotional pain points (lost work, documentation overwhelm)
 * 4. How it works - Simple 3-step solution
 * 5. Services - What we handle (questionnaires, safety manuals, training)
 * 6. Video - Trust building
 * 7. Testimonials - Social proof from oil & gas contractors
 * 8. What you get - Deliverables
 * 9. FAQ - Overcome objections
 * 10. Final CTA - Urgency push to call/submit
 */
export default function ComplianceProPage() {
  return (
    <main className="min-h-screen">
      {/* HOOK - Pain point headline, phone visible, form above fold */}
      <HeroSection
        content={content.hero}
        trustMetrics={content.trustMetrics}
        platformName={content.platformName}
        phone={content.finalCta.phone}
        phoneDisplay={content.finalCta.phoneDisplay}
        formHeadline="Get Compliant Fast"
        showMessage={false}
      />

      {/* Trust Bar - 7,000+ contractors, oil & gas experts, 100% guarantee */}
      <TrustBar metrics={content.trustMetrics} />

      {/* STORY Part 1 - Problem Agitation (Emotional) */}
      {/* Hit pain points hard: operator rejection, documentation nightmare, no safety staff */}
      <ProblemAgitation
        painPoints={content.painPoints}
        platformName="Compliance Pro"
      />

      {/* STORY Part 2 - Solution (How We Fix It) */}
      <SolutionSteps steps={content.steps} />

      {/* OFFER Part 1 - What We Handle (Services) */}
      <BenefitsGrid benefits={content.benefits} />

      {/* Trust Building - Video Explainer */}
      <VideoSection content={content.video} />

      {/* OFFER Part 2 - Social Proof */}
      {/* Testimonials from oil & gas contractors who faced same problems */}
      <SocialProof
        testimonials={content.testimonials}
        clientLogos={content.clientLogos}
      />

      {/* OFFER Part 3 - Deliverables Checklist */}
      <WhatYouGet
        items={content.included}
        platformName="Compliance Pro"
      />

      {/* Overcome Objections - FAQ */}
      <FAQSection faqs={content.faqs} />

      {/* FINAL CTA - Urgency Push */}
      {/* "Stop losing work" - fear of loss, call to action */}
      <FinalCTA
        content={content.finalCta}
        platformName="Compliance Pro"
        showMessage={false}
      />

      {/* Minimal Footer */}
      <MinimalFooter />
    </main>
  );
}
