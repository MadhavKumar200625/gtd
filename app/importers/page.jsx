// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Importers Market Intelligence | Global Trade Data Service`;
  const description = `Discover a comprehensive database of global importers. Access verified buyer details, track trends, and make informed decisions to expand your international business.`;
  const keywords = [
    "importers, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/importers`,
    },
    openGraph: {
        title: 'Importers Market Intelligence | Global Trade Data Service',
        description: "Discover a comprehensive database of global importers. Access verified buyer details, track trends, and make informed decisions to expand your international business.",
        url: 'https://gtdservice.com/importers',
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
        title: 'Importers Market Intelligence | Global Trade Data Service',
        description: "Discover a comprehensive database of global importers. Access verified buyer details, track trends, and make informed decisions to expand your international business.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
