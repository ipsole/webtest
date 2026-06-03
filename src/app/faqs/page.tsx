import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Docdril",
  description: "Have questions about atomic video editing, Next.js web design, or AI automation workflows? Find all answers on our master FAQ page.",
  keywords: "how docdril works, pricing for AI automation, video editing outsourcing FAQs, NDA for development workflows, refund revisions policy",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is Docdril's standard pricing and payment policy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "We operate on a standard payment model requiring a baseline minimum 20% advance settlement to begin work for new partners (reduced to 15% baseline for returning loyal clients). The remaining 80% is settled upon final delivery. All scopes are fully custom-tailored based on client and project specifications."
            }
        },
        {
            "@type": "Question",
            "name": "How many revisions do we get on deliverables?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For video editing and design assets, we provide 2 free refinement rounds on all drafts prior to final file validation and delivery."
            }
        },
        {
            "@type": "Question",
            "name": "Do you sign Non-Disclosure Agreements (NDAs)?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We prioritize security and confidentiality, especially when designing custom databases and AI workflows. We sign standard NDAs before client onboarding and discovery."
            }
        }
    ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page faqs-page">
        <section className="hero-section">
          <p className="tagline">Information Hub</p>
          <h1 className="title">Frequently Asked Questions</h1>
          <p className="subtitle">Everything you need to know about our creative-tech ecosystem, processes, payment systems, and tools.</p>
        </section>

        <section className="faq-grid-section">
          <h2>General & Process Queries</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>What exactly does Docdril do?</h3>
              <p>Docdril is a hybrid creative-tech ecosystem. We blend creative video editing and motion graphics, premium Next.js frontend design, and background AI/automation workflows to scale digital brands.</p>
            </div>
            <div className="faq-item">
              <h3>How does the 8-step workflow operate?</h3>
              <p>We progress from initial inquiry, discovery meeting, and workflow proposal to contract agreement. Once the onboarding is done and standard advance is settled, we begin production. You validate drafts through 2 free revision rounds before final delivery.</p>
            </div>
            <div className="faq-item">
              <h3>What is the minimum project commitment?</h3>
              <p>We work on both single-milestone projects and recurring monthly system agreements. Standard minimum advance payment baseline starts at 20% for new accounts (15% for loyal clients).</p>
            </div>
            <div className="faq-item">
              <h3>Do we own the source files?</h3>
              <p>Yes. Upon final delivery and balance settlement, all ownership of source code, Figma assets, and raw video edits is fully transferred to your brand.</p>
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
