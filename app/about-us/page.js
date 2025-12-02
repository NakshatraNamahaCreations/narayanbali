import Script from "next/script";

import FooterSection from "../components/FooterSection";
import HowNarayanBaliWorks2 from "./HowNarayanBaliWorks2";
import StaticNavbarPuja from "../components/StaticNavbarPuja";
import AboutBanner from "./AboutBanner";
import GallerySection from "./GallerySection";
import FeaturedPujas1 from "../components/FeaturedPujas1";
import FloatingContacts from "../components/FloatingContacts";

/* Page metadata – Next.js will inject tags automatically */
export const metadata = {
  title: "About Sri Vivekananda Sharma | Narayan Bali Pooja Specialist",
  description:
    "About Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
  keywords: [
    "About Narayan Bali Pooja",
    "Vedic priests",
    "pooja team",
    "narayan bali story",
    "about us pooja services",
    "pitru dosha experts",
  ],
  openGraph: {
    title: "About Sri Vivekananda Sharma | Narayan Bali Pooja Specialist",
    description:
      "About Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
    url: "https://narayanabalipoojaservices.com/about-us",
    siteName: "Narayan Bali Pooja Services",
    type: "profile",
    locale: "en_IN",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Sri Vivekananda Sharma",
      },
    ],
  },
  alternates: {
    canonical: "https://narayanabalipoojaservices.com/about-us",
  },
};

/* JSON-LD schema: Person */
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
        "About Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
      "image": "https://narayanabalipoojaservices.com/images/about-og.jpg",
      "url": "https://narayanabalipoojaservices.com/about-us",
      "worksFor": {
        "@type": "Organization",
        "name": "Narayan Bali Pooja Services",
        "url": "https://narayanabalipoojaservices.com/",
      },
      "affiliation": {
        "@type": "Organization",
        "name": "Narayan Bali Pooja Services",
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dodda Gosai Ghat, Srirangapatna",
        "addressLocality": "Srirangapatna",
        "addressRegion": "Karnataka",
        "postalCode": "571477",
        "addressCountry": "IN",
      },
      "knowsAbout": [
        "Narayan Bali Pooja",
        "Pithru Dosha Nivarana",
        "Thila Homa",
        "Pinda Pradhana",
        "Ancestral Rituals",
      ],
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD injected via next/script */}
      <Script
        id="about-person-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
