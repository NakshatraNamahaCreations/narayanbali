  // app/page.js

  import Head from "next/head";
  import FeaturedPujas2 from "../../components/FeaturedPujas2";
  import FooterSection from "../../components/FooterSection";
  import StaticNavbarPuja from "../../components/StaticNavbarPuja";
  import RitualProcess5 from "../../components/RitualProcess5";
  import AboutBanner from "./AboutBanner";
  import TestimonialsCarousel from "../../components/Testimonials";
  import FloatingContacts from "../../components/FloatingContacts";
  import FloatingContacts2 from "../../components/FloatingContacts2";
  import WhyChooseUs5 from "../../components/WhyChooseUs5";

  export const metadata = {
    title: " Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
    description:
      "Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama.",
      keywords: [
          "Kadali Vivaha in Srirangapatna",
          "Kadali Vivaha pooja in Srirangapatna",
          "Kadali Vivaha ceremony Srirangapatna",
          "Kadali Vivaha cost in Srirangapatna",
          "Kadali Vivaha booking Srirangapatna",
          "Kadali Vivaha procedure in Srirangapatna",
          "Kadali Vivaha priests in Srirangapatna",
          "Kadali Vivaha pandits in Srirangapatna",
        
          "Kadali Vivaha for Mangal Dosha",
          "Kadali Vivaha for Manglik dosha",
          "Kadali Vivaha dosha nivarana",
          "Kadali Vivaha pooja benefits",
          "Kadali Vivaha Vidhi",
          "Kadali Vivaha rituals",
        
          "Kadali Vivaha for delayed marriage",
          "Kadali Vivaha at Srirangapatna temples",
      
        ],
        
    openGraph: {
      title: " Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
      description:
      "Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama.",

      url: "https://narayanabalipoojaservices.com/services/kadali-vivaha-in-srirangapatna",
      siteName: "Narayan Bali Pooja Services",
      type: "website",
      locale: "en_IN",
      images: [
        {
          url: "https://narayanabalipoojaservices.com/images/services-banner.png",
          width: 1200,
          height: 630,
          alt: "Pooja Services"
        }
      ]
    },
    alternates: { canonical: "https://narayanabalipoojaservices.com/services" }
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
        "@id": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna#service",
        "name": "Kadali Vivaha",
        "description": "Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama.",
        "image": "https://narayanabalipoojaservices.com/images/kadali-vivaha.jpg",
        "serviceType": "Kadali Vivaha",
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
        "url": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna"
      },
      {
        "@type": "WebPage",
        "@id": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna#webpage",
        "url": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna",
        "name": "Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual",
        "description": "Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama.",
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://narayanabalipoojaservices.com/images/kadali-vivaha.jpg"
        },
        "inLanguage": "en",
        "isPartOf": {
          "@id": "https://narayanabalipoojaservices.com/#website"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna#breadcrumbs",
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
            "name": "Kadali Vivaha",
            "item": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna#faq",
        "url": "https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna#faq",
        "image": {
          "@type": "ImageObject",
          "url": "https://narayanabalipoojaservices.com/images/kadali-vivaha.jpg"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Who should perform this ritual?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "People facing marriage delays often choose Kadali Vivaha in Srirangapatna to remove astrological obstacles."
            }
          },
          {
            "@type": "Question",
            "name": "Does this help with Mangal Dosha?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Kadali Vivaha ritual in Srirangapatna is a powerful remedy for Mangal Dosha."
            }
          },
          {
            "@type": "Question",
            "name": "Can women perform this ritual?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Women can participate in Kadali Vivaha in Srirangapatna without restrictions."
            }
          },
          {
            "@type": "Question",
            "name": "What is used in the ritual?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A banana tree is used during Kadali Vivaha puja in Srirangapatna for symbolic marriage."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The full Kadali Vivaha in Srirangapatna ritual takes about 1 to 1.5 hours."
            }
          },
          {
            "@type": "Question",
            "name": "Is it mandatory before real marriage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, dosha nivarana rituals in Srirangapatna are recommended before formal marriage."
            }
          },
          {
            "@type": "Question",
            "name": "Do priests follow Vedic rules?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely, Kadali Vivaha in Srirangapatna is conducted by priests trained in Vedic traditions."
            }
          },
          {
            "@type": "Question",
            "name": "Is prasadam provided?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some packages of marriage dosha remedy in Srirangapatna include prasadam."
            }
          },
          {
            "@type": "Question",
            "name": "Can it be done for late marriages?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Kadali Vivaha in Srirangapatna helps individuals facing extended marriage delays."
            }
          },
          {
            "@type": "Question",
            "name": "Do you help with booking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, complete support is provided for Kadali Vivaha in Srirangapatna from start to finish."
            }
          }
        ]
      }
    ]
  };
  export default function Home() {
    return (
      <>
      <Head>
  {/* Primary Meta Tags */}
  <title>Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual</title>
  <meta
    name="description"
    content="Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama."
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna"
  />

  {/* Open Graph / Facebook */}
  <meta
    property="og:title"
    content="Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual"
  />
  <meta
    property="og:description"
    content="Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama."
  />
  <meta
    property="og:url"
    content="https://narayanabalipoojaservices.com/kadali-vivaha-in-srirangapatna"
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:image"
    content="https://narayanabalipoojaservices.com/images/kadali-vivaha.jpg"
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="Kadali Vivaha in Srirangapatna | Mangal Dosha Remedy Ritual"
  />
  <meta
    name="twitter:description"
    content="Perform Kadali Vivaha in Srirangapatna for Mangal Dosha removal and marriage harmony. Experienced priests and complete ritual arrangements at the Sangama."
  />
  <meta
    name="twitter:image"
    content="https://narayanabalipoojaservices.com/images/kadali-vivaha.jpg"
  />
  <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
</Head>

      <StaticNavbarPuja/>
      <AboutBanner/>
      {/* <FeaturedPujas2/> */}
      
      <RitualProcess5/>
    
      <WhyChooseUs5/>
      
      <FloatingContacts2 position="left" />
        <FloatingContacts position="right" />
      {/* <TestimonialsCarousel/> */}
        <FooterSection/>
      </>
    );
  }
