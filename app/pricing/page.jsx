// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Import Export Data by Country | Price List - GTD Service`;
  const description = `Find 100% verified international import-export trade data with accurate global import-export trade data details. `;
  const keywords = [
    "import export data, global trade data, global trade database, import export details, usa import export data, international trade imports and exports, imports and exports data by country, import export platform"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/pricing`,
    },
    openGraph: {
        title: 'Import Export Data by Country | Price List - GTD Service',
        description: "Find 100% verified international import-export trade data with accurate global import-export trade data details. ",
        url: 'https://gtdservice.com/pricing',
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
        title: 'Import Export Data by Country | Price List - GTD Service',
        description: "Find 100% verified international import-export trade data with accurate global import-export trade data details. ",
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
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://gtdservice.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pricing",
      "item": "https://gtdservice.com/pricing"
    }
  ]
}





`}
        </script>

          <script type="application/ld+json">
          {`
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Global Import Export Trade Data Service",
  "url": "https://gtdservice.com/pricing",
  "description": "GTD Service provides global import export trade data, shipment records, and market intelligence across 200+ countries with flexible pricing plans tailored for businesses.",
  "provider": {
    "@type": "Organization",
    "name": "GTD Service",
    "url": "https://gtdservice.com"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Worldwide"
  },
  "serviceType": "Import Export Data & Trade Intelligence",
  "offers": [
    {
      "@type": "Offer",
      "name": "Starter Plan",
      "price": "199",
      "priceCurrency": "USD",
      "description": "300 search credits, 10,000 download credits, 1 user license, 1 year historical data, 1 month validity."
    },
    {
      "@type": "Offer",
      "name": "Basic Plan",
      "price": "399",
      "priceCurrency": "USD",
      "description": "1500 search credits, 50,000 download credits, 2 user licenses, 3 years historical data, 3 months validity."
    },
    {
      "@type": "Offer",
      "name": "Plus Plan",
      "price": "699",
      "priceCurrency": "USD",
      "description": "Unlimited search, 150,000 download credits, 4 user licenses, 5 years historical data, 6 months validity."
    },
    {
      "@type": "Offer",
      "name": "Premium Plan",
      "price": "999",
      "priceCurrency": "USD",
      "description": "Unlimited search credits, 400,000 download credits, 6 user licenses, full historical data access, 12 months validity."
    },
    {
      "@type": "Offer",
      "name": "Customized Plan",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Custom pricing plan with unlimited searches, customizable download records, complete historical data access, and priority support."
    }
  ]
}







`}
        </script>
  <ClientPage /></>;
}
