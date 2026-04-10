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
