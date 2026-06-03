import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How Docdril Works: The Creative-Tech Process | Docdril",
  description: "Explore the 8-step client workflow pipeline. Learn how Docdril integrates video editing, web design, and AI automation into a unified process.",
  keywords: "how docdril works, creative tech ecosystem model, docdril delivery workflow, agency onboarding process, baseline pricing rules",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Collaborate with Docdril",
    "description": "Understand the step-by-step process of client onboarding, advance settlements, narrative staging, edits, and deliverables validation.",
    "step": [
        {
            "@type": "HowToStep",
            "name": "Enquiry",
            "text": "Submit project specifications and requirements."
        },
        {
            "@type": "HowToStep",
            "name": "Online Discovery",
            "text": "Align on target messaging, visual voice, and system objectives."
        },
        {
            "@type": "HowToStep",
            "name": "Workflow Presentation",
            "text": "Validate our structured narrative and template architecture blueprints."
        },
        {
            "@type": "HowToStep",
            "name": "Project Kickoff",
            "text": "Confirm scope, settle the standard minimum advance payment, and launch sandbox setups."
        }
    ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page how-it-works">
        <section className="hero-section">
          <p className="tagline">Our Methodology</p>
          <h1 className="title">A clear, simple, and professional process.</h1>
          <p className="subtitle">We combine creative precision with technical engineering. Here is exactly how we onboarding, design, automate, and deliver premium assets for your brand.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Get Started Today</button>
          </div>
        </section>

        <section className="timeline-section">
          <h2>The 8-Step Collaboration Timeline</h2>
          <div className="timeline">
            <div className="step-block">
              <h3>1. Leads / Enquiry</h3>
              <p>Submit your raw details, current files, or project goals. We analyze your requirements and get back in under 12 hours.</p>
            </div>
            <div className="step-block">
              <h3>2. Discovery Meeting</h3>
              <p>We hop on a brief call to align on your brand's voice, aesthetic targets, integrations, and long-term ecosystem direction.</p>
            </div>
            <div className="step-block">
              <h3>3. Workflow Proposal</h3>
              <p>We present our workflow outline, custom template blueprints, and integration route maps for your final validation.</p>
            </div>
            <div className="step-block">
              <h3>4. Deal Confirmation</h3>
              <p>We align on scope limits, timeline schedules, and deliverable items before drafting agreements.</p>
            </div>
            <div className="step-block">
              <h3>5. Client Onboarding</h3>
              <p>You get access to a private dashboard space, and shared assets directories, keeping communication clean.</p>
            </div>
            <div className="step-block">
              <h3>6. Standard Advance Settlement</h3>
              <p>We trigger kickoff upon a standard minimum 20% advance payment settlement (reduced to 15% baseline for returning partners, fully customizable depending on project specs).</p>
            </div>
            <div className="step-block">
              <h3>7. Production & Revisions</h3>
              <p>Our engineers and creatives work in parallel. We provide 2 free refinement rounds on all video and design outputs before deployment.</p>
            </div>
            <div className="step-block">
              <h3>8. Final Delivery & Launch</h3>
              <p>Upon final approval and the remaining 80% settlement, we deploy files to your hosting/folders and launch integrations live.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
