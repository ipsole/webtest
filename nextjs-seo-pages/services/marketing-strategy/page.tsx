import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Digital Marketing & Brand Strategy Consulting | Docdril",
  description: "Scale your market presence. We design comprehensive branding strategy plans, traffic funnels, and data attribution blueprints for SaaS and startups.",
  keywords: "digital marketing brand strategy, SaaS growth consultant, brand positioning audits, marketing strategy agency, growth planning B2B",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marketing & Brand Strategy Consulting",
    "description": "Auditing and designing acquisition channels, core brand message frameworks, and market entry strategy plans.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page services-marketing-strategy">
        <section className="hero-section">
          <p className="tagline">Operational Strategy</p>
          <h1 className="title">Engineered plans to scale brand market share.</h1>
          <p className="subtitle">Avoid ad-hoc marketing noise. We analyze your competitors, audit your current customer acquisition channels, and construct an actionable brand strategy blueprint to capture market attention.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Book a Strategy Session</button>
          </div>
        </section>

        <section className="strategy-pillars-section">
          <h2>Data-Driven Brand Positionings</h2>
          <div className="grid">
            <div className="card">
              <h3>Positioning Audits</h3>
              <p>Refining core messaging, clarifying value declarations, and defining the target B2B niche focus.</p>
            </div>
            <div className="card">
              <h3>Acquisition Funnel Planning</h3>
              <p>Mapping client paths from short reels, search landing pages, and newsletters directly to demo bookings.</p>
            </div>
            <div className="card">
              <h3>Stack Attributions</h3>
              <p>Ensuring correct conversion tags, CRM lead pipelines, and database updates to monitor real-time marketing ROI.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
