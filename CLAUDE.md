# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev        # dev server (Next 16 + Turbopack)
npm run build      # production build — also the real typecheck
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run format     # prettier, incl. class sorting
```

There are no tests. `npm run build` is the gate before calling work done.

`npm run typecheck` fails with `Cannot find name 'LayoutProps'` on a clean checkout — Next generates those route types into `.next/types`, so run `dev` or `build` once first.

## What this is

The Abode marketing site, built to a Figma design (file key `BxuYCVNvZrVyS4FpxmQfr2`). Two routes, both static:

- `/` — marketing landing. Desktop node `3:2`, mobile node `123:165`.
- `/family` — Abode Family product page. Desktop node `61:651`, mobile node `123:685`.

A future `/agency` (Abode Agency OS) page is designed but not built. Subdomains (`app.`, `agency.`) are planned via middleware host rewrites into route folders — not implemented yet.

## Architecture

Page files (`src/app/*/page.tsx`) are thin: they set metadata and compose section components in order. Sections live in `src/components/sections` (landing) and `src/components/family`; shared primitives in `src/components/ui`. `SiteHeader` and `SiteFooter` are shared and take props so each page supplies its own nav links and CTA.

**Almost everything is a server component.** `sections/team.tsx` is the only `"use client"` file — touch devices have no hover, so tapping a card toggles the detail panel. Everything else is pure CSS: the nav dropdown uses `group-hover` / `focus-within`, the FAQ accordions are `<details>/<summary>`. Keep it that way unless a feature genuinely needs state.

**Design tokens live in `src/app/globals.css`** under Tailwind v4's `@theme` — colours, the type scale, shadows, breakpoints. There is no `tailwind.config`. Add tokens there rather than hardcoding hex values or px sizes.

## Things that will bite you

**`cn()` is extended, and must stay that way.** `src/lib/utils.ts` registers the custom font-size names (`h2`, `body-lg`, …) with tailwind-merge. Without that registration, merging a size class with a colour class (`cn("text-h2", "text-ink-1")`) silently drops the size — tailwind-merge treats both as the same class group. This shipped as a real bug once. Any new font-size token must be added to the `FONT_SIZES` array too.

**The type scale is deliberately ~20% smaller than Figma.** The client found the file's own sizes too large on screen (H1 56→44, display-1 88→68, body 16→15). A size that looks "wrong" versus the Figma is probably intentional — don't sync it back.

**Figma letter-spacing values are percentages, not px.** An `H1` with `letterSpacing: -2` means `-0.02em`, which renders as `-1.12px` at 56px. Tokens store the em value.

**Desktop scales the whole canvas.** The design is a fixed 1440px artboard; `#page { zoom }` steps at the bottom of `globals.css` shrink it to fit narrower windows (88% at 1280–1439, 90% at 1440+). Each step keeps the zoomed layout ≥1440px wide so the design never squeezes. Media queries still evaluate against the _unzoomed_ viewport, so desktop styles are gated at `lg:`, not at a 1440 breakpoint.

**Mobile is a separate design, not a reflow.** The 390px Figma frames have their own layout, type scale (H5 titles, body-sm copy) and, in the heroes, their own card compositions — `sections/hero-mobile.tsx` and `family/hero-mobile.tsx` hold those. Components are mobile-first with `lg:` for desktop.

**Assets are exported from Figma**, not redrawn: `public/icons` (SVG), `public/images`, `public/brand`. Photos use `next/image`; SVG icons go through `src/components/ui/icon.tsx`, which uses a plain `<img>` because next/image cannot optimise SVG.

## Verifying visual work

The Claude-in-Chrome extension is not connected on this machine. Drive the installed browser directly instead:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
  --disable-gpu --hide-scrollbars --screenshot=out.png --window-size=1435,8000 http://localhost:3000
```

Headless Chrome on macOS enforces a **~500px minimum window width**, so `--window-size=390` renders at 500 and crops. To check the mobile layout, temporarily add `@media (max-width: 600px) { html { width: 390px !important } }` (breakpoints below `sm` behave identically at 390 and 500), screenshot, then remove it. Hover states can't be triggered from the CLI — force them with a temporary CSS override or by flipping the class in the component.

## Content caveats

FAQ answers on both pages are **drafts written from copy elsewhere on the page** — the Figma shows those rows collapsed, so no answers exist in the design. Same for nav anchor targets on `/family`. The Agency OS CTA reads "Explore Abode Agency OS"; the Figma says "Agent OS", which is a typo in the file.
