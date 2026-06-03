import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Premium LinkedIn Carousel Design & Asset Packs | Docdril",
  description: "Increase your LinkedIn authority and conversions. We design high-converting visual carousel decks and cover graphics.",
  keywords: "premium linkedin carousel design, carousels for SaaS marketing, custom linkedin slide design, creator carousel assets",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "LinkedIn Carousel Design Services",
    "description": "Custom slide deck layouts, interactive assets, and cover templates optimized for B2B brand marketing.",
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

      <main className="seo-page solutions-linkedin-carousels">
        <section className="hero-section">
          <p className="tagline">Creative Solutions</p>
          <h1 className="title">Stand out on B2B timelines with visual storytelling.</h1>
          <p className="subtitle">Standard text posts get ignored. Our premium, engineered LinkedIn carousels combine high-fidelity design systems, typography, and clear pacing to drive lead conversions.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Request Carousel Pack</button>
          </div>
        </section>

        <section className="details-section">
          <h2>Visual Assets Engineered to Convert</h2>
          <div className="grid">
            <div className="card">
              <h3>Scroll-Stopping Covers</h3>
              <p>Bold styling structures and premium brand colors designed to catch eyes on B2B scrolls.</p>
            </div>
            <div className="card">
              <h3>Paced Information Delivery</h3>
              <p>Structuring slide content to build narrative momentum, prompting comments, bookmarks, and clicks.</p>
            </div>
            <div className="card">
              <h3>Matching Theme Packages</h3>
              <p>Fully matched color schemes, font tokens, and graphics that blend into your visual identity.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
