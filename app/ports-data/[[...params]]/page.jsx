// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({ params }) {
    params = await params
  const [country = '', port = ''] = params.params || [];


  const formattedCountry = country.replaceAll('-', ' ');
  const title = `${formattedCountry} Port Data | Import & Export Statistics | GTD Service`;
  const description = `Explore detailed ${formattedCountry} port data for import and export shipments. Access up-to-date trade statistics, HS codes, and shipment records by port with GTD Service.`;
  const keywords = [
    formattedCountry,
    `${formattedCountry} port data`,
    `${formattedCountry} import export data`,
    `${formattedCountry} trade statistics`,
    `${formattedCountry} shipment records`,
    ` HS code ${formattedCountry}`,
    `port-wise trade data  ${formattedCountry} a to z`,
    ` international trade  ${formattedCountry}`,
    `import data ${formattedCountry}`,
    `export data ${formattedCountry}`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/ports-data/${country}/`,
    },
    openGraph: {
      title: `${formattedCountry} Port Data | Import & Export Statistics | GTD Service`,
      description: `Explore detailed ${formattedCountry} port data for import and export shipments. Access up-to-date trade statistics, HS codes, and shipment records by port with GTD Service.`,
      url: `https://gtdservice.com/ports-data/${country}`,
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
      title: `${formattedCountry} Port Data | Import & Export Statistics | GTD Service`,
      description: `Explore detailed ${formattedCountry} port data for import and export shipments. Access up-to-date trade statistics, HS codes, and shipment records by port with GTD Service.`,
      site: '@gtdservice',  // Your Twitter handle
      creator: '@gtdservice', // Your Twitter handle
      images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
    },
  };
}

  

export default function PageWrapper(props) {
  return <ClientPage {...props} />;
}
