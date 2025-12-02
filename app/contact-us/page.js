// app/contact/page.js
import Script from "next/script";

import ContactInfoGrid from "./ContactInfoGrid";
import FooterSection from "../components/FooterSection";
import StaticNavbarPuja from "../components/StaticNavbarPuja";
import AboutBanner from "./AboutBanner";
import ContactSection from "../components/ContactSection";
import FloatingContacts from "../components/FloatingContacts";
import FloatingContacts2 from "../components/FloatingContacts2";

// 1) Proper metadata for app router
export const metadata = {
  title: "Contact Narayan Bali Pooja Services | Book Your Ritual",
  description:
    "Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja",
  openGraph: {
    title: "Contact Narayan Bali Pooja Services | Book Your Ritual",
    description:
      "Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja",
    url: "https://narayanabalipoojaservices.com/contact",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Narayan Bali Pooja Services",
      },
    ],
    siteName: "Narayan Bali Pooja Services",
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://narayanabalipoojaservices.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Narayan Bali Pooja Services | Book Your Ritual",
    description:
      "Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja",
    images: [
      "https://narayanabalipoojaservices.com/images/contact-og.jpg",
    ],
  },
};

// 2) JSON-LD schema (unchanged, just reused)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "url": "https://narayanabalipoojaservices.com/contact",
  "name": "Contact Narayan Bali Pooja Services | Book Your Ritual",
  "description":
    "Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Narayan Bali Pooja Services",
    "image": "https://narayanabalipoojaservices.com/images/home-og.jpg",
    "url": "https://narayanabalipoojaservices.com/",
    "telephone": "+918970901034",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dodda Gosai Ghat, Srirangapatna",
      "addressLocality": "Srirangapatna",
      "addressRegion": "Karnataka",
      "postalCode": "571477",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.4025627530612",
      "longitude": "76.70865688470852",
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918970901034",
      "contactType": "Customer Support",
      "availableLanguage": ["English", "Kannada", "Hindi"],
    },
    "sameAs": [
      "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
      "https://www.instagram.com/srirangapatna_pooja_services/",
      "https://www.youtube.com/@VivekSharma-Purohit",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Schema injected properly for app router */}
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <StaticNavbarPuja />
      <AboutBanner />
      <ContactInfoGrid />

      <FloatingContacts position="right" />
      <FloatingContacts2 position="left" />

      <ContactSection />
      <FooterSection />
    </>
  );
}
