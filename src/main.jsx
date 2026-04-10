import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Listed_books from './Components/Listed_books.jsx';
import Pages_To_Reload from './Components/Pages_To_Reload.jsx';
import Home from './Components/Home.jsx';
import User from './Components/All_books.jsx';
import All_books from './Components/All_books.jsx';
import BookDetail from './Components/BookDetail.jsx';

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
        path: "home",
        Component: Home,
      },
      {
        path: "All_books/:bookId",
        loader: async ({ params }) => {
          const res = await fetch("/booksData.json");
          const data = await res.json();
          return data.find(book => book.bookId == params.bookId);
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
    <RouterProvider router={router} />
  </StrictMode>,
)
