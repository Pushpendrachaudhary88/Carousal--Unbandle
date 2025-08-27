StreamNow is a modern YouTube-style UI built with Next.js App Router, TypeScript, and Tailwind CSS. It features an attractive design, custom logo, responsive layout, and mock data for videos, channels, and categories.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Features

- Attractive, modern layout with sticky header and sidebar
- Custom gradient logo in `public/logo.svg`
- Home page with category pills and responsive video grid
- Watch page with player area, details, and recommendations
- Channel page with cover, avatar, subscribe, and uploads grid
- Mock data in `src/data/mock.ts` and types in `src/types`
- Remote images configured in `next.config.ts`

## Scripts

```bash
pnpm dev     # start dev server
pnpm build   # production build
pnpm start   # run production server
pnpm lint    # lint
```

## Notes

- Images use Unsplash and Pravatar placeholders; replace with your assets or APIs as needed.
- Tailwind v4 inline theming is set in `src/app/globals.css`.
