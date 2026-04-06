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
const content = getContent("contractor-prequalification")!;

export const metadata: Metadata = {
  title: "Contractor Prequalification Services | ISNetworld, Avetta, Veriforce",
  description:
    "Failing prequalification? JJ Safety has helped 7,000+ contractors get approved on ISNetworld, Avetta, Veriforce & more. Safety manuals, RAVS documentation, 100% acceptance guarantee. Call (833) 277-7022.",
  openGraph: {
    title: "Contractor Prequalification Services | JJ Safety",
    description:
      "We get contractors approved. ISNetworld, Avetta, Veriforce compliance. Safety manuals, RAVS documentation, ongoing management. 7,000+ contractors served.",
  },
};

/**
 * Contractor Prequalification Landing Page
 *
 * This is a Google Ads landing page for contractors searching for help
 * passing prequalification requirements across all platforms.
 *
 * Page flow:
 * 1. Hero with phone number + form (capture attention, immediate conversion path)
 * 2. Trust bar (7,000+ contractors, nationwide, guarantee)
 * 3. Problem agitation (losing contracts, confusing paperwork)
 * 4. How it works (3 simple steps)
 * 5. Services/platforms covered (BenefitsGrid as services list)
 * 6. Video explainer (trust building)
 * 7. Social proof (testimonials)
 * 8. What you get (deliverables checklist)
 * 9. FAQ (cost, timeline, platforms, rejections)
 * 10. Final CTA with phone + form
 */
export default function ContractorPrequalificationPage() {
  return (
    <main className="min-h-screen">
      {/* HERO - Phone number + form above the fold */}
      <HeroSection
        content={content.hero}
        trustMetrics={content.trustMetrics}
        platformName={content.platformName}
        phone={content.finalCta.phone}
        phoneDisplay={content.finalCta.phoneDisplay}
        showPlatformSelect={true}
        formHeadline="Get Your Free Assessment"
      />

      {/* Trust Bar - 7,000+ contractors, nationwide, guarantee */}
      <TrustBar metrics={content.trustMetrics} />

      {/* Problem Agitation - Why contractors struggle with prequalification */}
      <ProblemAgitation
        painPoints={content.painPoints}
        platformName="Prequalification"
      />

      {/* How It Works - 3 simple steps */}
      <SolutionSteps steps={content.steps} />

      {/* Services & Platforms - What we cover (ISN, Avetta, Veriforce, manuals, RAVS, ongoing) */}
      <BenefitsGrid benefits={content.benefits} />

      {/* Video Explainer */}
      <VideoSection content={content.video} />

      {/* Social Proof - Testimonials from contractors we've helped */}
      <SocialProof
        testimonials={content.testimonials}
        clientLogos={content.clientLogos}
      />

      {/* What You Get - Deliverables checklist */}
      <WhatYouGet
        items={content.included}
        platformName="Prequalification"
      />

      {/* FAQ - Cost, timeline, platforms, rejections, safety manuals */}
      <FAQSection faqs={content.faqs} />

      {/* Final CTA - Phone + form */}
      <FinalCTA
        content={content.finalCta}
        platformName="Prequalification"
        showPlatformSelect={true}
      />

      {/* Minimal Footer */}
      <MinimalFooter />
    </main>
  );
}
