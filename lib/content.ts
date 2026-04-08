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

  // ===========================================================================
  // Contractor Prequalification (General Landing Page)
  // ===========================================================================
  "contractor-prequalification": {
    platformName: "Contractor Prequalification",
    trademark: "Contractor Prequalification",
    slug: "contractor-prequalification",

    hero: {
      eyebrow: "Contractor Prequalification Services",
      headline:
        "Failing Prequalification? We Get Contractors Approved.",
      subheadline:
        "Stop losing jobs because of paperwork. JJ Safety has helped 7,000+ contractors pass prequalification on ISNetworld, Avetta, Veriforce, and more \u2014 approved in weeks, not months.",
    },

    trustMetrics: [
      { value: "7,000+", label: "Contractors Approved", icon: "users" },
      { value: "Nationwide", label: "Coverage", icon: "globe" },
      { value: "100%", label: "Acceptance Guarantee", icon: "shield-check" },
    ],

    painPoints: [
      {
        icon: "x",
        title: "Losing Contracts to Paperwork",
        description:
          "You won the job \u2014 but you can't start because you're stuck in a prequalification system you've never seen before. The clock is ticking and your client is waiting.",
      },
      {
        icon: "file-text",
        title: "Hundreds of Confusing Questions",
        description:
          "ISNetworld, Avetta, and Veriforce questionnaires ask for safety programs, policies, and documentation you don't have. One wrong answer and you're rejected.",
      },
      {
        icon: "clock",
        title: "Months of Back-and-Forth",
        description:
          "You've been submitting documents for weeks and keep getting rejections with vague feedback. You don't have time to become a compliance expert.",
      },
      {
        icon: "briefcase",
        title: "No Safety Manual or Programs",
        description:
          "Your hiring company requires a written safety manual and programs but you've never had to create one before. Building these from scratch feels impossible.",
      },
    ],

    video: {
      headline: "See How JJ Safety Gets Contractors Prequalified Fast",
      placeholder: "Video: Contractor Prequalification Explainer (2-3 min)",
      description:
        "Learn how we've helped 7,000+ contractors navigate ISNetworld, Avetta, Veriforce, and other prequalification platforms. See our process and guarantee.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Call Us for a Free Assessment",
        description:
          "Tell us which platform you need and your deadline. We'll assess your situation and give you a clear roadmap \u2014 no obligation, no pressure.",
      },
      {
        number: 2,
        title: "We Handle Everything",
        description:
          "Our compliance experts write your safety manuals, complete questionnaires, prepare RAVS documentation, and upload everything to your account.",
      },
      {
        number: 3,
        title: "You Get Approved & Start Working",
        description:
          "Pass prequalification and start winning contracts. We provide weekly account maintenance to keep your compliance grades as high as possible.",
      },
    ],

    benefits: [
      {
        icon: "shield-check",
        title: "ISNetworld (ISN) Compliance",
        description:
          "Complete questionnaire assistance, RAVS documentation, safety program writing, and insurance uploads. 100% acceptance guarantee on all submissions.",
      },
      {
        icon: "award",
        title: "Avetta Certification",
        description:
          "Full Avetta account setup, documentation, and grade optimization. We help contractors achieve A and B ratings to win bigger contracts.",
      },
      {
        icon: "check-circle",
        title: "Veriforce Compliance",
        description:
          "Operator-specific compliance documentation, audit preparation, training coordination, and ongoing management across all your Veriforce operators.",
      },
      {
        icon: "file-text",
        title: "Safety Manual Writing",
        description:
          "Custom safety programs and manuals written to platform-specific standards. Not templates \u2014 tailored documents for your industry and operations.",
      },
      {
        icon: "target",
        title: "RAVS & Document Management",
        description:
          "Review and Verification Services preparation, document formatting, uploading, and revision handling. We manage the entire submission process.",
      },
      {
        icon: "calendar",
        title: "Ongoing Compliance Management",
        description:
          "Weekly account maintenance, expiration tracking, annual renewals, and proactive updates. Your dedicated account manager visits your account weekly.",
      },
    ],

    testimonials: [
      {
        quote:
          "We were about to lose a huge contract because we couldn't figure out ISNetworld. JJ Safety had us approved in 5 days. They wrote our entire safety manual and handled everything. Lifesaver.",
        name: "Carlos Mendez",
        company: "Mendez Industrial Services",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "I didn't even know what Avetta was until my client told me I needed it to keep working. JJ Safety walked me through the whole process and got us compliant fast. Highly recommend.",
        name: "Jennifer Walsh",
        company: "Walsh Mechanical LLC",
        role: "Operations Manager",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "JJ Safety manages our prequalification on three different platforms. They handle ISNetworld, Avetta, AND Veriforce for us. One less thing I have to worry about running my business.",
        name: "Robert Kim",
        company: "Kim Environmental Solutions",
        role: "President",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "ISNetworld", placeholder: "Logo: ISNetworld" },
      { name: "Avetta", placeholder: "Logo: Avetta" },
      { name: "Veriforce", placeholder: "Logo: Veriforce" },
      { name: "Compliance Pro", placeholder: "Logo: Compliance Pro" },
      { name: "BROWZ", placeholder: "Logo: BROWZ" },
    ],

    included: [
      {
        title: "Complete Platform Setup & Questionnaires",
        description:
          "Expert completion of all prequalification questionnaires on ISNetworld, Avetta, Veriforce, and other platforms.",
      },
      {
        title: "Custom Safety Manual & Programs",
        description:
          "Written safety manuals and programs tailored to your industry that meet all platform requirements.",
      },
      {
        title: "RAVS Documentation & Uploads",
        description:
          "All Review and Verification Services documentation prepared, formatted, and uploaded to your account.",
      },
      {
        title: "Insurance Coordination",
        description:
          "Certificate of insurance management, uploads, and tracking to keep your compliance current.",
      },
      {
        title: "Dedicated Account Manager",
        description:
          "Your personal compliance specialist with direct phone and email access throughout the process.",
      },
      {
        title: "Weekly Account Maintenance",
        description:
          "Your account manager checks your account at minimum once per week to maintain the highest possible grades.",
      },
      {
        title: "Revision & Rejection Handling",
        description:
          "If any submission is rejected, we fix and resubmit at no additional cost. 100% acceptance guarantee.",
      },
      {
        title: "Annual Renewal Management",
        description:
          "Proactive renewal tracking and handling so you never lose your compliant status.",
      },
    ],

    faqs: [
      {
        question: "How much does contractor prequalification cost?",
        answer:
          "Our pricing depends on your company size, the platforms you need, and the complexity of your operations. We offer a free, no-obligation assessment where we'll review your requirements and provide a transparent quote. Most clients find our services pay for themselves by winning just one additional contract.",
      },
      {
        question: "How quickly can I get approved?",
        answer:
          "Most contractors are approved within 2-4 weeks depending on the platform and complexity. ISNetworld submissions can be completed in as little as 3-5 business days. We also offer rush service for urgent contract deadlines.",
      },
      {
        question: "Which prequalification platforms do you support?",
        answer:
          "We support all major contractor prequalification platforms including ISNetworld (ISN), Avetta, Veriforce, Compliance Pro (formerly PEC Safety), BROWZ, and others. If your hiring company uses a platform we haven't listed, call us \u2014 chances are we've worked with it.",
      },
      {
        question: "What if I get rejected after you submit?",
        answer:
          "Our 100% Acceptance Guarantee means we handle all rejections and resubmissions at no additional cost. We fix the issues and resubmit until you're approved. In our experience, rejections are rare because we prepare documentation to each platform's exact specifications.",
      },
      {
        question: "Do I need a safety manual? Can you write one for me?",
        answer:
          "Most prequalification platforms require a written safety manual and specific safety programs. Yes, we write custom safety manuals tailored to your industry and operations \u2014 not generic templates. These documents are written to meet platform-specific requirements.",
      },
      {
        question: "Do you help with ongoing compliance or just the initial setup?",
        answer:
          "Both. Many clients start with initial prequalification and then choose our ongoing management service. Your dedicated account manager visits your account at minimum once per week, tracks expiring documents, handles renewals, and keeps your grades as high as possible.",
      },
    ],

    finalCta: {
      headline: "Ready to Pass Prequalification?",
      subheadline:
        "Don't let compliance paperwork cost you contracts. Call us today for a free assessment or fill out the form below. Join 7,000+ contractors who trust JJ Safety.",
      phone: "18332777022",
      phoneDisplay: "(833) 277-7022",
    },
  },

  // ===========================================================================
  // Safety Manuals & Written Programs
  // ===========================================================================
  "safety-manuals": {
    platformName: "Safety Manuals",
    trademark: "Safety Manuals & Written Programs",
    slug: "safety-manuals",

    hero: {
      eyebrow: "Custom Safety Documentation Services",
      headline:
        "Custom Safety Manuals for Contractors \u2014 Written by Compliance Experts",
      subheadline:
        "Need a safety manual to win work? We write custom safety programs tailored to your operations \u2014 not templates. OSHA-compliant documentation that passes ISNetworld, Avetta, and client audits.",
    },

    trustMetrics: [
      { value: "7,000+", label: "Contractors Served", icon: "users" },
      { value: "OSHA", label: "Compliant Programs", icon: "shield-check" },
      { value: "100%", label: "Platform Acceptance", icon: "check-circle" },
    ],

    painPoints: [
      {
        icon: "file-text",
        title: "Client Requires Written Safety Programs",
        description:
          "Your GC or hiring company is asking for a safety manual and written programs you don't have. You need professional documentation to start the job.",
      },
      {
        icon: "x",
        title: "Templates Keep Getting Rejected",
        description:
          "You downloaded a template but it doesn't match your operations and keeps failing audits. Generic documents don't pass compliance reviews.",
      },
      {
        icon: "briefcase",
        title: "No Safety Staff to Write These",
        description:
          "You're running a business, not a safety department. You don't have the time or expertise to write OSHA-compliant safety documentation from scratch.",
      },
      {
        icon: "clock",
        title: "Deadline Pressure",
        description:
          "You need these documents yesterday. Your contract is on hold until you submit compliant safety programs, and you can't afford more delays.",
      },
    ],

    video: {
      headline: "See How We Create Custom Safety Documentation",
      placeholder: "Video: Safety Manual Writing Process (2-3 min)",
      description:
        "Learn how our compliance experts write custom safety manuals and programs that pass audits and meet platform requirements. See our process.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Tell Us About Your Operations",
        description:
          "We learn about your company, your work activities, and your specific compliance requirements. This ensures your documents accurately reflect what you do.",
      },
      {
        number: 2,
        title: "We Write Your Custom Programs",
        description:
          "Our safety experts write professional, OSHA-compliant documentation tailored to your operations \u2014 not generic templates that don't fit your business.",
      },
      {
        number: 3,
        title: "You Pass Compliance & Win Work",
        description:
          "Submit your custom safety manual to clients, GCs, or compliance platforms. Pass audits and start winning contracts that require proper documentation.",
      },
    ],

    benefits: [
      {
        icon: "file-text",
        title: "Company Safety Manuals",
        description:
          "Comprehensive health & safety programs covering your company policies, procedures, and OSHA requirements. The foundation of your safety program.",
      },
      {
        icon: "target",
        title: "Site-Specific Safety Plans (SSSPs)",
        description:
          "Custom safety plans for specific job sites, projects, or clients. Addresses unique hazards and requirements for each work location.",
      },
      {
        icon: "alert-circle",
        title: "Hazard Communication Programs",
        description:
          "OSHA-compliant HazCom programs including chemical safety, SDS management, labeling requirements, and employee training procedures.",
      },
      {
        icon: "briefcase",
        title: "Job Safety Analyses (JSAs)",
        description:
          "Task-specific hazard analyses that break down job steps, identify hazards, and document controls. Required by many clients and GCs.",
      },
      {
        icon: "shield-check",
        title: "Fall Protection Plans",
        description:
          "Written fall protection programs for work at heights, including equipment requirements, inspection procedures, and rescue plans.",
      },
      {
        icon: "check-circle",
        title: "Any Custom Program You Need",
        description:
          "Substance abuse policies, emergency action plans, confined space procedures, respiratory protection \u2014 we write whatever your client or platform requires.",
      },
    ],

    testimonials: [
      {
        quote:
          "I needed a safety manual for a big GC contract and had no idea where to start. JJ Safety wrote our entire program in a week. We passed the audit on the first try and got the job.",
        name: "Mike Hernandez",
        company: "Hernandez Concrete LLC",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "We were using a template that kept getting rejected by ISNetworld. JJ Safety rewrote our programs from scratch and everything was accepted immediately. Should have called them first.",
        name: "Angela Torres",
        company: "Torres Electrical Services",
        role: "Operations Manager",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "Professional, thorough, and they actually understand construction safety. Our custom safety manual from JJ Safety has helped us win multiple contracts with major clients.",
        name: "Steve Mitchell",
        company: "Mitchell Industrial Group",
        role: "President",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "ISNetworld", placeholder: "Logo: ISNetworld" },
      { name: "Avetta", placeholder: "Logo: Avetta" },
      { name: "Veriforce", placeholder: "Logo: Veriforce" },
      { name: "OSHA", placeholder: "Logo: OSHA Compliant" },
      { name: "BROWZ", placeholder: "Logo: BROWZ" },
    ],

    included: [
      {
        title: "Custom Safety Manual",
        description:
          "A comprehensive company safety manual tailored to your operations, industry, and compliance requirements.",
      },
      {
        title: "OSHA-Compliant Programs",
        description:
          "Written programs that meet OSHA regulatory requirements for your specific work activities and hazards.",
      },
      {
        title: "Platform-Ready Formatting",
        description:
          "Documents formatted and organized for ISNetworld RAVS uploads, Avetta, or any compliance platform.",
      },
      {
        title: "Client-Specific Requirements",
        description:
          "Programs written to meet your specific client, GC, or hiring company requirements.",
      },
      {
        title: "Revisions Until Accepted",
        description:
          "If your documents need changes to pass an audit, we revise them at no additional cost.",
      },
      {
        title: "Expert Consultation",
        description:
          "Direct access to safety compliance experts who can answer questions about your documentation needs.",
      },
      {
        title: "Digital & Print-Ready Files",
        description:
          "Receive your documents in editable formats (Word) and PDF for easy distribution and printing.",
      },
      {
        title: "Annual Update Service",
        description:
          "Optional annual reviews and updates to keep your programs current with changing regulations.",
      },
    ],

    faqs: [
      {
        question: "How much does a custom safety manual cost?",
        answer:
          "Pricing depends on your company size, industry, and what programs you need. We offer a free assessment to understand your requirements and provide a transparent quote. Most contractors find the investment pays for itself by winning contracts that require proper documentation.",
      },
      {
        question: "How long does it take to write a safety manual?",
        answer:
          "Most safety manuals are completed within 1-2 weeks. Simple programs can be done in a few days, while comprehensive manuals with multiple specialized programs may take slightly longer. We offer rush service for urgent deadlines.",
      },
      {
        question: "Why can't I just use a template?",
        answer:
          "Templates are generic and don't reflect your actual operations. Clients, auditors, and compliance platforms can tell when you're using a template that doesn't match your work. Custom programs pass audits because they accurately describe what your company does and how you manage safety.",
      },
      {
        question: "What if my client's requirements change?",
        answer:
          "We include revisions to ensure your documents meet requirements. If a client or auditor requests changes, we update your programs at no additional cost until they're accepted.",
      },
      {
        question: "Do you update safety manuals annually?",
        answer:
          "Yes, we offer an annual update service to keep your programs current with changing OSHA regulations and industry best practices. Many clients add this to their ongoing compliance management with us.",
      },
      {
        question: "Can you write programs for ISNetworld RAVS?",
        answer:
          "Absolutely. Many of our clients need safety programs specifically for ISNetworld RAVS (Review and Verification Services). We write programs to ISNetworld's exact specifications and have a 100% acceptance rate.",
      },
    ],

    finalCta: {
      headline: "Ready to Get Your Safety Manual?",
      subheadline:
        "Don't let missing documentation cost you contracts. Call us today for a free assessment. We'll write custom safety programs that pass audits and help you win work.",
      phone: "18332777022",
      phoneDisplay: "(833) 277-7022",
    },
  },

  // ===========================================================================
  // Compliance Pro (Formerly PEC Safety)
  // ===========================================================================
  "compliance-pro": {
    platformName: "Compliance Pro",
    trademark: "Compliance Pro\u00AE (Formerly PEC Safety)",
    slug: "compliance-pro",

    hero: {
      eyebrow: "Compliance Pro\u00AE / PEC Safety Services",
      headline:
        "Compliance Pro Giving You Trouble? We Get Oil & Gas Contractors Approved.",
      subheadline:
        "Stop losing field work because of prequalification headaches. JJ Safety has helped thousands of contractors pass Compliance Pro (formerly PEC Safety) \u2014 with the safety documentation, questionnaires, and training verification your operators demand.",
    },

    trustMetrics: [
      { value: "7,000+", label: "Contractors Served", icon: "users" },
      { value: "Oil & Gas", label: "Industry Experts", icon: "target" },
      { value: "100%", label: "Acceptance Guarantee", icon: "shield-check" },
    ],

    painPoints: [
      {
        icon: "x",
        title: "Operator Won't Let You On Site",
        description:
          "Your crew is ready to work but the operator says you're not compliant. Every day off the job site is money walking out the door \u2014 and your competition is taking your place.",
      },
      {
        icon: "file-text",
        title: "Drowning in Documentation Requirements",
        description:
          "PEC wants safety manuals, training records, questionnaires, and policies you've never even heard of. The platform keeps asking for more documents and nothing seems to satisfy them.",
      },
      {
        icon: "clock",
        title: "SafeLand & Training Verification Nightmare",
        description:
          "Tracking down training certificates for every worker, making sure SafeLand is current, verifying MSTQ Core compliance \u2014 it's a full-time job you don't have time for.",
      },
      {
        icon: "briefcase",
        title: "No Safety Director On Staff",
        description:
          "Big operators can afford compliance departments. You're running a lean crew and wearing every hat. You need an expert who knows exactly what PEC/Compliance Pro requires.",
      },
    ],

    video: {
      headline: "See How We Handle Compliance Pro For You",
      placeholder: "Video: Compliance Pro / PEC Safety Explainer (2-3 min)",
      description:
        "Watch how JJ Safety helps oil & gas contractors navigate Compliance Pro requirements and get approved fast. No more guessing what operators want.",
      ctaText: "Get Your Free Assessment",
    },

    steps: [
      {
        number: 1,
        title: "Tell Us Your Operator Requirements",
        description:
          "Call us and tell us which operators you need to work for. We know exactly what each one requires in Compliance Pro \u2014 we've done this thousands of times.",
      },
      {
        number: 2,
        title: "We Handle Everything",
        description:
          "Safety manuals, PEC questionnaires, training documentation, SafeLand verification \u2014 we prepare everything and upload it to your account. You focus on your business.",
      },
      {
        number: 3,
        title: "You Get Approved & Get Back to Work",
        description:
          "Pass Compliance Pro prequalification and get your crew back on site. We maintain your account so you stay compliant and never get shut out again.",
      },
    ],

    benefits: [
      {
        icon: "file-text",
        title: "Complete Questionnaire Assistance",
        description:
          "We handle the PEC Standardized Safety Questionnaire and all operator-specific questions. Expert answers that pass audits the first time.",
      },
      {
        icon: "shield-check",
        title: "Custom Safety Manual Writing",
        description:
          "Written safety programs that meet Compliance Pro requirements and your specific operators' standards. Not templates \u2014 documents built for your operations.",
      },
      {
        icon: "award",
        title: "Training Documentation & Verification",
        description:
          "SafeLand, SafeGulf, MSTQ Core \u2014 we verify training records, track certifications, and ensure your workforce documentation is always current.",
      },
      {
        icon: "target",
        title: "Operator-Specific Compliance",
        description:
          "Different operators have different requirements. We know what majors and independents want and customize your compliance package accordingly.",
      },
      {
        icon: "calendar",
        title: "Ongoing Account Maintenance",
        description:
          "We monitor your Compliance Pro account weekly, track expiring documents, and handle renewals before they become problems.",
      },
      {
        icon: "headphones",
        title: "Dedicated Compliance Expert",
        description:
          "Your personal account manager knows oil & gas compliance inside and out. Direct phone and email access whenever you need help.",
      },
    ],

    testimonials: [
      {
        quote:
          "We lost a big drilling contract because we couldn't figure out PEC. Called JJ Safety on Monday, had our account compliant by Friday. Been using them ever since.",
        name: "Ray Dominguez",
        company: "Dominguez Oilfield Services",
        role: "Owner",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "Managing training records for 40 guys was a nightmare. JJ Safety took over our Compliance Pro account and now I never worry about it. They handle everything.",
        name: "Chris Landry",
        company: "Landry Well Services LLC",
        role: "Operations Manager",
        rating: 5,
        image: "placeholder",
      },
      {
        quote:
          "The operators we work for kept asking for more documentation. JJ Safety knew exactly what they needed and got us approved fast. Worth every penny.",
        name: "Maria Santos",
        company: "Santos Energy Solutions",
        role: "Safety Coordinator",
        rating: 5,
        image: "placeholder",
      },
    ],

    clientLogos: [
      { name: "Compliance Pro", placeholder: "Logo: Compliance Pro" },
      { name: "Veriforce", placeholder: "Logo: Veriforce" },
      { name: "SafeLandUSA", placeholder: "Logo: SafeLandUSA" },
      { name: "SafeGulf", placeholder: "Logo: SafeGulf" },
      { name: "ISNetworld", placeholder: "Logo: ISNetworld" },
    ],

    included: [
      {
        title: "Complete PEC Questionnaire",
        description:
          "Expert completion of the PEC Standardized Safety Questionnaire and all operator-specific compliance questions.",
      },
      {
        title: "Custom Safety Programs",
        description:
          "Written safety manuals and programs tailored to oil & gas operations and your specific operators' requirements.",
      },
      {
        title: "Training Record Management",
        description:
          "SafeLand, SafeGulf, and MSTQ Core verification. We track and upload all training documentation.",
      },
      {
        title: "Document Upload & Organization",
        description:
          "All compliance documentation properly formatted and uploaded to your Compliance Pro account.",
      },
      {
        title: "Operator-Specific Requirements",
        description:
          "Compliance packages customized for each operator you need to work with \u2014 majors and independents.",
      },
      {
        title: "Weekly Account Monitoring",
        description:
          "Your account manager checks your Compliance Pro status weekly and addresses issues proactively.",
      },
      {
        title: "Expiration Tracking & Renewals",
        description:
          "We track expiring certifications and documents and handle renewals before they impact your compliance.",
      },
      {
        title: "Revision Guarantee",
        description:
          "If an operator or auditor requests changes, we revise and resubmit at no additional cost until approved.",
      },
    ],

    faqs: [
      {
        question: "What is Compliance Pro and how is it different from PEC Safety?",
        answer:
          "Compliance Pro is the same platform as PEC Safety \u2014 it was rebranded after being acquired by Veriforce. If your operator requires PEC or Compliance Pro prequalification, we can help you get compliant on the platform regardless of what they call it.",
      },
      {
        question: "How quickly can I get Compliance Pro compliant?",
        answer:
          "Most contractors are compliant within 1-2 weeks, depending on what documentation you already have. If you have an urgent deadline, we offer rush service to get you approved faster. Call us and we'll assess your situation.",
      },
      {
        question: "Do you handle SafeLand and SafeGulf training verification?",
        answer:
          "Yes. We verify all training records including SafeLand, SafeGulf, MSTQ Core, and any operator-specific training requirements. We track certifications and alert you before they expire.",
      },
      {
        question: "What if different operators have different requirements?",
        answer:
          "We customize your compliance package for each operator. We know what the majors want versus independents, and we make sure your Compliance Pro account satisfies all of them.",
      },
      {
        question: "Do you write safety manuals for oil & gas operations?",
        answer:
          "Absolutely. We write custom safety manuals and programs specifically for oil & gas contractors. These aren't templates \u2014 they're tailored to your operations and meet both PEC/Compliance Pro requirements and your operators' specific standards.",
      },
      {
        question: "What happens after I'm approved?",
        answer:
          "We offer ongoing account maintenance. Your dedicated account manager monitors your Compliance Pro status weekly, tracks expiring documents, handles renewals, and keeps your compliance grades high so you never get shut out of work.",
      },
    ],

    finalCta: {
      headline: "Ready to Get Compliance Pro Approved?",
      subheadline:
        "Stop losing work to prequalification problems. Call now for a free assessment \u2014 we'll tell you exactly what you need and how fast we can get you compliant. Join thousands of oil & gas contractors who trust JJ Safety.",
      phone: "18332777022",
      phoneDisplay: "(833) 277-7022",
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
