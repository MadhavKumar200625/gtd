// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` GTD Service Clients | Trusted by Global Importers & Exporters`;
  const description = `Discover the global companies and businesses that trust GTD Service for accurate import-export data solutions. Join our growing list of satisfied clients worldwide.`;
  const keywords = [
    "GTD Service clients, import export clients, global trade data customers, international trade partners, trade data services, client testimonials, trusted by exporters, importers clients list"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/our-client`,
    },
    openGraph: {
        title: 'GTD Service Clients | Trusted by Global Importers & Exporters',
        description: "Discover the global companies and businesses that trust GTD Service for accurate import-export data solutions. Join our growing list of satisfied clients worldwide.",
        url: 'https://gtdservice.com/our-client',
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
        title: 'GTD Service Clients | Trusted by Global Importers & Exporters',
        description: "Discover the global companies and businesses that trust GTD Service for accurate import-export data solutions. Join our growing list of satisfied clients worldwide.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
