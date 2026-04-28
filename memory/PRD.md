# Barcelon Store — Landing Page · PRD

## Original Problem Statement
High-converting Industrial Modern landing page for **Barcelon Store Management System**
(Android Native B2B/B2C retail app: Firebase real-time inventory, supplier chat,
PayMongo/GCash/Maya payments, Cloudinary media, iTextPDF reports). Static HTML/CSS/JS,
fully responsive, scroll-reveal animation, direct APK download via `download` attribute.

## User Choices (locked-in)
- Color scheme: **Teal/Green** matching mobile app (`#0F766E` → `#10B981`)
- APK: **placeholder** (`/downloads/barcelona_store_v1.apk`) — user uploads real one later
- Tech: **Plain HTML/CSS/JS** (no React for landing)
- Sections: Hero + Trust Strip + 3-col Features + Tech Specs + CTA + Footer

## Architecture
- Static site at `/app/frontend/public/landing/` served via CRA public folder
  - `index.html`, `styles.css`, `script.js`
- APK placeholder at `/app/frontend/public/downloads/barcelona_store_v1.apk`
- React root (`/app/frontend/src/App.js`) auto-redirects `/` → `/landing/index.html`

## What's Implemented (2026-04-28)
- Hero: headline "Manage Your Store with Precision. Anywhere. Anytime.", sub-headline,
  prominent **Download App (APK)** CTA with android icon + animated arrow,
  dual phone mockups using user's actual app screenshots,
  floating "Low stock alert" + "PayMongo paid" notification cards
- Trust strip: Firebase / PayMongo / Cloudinary / iTextPDF / Android Native
- 3-col Feature Grid: Real-time Alerts (Firebase), Secure Payments (PayMongo/GCash/Maya),
  Cloud Analytics (Cloudinary + iTextPDF) — middle card emphasized
- Tech Specs: Android Native, Room Database, Firestore, Cloudinary CDN +
  99.9% uptime / <200ms latency / 100% offline-capable stats
- Final Download CTA card with Android 8.0+ note
- Footer with copyright + nav links
- IntersectionObserver scroll-reveal animation
- Sticky glass nav with mobile hamburger menu
- Floating phone animation, pulse-dot, hover lift on cards
- Fully responsive (1440 / tablet / 390px mobile)
- `data-testid` on all interactive elements
- HTML5 `download` attribute on every APK link → triggers direct file download
- APK served with `Content-Type: application/vnd.android.package-archive` ✓

## Next Action Items (P1/P2 backlog)
- P1: User to upload real signed APK to `/app/frontend/public/downloads/barcelona_store_v1.apk`
- P2: Add Pricing / Plans section
- P2: Add Testimonials / customer logos
- P2: SEO meta tags + OG image + favicon
- P2: Google Analytics / Plausible event for `download` clicks
- P2: Multi-language (English / Filipino) toggle

## Files Touched
- /app/frontend/public/landing/index.html (new)
- /app/frontend/public/landing/styles.css (new)
- /app/frontend/public/landing/script.js (new)
- /app/frontend/public/downloads/barcelona_store_v1.apk (new, placeholder)
- /app/frontend/public/downloads/README.txt (new, instructions)
- /app/frontend/src/App.js (modified: redirect to landing)
