# JetSpark Solutions – Website

A fast, mobile-friendly website built with [Astro](https://astro.build) and hosted for free on Netlify.

## ✏️ How to update the website

Almost everything is in **one file: [`src/data/site.json`](src/data/site.json)**:

| What you want to change | Where in `site.json` |
|---|---|
| Phone, WhatsApp, email, address, hours | `contact` |
| Services (add / remove / edit) | `services` |
| "Why choose us" points | `whyUs` |
| Industries served | `industries` |
| About page text | `about` |
| Numbers bar (24/7, projects, ...) | `stats` |

**Easiest way (no software needed):** open `src/data/site.json` on GitHub → click the ✏️ pencil → edit → **Commit changes**. The live site updates on its own in about 1 minute.

Notes:
- `whatsapp` is the number with country code, digits only (e.g. `919876543210`).
- `mapEmbedUrl`: on Google Maps click **Share → Embed a map** and paste only the `src="..."` link.
- Logo files are in `public/` (`logo.png`, `favicon.png`).

## 🚀 Hosting on Netlify (one-time setup)

1. Sign in at [netlify.com](https://app.netlify.com) with GitHub.
2. **Add new site → Import an existing project → GitHub →** choose this repo.
3. Settings are read from `netlify.toml` automatically → click **Deploy**.
4. **Domain:** Site settings → Domain management → add your domain (e.g. `jetsparksolutions.com`) and follow the DNS steps. HTTPS is free and automatic.
5. **Enquiry form emails:** Site settings → Forms → Form notifications → add an email notification for the `enquiry` form.

Then update `site` in `astro.config.mjs` to the real domain.

## 💻 Running locally (optional, for developers)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
