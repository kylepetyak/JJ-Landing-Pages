import type { PlatformContent } from "./types";

// =============================================================================
// JJ Safety Landing Page Content
// =============================================================================
// This file contains all content for the landing page templates.
// Content is organized by platform (ISNetworld, Veriforce, Avetta).
//
// DEVELOPER NOTES:
// - Items marked with [PLACEHOLDER] should be replaced with real content
// - Images/videos marked with "placeholder" need real assets
// - Phone numbers and contact info should be updated for production
// =============================================================================

export const platformContent: Record<string, PlatformContent> = {
  // ===========================================================================
  // ISNetworld Content
  // ===========================================================================
  isnetworld: {
    platformName: "ISNetworld",
    trademark: "ISNetworld\u00AE",
    slug: "isnetworld",

    hero: {
      eyebrow: "ISNetworld\u00AE Certification Services",
      headline: "Get ISNetworld\u00AE Certified \u2014 Fast, Simple, Guaranteed.",
      subheadline:
        "Your client needs you compliant. We've helped 5,000+ contractors get certified in as little as 5 days. No confusion. No rejected documents. Just results.",
    },

    trustMetrics: [
      { value: "5,000+", label: "Contractors Certified", icon: "users" },
      { value: "4.9", label: "Google Rating", icon: "star" },
      { value: "100%", label: "Acceptance Guarantee", icon: "shield-check" },
    ],

    painPoints: [
      {
        icon: "clock",
        title: "Racing Against the Clock",
        description:
          "Your client gave you a compliance deadline and you're running out of time. Every day you're not certified is a day you can't work.",
      },
      {
        icon: "file-text",
        title: "Confusing Questionnaires",
        description:
          "The ISNetworld questionnaire has hundreds of questions that seem impossible to navigate. One wrong answer can delay your entire certification.",
      },
      {
        icon: "x",
        title: "Documents Keep Getting Rejected",
        description:
          "You've submitted your safety documentation multiple times but it keeps getting rejected with vague explanations. You're stuck in a frustrating loop.",
      },
      {
        icon: "briefcase",
        title: "No Time to Figure It Out",
        description:
          "You're running a business. You don't have time to become an ISNetworld expert on top of everything else you're managing.",
      },
    ],

    video: {
      headline: "See How We Make ISNetworld\u00AE Compliance Simple",
      placeholder: "Video: ISNetworld Compliance Explainer (2-3 min)",
      description:
        "Watch how JJ Safety has helped thousands of contractors navigate ISNetworld certification quickly and efficiently. Learn about our process and guarantee.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Tell Us About Your Needs",
        description:
          "Share your ISNetworld requirements and deadlines. We'll assess your situation and create a custom compliance roadmap tailored to your business and timeline.",
      },
      {
        number: 2,
        title: "We Handle Everything",
        description:
          "Our compliance experts complete your questionnaires, prepare documentation, and manage all submissions. You focus on your business while we handle the paperwork.",
      },
      {
        number: 3,
        title: "You're Certified & Working",
        description:
          "Get your ISNetworld certification and start winning contracts. We provide ongoing support to maintain your compliance status year after year.",
      },
    ],

    benefits: [
      {
        icon: "zap",
        title: "5-Day Turnaround",
        description:
          "Most clients are certified in 5-7 business days. We've handled urgent requests in as little as 48 hours when deadlines are critical.",
      },
      {
        icon: "shield-check",
        title: "100% Acceptance Guarantee",
        description:
          "If your documentation is rejected, we fix it at no additional cost. We guarantee acceptance or your money back.",
      },
      {
        icon: "headphones",
        title: "Dedicated Compliance Expert",
        description:
          "Work with one specialist who knows your business and ISNetworld requirements inside and out. Direct phone and email access.",
      },
      {
        icon: "file-text",
        title: "Complete Documentation",
        description:
          "We prepare all required safety programs, policies, and procedures. No templates \u2014 custom documents that meet ISNetworld standards.",
      },
      {
        icon: "users",
        title: "5,000+ Companies Served",
        description:
          "Join thousands of contractors who trust JJ Safety. Our experience means fewer rejections and faster certifications.",
      },
      {
        icon: "trending-up",
        title: "Win More Contracts",
        description:
          "ISNetworld certification opens doors to major clients. Our clients report winning 40% more contracts after certification.",
      },
    ],

    testimonials: [
      {
        quote:
          "JJ Safety got us ISNetworld certified in just 4 days. We had a major contract deadline and they made it happen. Their team handled everything \u2014 I didn't have to stress about the paperwork at all.",
        name: "Michael Rodriguez",
        company: "Rodriguez Industrial Services",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "After struggling with ISNetworld for months on our own, JJ Safety got us certified in under a week. The difference was night and day. Highly recommend to any contractor.",
        name: "Sarah Chen",
        company: "Pacific Coast Electrical",
        role: "Operations Manager",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "We've used JJ Safety for 3 years running. They handle our annual renewals and help us maintain our A rating. Worth every penny for the peace of mind.",
        name: "David Thompson",
        company: "Thompson Mechanical LLC",
        role: "President",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "Shell", placeholder: "Logo: Shell" },
      { name: "Chevron", placeholder: "Logo: Chevron" },
      { name: "ExxonMobil", placeholder: "Logo: ExxonMobil" },
      { name: "BP", placeholder: "Logo: BP" },
      { name: "ConocoPhillips", placeholder: "Logo: ConocoPhillips" },
    ],

    included: [
      {
        title: "Complete ISNetworld Questionnaire",
        description:
          "Expert completion of all ISNetworld questions specific to your industry and operations.",
      },
      {
        title: "Custom Safety Programs",
        description:
          "Written safety programs tailored to your business that meet ISNetworld requirements.",
      },
      {
        title: "Document Preparation & Upload",
        description:
          "All documentation formatted, organized, and uploaded to your ISNetworld account.",
      },
      {
        title: "RAVS Preparation",
        description:
          "Review and Verification Services documentation fully prepared for submission.",
      },
      {
        title: "Dedicated Account Manager",
        description:
          "Direct access to your compliance specialist via phone and email throughout the process.",
      },
      {
        title: "Revision Support",
        description:
          "If ISNetworld requests changes or clarifications, we handle all revisions at no extra cost.",
      },
      {
        title: "Annual Renewal Reminder",
        description:
          "We'll notify you before your certification expires and help with annual renewals.",
      },
      {
        title: "Ongoing Compliance Support",
        description:
          "Questions after certification? We're here to help you maintain your compliant status.",
      },
    ],

    faqs: [
      {
        question: "How quickly can I get ISNetworld certified?",
        answer:
          "Most clients are certified within 5-7 business days. For urgent situations, we offer expedited service that can get you certified in as little as 48 hours. Your timeline depends on the complexity of your operations and how quickly you can provide necessary information.",
      },
      {
        question: "What if my documents get rejected by ISNetworld?",
        answer:
          "Our 100% Acceptance Guarantee means we fix any rejected documents at no additional cost. In our experience, rejections are rare because we prepare documentation to ISNetworld's exact specifications. If revisions are needed, we handle them immediately.",
      },
      {
        question: "Do you handle the annual renewal process?",
        answer:
          "Yes! We track your certification expiration date and reach out proactively to handle your annual renewal. Many clients choose our ongoing management service to maintain their certification year-round without any hassle.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We work with contractors across all industries that require ISNetworld certification, including oil & gas, petrochemical, manufacturing, construction, utilities, and more. Our team has experience with industry-specific requirements and regulations.",
      },
      {
        question: "What information do I need to provide?",
        answer:
          "We'll need basic company information, insurance certificates, and details about your operations. We'll guide you through everything needed and our team handles all the heavy lifting. Most clients spend less than 2 hours total providing information.",
      },
      {
        question: "How much does ISNetworld certification cost?",
        answer:
          "Our pricing depends on your company size and certification requirements. Contact us for a free assessment and quote. Most clients find our services pay for themselves by winning just one additional contract.",
      },
    ],

    finalCta: {
      headline: "Ready to Get ISNetworld\u00AE Certified?",
      subheadline:
        "Don't let compliance delays cost you contracts. Join 5,000+ contractors who trust JJ Safety for their ISNetworld certification.",
      phone: "18005551234",
      phoneDisplay: "1-800-555-1234",
    },
  },

  // ===========================================================================
  // Veriforce Content
  // ===========================================================================
  veriforce: {
    platformName: "Veriforce",
    trademark: "Veriforce\u00AE",
    slug: "veriforce",

    hero: {
      eyebrow: "Veriforce\u00AE Compliance Services",
      headline: "Veriforce\u00AE Certification Made Simple. Guaranteed Results.",
      subheadline:
        "Stop struggling with Veriforce requirements. Our experts have certified 3,500+ contractors with a 100% success rate. Get compliant fast and start working.",
    },

    trustMetrics: [
      { value: "3,500+", label: "Contractors Certified", icon: "users" },
      { value: "100%", label: "Success Rate", icon: "shield-check" },
      { value: "7 Days", label: "Average Turnaround", icon: "clock" },
    ],

    painPoints: [
      {
        icon: "clock",
        title: "Deadlines Looming",
        description:
          "Your operator is waiting for your Veriforce compliance. Every day of delay is potentially lost revenue and damaged relationships.",
      },
      {
        icon: "file-text",
        title: "Complex Requirements",
        description:
          "Veriforce has specific documentation requirements that vary by operator. Understanding what each client needs is overwhelming.",
      },
      {
        icon: "x",
        title: "Failed Audits",
        description:
          "You've tried to get compliant on your own but keep failing audits. The requirements seem to change and you can't keep up.",
      },
      {
        icon: "briefcase",
        title: "Resource Drain",
        description:
          "Managing Veriforce compliance internally is pulling your team away from actual work. You need to focus on operations, not paperwork.",
      },
    ],

    video: {
      headline: "See How We Simplify Veriforce\u00AE Compliance",
      placeholder: "Video: Veriforce Compliance Explainer (2-3 min)",
      description:
        "Learn how JJ Safety helps contractors navigate Veriforce certification with our proven process. See why thousands of companies trust us.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Assess Your Requirements",
        description:
          "We review your Veriforce requirements and operator specifications. Every operator has different needs \u2014 we know exactly what each one requires.",
      },
      {
        number: 2,
        title: "We Do the Heavy Lifting",
        description:
          "Our team prepares all documentation, completes required training coordination, and handles submissions. You stay focused on your business.",
      },
      {
        number: 3,
        title: "Compliant & Ready to Work",
        description:
          "Receive your Veriforce compliance status and start working with your operators. We maintain your compliance throughout the year.",
      },
    ],

    benefits: [
      {
        icon: "zap",
        title: "7-Day Average Turnaround",
        description:
          "Our streamlined process gets you compliant in about a week. Rush service available for urgent deadlines.",
      },
      {
        icon: "shield-check",
        title: "100% Success Guarantee",
        description:
          "We guarantee you'll pass your Veriforce compliance audit or we'll work for free until you do.",
      },
      {
        icon: "headphones",
        title: "Expert Guidance",
        description:
          "Our Veriforce specialists understand every operator's unique requirements and keep up with changing standards.",
      },
      {
        icon: "file-text",
        title: "Complete Documentation",
        description:
          "Safety manuals, training records, insurance verification \u2014 we prepare and organize everything you need.",
      },
      {
        icon: "users",
        title: "Operator Relationships",
        description:
          "We work with dozens of Veriforce operators and understand their specific compliance expectations.",
      },
      {
        icon: "trending-up",
        title: "Improved Compliance Scores",
        description:
          "Our clients consistently achieve top compliance scores, leading to preferred contractor status.",
      },
    ],

    testimonials: [
      {
        quote:
          "Veriforce compliance was a nightmare before JJ Safety. Now it's completely hands-off for us. They handle everything and we just show up to work.",
        name: "James Wilson",
        company: "Wilson Pipeline Services",
        role: "CEO",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "We needed to get compliant with three different operators fast. JJ Safety delivered on all three in under two weeks. Incredible service.",
        name: "Amanda Foster",
        company: "Foster Energy Solutions",
        role: "Compliance Director",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "The team at JJ Safety knows Veriforce inside and out. They anticipated issues before they happened and kept us on track the whole way.",
        name: "Robert Martinez",
        company: "Martinez Industrial",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "Enterprise Products", placeholder: "Logo: Enterprise Products" },
      { name: "Kinder Morgan", placeholder: "Logo: Kinder Morgan" },
      { name: "Williams Companies", placeholder: "Logo: Williams Companies" },
      { name: "Energy Transfer", placeholder: "Logo: Energy Transfer" },
      { name: "Plains All American", placeholder: "Logo: Plains All American" },
    ],

    included: [
      {
        title: "Operator-Specific Compliance",
        description: "Documentation tailored to each operator's unique Veriforce requirements.",
      },
      {
        title: "Safety Program Development",
        description: "Custom safety programs that meet Veriforce and operator standards.",
      },
      {
        title: "Training Coordination",
        description: "We coordinate required training and maintain accurate records.",
      },
      {
        title: "Insurance Verification",
        description: "Certificate management and verification submissions handled.",
      },
      {
        title: "Audit Preparation",
        description: "Complete preparation for Veriforce compliance audits.",
      },
      {
        title: "Document Management",
        description: "All documentation organized, updated, and maintained in Veriforce.",
      },
      {
        title: "Compliance Monitoring",
        description: "Proactive tracking of expiring documents and certifications.",
      },
      {
        title: "Dedicated Support",
        description: "Direct access to your compliance specialist whenever you need help.",
      },
    ],

    faqs: [
      {
        question: "How long does Veriforce certification take?",
        answer:
          "On average, we achieve Veriforce compliance for our clients in about 7 business days. Complex situations with multiple operators may take slightly longer. We also offer expedited service for urgent deadlines.",
      },
      {
        question: "Do you work with all Veriforce operators?",
        answer:
          "Yes, we work with all major operators in the Veriforce network. We understand each operator's specific requirements and have established processes for meeting their compliance standards.",
      },
      {
        question: "What happens if we fail a compliance audit?",
        answer:
          "Our 100% Success Guarantee means we work with you until you achieve compliance at no additional cost. In practice, our clients rarely fail audits because we prepare thoroughly for each operator's requirements.",
      },
      {
        question: "Can you help with multiple operator requirements?",
        answer:
          "Absolutely. Many of our clients work with multiple operators, each with different Veriforce requirements. We manage all of them simultaneously and keep track of each operator's specific needs.",
      },
      {
        question: "Do you provide ongoing compliance management?",
        answer:
          "Yes, we offer annual compliance management services. We track expiration dates, update documentation, coordinate training, and ensure you maintain compliance throughout the year.",
      },
      {
        question: "What's included in your Veriforce compliance service?",
        answer:
          "Our service includes complete documentation preparation, safety program development, training coordination, insurance verification, audit preparation, and ongoing support. Everything you need for compliance is included.",
      },
    ],

    finalCta: {
      headline: "Ready for Veriforce\u00AE Compliance?",
      subheadline:
        "Stop losing time and contracts to compliance issues. Get started with JJ Safety today and join thousands of compliant contractors.",
      phone: "18005551234",
      phoneDisplay: "1-800-555-1234",
    },
  },

  // ===========================================================================
  // Avetta Content
  // ===========================================================================
  avetta: {
    platformName: "Avetta",
    trademark: "Avetta\u00AE",
    slug: "avetta",

    hero: {
      eyebrow: "Avetta\u00AE Compliance Services",
      headline: "Get Avetta\u00AE Compliant. Win Bigger Contracts. Guaranteed.",
      subheadline:
        "Avetta compliance shouldn't hold you back. We've helped 4,000+ contractors achieve and maintain Avetta certification. Fast turnaround, expert support, guaranteed results.",
    },

    trustMetrics: [
      { value: "4,000+", label: "Contractors Certified", icon: "users" },
      { value: "4.8", label: "Client Rating", icon: "star" },
      { value: "5-7 Days", label: "Average Turnaround", icon: "clock" },
    ],

    painPoints: [
      {
        icon: "clock",
        title: "Contract Opportunities Waiting",
        description:
          "Major clients require Avetta compliance before you can work. Every day without certification is a missed opportunity.",
      },
      {
        icon: "file-text",
        title: "Overwhelming Documentation",
        description:
          "Avetta requires extensive safety documentation, policies, and procedures. Creating compliant documents from scratch is daunting.",
      },
      {
        icon: "x",
        title: "Low Compliance Grades",
        description:
          "Your current Avetta grade isn't where it needs to be. Clients see your score and choose competitors with higher ratings.",
      },
      {
        icon: "briefcase",
        title: "Internal Resources Stretched",
        description:
          "Your team is already busy with operations. Nobody has time to become an Avetta compliance expert.",
      },
    ],

    video: {
      headline: "Discover the JJ Safety Avetta\u00AE Advantage",
      placeholder: "Video: Avetta Compliance Explainer (2-3 min)",
      description:
        "See how we help contractors achieve top Avetta compliance grades and win more contracts with major clients.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Free Compliance Assessment",
        description:
          "We analyze your current Avetta status and client requirements. You'll receive a clear roadmap to full compliance.",
      },
      {
        number: 2,
        title: "Expert Implementation",
        description:
          "Our specialists handle documentation, questionnaires, and submissions. We work directly in your Avetta account.",
      },
      {
        number: 3,
        title: "High Compliance Grade Achieved",
        description:
          "Receive your Avetta compliance certification with a competitive grade. Start bidding on contracts with confidence.",
      },
    ],

    benefits: [
      {
        icon: "zap",
        title: "Fast Certification",
        description:
          "Most clients achieve Avetta compliance in 5-7 business days. We offer rush service for urgent contract deadlines.",
      },
      {
        icon: "shield-check",
        title: "Grade Improvement Guarantee",
        description:
          "We guarantee to improve your Avetta compliance grade or you don't pay. Most clients achieve A or B ratings.",
      },
      {
        icon: "headphones",
        title: "Avetta Specialists",
        description:
          "Our team works exclusively with contractor compliance platforms. We know Avetta's requirements inside and out.",
      },
      {
        icon: "file-text",
        title: "Complete Documentation Package",
        description:
          "Safety manuals, programs, policies \u2014 all custom-written to meet Avetta standards and your client requirements.",
      },
      {
        icon: "users",
        title: "4,000+ Success Stories",
        description:
          "Join thousands of contractors who've achieved Avetta compliance with JJ Safety. Our experience is your advantage.",
      },
      {
        icon: "trending-up",
        title: "Win More Contracts",
        description:
          "High Avetta scores open doors to Fortune 500 clients. Our clients report significant increases in contract wins.",
      },
    ],

    testimonials: [
      {
        quote:
          "JJ Safety took us from a C grade to an A grade in Avetta. We've since won three major contracts we couldn't have bid on before. Best investment we've made.",
        name: "Patricia Gonzalez",
        company: "Gonzalez Construction Group",
        role: "VP Operations",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "We tried to handle Avetta compliance ourselves for over a year. JJ Safety got us fully compliant in one week. Should have called them from the start.",
        name: "Kevin O'Brien",
        company: "O'Brien Electric",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "Professional, responsive, and they deliver results. JJ Safety has been managing our Avetta compliance for two years and our grade has never been higher.",
        name: "Lisa Park",
        company: "Park Industrial Services",
        role: "Safety Director",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "Walmart", placeholder: "Logo: Walmart" },
      { name: "Amazon", placeholder: "Logo: Amazon" },
      { name: "Target", placeholder: "Logo: Target" },
      { name: "Home Depot", placeholder: "Logo: Home Depot" },
      { name: "Lowe's", placeholder: "Logo: Lowe's" },
    ],

    included: [
      {
        title: "Complete Avetta Questionnaire",
        description: "Expert completion of all Avetta compliance questionnaires.",
      },
      {
        title: "Custom Safety Documentation",
        description: "Safety programs and policies written specifically for Avetta requirements.",
      },
      {
        title: "Document Upload & Organization",
        description: "All documentation properly formatted and uploaded to Avetta.",
      },
      {
        title: "Insurance Certificate Management",
        description: "COI tracking and verification to maintain compliance.",
      },
      {
        title: "Grade Optimization",
        description: "Strategic approach to maximize your Avetta compliance score.",
      },
      {
        title: "Client-Specific Requirements",
        description: "Documentation tailored to your specific client requirements.",
      },
      {
        title: "Dedicated Account Manager",
        description: "Your personal compliance expert available by phone and email.",
      },
      {
        title: "Ongoing Compliance Support",
        description: "Annual renewal management and compliance maintenance.",
      },
    ],

    faqs: [
      {
        question: "How long does it take to get Avetta certified?",
        answer:
          "Most of our clients achieve Avetta compliance in 5-7 business days. The timeline can vary based on your current compliance status and documentation needs. We offer expedited service for time-sensitive situations.",
      },
      {
        question: "Can you improve my existing Avetta grade?",
        answer:
          "Yes! Many clients come to us with low Avetta grades. We analyze your current compliance gaps and implement improvements. We guarantee to improve your grade or you don't pay for our services.",
      },
      {
        question: "What Avetta compliance grade can I expect?",
        answer:
          "Most of our clients achieve A or B grades in Avetta. Your grade depends on factors like your industry, safety history, and documentation. We work to maximize your score within your circumstances.",
      },
      {
        question: "Do you help with specific client requirements in Avetta?",
        answer:
          "Absolutely. Different clients have different requirements within Avetta. We customize our approach based on which clients you're trying to work with and their specific compliance expectations.",
      },
      {
        question: "What if I have multiple compliance platforms to manage?",
        answer:
          "JJ Safety specializes in all major contractor compliance platforms including Avetta, ISNetworld, and Veriforce. We can manage multiple platforms simultaneously and often find efficiencies across platforms.",
      },
      {
        question: "How does pricing work for Avetta compliance?",
        answer:
          "Our pricing is based on your company size and compliance needs. Contact us for a free assessment and quote. We're transparent about costs and most clients find our service pays for itself quickly.",
      },
    ],

    finalCta: {
      headline: "Ready to Achieve Avetta\u00AE Compliance?",
      subheadline:
        "Don't let a low compliance grade cost you contracts. Join 4,000+ contractors who trust JJ Safety for Avetta compliance.",
      phone: "18005551234",
      phoneDisplay: "1-800-555-1234",
    },
  },
};

// =============================================================================
// Helper Functions
// =============================================================================

/**
 * Get content for a specific platform
 */
export function getContent(platform: string): PlatformContent | undefined {
  return platformContent[platform];
}

/**
 * Get all available platforms
 */
export function getAllPlatforms(): string[] {
  return Object.keys(platformContent);
}

/**
 * Check if a platform exists
 */
export function isPlatformValid(platform: string): boolean {
  return platform in platformContent;
}
