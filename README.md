# Roastoria — Coffee Franchise Landing Page

A production-grade landing page for a premium coffee franchise, built with:

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**

## Project Structure

```
roastoria/
├── app/
│   ├── globals.css       # Global styles, Tailwind imports, keyframes
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Cursor.tsx        # Custom gold cursor with ring
│   ├── Navbar.tsx        # Sticky nav with scroll blur effect
│   ├── Hero.tsx          # Two-column hero with live dashboard
│   ├── NumbersBand.tsx   # Animated counter stats strip
│   ├── WhySection.tsx    # 6-card features grid
│   ├── ProcessSection.tsx# 4-step process timeline
│   ├── ReviewsSection.tsx# Dual-row auto-scrolling marquee
│   ├── PricingSection.tsx# 3-tier pricing with INR/USD toggle
│   ├── CTASection.tsx    # Application form with validation
│   └── Footer.tsx        # 4-column footer with newsletter
├── lib/
│   ├── data.ts           # All static content as typed interfaces
│   └── hooks.ts          # useScrollReveal, useCounter hooks
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Key Features

- **Custom cursor** — gold dot + trailing ring, scales on hover
- **Scroll reveal** — `IntersectionObserver` triggers fade-up animations
- **Animated counters** — `requestAnimationFrame` easing on scroll enter
- **Live ROI bars** — animate width on mount with CSS transitions
- **Dual marquee** — two rows scrolling opposite directions, pauses on hover
- **Currency toggle** — INR ↔ USD price switch with React state
- **Responsive** — mobile-first, collapses gracefully on all breakpoints
- **TypeScript** — strict typing throughout, all data interfaces in `lib/data.ts`
- **Grain texture** — CSS SVG noise overlay for premium feel
- **Mesh gradient** — radial layered gradients for depth

## Design System

| Token | Value |
|---|---|
| Background | `#0a0804` |
| Gold accent | `#d4a843` |
| Gold light | `#f0c96a` |
| Text primary | `#f5efe6` |
| Text muted | `#8a7d6b` |
| Display font | Playfair Display (serif) |
| Body font | Outfit (sans-serif) |
