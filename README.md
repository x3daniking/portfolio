# Muhammad Adnan — Portfolio

A single-page React portfolio site (Vite + React 18), deployed to GitHub Pages at
**https://x3daniking.github.io/portfolio/**

## Tech
- Vite 5 + React 18
- Vanilla CSS (no UI framework) — fonts: Space Grotesk / Plus Jakarta Sans / IBM Plex Mono
- Scroll-reveal via IntersectionObserver, smooth-scroll nav, responsive down to mobile

## Run locally
```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
```

## Build
```bash
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploy to GitHub Pages

The repo lives at `x3daniking/portfolio` and serves from the `/portfolio/` base path
(already set in `vite.config.js`).

### Option A — GitHub Actions (recommended, automatic)
1. Push this project to the `main` branch of `x3daniking/portfolio`.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Every push to `main` builds and deploys automatically (see `.github/workflows/deploy.yml`).

### Option B — Manual `gh-pages` branch
```bash
npm run build
# then push the contents of ./dist to the gh-pages branch
npx gh-pages -d dist        # (npm i -D gh-pages first)
```
Then set **Settings → Pages → Source = gh-pages branch**.

## Notes
- If you move this to your user root (`x3daniking.github.io`), change `base` in
  `vite.config.js` from `'/portfolio/'` to `'/'`.
- Project screenshots live in `public/images/`. Swap them for higher-res versions any time —
  keep the same filenames and aspect ratios.
- The contact form opens the visitor's email client (mailto). To capture submissions without
  email, wire the form to Formspree / a serverless endpoint in `src/App.jsx`.
