# Nguyen Tran Trung Kien - Portfolio

Evidence-led AI/ML and data portfolio built with React, TypeScript, Vite, and
Tailwind CSS.

## Live site

https://trungkienjjj.github.io/

## Project coverage

The site currently presents 14 verified projects:

- 4 featured technical case studies
- 10 compact project studies
- Individual work and class-team work with visible ownership labels
- Direct links to original team repositories to preserve attribution and
  contribution history

The full GitHub collaboration audit is recorded in
[COLLABORATIVE_PROJECTS.md](COLLABORATIVE_PROJECTS.md).

## Local development

```bash
npm ci
npm run dev
```

## Verification and production build

```bash
npm run typecheck
npm run build
```

Pushes to `main` deploy `dist/` to GitHub Pages through
`.github/workflows/deploy.yml`.
