import {
  Navigation,
  Hero,
  Mission,
  Resources,
  Process,
  Contact,
  Footer,
  FloatingHelpButton,
} from './components'

// Watermark image for hero section
import watermarkUrl from './assets/hero-watermark.png'

function App() {
  return (
    <>
      {/* Skip link for accessibility */}
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Navigation />

      <main id="main">
        <Hero watermarkUrl={watermarkUrl} />
        <Mission />
        <Resources />
        <Process />
        <Contact />
      </main>

      <Footer />
      <FloatingHelpButton />
    </>
  )
}

export default App
