---
title: Building This Portfolio
date: 2026-08-02
description: Why SvelteKit, how the theming and blog engine work, and what's still unfinished.
---

# Building This Portfolio

Figured it was time to write down how this site actually came together, since
the README still just says "this project is not finished yet" and leaves it
at that.

## Why SvelteKit

I wanted something that compiles away instead of shipping a runtime, and
`adapter-static` makes it trivial to spit out plain HTML/CSS/JS I can host on
GitHub Pages for free. No server, no build-time surprises — `vite build`
prerenders every route (including each blog post and project page) straight
to `/build`.

## The theming system

There's no CSS-in-JS or Tailwind here — just CSS custom properties
(`--theme-background`, `--theme-text`, `--theme-primaryButton`, etc.) set on
`:root`, and a `ThemeSwitcher` component that cycles through a flat JSON file
of theme objects (`src/lib/database/themes.json`). Right now there are 15 of
them — Light, Dark, NightStalker, Med, Dil, Grass, Earth, and a bunch of
named-after-people ones I'm not going to explain. Clicking "Next" just walks
the array and re-assigns the custom properties. Adding a new theme is
literally adding one object to the JSON file.

## The blog is dogfooding

This post you're reading is a Markdown file in `src/lib/blogs/` with a
frontmatter block (`title`, `date`, `description`) parsed by hand with a
regex — no gray-matter dependency, just a `^---\n([\s\S]*?)\n---\n?` match —
and the body run through `marked`. `import.meta.glob('./blogs/*.md', { eager:
true })` pulls every post in at build time, so adding a post is: drop a `.md`
file in the folder, done. No CMS, no database.

## Small things that took longer than expected

- **View transitions** — the header, and page-to-page navigation, use the
  View Transitions API (`view-transition-name: header` plus keyframes for
  slide/fade in `global.css`). Scoped Svelte 5 `<style>` blocks rename
  `@keyframes`, so the transition keyframes had to live in the global
  stylesheet instead of the component — one of those things you only
  discover once the animation silently does nothing.
- **`vw`-based layout** — the header used to size itself with `vw` units
  against a `position: fixed` box with no `left`/`right` set. Looks fine
  until a scrollbar shows up, because `vw` is measured against the full
  viewport width, not the visible content width — the scrollbar's width just
  quietly eats into one side. Anchoring with `left: 0; right: 0` instead of a
  `vw` width sidesteps the whole problem.
- **Custom scrollbar** — styled via `::-webkit-scrollbar`, which is
  Chromium/Safari only. Firefox just ignores it and falls back to its native
  one, which is a gap I still need to decide whether to close.

## Testing

Vitest for unit tests, Playwright for integration — `npm run test` runs both.
Not everything is covered yet, but the CI-relevant paths (routing, the blog
loader, the card catalog) have tests.

## What's still unfinished

Content, mostly. The projects and bookmarks pages are wired up and driven by
JSON files (`projects.json`, `bookmarks.json`), which makes them easy to keep
adding to, but there just isn't much in them yet. That, and this blog now has
two posts instead of one.
