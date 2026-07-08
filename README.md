# Sophia Chukwudinma — Portfolio

A mobile-first portfolio site for **Sophia Chukwudinma** — model, dancer and actor
based in Delhi, India. Editorial dark theme, animated reveals, and a WhatsApp-first
booking flow.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4** and
**Motion**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Structure

```
src/
  app/
    layout.tsx          Root layout, fonts, metadata + viewport
    page.tsx            Home — composes all sections
    work/[slug]/        Individual work case-study pages
  components/           Hero, Stats, WorkGrid, Press, Agencies, Footer, …
  lib/data.ts           Single source of content (model, works, bookings)
public/photos/          Portfolio imagery
```

## Editing content

All copy, stats, works and booking details live in
[`src/lib/data.ts`](src/lib/data.ts) — edit there, no component changes needed.
The booking CTAs and social links are driven by `model.whatsapp` and
`model.instagram`.

## Deploy

Deploys cleanly to [Vercel](https://vercel.com/new). No environment variables
required — all content is static.
