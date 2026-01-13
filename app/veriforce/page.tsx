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

// Get content for this platform
const content = getContent("veriforce")!;

export const metadata: Metadata = {
  title: `${content.trademark} Compliance Services`,
  description: `Get ${content.trademark} compliant fast. ${content.hero.subheadline}`,
  openGraph: {
    title: `${content.trademark} Compliance Services | JJ Safety`,
    description: `Get ${content.trademark} compliant fast. ${content.hero.subheadline}`,
  },
};

/**
 * Veriforce Landing Page
 *
 * This page follows the Hook → Story → Offer framework:
 * - Hook: Hero section captures attention with clear value proposition
 * - Story: Problem agitation, video, and solution steps build emotional connection
 * - Offer: Benefits, social proof, and what you get justify the investment
 *
 * The page flow uses Emotion → Logic → Fear sequence for maximum conversion.
 */
export default function VeliforcePage() {
  return (
    <main className="min-h-screen">
      {/* HOOK - Capture Attention */}
      <HeroSection
        content={content.hero}
        trustMetrics={content.trustMetrics}
        platformName={content.platformName}
      />

      {/* Trust Bar - Immediate Credibility */}
      <TrustBar metrics={content.trustMetrics} />

      {/* STORY PART 1 - Problem Agitation (Emotion) */}
      <ProblemAgitation
        painPoints={content.painPoints}
        platformName={content.platformName}
      />

      {/* STORY PART 2 - Video Explanation (Trust Building) */}
      <VideoSection content={content.video} />

      {/* STORY PART 3 - Solution Steps (Make it Feel Simple) */}
      <SolutionSteps steps={content.steps} />

      {/* OFFER PART 1 - Benefits (Logic) */}
      <BenefitsGrid benefits={content.benefits} />

      {/* OFFER PART 2 - Social Proof (Validation) */}
      <SocialProof
        testimonials={content.testimonials}
        clientLogos={content.clientLogos}
      />

      {/* OFFER PART 3 - What You Get (Tangible Value) */}
      <WhatYouGet
        items={content.included}
        platformName={content.platformName}
      />

      {/* Overcome Objections */}
      <FAQSection faqs={content.faqs} />

      {/* FINAL CTA - Urgency/Fear */}
      <FinalCTA
        content={content.finalCta}
        platformName={content.platformName}
      />

      {/* Minimal Footer */}
      <MinimalFooter />
    </main>
  );
}
