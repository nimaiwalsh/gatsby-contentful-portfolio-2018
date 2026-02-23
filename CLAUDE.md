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

Styled with **Tailwind CSS v3** (`gatsby-plugin-postcss`). Design tokens are defined in `tailwind.config.js`:
- `primary: #4ABDAC` — teal, used for structural accents (header bg circle, outlines)
- `secondary: #FC4A1A` — orange, used for links, buttons, nav hover underlines
- `secondary-highlight: #F7B733` — amber, used for hover states and hero heading
- `maxWidth.container: 1170px` — page max-width
- `screens` — `sm:600px`, `md:900px`, `lg:1200px`, `xl:1800px`
- `fontFamily.sans` — Inter; `fontFamily.serif` — Merriweather (loaded via Google Fonts in `gatsby-ssr.js`)

Global base styles (resets, body bg, default link colour) live in `src/styles/global.css`, which is imported in `Layout.js`.

There are no per-page style files — all styles are inline Tailwind `className` props.

### Component Patterns

- All pages wrap content in `<Layout>` (provides Header, Footer, global CSS)
- Shared primitives (`PageWrapper`, `Section`, `Button`, `ButtonNext`, `ButtonPrevious`) live in `src/components/styles/StyledComponents.js` as plain React components with Tailwind classes
- `Card` / `CardList` are the main content listing components; `Card` accepts `bookReview` or `blogPost` boolean props to change rendering
- `FadeInUp` wraps content for entry animations (inline CSS transitions, no external library)
- Responsive nav: `hidden md:block` shows `MainNav` on desktop; `md:hidden` shows `MobileNav` on mobile

### Routing

Static pages are in `src/pages/` (automatically routed by Gatsby). Dynamic content routes are generated in `gatsby-node.js`.
