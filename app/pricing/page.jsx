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
  return <ClientPage />;
}
