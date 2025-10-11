# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the Remix source. `routes/` mirrors URL paths (`_index.tsx`, `quiz.$type.tsx` for quiz variants, etc.).
- `components/` provides reusable UI, `lib/` collects loaders/types, and `assets/` stores motion assets. `styles/` contains Sass and Tailwind entry points consumed via `root.tsx`.
- `data/` keeps quiz datasets as JSON; update these alongside loader changes. `public/` exposes static files directly.
- Core config lives in `tailwind.config.ts`, `vite.config.ts`, and `tsconfig.json`; respect the `~/` path alias defined there.

## Build, Test, and Development Commands
- `pnpm install` syncs dependencies (Node 20+). Run after pulling changes.
- `pnpm dev` starts the Remix + Vite dev server with HMR at `http://localhost:5173`.
- `pnpm build` bundles client and server output into `build/`; run before deployments.
- `pnpm start` serves the production build through `remix-serve`.
- `pnpm lint` executes ESLint with caching, and `pnpm typecheck` validates TypeScript types.

## Coding Style & Naming Conventions
- Use TypeScript React function components with 2-space indentation; keep `.tsx` for UI and route files.
- Name routes by URL intent (`privacy.tsx`, `terms.tsx`) and camelCase component filenames (`MotionCardList.tsx`).
- Prefer descriptive loader/action names (`jsonLoader`). Import using the `~/` alias to avoid deep relative paths.
- Rely on Tailwind utilities or SCSS in `app/styles`; promote shared design tokens into the Tailwind config.

## Testing Guidelines
- No automated test runner ships yet; if you introduce one, prefer Vitest or Playwright and wire it to `pnpm test`.
- Until then, document manual verification for key flows (home, quiz variants, static pages) and ensure `pnpm lint` plus `pnpm typecheck` succeed.
- Place new tests beside their features (`app/routes/__tests__/` or `app/components/__tests__/`) and name files `*.test.ts[x]`.

## Commit & Pull Request Guidelines
- Follow the existing concise commit style (`search console 에러 해결`); lead with a short summary verb in Korean or English.
- Group related changes per commit and include data updates with their loaders.
- PRs need a clear description, testing notes, linked issues when relevant, and screenshots or GIFs for UI changes.
- Request review before merging, keep branches rebased on `main`, and confirm all checks pass once CI is available.
