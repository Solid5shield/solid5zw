import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/solid-5-white.svg'
const LINKS = ['Packages', 'Services', 'Work', 'Contact']

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner container">
        <button
          className="nav-burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span/><span/><span/>
        </button>

        <a href="#top" className="nav-logo">
          <img src={logo} width={120} alt="Solid5 logo" />
        </a>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
          ))}
        </nav>

        <a href="#contact" className="nav-cta">.CO.ZW</a>
      </div>
    </header>
  )
}
