import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Web Design Studio & Interactive Web Experiences | Docdril",
  description: "We engineer high-fidelity, interactive Next.js interfaces and landing pages. Turn visitors into customers with premium design systems and operational speed.",
  keywords: "Next.js web design studio, interactive web experiences designer, premium UI UX interface design, high converting landing pages startup, framer motion web development",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Web Design & Interactive Next.js Development",
    "description": "Custom UI/UX web experiences and performance-optimized Next.js frontends engineered for modern digital brands.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Design & Development"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page services-website-design">
        <section className="hero-section">
          <p className="tagline">Digital Experiences Lab</p>
          <h1 className="title">We do not build brochures. We engineer digital landmarks.</h1>
          <p className="subtitle">Your website is your product's front door. We design immersive, lightning-fast interfaces and landing pages that communicate authority, utilize premium typography, and convert traffic at scale.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Build Your Digital Experience</button>
          </div>
        </section>

        <section className="tech-engineering-section">
          <h2>Designed for Humans. Optimized for Search Engines.</h2>
          <p className="desc">Excellent web design is a balance of rich aesthetics and absolute performance. We build using modern React systems, clean vanilla CSS/styling, and headless architecture to guarantee top-tier lighthouse scores and seamless interactions.</p>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Immersive Interactions</h3>
              <p>Glassmorphism, smooth animations, and scroll-triggered micro-interactions that make the site feel alive.</p>
            </div>
            <div className="pillar-card">
              <h3>Structured Design Systems</h3>
              <p>Clean component tokens for fonts, colors, grids, and layouts that align perfectly with your existing brand guidelines.</p>
            </div>
            <div className="pillar-card">
              <h3>SEO-First Architecture</h3>
              <p>SSR (Server-Side Rendering) by default, structured schema markups, dynamic metadata, and responsive semantic code.</p>
            </div>
            <div className="pillar-card">
              <h3>Optimized Interfaces</h3>
              <p>Focused user journeys that eliminate friction and direct visitors to your primary call-to-actions.</p>
            </div>
          </div>
        </section>

        <section className="deliverables-section">
          <h2>Modular Web Products Built to Scale</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>High-Conversion Landing Pages</h3>
              <p>Tailored to showcase SaaS software, AI features, or single products with impact.</p>
            </div>
            <div className="service-card">
              <h3>Premium Interactive Systems</h3>
              <p>Complex web apps, custom dashboards, and client portal interfaces.</p>
            </div>
            <div className="service-card">
              <h3>Dynamic Corporate Portals</h3>
              <p>Content-rich sites built with headless CMS setups, permitting seamless blog and resource publishing.</p>
            </div>
            <div className="service-card">
              <h3>Operational Branding Sets</h3>
              <p>Matching domain assets, digital presentation templates, and web experiences.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
