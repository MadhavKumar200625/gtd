// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Learn More: FAQs on Global Trade Insights and Services | GTD Service`;
  const description = `Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.`;
  const keywords = [
    "Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/faqs`,
    },
    openGraph: {
        title: 'Learn More: FAQs on Global Trade Insights and Services | GTD Service',
        description: "Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.",
        url: 'https://gtdservice.com/faqs',
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
        title: 'Learn More: FAQs on Global Trade Insights and Services | GTD Service',
        description: "Find answers to common questions about GTD Service’s global trade data solutions. Learn about our services, data accuracy, and how we can support your business growth.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
