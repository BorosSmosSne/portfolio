# Heng Chhay — Portfolio

A single-page, responsive portfolio website for a Full-Stack Mobile Developer who also specializes in 3D Design and UI/UX. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Design

- **Aesthetic:** minimalist, clean, generous whitespace, highly readable.
- **Palette:** off-white background (`#FAFAFA`), deep charcoal text (`#1A1A1A`), medium gray secondary text, and a single soft sage-green accent (`#7C9885`).
- **Typography:** Inter (loaded via `next/font`), large bold headings and readable body text.
- **Details:** 12px rounded corners, soft shadows, subtle hover lifts, and gentle scroll fade-in animations (respects `prefers-reduced-motion`).

## Sections

1. **Header** — sticky nav with `HC` logo and links (Home, About, Skills, Portfolio, Contact) + mobile menu.
2. **Hero** — centered headline, sub-headline, and two buttons (View My Work, Download Resume).
3. **About** — focused reading column (max 700px).
4. **Skills** — three cards: Frontend & Mobile, Backend & Server, Design & Animation.
5. **Portfolio** — filterable grid (All / Apps & Backend / 3D & Architecture / Video/Animation).
6. **Contact & Footer** — contact details and LinkedIn / GitHub links.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Customization

- **Colors / tokens:** `tailwind.config.ts`
- **Content:** each component under `components/` (e.g. `Portfolio.tsx` holds the project list, `Skills.tsx` holds skill groups).
- **Resume:** replace `public/resume.pdf` with your real CV.
- **Social links:** update the LinkedIn / GitHub URLs in `components/Contact.tsx`.

## Tech stack

- Next.js 14 · React 18 · TypeScript
- Tailwind CSS 3
