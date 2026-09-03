import './StarlinkSection.css'

const PLANS = [
  {
    name: 'Home Lite',
    fit: 'Browsing, streaming, one household',
    price: '$30',
    period: '/mo',
    hardware: 'Mini kit from $200 + $23 shipping',
    features: [
      'Compact dish + built-in router',
      'Unlimited data, deprioritised at peak times',
      'Self-service portal access',
    ],
  },
  {
    name: 'Home Standard',
    fit: 'Remote work, video calls, gaming',
    price: '$50',
    period: '/mo',
    hardware: 'Standard kit from $389 + $23 shipping',
    highlight: true,
    features: [
      'Standard dish + WiFi router',
      'Higher priority data than Lite',
      'Multi-device optimisation',
    ],
  },
  {
    name: 'Business / Roam',
    fit: 'Offices, lodges, farms, mobile sites',
    price: 'From $115',
    period: '/mo',
    // TODO: confirm current business hardware price — the Standard kit price
    // above is the only figure we've verified; Business tiers may need a
    // High Performance dish, priced separately.
    hardware: 'Kit + install quoted per site',
    features: [
      'Priority data from 40GB to 2TB tiers',
      'No kit transfer fee',
      'Static IP available on request',
    ],
  },
]

const STEPS = [
  {
    title: 'Site assessment',
    copy: 'We check sky visibility and recommend the best mounting position — roof, pole, or wall — before anything is installed.',
  },
  {
    title: 'Dish mounting & alignment',
    copy: 'We mount the dish securely, route cabling neatly, and align it for the strongest possible signal.',
  },
  {
    title: 'Network setup',
    copy: 'Router configuration, WiFi coverage check, and a live speed test so you see the numbers before we leave.',
  },
  {
    title: 'Handover & support',
    copy: 'A short walkthrough of the app and equipment, plus ongoing support if you ever need a hand.',
  },
]

function CheckIcon(){
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.2 5.6 10.3 11.5 3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function StarlinkSection(){
  return (
    <section className="starlink" id="starlink">
      <div className="container starlink-inner">
        <div className="starlink-header">
          <p className="starlink-eyebrow">Starlink Sales &amp; Installation</p>
          <h2 className="starlink-title">Internet that doesn't care about load-shedding</h2>
          <p className="starlink-lede">
            We're an authorised Starlink dealer and installer, supplying genuine hardware and
            handling setup end to end — homes, offices, farms, and lodges anywhere in Zimbabwe,
            fibre or no fibre.
          </p>
        </div>

        <div className="starlink-plans">
          {PLANS.map(plan => (
            <div key={plan.name} className={`starlink-plan${plan.highlight ? ' is-highlight' : ''}`}>
              <div className="starlink-plan-head">
                <h3>{plan.name}</h3>
                <p className="starlink-plan-fit">{plan.fit}</p>
              </div>
              <div className="starlink-plan-price">
                <span className="starlink-plan-price-value">{plan.price}</span>
                <span className="starlink-plan-price-period">{plan.period}</span>
              </div>
              <p className="starlink-plan-hardware">{plan.hardware}</p>
              <ul className="starlink-plan-features">
                {plan.features.map(f => (
                  <li key={f}><CheckIcon /><span>{f}</span></li>
                ))}
              </ul>
              <a href="#contact" className="starlink-plan-cta">Get a quote</a>
            </div>
          ))}
        </div>

        <div className="starlink-process">
          <h3 className="starlink-process-title">How installation works</h3>
          <ol className="starlink-steps">
            {STEPS.map((step, i) => (
              <li key={step.title} className="starlink-step">
                <span className="starlink-step-number">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="starlink-process-note">
            Every job goes out with a full site-survey kit — drill, level, stud finder, sealant, and
            proper mounting hardware for roof, wall, or pole. We run the sky-obstruction check before
            drilling anything, so you're not left with a dish that can't hold a signal.
          </p>
        </div>

        <div className="starlink-footer">
          <p>Most installs are completed within a day of the site visit, generator or solar compatible.</p>
          <a href="#contact" className="starlink-footer-cta">Book a site visit</a>
        </div>
      </div>
    </section>
  )
}