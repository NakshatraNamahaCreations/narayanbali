// app/page.js
import Script from "next/script";
import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess6 from "../../components/RitualProcess6";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import WhyChooseUs6 from "../../components/WhyChooseUs6";
import FloatingContacts2 from "../../components/FloatingContacts2";

export const metadata = {
  title: "Sarpa Dosha Nivarana in Srirangapatna | Naga Dosha Ritual",
  description:
    "Perform Sarpa Dosha Nivarana in Srirangapatna for Naga Dosha removal, marriage relief, and fertility blessings with experienced priests at the sacred Sangama.",

  alternates: {
    canonical:
      "https://narayanabalipoojaservices.com/services/sarpa-dosha-nivarana-in-srirangapatna",
  },
keywords:
  "sarpa dosha nivarana in srirangapatna, naga dosha ritual, sarpa dosha pooja karnataka, naga dosha nivarana pooja, sarpa samskara pooja, sarpa dosha parihara srirangapatna, kala sarpa dosha remedy, sarpa dosha effects, naga dosha pooja procedure, sarpa dosha pooja sangama, naga dosha priests srirangapatna, serpent dosha nivarana, sarpa dosha parihara pooja, naga dosha dosha remedy, sarpa dosha pooja booking",

  openGraph: {
    title: "Sarpa Dosha Nivarana in Srirangapatna | Naga Dosha Ritual",
    description:
      "Perform Sarpa Dosha Nivarana in Srirangapatna for Naga Dosha removal, marriage relief, and fertility blessings with experienced priests at the sacred Sangama.",
    url: "https://narayanabalipoojaservices.com/services/sarpa-dosha-nivarana-in-srirangapatna",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/sarpa-dosha.jpg",
        width: 1200,
        height: 630,
        alt: "Sarpa Dosha Nivarana Ritual",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarpa Dosha Nivarana in Srirangapatna | Naga Dosha Ritual",
    description:
      "Perform Sarpa Dosha Nivarana in Srirangapatna for Naga Dosha removal, marriage relief, and fertility blessings with experienced priests at the sacred Sangama.",
    images: [
      "https://narayanabalipoojaservices.com/images/sarpa-dosha.jpg",
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
        "availableLanguage": ["English", "Kannada"]
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
          "Monday", "Tuesday", "Wednesday",
          "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "06:00",
        "closes": "20:00"
      },
      "hasMap": "https://www.google.com/maps/place/12.4025627530612,76.70865688470852"
    },
    {
      "@type": "Service",
      "@id": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna#service",
      "name": "Sarpa Dosha Nivarana",
      "description": "Perform Sarpa Dosha Nivarana in Srirangapatna for Naga Dosha removal, marriage relief, and fertility blessings with experienced priests at the sacred Sangama.",
      "image": "https://narayanabalipoojaservices.com/images/sarpa-dosha.jpg",
      "serviceType": "Sarpa Dosha Nivarana",
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
      "url": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna"
    },
    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna#webpage",
      "url": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna",
      "name": "Sarpa Dosha Nivarana in Srirangapatna | Naga Dosha Ritual",
      "description": "Perform Sarpa Dosha Nivarana in Srirangapatna for Naga Dosha removal, marriage relief, and fertility blessings with experienced priests at the sacred Sangama.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/sarpa-dosha.jpg"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna#breadcrumbs",
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
          "name": "Sarpa Dosha Nivarana",
          "item": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna#faq",
      "url": "https://narayanabalipoojaservices.com/sarpa-dosha-nivarana-in-srirangapatna#faq",
      "image": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/sarpa-dosha.jpg"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People facing long-term hardships often choose Sarpa Dosha Nivarana in Srirangapatna to remove naga-related issues."
          }
        },
        {
          "@type": "Question",
          "name": "Does this ritual help with childbirth problems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Sarpa Dosha puja in Srirangapatna is highly recommended for repeated miscarriages or pregnancy issues."
          }
        },
        {
          "@type": "Question",
          "name": "Can women participate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women can attend Sarpa Dosha Nivarana in Srirangapatna unless restricted by tradition."
          }
        },
        {
          "@type": "Question",
          "name": "What items are required?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "All materials are provided for Sarpa Dosha nivarana ritual in Srirangapatna, so families need not bring anything."
          }
        },
        {
          "@type": "Question",
          "name": "How long does the ritual take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The complete Sarpa Dosha Nivarana in Srirangapatna ritual takes around 1.5 to 2 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is this ritual effective for marriage delays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Naga Dosha puja in Srirangapatna helps improve marriage prospects."
          }
        },
        {
          "@type": "Question",
          "name": "Is prasadam provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some packages for Sarpa Dosha Nivarana in Srirangapatna include prasadam distribution."
          }
        },
        {
          "@type": "Question",
          "name": "Is astrology consultation needed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most people perform Sarpa Dosha remedies in Srirangapatna after an astrologer’s recommendation."
          }
        },
        {
          "@type": "Question",
          "name": "Can this ritual remove fear or mental stress?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Sarpa Dosha Nivarana in Srirangapatna helps reduce emotional disturbances."
          }
        },
        {
          "@type": "Question",
          "name": "Do you assist with booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We handle all arrangements for Sarpa Dosha Nivarana in Srirangapatna from start to finish."
          }
        }
      ]
    }
  ]
};


export default function Home() {
  return (
    <>

        <Script
        id="sarpa-dosha-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <StaticNavbarPuja/>
     <AboutBanner/>
    {/* <FeaturedPujas2/> */}
    
    <RitualProcess6/>
   
    <WhyChooseUs6/>
    
    <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
    {/* <TestimonialsCarousel/> */}
      <FooterSection/>
    </>
  );
}
