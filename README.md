# Audiophile (HNG Stage 3)

A clean, responsive e-commerce frontend built with Next.js and TypeScript that showcases headphones, earphones, and speakers. This repository is the HNG Stage 3 project implementation (audiophile) including a small local JSON data store and Convex server schema for demo orders.

## Deployed Link

https://hng-audiophile-seven.vercel.app/

## Key features

- Product category pages: headphones, earphones, speakers
- Product detail pages with add-to-cart and quantity controls
- Cart state managed with Redux Toolkit
- Checkout flow with order confirmation email template (Resend/Resend-like integration code present)
- Convex integration for (demo) orders and schema
- Tailwind CSS for styling

## Tech stack

- Next.js 16 (React 19)
- TypeScript
- React
- Redux Toolkit
- Convex (server + generated client)
- Tailwind CSS

(Exact dependencies and versions are listed in `package.json`.)

## Prerequisites

- Node.js 18+ recommended
- npm (comes with Node) or an alternative package manager

## Install

Open PowerShell in the project root (`README.md` is at the repo root) and run:

```powershell
npm install
```

## Run (development)

Start the Next.js dev server:

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

## Build & Start (production)

Build the app and start the production server:

```powershell
npm run build
npm run start
```

## Useful npm scripts (from `package.json`)

- `dev` — runs `next dev`
- `build` — runs `next build`
- `start` — runs `next start`
- `lint` — runs `eslint`

## Project structure (high level)

- `app/` — Next.js App Router pages and API routes
  - `api/` — some API routes including a small demo `db` route and `send-confirmation`
  - `checkout/`, `headphones/`, `earphones/`, `speakers/`, etc. — pages
- `components/` — UI components used across pages (cart, header, product cards, etc.)
- `convex/` — Convex functions and schema for orders
- `data/` — `db.json` used as a local data source
- `emails/` — email templates (JSX/React-email)
- `lib/` — helper utilities (e.g., `checkout-schema.ts`)
- `redux/` & `store/` — Redux provider and slices
- `public/` — images and static assets

## Convex

This repo includes a `convex/` folder with schema and generated client files. If you plan to run Convex locally or deploy, follow Convex docs to initialize the backend and set the environment variables.

## Contributing

This is a project scaffold for HNG Stage 3. If you want to contribute:

1. Fork and clone the repo.
2. Create a feature branch.
3. Open a PR describing your changes.

Keep changes small and focused. Update or add tests where appropriate.

## Notes & next steps

- Add a `.env.example` if you integrate external services (email provider, Convex key, etc.).
- Add tests and CI (GitHub Actions) for build checks and linting.
- Consider adding accessibility audits and Lighthouse checks in CI.

## License

This repo doesn't include a license file. Add a license (for example, MIT) if you plan to share or distribute it publicly.

---
