# Aurora Institute website

React 19 + Vite + Tailwind CSS v4. Uses hash routing (`#/about`), so it works on any static host with no server rewrites.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs ./dist
npm run preview
```

Requires Node 20.19+ (22 recommended).

## Deploy to Netlify
- **Git:** push to GitHub → Netlify → *Add new site → Import from Git*. `netlify.toml` already sets build command (`npm run build`), publish dir (`dist`) and Node 22.
- **Drag & drop:** run `npm install && npm run build`, then drop the `dist` folder on https://app.netlify.com/drop.

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo on the `main` branch.
2. Repo → *Settings → Pages → Source: GitHub Actions*.
3. Every push to `main` runs `.github/workflows/deploy.yml` and publishes to `https://<user>.github.io/<repo>/`.

Asset paths are relative (`base: './'`), so no repo-name configuration is needed.
