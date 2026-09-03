import { useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import CookieSettingsButton from './CookieSettingsButton.jsx'
import CookieConsent from './CookieConsent.jsx'
import { IconInstagram, IconLinkedIn, IconX } from './icons.jsx'
import registerImg from '../assets/register.jpeg'
import webDevImg from '../assets/Software_developer.webp'
import mobileAppImg from '../assets/mobile-app.jpeg'
import bgVideo from '../assets/home-hero-primary-background-video.mp4'
import starlinkImg from '../assets/starlink.jpg'
import Constellation from './Constellation.jsx'
import './Hero.css'

const SLIDES = [
  {
    image: registerImg,
    eyebrow: 'Authorised CIPZ Registration Agent',
    title: ['COMPANY', 'REGISTRATION'],
    copy: 'We handle your CIPZ name search, registration, and founding documents — start to finish — so you don\u2019t have to navigate the portal yourself.',
    priceLabel: 'PACKAGES FROM',
    price: '$125',
    prevLabel: 'Starlink Installation',
    nextLabel: 'Web Development',
    cta: 'REGISTER MY COMPANY',
    lottie: 'https://lottie.host/af83ffeb-3a73-4f6b-85b3-1729dd2aadce/K2wZD99FFZ.lottie',
  },
  {
    image: webDevImg,
    eyebrow: 'Custom builds · Fixed timelines',
    title: ['WEB', 'DEVELOPMENT'],
    copy: 'Fast, responsive websites and web platforms built on modern stacks — from marketing sites to full web applications.',
    priceLabel: 'STARTING FROM',
    price: '$450',
    prevLabel: 'Company Registration',
    nextLabel: 'Mobile App Development',
    lottie: 'https://lottie.host/YOUR-WEBDEV-ANIMATION.lottie',
  },
  {
    image: mobileAppImg,
    eyebrow: 'iOS · Android · Cross-platform',
    title: ['MOBILE APP', 'DEVELOPMENT'],
    copy: 'Native-feeling mobile apps for iOS and Android, built once and shipped to both stores with one codebase.',
    priceLabel: 'STARTING FROM',
    price: '$900',
    prevLabel: 'Web Development',
    nextLabel: 'Starlink Installation',
    lottie: 'https://lottie.host/YOUR-MOBILEAPP-ANIMATION.lottie',
  },
  {
    image: starlinkImg,
    eyebrow: 'Authorised Dealer · On-site Install',
    title: ['STARLINK SALES', '& INSTALLATION'],
    copy: 'Skip the load-shedding and unreliable fibre — we supply genuine Starlink kits and handle the full install, from dish alignment to WiFi setup, anywhere in Zimbabwe.',
    priceLabel: 'INSTALLATION FROM',
    price: '$60',
    prevLabel: 'Mobile App Development',
    nextLabel: 'Company Registration',
    cta: 'GET STARLINK INSTALLED',
    lottie: 'https://lottie.host/YOUR-STARLINK-ANIMATION.lottie',
  },
]
const QUICK_LINKS = ['Packages', 'Process', 'Work', 'Support']

export default function Hero(){
  const [index, setIndex] = useState(0)
  const slide = SLIDES[index]
  const [cookiesOpen, setCookiesOpen] = useState(false)
  const go = (dir) => {
    setIndex(i => (i + dir + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="hero" id="top">
      <div className="hero-bg">
        <img
          key={slide.image}
          className="hero-bg-image"
          src={slide.image}
          alt=""
          aria-hidden="true"
        />
        <video
          className="hero-bg-video"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero-bg-overlay" />
      </div>
 
      <div className="hero-social">
        <a href="#" aria-label="Instagram"><IconInstagram /></a>
        <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
        <a href="#" aria-label="X / Twitter"><IconX /></a>
      </div>
       <CookieSettingsButton
        isOpen={cookiesOpen}
        onToggle={() => setCookiesOpen(o => !o)}
      />
      <CookieConsent
        isOpen={cookiesOpen}
        onClose={() => setCookiesOpen(false)}
      />
      <button className="hero-arrow hero-arrow--left" onClick={() => go(-1)} aria-label="Previous slide">‹</button>
      <button className="hero-arrow hero-arrow--right" onClick={() => go(1)} aria-label="Next slide">›</button>

      

      <div className="hero-body container">
        <div className="hero-copy">
          <p className="hero-eyebrow">{slide.eyebrow}</p>
          <h1 className="hero-title">
            {slide.title.map(line => <span key={line}>{line}</span>)}
          </h1>

          <div className="hero-price">
            <span className="hero-price-label">{slide.priceLabel}</span>
            <span className="hero-price-value">{slide.price}</span>
          </div>

          <a href="#contact" className="hero-cta">{slide.cta || 'START A PROJECT'}</a>
        </div>
      </div>

      <div className="hero-footer container">
        
       

        <div className="hero-neighbors">
          <button onClick={() => go(-1)}>‹ {slide.prevLabel}</button>
          <button onClick={() => go(1)}>{slide.nextLabel} ›</button>
        </div>
      </div>
    </section>
  )
}