import './Services.css'

const SERVICES = [
  {
    n: '01',
    title: 'CIPZ Company Registration',
    copy: 'Name search, official CIPZ registration, and founding documents — done for you, start to finish.',
    featured: true,
  },
  {
    n: '02',
    title: 'Web Development',
    copy: 'Marketing sites, dashboards, and full web applications — built responsive, fast, and easy to maintain.',
  },
  {
    n: '03',
    title: 'Mobile App Development',
    copy: 'iOS and Android apps built from one codebase, so you ship to both stores without doubling the budget.',
  },
  {
    n: '04',
    title: 'UI / UX Design',
    copy: 'Interfaces designed around how your users actually work, not just how the screens look in a deck.',
  },
]

export default function Services(){
  return (
    <section className="services" id="services">
      <div className="container">
        <p className="services-eyebrow">What we build</p>
        <div className="services-grid">
          {SERVICES.map(s => (
            <div className={`service-card ${s.featured ? 'is-featured' : ''}`} key={s.n}>
              <span className="service-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
