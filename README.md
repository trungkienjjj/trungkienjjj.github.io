# Nguyen Tran Trung Kien - Portfolio

AI engineering and evaluation portfolio built with React, TypeScript, Vite, and
Tailwind CSS.

## Live site

https://trungkienjjj.github.io/

## Project coverage

The site currently presents 11 projects:

- 4 featured technical case studies
- 7 compact project studies
- Individual work and class-team work with visible ownership labels
- Direct links to original team repositories to preserve attribution and
  contribution history

The full GitHub collaboration audit is recorded in
[COLLABORATIVE_PROJECTS.md](COLLABORATIVE_PROJECTS.md).

## OCR before-and-after demo

The demo uses short excerpts from saved outputs in the executed
`02-evaluating-model.ipynb` cell that prints best and worst cases. The examples
are from `2065.jpg` (diacritics), `3483.jpg` (spacing), and `2468.jpg` (short
word). The displayed images redraw the reference fragments using Caveat
and contain no dataset image pixels. The examples are illustrative and
their edit distances are calculated only on the displayed text. The main
chart reports the separate held-out evaluation on 1,446 samples.

- [UIT-HWDB dataset reference](https://github.com/nghiangh/UIT-HWDB-dataset)
- [Caveat typeface](https://fonts.google.com/specimen/Caveat)

## Local development

```bash
npm ci
npm run dev
```

## Verification and production build

```bash
npm run lint
npm test
npm run build
npm run check:links
npm run preview
```

Pushes to `main` deploy `dist/` to GitHub Pages through
`.github/workflows/deploy.yml`.
