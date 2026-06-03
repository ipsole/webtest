import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Docdril: The Creative-Tech Ecosystem & Our Philosophy",
  description: "Meet our founders Arushi & Piyush. Discover the 'Doc' and 'dril' philosophy behind our creative, digital, and intelligence pipelines.",
  keywords: "Docdril founders, Piyush and Arushi Docdril, Docdril creative-tech ecosystem, operational creativity philosophy",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
        "@type": "Organization",
        "name": "Docdril",
        "founder": [
            {
                "@type": "Person",
                "name": "Piyush"
            },
            {
                "@type": "Person",
                "name": "Arushi"
            }
        ],
        "email": "info@docdril.in"
    }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page about-page">
        <section className="hero-section">
          <p className="tagline">Who We Are</p>
          <h1 className="title">Operative creativity at the intersection of design and systems.</h1>
          <p className="subtitle">We believe that creativity should scale, technology should feel human, and modern brands should operate intelligently. This is the foundation of Docdril.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Meet the Founders</button>
          </div>
        </section>

        <section className="philosophy-section">
          <h2>Defining the Brand: "Doc" + "dril"</h2>
          <div className="philosophy-details">
            <div className="philosophy-block">
              <h3>"Doc" (Documentary)</h3>
              <p>The Foundation. We source, research, and structure raw information, storytelling parameters, and brand context down to the atom. We analyze your systems to extract the core.</p>
            </div>
            <div className="philosophy-block">
              <h3>"dril" (Drilling)</h3>
              <p>The Extraction. We drill down past the marketing fluff to discover the content, meaningfulness, and absolute utility inside your data, making sure every cut, line of code, and automation delivers ROI.</p>
            </div>
          </div>
        </section>

        <section className="founders-section">
          <h2>Engineered by Founders, for Founders</h2>
          <p className="desc">Docdril was established by Arushi and Piyush to bridge the gap between creative expression and technical execution. Having worked with digital brands, creators, and SaaS setups, they built Docdril to serve as an outsourced, scalable growth engine for modern operators.</p>
          <div className="founders-grid">
            <div className="founder-card">
              <h3>Arushi</h3>
              <p className="role">Co-Founder & Creative Director</p>
              <p>Oversees creative execution, cinematic alignment, video production, and visual identities, ensuring every piece of media triggers high emotional response and matches premium standards.</p>
            </div>
            <div className="founder-card">
              <h3>Piyush</h3>
              <p className="role">Co-Founder & Technical Director</p>
              <p>Directs front-end engineering, database architecture, AI integrations, and Make.com/Zapier automation systems, ensuring operational setups scale without lag or bugs.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
