import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Atomic Video Editing & Creative Assets for Creators | Docdril",
  description: "High-retention video editing, thumbnail packages, and automated social distribution tools. Scale your creator business with Docdril.",
  keywords: "video editing for content creators, thumbnail design packages, youtube cinematic editors, creators agency, content scaling software",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Creator Growth Engine",
    "description": "Atomic-level short form edits, long form video production, and social asset packaging tailored for high-scale creators.",
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

      <main className="seo-page industries-content-creators">
        <section className="hero-section">
          <p className="tagline">Industry Verticals</p>
          <h1 className="title">Focus on raw creation. We handle editing and pipelines.</h1>
          <p className="subtitle">Don't waste hours editing videos and managing files. Docdril delivers retention-engineered short-form, long-form content, custom cover art, and automates your asset distribution pipelines.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Request Creator Edit</button>
          </div>
        </section>

        <section className="features-section">
          <h2>Unlocking Dynamic Retention Loops</h2>
          <div className="grid">
            <div className="card">
              <h3>Atomic Sound Design</h3>
              <p>Custom ambient transitions, spatial audio effects, and generated backing beats.</p>
            </div>
            <div className="card">
              <h3>Visual Hook Systems</h3>
              <p>Dynamic subtitles, pop-up motion graphics, and stock footages that keep scroll-offs at zero.</p>
            </div>
            <div className="card">
              <h3>Multi-Platform Slicing</h3>
              <p>We take your long-form footage and crop it into multiple high-converting short reels and shorts.</p>
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
