// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Get Started with GTD Service | Global Trade Intelligence Platform`;
  const description = `Begin your journey with GTD Service's Global Trade Intelligence System. Access the world's largest trade database to connect with international buyers and suppliers. Discover industry-specific insights and unlock new business opportunities across various sectors.`;
  const keywords = [
    "GTD Service, global trade intelligence, import export data, trade database, international trade insights, connect with buyers, connect with suppliers, industry-specific trade data, global market opportunities"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/get-started`,
    },
    openGraph: {
        title: 'Get Started with GTD Service | Global Trade Intelligence Platform',
        description: "Begin your journey with GTD Service's Global Trade Intelligence System. Access the world's largest trade database to connect with international buyers and suppliers. Discover industry-specific insights and unlock new business opportunities across various sectors.",
        url: 'https://gtdservice.com/get-started',
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
        title: 'Get Started with GTD Service | Global Trade Intelligence Platform',
        description: "Begin your journey with GTD Service's Global Trade Intelligence System. Access the world's largest trade database to connect with international buyers and suppliers. Discover industry-specific insights and unlock new business opportunities across various sectors.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
