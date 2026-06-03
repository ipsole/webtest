import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Docdril Portfolio: Case Studies & Creative-Tech Projects | Docdril",
  description: "Browse our showcase of cinematic video edits, premium Next.js web experiences, and automated AI workflows. Read our client case studies.",
  keywords: "Next.js design portfolio, Make.com automation case study, cinematic video edits portfolio, UI UX design showcase B2B",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Docdril Project Showcase",
    "description": "Showcase of real-world design, development, and automation systems delivered by Docdril."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page work-portfolio">
        <section className="hero-section">
          <p className="tagline">Ecosystem Portfolio</p>
          <h1 className="title">Selected projects engineered by Docdril.</h1>
          <p className="subtitle">Explore real-world case studies detailing how we build high-retention visuals, premium interfaces, and automated intelligence pipelines.</p>
        </section>

        <section className="portfolio-grid-section">
          <div className="portfolio-filters">
            <button className="filter-tab active">All Work</button>
            <button className="filter-tab">Creative</button>
            <button className="filter-tab">Digital</button>
            <button className="filter-tab">Intelligence</button>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <span className="project-category">Intelligence</span>
              <h3>Automated Client Onboarding System</h3>
              <p>How we synchronized Stripe payouts with Google Drive templates, contract signups, and Slack notifications, reducing client setup time from 4 hours to 0 seconds.</p>
            </article>
            <article className="project-card">
              <span className="project-category">Creative</span>
              <h3>Atomic Hooks Reel Campaign</h3>
              <p>A short-form video ad series designed with dynamic pattern interrupts, boosting paid retention rates by 68% for a scaling SaaS company.</p>
            </article>
            <article className="project-card">
              <span className="project-category">Digital</span>
              <h3>Premium Interactive SaaS Layout</h3>
              <p>A performance-first Next.js marketing page with custom scroll animations and server components, achieving a 99 Lighthouse performance score.</p>
            </article>
          </div>
        </section>
      </main>

    </>
  );
}
