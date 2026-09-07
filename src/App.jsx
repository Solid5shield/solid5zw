import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Packages from './components/Packages.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import StarlinkSection from './components/StarlinkSection.jsx'
import SmartHomeSection from './components/SmartHomeSection.jsx'
import Footer from './components/Footer.jsx'
import CookieConsent from './components/CookieConsent.jsx'
import SEO from './components/SEO'
import FuturisticBackground from './components/FuturisticBackground.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App(){
  useScrollReveal()

  return (
    <>
      <SEO
        title="Company Registration, Web & App Development in Zimbabwe"
        description="CIPZ company registration, web development, mobile apps, and UI/UX design — one team, start to finish. Based in Zimbabwe, serving clients locally and abroad."
        path="/"
      />
      <FuturisticBackground />
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <StarlinkSection />
        <SmartHomeSection />
        <Services />
        <About />
        <Portfolio />
      </main>
      <Footer />
      <CookieConsent />
    </>
  )
}