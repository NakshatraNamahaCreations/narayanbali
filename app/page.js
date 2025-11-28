// app/page.js
import Head from "next/head";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
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
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals</title>

        {/* Standard meta */}
        <meta name="description" content="Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas." />
        <meta name="keywords" content="Narayan Bali Pooja, Pithru Dosha Pooja, Thila Homa, Pinda Pradhana, Kumbh Vivaha, Sarpa Sanskar, Vedic Pooja services" />
        <link rel="canonical" href="https://narayanabalipoojaservices.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals" />
        <meta property="og:description" content="Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas." />
        <meta property="og:url" content="https://narayanabalipoojaservices.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://narayanabalipoojaservices.com/images/home-og.jpg" />
        <meta property="og:site_name" content="Narayan Bali Pooja Services" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Narayan Bali Pooja | Pithru Dosha, Thila Homa, Vedic Rituals" />
        <meta name="twitter:description" content="Experience Narayan Bali Pooja and Pithru Dosha Nivarana rituals. Expert in Pinda Pradhana, Thila Homa, Kumbh Vivaha, Kadali Vivaha, and Sarpa Sanskar poojas." />
        <meta name="twitter:image" content="https://narayanabalipoojaservices.com/images/home-og.jpg" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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
