import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Web Development & Video Assets for SaaS | Docdril",
  description: "Premium landing pages, feature animations, and retention-focused video editing for SaaS builders. Elevate your SaaS growth engine.",
  keywords: "SaaS web development, video editing for SaaS founders, SaaS marketing studio, conversion rate optimization SaaS, software landing page designer",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SaaS Design & Video Editing Ecosystem",
    "description": "Conversion-optimized Next.js code, product video shoots, motion graphics, and workflow systems for SaaS brands.",
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

      <main className="seo-page industries-saas-builders">
        <section className="hero-section">
          <p className="tagline">Industry Verticals</p>
          <h1 className="title">Scale your software conversions with cinematic precision.</h1>
          <p className="subtitle">We build premium Next.js marketing websites and edit high-impact short/long-form videos that show your SaaS features in action, turning casual visitors into active trial signups.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Grow Your SaaS</button>
          </div>
        </section>

        <section className="capabilities-section">
          <h2>Full-Stack Creative Output for SaaS Teams</h2>
          <div className="pillars-grid">
            <div className="pillar-card">
              <h3>Interactive UI/UX Prototypes</h3>
              <p>Transform raw dashboards into functional, responsive web experiences optimized for signups.</p>
            </div>
            <div className="pillar-card">
              <h3>SaaS Product Demos</h3>
              <p>Cinematic, atomic-level video edits explaining complex features in short, punchy 60-second clips.</p>
            </div>
            <div className="pillar-card">
              <h3>Automated User Retention Flows</h3>
              <p>Integrate Stripe event signals with custom email infrastructure (Resend, loops.so) to retain users.</p>
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
