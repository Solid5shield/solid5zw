import './Packages.css'
import Constellation from './Constellation.jsx'
const PACKAGES = [
  {
    color: 'teal',
    name: 'Basic PBC',
    price: '$125',
    copy: 'Company name search, official CIPZ registration and basic founding documents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10L12 4l9 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 10v9M9 10v9M15 10v9M19 10v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M3 19h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: 'gold',
    name: 'Standard PLC',
    price: '$170',
    copy: 'Certificate of Incorporation, CR5 & CR6 documents, Memorandum & Articles of Association.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3h9l4 4v14H6V3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M14 3v5h5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12h7M9 15.5h7M9 18.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    color: 'maroon',
    name: 'Premium Compliance',
    price: '$220',
    copy: 'Everything in Standard, plus ZIMRA Tax Clearance, bank account opening assistance and a company stamp.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3l7 3v6c0 4.5-2.9 8-7 9-4.1-1-7-4.5-7-9V6l7-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M9 12.2l2.1 2 3.6-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Packages(){
  return (
    <section className="packages" id="packages">
      <div className="packages-constellation" aria-hidden="true">
        <Constellation />
      </div>
      <div className="container">
        
        <p className="packages-eyebrow">CIPZ Company Registration</p>
        <h2 className="packages-heading">Our Packages</h2>

        <div className="packages-list">
          {PACKAGES.map(p => (
            <div className="package-row" key={p.name}>
              <div className={`package-icon package-icon--${p.color}`}>{p.icon}</div>
              <div className="package-copy">
                <p className="package-name">
                  {p.name} <span className="package-price">{p.price}</span>
                </p>
                <p className="package-desc">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <a href="#contact" className="packages-cta">GET STARTED — CIPZ REGISTRATION</a>
      </div>
     
    </section>
  )
}
