import Hero from './components/hero'
import Process from './components/process'
import Services from './components/services'
import InfiniteScroll from './components/tech'
import Testimonials from './components/testimonials'
import FAQ from './components/faq'
import Contact from './components/enquiry'
import Cta from './components/cta'

function Home() {

  return (
    <>
      <Hero />
      <Process />
      <Services />
      <InfiniteScroll />
      <Testimonials />
      <FAQ />
      <Contact />
      <Cta />
    </>
  )
}

export default Home