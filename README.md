# NextBites

Find a feel-good recipe, search by title or cuisine, and open a detail page with ingredients and cooking steps.

## Run locally

```bash
npm ci
npm run dev
```

Run the checks and build a static export with:

```bash
npm run lint
npm run build
```

The static site is generated in `out/`. Recipe detail pages are pre-rendered from `app/data/recipes.ts`.

## Deploy

GitHub Actions deploys the static export to GitHub Pages when changes are pushed to `main` or `polish-and-deploy`. The GitHub Actions build applies the `/nextbites` base path used by the project site.
