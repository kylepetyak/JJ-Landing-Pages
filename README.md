# JJ Safety Landing Page Templates

High-converting landing page templates for JJ Safety's contractor compliance services (ISNetworld, Veriforce, Avetta). These templates are designed based on proven conversion optimization principles from Neil Patel's research and Russell Brunson's Hook → Story → Offer framework.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the template hub.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Template selector/preview hub
│   ├── isnetworld/page.tsx # ISNetworld landing page
│   ├── veriforce/page.tsx  # Veriforce landing page
│   └── avetta/page.tsx     # Avetta landing page
├── components/
│   ├── sections/           # Page section components
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── ProblemAgitation.tsx
│   │   ├── VideoSection.tsx
│   │   ├── SolutionSteps.tsx
│   │   ├── BenefitsGrid.tsx
│   │   ├── SocialProof.tsx
│   │   ├── WhatYouGet.tsx
│   │   ├── FAQSection.tsx
│   │   ├── FinalCTA.tsx
│   │   └── MinimalFooter.tsx
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── LeadForm.tsx
│   │   ├── Accordion.tsx
│   │   └── TestimonialCard.tsx
│   └── Placeholder.tsx     # Placeholder component for media
├── lib/
│   ├── content.ts          # Content structure with sample data
│   └── types.ts            # TypeScript interfaces
└── public/
    └── placeholder/        # Placeholder images (if needed)
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

## Design System

### Colors

The color scheme uses CSS custom properties for easy customization:

```css
:root {
  --color-primary: #1e40af;      /* Deep blue - trust, professionalism */
  --color-primary-dark: #1e3a8a;
  --color-accent: #f97316;       /* Orange - urgency, action */
  --color-accent-hover: #ea580c;
  --color-success: #16a34a;      /* Green - positive, approved */
}
```

To customize colors, edit `app/globals.css` and `tailwind.config.ts`.

### Typography

- **Font:** Inter (Google Fonts)
- **Headlines:** Bold, large, high contrast
- **Body:** Clean, readable, adequate line height

## Component Inventory

### Section Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `HeroSection` | Above-the-fold hero with form | `content`, `trustMetrics`, `platformName` |
| `TrustBar` | Key metrics display | `metrics` |
| `ProblemAgitation` | Pain points section | `painPoints`, `platformName` |
| `VideoSection` | Video placeholder with CTA | `content` |
| `SolutionSteps` | 3-step process | `steps` |
| `BenefitsGrid` | Benefits in grid layout | `benefits` |
| `SocialProof` | Testimonials and logos | `testimonials`, `clientLogos` |
| `WhatYouGet` | Included items checklist | `items`, `platformName` |
| `FAQSection` | FAQ accordion | `faqs` |
| `FinalCTA` | Final call-to-action | `content`, `platformName` |
| `MinimalFooter` | Minimal footer | - |

### UI Components

| Component | Purpose | Props |
|-----------|---------|-------|
| `Button` | Action buttons | `variant`, `size`, `isLoading`, `href` |
| `LeadForm` | Lead capture form | `headline`, `ctaText`, `variant` |
| `Accordion` | FAQ accordion | `items`, `allowMultiple` |
| `TestimonialCard` | Testimonial display | `testimonial`, `variant` |
| `Placeholder` | Media placeholders | `type`, `label`, `aspectRatio`, `notes` |

## Content Customization

### Updating Content

All content is centralized in `lib/content.ts`. To update content for a platform:

```typescript
// lib/content.ts
export const platformContent = {
  isnetworld: {
    platformName: "ISNetworld",
    trademark: "ISNetworld®",

    hero: {
      eyebrow: "Your eyebrow text",
      headline: "Your headline",
      subheadline: "Your subheadline",
    },

    // ... more content
  },
};
```

### Adding a New Platform

1. Add content to `lib/content.ts`:
```typescript
export const platformContent = {
  // ... existing platforms
  newplatform: {
    platformName: "New Platform",
    trademark: "New Platform®",
    // ... full content structure
  },
};
```

2. Create page at `app/newplatform/page.tsx`:
```typescript
import { getContent } from "@/lib/content";
// ... import sections

const content = getContent("newplatform")!;

export default function NewPlatformPage() {
  return (
    <main>
      <HeroSection content={content.hero} ... />
      // ... other sections
    </main>
  );
}
```

## Replacing Placeholders

### Images

The `Placeholder` component marks where images should go:

```tsx
<Placeholder
  type="avatar"
  label="Photo: John Smith"
  aspectRatio="1:1"
  notes="Replace with actual customer photo"
/>
```

To replace with actual images:

```tsx
import Image from "next/image";

<Image
  src="/images/john-smith.jpg"
  alt="John Smith"
  width={80}
  height={80}
  className="rounded-full"
/>
```

