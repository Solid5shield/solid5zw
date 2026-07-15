import { useState, useEffect } from 'react'
import './CookieConsent.css'

const STORAGE_KEY = 'solid5-cookie-consent'

export default function CookieConsent(){
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) setVisible(true)
  }, [])

  const respond = (choice) => {
    localStorage.setItem(STORAGE_KEY, choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to improve your experience on solid5.co.zw.
        By continuing, you agree to our use of cookies.
      </p>
      <div className="cookie-actions">
        <button className="cookie-btn cookie-btn--decline" onClick={() => respond('declined')}>
          Decline
        </button>
        <button className="cookie-btn cookie-btn--accept" onClick={() => respond('accepted')}>
          Accept
        </button>
      </div>
    </div>
  )
}