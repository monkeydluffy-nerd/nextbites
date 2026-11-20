# NextBites

Find a feel-good recipe, search by title or cuisine, and open a detail page with ingredients and cooking steps.

[![Deploy NextBites to GitHub Pages](https://github.com/monkeydluffy-nerd/nextbites/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/monkeydluffy-nerd/nextbites/actions/workflows/deploy.yml)
[Open the live site](https://monkeydluffy-nerd.github.io/nextbites/)

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

GitHub Actions deploys the static export to GitHub Pages when changes are pushed to `main`, `polish-and-deploy`, or `metadata-description`. The GitHub Actions build applies the `/nextbites` base path used by the project site.

Each workflow run verifies the exported home, recipe, and 404 pages. After deployment, its run summary reports HTTP checks for the live home page, a recipe detail page, and an unknown-recipe 404.
