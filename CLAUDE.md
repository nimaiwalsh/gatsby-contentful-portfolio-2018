# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run develop       # Start Gatsby dev server (http://localhost:8000)

# Build
npm run build         # Production build

# Formatting
npm run format        # Prettier format all src/**/*.js files
```

There are no tests configured (`npm test` exits with an error).

ESLint runs automatically during `gatsby develop` via `gatsby-plugin-eslint` (warnings only, does not fail on error).

## Environment Variables

The project requires a `.env.development` (or `.env.production`) file with:

```
GATSBY_CONTENTFUL_SPACE_ID=...
GATSBY_CONTENTFUL_ACCESS_TOKEN=...
```

These are loaded via `dotenv` in `gatsby-config.js` based on `NODE_ENV`.

## Architecture

### Data Flow: Contentful → Gatsby → Pages

All content comes from **Contentful** (headless CMS) via `gatsby-source-contentful`. Content is fetched at build time through GraphQL queries. There are four Contentful content types:

- `ContentfulBlogPost` — blog posts with `slug`, `title`, `body` (Markdown), `tags`, `createdAt`
- `ContentfulBookReview` — book reviews with `slug`, `title`, `author`, `summary` (Markdown)
- `ContentfulProject` — portfolio projects
- `ContentfulQuotes` — quotes displayed on the homepage

### Page Generation (`gatsby-node.js`)

Dynamic pages are created in `gatsby-node.js` via `createPages`:
- `/blog` and `/blog/:page` — paginated blog list (5 posts/page) using `blog-list-template.js`
- `/blog/:slug` — individual post using `post-page.js`
- `/bookreviews` and `/bookreviews/:page` — paginated book reviews using `book-review-list-template.js`
- `/bookreviews/:slug` — individual review using `book-review-page.js`

### Styling System

Styled with **Emotion** (`@emotion/styled`, `@emotion/core`). Global design tokens live in `src/utils/theme.js`:
- `COLOURS` — brand palette
- `BREAKPOINTS` / `MEDIAQUERY` — responsive breakpoints (mobile-first with desktop at 1200px, uses `em` units at 1em=20px)
- `PADDINGS` — spacing scale (XXS–XL)
- `CONTAINER.WIDTH` — max-width of `1170px`

Typography is handled by **Typography.js** using the Sutro theme (`src/utils/typography.js`), which sets the base font size to 20px.

Page-specific styles live in `src/pages-styles/` (co-located with pages).

### Component Patterns

- All pages wrap content in `<Layout>` (provides Header, Footer, global styles, Helmet SEO tags)
- `Layout` uses Gatsby's `StaticQuery` — it is not a page-level component
- Shared styled primitives (`PageWrapper`, `Section`) live in `src/components/styles/StyledComponents.js`
- `Card` / `CardList` are the main content listing components; `Card` accepts `bookReview` or `blogPost` boolean props to change rendering
- `FadeInUp` wraps content for entry animations via `react-motion`

### Routing

Static pages are in `src/pages/` (automatically routed by Gatsby). Dynamic content routes are generated in `gatsby-node.js`.
