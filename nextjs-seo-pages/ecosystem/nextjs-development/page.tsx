import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Next.js Web Development Agency & Framer Integrations | Docdril",
  description: "High-performance React interfaces engineered with Next.js App Router and Framer Motion. We code beautiful websites that load instantly.",
  keywords: "Next.js web development agency, framer developer for startups, premium custom react websites, nextjs app router designer, vanilla css react components",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Next.js Web Engineering & Frontend Design",
    "description": "Next.js App Router development, static page pre-generation, Server Components optimization, and premium UI animations.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    },
    "areaServed": "Worldwide",
    "serviceType": "Frontend Software Engineering"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page ecosystem-nextjs-development">
        <section className="hero-section">
          <p className="tagline">Ecosystem Stack</p>
          <h1 className="title">Modern web development using Next.js.</h1>
          <p className="subtitle">Slow websites kill conversions. We build custom frontends using Next.js App Router, prioritizing Server Components, optimized images, clean CSS styling, and seamless animations to make your web presence premium.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Build a Custom Next.js Site</button>
          </div>
        </section>

        <section className="performance-section">
          <h2>Lightning Fast Load Times. Seamless User Experience.</h2>
          <p className="desc">We strictly follow modern Next.js conventions. By leveraging static site generation (SSG) and incremental static regeneration (ISR), we serve your SEO pages globally within milliseconds via edge hosting networks.</p>
          <div className="specs-grid">
            <div className="spec-card">
              <h3>React Server Components (RSC)</h3>
              <p>Minimize client-side JavaScript payloads for optimal browser performance.</p>
            </div>
            <div className="spec-card">
              <h3>Vanilla CSS Controls</h3>
              <p>High-fidelity custom styling without the overhead of heavy CSS frameworks.</p>
            </div>
            <div className="spec-card">
              <h3>Framer Motion Micro-Animations</h3>
              <p>Smooth layout transitions, reveal animations, and interactive navigation elements.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
