import { useState, useEffect } from 'react'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MayorSection from './components/MayorSection'
import EmergencySection from './components/EmergencySection'
import EconomicDrivers from './components/EconomicDrivers'
import QuoteBanner from './components/QuoteBanner'
import MissionVision from './components/MissionVision'
import DeptsNews from './components/DeptsNews'
import GallerySection from './components/GallerySection'
import TendersSection from './components/TendersSection'
import WeatherSection from './components/WeatherSection'
import ContactPage from './components/ContactPage'
import DocumentsPage from './components/DocumentsPage'
import DocumentCategoryPage from './components/DocumentCategoryPage'
import { documentCategories } from './data/documentCategories'
import Footer from './components/Footer'

function getPage() {
  const hash = window.location.hash
  if (hash === '#contact-us') return 'contact'
  if (hash === '#documents') return 'documents'
  if (hash.startsWith('#doc/')) {
    const slug = hash.slice(5)
    const cat = documentCategories.find((c) => c.slug === slug)
    if (cat) return { type: 'doc-category', category: cat }
  }
  return 'home'
}

export default function App() {
  const [currentPage, setCurrentPage] = useState(getPage)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPage())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
      <header className="site-header">
        <TopBar />
        <Navbar />
      </header>

      <main>
        {currentPage === 'contact' ? (
          <ContactPage />
        ) : currentPage === 'documents' ? (
          <DocumentsPage />
        ) : currentPage?.type === 'doc-category' ? (
          <DocumentCategoryPage category={currentPage.category} />
        ) : (
          <>
            <HeroSection />
            <MayorSection />
            <EmergencySection />
            <EconomicDrivers />
            <QuoteBanner />
            <MissionVision />
            <DeptsNews />
            <GallerySection />
            <TendersSection />
            <WeatherSection />
          </>
        )}
      </main>

      <Footer />
    </>
  )
}
