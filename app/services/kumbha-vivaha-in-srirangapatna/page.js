// app/page.js
import Script from "next/script";
import Head from "next/head";
import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess4 from "../../components/RitualProcess4";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import FloatingContacts2 from "../../components/FloatingContacts2";
import WhyChooseUs4 from "../../components/WhyChooseUs4";

export const metadata = {
  title: "Kumbha Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
  description:
    "Perform Kumbha Vivaha in Srirangapatna for Mangal Dosha removal. Experienced priests, Vedic procedures, and complete ritual arrangements at the sacred Sangama.",

  alternates: {
    canonical:
      "https://narayanabalipoojaservices.com/services/kumbha-vivaha-in-srirangapatna",
  },
  
keywords:
  "kumbha vivaha in srirangapatna, kumbha vivaha pooja, mangal dosha remedy, kuja dosha nivarana, manglik dosha pooja, kumbha vivaha procedure, kumbha vivaha benefits, kumbha vivaha karnataka, mangal dosha parihara srirangapatna, kumbha vivaha sangama, kumbha vivaha priests srirangapatna, dosha nivarana rituals, vedic mangal dosha remedies, kumbha vivaha booking",

  openGraph: {
    title: "Kumbha Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
    description:
      "Perform Kumbha Vivaha in Srirangapatna for Mangal Dosha removal. Experienced priests, Vedic procedures, and complete ritual arrangements at the sacred Sangama.",
    url: "https://narayanabalipoojaservices.com/services/kumbha-vivaha-in-srirangapatna",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/kumba-vivaha.jpg",
        width: 1200,
        height: 630,
        alt: "Kumbha Vivaha Ritual in Srirangapatna",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kumbha Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
    description:
      "Perform Kumbha Vivaha in Srirangapatna for Mangal Dosha removal. Experienced priests, Vedic procedures, and complete ritual arrangements at the sacred Sangama.",
    images: [
      "https://narayanabalipoojaservices.com/images/kumba-vivaha.jpg",
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
      "@id": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna#service",
      "name": "Kumbha Vivaha",
      "description": "Perform Kumbha Vivaha in Srirangapatna for Mangal Dosha removal. Experienced priests, Vedic procedures, and complete ritual arrangements at the sacred Sangama.",
      "image": "https://narayanabalipoojaservices.com/images/kumba-vivaha.jpg",
      "serviceType": "Kumbha Vivaha",
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
      "url": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna"
    },
    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna#webpage",
      "url": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna",
      "name": "Kumbha Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
      "description": "Perform Kumbha Vivaha in Srirangapatna for Mangal Dosha removal. Experienced priests, Vedic procedures, and complete ritual arrangements at the sacred Sangama.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/kumba-vivaha.jpg"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna#breadcrumbs",
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
          "name": "Kumbha Vivaha",
          "item": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna#faq",
      "url": "https://narayanabalipoojaservices.com/kumbha-vivaha-in-srirangapatna#faq",
      "image": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/kumba-vivaha.jpg"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People affected by marriage delays often choose Kumbha Vivaha in Srirangapatna to neutralize astrological issues."
          }
        },
        {
          "@type": "Question",
          "name": "Does this cure Mangal Dosha?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Kumbha Vivaha ritual in Srirangapatna is strongly recommended for Mangal Dosha."
          }
        },
        {
          "@type": "Question",
          "name": "Can women also perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women can perform Kumbha Vivaha in Srirangapatna without any restrictions."
          }
        },
        {
          "@type": "Question",
          "name": "What is used in this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Kumbha or banana tree is used during Kumbha Vivaha puja in Srirangapatna based on horoscope guidance."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The full Kumbha Vivaha in Srirangapatna ritual usually takes 1–1.5 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Is this ritual done before marriage only?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, astrological dosha nivarana in Srirangapatna should be done before formal marriage."
          }
        },
        {
          "@type": "Question",
          "name": "Do priests follow Vedic rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, Kumbha Vivaha in Srirangapatna is done as per Shastra and traditional guidelines."
          }
        },
        {
          "@type": "Question",
          "name": "Is prasadam provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some packages of dosha nivarana rituals in Srirangapatna include prasadam."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be performed for late marriages?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Kumbha Vivaha in Srirangapatna is best for those facing long-term delays."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with booking and arrangements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all support is provided for Kumbha Vivaha in Srirangapatna from start to finish."
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
        id="kumbha-vivaha-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />


    <StaticNavbarPuja/>
     <AboutBanner/>
    {/* <FeaturedPujas2/> */}
    
    <RitualProcess4/>
   
    <WhyChooseUs4/>
    
    <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
    {/* <TestimonialsCarousel/> */}
      <FooterSection/>
    </>
  );
}
