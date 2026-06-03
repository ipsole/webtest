import RelatedContent from '../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Docdril System Status: All Automation Systems Online | Docdril",
  description: "Check the live status and API response logs of Docdril custom databases, AI agent nodes, Make workflows, and hosting channels.",
  keywords: "api uptime logs, database syncing status, nextjs edge hosting speed, system operational dashboard",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "System Status Uptime Logs",
    "description": "Real-time service operational updates for custom databases and client automation pipelines."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page status-dashboard">
        <section className="hero-section">
          <p className="tagline">System Health</p>
          <h1 className="title">All systems fully operational.</h1>
          <p className="subtitle">We build systems that work. Track the live connection speeds, API response logs, and database uptimes across our entire creative-tech ecosystem.</p>
        </section>

        <section className="status-grid-section">
          <div className="status-card-list">
            <div className="status-card online">
              <span className="indicator"></span>
              <span className="service-name">Make.com Scenario Router</span>
              <span className="metric">100% Uptime</span>
            </div>
            <div className="status-card online">
              <span className="indicator"></span>
              <span className="service-name">OpenAI API middleware</span>
              <span className="metric">99.98% Uptime</span>
            </div>
            <div className="status-card online">
              <span className="indicator"></span>
              <span className="service-name">Next.js Edge Server CDN</span>
              <span className="metric">100% Uptime</span>
            </div>
            <div className="status-card online">
              <span className="indicator"></span>
              <span className="service-name">Database Sync Nodes</span>
              <span className="metric">100% Uptime</span>
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
