# JetSpark Solutions – Website

A fast, mobile-friendly website built with [Astro](https://astro.build) and hosted for free on Netlify.

## ✏️ How to update the website

Almost everything is in **one file: [`src/data/site.json`](src/data/site.json)**:

| What you want to change | Where in `site.json` |
|---|---|
| Phone, WhatsApp, email, address, hours, GST number | `contact` |
| BIS / GeM / Quick Response cards in the hero | `certifications` |
| Services (add / remove / edit) | `services` |
| "Why choose us" points | `whyUs` |
| Institutions we protect | `institutions`, `institutionsIntro` |
| About page story, mission and values | `about` |
| Numbers bar (24/7, projects, ...) | `stats` |
| Satisfied customers | `clients`, `clientsIntro` |
| Home page carousel slides | `heroSlides` (a button `href` of `"whatsapp"` opens a WhatsApp chat) |

**Easiest way (no software needed):** open `src/data/site.json` on GitHub → click the ✏️ pencil → edit → **Commit changes**. The live site updates on its own in about 1 minute.

Notes:
- `whatsapp` is the number with country code, digits only (e.g. `919876543210`).
- `mapEmbedUrl`: on Google Maps click **Share → Embed a map** and paste only the `src="..."` link.
- Logo files are in `public/` (`logo.png`, `favicon.png`).

## 🛒 Online shop

Products live in **[`src/data/products.json`](src/data/products.json)**. Each product has:

- `name`, `description`, `specs` – text shown on the product page
- `price` – in ₹ (whole rupees). Use `null` to show "Ask for price"
- `category` – one of the ids in `categories`
- `image` – currently a drawn illustration from `public/products/`. To use a real photo, upload it there and set e.g. `"/products/abc-2kg.jpg"` (leave `""` to show an icon)
- `inStock` – `false` hides the Add to cart button
- `id` – the product page address (`/shop/<id>`); use lowercase-with-dashes and keep it unique

**How orders work:** customers add items to the cart and check out in one of two ways:
1. **Place Order** – the order is sent through Netlify Forms (shows under the `order` form in Netlify, and emailed to you if notifications are on).
2. **Order on WhatsApp** – opens WhatsApp with the full order already typed out to the business number.

Payment is cash on delivery or UPI/bank transfer, confirmed when you call the customer back. Online card/UPI payment (e.g. Razorpay) can be added later.

## 🚀 Hosting on Netlify (one-time setup)

1. Sign in at [netlify.com](https://app.netlify.com) with GitHub.
2. **Add new site → Import an existing project → GitHub →** choose this repo.
3. Settings are read from `netlify.toml` automatically → click **Deploy**.
4. **Domain:** Site settings → Domain management → add your domain (e.g. `jetsparksolutions.com`) and follow the DNS steps. HTTPS is free and automatic.
5. **Enquiry & order emails:** Site settings → Forms → Form notifications → add email notifications for the `enquiry` and `order` forms.

Then update `site` in `astro.config.mjs` to the real domain.

## 💻 Running locally (optional, for developers)

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```
