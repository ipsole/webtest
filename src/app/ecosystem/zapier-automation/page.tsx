import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zapier Automation Consultants & Workflow Systems | Docdril",
  description: "Connect your apps and automate processes with Zapier. We design custom workflow zaps, webhooks, and database synchronization pipelines.",
  keywords: "Zapier workflow setup, Zapier consultant B2B, Zapier agency, automated CRM pipelines, business process automation Zapier",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zapier Automation Consulting",
    "description": "Connecting software stacks using multi-step Zapier automation logic and webhook configurations.",
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

      <main className="seo-page ecosystem-zapier-automation">
        <section className="hero-section">
          <p className="tagline">Ecosystem Integrations</p>
          <h1 className="title">Bridge your software gaps with custom Zapier workflows.</h1>
          <p className="subtitle">Let your team focus on high-value tasks. We setup automated CRM updates, instant email notifications, lead routing pipelines, and Slack notifications using Zapier.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Build a Zapier Pipeline</button>
          </div>
        </section>

        <section className="features-section">
          <h2>Connect Your Everyday Business Tools</h2>
          <p className="desc">We build multi-step Zaps, handle custom code steps (JavaScript/Python in Zapier), resolve error loops, and synchronize historical data across databases.</p>
          <div className="grid">
            <div className="card">
              <h3>Lead Ingestion</h3>
              <p>Connect Ad platforms (Facebook/Google Ads) to HubSpot, scoring and routing leads instantly.</p>
            </div>
            <div className="card">
              <h3>Finance Pipelines</h3>
              <p>Sync payment gateways (Stripe/Paypal) with QuickBooks, Google Sheets, and slack alerts.</p>
            </div>
            <div className="card">
              <h3>Client Spaces</h3>
              <p>Auto-invite clients to Slack channels, Notion hubs, and calendar invites on booking.</p>
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
