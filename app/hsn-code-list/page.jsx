// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` HSN Code List - CTH Code List - ITC HS Code List | GTD Service `;
  const description = `Streamline your global trade processes with GTD Service’s custom API development and integration. Secure, scalable APIs for import-export, logistics, and more.`;
  const keywords = [
    "best api development services, api development, api development companies in usa, api integration services, api development and integration services, api development agency, custom api integration services, api services company, custom api development services, rest api integration services, api integration company, api development and integration services"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/hsn-code-list`,
    },
    openGraph: {
        title: 'HSN Code List - CTH Code List - ITC HS Code List | GTD Service ',
        description: "Streamline your global trade processes with GTD Service’s custom API development and integration. Secure, scalable APIs for import-export, logistics, and more.",
        url: 'https://gtdservice.com/hsn-code-list',
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
        title: 'HSN Code List - CTH Code List - ITC HS Code List | GTD Service ',
        description: "Streamline your global trade processes with GTD Service’s custom API development and integration. Secure, scalable APIs for import-export, logistics, and more.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
