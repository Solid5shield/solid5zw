import { useState, useEffect } from "react";
import "./CookieConsent.css";

export default function CookieConsent({ isOpen, onClose }) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [prefs, setPrefs] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  // Keep it mounted briefly after close so the scale/fade-out can play
  useEffect(() => {
    if (isOpen) setShouldRender(true);
    else {
      const t = setTimeout(() => setShouldRender(false), 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  const togglePref = (key) => {
    if (key === "necessary") return;
    setPrefs((p) => ({ ...p, [key]: !p[key] }));
  };

  const savePrefs = (values) => {
    localStorage.setItem("cookie-consent", JSON.stringify(values));
    onClose();
  };

  const acceptAll = () =>
    savePrefs({ necessary: true, analytics: true, marketing: true });
  const rejectAll = () =>
    savePrefs({ necessary: true, analytics: false, marketing: false });
  const saveChoices = () => savePrefs(prefs);

  return (
    <div
      className={`cookie-consent-overlay ${isOpen ? "is-open" : ""}`}
      onClick={onClose}
    >
      <div
        className={`cookie-consent-panel ${isOpen ? "is-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="cookie-consent-close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <h2>Cookie Preferences</h2>
        <p>
          We use cookies to improve your experience, analyse traffic, and
          personalise content. Choose which categories you're happy with.
        </p>

        <div className="cookie-consent-options">
          <label className="cookie-consent-row">
            <div>
              <strong>Necessary</strong>
              <p>Required for the site to function. Always on.</p>
            </div>
            <input type="checkbox" checked disabled />
          </label>

          <label className="cookie-consent-row">
            <div>
              <strong>Analytics</strong>
              <p>Helps us understand how visitors use the site.</p>
            </div>
            <input
              type="checkbox"
              checked={prefs.analytics}
              onChange={() => togglePref("analytics")}
            />
          </label>

          <label className="cookie-consent-row">
            <div>
              <strong>Marketing</strong>
              <p>Used to show you relevant ads and offers.</p>
            </div>
            <input
              type="checkbox"
              checked={prefs.marketing}
              onChange={() => togglePref("marketing")}
            />
          </label>
        </div>

        <div className="cookie-consent-actions">
          <button
            className="cookie-consent-btn cookie-consent-btn--ghost"
            onClick={rejectAll}
          >
            Reject All
          </button>
          <button
            className="cookie-consent-btn cookie-consent-btn--ghost"
            onClick={saveChoices}
          >
            Save Choices
          </button>
          <button
            className="cookie-consent-btn cookie-consent-btn--solid"
            onClick={acceptAll}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
