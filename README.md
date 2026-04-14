# neon-kit-portfolio

Portfolio site (Next.js static export) for [codepapu](https://github.com/codepapu).

**Repository:** https://github.com/codepapu/neon-kit-portfolio

**Live demo:** https://neon-kit-portfolio.vercel.app/

**GitHub Pages (optional):** https://codepapu.github.io/neon-kit-portfolio/ — enable **Settings → Pages → Source: GitHub Actions**, then deploy from `main`.

**Custom domain (optional):** In Pages, set a domain such as `neon.codepapu.in` and add a DNS **CNAME** to `codepapu.github.io`. In the repo, add Actions **Variables** `NEXT_PUBLIC_SITE_URL` = `https://neon.codepapu.in` and `NEXT_PUBLIC_BASE_PATH` empty (see workflow). Re-run the deploy workflow.

## Local

```bash
npm ci
npm run dev
```

```bash
npm run build
```

Static output is written to `out/` (used by the GitHub Pages workflow).
