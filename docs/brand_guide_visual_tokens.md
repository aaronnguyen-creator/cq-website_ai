# CQ Visual Tokens & UI Kit Rules (Developer Reference)
**Company:** CQ (CapQ.ai)  
**Version:** 1.0  
**Last Updated:** December 19, 2025  

> Purpose: This file is the **single source of truth** for CQ website styling in code (Next.js + Tailwind + shadcn/ui).  
> Rule: **Do not introduce new colors, spacing, radii, or shadows** outside of these tokens unless explicitly approved.

---

## 0 How to use this with Codex in VS Code
1. Keep this file at: `docs/BRAND_GUIDE_VISUAL_TOKENS.md`
2. In every Codex prompt, add:  
   **“Follow docs/BRAND_GUIDE_VISUAL_TOKENS.md strictly. Use only defined tokens, spacing, and components.”**
3. In the repo, enforce tokens by:
   - CSS variables in `app/globals.css`
   - Tailwind config mapping in `tailwind.config.ts`
   - shadcn/ui components only (no custom one-off UI without tokens)

---

# 1 Visual Identity Principles

## 1.1 Look & feel
- **Financial-grade:** calm, credible, minimal.
- **Modern US B2B SaaS:** “less is more”, whitespace, crisp type.
- **Clear hierarchy:** headings → supporting copy → CTA.
- **Evidence-first:** UI imagery + proof points > decorative visuals.

## 1.2 Layout rules
- Use consistent page rhythm:
  - Section padding: `py-16 md:py-24`
  - Max width container: `max-w-6xl` or `max-w-7xl`
  - Inner padding: `px-4 md:px-6`
- Prefer **grid** over complex/irregular layouts.
- Avoid heavy gradients, noisy backgrounds, and dense patterns.

---

# 2 Color System (Tokens)

> Notes:
> - Colors below are **derived from your brand identity exports** and existing CQ code style.  
> - If your Figma has exact HEX values that differ, replace these values but **keep token names**.

## 2.1 Core palette (semantic)
### Light mode
- **Ink / Text (primary):** `--cq-ink: #0B0F14`
- **Body / Secondary text:** `--cq-text-subtle: rgba(11,15,20,0.70)`
- **Page background:** `--cq-bg: #FFFFFF`
- **Surface (cards):** `--cq-surface: #F7F8FB`
- **Border:** `--cq-border: rgba(11,15,20,0.10)`
- **Primary accent (blue):** `--cq-primary: #3B40F3` *(verify in Figma if needed)*
- **Primary hover:** `--cq-primary-hover: rgba(59,64,243,0.90)`
- **Primary foreground:** `--cq-primary-foreground: #FFFFFF`

### Dark mode
- **Background:** `--cq-bg: #050608`
- **Foreground:** `--cq-fg: #FFFFFF`
- **Surface:** `--cq-surface: rgba(255,255,255,0.06)`
- **Border:** `--cq-border: rgba(255,255,255,0.10)`
- **Muted text:** `--cq-text-muted: rgba(255,255,255,0.70)`
- **Primary (blue stays):** `--cq-primary: #3B40F3`

## 2.2 Supporting tokens
- **Muted background tint (light):** `--cq-tint-blue: #D6E7FD` *(light blue tint; use sparingly)*
- **Success:** `--cq-success: #86C71F`
- **Danger:** `--cq-danger: #DC2626`
- **Warning:** `--cq-warning: #F59E0B`

## 2.3 Gradients (allowed patterns)
Use gradients only when subtle and functional:
- **Hero overlay gradient:** top-to-bottom `black/0 → black/30` (or white overlay in light mode)
- **Section depth gradient (dark):** `from-black/0 via-black/20 to-black/0`

**Avoid:** neon gradients, multi-stop rainbow, high saturation backgrounds.

---

# 3 shadcn/ui Theme Mapping

> Apply these to `app/globals.css` using shadcn conventions.  
> Keep **semantic names**; only change values if Figma says so.

