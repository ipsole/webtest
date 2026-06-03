import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Growth Marketing Infrastructure & Operational Setup | Docdril",
  description: "Establish a scalable pipeline for marketing, tracking, and customer conversion. We design the backend growth engines for modern startup teams.",
  keywords: "growth marketing infrastructure agency, scalable lead generation systems, operational setup for modern brands, marketing tech stack consulting, conversion rate optimization systems",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Growth Infrastructure Setup",
    "description": "Technical design and integration of tracking analytics, marketing tech stacks, and customer data platforms.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    },
    "areaServed": "Worldwide",
    "serviceType": "Growth Operations & Analytics"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page services-growth-infrastructure">
        <section className="hero-section">
          <p className="tagline">Growth Operations</p>
          <h1 className="title">Turn marketing efforts into predictable growth algorithms.</h1>
          <p className="subtitle">Many brands fail to scale not because of poor marketing, but because of broken tracking and fragile backend stacks. We build reliable tracking architectures and client acquisition engines that make data transparent and conversion simple.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Audit Your Growth Stack</button>
          </div>
        </section>

        <section className="specs-section">
          <h2>The Mechanics of Scalable Customer Acquisition</h2>
          <p className="desc">We install structural data frameworks that trace customer touchpoints across all channels. We replace guesswork with absolute data visibility, connecting your ad platforms, content engines, databases, and client dashboards.</p>
          <div className="solutions-grid">
            <div className="solution-card">
              <h3>Attribution & Analytics Setup</h3>
              <p>Pixel tracking, Server-Side API tracking (Meta/Google), and unified data views.</p>
            </div>
            <div className="solution-card">
              <h3>Customer Data Pipelines</h3>
              <p>Connect frontend events to Segment, Mixpanel, or custom databases to track behavior patterns.</p>
            </div>
            <div className="solution-card">
              <h3>Automated Funnels</h3>
              <p>Email and newsletter automation flows, targeted CRM lead nurture sequences, and SMS trigger loops.</p>
            </div>
            <div className="solution-card">
              <h3>B2B Growth Engines</h3>
              <p>Lead databases, intent tracking, programmatic outreach setups, and custom scoring algorithms.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
