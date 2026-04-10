import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Home/Navbar.jsx';
import Hero from './Components/Home/Hero.jsx';
import Listed_books from './Components/Listed_books/Listed_books.jsx';
import Pages_To_Reload from './Components/Pages_To_Reload.jsx';
import All_books from './Components/Book/All_books.jsx';
import BookDetail from './Components/Book/BookDetail.jsx';
import BookProvider from './Contexts/BookContext.jsx';
import WishlistProvider from './Contexts/WishlistContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Navbar,
    children: [
      {
        index: true,
        Component: Hero,
      },

      {
        path: "All_books/:bookId",
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");
          const data = await res.json();
          return data.find(book => String(book.bookId) === String(params.bookId));
        },
        Component: BookDetail,
      },

      {
        path: "listed-books",
        Component: Listed_books,
      },
      {
        path: "pages-to-reload",
        Component: Pages_To_Reload,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishlistProvider>
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </WishlistProvider>
  </StrictMode>,
)
