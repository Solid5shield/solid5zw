import './Footer.css'
import { IconInstagram, IconLinkedIn, IconX, IconWhatsApp } from './icons.jsx'
import SocialLinks from './SocialLinks.jsx'
import logo from '../assets/solid-5-white.svg'
export default function Footer(){
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div>
          <img src={logo} width="180" alt="Solid5 logo" />
          <p className="footer-tag">CIPZ company registration, web &amp; mobile app development — Zimbabwe.</p>
        </div>

        <div className="footer-contact">
          <p className="footer-label">GET IN TOUCH</p>
          <p>+263 78 307 262</p>
          <p>info@solid5.co.zw</p>
          <p>Harare, Zimbabwe</p>
        </div>

        <div className="footer-social">
          <p className="footer-label">FOLLOW</p>
         
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Solid5. All rights reserved.</span>
        <SocialLinks />
      </div>
    </footer>
  )
}
