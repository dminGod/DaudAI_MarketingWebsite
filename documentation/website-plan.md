# DaudAI Marketing Website Plan (COMPLETED)

## Site Structure

```
/              → Home (landing page)
/about         → About the project
/faq           → Frequently Asked Questions
/pricing       → Pricing plans
Docs (nav)     → External link to documentation site
```

---

## Branding

### Colors (implemented in globals.css)
- **Dark Brown**: `#3D2517` - `#5C3D2E` (primary text, dark accents)
- **Orange**: `#E07A00` / `#F5921B` (primary CTA, accents)
- **Light Orange**: `#FFB347` (hover states, secondary)
- **Cream**: `#FFF8F0` (light mode backgrounds)
- **White**: `#FFFFFF`

### Assets (in public/images/)
- `logo.png` - Main logo wordmark
- `mascot.png` - Full mascot with logo
- `icon.png` - App icon

### Theme
- Light mode + Dark mode (both supported via CSS variables)
- Warm, energetic feel matching mascot

---

## Implemented Pages

### 1. Home Page (`/`)
- Hero with mascot + headline + gradient background
- App screenshot placeholders (Android/iOS)
- Features section (6 cards with icons)
- How it Works (3 steps + architecture diagram)
- Security section with feature cards
- CTA section with gradient background

### 2. About Page (`/about`)
- Mission section with mascot
- Problem & Solution comparison
- Built for Security values
- Open Source section
- CTA

### 3. FAQ Page (`/faq`)
- Accordion-style FAQ sections
- Categories: General, Security, Features, Pricing
- JSON-LD structured data for SEO
- Contact support CTA

### 4. Pricing Page (`/pricing`)
- 3 pricing tiers (Free, Pro, Team)
- Enterprise section
- Pricing FAQ
- CTA

---

## Components Created

| Component | Location | Purpose |
|-----------|----------|---------|
| Header | `src/components/Header.tsx` | Navigation with mobile menu |
| Footer | `src/components/Footer.tsx` | Site footer with links |
| FAQAccordion | `src/app/faq/FAQAccordion.tsx` | Expandable FAQ items |

---

## SEO Implementation

### Meta Tags (in layout.tsx)
- Title template with site name
- Description
- Keywords
- Open Graph tags
- Twitter Card tags
- Icons (favicon, apple-touch-icon)
- Viewport settings

### Files
- `robots.txt` - Search engine directives
- `sitemap.ts` - Auto-generated sitemap
- `manifest.json` - PWA manifest

### Structured Data
- FAQ page includes JSON-LD FAQPage schema

---

## To Add Later

1. **OG Image**: Create a proper `og-image.png` (1200x630) for social sharing
2. **App Screenshots**: Replace placeholders with actual Android/iOS screenshots
3. **Privacy Policy**: Create `/privacy` page
4. **Terms of Service**: Create `/terms` page
5. **Analytics**: Add Google Analytics or Plausible
6. **Contact Form**: Add contact form functionality

---

## Running the Site

```bash
# Development
cd c:\code\daudai\marketing-website
bun run dev

# Build
bun run build

# Start production
bun run start
```

---

## File Structure

```
marketing-website/
├── documentation/
│   └── website-plan.md          # This file
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── mascot.png
│   │   └── icon.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   ├── page.tsx
│   │   │   └── FAQAccordion.tsx
│   │   ├── pricing/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── index.ts
├── package.json
├── tsconfig.json
└── next.config.ts
```
