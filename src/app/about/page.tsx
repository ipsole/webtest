import { Metadata } from 'next';
import AboutClient from './AboutClient';

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
      <AboutClient />
    </>
  );
}
