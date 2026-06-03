import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Video Husky Alternatives: Retention-Focused Video Editing",
  description: "Compare unlimited video editing subscriptions with Docdril's retention-focused atomic editing. Fusing science, psychology, and narrative design.",
  keywords: "video husky alternatives, unlimited video editing subscription, video editors B2B startup, professional video editing agency",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Docdril vs. Video Husky",
    "description": "Analyzing retention outcomes and creative capabilities of templates vs custom atomic-level video edits."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page vs-videohusky-alternative">
        <section className="hero-section">
          <p className="tagline">Alternative Analysis</p>
          <h1 className="title">Generic cuts don't win attention. Atomic editing does.</h1>
          <p className="subtitle">Standard video subscriptions chop clips according to template instructions. We design spatial sound, color grades, dynamic assets, and implement psychological hooks to maximize retention rates.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Get a Sample Edit</button>
          </div>
        </section>

        <section className="features-comparison">
          <h2>Why Docdril Outperforms Templated Services</h2>
          <div className="grid">
            <div className="card">
              <h3>Psychological Retention Hooks</h3>
              <p>We analyze viewer behavior patterns to insert visual and audio cues within the first 3 seconds, boosting average view durations.</p>
            </div>
            <div className="card">
              <h3>Custom Creative Assets</h3>
              <p>We don't just edit video; we design matching thumbnails, LinkedIn carousels, and landing layouts for a unified launch campaign.</p>
            </div>
            <div className="card">
              <h3>AI & Tech Workflow Integration</h3>
              <p>We connect our asset delivery pipeline directly to your Google Workspace, Slack, or CMS, reducing onboarding and delivery friction.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
