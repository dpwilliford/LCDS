# Claude Code Instructions

## Phase 1 Only

Do not implement AI enrichment or future phases.

## Build Order

1. App shell
2. Database
3. CSV import
4. Records browser
5. Reports

## Rules

- Small slices only
- No speculative features
- No large rewrites
- Use TypeScript
- Use Prisma with SQLite
- Validate with Zod

## Verification

Run:

- npm run build
- npm run lint
- npm run typecheck
