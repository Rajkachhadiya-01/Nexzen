

# UI Enhancement Plan

## Summary
Three focused changes: move the tagline from hero to below the navbar logo, make footer service links open the specific accordion, and add bidirectional scroll-reveal animations (elements appear scrolling down, fade out scrolling back up).

## Changes

### 1. Move Tagline Below Logo
**Files: `src/components/Navbar.tsx`, `src/components/HeroSection.tsx`**

- Remove the "Powering the Next Era of Marketing" badge/pill from `HeroSection.tsx` (lines 62-71)
- In `Navbar.tsx`, add a small tagline text below the logo image: "Powering the Next Era of Marketing" in a subtle, small font (`text-[10px]` or `text-xs`, muted color)
- The tagline sits directly under the logo as part of the logo block

### 2. Footer Service Links Open Specific Accordion
**Files: `src/components/Footer.tsx`, `src/components/ServicesSection.tsx`**

Currently `handleServiceClick` in Footer dispatches a `select-service` event and scrolls to `#services`, but ServicesSection doesn't listen for this event to open the accordion.

Fix:
- In `ServicesSection.tsx`, add state for the currently open accordion value (`openValue`)
- Listen for the `select-service` custom event and set `openValue` to the dispatched category (e.g., "seo", "ppc")
- Pass `openValue` as the `value` prop and an `onValueChange` handler to the `Accordion` component (controlled mode)
- This way when a user clicks "SEO" in the footer, it scrolls to Services AND the SEO accordion opens automatically

### 3. Bidirectional Scroll-Reveal Animations
**Files: All section components**

Inspired by agdigitalmarketing.in, elements should:
- **Fade in + slide up** when scrolling into view
- **Fade out + slide down** when scrolling out of view (scrolling back up past them)

Implementation:
- Change all `whileInView` animations from `viewport={{ once: true }}` to `viewport={{ once: false, amount: 0.2 }}` so they re-trigger
- Add `exit`-like behavior by setting the `initial` state as the "not in view" state -- framer-motion's `whileInView` automatically reverses when the element leaves the viewport if `once: false`
- Apply to these components:
  - `ServicesSection.tsx` -- section header and each accordion item
  - `AboutSection.tsx` -- left/right columns, stats, capability tags
  - `BlogSection.tsx` -- header, featured post, blog cards
  - `ContactSection.tsx` -- header and form
- Keep `HeroSection.tsx` as `once: true` since it's the first thing users see (no need to re-animate)

## Technical Details

### Controlled Accordion for Footer Links
```text
ServicesSection:
  const [openValue, setOpenValue] = useState<string>("");
  
  useEffect(() => {
    const handler = (e: CustomEvent) => setOpenValue(e.detail);
    window.addEventListener("select-service", handler);
    return () => window.removeEventListener("select-service", handler);
  }, []);

  <Accordion type="single" collapsible value={openValue} onValueChange={setOpenValue}>
```

### Scroll Reveal Pattern
Change from:
```text
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
```
To:
```text
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: false, amount: 0.15 }}
transition={{ duration: 0.6, ease: "easeOut" }}
```

When `once: false`, framer-motion reverts elements to their `initial` state when they scroll out of the viewport, creating the disappear-on-scroll-away effect.

### Files to Modify
- `src/components/Navbar.tsx` -- add tagline below logo
- `src/components/HeroSection.tsx` -- remove tagline badge
- `src/components/ServicesSection.tsx` -- controlled accordion + scroll reveal
- `src/components/Footer.tsx` -- no changes needed (already dispatches events correctly)
- `src/components/AboutSection.tsx` -- scroll reveal (once: false)
- `src/components/BlogSection.tsx` -- scroll reveal (once: false)
- `src/components/ContactSection.tsx` -- scroll reveal (once: false)

