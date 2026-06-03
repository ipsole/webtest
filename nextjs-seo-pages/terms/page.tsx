import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service & Collaboration Guidelines | Docdril",
  description: "Read our standard service terms, payment schedules, draft revision limits, and intellectual property policies.",
  keywords: "terms of service docdril, contract milestones agency, project advance policy, digital asset ownership",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "url": "https://docdril.in/terms"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page terms-of-service">
        <section className="hero-section">
          <h1 className="title">Terms of Service</h1>
          <p className="subtitle">Effective Date: June 3, 2026. General guidelines governing project agreements and deliverables.</p>
        </section>

        <section className="legal-content-section">
          <h2>1. Standard Payments & Baseline Advances</h2>
          <p>All client projects operate on a structured milestone system. Standard projects require a baseline minimum 20% advance settlement to initialize design or development (reduced to a 15% baseline for returning loyal partners). The remaining 80% balance is due on final approved asset delivery. Scopes are custom-tailored per client agreement.</p>

          <h2>2. Refinement & Draft Revisions</h2>
          <p>We provide 2 free refinement rounds on all video files and design templates. Extra revisions beyond this baseline are subject to additional hourly rate parameters detailed in the service contract.</p>

          <h2>3. Ownership & Intellectual Property</h2>
          <p>Upon final payment settlement, all global intellectual rights for website code, custom designs, and edited video media are fully transferred to the client. Docdril retains permission to display final works in portfolios unless prohibited by an active NDA.</p>
        </section>
      </main>

    </>
  );
}
