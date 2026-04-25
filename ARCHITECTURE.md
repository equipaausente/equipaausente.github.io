# equipa_Ausente — Architecture & Site Documentation

## Overview

This is a single-page React application built with Vite + TypeScript + Tailwind CSS.
It presents the engineering project of equipa_Ausente as a polished website — not a repository.
The design addresses the teacher's feedback: proper cover page, forward navigation, and richer content.

---

## File Structure

```
src/
├── App.tsx                          # Root component — assembles all sections
├── main.tsx                         # React entry point
├── index.css                        # Global styles, fonts, section animations
│
├── data/
│   └── content.ts                   # All text content and image URLs in one place
│                                    # Edit here to update text or add images
│
└── components/
    ├── Navigation.tsx               # Top sticky navbar — scrolls to sections on click
    │                                # Becomes opaque when user scrolls past 40px
    │
    ├── Hero.tsx                     # Cover page ("Página de Rosto")
    │                                # Stats grid, animated entrance, CTA button
    │
    ├── SectionProgress.tsx          # Right-side dot navigation
    │                                # Shows current section, clickable to jump
    │                                # Hides until user scrolls past 200px
    │
    ├── SectionBlock.tsx             # Reusable section wrapper
    │                                # Handles: section number, label, title, fade-in animation
    │                                # Optional: nextId + nextLabel → shows "Continuar para →" button
    │
    ├── ImageCard.tsx                # Image with hover zoom overlay + full lightbox on click
    │
    ├── Footer.tsx                   # Simple footer with project tagline
    │
    └── sections/
        ├── CameraSection.tsx        # Section 1 — A Nossa Câmara (text + 3 images)
        ├── IdeasSection.tsx         # Section 2 — Ideias (text + 3 criteria cards with icons)
        ├── DisassemblySection.tsx   # Section 3 — Desmontagem (text + numbered steps)
        ├── PartsSection.tsx         # Section 4 — Peças (2 part cards with image + description)
        ├── AssemblySection.tsx      # Section 5 — Assemblagem (mate types + highlights + note)
        └── DrawingsSection.tsx      # Section 6 — Desenhos (images with technical metadata)
```

---

## Navigation Flow (addresses "andar para trás para avançar")

The original site had browser-back navigation. This site fixes that with 3 systems:

1. **Top Navbar** — Fixed header with links to all 6 sections (smooth scroll)
2. **Side Dot Progress** — Right-side indicator showing current section, clickable
3. **Forward CTAs** — Each section has a "Continuar para [Next Section] →" button at the bottom

The user always has a clear path forward without using the browser back button.

---

## Content Editing

All text content lives in `src/data/content.ts`.

To update text:
- Open `src/data/content.ts`
- Find the section you want to edit (camara, ideias, desmontagem, pecas, assemblagem, desenhos)
- Edit the `text` array or `images` array

To add images:
- Upload the image to `https://equipaausente.github.io/assets/images/`
- Add an entry to the relevant `images` array in `content.ts`

---

## Design Decisions

| Decision | Reason |
|---|---|
| Dark theme (zinc-950) | Industrial/engineering aesthetic; matches vintage camera subject |
| Amber/gold accent (#fbbf24) | Warm vintage tone; contrasts well on dark background |
| JetBrains Mono for headings | Engineering/technical personality |
| Section numbers (01–06) | Clear document-like progression |
| Scroll-triggered fade-in | Sections appear as user reads — reduces visual overwhelm |
| IntersectionObserver for animation | No layout shifts; fires once per section |

---

## Responding to Teacher Feedback

| Teacher Comment | Solution |
|---|---|
| "É um repositório, não um website" | Hero cover page with stats, CTA, and project abstract |
| "Navegação andar para trás para avançar" | Forward CTAs + dot navigation + navbar |
| "Página de rosto e navegação consistente" | Full-screen hero + persistent navbar on all pages |
| "Assemblagem — há coisas interessantes que não mostram" | Mate type breakdown, highlights list, note callout |
| "Desenhos — falta informação" | Author tags, view types (frontal/lateral/explodida), ISO standard, notes per drawing |

---

## How to Deploy to GitHub Pages

1. Build: `npm run build`
2. The output is in `/dist`
3. Push the `/dist` contents to the `equipaausente.github.io` repository root
   OR configure the repo to serve from the `dist` folder via GitHub Actions

For a cleaner workflow, consider adding a `deploy` script using `gh-pages`:
```
npm install --save-dev gh-pages
```
Add to `package.json` scripts:
```json
"deploy": "gh-pages -d dist"
```
Then run `npm run deploy`.
