import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Packages from './components/Packages.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Packages />
        <Services />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </>
  )
}
