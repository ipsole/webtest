import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Creative & Tech Ecosystem for AI Startups | Docdril",
  description: "We build premium design systems, high-speed Next.js landing pages, and AI workflow systems for AI founders and startups. Scale your operational creativity.",
  keywords: "creative agency for AI startups, AI product design studio, machine learning website developer, startup tech partner, custom AI software dev",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creative & Tech Services for AI Startups",
    "description": "Dedicated interface designs, Next.js setups, and automated LLM workflows tailored to accelerate AI startups.",
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

      <main className="seo-page industries-ai-startups">
        <section className="hero-section">
          <p className="tagline">Industry Verticals</p>
          <h1 className="title">Engineered visual systems for AI founders.</h1>
          <p className="subtitle">AI models need premium interfaces to communicate their value. We build high-fidelity Next.js websites, interactive product demos, and background AI workflows that match your backend complexity.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">Launch Your AI Interface</button>
          </div>
        </section>

        <section className="solutions-section">
          <h2>Accelerating AI Development Pipelines</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>High-Fidelity Interactive Demos</h3>
              <p>Showcase LLM capability, vector search speeds, or prompt routing visually before users even sign up.</p>
            </div>
            <div className="feature-card">
              <h3>Custom AI-Agent Middleware</h3>
              <p>Connect your core AI models to Stripe, Slack, or Notion using custom webhooks and Make.com routers.</p>
            </div>
            <div className="feature-card">
              <h3>Futuristic Visual Branding</h3>
              <p>Premium dark-mode UI, custom 3D logos, and motion graphics that define your AI brand identity.</p>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}
