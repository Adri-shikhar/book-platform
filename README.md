#Live Link - https://ai-book-platform.netlify.app/

# Book Vibe — Book Platform

A small React app for browsing books, viewing details, marking books as read, and managing a wishlist.

## Description

Book Vibe is a demo book-platform built with modern React tooling. It loads sample book data from `public/booksData.json`, shows a list of books, provides a detail page for each book, lets users mark books as read and add/remove books from a wishlist. Read and wishlist data are persisted in `localStorage` so state survives page reloads.

## Features

- Browse all books and view details
- Mark books as "Read" (persisted)
- Add and remove books from a wishlist (persisted)
- Tabs view for Read vs Wishlist on the Listed Books page
- Toast notifications for actions (add/remove)
- Responsive UI using Tailwind CSS and DaisyUI

## Technologies

- React 19
- Vite
- Tailwind CSS
- DaisyUI
- react-router (v7)
- react-toastify
- react-tabs
- Node.js & npm

## Project Structure (high level)

- `public/` — static assets, `booksData.json`
- `src/components/` — UI components (Home, Book, Listed_books, etc.)
- `src/contexts/` — context providers (`BookContext.jsx`, `WishlistContext.jsx`, `contexts.js`)
- `src/main.jsx` — app entry and router

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

Notes:
- If you run into PowerShell permission issues on Windows, use `npm.cmd` instead of `npm`.

---


