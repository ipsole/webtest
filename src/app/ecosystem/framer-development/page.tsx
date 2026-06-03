import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Framer Development Studio & Interactive Web Designs | Docdril",
  description: "We build fast, pixel-perfect, and animated landing pages in Framer. Get custom web experiences with rapid deployment speed.",
  keywords: "Framer developer for startups, Framer agency, custom Framer design, animated landing pages, web designer Framer",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Framer Development Services",
    "description": "Designing premium interactive websites directly in Framer for swift deployment and marketing control.",
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

      <main className="seo-page ecosystem-framer-development">
        <section className="hero-section">
          <p className="tagline">Ecosystem Integrations</p>
          <h1 className="title">Stunning marketing websites built and launched in days.</h1>
          <p className="subtitle">Get the power of interactive animations and custom design control. We design and build high-converting landing pages in Framer, optimized for rapid startup launches.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Launch on Framer</button>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Why Choose Framer for Your Next Landing Page?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>High-Fidelity Animations</h3>
              <p>Implement scroll triggers, hover effects, and slide transitions that feel premium and native.</p>
            </div>
            <div className="benefit-card">
              <h3>Marketing Autonomy</h3>
              <p>Your team can edit text, publish articles, and launch updates without waiting for developer sprints.</p>
            </div>
            <div className="benefit-card">
              <h3>Responsive Breakpoints</h3>
              <p>Optimized layouts that adapt perfectly to desktop, tablet, and mobile browsers.</p>
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
