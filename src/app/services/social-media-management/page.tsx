import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Social Media Brand Management & Growth Agency | Docdril",
  description: "Scale your brand's social footprint. We handle full account management, content scheduling, audience growth, and community engagement.",
  keywords: "complete social media brand management, social media growth agency, instagram growth manager, content scheduling service, creator brand handles",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Account Management",
    "description": "Full handling of brand handles, dynamic content calendars, community management, and distribution operations.",
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

      <main className="seo-page services-social-media">
        <section className="hero-section">
          <p className="tagline">Active Services</p>
          <h1 className="title">Own the timeline. Scale your social channels.</h1>
          <p className="subtitle">We manage your brand handles end-to-end. From content scheduling, community management, and graphic assets to audience scaling analytics, we keep your accounts active and growing.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Manage My Handles</button>
          </div>
        </section>

        <section className="specs-section">
          <h2>Full-Service Social Operations</h2>
          <div className="grid">
            <div className="card">
              <h3>Content Scheduling & Distribution</h3>
              <p>Maintaining a consistent publishing cadence across LinkedIn, Twitter/X, Instagram, and YouTube.</p>
            </div>
            <div className="card">
              <h3>Community Engagement</h3>
              <p>Responding to comments, monitoring brand mentions, and starting active community discussions.</p>
            </div>
            <div className="card">
              <h3>Analytics & Growth Reports</h3>
              <p>Weekly metrics tracking engagement rates, follower velocity, and organic traffic referrals.</p>
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