## 3.1 CSS variables (recommended)
```css
:root {
  --background: 0 0% 100%;          /* cq-bg */
  --foreground: 220 26% 6%;         /* cq-ink approx */

  --card: 225 33% 98%;              /* cq-surface */
  --card-foreground: 220 26% 6%;

  --popover: 0 0% 100%;
  --popover-foreground: 220 26% 6%;

  --primary: 238 88% 59%;           /* cq-primary (#3B40F3) */
  --primary-foreground: 0 0% 100%;

  --secondary: 225 20% 96%;
  --secondary-foreground: 220 26% 6%;

  --muted: 225 20% 96%;
  --muted-foreground: 220 9% 46%;

  --accent: 225 20% 96%;
  --accent-foreground: 220 26% 6%;

  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;

  --border: 220 13% 91%;
  --input: 220 13% 91%;
  --ring: 238 88% 59%;

  --radius: 1rem; /* 16px default; use 20–32px for hero cards */
}

.dark {
  --background: 240 9% 2%;
  --foreground: 0 0% 100%;

  --card: 0 0% 6%;
  --card-foreground: 0 0% 100%;

  --popover: 0 0% 6%;
  --popover-foreground: 0 0% 100%;

  --primary: 238 88% 59%;
  --primary-foreground: 0 0% 100%;

  --secondary: 0 0% 10%;
  --secondary-foreground: 0 0% 100%;

  --muted: 0 0% 10%;
  --muted-foreground: 0 0% 70%;

  --accent: 0 0% 10%;
  --accent-foreground: 0 0% 100%;

  --destructive: 0 62% 50%;
  --destructive-foreground: 0 0% 100%;

  --border: 0 0% 12%;
  --input: 0 0% 12%;
  --ring: 238 88% 59%;
}

# CQ Visual Tokens & UI Kit Rules (Developer Reference)
**Company:** CQ (CapQ.ai)  
**Version:** 1.0  
**Last Updated:** December 19, 2025  

---

## 4 Typography System

Use the project’s existing font setup. In Tailwind, rely on:

- `font-sans` for body text  
- `font-heading` for headings (already in CQ codebase)

### 4.1 Type scale (web)

- **H1:** `text-4xl md:text-6xl` / `tracking-tight` / `font-semibold`
- **H2:** `text-3xl md:text-4xl` / `tracking-tight` / `font-semibold`
- **H3:** `text-xl md:text-2xl` / `font-semibold`
- **Body:** `text-base md:text-lg` / `leading-relaxed`
- **Small:** `text-sm` / `text-muted-foreground`

### 4.2 Writing rules (visual)

- Headings: sentence case preferred (professional).
- Avoid ALL CAPS except tiny labels (e.g., `tracking-[0.3em]`).
- Keep paragraphs short: **2–3 lines max** in UI sections.

---

## 5 Spacing, Radius, Shadows

### 5.1 Spacing

- Default section gap: `gap-6 md:gap-10`

**Card padding:**
- Small card: `p-5 md:p-6`
- Large card: `p-8 md:p-10`

### 5.2 Radius

- Buttons: `rounded-full` (pill) or `rounded-xl`
- Cards: `rounded-2xl` (base), `rounded-[32px]` for hero surfaces

### 5.3 Shadows (subtle only)

- Light mode: soft, large blur  
  - Example: `shadow-[0_25px_60px_rgba(15,23,42,0.06)]`
- Dark mode: minimal shadow, rely on borders + surface contrast

---

## 6 Components (CQ UI Patterns)

### 6.1 Buttons

**Primary**
- High contrast, simple label, pill or rounded-lg  
- Tailwind:
  - `bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 py-3 font-semibold`

**Secondary**
- Border + subtle fill  
- Tailwind:
  - `bg-white text-foreground border border-border hover:bg-muted rounded-full px-5 py-3`

**Dark-surface CTA**
- Tailwind:
  - `bg-white/5 border border-white/10 text-white hover:bg-white/10`

**Focus**
- Always include:
  - `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30`

### 6.2 Cards

- Always: border + light surface (light mode), or translucent surface (dark mode)
- Avoid heavy outlines; prefer `border-border`

### 6.3 Navigation

- Light navbar: white background + subtle bottom border
- Keep nav links minimal; CTA buttons on right

### 6.4 Logo grids / proof sections

- Default: crisp logos
- Hover on container: blur + dim logos, show centered CTA overlay
- Mobile: CTA visible without hover (below grid)

### 6.5 Blog / insights pages

- Reading backgrounds: **white** for long-form
- Body: wide left column, sticky right panel with TOC + subscribe form
- Keep typography and spacing consistent with the type scale above

---

## 7 Motion & Interaction

### 7.1 Transitions

- Duration: **150–250ms**
- Curve: `ease-out`
- Use: `transition`, `duration-200`, `ease-out`

### 7.2 Hover behaviors

- Subtle only: small translate, small opacity changes, gentle blur
- Avoid dramatic animation, large parallax, or “bouncy” easing

---

## 8 Imagery Rules

- Prefer product UI screenshots and workflow visuals.

**Hero image overlays**
- Image must be muted (opacity reduced) and layered under readable text.
- Add gradient overlay for legibility.

**Avoid**
- Stock photos that feel generic or overly “startup”.

---

## 9 Accessibility Baselines (non-negotiable)

- Color contrast: maintain readability (especially on image overlays).

**Keyboard**
- `focus-visible` rings
- overlays must appear on `group-focus-within`

**Click targets**
- Minimum ~40px height for primary buttons.

---

## 10 Quick “Do / Don’t” Checklist

### ✅ Do
- Use semantic tokens (`primary`, `muted`, `border`).
- Keep layout minimal and aligned to grid.
- Use subtle hover transitions (~200ms).
- Use shadcn components first.

### ❌ Don’t
- Don’t invent new blues or grays.
- Don’t add heavy drop shadows or thick borders.
- Don’t write long paragraphs in UI sections.
- Don’t hide essential CTAs behind hover on mobile.