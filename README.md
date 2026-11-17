# Astro Multilingual Portfolio & Markdown Blog

[![Astro](https://img.shields.io/badge/Astro-v7.4-FF5D01?style=flat&logo=astro&logoColor=white)](https://astro.build/)
[![React](https://img.shields.io/badge/React-v19-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v7.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat&logo=three.js&logoColor=white)](https://threejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A high-performance, SEO-first multilingual portfolio and Markdown publishing engine built with **Astro 7**, **React 19**, **Tailwind CSS v4**, and **Three.js**. Supports **10 languages** natively with zero-flash dark/light theming, dynamic SVG Open Graph image generation, RSS 2.0 feeds, and interactive 3D WebGL physics.

**Live Website:** [ladestack.in](https://ladestack.in/) &nbsp;|&nbsp; **Author:** [Girish Lade](https://github.com/girishlade111) &nbsp;|&nbsp; **Ecosystem:** [LadeStack](https://ladestack.in/)

---

## Table of Contents

- [Features](#features)
- [Supported Languages (10 Locales)](#supported-languages-10-locales)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Development & Build Commands](#development--build-commands)
- [Architecture & Deep Dive](#architecture--deep-dive)
  - [1. Native i18n Routing Engine](#1-native-i18n-routing-engine)
  - [2. Interactive 3D Lanyard & Studio Stage](#2-interactive-3d-lanyard--studio-stage)
  - [3. Markdown Blog Engine](#3-markdown-blog-engine)
  - [4. Portfolio Content Architecture](#4-portfolio-content-architecture)
  - [5. Dynamic Open Graph Image Generator](#5-dynamic-open-graph-image-generator)
  - [6. RSS Feeds](#6-rss-feeds)
  - [7. SEO & JSON-LD Structured Data](#7-seo--json-ld-structured-data)
- [Adding a New Language](#adding-a-new-language)
- [Deployment Guide](#deployment-guide)
  - [Vercel](#vercel)
  - [Netlify](#netlify)
  - [Cloudflare Pages](#cloudflare-pages)
  - [GitHub Pages](#github-pages)
- [Contributing](#contributing)
- [License](#license)
- [Author & Connect](#author--connect)

---

## Features

- **Native Astro i18n Architecture**: Prefix-based routing (`/{lang}/`) for all 10 locales with fallback resolution, automatic language redirection, and localized path generation.
- **10 Fully Supported Locales**: Complete localized UI strings, navigation, portfolio sections, and blog articles in English, Marathi, Japanese, Korean, Chinese, Russian, Portuguese, Turkish, French, and Spanish.
- **Interactive 3D WebGL Lanyard Hero**: Three.js physics-driven identification lanyard with realistic cloth simulation, custom shaders, gyroscope-based mobile tilt, and instant 0ms SSR image preview fallback.
- **Precision Studio Stage**: Minimalist architectural background with SVG grid alignment ticks, eliminating heavy visual clutter while enhancing focus on the interactive hero.
- **10-Section Comprehensive Portfolio**:
  1. *About & Identity* (Bio, quick facts, metrics)
  2. *Experience & Journey* (5-chapter career story)
  3. *Education & Background* (Formal and self-directed disciplines)
  4. *Vision & Values* (Guiding philosophy, 10 core principles)
  5. *LadeStack Ecosystem* (Architecture, tool philosophy, privacy manifesto)
  6. *Products & Live Web Apps* (9 production applications with tech breakdown)
  7. *Prototypes & Research Labs* (9 experimental R&D initiatives)
  8. *Skills & Capability Matrix* (10 technical domains and competency levels)
  9. *Engineering Workflow* (8-step solo builder methodology)
  10. *Contact & Network* (Direct links, communication channels)
- **High-Performance Markdown Blog**:
  - Full Content Collections schema with type safety.
  - Auto-generated Table of Contents with active heading spy.
  - Estimated reading time calculator.
  - Cross-language article linking (switch between translations of the same article).
  - Code syntax highlighting and one-click code copy.
  - Native reading progress bar.
- **Dynamic On-The-Fly OG Cards**: Generates localized, brand-compliant SVG Open Graph images for every article (`/api/og/[lang]/[slug].svg`) for rich social sharing.
- **Per-Locale RSS 2.0 Feeds**: Dedicated RSS syndication feeds for every supported language (`/[lang]/rss.xml`).
- **Zero-Flash Theme System**: Instant light and dark mode toggling with inline header scripts preventing FOUC (Flash of Unstyled Content).
- **Enterprise SEO**: Auto-injected `<link rel="alternate" hreflang="...">` tags, canonical URL resolution, and Google-compliant schema graph (`Person`, `WebSite`, `BlogPosting` JSON-LD).
- **Tailwind CSS v4**: Built on the modern `@tailwindcss/vite` engine for instantaneous hot-reloads and atomic CSS output.

---

## Supported Languages (10 Locales)

| Code | Language | Native Name | Region / Locale | Writing Direction |
|:---:|:---|:---|:---:|:---:|
| `en` | English | English | `en_US` | LTR |
| `mr` | Marathi | मराठी | `mr_IN` | LTR |
| `jp` | Japanese | 日本語 | `ja_JP` | LTR |
| `ko` | Korean | 한국어 | `ko_KR` | LTR |
| `zh` | Chinese | 中文 | `zh_CN` | LTR |
| `ru` | Russian | Русский | `ru_RU` | LTR |
| `pt` | Portuguese | Português | `pt_BR` | LTR |
| `tr` | Turkish | Türkçe | `tr_TR` | LTR |
| `fr` | French | Français | `fr_FR` | LTR |
| `es` | Spanish | Español | `es_ES` | LTR |

---

## Tech Stack

| Domain | Technology | Description |
|---|---|---|
| **Core Framework** | [Astro v7.4](https://astro.build/) | Islands architecture, static-first rendering, native i18n routing |
| **Component Layer** | [React v19](https://react.dev/) | Dynamic interactive UI components (`@astrojs/react`) |
| **Styling** | [Tailwind CSS v4.3](https://tailwindcss.com/) | Atomic utility styles powered by `@tailwindcss/vite` |
| **Type System** | [TypeScript v7.0](https://www.typescriptlang.org/) | Strict mode, end-to-end interface contracts |
| **3D Graphics** | [Three.js v0.187](https://threejs.org/) | WebGL physics canvas, custom shaders, cloth simulation |
| **Motion & Micro-interactions** | [Motion v12](https://motion.dev/) / Framer Motion | Fluid accordion animations and component transitions |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight, accessible, crisp SVG iconography |
| **Build Pipeline** | [Vite v8](https://vitejs.dev/) + [esbuild](https://esbuild.github.io/) | Sub-second module bundler and compiler |
| **AI Integration** | [Google GenAI SDK](https://github.com/google/generative-ai-js) | Multimodal Gemini API integration hooks |

---

## Project Structure

```text
astro-multilingual-portfolio/
├── public/                           # Static assets served at root
│   ├── assets/                       # Profile avatars, badges, and illustrations
│   ├── favicon.svg                   # Brand vector favicon
│   └── robots.txt                    # Search crawler directives
├── src/
│   ├── components/
│   │   ├── Footer.astro              # Responsive footer with legal, brand, and social links
│   │   ├── HeroBackground.astro      # Minimalist architectural studio stage grid
│   │   ├── Lanyard.jsx               # Interactive Three.js WebGL physics ID card
│   │   ├── Navbar.astro              # Sticky responsive header with language & theme pickers
│   │   ├── PortfolioSections.tsx     # Accordion-driven portfolio directory (10 sections)
│   │   ├── ReadingProgress.astro     # Scroll-synchronized reading bar for blog posts
│   │   └── reactbits/                # Specialized interactive React micro-components
│   │       ├── AnimatedAccordion.tsx # Smooth spring-physics accordion panels
│   │       ├── BlurText.tsx          # Progressive blur-in heading animation
│   │       ├── DecryptedText.tsx     # Matrix-style character scrambling effect
│   │       ├── ShinyText.tsx         # Sweeping metallic gradient typography
│   │       └── SpotlightCard.tsx     # Mouse-tracking radial spotlight card
│   ├── content/
│   │   └── blog/                     # Localized Markdown articles organized by locale code
│   │       ├── en/*.md               # English blog posts
│   │       ├── mr/*.md               # Marathi blog posts (मराठी)
│   │       ├── jp/*.md               # Japanese blog posts (日本語)
│   │       ├── ko/*.md               # Korean blog posts (한국어)
│   │       ├── zh/*.md               # Chinese blog posts (中文)
│   │       ├── ru/*.md               # Russian blog posts (Русский)
│   │       ├── pt/*.md               # Portuguese blog posts (Português)
│   │       ├── tr/*.md               # Turkish blog posts (Türkçe)
│   │       ├── fr/*.md               # French blog posts (Français)
│   │       └── es/*.md               # Spanish blog posts (Español)
│   ├── data/
│   │   └── portfolioContent.ts       # Central typed repository of 10-section copy across 10 languages
│   ├── i18n/
│   │   ├── config.ts                 # Supported locales, UI labels, route translators, hreflang mappings
│   │   └── config.test.ts            # Unit tests ensuring 100% localization key parity
│   ├── layouts/
│   │   ├── BaseLayout.astro          # Root HTML layout, SEO meta tags, theme bootstrap, JSON-LD
│   │   └── BlogPostLayout.astro      # Article layout with ToC, reading time, code copy, and author card
│   ├── pages/
│   │   ├── 404.astro                 # Localized custom 404 error page
│   │   ├── index.astro               # Root index performing geo/preference-aware redirection
│   │   ├── api/
│   │   │   └── og/[lang]/[slug].ts   # Dynamic SVG Open Graph generator endpoint
│   │   └── [lang]/
│   │       ├── index.astro           # Localized portfolio home page
│   │       ├── rss.xml.ts            # Localized RSS 2.0 feed generator
│   │       └── blog/
│   │           ├── index.astro       # Localized blog listing directory
│   │           └── [slug].astro      # Localized blog post detail page
│   ├── styles/
│   │   └── global.css                # Tailwind imports, custom typography, dark mode CSS variables
│   └── utils/
│       ├── blog.ts                   # Astro content collection querying and sorting utilities
│       └── gyro.ts                   # Mobile device orientation and tilt event handlers
├── .env.example                      # Template for environment configuration
├── .gitignore                        # Git exclusion rules (node_modules, dist, .astro, .env)
├── astro.config.mjs                  # Astro configuration (i18n, React, Tailwind, Vite)
├── package.json                      # Dependencies and automation scripts
├── tsconfig.json                     # Strict TypeScript compiler options
└── vite.config.ts                    # Vite plugin pipeline
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.20.0` or higher (`v20+` recommended)
- **npm**: `v9.0.0` or higher (or `pnpm` / `bun`)
- **Git**

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/astro-multilingual-portfolio.git

# Enter project directory
cd astro-multilingual-portfolio

# Install dependencies cleanly
npm install
```

### Environment Variables

Copy `.env.example` into `.env`:

```bash
cp .env.example .env
```

| Variable | Required | Description | Example |
|---|:---:|---|---|
| `APP_URL` | No | Public canonical deployment domain | `https://ladestack.in` |
| `GEMINI_API_KEY` | Optional | Google Gemini API key for AI logic | `AIzaSy...` |

> In local development, the application functions seamlessly without configuring environment variables.

### Development & Build Commands

```bash
# Start local development server with HMR at http://localhost:3000
npm run dev

# Run TypeScript typechecks across the entire repository
npm run lint

# Compile production-ready static assets to dist/
npm run build

# Preview production build locally on port 3000
npm run preview

# Clean build output and Astro cache artifacts
npm run clean
```

---

## Architecture & Deep Dive

### 1. Native i18n Routing Engine

The routing engine uses Astro's native `i18n` with `prefixDefaultLocale: true`. Every language URL is explicitly scoped:

```text
/en/              -> English Portfolio
/mr/              -> Marathi Portfolio (मराठी)
/jp/              -> Japanese Portfolio (日本語)
/fr/blog/         -> French Blog Listing
/mr/blog/my-post  -> Marathi Blog Article
```

Navigating to the root domain (`/`) automatically detects the user's browser language or cookies and redirects cleanly to the appropriate locale prefix (defaulting to `/en/`).

Routing and translation helpers in [`src/i18n/config.ts`](src/i18n/config.ts):
- `resolveLocale(locale)`: Safely validates and falls back to `en`.
- `switchLocalePath(currentPath, targetLocale)`: Seamlessly converts any URL path to the target language counterpart.
- `getAlternateLinks(currentPath)`: Computes an array of all alternate hreflang URLs for search indexers.

### 2. Interactive 3D Lanyard & Studio Stage

The hero features an interactive WebGL identification card:
- **Physics Simulation**: Renders a floating, articulated lanyard cord anchored to a top clasp.
- **Custom Shaders**: Light reflection, card matte roughness, and realistic fabric normal mapping.
- **Gyroscope Support**: Uses [`src/utils/gyro.ts`](src/utils/gyro.ts) on mobile devices to react dynamically to phone tilting.
- **Zero-Flicker SSR Fallback**: Renders an instant SVG/CSS skeleton placeholder on Frame 0, avoiding blank gaps while the WebGL context compiles.

### 3. Markdown Blog Engine

Articles are organized within Astro Content Collections in `src/content/blog/{lang}/*.md`.

Each post supports standard frontmatter:

```markdown
---
title: "Zero-Telemetry Architecture: Engineering for Complete Privacy"
description: "How to architect web applications that operate entirely client-side without collecting telemetry."
pubDate: 2026-11-02
updatedDate: 2026-11-04
heroImage: "/assets/blog/zero-telemetry.webp"
tags: ["Architecture", "Privacy", "Security"]
---

## Introduction

Body content written in standard GitHub-flavored Markdown...
```

Article detail pages automatically generate:
- Table of contents with jump-links
- Word count and reading duration estimate
- Cross-language links to matching translations
- Syntax-highlighted code snippets with single-click copy buttons

### 4. Portfolio Content Architecture

All 10 sections of the portfolio are typed and stored in [`src/data/portfolioContent.ts`](src/data/portfolioContent.ts).

Sections include:
1. **Bio & Overview**: Name, title, personal tagline, location, and key metrics.
2. **Career Journey**: Timeline chapters detailing achievements and transitions.
3. **Education & Certifications**: Academic qualifications and practical disciplines.
4. **Mission & Values**: Foundational principles guiding software development.
5. **Ecosystem**: Architectural overview of personal software products.
6. **Live Products**: 9 production-ready tools with descriptions, tags, and URLs.
7. **Prototypes**: 9 experimental R&D initiatives exploring novel technologies.
8. **Skills**: Categorized competencies spanning frontend, backend, systems, and design.
9. **Process**: Methodological step-by-step solo engineering workflow.
10. **Contact**: Social profiles, verified email addresses, and key repositories.

### 5. Dynamic Open Graph Image Generator

Social media previews are generated dynamically via an Astro endpoint located at `src/pages/api/og/[lang]/[slug].ts`.

Visiting:
```text
https://ladestack.in/api/og/en/zero-telemetry-privacy-by-architecture.svg
```
Returns a high-resolution, branded vector SVG card with the article's title, publication metadata, reading time, and author watermark.

### 6. RSS Feeds

Full RSS 2.0 feeds are generated for every language using Astro's `@astrojs/rss`:

- English: `/en/rss.xml`
- Marathi: `/mr/rss.xml`
- Japanese: `/jp/rss.xml`
- And all other 7 supported languages.

### 7. SEO & JSON-LD Structured Data

Every page renders a rich JSON-LD graph in the `<head>`:
- `Person` schema: Author identity, job title, and social links.
- `WebSite` schema: Site search and internationalization metadata.
- `BlogPosting` schema: Article title, datePublished, dateModified, and author reference.
- Full `<link rel="alternate" hreflang="...">` tags for all 10 locales plus `x-default`.

---

## Adding a New Language

To introduce an 11th language (e.g., German `de`):

1. **Register Locale**:
   In `src/i18n/config.ts`, append `'de'` to `LOCALES`:
   ```typescript
   export const LOCALES = ['en', 'mr', 'jp', 'ko', 'zh', 'ru', 'pt', 'tr', 'fr', 'es', 'de'] as const;
   ```
2. **Add Metadata**:
   In `LOCALE_METADATA`:
   ```typescript
   de: { code: 'de', label: 'German', nativeName: 'Deutsch', htmlLang: 'de', ogLocale: 'de_DE' },
   ```
3. **Translate UI Strings**:
   Add a translation block in `UI_TRANSLATIONS` inside `src/i18n/config.ts`.
4. **Add Portfolio Content**:
   Add a localized object in `src/data/portfolioContent.ts`.
5. **Add Blog Content Directory**:
   Create `src/content/blog/de/` and place translated `.md` files inside.
6. **Update Astro Config**:
   Add `'de'` to the `locales` array in `astro.config.mjs`.

---

## Deployment Guide

The build command (`npm run build`) compiles static HTML, CSS, JavaScript, and SVG assets into `dist/`.

### Vercel

```bash
# Deploy with Vercel CLI
npx vercel
```
- **Framework Preset**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

### Netlify

Create a `netlify.toml` or configure in the Netlify Dashboard:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Cloudflare Pages

- **Framework**: Astro
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`

### GitHub Pages

A standard GitHub Actions workflow (`.github/workflows/deploy.yml`) can build and deploy the `dist/` directory to GitHub Pages using the official `actions/deploy-pages` action.

---

## Contributing

Contributions, issues, and feature suggestions are welcome:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feat/amazing-feature`).
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org/) (`git commit -m "feat: add amazing feature"`).
4. Push to the branch (`git push origin feat/amazing-feature`).
5. Open a Pull Request.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for terms and conditions.

---

## Author & Connect

**Girish Balaso Lade**  
Founder & Solo Architect at **LadeStack**  
*UI/UX Designer & Full-Stack Systems Engineer*

- **Website**: [ladestack.in](https://ladestack.in/)
- **GitHub**: [@girishlade111](https://github.com/girishlade111)
- **Email**: [admin@ladestack.in](mailto:admin@ladestack.in)
