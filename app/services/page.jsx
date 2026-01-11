// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Global Import Export Trade Data Provider Company | GTD Service`;
  const description = `Explore GTD Service's comprehensive import-export trade data solutions. Gain actionable insights, connect with global suppliers, and optimize your supply chain strategy.`;
  const keywords = [
    "Global Import Export Trade Data", "Import Export Data", "Export Import Data", "Global Import Export Data Provider", "Global Import Export Database", "Import Export Data Provider", "export import data provider",  "Import Data provide", "export data provider", "Free Import Export Data", "Import Export Report"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/services`,
    },
    openGraph: {
        title: 'Global Import Export Trade Data Provider Company | GTD Service',
        description: "Explore GTD Service's comprehensive import-export trade data solutions. Gain actionable insights, connect with global suppliers, and optimize your supply chain strategy.",
        url: 'https://gtdservice.com/services',
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
        title: 'Global Import Export Trade Data Provider Company | GTD Service',
        description: "Explore GTD Service's comprehensive import-export trade data solutions. Gain actionable insights, connect with global suppliers, and optimize your supply chain strategy.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
