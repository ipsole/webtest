import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Docdril & Book a Discovery Call | Docdril",
  description: "Have a project in mind? Contact the Docdril team or book a direct discovery call with our founders to optimize your creative-tech operations.",
  keywords: "contact docdril, book a call docdril, hire video editor SaaS, hire nextjs developer, business automation systems consulting",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Docdril",
    "description": "Form page to submit project parameters or schedule discovery video meetings with Piyush and Arushi.",
    "url": "https://docdril.in/contact"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page contact-page">
        <section className="hero-section">
          <p className="tagline">Connect</p>
          <h1 className="title">Let's build something engineered.</h1>
          <p className="subtitle">Ready to automate operations, refresh your web design, or launch atomic video creatives? Connect with our co-founders Arushi & Piyush today.</p>
        </section>

        <section className="booking-form-section">
          <div className="contact-grid">
            <div className="form-card">
              <h2>Submit Your Specifications</h2>
              <form className="seo-contact-form">
                <div className="input-group">
                  <label htmlFor="client-name">Your Name</label>
                  <input type="text" id="client-name" name="name" required placeholder="John Doe" />
                </div>
                <div className="input-group">
                  <label htmlFor="client-email">Email Address</label>
                  <input type="email" id="client-email" name="email" required placeholder="john@company.com" />
                </div>
                <div className="input-group">
                  <label htmlFor="project-type">Primary Requirement</label>
                  <select id="project-type" name="type">
                    <option value="video">Atomic Video Editing & Motion</option>
                    <option value="web">Premium Next.js Web Design</option>
                    <option value="automation">AI Workflows & Automation</option>
                    <option value="full">Unified Creative-Tech Ecosystem</option>
                  </select>
                </div>
                <div className="input-group">
                  <label htmlFor="project-desc">Brief Project Parameters</label>
                  <textarea id="project-desc" name="desc" placeholder="Details about your current pipeline..." />
                </div>
                <button type="submit" className="cta-button primary">Send Specifications</button>
              </form>
            </div>

            <div className="booking-card">
              <h2>Schedule a Discovery Session</h2>
              <p>Pick a time directly with us to audit your current brand assets, website performance, or manual workflow bottlenecks.</p>
              <div className="calendar-widget-placeholder">
                <p>[Interactive Calendar Booking Widget Widget (e.g. Calendly Link)]</p>
              </div>
              <div className="direct-channels">
                <p>Direct Inquiries: <strong>info@docdril.in</strong></p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
