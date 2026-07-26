# Original Silxor Next.js Design Website Template

The official Silxor design system starter — a portable, matte-black + stainless-steel enterprise website template originally built for **Silxor Group Holding**. Use this repo as the base for every new Silxor-branded site.

## What this template is

A high-contrast, engineering-forward corporate website shell with:

- Matte black + stainless steel color system
- JetBrains Mono / Work Sans typography
- Precision-aligned industrial layout language
- Bilingual EN/AR support (via React context)
- Sticky side-rail navigation, scroll-spy, and mobile drawer
- Compliance/enterprise iconography (ISO 27001, Tier IV, SLA)
- Mailto-driven CTAs (no backend forms required by default)
- Cal.com booking page integration (`/book` route)

## Tech stack

This template is built with:

- Vite
- React 18
- TypeScript
- Tailwind CSS v3
- shadcn/ui
- Framer Motion

> The Silxor design system can be ported to Next.js by copying the same tokens and components into a Next.js app.

## Quick start

```sh
# 1. Clone the template
git clone <YOUR_GIT_URL>

# 2. Enter the project
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm i
# or
bun i

# 4. Start the dev server
npm run dev
# or
bun run dev
```

Open `http://localhost:8080` in your browser.

## How to use this template

1. **Copy the repo** for each new Silxor website or client project.
2. **Keep the design system files intact** — update only `src/components/`, `src/pages/`, text content, and `index.html` metadata.
3. **Update branding** in:
   - `index.html` (`<title>`, meta tags, JSON-LD)
   - `src/components/Hero.tsx` (headline, subhead)
   - `src/components/Navbar.tsx` (nav links, logo wordmark)
   - `src/components/Footer.tsx` (copyright, links)
4. **Update the global email** used by CTAs in `src/components/ContactForm.tsx` and any `mailto:` helpers.
5. **Replace or extend pages** inside `src/pages/`. Routes are defined in `src/App.tsx`.
6. **Update Cal.com booking slug** in `src/pages/BookAssessment.tsx` if you need a different scheduling link.
7. **Deploy** via Lovable (`Share → Publish`) or push to your own host.

## Design system tokens

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#141414` | Page / section backgrounds |
| Surface | `#25282C` | Cards, nav segments, footers |
| Border | `rgba(255,255,255,0.06)` (hover 0.18) | Dividers, hairlines, frames |
| Primary text | `#FFFFFF` | Headlines, body copy |
| Muted text | `#B8BCC2` | Captions, secondary text |
| Steel accent | `#F0F1F3` | CTAs, highlights, brand marks |
| Success / Alert | `#2A9D5C` / `#C94C4C` | Status indicators |

**Fonts:** JetBrains Mono (display, mono, code) and Work Sans (body, UI).

## Key components

- `Hero.tsx` — Industrial split hero with giant wordmark and spec sheet card.
- `Navbar.tsx` — Precision sovereign nav with scroll-spy and animated links.
- `SideRail.tsx` — Sticky left rail with vertical section index.
- `Footer.tsx` — Compact corporate footer.
- `ContactForm.tsx` — Universal mailto generator for all email clients.
- `BookAssessment.tsx` — Cal.com inline booking page themed to match the site.
- `Services.tsx`, `Industries.tsx`, `Partners.tsx`, `WhySilxor.tsx` — Enterprise content blocks.

## Notes

- All CTAs default to dynamic `mailto:` links to keep contact flow simple and client-side only.
- The `Book an Assessment` CTA routes to `/book` and uses a Cal.com inline embed.
- Bilingual EN/AR toggle is wired through `LanguageContext`; Arabic text uses the Cairo font stack.
- No backend forms are included unless Lovable Cloud / Supabase is explicitly enabled.

## Deploy

Deploy from Lovable with `Share → Publish`, or build manually:

```sh
npm run build
```

## License

© 2026 Silxor Group Holding. All rights reserved.