### Videos

Video placeholders indicate where to embed:

```tsx
<Placeholder
  type="video"
  label="Video: ISNetworld Compliance Explainer"
  aspectRatio="16:9"
  notes="Replace with YouTube/Vimeo embed"
/>
```

To replace with YouTube embed:

```tsx
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="ISNetworld Compliance Explainer"
  className="w-full aspect-video rounded-xl"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Logos

Logo placeholders:

```tsx
<Placeholder
  type="logo"
  label="Logo: Client Name"
  width="140px"
  height="50px"
/>
```

Replace with actual logos:

```tsx
<Image
  src="/logos/client-name.svg"
  alt="Client Name"
  width={140}
  height={50}
  className="grayscale hover:grayscale-0"
/>
```

## Form Integration

### Lead Form Configuration

The `LeadForm` component captures:
- First Name
- Last Name
- Email
- Phone
- Company (optional)
- Message (optional)
- UTM parameters (automatic)

### Webhook Integration

To send form data to a webhook:

```typescript
// In LeadForm.tsx, update handleSubmit:

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // ... validation

  try {
    const response = await fetch('YOUR_WEBHOOK_URL', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  } catch {
    setStatus('error');
  }
};
```

### CRM Integration Examples

**HubSpot:**
```typescript
await fetch('https://api.hsforms.com/submissions/v3/integration/submit/{portalId}/{formGuid}', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    fields: [
      { name: 'firstname', value: formData.firstName },
      { name: 'lastname', value: formData.lastName },
      { name: 'email', value: formData.email },
      { name: 'phone', value: formData.phone },
      { name: 'company', value: formData.company },
    ],
  }),
});
```

**Zapier:**
```typescript
await fetch('https://hooks.zapier.com/hooks/catch/{hookId}/', {
  method: 'POST',
  body: JSON.stringify(formData),
});
```

## UTM Tracking

UTM parameters are automatically captured from the URL and included in form submissions:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_term`
- `utm_content`

Example URL:
```
https://jjsafety.com/isnetworld?utm_source=google&utm_medium=cpc&utm_campaign=isnetworld_certification
```

## Analytics Events

Recommended events to track:

| Event | Trigger | Properties |
|-------|---------|------------|
| `page_view` | Page load | `page_name`, `platform` |
| `form_start` | First form field focus | `form_location` |
| `form_submit` | Form submission | `form_location`, `success` |
| `cta_click` | CTA button click | `cta_text`, `section` |
| `video_play` | Video play button click | `video_title` |
| `faq_expand` | FAQ accordion open | `question` |

Example Google Analytics 4 implementation:

```typescript
// Track form submission
gtag('event', 'form_submit', {
  form_location: 'hero',
  success: true,
});

// Track CTA click
gtag('event', 'cta_click', {
  cta_text: 'Get My Free Assessment',
  section: 'hero',
});
```

## Performance

Target Lighthouse scores: 90+

Performance optimizations included:
- Server Components (minimal client JS)
- Font optimization with `next/font`
- CSS purging with Tailwind
- Lazy-loadable video section
- Optimized images with `next/image`

## Accessibility

WCAG AA compliant features:
- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast
- Focus indicators
- Screen reader friendly

## Mobile Optimization

- Mobile-first responsive design
- Touch-friendly tap targets (min 48px)
- Readable text without zooming
- Optimized for 83%+ mobile traffic

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Other Platforms

```bash
# Build static export
npm run build

# Files will be in .next/
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome for Android (last 2 versions)

## License

Proprietary - JJ Safety internal use only.

---

## Quick Reference

### Page Flow (Hook → Story → Offer)

1. **Hero** (Hook) - Capture attention
2. **Trust Bar** - Immediate credibility
3. **Problem Agitation** (Story Part 1) - Build emotional connection
4. **Video** (Story Part 2) - Explain and build trust
5. **Solution Steps** (Story Part 3) - Make it feel simple
6. **Benefits Grid** (Offer Part 1) - Logical appeal
7. **Social Proof** (Offer Part 2) - Third-party validation
8. **What You Get** (Offer Part 3) - Tangible value
9. **FAQ** - Overcome objections
10. **Final CTA** - Urgency and final push
11. **Footer** - Legal and contact

### Key Files to Modify

| Task | File |
|------|------|
| Update content | `lib/content.ts` |
| Change colors | `tailwind.config.ts`, `app/globals.css` |
| Modify form fields | `components/ui/LeadForm.tsx` |
| Add/remove sections | `app/[platform]/page.tsx` |
| Update metadata | `app/layout.tsx`, `app/[platform]/page.tsx` |
