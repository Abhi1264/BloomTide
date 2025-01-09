import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Process from './components/process'
import Services from './components/services'
import Testimonials from './components/testimonials'
import FAQ from './components/faq'
import Contact from './components/contact'
import Cta from './components/cta'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
      <Cta />
      <Footer />
    </>
  )
}

export default App
