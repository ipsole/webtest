import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Scaling Operations: Docdril Ecosystem vs. Freelancer Networks",
  description: "Stop chasing freelancers and managing fragmented workflows. Learn why a cohesive creative-tech team scales your product faster.",
  keywords: "hiring design freelancers vs agency, managing freelance video editors, scalable creative production team, freelance developer comparison",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Docdril vs. Freelancers",
    "description": "Analysis of efficiency and consistency metrics when choosing a unified ecosystem versus managing discrete freelance hires."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page vs-freelancers">
        <section className="hero-section">
          <p className="tagline">Operational Scale</p>
          <h1 className="title">Stop managing freelancers. Start building ecosystems.</h1>
          <p className="subtitle">Recruiting, onboarding, and managing three separate freelancers for video editing, front-end development, and Make.com automation is an operational bottleneck. Docdril offers a single, elite creative-tech partnership.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Work with an Engineered Ecosystem</button>
          </div>
        </section>

        <section className="fragmentation-cost-section">
          <h2>The Fragmentation Tax</h2>
          <p className="desc">When your design systems, editing styles, code structures, and automated logic are built by isolated individuals, things break. Style guides diverge, web structures become bloated, and integrations fail.</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Unified Brand Context</h3>
              <p>Our team shares a single, master context folder for your brand's boundaries, guidelines, and visual voice.</p>
            </div>
            <div className="benefit-card">
              <h3>Consistent Standards</h3>
              <p>No code styling conflicts, no mismatched motion graphics, and no disjointed CRM setups.</p>
            </div>
            <div className="benefit-card">
              <h3>Zero Management Overhead</h3>
              <p>You interact with one reliable partner, leaving task routing and system testing entirely to us.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
