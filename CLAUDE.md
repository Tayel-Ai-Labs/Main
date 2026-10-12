# CLAUDE.md

Context for Claude Code working in this repository.

## What this is

A rebuild of **tayel.net**, the Tayel AI Labs site. The original was built by
an outside engineer who is no longer reachable and who holds the hosting. The
owner holds the domain. So this is a replacement that can be deployed under the
owner's own account and have the domain pointed at it — not a patch on the old
codebase, which we do not have.

It is also the first implementation of **Tayel DS v1.0**. The old site predates
the design system and does not follow it.

## Stack

Next.js (App Router) + Tailwind v4 + TypeScript. Fonts self-hosted through
`next/font/google`, so the page makes no runtime font requests. Icons are
`lucide-react`, which is what the DS specifies (96 Lucide icons across 11
categories).

```bash
npm run dev     # http://localhost:3000
npm run build   # production build, also typechecks
```

## The design system is the source of truth

`docs/DESIGN-SYSTEM.md` is the transcription of the Figma file "Tayel DS",
captured in `docs/screenshots/` (19 of 30 pages). Read it before changing
anything visual. `app/globals.css` is its implementation and follows the DS's
own three-layer rule:

1. **Primitives** — `@theme` at the top of `globals.css`. 72 raw colours.
   Never reference these from a component.
2. **Semantics** — `:root` and `[data-theme="dark"]`. Meaning, not value:
   `--bg-surface`, `--text-muted`, `--interactive-primary`. Exposed to Tailwind
   through `@theme inline` as `bg-surface`, `text-ink-muted`, `bg-action`…
3. **Components** — the files in `components/`. They read layer 2 only.

That rule is what makes dark mode work without a second set of classes. A
primary button is navy-on-white in light and lavender-on-navy in dark because
`--interactive-primary` and `--text-inverse` both move. If you find yourself
writing `dark:` variants, you have reached past layer 2 — fix the token
instead.

## Values that are not real yet

Marked in `globals.css` and in DESIGN-SYSTEM.md section 10. Do not treat them
as settled:

- **Elevation.** The Figma page names 8 levels and prints no numbers. The
  shadows in `@theme` are stand-ins that preserve the stated hierarchy. Replace
  them with the 9 exported effect styles.
- **The semantic colour layer.** Layer 2 was not in any capture, so the names
  here are ours. Reconcile with the Figma Color Collection when it is exported.
- **Component dimensions.** Button heights, input heights, paddings and
  per-size radii are absent from the captures; the current values are derived
  from the 4px spacing scale.
- **Navigation.** `18-navigation-bar.jpg` is a duplicate of the tooltip page,
  so the DS's 10 nav components are unseen. `components/site/Nav.tsx` is built
  from DS primitives and needs reconciling.
- **Grid column widths.** The printed Figma widths are arithmetically wrong at
  all three breakpoints. Derive from frame − margins − gutters; never paste the
  printed number.

## Content

All copy lives in `content/site.ts`. Nothing is fetched at runtime. `TODO` in
that file means the owner has not supplied the words yet — grep for it before
launch. Two of the three client entries are placeholders.

## Things the old site got wrong — keep them fixed

- `/products/our-life`, `/products/courses`, `/products/mind` and
  `/products/research` were linked from the footer and every one returned a
  hard 404. They are real pages now, generated from `products` in
  `content/site.ts`.
- There was no clients or work section anywhere, while all four product cards
  said "coming soon" — so nothing on the page showed delivered work. `#clients`
  exists for that reason. Do not let it drift back into a roadmap.
- The footer colour was hardcoded `bg-[#13163a]` instead of using the token
  next to it. Footer now uses `bg-primary-500`.

## Bilingual

The DS treats Arabic as first-class: Cairo for everything, RTL, and line
heights 10–20 points taller than the Latin equivalents at the same size. The
tokens and the base layer are in place (`[dir="rtl"]`, `--font-arabic`), but
**no Arabic routes exist yet**. When adding them, mirror the whole layout, not
just the text: icon sides, leading/trailing slots, tooltip placement, tab
alignment and the Select chevron all flip.

## Rules

- Never reference a primitive colour from a component.
- Never add a `dark:` variant. Move the token.
- Don't invent a DS value. If it is not in `docs/DESIGN-SYSTEM.md`, mark it
  provisional in a comment the way the existing ones are, so it can be found
  and replaced.
