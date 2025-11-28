// app/contact/page.js  (or app/contact-us/page.js depending on your routing)
import Head from "next/head";

import ContactInfoGrid from "./ContactInfoGrid";
import FooterSection from "../components/FooterSection";
import StaticNavbarPuja from "../components/StaticNavbarPuja";
import AboutBanner from "./AboutBanner";
import ContactSection from "../components/ContactSection";
import FloatingContacts from "../components/FloatingContacts";
import FloatingContacts2 from "../components/FloatingContacts2";

// JSON-LD Schema -------------------------
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
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "12.4025627530612",
      "longitude": "76.70865688470852"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918970901034",
      "contactType": "Customer Support",
      "availableLanguage": ["English", "Kannada", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
      "https://www.instagram.com/srirangapatna_pooja_services/",
      "https://www.youtube.com/@VivekSharma-Purohit"
    ]
  }
};

// ----------------------------------------

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Meta Title */}
        <title>Contact Narayan Bali Pooja Services | Book Your Ritual</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://narayanabalipoojaservices.com/contact"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Contact Narayan Bali Pooja Services | Book Your Ritual"
        />
        <meta
          property="og:description"
          content="Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja"
        />
        <meta
          property="og:url"
          content="https://narayanabalipoojaservices.com/contact"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://narayanabalipoojaservices.com/images/contact-og.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Narayan Bali Pooja Services | Book Your Ritual"
        />
        <meta
          name="twitter:description"
          content="Get in touch with Sri Vivekananda Sharma for Narayan Bali Pooja and other Vedic rituals. Call us to book Pithru Dosha, Thila Homa, or Pinda Pradhana pooja"
        />
        <meta
          name="twitter:image"
          content="https://narayanabalipoojaservices.com/images/contact-og.jpg"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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
