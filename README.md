# Salam AlKaissi — Personal Website

A two-page personal website built with Astro and TypeScript, adapted from the Google Stitch design export.

## Pages

- `/` — About Me
- `/projects/` — Selected projects

## Local development

```sh
npm install
npm run dev
```

Create a static production build with:

```sh
npm run build
```

Astro writes the static site to `dist/`. The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys that directory to GitHub Pages when a change is pushed to `main`.

The public site URL is configured in `astro.config.ts` for `https://salam-alkaissi.github.io`.
