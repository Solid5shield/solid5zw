import { useState } from 'react'
import kraalMarketImg from '../assets/portfolio/kraal-market.png'
import gerboAiImg from '../assets/portfolio/gerbo-ai.png'
import videolidImg from '../assets/portfolio/videolid.png'
import elandsTechImg from '../assets/portfolio/elands-tech.png'
import solidfloImg from '../assets/portfolio/solidflo.png'
import solid5Img from '../assets/portfolio/solid5.png'
import kraalAppImg from '../assets/portfolio/smartstruct.png'
import solidfloAppImg from '../assets/portfolio/solidflo.png'
import './Portfolio.css'

const PROJECTS = [
  { label: 'Kraal Market', type: 'Web', url: 'https://kraalmarket.com', image: kraalMarketImg },
  { label: 'Gerbo AI', type: 'Web', url: 'https://gerboai.com', image: gerboAiImg },
  { label: 'Videolid', type: 'Web', url: 'https://videolid.com', image: videolidImg },
  { label: 'Elands Tech', type: 'Web', url: 'https://elandstech.co.za', image: elandsTechImg },
  { label: 'SolidFlo', type: 'Web', url: 'https://solidflo.co.za', image: solidfloImg },
  { label: 'Solid5', type: 'Web', url: 'https://solid5.co.za', image: solid5Img },
  { label: 'Kraal App', type: 'Mobile', image: kraalAppImg },
  { label: 'SolidFlo App', type: 'Mobile', image: solidfloAppImg },
]

// Layered background: dark gradient sits on top of the image so text stays readable.
const cardBg = (image, strength = 0.65) => ({
  backgroundImage: `linear-gradient(180deg, rgba(10,18,16,${strength - 0.3}), rgba(10,18,16,${strength})), url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

export default function Portfolio(){
  const [index, setIndex] = useState(0)
  const go = (dir) => setIndex(i => (i + dir + PROJECTS.length) % PROJECTS.length)

  const left = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length]
  const active = PROJECTS[index]
  const right = PROJECTS[(index + 1) % PROJECTS.length]

  const ActiveTag = active.url ? 'a' : 'div'
  const activeProps = active.url
    ? { href: active.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <section className="work" id="work">
      <div className="container work-top">
        <ul className="work-features">
          <li>+ TOP PROJECTS</li>
          <li>+ WEB</li>
          <li>+ MOBILE</li>
          <li>+ DESIGN</li>
        </ul>
      </div>

      <div className="work-stage">
        <button className="work-arrow work-arrow--left" onClick={() => go(-1)} aria-label="Previous project">‹</button>

        <div
          className="work-card work-card--side work-card--left"
          style={cardBg(left.image, 0.8)}
          aria-hidden="true"
        >
          <span>{left.label}</span>
        </div>

        <ActiveTag
          className="work-card work-card--active"
          style={cardBg(active.image, 0.55)}
          {...activeProps}
        >
          <span className="work-card-type">{active.type}</span>
          <span className="work-card-label">{active.label}</span>
          <span className="work-card-tap">
            {active.url ? 'VISIT SITE ↗' : 'MOBILE APP'}
          </span>
        </ActiveTag>

        <div
          className="work-card work-card--side work-card--right"
          style={cardBg(right.image, 0.8)}
          aria-hidden="true"
        >
          <span>{right.label}</span>
        </div>

        <button className="work-arrow work-arrow--right" onClick={() => go(1)} aria-label="Next project">›</button>
      </div>

      <div className="work-dots">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>

      <div className="container work-footer">
        <span>{PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length].label}</span>
        <span>{PROJECTS[(index + 1) % PROJECTS.length].label} ›</span>
      </div>
    </section>
  )
}