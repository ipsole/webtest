import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "On-Location Video Shoots & Production Network | Docdril",
  description: "Professional video shoots and on-location production. We collaborate with top vetted cinematography agencies to direct high-fidelity shoots.",
  keywords: "on location video production, corporate video shoots, professional camera crews, video shoots agency partnership, directing brand videos",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Collaborative Video Production & Shoots",
    "description": "Directing and managing high-fidelity shoots through our verified agency and camera crew network.",
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

      <main className="seo-page services-video-shoots">
        <section className="hero-section">
          <p className="tagline">Collaborative Partnerships</p>
          <h1 className="title">Directing high-fidelity shoots through our production network.</h1>
          <p className="subtitle">While our core is editing, design, and automation, we partner with top-tier cinematography agencies and local camera crews to orchestrate, direct, and execute high-fidelity on-location video shoots.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Inquire About Shoots</button>
          </div>
        </section>

        <section className="partner-network-section">
          <h2>Our Cooperative Production Model</h2>
          <p className="desc">We handle the scripting, creative direction, and visual pacing blueprints, then bring in our verified shoot partners to capture raw high-fidelity footage. We then run post-production in-house.</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Creative Direction</h3>
              <p>Detailed scripting, hook setups, visual storyboards, and director notes prior to camera rolls.</p>
            </div>
            <div className="benefit-card">
              <h3>Vetted Production Crews</h3>
              <p>Access to professional camera, lighting, and sound operators matching our premium standards.</p>
            </div>
            <div className="benefit-card">
              <h3>Seamless Post-Sync</h3>
              <p>Raw footage moves directly into our Atomic Editing pipeline, guaranteeing zero delay between capture and edits.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
