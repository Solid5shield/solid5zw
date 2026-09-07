import smartHomeHeroImg from '../assets/smart-home.png' 
import TiltCard from './TiltCard.jsx'
import './SmartHomeSection.css'
function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#7fdc7f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
const FEATURES = [
  'Smart lighting & scene control',
  'Security cameras & video doorbells',
  'Smart locks & access control',
  'Climate & load-shedding-aware automation',
  'Voice assistant integration',
  'Remote control from your phone, anywhere',
]

const PACKAGES = [
  {
    name: 'Starter',
    price: '$250',
    tagline: 'A few rooms, done right',
    features: ['Up to 5 smart devices', 'Lighting & plugs', 'Mobile app setup', '1 voice assistant'],
  },
  {
    name: 'Essential',
    price: '$600',
    tagline: 'Whole-home basics covered',
    highlighted: true,
    features: ['Up to 15 smart devices', 'Lighting, locks & cameras', 'Automation routines', 'Voice + app control', 'On-site installation'],
  },
  {
    name: 'Full Home',
    price: '$1,800',
    tagline: 'Complete automation, top to bottom',
    features: ['Unlimited devices', 'Security, climate & energy', 'Custom automation scenes', 'Backup power integration', 'Priority support'],
  },
]

export default function SmartHomeSection(){
  return (
    <section className="smart-home" id="smart-home">
      <div className="container smart-home-inner">
        <div className="smart-home-intro reveal">
          <p className="smart-home-eyebrow">Lighting · Security · Climate</p>
          <h2 className="smart-home-title">Smart Home Automation</h2>
          <p className="smart-home-copy">
            We design and install smart home systems built for Zimbabwean homes —
            from a few automated lights to a fully integrated system with security,
            climate control, and backup-power awareness for load-shedding.
          </p>

          <ul className="smart-home-features">
            {FEATURES.map(f => (
              <li key={f}>
                <IconCheck />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="smart-home-cta btn-shine">GET A FREE CONSULTATION</a>
        </div>

        <div className="smart-home-image reveal reveal--right">
          <img src={smartHomeHeroImg} alt="Smart home automation setup" />
        </div>
      </div>

      <div className="container">
        <div className="smart-home-packages">
          {PACKAGES.map((pkg, i) => (
            <TiltCard
              key={pkg.name}
              className={`smart-home-package reveal${pkg.highlighted ? ' is-highlighted' : ''}`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <h3>{pkg.name}</h3>
              <p className="smart-home-package-tagline">{pkg.tagline}</p>
              <div className="smart-home-package-price">{pkg.price}</div>
              <ul>
                {pkg.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="smart-home-package-cta">Choose {pkg.name}</a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}