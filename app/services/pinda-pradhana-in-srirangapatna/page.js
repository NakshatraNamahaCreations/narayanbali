// app/pinda-pradhana-in-srirangapatna/page.js
import Script from "next/script";

import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess2 from "../../components/RitualProcess2";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import WhyChooseUs2 from "../../components/WhyChooseUs2";
import FloatingContacts2 from "../../components/FloatingContacts2";

export const metadata = {
  title: "Pinda Pradhana in Srirangapatna | Ancestral Ritual & Shraddha",
  description:
    "Perform Pinda Pradhana in Srirangapatna for ancestor peace and shraddha karma. Experienced priests with complete pooja arrangements at the sacred Sangama.",
  alternates: {
    canonical:
      "https://narayanabalipoojaservices.com/services/pinda-pradhana-in-srirangapatna",
  },
  keywords:
  "pinda pradhana in srirangapatna, pinda pradhana pooja, pind daan srirangapatna, ancestral rituals srirangapatna, shraddha karma srirangapatna, pinda pradhana procedure, pind daan karnataka, pitrudosha remedies srirangapatna, pinda pradhana sangama, shraddha pooja karnataka, pind daan priests srirangapatna, shraddha ritual guidance, pinda pradhana benefits, ancestor peace rituals, pinda pradhana booking",

  openGraph: {
    title: "Pinda Pradhana in Srirangapatna | Ancestral Ritual & Shraddha",
    description:
      "Perform Pinda Pradhana in Srirangapatna for ancestor peace and shraddha karma. Experienced priests with complete pooja arrangements at the sacred Sangama.",
    url: "https://narayanabalipoojaservices.com/services/pinda-pradhana-in-srirangapatna",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/pinda-pradhana.jpg",
        width: 1200,
        height: 630,
        alt: "Pinda Pradhana in Srirangapatna",
      },
    ],
    siteName: "Narayan Bali Pooja Services",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pinda Pradhana in Srirangapatna | Ancestral Ritual & Shraddha",
    description:
      "Perform Pinda Pradhana in Srirangapatna for ancestor peace and shraddha karma. Experienced priests with complete pooja arrangements at the sacred Sangama.",
    images: [
      "https://narayanabalipoojaservices.com/images/pinda-pradhana.jpg",
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
        "@id": "https://narayanabalipoojaservices.com/#organization"
      }
    },

    {
      "@type": "Organization",
      "@id": "https://narayanabalipoojaservices.com/#organization",
      "name": "Narayan Bali Pooja Services",
      "url": "https://narayanabalipoojaservices.com/",
      "logo": "/mnt/data/00707c1a-4c5a-439d-8e10-d1a8ab5fe300.png",
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
        "availableLanguage": ["English", "Kannada"]
      }
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://narayanabalipoojaservices.com/#localbusiness",
      "name": "Narayan Bali Pooja Services",
      "image": "/mnt/data/00707c1a-4c5a-439d-8e10-d1a8ab5fe300.png",
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
      "@id": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna#service",
      "name": "Pinda Pradhana",
      "description": "Perform Pinda Pradhana in Srirangapatna for ancestor peace and shraddha karma. Experienced priests with complete pooja arrangements at the sacred Sangama.",
      "image": "/mnt/data/00707c1a-4c5a-439d-8e10-d1a8ab5fe300.png",
      "serviceType": "Pinda Pradhana",
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
      "url": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna"
    },

    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna#webpage",
      "url": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna",
      "name": "Pinda Pradhana in Srirangapatna | ancestor Ritual & Shraddha",
      "description": "Perform Pinda Pradhana in Srirangapatna for ancestor peace and shraddha karma. Experienced priests with complete pooja arrangements at the sacred Sangama.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "/mnt/data/00707c1a-4c5a-439d-8e10-d1a8ab5fe300.png"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna#breadcrumbs",
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
          "name": "Pinda Pradhana",
          "item": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna#faq",
      "url": "https://narayanabalipoojaservices.com/pinda-pradhana-in-srirangapatna#faq",
      "image": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/pinda-pradhana.jpg"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People wishing peace for their ancestors often choose Pinda Pradhana in Srirangapatna to complete essential shraddha rites."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be performed for ancestors who passed away long ago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pinda Pradhana ritual in Srirangapatna can be done even years after the death of the ancestor."
          }
        },
        {
          "@type": "Question",
          "name": "Is the ritual compulsory every year?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yearly rituals are not compulsory, but many families perform Pinda Pradhana in Srirangapatna on death anniversaries or amavasya."
          }
        },
        {
          "@type": "Question",
          "name": "Can women participate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women may join Pind daan in Srirangapatna except during traditional restrictions."
          }
        },
        {
          "@type": "Question",
          "name": "What do we need to bring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You only need the names of the ancestors while performing Pinda Pradhana in Srirangapatna; everything else is arranged."
          }
        },
        {
          "@type": "Question",
          "name": "How long is the ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The full Shraddha karma Srirangapatna process usually takes 1.5 to 2 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Do priests follow Vedic procedures?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pinda Pradhana in Srirangapatna is performed strictly according to Garuda Purana guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Is prasad included?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Many packages for ancestor rituals Srirangapatna include prasadam after the ceremony."
          }
        },
        {
          "@type": "Question",
          "name": "Can this ritual reduce Pitru Dosha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, performing Pinda Pradhana in Srirangapatna helps reduce Pitrudosh and clears ancestral imbalance."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with booking and guidance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our team supports devotees with all arrangements when choosing Pinda Pradhana in Srirangapatna."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <Script
        id="pinda-pradhana-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <StaticNavbarPuja />
      <AboutBanner />
      {/* <FeaturedPujas2 /> */}

      <RitualProcess2 />
      <WhyChooseUs2 />

      <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
      {/* <TestimonialsCarousel /> */}
      <FooterSection />
    </>
  );
}
