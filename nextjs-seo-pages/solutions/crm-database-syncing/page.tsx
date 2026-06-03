import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CRM Database Automations & Syncing Solutions | Docdril",
  description: "Sync HubSpot, Notion, Airtable, and Salesforce automatically. Eliminate duplicate data entry and sync business information dynamically.",
  keywords: "sync HubSpot with Notion automatically, CRM database automations, automated data entry CRM, no code syncing solutions",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CRM Syncing & Database Automations",
    "description": "Technical middleware setups to maintain real-time bi-directional sync across B2B CRM databases and dashboards.",
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

      <main className="seo-page solutions-crm-syncing">
        <section className="hero-section">
          <p className="tagline">Operational Solutions</p>
          <h1 className="title">Maintain a single, automated source of business truth.</h1>
          <p className="subtitle">Stop wasting hours updating customer records in multiple tools. We construct real-time syncing pipelines that bind your CRM databases, internal Notion hubs, and client sheets together.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Sync Your Databases</button>
          </div>
        </section>

        <section className="details-section">
          <h2>Real-Time Bi-Directional Synchronization</h2>
          <p className="desc">We handle API limitations, prevent infinite update loops, implement data validation checks, and clean duplicate records automatically.</p>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Sync HubSpot & Notion</h3>
              <p>Keep customer statuses and billing events perfectly aligned across marketing and fulfillment workspaces.</p>
            </div>
            <div className="feature-card">
              <h3>Airtable & Sheets Hubs</h3>
              <p>Expose customized views of internal databases to clients without compromising backend security rules.</p>
            </div>
            <div className="feature-card">
              <h3>Error-Proof Middleware</h3>
              <p>Every data sync includes logs and retry handlers to ensure no customer detail is dropped.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
