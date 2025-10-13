import { useState, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'

// Lazy load non-critical components (below the fold)
const Benefits = lazy(() => import('./components/Benefits'))
const HowItWorks = lazy(() => import('./components/HowItWorks'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Premium = lazy(() => import('./components/Premium'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))
const CTAModal = lazy(() => import('./components/CTAModal'))

// Loading fallback component
const LoadingFallback = () => (
  <div className="py-20 text-center">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-r-transparent"></div>
  </div>
)

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
      
      <Suspense fallback={<LoadingFallback />}>
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Premium onCtaClick={handleCtaClick} />
        <Contact />
        <Footer />
        {isModalOpen && <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
      </Suspense>
    </div>
  )
}

export default App
