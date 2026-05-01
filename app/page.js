import React from "react";
import Home from "./Home/Home";

const page = () => {
  return (
    <>
    <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://gtdservice.com/#business",
  "name": "GTD Service",
  "url": "https://gtdservice.com/",
  "description": "GTD Service is a global import-export data provider offering trade intelligence, shipment data, and market insights across 200+ countries.",
  "image": "https://gtdservice.com/logo.png",
  "email": "info@gtdservice.com",
  "telephone": "+12629246437",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Street Address Here",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.7128",
    "longitude": "-74.0060"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "sameAs": [
    "https://www.linkedin.com/",
    "https://twitter.com/",
    "https://facebook.com/"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Trade Data Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Import Export Data",
          "description": "Access global shipment data and trade statistics."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Market Research & Analysis",
          "description": "Insights into global trade trends and competitors."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Trade Reports",
          "description": "Customized import-export reports based on business needs."
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "telephone": "+12629246437",
    "email": "info@gtdservice.com",
    "areaServed": "Worldwide",
    "availableLanguage": ["English"]
  }
}



`}
        </script>

            <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://gtdservice.com/"
    }
  ]
}



`}
        </script>

        <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://gtdservice.com/#organization",
      "name": "GTD Service",
      "url": "https://gtdservice.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gtdservice.com/logo.png"
      },
      "description": "GTD Service is a global import export data provider offering shipment data, trade intelligence, and market insights across 200+ countries.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+12629246437",
        "email": "info@gtdservice.com",
        "areaServed": "Worldwide",
        "availableLanguage": ["English"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/gtd-solutions-llc/",
        "https://x.com/gtdsservice",
        "https://www.facebook.com/people/Global-Trade-Data-Service/61575127829118/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://gtdservice.com/#website",
      "url": "https://gtdservice.com/",
      "name": "GTD Service",
      "publisher": {
        "@id": "https://gtdservice.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://gtdservice.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://gtdservice.com/#webpage",
      "url": "https://gtdservice.com/",
      "name": "Global Import Export Data Provider | GTD Service",
      "description": "Access global import export trade data, shipment records, and market intelligence across 200+ countries with GTD Service.",
      "isPartOf": {
        "@id": "https://gtdservice.com/#website"
      },
      "about": {
        "@id": "https://gtdservice.com/#organization"
      },
      "inLanguage": "en"
    },
    {
      "@type": "FAQPage",
      "@id": "https://gtdservice.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does GTD Service provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GTD Service provides global import export trade data, shipment records, and market intelligence across more than 200 countries to help businesses identify opportunities and make informed decisions."
          }
        },
        {
          "@type": "Question",
          "name": "How can import export data help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Import export data helps businesses find buyers and suppliers, analyze market trends, track competitors, identify high-demand products, and expand into new international markets."
          }
        },
        {
          "@type": "Question",
          "name": "Which countries' data do you cover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide trade data from more than 200 countries, including major markets like the USA, China, India, Turkey, and many more."
          }
        },
        {
          "@type": "Question",
          "name": "Is your trade data accurate and updated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, GTD Service provides verified and regularly updated trade data sourced from global customs and shipment records to ensure accuracy and reliability."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer API access for trade data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, GTD Service offers API development and integration solutions that allow businesses to access import export data directly within their systems for automation and advanced analysis."
          }
        },
        {
          "@type": "Question",
          "name": "Who can use GTD Service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our services are ideal for importers, exporters, logistics companies, market researchers, and businesses looking to expand globally using trade intelligence."
          }
        }
      ]
    }
  ]
}






`}
        </script>
      <Home />
     
    </>
  );
};

export default page;
