// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Trade Data Search by Product, HS Code, Country | Trade Data Online - GTD Service`;
  const description = `Our powerful search feature assists you in monitoring international trade streams by HS Code or product name.`;
  const keywords = [
    "search global trade data, import export records, hs code search, shipment data, trade analytics, international trade data, GlobalTradeData search tool"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/search-global-trade-data`,
    },
    openGraph: {
        title: 'Trade Data Search by Product, HS Code, Country | Trade Data Online - GTD Service',
        description: "Our powerful search feature assists you in monitoring international trade streams by HS Code or product name.",
        url: 'https://gtdservice.com/search-global-trade-data',
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
        title: 'Trade Data Search by Product, HS Code, Country | Trade Data Online - GTD Service',
        description: "Our powerful search feature assists you in monitoring international trade streams by HS Code or product name.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
