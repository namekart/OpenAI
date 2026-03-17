# Workspace

## Overview
A simplified project structure with the frontend at the root using TypeScript workspaces.

## Structure
```text
openbusiness-monorepo/
├── openbusiness-web/   # React frontend
├── tsconfig.base.json  # Shared TS options
├── tsconfig.json       # Root TS project references
└── package.json        # Root package
```

## Root Scripts
- `npm run dev` — starts the development server for the frontend.
- `npm run build` — builds the application.
- `npm run typecheck` — runs type checking.

## Packages
### `openbusiness-web`
The main React frontend for OpenBusiness.ai.

## Packages

### `artifacts/openbusiness-web`
React frontend for OpenBusiness.ai.

### `scripts` (`@workspace/scripts`)
Utility scripts package.
