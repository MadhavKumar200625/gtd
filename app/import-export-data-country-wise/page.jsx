// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Import Export Data | Country wise Importers Exporters List - GTD Service`;
  const description = `GTD Service provides import-export data statistics of 200+ countries based on customs data and shipment data.`;
  const keywords = [
    "import export data, import export database, importers exporters directory, import export data by country, country wise import export data", "import export trade data", "import export customs data", "import export data with importer name"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/import-export-data-country-wise`,
    },
    openGraph: {
        title: 'Import Export Data | Country wise Importers Exporters List - GTD Service',
        description: "GTD Service provides import-export data statistics of 200+ countries based on customs data and shipment data.",
        url: 'https://gtdservice.com/import-export-data-country-wise',
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
        title: 'Import Export Data | Country wise Importers Exporters List - GTD Service',
        description: "GTD Service provides import-export data statistics of 200+ countries based on customs data and shipment data.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
