# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5175

# Build
npm run build        # Build to dist/public/

# Type checking
npm run typecheck    # Run tsc --noEmit

# Preview production build
npm run serve        # Preview at http://localhost:4175
```

There is no test suite configured.

## Architecture

This is a **React 19 + Vite + Tailwind CSS v4** marketing/homepage site for OpenBusiness — an AI-powered CRM and ERP SaaS product.

### Routing

Uses **wouter** (not React Router). Routes are defined in `src/App.tsx`:
- `/` → `Home` — full marketing landing page
- `/crm` → `CRMPage` — dedicated CRM product page
- `/erp` → `ERPPage` — dedicated ERP product page

The router base is set from `import.meta.env.BASE_URL` to support subdirectory deployments.

### Component Structure

- `src/pages/` — page-level components that compose sections
- `src/components/sections/` — all major page sections (Navbar, Hero, Features, etc.), co-located without a layout subfolder
- `src/components/ui/` — shadcn/ui primitives (Radix UI-based, do not hand-edit these)

The `@` alias maps to `src/`, and `@assets` maps to `src/assets/`.

### Styling

- **Tailwind CSS v4** is used via `@tailwindcss/vite` plugin (not PostCSS)
- Theme tokens are defined in `src/index.css` under `@theme inline` and `:root` CSS variables
- The site enforces **dark mode only** — `--background` is hardcoded to a dark navy (`#0A0E1A`); there is no light mode toggle
- Primary color: Electric Blue (`#3B82F6`); Accent: Violet (`#8B5CF6`)
- Font: Inter (loaded from Google Fonts)

### State & Data

- **TanStack Query** (`@tanstack/react-query`) is set up in `App.tsx` but currently used minimally — no backend API exists in this repo
- No global state manager; components are self-contained with local state
