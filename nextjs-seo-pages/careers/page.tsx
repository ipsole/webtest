import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Careers at Docdril: Join the Creative-Tech Ecosystem | Docdril",
  description: "Are you a video editor, front-end engineer, or automation builder? Apply to join the Docdril team and shape operational creativity.",
  keywords: "jobs design agency, apply video editor, hire automation engineer, front-end developer jobs B2B",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Careers at Docdril",
    "description": "Application portal for creators, developers, and automation consultants to join the Docdril team."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page careers-page">
        <section className="hero-section">
          <p className="tagline">Join Us</p>
          <h1 className="title">Shape the next era of storytelling and systems.</h1>
          <p className="subtitle">We are always searching for elite creatives, performance-first Next.js developers, and Make.com automation architects. Explore open scopes with Docdril.</p>
        </section>

        <section className="jobs-list-section">
          <h2>Active Roles</h2>
          <div className="roles-list">
            <div className="role-item">
              <h3>Atomic Video Editor</h3>
              <p className="job-specs">Remote / Contract. Requires strong aesthetic pacing, spatial sound engineering, and retention hooks analysis.</p>
            </div>
            <div className="role-item">
              <h3>Next.js Frontend Developer</h3>
              <p className="job-specs">Remote / Contract. Requires strong experience in React Server Components, custom design tokens, and Lighthouse page speed optimization.</p>
            </div>
            <div className="role-item">
              <h3>Automation & Systems Builder</h3>
              <p className="job-specs">Remote / Contract. Requires strong experience mapping custom API connectors in Make.com, Zapier, and database webhook logs.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
