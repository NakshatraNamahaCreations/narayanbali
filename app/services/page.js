// app/services/page.js
import Head from "next/head";
import Script from "next/script";

import FeaturedPujas2 from "../components/FeaturedPujas2";
import FooterSection from "../components/FooterSection";
import StaticNavbarPuja from "../components/StaticNavbarPuja";
import RitualProcess from "../components/RitualProcess";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../components/Testimonials";
import FloatingContacts from "../components/FloatingContacts";
import FloatingContacts2 from "../components/FloatingContacts2";

/* metadata for app/services/page.js */
export const metadata = {
  title: "Vedic Rituals & Pooja Services | Narayan Bali, Thila Homa",
  description:
    "Explore all our spiritual services Narayan Bali Pooja, Pitru Dosha Nivarana, Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar",
  keywords: [
    "Pooja services",
    "Narayan Bali",
    "Pitru Dosha Pooja",
    "Thila Homa",
    "Sarpa Sanskar",
    "Kumbh Vivaha",
    "Vedic priests",
    "pooja booking",
    "ritual services",
    "Pitru karma"
  ],
  openGraph: {
    title: "Vedic Rituals & Pooja Services | Narayan Bali, Thila Homa",
    description:
      "Explore all our spiritual services Narayan Bali Pooja, Pitru Dosha Nivarana, Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar",
    url: "https://narayanabalipoojaservices.com/services",
    siteName: "Narayan Bali Pooja Services",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/services-banner.png",
        width: 1200,
        height: 630,
        alt: "Pooja Services"
      }
    ]
  },
  alternates: { canonical: "https://narayanabalipoojaservices.com/services" }
};

/* JSON-LD graph (Organization + LocalBusiness + Services) */
/* NOTE: I included a VideoObject using your uploaded local file path.
   Replace the contentUrl with a public URL before deploying, or remove the VideoObject if undesired. */
const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://narayanabalipoojaservices.com/#organization",
      "name": "Narayan Bali Pooja Services",
      "url": "https://narayanabalipoojaservices.com/",
      "logo": "https://narayanabalipoojaservices.com/images/home-og.jpg",
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://narayanabalipoojaservices.com/#localbusiness",
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
        "latitude": 12.4025627530612,
        "longitude": 76.70865688470852
      },
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit"
      ]
    },

    /* Services */
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#narayan-bali",
      "name": "Narayan Bali Pooja",
      "serviceType": "Narayan Bali Pooja",
      "description": "Narayan Bali Pooja performed according to Vedic rites to help restless souls attain peace.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#Pitru-dosha",
      "name": "Pitru Dosha Nivarana",
      "serviceType": "Pitru Dosha Nivarana",
      "description": "Rituals to remove Pitru Dosha and restore harmony in family life, including Pinda Pradhana and related ceremonies.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#pinda-pradhana",
      "name": "Pinda Pradhana",
      "serviceType": "Pinda Pradhana",
      "description": "Pinda Pradhana (offering of pindas) done as per Vedic shastras for ancestors' peace and blessings.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#thila-homa",
      "name": "Thila Homa",
      "serviceType": "Thila Homa",
      "description": "Thila Homa performed to pacify ancestral spirits and grant peace to departed souls.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#kumbh-vivaha",
      "name": "Kumbh Vivaha",
      "serviceType": "Kumbh Vivaha",
      "description": "Kumbh Vivaha ceremonies performed for auspicious remarriage rites according to tradition.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#kadali-vivaha",
      "name": "Kadali Vivaha",
      "serviceType": "Kadali Vivaha",
      "description": "Kadali Vivaha services for couples as prescribed by traditional Vedic practices.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/services#sarpa-sanskar",
      "name": "Sarpa Sanskar",
      "serviceType": "Sarpa Sanskar",
      "description": "Sarpa Sanskar (serpent-related rites) for relief from sarpa dosha and related concerns.",
      "provider": { "@id": "https://narayanabalipoojaservices.com/#organization" },
      "url": "https://narayanabalipoojaservices.com/services",
      "areaServed": { "@type": "Place", "name": "Srirangapatna, Mandya, Karnataka" },
      "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
    },


  ]
};

export default function ServicesPage() {
  return (
    <>
   

      {/* JSON-LD structured data injected via next/script */}
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />

      <StaticNavbarPuja />
      <AboutBanner />
      <FeaturedPujas2 />
      <RitualProcess />
      <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
      <TestimonialsCarousel />
      <FooterSection />
    </>
  );
}
