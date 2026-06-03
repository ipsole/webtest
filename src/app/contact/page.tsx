import { Metadata } from 'next';
import ContactClient from './ContactClient';

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
      <ContactClient />
    </>
  );
}
