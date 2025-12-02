import Script from "next/script";

import ContactSection from "./components/ContactSection";
import FeaturedPujas from "./components/FeaturedPujas";
import FooterSection from "./components/FooterSection";
import HeroSlider from "./components/HeroSlider";
import HowNarayanBaliWorks from "./components/HowNarayanBaliWorks";
import StaticNavbarPuja from "./components/StaticNavbarPuja";
import PrimaryServices from "./components/PrimaryServices";
import StatsGrid from "./components/StatsGrid";
import Testimonials from "./components/Testimonials";
import HowNarayanBaliWorks2 from "./components/HowNarayanBaliWorks2";
import FloatingContacts from "./components/FloatingContacts";
import FloatingContacts2 from "./components/FloatingContacts2";

/**
 * Page metadata (used for dev readability; actual tags injected in Head below)
 */
export const metadata = {
  title: "Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals",
  description:
    "Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas.",
  keywords: [
    "Narayan Bali Pooja",
    "Pithru Dosha Pooja",
    "Thila Homa",
    "Pinda Pradhana",
    "Kumbh Vivaha",
    "Sarpa Sanskar",
    "Vedic Pooja services",
    "Pooja in Gokarna",
    "Pooja in Rameshwaram",
    "Pooja in Srirangapatna",
    "Asthi Visarjan",
    "Vedic priests near me",
    "Hindu rituals",
    "Pitru karma services",
    "Hindu funeral rites",
  ],
  openGraph: {
    title: "Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals",
    description:
      "Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas.",
    url: "https://narayanabalipoojaservices.com/",
    siteName: "Narayan Bali Pooja Services",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/banner2.png",
        width: 1200,
        height: 630,
        alt: "Narayan Bali Pooja Services",
      },
    ],
  },
  alternates: {
    canonical: "https://narayanabalipoojaservices.com/",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://narayanabalipoojaservices.com/#website",
      "url": "https://narayanabalipoojaservices.com/",
      "name": "Narayan Bali Pooja Services",
      "inLanguage": "en-IN",
      "publisher": {
        "@id": "https://narayanabalipoojaservices.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://narayanabalipoojaservices.com/#organization",
      "name": "Narayan Bali Pooja Services",
      "url": "https://narayanabalipoojaservices.com/",
      "logo": "https://narayanabalipoojaservices.com/images/banner2.png",
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
    {
      "@type": "Person",
      "@id": "https://narayanabalipoojaservices.com/#priest",
      "name": "Sri Vivekananda Sharma",
      "alternateName": "Vivek Sharma",
      "jobTitle": "Vedic Priest and Ritual Specialist",
      "description":
        "about Sri Vivekananda Sharma, a renowned priest at Nimishambha Temple, Srirangapatna. Experience in Narayan Bali Pooja, Thila Homa, and ancestral rituals.",
      "image": "https://narayanabalipoojaservices.com/images/about-og.jpg",
      "url": "https://narayanabalipoojaservices.com/about-us",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://narayanabalipoojaservices.com/#organization"
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
    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/#webpage",
      "url": "https://narayanabalipoojaservices.com/",
      "name": "Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals",
      "description":
        "Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas.",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      },
      "about": {
        "@id": "https://narayanabalipoojaservices.com/#organization"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/home-og.jpg",
        "width": 1200,
        "height": 630
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://narayanabalipoojaservices.com/"
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <Script
        id="home-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      <StaticNavbarPuja />
      <section id="hero-banner">
        <HeroSlider />
      </section>

      <FloatingContacts position="right" />
      <FloatingContacts2 position="left" />
      <FeaturedPujas />
      <PrimaryServices />
      <br />
      <StatsGrid />
      <HowNarayanBaliWorks2 />
      <HowNarayanBaliWorks />

      <Testimonials />
      <ContactSection />
      <FooterSection />
    </>
  );
}
