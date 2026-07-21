import { useState, useEffect, useRef } from 'react'
import kraalMarketImg from '../assets/portfolio/kraal-market.png'
import gerboAiImg from '../assets/portfolio/gerbo-ai.png'
import videolidImg from '../assets/portfolio/videolid.png'
import elandsTechImg from '../assets/portfolio/elands-tech.png'
import solidfloImg from '../assets/portfolio/solidflo.png'
import solid5Img from '../assets/portfolio/solid5.png'
import kraalAppImg from '../assets/portfolio/smartstruct.png'
import Smartstruct from '../assets/portfolio/smartstruct.png'
import afrivoucherImg from '../assets/portfolio/afrivoucher.png'
import solidfloAppImg from '../assets/portfolio/solidflo.png'
import starGlassImg from '../assets/portfolio/5starglassdesigners.png'
import alexUpholsteryImg from '../assets/portfolio/alex-upholstery.png'
import './Portfolio.css'

const PROJECTS = [
  { label: 'Kraal Market', type: 'Web', url: 'https://kraalmarket.com', image: kraalMarketImg },
  { label: 'Gerbo AI', type: 'Web', url: 'https://gerboai.com', image: gerboAiImg },
  { label: 'Videolid', type: 'Web', url: 'https://videolid.com', image: videolidImg },
  { label: 'Elands Tech', type: 'Web', url: 'https://elandstech.co.za', image: elandsTechImg },
  { label: 'SolidFlo', type: 'Web', url: 'https://solidflo.co.za', image: solidfloImg },
  { label: 'Solid5', type: 'Web', url: 'https://solid5.co.za', image: solid5Img },
  { label: 'AfriVoucher', type: 'Web', url: 'https://afrivoucher.com', image: afrivoucherImg },
  { label: 'Smartstruct', type: 'Web', url: 'https://smartstruct.com', image: Smartstruct },
  { label: '5 Star Glass Designers', type: 'Web', url: 'https://5starglassdesigners.com', image: starGlassImg },
  { label: 'Alex Upholstery', type: 'Web', url: 'https://alex-upholstery.co.za', image: alexUpholsteryImg },
  { label: 'SolidFlo App', type: 'Mobile', image: solidfloAppImg },
]

const AUTO_SLIDE_MS = 3800

// Layered background: dark gradient sits on top of the image so text stays readable.
const cardBg = (image, strength = 0.65) => ({
  backgroundImage: `linear-gradient(180deg, rgba(10,18,16,${strength - 0.3}), rgba(10,18,16,${strength})), url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
})

// Position of each visible slot relative to the active card.
const SLOTS = [
  { offset: -2, className: 'work-card--far-left' },
  { offset: -1, className: 'work-card--left' },
  { offset: 0, className: 'work-card--active' },
  { offset: 1, className: 'work-card--right' },
  { offset: 2, className: 'work-card--far-right' },
]

export default function Portfolio(){
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  const go = (dir) => setIndex(i => (i + dir + PROJECTS.length) % PROJECTS.length)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => go(1), AUTO_SLIDE_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  const project = (offset) => PROJECTS[(index + offset + PROJECTS.length) % PROJECTS.length]

  return (
    <section
      className="work"
      id="work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
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

        {SLOTS.map(({ offset, className }) => {
          const p = project(offset)
          const isActive = offset === 0
          const Tag = isActive && p.url ? 'a' : 'div'
          const tagProps = isActive && p.url
            ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Tag
              key={`${index}-${offset}`}
              className={`work-card ${className}`}
              style={cardBg(p.image, isActive ? 0.55 : 0.82)}
              aria-hidden={!isActive}
              {...tagProps}
            >
              {isActive ? (
                <>
                  <span className="work-card-type">{p.type}</span>
                  <span className="work-card-label">{p.label}</span>
                  <span className="work-card-tap">
                    {p.url ? 'VISIT SITE ↗' : 'MOBILE APP'}
                  </span>
                </>
              ) : (
                <span className="work-card-label--dim">{p.label}</span>
              )}
            </Tag>
          )
        })}

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
        <span>{project(-1).label}</span>
        <span>{project(1).label} ›</span>
      </div>
    </section>
  )
}