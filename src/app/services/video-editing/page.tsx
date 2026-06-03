import { Metadata } from 'next';
import RelatedContent from '../../../components/RelatedContent';

export const metadata: Metadata = {
  title: "Atomic & Cinematic Video Editing Services for SaaS & Creators | Docdril",
  description: "We fuse science, psychology, and storytelling to craft high-impact short-form and long-form videos. Partner with Docdril to capture attention and scale your brand.",
  keywords: "atomic video editing agency, cinematic video editing for SaaS, premium short-form video editing, long-form video production startup, attention retention video editing",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Atomic & Cinematic Video Editing Services",
    "description": "Premium video editing utilizing psychology, advanced motion graphics, and atomic-level precision cuts to maximize viewer retention.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        }
    },
    "areaServed": "Worldwide",
    "serviceType": "Video Production & Editing"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page services-video-editing">
        <section className="hero-section">
          <p className="tagline">Video & Motion Ecosystem</p>
          <h1 className="title">Every second of attention counts. We make it count for you.</h1>
          <p className="subtitle">Docdril fuses science, psychology, and storytelling to craft video content that does not just impress, but influences. From atomic-level micro-edits to cinematic long-form features, we engineer viewer retention.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Request a Free Sample Edit</button>
          </div>
        </section>

        <section className="atomic-difference-section">
          <h2>Crafting Engagement at the Micro-Second Level</h2>
          <p className="desc">Traditional agencies cut clips; we engineer retention loops. Our proprietary Atomic Editing framework optimizes every frame, cut, transition, and sound design element to trigger psychological hooks that keep viewers scrolling.</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>4K Cinematic Grade</h3>
              <p>High-fidelity color grading, text animation, and premium typography.</p>
            </div>
            <div className="feature-card">
              <h3>Sound Design & Score</h3>
              <p>Custom spatial sound FX and AI-integrated music creation.</p>
            </div>
            <div className="feature-card">
              <h3>Attention Visuals</h3>
              <p>Custom motion graphics, overlays, and stock footage curation.</p>
            </div>
            <div className="feature-card">
              <h3>AI-Enhanced Workflows</h3>
              <p>Advanced tooling to analyze retention and automate asset resizing.</p>
            </div>
          </div>
        </section>

        <section className="deliverables-section">
          <h2>Scalable Deliverables for Modern Creators & SaaS Brands</h2>
          <div className="options-grid">
            <div className="option-card">
              <h3>Reel / Ad-Form Videos</h3>
              <p>Short, high-impact content designed to hook in under 60 seconds. Optimized for TikTok, Instagram Reels, and YouTube Shorts.</p>
            </div>
            <div className="option-card">
              <h3>Short-Form Content</h3>
              <p>Engaging videos from 1 to 5 minutes. Perfect for product walk-throughs, updates, and brand announcements.</p>
            </div>
            <div className="option-card">
              <h3>Long-Form Narratives</h3>
              <p>Deep-dive features from 5 to 10 minutes. Tailored for founder documentaries, case studies, and thought leadership.</p>
            </div>
            <div className="option-card">
              <h3>Very Long-Form Documentaries</h3>
              <p>Comprehensive features exceeding 10 minutes. Designed for masterclasses and deep industry education.</p>
            </div>
            <div className="option-card">
              <h3>Creative Asset Bundles</h3>
              <p>High-converting custom thumbnails, cover pages, and LinkedIn carousel templates matching the video aesthetic.</p>
            </div>
          </div>
        </section>

        <section className="workflow-section">
          <h2>From Vision to Final Cut in 8 Structured Steps</h2>
          <ol className="workflow-list">
            <li><strong>Leads / Enquiry</strong>: Submit your raw details and goals.</li>
            <li><strong>Discovery & Online Meeting</strong>: We align on target messaging and visual style.</li>
            <li><strong>Workflow Presentation</strong>: We present the narrative arc and design template.</li>
            <li><strong>Deal Confirmation</strong>: Agree on project scopes, timelines, and deliverables.</li>
            <li><strong>Client Onboarding</strong>: Access your dedicated project space and asset drives.</li>
            <li><strong>Base Setup</strong>: Clear 20% standard minimum advance settlement to begin production (reduced to 15% baseline for returning partners, customized per project scale).</li>
            <li><strong>Production & Revisions</strong>: Collaborative drafting with 2 free revision rounds per video.</li>
            <li><strong>Final Delivery & Success</strong>: Secure 80% balance settlement and launch optimized assets.</li>
          </ol>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
