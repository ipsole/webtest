import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Docdril for Growth Teams: Marketing Infrastructure | Docdril",
  description: "Build high-performance landing pages, tracking pipelines, and retention-focused ad video creatives to scale customer acquisition.",
  keywords: "growth operations for marketing teams, conversion tracking setup B2B, retention ad video edits, acquisition tracking",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Growth Operations & Ad Creative Setup",
    "description": "Technical tracking setup, pixel conversions, landing page design, and paid ad creative video editing.",
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

      <main className="seo-page roles-growth-teams">
        <section className="hero-section">
          <p className="tagline">Solutions by Role</p>
          <h1 className="title">Engineered tracking and high-converting creatives.</h1>
          <p className="subtitle">We bridge the gap between creative marketing and hard data. Our engineers install tracking systems while our editors design paid ad videos that capture attention and drive conversions.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Equip Your Growth Team</button>
          </div>
        </section>

        <section className="details-section">
          <h2>Acquisition Support for Modern Growth Teams</h2>
          <div className="grid">
            <div className="card">
              <h3>Conversion Tracking Pipelines</h3>
              <p>Server-side conversion APIs, pixel tracking, and database synchronizers to eliminate data blindness.</p>
            </div>
            <div className="card">
              <h3>High-Retention Social Ads</h3>
              <p>Video ads edited with pattern interrupts and problem-solving arcs to optimize click-through rates.</p>
            </div>
            <div className="card">
              <h3>Rapid Funnel Deployments</h3>
              <p>Custom landing pages designed in Next.js or Framer to test new offers and hook target audiences in days.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
