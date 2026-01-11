// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata(context) {
    console.log("Params:", context.params); // Check what it gives
    return {
      title: "Directory of Import Export Products: Starting with Alphabet A - GTD Service",
      description: "Explore detailed information on Global Import-Export products from A to Z with GTD's comprehensive Directory of Global Import-Export Products.",
      keywords: "Global import-export directory, Import export products A to Z, GTD import-export guide, International trade products, Global trade directory, Directory of global import export products, Import export product list A to Z, GTD international trade database, Alphabetical list of export items, Import export product information, Global trade data",
      alternates: {
        canonical: `https://gtdservice.com/global-products`,
      },
      openGraph: {
          title: 'Directory of Import Export Products: Starting with Alphabet A - GTD Service',
          description: "Explore detailed information on Global Import-Export products from A to Z with GTD's comprehensive Directory of Global Import-Export Products.",
          url: 'https://gtdservice.com/global-products',
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
          title: 'Directory of Import Export Products: Starting with Alphabet A - GTD Service',
          description: "Explore detailed information on Global Import-Export products from A to Z with GTD's comprehensive Directory of Global Import-Export Products.",
          site: '@gtdservice',  // Your Twitter handle
          creator: '@gtdservice', // Your Twitter handle
          images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
        },
    };
  }
  

export default function PageWrapper(props) {
  return <ClientPage {...props} />;
}
