// =============================================================================
// JJ Safety Landing Page Types
// =============================================================================

/**
 * Supported compliance platforms
 */
export type Platform = "isnetworld" | "veriforce" | "avetta";

/**
 * Icon names from Lucide React
 */
export type IconName =
  | "users"
  | "star"
  | "shield-check"
  | "check-circle"
  | "clock"
  | "file-text"
  | "award"
  | "phone"
  | "mail"
  | "map-pin"
  | "play"
  | "chevron-down"
  | "chevron-up"
  | "chevron-right"
  | "x"
  | "menu"
  | "check"
  | "alert-circle"
  | "loader"
  | "building"
  | "briefcase"
  | "target"
  | "zap"
  | "trending-up"
  | "headphones"
  | "calendar"
  | "lock"
  | "globe"
  | "thumbs-up"
  | "heart"
  | "percent";

// =============================================================================
// Placeholder Types
// =============================================================================

export type PlaceholderType = "image" | "video" | "logo" | "avatar" | "icon";
export type AspectRatio = "16:9" | "1:1" | "4:3" | "3:2" | "auto";

export interface PlaceholderProps {
  type: PlaceholderType;
  label: string;
  aspectRatio?: AspectRatio;
  width?: string;
  height?: string;
  className?: string;
  notes?: string;
}

// =============================================================================
// Content Types
// =============================================================================

/**
 * Trust metric displayed in hero and trust bar
 */
export interface TrustMetric {
  value: string;
  label: string;
  icon: IconName;
}

/**
 * Pain point displayed in problem agitation section
 */
export interface PainPoint {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Step in the solution process
 */
export interface SolutionStep {
  number: number;
  title: string;
  description: string;
}

/**
 * Benefit displayed in benefits grid
 */
export interface Benefit {
  icon: IconName;
  title: string;
  description: string;
}

/**
 * Customer testimonial
 */
export interface Testimonial {
  quote: string;
  name: string;
  company: string;
  role?: string;
  rating?: number;
  image?: string;
}

/**
 * Client logo for social proof
 */
export interface ClientLogo {
  name: string;
  placeholder: string;
}

/**
 * Included item in "What You Get" section
 */
export interface IncludedItem {
  title: string;
  description: string;
}

/**
 * FAQ item
 */
export interface FAQItem {
  question: string;
  answer: string;
}

// =============================================================================
// Section Content Types
// =============================================================================

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
}

export interface VideoContent {
  headline: string;
  placeholder: string;
  description: string;
  ctaText: string;
}

export interface FinalCTAContent {
  headline: string;
  subheadline: string;
  phone: string;
  phoneDisplay: string;
}

// =============================================================================
// Platform Content Structure
// =============================================================================

export interface PlatformContent {
  platformName: string;
  trademark: string;
  slug: Platform;
  hero: HeroContent;
  trustMetrics: TrustMetric[];
  painPoints: PainPoint[];
  video: VideoContent;
  steps: SolutionStep[];
  benefits: Benefit[];
  testimonials: Testimonial[];
  clientLogos: ClientLogo[];
  included: IncludedItem[];
  faqs: FAQItem[];
  finalCta: FinalCTAContent;
}

// =============================================================================
// Form Types
// =============================================================================

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[]; // For select fields
}

export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  // Hidden UTM fields
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

export type FormStatus = "idle" | "submitting" | "success" | "error";

// =============================================================================
// Component Props Types
// =============================================================================

export interface ButtonProps {
  variant?: "primary" | "secondary" | "outline-white";
  size?: "default" | "lg";
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  href?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export interface AccordionProps {
  items: FAQItem[];
  className?: string;
  allowMultiple?: boolean;
}

export interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

// =============================================================================
// Section Props Types
// =============================================================================

export interface SectionProps {
  className?: string;
}

export interface HeroSectionProps extends SectionProps {
  content: HeroContent;
  trustMetrics: TrustMetric[];
  platformName: string;
}

export interface TrustBarProps extends SectionProps {
  metrics: TrustMetric[];
}

export interface ProblemAgitationProps extends SectionProps {
  painPoints: PainPoint[];
  platformName: string;
}

export interface VideoSectionProps extends SectionProps {
  content: VideoContent;
}

export interface SolutionStepsProps extends SectionProps {
  steps: SolutionStep[];
}

export interface BenefitsGridProps extends SectionProps {
  benefits: Benefit[];
}

export interface SocialProofProps extends SectionProps {
  testimonials: Testimonial[];
  clientLogos: ClientLogo[];
}

export interface WhatYouGetProps extends SectionProps {
  items: IncludedItem[];
  platformName: string;
}

export interface FAQSectionProps extends SectionProps {
  faqs: FAQItem[];
}

export interface FinalCTAProps extends SectionProps {
  content: FinalCTAContent;
}
