# Codex Rules (CQ Website)
**Applies to:** This repo (capq-mvp)  
**Owner:** CQ Marketing / Web  
**Version:** 1.0  
**Last Updated:** December 19, 2025  

---

## 1 Sources of Truth (must follow)
Codex MUST follow these files in priority order:

1. `docs/brand_guide_visual_tokens.md` (visual tokens, UI rules, colors, spacing, typography, motion)  
2. `docs/brand_guide.md` (voice, messaging, copywriting rules)  
3. Existing project patterns in:
   - `components/site/*` (header/footer/sections)
   - `components/ui/*` (shadcn primitives)
   - `lib/*` (types, config patterns)
   - `app/*` routing + layout patterns

If there is a conflict, **tokens & UI rules win**.

---

## 2 Tech Stack Requirements
- Framework: **Next.js App Router**
- Styling: **TailwindCSS**
- UI primitives: **shadcn/ui** (reuse components where possible)
- Icons: **lucide-react** (preferred)
- Images: **next/image**
- Routing: **next/link**
- TypeScript: strict, typed props, typed config

---

## 3 Design Rules (CQ “Finance-grade”)
### 3.1 General
- “Less is more”: avoid visual noise, gradients only when subtle.
- Layout must use consistent grid + spacing rhythm.
- Prefer **borders + soft surfaces** over heavy shadows.
- Use **semantic tokens** and shadcn theme variables (no random hex values in components).

### 3.2 Colors
- Do not introduce new colors.
- Use CSS variables/shadcn tokens or approved CQ tokens only.
- No inline hex codes unless already defined in token docs.

### 3.3 Typography
- Use `font-heading` for headings, `font-sans` for body.
- Sentence case preferred for headings.
- Keep paragraphs short (2–3 lines).

### 3.4 Motion
- Subtle transitions only.
- Default: `duration-200 ease-out`.
- Avoid bouncy easing, large parallax, or distracting animation.

---

## 4 Component & Page Architecture
### 4.1 Folder conventions
- Reusable site sections: `components/site/*`
- Page-specific components: `components/<page>/*` (e.g., `components/insights/*`)
- shadcn primitives: `components/ui/*`
- Types/config: `lib/*`

### 4.2 Config-driven content
- Pages that repeat templates MUST be driven by config objects and types in `lib/`.
- Do not hardcode repeated blocks when they can be data-driven.

### 4.3 Composition
- Prefer small components (single responsibility).
- Do not create massive pages with all JSX inline.
- Provide clean interfaces (props types, meaningful names).

---

## 5 Accessibility (must)
- Keyboard navigation supported for all interactive elements.
- Use `focus-visible` rings consistently.
- If hover reveals UI, `focus-within` must also reveal it.
- Provide mobile-safe behavior where hover does not exist.

---

## 6 Responsiveness (must)
- Mobile-first defaults.
- Typical container: `mx-auto max-w-6xl px-4 md:px-6`.
- Use:
  - `py-16 md:py-24` for section spacing
  - 1 column → 2 columns → 3 columns as screen grows
- Ensure no horizontal overflow.

---

## 7 Content & Copy (CQ Voice)
- US English.
- Professional, calm, direct. No hype.
- Benefit-first writing.
- Avoid buzzwords (“revolutionary”, “synergy”, “best-in-class”).
- CTAs: 2–4 words (e.g., “Request a demo”, “Join the waitlist”).

---

## 8 Code Quality Standards
- TypeScript required (no `any` unless justified).
- Avoid duplicated Tailwind class blobs:
  - Use utility function `cn()` where needed
  - Extract repeated patterns to components
- Prefer `Link` for internal navigation.
- Prefer `Image` with explicit sizing or `fill` + proper container.
- No console logs in production code.

---

## 9 PR/Change Behavior (how Codex should work)
When implementing a task, Codex MUST:
1. **Read existing code patterns first** (don’t reinvent)
2. Reuse components if available
3. Add new components only when needed
4. Update types/config to support new sections
5. Confirm: builds with `npm run build` (when possible)

---

## 10 “Do Not Do” List (hard rules)
- Do not add random UI libraries (no MUI, Chakra, etc.).
- Do not add inline styles unless required (prefer Tailwind).
- Do not add external fonts or color palettes without approval.
- Do not introduce hyperlinks that navigate away when the spec says “no links”.
- Do not hide primary CTAs behind hover on mobile.
