import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Docdril for Founders: Outsource Operations & Visuals | Docdril",
  description: "Free up founder time. We automate your backend operations and build premium websites and cinematic video assets for your startup.",
  keywords: "automation for startup founders, outsourced CTO creative partner, scalable design systems startup, tech team outsourcing",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creative & Automation Services for Founders",
    "description": "Operational automation, landing pages, and pitch deck video design tailored for startup and SaaS founders.",
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

      <main className="seo-page roles-founders">
        <section className="hero-section">
          <p className="tagline">Solutions by Role</p>
          <h1 className="title">Stop working in your business. Start building systems.</h1>
          <p className="subtitle">As a founder, your time should be spent on strategy and product logic—not editing videos, chasing developers, or manually sync databases. Docdril acts as your dedicated creative-tech engine.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Delegate to Docdril</button>
          </div>
        </section>

        <section className="features-section">
          <h2>How We Help Founders Scale</h2>
          <div className="grid">
            <div className="card">
              <h3>Operational Freedom</h3>
              <p>We automate your onboarding pipelines, lead routing, billing cycles, and database syncs, saving hours weekly.</p>
            </div>
            <div className="card">
              <h3>Instant Brand Authority</h3>
              <p>We design custom Next.js landing layouts and edit high-impact founder videos to capture investors and early adopters.</p>
            </div>
            <div className="card">
              <h3>Unified Creative-Tech Stack</h3>
              <p>Eliminate the friction of managing different freelancers. We coordinate design, development, and system logic.</p>
            </div>
          </div>
        </section>
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
