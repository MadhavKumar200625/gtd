// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ }) {
 const title = ` Contact Us | GTD Solutions LLC - GTD Service`;
  const description = `We help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry.`;
  const keywords = [
    "export and import data, 60 countries global trade data, contact us, usa export and import data, global trade data, Gtd Service data by hs code, hs code list"
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/contact`,
    },
    openGraph: {
        title: 'Contact Us | GTD Solutions LLC - GTD Service',
        description: "We help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry.",
        url: 'https://gtdservice.com/contact',
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
        title: 'Contact Us | GTD Solutions LLC - GTD Service',
        description: "We help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
