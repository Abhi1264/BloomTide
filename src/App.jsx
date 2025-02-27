import React from 'react'
import Navbar from './components/navbar'
import Home from './Home'
import Footer from './components/footer'
import Company from './components/Company'
import Career from './components/career'
import Services from './components/servicespage'
import Blog from './components/blog'
import Contact from './components/contact'
import { createBrowserRouter , RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/Company",
      element: <><Navbar/><Company/><Footer/></>
    },
    {
      path: "/Career",
      element: <><Navbar/><Career/><Footer/></>
    },
    {
      path: "/Services",
      element: <><Navbar/><Services/><Footer/></>
    },
    {
      path: "/Blog",
      element: <><Navbar/><Blog/><Footer/></>
    },
    {
      path: "/Contact",
      element: <><Navbar/><Contact/><Footer/></>
    }
  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App