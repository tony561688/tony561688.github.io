---
name: TONY Luxury Minimal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#c9c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c9c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
  metallic-gold: '#D4AF37'
  deep-obsidian: '#000000'
  panel-black: '#0A0A0A'
  muted-gold: '#8C7325'
  ghost-gray: '#1A1A1A'
typography:
  display-hero:
    fontFamily: Metropolis
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 110%
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Metropolis
    fontSize: 64px
    fontWeight: '900'
    lineHeight: 105%
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Metropolis
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 120%
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Metropolis
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 130%
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 160%
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 160%
  label-caps:
    fontFamily: Metropolis
    fontSize: 12px
    fontWeight: '800'
    lineHeight: 100%
    letterSpacing: 0.2em
  nav-item:
    fontFamily: Metropolis
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 100%
    letterSpacing: 0.1em
spacing:
  container-max: 1440px
  gutter: 24px
  margin-desktop: 80px
  margin-mobile: 24px
  section-gap: 160px
---

## Brand & Style

The design system embodies an uncompromising luxury aesthetic defined by extreme restraint and precise execution. The brand personality is authoritative yet enigmatic, targeting a high-end creative and professional audience.

The visual style is **Minimalism** infused with **High-Contrast Bold** elements. It relies on massive negative space to create a "gallery" feel, where every element—from a single line of text to a geometric divider—is intentional. The "Old TV" loading motif serves as a nostalgic, technical counterpoint to the modern luxury of the site, executed through refined scanlines and monochrome static rather than kitsch.

**Key Principles:**
- **Editorial Discipline:** Grid-based layouts that prioritize white space (black space) over content density.
- **Precision:** Perfect alignment and razor-thin strokes.
- **Cinematic Atmosphere:** High-contrast transitions and lighting effects (gradients) that evoke a premium, evening-chic mood.

## Colors

The palette is anchored in **Deep Obsidian (#000000)** to ensure absolute black levels on OLED screens. **Metallic Gold (#D4AF37)** is used exclusively as a surgical accent for high-priority interactions and structural rules.

- **Primary Background:** Use `#000000` for the main canvas.
- **Surface/Panels:** Use `#0A0A0A` for cards or section differentiation to create subtle depth without breaking the dark aesthetic.
- **Accent Usage:** Gold should be limited to thin lines (1px), hover states, and the terminal point of gradients.
- **Text Gradient:** For display type, use a linear gradient from `#1A1A1A` (top) to `#D4AF37` (bottom) to simulate a metallic sheen reflecting light.

## Typography

Typography is the primary visual engine of the design system. **Metropolis** provides a geometric, structured foundation for headlines, while **Inter** ensures maximum legibility for body content.

- **The Wordmark:** 'TONY' must always be set in Metropolis Extra Bold, all caps, with tight tracking (-0.05em).
- **Display Type:** Use the `display-hero` scale for landing page headlines. Apply the Black-to-Gold gradient here.
- **Negative Space:** Ensure large headlines are surrounded by at least 2x their height in padding to maintain the luxury feel.
- **Micro-copy:** Use `label-caps` for small metadata, ensuring wide letter spacing for a premium, architectural look.

## Layout & Spacing

The system uses a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile.

- **Desktop (1440px):** 12-column grid with 24px gutters and 80px side margins. 
- **Alignment:** Content should be strictly left-aligned or perfectly centered. Avoid staggered or masonry layouts.
- **Rhythm:** Use a base 8px scale, but favor large "breathing rooms" (160px+) between major sections to emphasize exclusivity.
- **Fixed Navigation:** The nav cluster is fixed at the top-right corner. It does not move on scroll, acting as a permanent anchor in the UI.

## Elevation & Depth

This system avoids traditional shadows in favor of **Tonal Layers** and **Bold Borders**.

- **Surface Tiers:** Backgrounds are `#000000`. Hovered states or secondary sections use `#0A0A0A`. 
- **Dividers:** Use 1px solid lines. Most dividers are `#1A1A1A` (Ghost Gray). Gold (`#D4AF37`) is reserved for high-impact dividers, such as separating a hero from the main content.
- **Old TV Loading Effect:** Depth is simulated during loading using a scanline overlay (linear-gradient of transparent and 5% white horizontal lines) and a slight CRT-style inner vignette.
- **Interactions:** Depth is communicated through color transitions (Gray to Gold) rather than physical elevation or Z-axis shifts.

## Shapes

The shape language is strictly **Sharp (0px)**. 

- **Hard Edges:** All buttons, cards, and input fields must have 90-degree corners. This reinforces the architectural and brutalist-luxury influence.
- **Avatar Silhouette:** The only exception is the personal avatar placeholder, which is a perfect circle silhouette to provide a single point of organic contrast in a world of hard lines.
- **Geometric Dividers:** Use vertical and horizontal lines to box in content, creating "frames" rather than "containers."

## Components

### Buttons
- **Primary:** No background fill. 1px Gold border. Text in `nav-item` style (Gold). Hover state: Gold background with Black text.
- **Secondary:** No background. 1px `#1A1A1A` border. Text in `nav-item` style (White). Hover state: 1px Gold border.

### Navigation
- **Fixed Nav:** A simple horizontal list in the top-right. No background blur or bar. Active state indicated by a 1px Gold underline positioned 8px below the text.

### Portfolio Cards
- **Structure:** A 1px `#1A1A1A` frame. The interior is an empty `#0A0A0A` box labeled "Thumbnail Placeholder" in the center using `label-caps`.
- **Interaction:** On hover, the frame turns Gold and the text gradient shifts to the metallic effect.

### Input Fields
- Underline style only. A 1px `#1A1A1A` bottom border that expands/glows Gold on focus. Label sits above in `label-caps`.

### Loading Motif (Old TV)
- **Visuals:** Full-screen `#000000`. A flicker of monochrome static (0.1s) followed by a sharp Gold 1px horizontal line that expands vertically to reveal the content.
- **Detail:** Subtle scanlines are persistent until the content fully fades in.