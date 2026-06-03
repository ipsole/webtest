import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Docdril for Creators: High-Retention Video & Thumbnails",
  description: "We deliver premium atomic video edits, custom cover art, and automated publishing pipelines for content creators and studios.",
  keywords: "video editing for content creators, thumbnail design packages, youtube cinematic editors, creator pipelines",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creator Support & Editing Ecosystem",
    "description": "Atomic short-form and long-form video editing, visual design systems, and digital distribution systems for creator channels.",
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

      <main className="seo-page roles-creators">
        <section className="hero-section">
          <p className="tagline">Solutions by Role</p>
          <h1 className="title">Delegate editing and asset production. Focus on scripting.</h1>
          <p className="subtitle">Stop wasting hours color grading, managing directories, and designing covers. Docdril provides retention-engineered video edits and thumbnail bundles, handling backend asset delivery.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Scale Your Channel</button>
          </div>
        </section>

        <section className="benefits-section">
          <h2>High-Fidelity Post-Production Support</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Atomic Hook Editing</h3>
              <p>Visual and auditory retention hooks designed to capture eyes within scroll-off zones.</p>
            </div>
            <div className="benefit-card">
              <h3>Branded Asset Bundles</h3>
              <p>Custom cover art, LinkedIn carousels, and visual templates matching your video aesthetic.</p>
            </div>
            <div className="benefit-card">
              <h3>Automated Media Pipelines</h3>
              <p>Connect folder shares to video drives, automating notifications when drafts are ready for approval.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
