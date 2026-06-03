import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Generative AI Music & Soundtracks | Docdril",
  description: "Premium, custom AI-generated music and backing tracks for video creatives, ads, and digital branding. Sound unique with Docdril.",
  keywords: "generative AI music production, custom brand soundtracks, royalty free AI beats, sound design agency, AI audio creator",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generative AI Sound & Music Production",
    "description": "Custom licensing, backing tracks, sound engineering, and generated tracks tailored for video assets and commercial ads.",
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

      <main className="seo-page services-ai-music">
        <section className="hero-section">
          <p className="tagline">Active Services</p>
          <h1 className="title">Custom soundtracks engineered for your brand.</h1>
          <p className="subtitle">Stop using generic royalty-free stock music. We leverage generative AI algorithms and digital audio workstations to produce custom backing tracks, theme beats, and audio environments unique to your brand.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Generate Custom Audio</button>
          </div>
        </section>

        <section className="audio-types-section">
          <h2>Tailored Audio Offerings</h2>
          <div className="grid">
            <div className="card">
              <h3>Ad-Creative Backing Beats</h3>
              <p>Rhythmic, high-energy background audios engineered to increase ad-creative retention hook rates.</p>
            </div>
            <div className="card">
              <h3>Brand Themes & Melodies</h3>
              <p>Sleek, atmospheric theme identifiers for founder intro clips and long-form features.</p>
            </div>
            <div className="card">
              <h3>Custom Audio Licensing</h3>
              <p>100% royalty-free, exclusive copyright ownership on all custom AI generated scores.</p>
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
