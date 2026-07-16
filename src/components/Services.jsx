import { useState } from "react";
import "./Services.css";

const CATEGORIES = [
  "All",
  "Business Registration",
  "Development",
  "Design & Marketing",
];

const SERVICES = [
  {
    n: "01",
    title: "CIPZ Company Registration",
    copy: "Name search, official CIPZ registration, and founding documents — done for you, start to finish.",
    category: "Business Registration",
    featured: true,
  },
  {
    n: "02",
    title: "Trademark & IP Registration",
    copy: "Protect your brand name, logo, and products before someone else claims them first.",
    category: "Business Registration",
  },
  {
    n: "03",
    title: "ZIMRA Tax Registration",
    copy: "VAT, PAYE, and tax clearance setup so your business is compliant from day one.",
    category: "Business Registration",
  },
  {
    n: "04",
    title: "Business Plan & Pitch Deck Writing",
    copy: "Investor-ready documents that turn your idea into a clear, fundable case.",
    category: "Business Registration",
  },
  {
    n: "05",
    title: "NGO / PBO Registration",
    copy: "Full registration support for non-profits and public benefit organisations.",
    category: "Business Registration",
  },
  {
    n: "06",
    title: "Web Development",
    copy: "Marketing sites, dashboards, and full web applications — built responsive, fast, and easy to maintain.",
    category: "Development",
  },
  {
    n: "07",
    title: "Mobile App Development",
    copy: "iOS and Android apps built from one codebase, so you ship to both stores without doubling the budget.",
    category: "Development",
  },
  {
    n: "08",
    title: "E-Commerce Solutions",
    copy: "Online stores built with EcoCash, PayNow, and card payments integrated from the start.",
    category: "Development",
  },
  {
    n: "09",
    title: "Payment Gateway Integration",
    copy: "Connect your existing site or app to local and international payment rails.",
    category: "Development",
  },
  {
    n: "10",
    title: "Custom Software / ERP Systems",
    copy: "Internal tools for inventory, HR, or operations, built around how your business actually runs.",
    category: "Development",
  },
  {
    n: "11",
    title: "API Integration",
    copy: "Connect your systems to third-party tools like accounting software, CRMs, and SMS gateways.",
    category: "Development",
  },
  {
    n: "12",
    title: "Cloud Hosting & DevOps",
    copy: "Server setup, deployment pipelines, and uptime monitoring so nothing breaks silently.",
    category: "Development",
  },
  {
    n: "13",
    title: "Maintenance & Support Retainers",
    copy: "Ongoing bug fixes, updates, and monitoring after your product goes live.",
    category: "Development",
  },
  {
    n: "14",
    title: "UI / UX Design",
    copy: "Interfaces designed around how your users actually work, not just how the screens look in a deck.",
    category: "Design & Marketing",
  },
  {
    n: "15",
    title: "Branding & Logo Design",
    copy: "A visual identity — logo, colours, and guidelines — that matches the product you're building.",
    category: "Design & Marketing",
  },
  {
    n: "16",
    title: "SEO & Digital Marketing",
    copy: "Get found on Google and turn traffic into customers once your site is live.",
    category: "Design & Marketing",
  },
];

export default function Services() {
  const [active, setActive] = useState("All");

  const visible =
    active === "All" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section className="services" id="services">
      <div className="container">
        <p className="services-eyebrow">What we build</p>

        <div className="services-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`services-filter ${active === cat ? "is-active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="services-grid">
          {visible.map((s) => (
            <div
              className={`service-card ${s.featured ? "is-featured" : ""}`}
              key={s.n}
            >
              <span className="service-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
