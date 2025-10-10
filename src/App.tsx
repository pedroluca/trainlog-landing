import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Premium from './components/Premium'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CTAModal from './components/CTAModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCtaClick = () => {
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <Header onCtaClick={handleCtaClick} />
      <Hero onCtaClick={handleCtaClick} />
      <Features />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <Premium onCtaClick={handleCtaClick} />
      <Contact />
      <Footer />
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default App
