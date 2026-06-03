import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="seo-page not-found-page">
      <section className="hero-section">
        <h1 className="title">404 - System Route Lost</h1>
        <p className="subtitle">The page or automated workflow node you are looking for does not exist or has been relocated.</p>
        <div className="cta-wrapper">
          <Link href="/" className="cta-button primary">Return Home</Link>
          <Link href="/services" className="cta-button secondary">Explore Services</Link>
        </div>
      </section>
    </main>
  );
}
