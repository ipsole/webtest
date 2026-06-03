import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Retention-Focused Video Ad Creative Services | Docdril",
  description: "Maximize ad spend ROAS. We design and edit psychological, retention-optimized video ads for SaaS, products, and modern brands.",
  keywords: "retention ad video editor, short form ad editing agency, high converting ad creatives, SaaS video ads designer",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retention Ad Creative Design",
    "description": "Video ad editing optimized for paid social channels (Meta, TikTok, YouTube Ads) utilizing visual engagement metrics.",
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

      <main className="seo-page solutions-ad-creatives">
        <section className="hero-section">
          <p className="tagline">Creative Solutions</p>
          <h1 className="title">Stop wasting ad spend on low-retention creatives.</h1>
          <p className="subtitle">Most ad videos lose 70% of viewers in the first 3 seconds. We engineer psychological hooks, custom visual patterns, and clear call-to-actions that keep eyes glued and drive direct clicks.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Optimize Your Ads</button>
          </div>
        </section>

        <section className="methods-section">
          <h2>Retention-Optimized Editing Methods</h2>
          <div className="grid">
            <div className="card">
              <h3>Pattern Interrupts</h3>
              <p>Injecting sudden visual shifts, zooms, and custom sound FX within critical seconds to reset viewer attention span.</p>
            </div>
            <div className="card">
              <h3>Problem-Solution Narrative Flow</h3>
              <p>Structuring the raw script to outline a pain point instantly, presenting your software solution, and guiding users to click.</p>
            </div>
            <div className="card">
              <h3>Multi-Platform Formatting</h3>
              <p>Delivering ad assets in exact dimensions (9:16 vertical, 1:1 square, 16:9 landscape) optimized for ad channels.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
