import { Metadata } from 'next';
import RelatedContent from '../../components/RelatedContent';

export const metadata: Metadata = {
  title: "Docdril Pricing: Standard Packages & Baseline Payments | Docdril",
  description: "Learn about our standard minimum advance payment baseline and custom packages for video editing, web design, and AI automation workflows.",
  keywords: "SaaS video editing pricing, Next.js web design packages, business automation costs, project retainer fees, docdril advance models",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Docdril Project Pricing",
    "description": "Overview of minimum project sizes, hourly scopes, and standard advance payment models (20% for new clients / 15% for loyal clients)."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page pricing-page">
        <section className="hero-section">
          <p className="tagline">Investment Baselines</p>
          <h1 className="title">Structured value. Transparent pricing guidelines.</h1>
          <p className="subtitle">We don't sell hourly fluff. We build functional systems and visual assets. All plans are custom-tailored, starting with standard minimum advances.</p>
        </section>

        <section className="pricing-grid-section">
          <div className="packages-grid">
            <div className="package-card">
              <h3>Creative Baseline</h3>
              <p className="price">Custom scopes</p>
              <p className="desc">Premium video editing (short/long form), custom sound grading, cover carousels, and visual typography assets.</p>
              <ul className="package-features">
                <li>Atomic Hook structures</li>
                <li>2 free revisions included</li>
                <li>Full source delivery</li>
              </ul>
            </div>
            <div className="package-card featured">
              <h3>Digital Baseline</h3>
              <p className="price">Custom scopes</p>
              <p className="desc">Next.js or Framer landing layout development, interactive design tokens, and SEO search optimization.</p>
              <ul className="package-features">
                <li>Performance-first Next.js</li>
                <li>Full JSON-LD structured schemas</li>
                <li>Responsive mobile optimization</li>
              </ul>
            </div>
            <div className="package-card">
              <h3>Intelligence System</h3>
              <p className="price">Custom scopes</p>
              <p className="desc">Make.com / Zapier automation scenarios, custom OpenAI APIs, and bi-directional CRM syncing pipelines.</p>
              <ul className="package-features">
                <li>Error logging and retries</li>
                <li>Full security sandboxing</li>
                <li>30 days post-launch support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="payment-terms-section">
          <h2>Our Standard Payment Principles</h2>
          <p>We work with verified brands on simple terms: <strong>Standard 20% minimum advance settlement</strong> to kickoff production (reduced to <strong>15% baseline</strong> for returning loyal partners). The remaining 80% balance is cleared upon final approved delivery.</p>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
