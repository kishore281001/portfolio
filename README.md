# Robotics Portfolio

This is a Vite + React + TypeScript portfolio site.

Quick deploy to Netlify

1. Create a GitHub repository (for example: https://github.com/kishore281001/portfolio.git)
2. Push your code locally:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/kishore281001/portfolio.git
git push -u origin main
```

3. In Netlify: "New site from Git" → choose your Git provider → select this repo.
   - Build command: `npm run build`
   - Publish directory: `dist`

This repo includes a `netlify.toml` so Netlify will pick up the build settings automatically.
