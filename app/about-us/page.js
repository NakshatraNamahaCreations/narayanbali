// app/about-us/page.js
import Head from "next/head";
import Script from "next/script";

import FooterSection from "../components/FooterSection";
import HowNarayanBaliWorks2 from "./HowNarayanBaliWorks2";
import StaticNavbarPuja from "../components/StaticNavbarPuja";
import AboutBanner from "./AboutBanner";
import GallerySection from "./GallerySection";
import FeaturedPujas1 from "../components/FeaturedPujas1";
import FloatingContacts from "../components/FloatingContacts";

/* Page metadata (kept for readability; tags are injected below) */
export const metadata = {
  title: "about Sri Vivekananda Sharma | Narayan Bali Pooja Specialist",
  description:
    "about Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
  keywords: [
    "About Narayan Bali Pooja",
    "Vedic priests",
    "pooja team",
    "narayan bali story",
    "about us pooja services",
    "pitru dosha experts",
  ],
  openGraph: {
    title: "about Sri Vivekananda Sharma | Narayan Bali Pooja Specialist",
    description:
      "about Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
    url: "https://narayanabalipoojaservices.com/about-us",
    siteName: "Narayan Bali Pooja Services",
    type: "profile",
    locale: "en_IN",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Sri Vivekananda Sharma"
      }
    ]
  },
  alternates: { canonical: "https://narayanabalipoojaservices.com/about-us" }
};

/* JSON-LD: Person + VideoObject (VideoObject.contentUrl uses uploaded local path) */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://narayanabalipoojaservices.com/about-us#person",
      "name": "Sri Vivekananda Sharma",
      "alternateName": "Vivek Sharma",
      "jobTitle": "Vedic Priest and Ritual Specialist",
      "description":
        "about Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
      "image": "https://narayanabalipoojaservices.com/images/about-og.jpg",
      "url": "https://narayanabalipoojaservices.com/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Narayan Bali Pooja Services",
        "url": "https://narayanabalipoojaservices.com/"
      },
      "affiliation": {
        "@type": "Organization",
        "name": "Narayan Bali Pooja Services"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dodda Gosai Ghat, Srirangapatna",
        "addressLocality": "Srirangapatna",
        "addressRegion": "Karnataka",
        "postalCode": "571477",
        "addressCountry": "IN"
      },
      "knowsAbout": [
        "Narayan Bali Pooja",
        "Pithru Dosha Nivarana",
        "Thila Homa",
        "Pinda Pradhana",
        "Ancestral Rituals"
      ],
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit"
      ]
    },

  
  ]
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>

        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href={metadata.alternates.canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta name="twitter:description" content={metadata.openGraph.description} />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        <Script
        id="about-person-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      </Head>

      {/* JSON-LD injected via next/script */}
    

      <StaticNavbarPuja />
      <AboutBanner />
      <HowNarayanBaliWorks2 />
      <FeaturedPujas1 />
      <FloatingContacts position="right" />
      <GallerySection />
      <FooterSection />
    </>
  );
}
