import RelatedContent from '../../../components/RelatedContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Designjoy Alternatives: Why Integrated Ecosystems Scale Faster",
  description: "Compare Designjoy flat-rate subscriptions with Docdril's integrated creative-tech ecosystem. Get custom web development, video, and AI workflows.",
  keywords: "designjoy alternatives, flat rate design agency comparison, unlimited design subscription alternative, custom website designer agency",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Docdril vs. Designjoy",
    "description": "An analytical comparison focusing on the limitations of pure-design retainers versus integrated code, motion, and automation solutions."
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="seo-page vs-designjoy-alternative">
        <section className="hero-section">
          <p className="tagline">Alternative Analysis</p>
          <h1 className="title">Move beyond flat Figma designs. Build functional systems.</h1>
          <p className="subtitle">Designjoy delivers beautiful Figma files, but you still have to code them and setup automations. Docdril designs, codes in Next.js, edits videos, and builds AI workflows under one ecosystem.</p>
          <div className="cta-wrapper">
            <button className="cta-button primary">See the Docdril Advantage</button>
          </div>
        </section>

        <section className="contrast-section">
          <h2>The Comparison</h2>
          <div className="comparison-table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Criteria</th>
                  <th>Designjoy Subscription</th>
                  <th>Docdril Creative-Tech Ecosystem</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Core Focus</strong></td>
                  <td>Figma design assets only</td>
                  <td>Design + Web Engineering + Automations</td>
                </tr>
                <tr>
                  <td><strong>Video & Motion</strong></td>
                  <td>Not included</td>
                  <td>Atomic Video Editing (Short & Long-form)</td>
                </tr>
                <tr>
                  <td><strong>Web Development</strong></td>
                  <td>Add-on cost or none</td>
                  <td>Native Next.js & Framer development</td>
                </tr>
                <tr>
                  <td><strong>Intelligence & AI</strong></td>
                  <td>Not available</td>
                  <td>Custom AI workflows & Make/Zapier setups</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <RelatedContent />
        </div>
      </main>

    </>
  );
}
