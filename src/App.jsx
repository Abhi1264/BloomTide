import React from 'react'
import Navbar from './components/navbar'
import Home from './Home'
import Footer from './components/footer'
import CompanyPage from './components/companypage'
import CareerPage from './components/careerspage'
import ServicesPage from './components/servicespage'
import BlogsPage from './components/blogspage'
import { createBrowserRouter , RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><Home/><Footer/></>
    },
    {
      path: "/CompanyPage",
      element: <><Navbar/><CompanyPage/><Footer/></>
    },
    {
      path: "/CareerPage",
      element: <><Navbar/><CareerPage/><Footer/></>
    },
    {
      path: "/ServicesPage",
      element: <><Navbar/><ServicesPage/><Footer/></>
    },
    {
      path: "/BlogsPage",
      element: <><Navbar/><BlogsPage/><Footer/></>
    }
  ])
  return(
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App