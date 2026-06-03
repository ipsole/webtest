import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automated Client Onboarding Workflows & Systems | Docdril",
  description: "Improve your client experience and save hours of manual setup. We build automated onboarding pipelines using Make.com and Zapier.",
  keywords: "automated client onboarding workflow, how to automate client setup, client onboarding automation, B2B workflow consulting",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Client Onboarding Automation",
    "description": "Automated pipelines linking sales signoffs with client portal generation, agreements, folder setups, and welcome emails.",
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

      <main className="seo-page solutions-automated-onboarding">
        <section className="hero-section">
          <p className="tagline">Operational Solutions</p>
          <h1 className="title">First impressions matter. Automate your client onboarding.</h1>
          <p className="subtitle">Stop copying templates, generating shared folders, and drafting welcome emails manually. We build systems that auto-create your client directories, send contracts, and sync portals when a client signs.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Automate Your Onboarding</button>
          </div>
        </section>

        <section className="flow-section">
          <h2>The Automated Client Journey</h2>
          <ol className="flow-list">
            <li><strong>Trigger</strong>: Lead settles invoice on Stripe or signs contract in DocuSign.</li>
            <li><strong>Setup</strong>: Make.com auto-generates custom client folder structures in Google Workspace/Dropbox.</li>
            <li><strong>Space</strong>: Auto-invites client to Slack channels, Notion client hubs, and welcome calls.</li>
            <li><strong>Welcome</strong>: Sends a highly personalized email detailing instructions, credentials, and initial asset uploads.</li>
          </ol>
        </section>
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
