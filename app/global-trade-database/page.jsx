// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Global Trade Database | Import Export Data by GTD Service`;
  const description = `Access real-time global trade database with detailed import-export records, HS codes, and shipment data. Trusted by businesses worldwide for market insights.`;
  const keywords = [
    "global trade database, import export data, trade data platform, shipment data, hs code data, international trade statistics, global trade data service"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/global-trade-database`,
    },
    openGraph: {
        title: 'Global Trade Database | Import Export Data by GTD Service',
        description: "Access real-time global trade database with detailed import-export records, HS codes, and shipment data. Trusted by businesses worldwide for market insights.",
        url: 'https://gtdservice.com/global-trade-database',
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
        title: 'Global Trade Database | Import Export Data by GTD Service',
        description: "Access real-time global trade database with detailed import-export records, HS codes, and shipment data. Trusted by businesses worldwide for market insights.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
