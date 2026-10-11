# AHMrit Wellness

Storefront for **AHMrit Wellness**, an Ayurvedic skincare and home-essentials brand. It is a single-page React app with a minimal, premium look.

## Features

- Pages: Home, Shop, Product Detail, Cart, Checkout, About, Contact, FAQ
- Product catalogue with categories (Skincare, Wellness & Home), image galleries and ingredient and usage details
- Cart persisted in `localStorage`
- Shipping calculator with free shipping above ₹899 (see [src/utils/shipping.js](src/utils/shipping.js))
- Responsive layout styled with Tailwind CSS

## Tech stack

React 18 · React Router 7 · Vite 5 · Tailwind CSS 3 · ESLint 9

## Getting started

Requires Node.js 18 or later.

```bash
npm install
npm run dev       # start the dev server with hot reload
```

| Script            | Purpose                          |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start the Vite dev server        |
| `npm run build`   | Production build into `dist/`    |
| `npm run preview` | Serve the production build       |
| `npm run lint`    | Run ESLint                       |

## Project structure

```
src/
├── components/   Header, Footer, ProductCard, carousels, banners
├── context/      CartContext (cart state + localStorage persistence)
├── data/         products.js (catalogue and categories)
├── pages/        One component per route
├── utils/        shipping.js
├── images/       Site imagery (processed/ holds optimised assets)
└── products/     Source product photos
```

## Editing content

- **Products:** edit [src/data/products.js](src/data/products.js). Product photos are picked up automatically from `src/images/processed/products/<slug>/<n>.webp`.
- **Shipping rules:** edit [src/utils/shipping.js](src/utils/shipping.js).
- **Brand colours and fonts:** edit [tailwind.config.js](tailwind.config.js).

## Planned

Payment integration (UPI, Razorpay or Instamojo, Cash on Delivery), customer reviews and WhatsApp and email contact. See [PROJECT_BRIEF.md](PROJECT_BRIEF.md) for the full brief.
