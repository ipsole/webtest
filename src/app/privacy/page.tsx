import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy & Data Security | Docdril",
  description: "Learn how Docdril manages, secures, and protects client data, software API keys, credentials, and video assets.",
  keywords: "privacy policy docdril, data security compliance, database confidentiality, client asset NDA",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "url": "https://docdril.in/privacy"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page privacy-policy">
        <section className="hero-section">
          <h1 className="title">Privacy Policy & Security Standard</h1>
          <p className="subtitle">Effective Date: June 3, 2026. How we manage, protect, and handle data across our ecosystem.</p>
        </section>

        <section className="legal-content-section">
          <h2>1. Data Confidentiality & Client Assets</h2>
          <p>We work with sensitive customer details, credentials, and product media. All customer information uploaded to our systems is private. We strictly enforce standard Non-Disclosure Agreements (NDAs) for all client workspaces.</p>

          <h2>2. API Keys and Workspace Credentials</h2>
          <p>When engineering Make.com automations, Zapier integrations, or OpenAI API pipelines, we require temporary API credentials. We store all credentials using industry-standard AES-256 encryption. We never share, sell, or reuse developer credentials.</p>

          <h2>3. Cookies and Analytics</h2>
          <p>We collect standard anonymous browser interactions to optimize our page rendering, SEO metadata quality, and landing speed. You can opt out of analytics tracking via browser settings.</p>
        </section>
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
