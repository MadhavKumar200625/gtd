// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Global Exporter Insights | Increase Market Reach with Global Trade Data Service`;
  const description = `Unlock global market potential with GTD Service’s comprehensive database of verified exporters. Gain valuable trade insights, identify opportunities, and grow your business.`;
  const keywords = [
    "exporters, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/exporters`,
    },
    openGraph: {
        title: 'Global Exporter Insights | Increase Market Reach with Global Trade Data Service',
        description: "Unlock global market potential with GTD Service’s comprehensive database of verified exporters. Gain valuable trade insights, identify opportunities, and grow your business.",
        url: 'https://gtdservice.com/exporters',
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
        title: 'Global Exporter Insights | Increase Market Reach with Global Trade Data Service',
        description: "Unlock global market potential with GTD Service’s comprehensive database of verified exporters. Gain valuable trade insights, identify opportunities, and grow your business.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
