import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom OpenAI & Anthropic API Integrations | Docdril",
  description: "Supercharge your business with generative AI. We integrate OpenAI, Claude, and custom LLM workflows to handle business intelligence tasks.",
  keywords: "custom OpenAI API integrations, Claude AI workflow builder, AI agent development agency, generative AI integration business, langchain developer services",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Generative AI Integration Services",
    "description": "Engineering API connectors to LLMs, custom retrieval-augmented generation (RAG) databases, and specialized AI agents.",
    "provider": {
        "@type": "LocalBusiness",
        "name": "Docdril",
        "email": "info@docdril.in"
    },
    "areaServed": "Worldwide",
    "serviceType": "Artificial Intelligence Integrations"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page ecosystem-ai-workflows">
        <section className="hero-section">
          <p className="tagline">Ecosystem Intelligence</p>
          <h1 className="title">Practical AI systems built for operational growth.</h1>
          <p className="subtitle">Don't build hype. Build systems. We integrate state-of-the-art Large Language Models (LLMs) from OpenAI and Anthropic into your daily business processes, allowing you to synthesize data, draft content, and automate decisions.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Automate with AI</button>
          </div>
        </section>

        <section className="capabilities-section">
          <h2>Move Beyond Simple AI Wrappers</h2>
          <p className="desc">True AI utility comes from data context. We build RAG (Retrieval-Augmented Generation) systems and custom tool-use agents that interact directly with your company databases, CRMs, and project software, returning accurate inputs without hallucinating.</p>
          <div className="cases-grid">
            <div className="case-card">
              <h3>Contextual Copywriting Engines</h3>
              <p>Synthesize brand positioning guidelines to generate matching social, email, or ad drafts automatically.</p>
            </div>
            <div className="case-card">
              <h3>Automated Support Analysts</h3>
              <p>Pre-process client tickets, determine intent, extract account history, and prepare accurate response proposals.</p>
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
