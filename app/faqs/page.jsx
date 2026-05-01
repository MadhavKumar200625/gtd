// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Learn More: FAQs on Global Trade Insights and Services | GTD Service`;
  const description = `Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.`;
  const keywords = [
    "Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/faqs`,
    },
    openGraph: {
        title: 'Learn More: FAQs on Global Trade Insights and Services | GTD Service',
        description: "Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.",
        url: 'https://gtdservice.com/faqs',
        siteName: 'GTD Service',
        type: 'website',
        images: [
          {
            url: 'https://gtdservice.com/images/logo.svg', // Replace with your real OpenGraph image
            alt: `Global Trade Data`,
          },
        ],
      },
      twitter: {
        card: 'summary',
        title: 'Learn More: FAQs on Global Trade Insights and Services | GTD Service',
        description: "Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <> 
  <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
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
      "name": "Can I get real-time shipment data?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer near real-time shipment data and trade analytics that help businesses monitor global trade activities and respond quickly to market changes."
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
        "text": "Our services are ideal for importers, exporters, logistics companies, market researchers, financial institutions, and businesses looking to expand globally using trade intelligence."
      }
    },
    {
      "@type": "Question",
      "name": "How can I get started with GTD Service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can get started by requesting a demo or trial through our website, where our team will guide you through accessing and using global trade data effectively."
      }
    }
  ]
}


`}
        </script>
  
  <ClientPage /></>;
}
