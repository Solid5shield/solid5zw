import { useState } from 'react'
import './CookieSettingsButton.css'

export default function CookieSettingsButton({  isOpen, onToggle  }) {
  return (
    <div
      id="ot-sdk-btn-floating"
      className="ot-floating-button"
      title="COOKIE SETTINGS →"
    >
      <div className="ot-floating-button__front">
         <button
          type="button"
          className="ot-floating-button__open"
          aria-label="Open Preferences"
          aria-hidden={isOpen}
          style={{ display: isOpen ? 'none' : 'block' }}
          onClick={onToggle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 29 36">
            <path
              className="ot-floating-button__svg-fill"
              d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z"
              fill="#FFF"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="ot-floating-button__back">
        <button
          type="button"
          className="ot-floating-button__close"
          aria-label="Close Preferences"
          aria-hidden={!isOpen}
          style={{ display: isOpen ? 'block' : 'none' }}
          onClick={onToggle}
        >
          <svg role="presentation" tabIndex="-1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <g fill="none" fillRule="evenodd">
              <g className="ot-floating-button__svg-fill" transform="translate(-318, -725)" fill="#fff" fillRule="nonzero">
                <g transform="translate(305, 712)">
                  <g>
                    <polygon points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333" />
                    <polygon
                      transform="translate(25,25) scale(-1,1) translate(-25,-25)"
                      points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}