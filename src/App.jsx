import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home/Home'
import Footer from './components/footer'
import Company from './components/company/company'
import Career from './components/career/career'
import Services from './components/services/services'
import Blog from './components/blog/blog'
import Contact from './components/contact/contact'
import About from './components/about/about'
import CaseStudies from './components/casestudies/casestudies'
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
      path: "/About",
      element: <><Navbar/><About/><Footer/></>
    },
    {
      path: "/Casestudies",
      element: <><Navbar/><CaseStudies/><Footer/></>
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