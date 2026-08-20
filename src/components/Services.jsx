import { useEffect, useMemo, useRef, useState } from "react";
import servicesMockup from "../assets/services-mockup.webp";
import "./Services.css";
const serviceImageModules = import.meta.glob("../assets/services/*.{jpg,jpeg,png,webp}", {
  eager: true,
});
function getServiceImage(n) {
  const match = Object.entries(serviceImageModules).find(([path]) =>
    path.includes(`/${n}.`)
  );
  return match ? match[1].default : servicesMockup;
}
const CATEGORIES = [
  "All",
  "Business Registration",
  "Development",
  "Design & Marketing",
];

const SERVICES = [
  { n: "01", title: "CIPZ Company Registration", copy: "Name search, official CIPZ registration, and founding documents — done for you, start to finish.", category: "Business Registration", featured: true },
  { n: "02", title: "Trademark & IP Registration", copy: "Protect your brand name, logo, and products before someone else claims them first.", category: "Business Registration" },
  { n: "03", title: "ZIMRA Tax Registration", copy: "VAT, PAYE, and tax clearance setup so your business is compliant from day one.", category: "Business Registration" },
  { n: "04", title: "Business Plan & Pitch Deck Writing", copy: "Investor-ready documents that turn your idea into a clear, fundable case.", category: "Business Registration" },
  { n: "05", title: "NGO / PBO Registration", copy: "Full registration support for non-profits and public benefit organisations.", category: "Business Registration" },
  { n: "06", title: "Web Development", copy: "Marketing sites, dashboards, and full web applications — built responsive, fast, and easy to maintain.", category: "Development" },
  { n: "07", title: "Mobile App Development", copy: "iOS and Android apps built from one codebase, so you ship to both stores without doubling the budget.", category: "Development" },
  { n: "08", title: "E-Commerce Solutions", copy: "Online stores built with EcoCash, PayNow, and card payments integrated from the start.", category: "Development" },
  { n: "09", title: "Payment Gateway Integration", copy: "Connect your existing site or app to local and international payment rails.", category: "Development" },
  { n: "10", title: "Custom Software / ERP Systems", copy: "Internal tools for inventory, HR, or operations, built around how your business actually runs.", category: "Development" },
  { n: "11", title: "API Integration", copy: "Connect your systems to third-party tools like accounting software, CRMs, and SMS gateways.", category: "Development" },
  { n: "12", title: "Cloud Hosting & DevOps", copy: "Server setup, deployment pipelines, and uptime monitoring so nothing breaks silently.", category: "Development" },
  { n: "13", title: "Maintenance & Support Retainers", copy: "Ongoing bug fixes, updates, and monitoring after your product goes live.", category: "Development" },
  { n: "14", title: "UI / UX Design", copy: "Interfaces designed around how your users actually work, not just how the screens look in a deck.", category: "Design & Marketing" },
  { n: "15", title: "Branding & Logo Design", copy: "A visual identity — logo, colours, and guidelines — that matches the product you're building.", category: "Design & Marketing" },
  { n: "16", title: "SEO & Digital Marketing", copy: "Get found on Google and turn traffic into customers once your site is live.", category: "Design & Marketing" },
];

const STEP_VH = 55;

function ServiceScrollTabs({ services }) {
  const scrollerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = scrollerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      if (total <= 0) {
        setActiveIdx(0);
        return;
      }

      let progress = -rect.top / total;
      progress = Math.max(0, Math.min(1, progress));
      const idx = Math.round(progress * (services.length - 1));
      setActiveIdx(idx);
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [services]);

  const jumpTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    const total = el.getBoundingClientRect().height - window.innerHeight;
    if (total <= 0) return;
    const targetProgress = i / (services.length - 1 || 1);
    const targetScroll =
      window.scrollY + el.getBoundingClientRect().top + targetProgress * total;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const current = services[activeIdx] || services[0];
  if (!services.length) return null;

  return (
    <div
      className="services-scroller"
      ref={scrollerRef}
      style={{ height: `${services.length * STEP_VH}vh` }}
    >
      <div className="services-scroller-sticky">
        <div className="services-tabs">
          <ul className="services-tabs-nav" role="tablist">
            {services.map((s, i) => (
              <li key={s.n}>
                <button
                  role="tab"
                  aria-selected={i === activeIdx}
                  className={`services-tab ${i === activeIdx ? "is-active" : ""}`}
                  onClick={() => jumpTo(i)}
                >
                  <span className="services-tab-index">{s.n}</span>
                  <span className="services-tab-title">{s.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div
            className="services-tab-panel"
            key={current.n}
            style={{ backgroundImage: `url(${getServiceImage(current.n)})` }}
          >
            <div className="services-tab-panel-overlay" aria-hidden="true" />
            <div className="services-tab-panel-body">
              <p className="services-tab-eyebrow">{current.category}</p>
              <h3>{current.title}</h3>
              <p>{current.copy}</p>
              <a href="#contact" className="services-tab-cta">
                Get Started →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [activeCat, setActiveCat] = useState("All");

  const visible = useMemo(
    () =>
      activeCat === "All"
        ? SERVICES
        : SERVICES.filter((s) => s.category === activeCat),
    [activeCat],
  );

  return (
    <section className="services" id="services">
      <div
        className="services-image-bg"
        style={{ backgroundImage: `url(${servicesMockup})` }}
        aria-hidden="true"
      />

      <div className="container">
        <p className="services-eyebrow">What we do best</p>
        <h2 className="services-heading">What makes us different?</h2>

        <nav
          className="services-filters"
          aria-label="Filter services by category"
        >
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`services-filter ${activeCat === cat ? "is-active" : ""}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat}
              {i < CATEGORIES.length - 1 && (
                <span className="services-filter-sep" aria-hidden="true">
                  /
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <ServiceScrollTabs services={visible} />
    </section>
  );
}