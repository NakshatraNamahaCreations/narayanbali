// app/tila-homa-in-srirangapatna/page.js
import Script from "next/script";

import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess3 from "../../components/RitualProcess3";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import WhyChooseUs3 from "../../components/WhyChooseUs3";
import FloatingContacts2 from "../../components/FloatingContacts2";

// 1) Metadata for this route (Next injects <title>, meta, OG, canonical, Twitter)
export const metadata = {
  title: "Tila Homa in Srirangapatna | Pitru Dosha & Ancestral Ritual",
  description:
    "Perform Tila Homa in Srirangapatna for Pitru Dosha Nivarana and ancestral peace. Experienced priests, sacred Sangama rituals, and full pooja arrangements.",
 keywords:
  "tila homa in srirangapatna, tila homam pooja, pitru dosha remedy srirangapatna, pitra dosh nivaran homa, ancestral rituals srirangapatna, tila homa karnataka, tila homam procedure, tila homa benefits, shraddha karma homa, pitru karma pooja, tila homa sangama, ancestral peace rituals, tila homa priests srirangapatna, pitru dosha parihara homa, tila homa booking",

    openGraph: {
    title: "Tila Homa in Srirangapatna | Pitru Dosha & Ancestral Ritual",
    description:
      "Perform Tila Homa in Srirangapatna for Pitru Dosha Nivarana and ancestral peace. Experienced priests, sacred Sangama rituals, and full pooja arrangements.",
    url: "https://narayanabalipoojaservices.com/services/tila-homa-in-srirangapatna",
    type: "website",
    siteName: "Narayan Bali Pooja Services",
    locale: "en_IN",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/tila-homa.jpg",
        width: 1200,
        height: 630,
        alt: "Tila Homa in Srirangapatna",
      },
    ],
  },
  alternates: {
    canonical: "https://narayanabalipoojaservices.com/services/tila-homa-in-srirangapatna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tila Homa in Srirangapatna | Pitru Dosha & Ancestral Ritual",
    description:
      "Perform Tila Homa in Srirangapatna for Pitru Dosha Nivarana and ancestral peace. Experienced priests, sacred Sangama rituals, and full pooja arrangements.",
    images: [
      "https://narayanabalipoojaservices.com/images/tila-homa.jpg",
    ],
  },
};

// 2) JSON-LD graph (your schema, unchanged, just reused)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://narayanabalipoojaservices.com/#website",
      "url": "https://narayanabalipoojaservices.com/",
      "name": "Narayan Bali Pooja Services",
      "publisher": {
        "@id": "https://narayanabalipoojaservices.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://narayanabalipoojaservices.com/#organization",
      "name": "Narayan Bali Pooja Services",
      "url": "https://narayanabalipoojaservices.com/",
      "logo": "https://narayanabalipoojaservices.com/images/logo.png",
      "sameAs": [
        "https://www.facebook.com/people/Narayana-Bali-Pooja-Srirangapatna/61576010055294/",
        "https://www.instagram.com/srirangapatna_pooja_services/",
        "https://www.youtube.com/@VivekSharma-Purohit"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918970901034",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": [
          "English",
          "Kannada"
        ]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://narayanabalipoojaservices.com/#localbusiness",
      "name": "Narayan Bali Pooja Services",
      "image": "https://narayanabalipoojaservices.com/images/logo.png",
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
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.4025627530612,
        "longitude": 76.70865688470852
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
          "Sunday"
        ],
        "opens": "06:00",
        "closes": "20:00"
      },
      "hasMap": "https://www.google.com/maps/place/12.4025627530612,76.70865688470852"
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna#service",
      "name": "Tila Homa",
      "description": "Perform Tila Homa in Srirangapatna for Pitru Dosha Nivarana and ancestral peace. Experienced priests, sacred Sangama rituals, and full pooja arrangements.",
      "image": "https://narayanabalipoojaservices.com/images/tila-homa.jpg",
      "serviceType": "Tila Homa",
      "provider": {
        "@id": "https://narayanabalipoojaservices.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Srirangapatna",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        }
      },
      "url": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna"
    },
    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna#webpage",
      "url": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna",
      "name": "Tila Homa in Srirangapatna | Pitru Dosha & Ancestral Ritual",
      "description": "Perform Tila Homa in Srirangapatna for Pitru Dosha Nivarana and ancestral peace. Experienced priests, sacred Sangama rituals, and full pooja arrangements.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/tila-homa.jpg"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna#breadcrumbs",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://narayanabalipoojaservices.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://narayanabalipoojaservices.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Tila Homa",
          "item": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna#faq",
      "url": "https://narayanabalipoojaservices.com/tila-homa-in-srirangapatna#faq",
      "image": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/tila-homa.jpg"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People seeking ancestral peace often choose Tila Homa in Srirangapatna to purify karmic blocks."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be performed annually?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Tila Homa ritual in Srirangapatna can be performed yearly during amavasya or special tithis."
          }
        },
        {
          "@type": "Question",
          "name": "Can women participate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women may attend Tila Homa in Srirangapatna unless restricted by traditional customs."
          }
        },
        {
          "@type": "Question",
          "name": "What do we need to bring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only basic ancestor details are needed while performing Tila Homa puja in Srirangapatna."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The complete Tila Homa in Srirangapatna process usually takes 1.5 to 2 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is this ritual useful for Pitru Dosha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pitrudosh nivarana homa in Srirangapatna helps remove ancestral imbalance."
          }
        },
        {
          "@type": "Question",
          "name": "Do priests follow Vedic rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, Tila Homa in Srirangapatna is performed as per Garuda Purana and Vedic guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Is food or prasadam included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some packages for ancestral homa in Srirangapatna include prasadam distribution."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be done for ancestors who died long ago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Tila Homa in Srirangapatna is effective even if the ancestor passed away many years back."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with booking and arrangements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our team supports devotees with every step during Tila Homa in Srirangapatna."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      {/* JSON-LD schema (correct way in app router) */}
      <Script
        id="tila-homa-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <StaticNavbarPuja />
      <AboutBanner />
      {/* <FeaturedPujas2 /> */}
      <RitualProcess3 />
      <WhyChooseUs3 />
      <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
      {/* <TestimonialsCarousel /> */}
      <FooterSection />
    </>
  );
}
