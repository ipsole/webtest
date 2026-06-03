import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Make.com Automation Experts & Workflow Developers | Docdril",
  description: "Automate your business operations using Make.com (formerly Integromat). We design and build robust, cost-effective automation systems.",
  keywords: "Make.com workflow developer, Make.com automation agency, automated client onboarding, integromat developer services, business process automation expert",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Make.com Automation Consulting",
    "description": "Custom Make.com (Integromat) integration services to link APIs, apps, and databases into cohesive automated workflows.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    },
    "areaServed": "Worldwide",
    "serviceType": "Software Integration & Automation"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page ecosystem-make-automation">
        <section className="hero-section">
          <p className="tagline">Ecosystem Integrations</p>
          <h1 className="title">Unleash the full power of Make.com automation.</h1>
          <p className="subtitle">Avoid expensive custom backend code. We build robust, visual, and highly maintainable automation systems on Make.com that connect your favorite apps and APIs into cohesive workflows.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Deploy a Make.com System</button>
          </div>
        </section>

        <section className="solutions-section">
          <h2>Visual Logic. Engineered Stability.</h2>
          <p className="desc">Make.com provides unmatched flexibility to route data, handle complex conditional paths, and process JSON payloads. Our engineers construct clean, error-handled Make scenarios that streamline your entire workflow.</p>
          <div className="examples-grid">
            <div className="example-card">
              <h3>Dynamic File & Directory Systems</h3>
              <p>Auto-create Google Workspace / Dropbox folders when contracts are signed, matching folder templates with exact metadata.</p>
            </div>
            <div className="example-card">
              <h3>E-Commerce & Stripe Operations</h3>
              <p>Trigger customized email onboarding, invoice drafting, and client access setups on Stripe event signals.</p>
            </div>
            <div className="example-card">
              <h3>CRM Synchronizers</h3>
              <p>Keep HubSpot, Salesforce, Pipedrive, and Slack instantly updated without manual record duplication.</p>
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
