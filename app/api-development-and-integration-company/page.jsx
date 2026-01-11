// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Trade API | Cloud API service |Custom API Development - GTD Service `;
  const description = `Our custom API development and integration services for import-export businesses streamline the exchange of data between global markets, suppliers, and logistics systems.`;
  const keywords = [
    "best api development services, api development, api development companies in usa, api integration services, api development and integration services, api development agency, custom api integration services, api services company, custom api development services, rest api integration services, api integration company, api development and integration services"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/api-development-and-integration-company`,
    },
    openGraph: {
        title: 'Trade API | Cloud API service |Custom API Development - GTD Service ',
        description: "Our custom API development and integration services for import-export businesses streamline the exchange of data between global markets, suppliers, and logistics systems.",
        url: 'https://gtdservice.com/api-development-and-integration-company',
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
        title: 'Trade API | Cloud API service |Custom API Development - GTD Service ',
        description: "Our custom API development and integration services for import-export businesses streamline the exchange of data between global markets, suppliers, and logistics systems.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
