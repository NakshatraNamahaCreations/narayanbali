7// app/page.js
import Script from "next/script";
import FeaturedPujas2 from "../../components/FeaturedPujas2";
import FooterSection from "../../components/FooterSection";
import StaticNavbarPuja from "../../components/StaticNavbarPuja";
import RitualProcess7 from "../../components/RitualProcess7";
import AboutBanner from "./AboutBanner";
import TestimonialsCarousel from "../../components/Testimonials";
import FloatingContacts from "../../components/FloatingContacts";
import WhyChooseUs7 from "../../components/WhyChooseUs7";
import FloatingContacts2 from "../../components/FloatingContacts2";

export const metadata = {
  title: "Pitru Dosha Pooja in Srirangapatna | Pitru Dosha Nivarana",
  description:
    "Perform Pitru Dosha Pooja in Srirangapatna for ancestral peace, Pitru Dosha removal, and family harmony with experienced priests at the sacred Sangama.",

  alternates: {
    canonical:
      "https://narayanabalipoojaservices.com/services/pitru-dosha-pooja-in-srirangapatna",
  },
keywords:
  "Pitru dosha pooja in srirangapatna, Pitru dosha nivarana, Pitrudosha parihara pooja, pitra dosh puja karnataka, srirangapatna Pitru dosha remedy, Pitru dosha pooja procedure, pitra dosh nivaran vidhi, Pitru dosha effects remedy, Pitru dosha pooja sangama, pitra dosh dosha nivaran pooja, Pitru karma rituals srirangapatna, shraddha karma pooja, garuda purana Pitru rituals, ancestor dosha parihara pooja, Pitru dosha pooja booking",

  openGraph: {
    title: "Pitru Dosha Pooja in Srirangapatna | Pitru Dosha Nivarana",
    description:
      "Perform Pitru Dosha Pooja in Srirangapatna for ancestral peace, Pitru Dosha removal, and family harmony with experienced priests at the sacred Sangama.",
    url: "https://narayanabalipoojaservices.com/services/pitru-dosha-pooja-in-srirangapatna",
    type: "website",
    images: [
      {
        url: "https://narayanabalipoojaservices.com/images/Pitru-dosha.jpg",
        width: 1200,
        height: 630,
        alt: "Pitru Dosha Pooja in Srirangapatna",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Pitru Dosha Pooja in Srirangapatna | Pitru Dosha Nivarana",
    description:
      "Perform Pitru Dosha Pooja in Srirangapatna for ancestral peace, Pitru Dosha removal, and family harmony with experienced priests at the sacred Sangama.",
    images: [
      "https://narayanabalipoojaservices.com/images/Pitru-dosha.jpg",
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
      "@id": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna#service",
      "name": "Pitru Dosha Pooja",
      "description": "Perform Pitru Dosha Pooja in Srirangapatna for ancestral peace, Pitru Dosha removal, and family harmony with experienced priests at the sacred Sangama.",
      "image": "https://narayanabalipoojaservices.com/images/pitru-dosha.jpg",
      "serviceType": "Pitru Dosha Pooja",
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
      "url": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna"
    },
    {
      "@type": "WebPage",
      "@id": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna#webpage",
      "url": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna",
      "name": "Pitru Dosha Pooja in Srirangapatna | Pitru Dosha Nivarana",
      "description": "Perform Pitru Dosha Pooja in Srirangapatna for ancestral peace, Pitru Dosha removal, and family harmony with experienced priests at the sacred Sangama.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/pitru-dosha.jpg"
      },
      "inLanguage": "en",
      "isPartOf": {
        "@id": "https://narayanabalipoojaservices.com/#website"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna#breadcrumbs",
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
          "name": "Pitru Dosha Pooja",
          "item": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna#faq",
      "url": "https://narayanabalipoojaservices.com/pitru-dosha-pooja-in-srirangapatna#faq",
      "image": {
        "@type": "ImageObject",
        "url": "https://narayanabalipoojaservices.com/images/pitru-dosha.jpg"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who should perform this ritual?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People with persistent obstacles often choose Pitru Dosha Pooja in Srirangapatna for relief."
          }
        },
        {
          "@type": "Question",
          "name": "Can this be performed for ancestors who passed away long ago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pitru Dosha nivarana pooja in Srirangapatna can be done regardless of time passed."
          }
        },
        {
          "@type": "Question",
          "name": "Can women participate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Women may attend Pitru Dosha Pooja in Srirangapatna unless restricted traditionally."
          }
        },
        {
          "@type": "Question",
          "name": "What do we need to bring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic details of ancestors are needed for Pitrudosh puja in Srirangapatna."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The full Pitru Dosha Pooja in Srirangapatna ritual takes 1.5 to 2 hours."
          }
        },
        {
          "@type": "Question",
          "name": "Does it help with marriage delays?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pitru Dosha remedy in Srirangapatna supports marriage progress."
          }
        },
        {
          "@type": "Question",
          "name": "Do priests follow Vedic rules?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely, Pitru Dosha Pooja in Srirangapatna is performed traditionally."
          }
        },
        {
          "@type": "Question",
          "name": "Is prasadam provided?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Some packages of Pitru karma rituals in Srirangapatna include prasadam."
          }
        },
        {
          "@type": "Question",
          "name": "Can it help with health issues?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Pitru Dosha Pooja in Srirangapatna reduces ancestral energy disturbances."
          }
        },
        {
          "@type": "Question",
          "name": "Do you help with booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, full support is given for Pitru Dosha Pooja in Srirangapatna."
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
        id="pitru-dosha-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

    <StaticNavbarPuja/>
     <AboutBanner/>
    {/* <FeaturedPujas2/> */}
    
    <RitualProcess7/>
   
    <WhyChooseUs7/>
    
    <FloatingContacts2 position="left" />
      <FloatingContacts position="right" />
    {/* <TestimonialsCarousel/> */}
      <FooterSection/>
    </>
  );
}
