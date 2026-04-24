# AI Projects Showcase

A static React + Vite homepage for showcasing experimental AI products and MVPs. It is built with TypeScript, Tailwind CSS, static project data, and GitHub Pages deployment support.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Static project data in `src/data/projects.ts`
- GitHub Pages deployment with `gh-pages`

## Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Images

Add static image files to `public/projects/` using these names:

- `justtap.jpg`
- `aurelium.jpg`
- `matchmaking.jpg`
- `kids-ai-makeover.jpg`
- `styletap-ai.jpg`

The homepage references them through Vite's GitHub Pages base path:

- `projects/justtap.jpg`
- `projects/aurelium.jpg`
- `projects/matchmaking.jpg`
- `projects/kids-ai-makeover.jpg`
- `projects/styletap-ai.jpg`

Add the hero background image at:

```text
public/hero-ai-showcase.jpg
```

## Edit Project Details

All project content is stored in:

```text
src/data/projects.ts
```

Update names, descriptions, tags, images, app links, YouTube links, and GitHub links there.

## Deploy to GitHub Pages

This project is configured for the repository URL:

```text
https://sonu84it.github.io/genai-product-lab/
```

Deploy:

```bash
npm run deploy
```

If you rename the GitHub repository, update:

- `homepage` in `package.json`
- `base` in `vite.config.ts`
