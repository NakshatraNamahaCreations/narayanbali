// app/services/narayan-bali-pooja-in-srirangapatna/page.js
import Script from "next/script";

import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess from "../../components/RitualProcess";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import WhyChooseUs from "../../components/WhyChooseUs";
import FloatingContacts2 from "../../components/FloatingContacts2";

export const metadata = {
  title: "Narayan Bali Pooja in Srirangapatna | Pitrudosh Nivarana",
  description:
    "Perform Narayan Bali Pooja in Srirangapatna for Pitrudosh Nivarana, ancestral peace, and preta shanti with experienced priests and complete ritual arrangements.",
  alternates: {
    canonical:
      "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna",
  },
  
  keywords:
  "narayan bali pooja in srirangapatna, narayana bali pooja srirangapatna, pitrudosh nivarana pooja, pitra dosh nivaran, narayan bali puja karnataka, narayan bali sangama, narayana bali ritual procedure, narayan bali pooja benefits, pitrudosha parihara srirangapatna, ancestor rituals srirangapatna, garuda purana narayan bali, narayan bali pooja booking, narayan bali priest srirangapatna, shraddha karma srirangapatna, sangama pooja",

  openGraph: {
    title: "Narayan Bali Pooja in Srirangapatna | Pitrudosh Nivarana",
    description:
      "Perform Narayan Bali Pooja in Srirangapatna for Pitrudosh Nivarana, ancestral peace, and preta shanti with experienced priests and complete ritual arrangements.",
    url: "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/narayan-bali.jpg",
        width: 1200,
        height: 630,
        alt: "Narayan Bali Pooja",
      },
    ],
    siteName: "Narayan Bali Pooja Services",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayan Bali Pooja in Srirangapatna | Pitrudosh Nivarana",
    description:
      "Perform Narayan Bali Pooja in Srirangapatna for Pitrudosh Nivarana, ancestral peace, and preta shanti with experienced priests and complete ritual arrangements.",
    images: [
      "https://narayanabalipoojaservices.com/images/narayan-bali.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://narayanabalipoojaservices.com/#website",
      "url": "https://narayanabalipoojaservices.com/",
      "name": "Narayan Bali Pooja Services",
      "publisher": {
        "@id": "https://narayanabalipoojaservices.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://narayanabalipoojaservices.com/#organization",
      "name": "Narayan Bali Pooja Services",
      "url": "https://narayanabalipoojaservices.com/",
      "logo": "https://narayanabalipoojaservices.com/images/home-og.jpg",
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918970901034",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada"],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://narayanabalipoojaservices.com/#localbusiness",
      "name": "Narayan Bali Pooja Services",
      "image": "https://narayanabalipoojaservices.com/images/home-og.jpg",
      "url": "https://narayanabalipoojaservices.com/",
      "telephone": "+918970901034",
      "priceRange": "₹₹",
      "paymentAccepted": "Cash, UPI, Bank Transfer",
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
        "latitude": 12.4025627530612,
        "longitude": 76.70865688470852,
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        "opens": "06:00",
        "closes": "20:00",
      },
      "hasMap":
        "https://www.google.com/maps/place/12.4025627530612,76.70865688470852",
    },
    {
      "@type": "Service",
      "@id":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna#service",
      "name": "Narayan Bali Pooja",
      "description":
        "Perform Narayan Bali Pooja in Srirangapatna for Pitrudosh Nivarana, ancestral peace, and preta shanti with experienced priests.",
      "image": "https://narayanabalipoojaservices.com/images/narayan-bali.jpg",
      "serviceType": "Narayan Bali Pooja",
      "provider": {
        "@id": "https://narayanabalipoojaservices.com/#organization",
      },
      "areaServed": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Srirangapatna",
          "addressRegion": "Karnataka",
          "addressCountry": "IN",
        },
      },
      "url":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna",
    },
    {
      "@type": "WebPage",
      "@id":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna#webpage",
      "url":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna",
      "name": "Narayan Bali Pooja in Srirangapatna | Pitrudosh Nivarana",
      "description":
        "Perform Narayan Bali Pooja in Srirangapatna for Pitrudosh Nivarana, ancestral peace, and preta shanti with experienced priests.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/narayan-bali.jpg",
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://narayanabalipoojaservices.com/",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://narayanabalipoojaservices.com/services",
        },
        {
          "@type": "ListItem",
          "position": "3",
          "name": "Narayan Bali Pooja",
          "item":
            "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id":
        "https://narayanabalipoojaservices.com/services/narayan-bali-pooja-in-srirangapatna#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Anyone wishing peace and liberation for their ancestors can perform Narayan Bali Pooja in Srirangapatna.",
          },
        },
        {
          "@type": "Question",
          "name": "Is this pooja compulsory after an unnatural death?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Narayan Bali Pooja is strongly recommended after accidental, suicide, or sudden death.",
          },
        },
        {
          "@type": "Question",
          "name": "Can women attend this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Women can participate unless they are under traditional restrictions.",
          },
        },
        {
          "@type": "Question",
          "name": "What if proper kriya was not performed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Narayan Bali completes the missing rites and helps the departed soul attain peace.",
          },
        },
        {
          "@type": "Question",
          "name": "How soon should we book?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Schedule at least one day in advance.",
          },
        },
        {
          "@type": "Question",
          "name": "Duration of the ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Normally 2 to 2.5 hours.",
          },
        },
        {
          "@type": "Question",
          "name": "Are materials provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all items are arranged by our team.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there a dress code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simple traditional dress is recommended.",
          },
        },
        {
          "@type": "Question",
          "name":
            "Can it be done for ancestors who passed away long ago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Yes, Narayan Bali can be done regardless of year of death.",
          },
        },
        {
          "@type": "Question",
          "name": "Is prasadam provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, prasadam is offered depending on package.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD structured data */}
      <Script
        id="narayan-bali-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <StaticNavbarPuja />
      <AboutBanner />
      {/* <FeaturedPujas2 /> */}
      <RitualProcess />
      <WhyChooseUs />
      <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
      {/* <TestimonialsCarousel /> */}
      <FooterSection />
    </>
  );
}
