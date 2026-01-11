// File: app/global-companies-list/[[...params]]/page.jsx

import PortPage from './PortPage';  

export async function generateMetadata({ params }) {
  params = await params
  const [country = "", letter = ""] = params.params || [];

  const formattedCountry = country.replaceAll('-', ' ');
  const title = `Global Ports Data by country – Container Port Information and Statistics`;
  const description = `Access detailed Global port data by country. Explore thousands of international sea ports using our comprehensive container port database. Download the complete world port list in Excel or PDF format.`;
  const keywords = [
    formattedCountry,
    `Global ports data, Container ports data, World sea port list, Port data by country, International port database,  Container port statistics by country, Sea port data in PDF format, Detailed global shipping port data, Country-wise port information, Maritime trade data, Global shipping ports, International sea ports directory, Port traffic statistics, Export import ports data`,
    `${formattedCountry} companies list`,
    `${formattedCountry} business directory`,
    `${formattedCountry} company database`,
    `global companies in ${formattedCountry}`,
    `company list ${formattedCountry} a to z`,
    `top companies in ${formattedCountry}`,
    `multinational companies in ${formattedCountry}`,
    `international businesses in ${formattedCountry}`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://eximtradedata.com/global-ports`,
    },
    openGraph: {
      title: `Global Ports Data by country – Container Port Information and Statistics`,
      description: `Access detailed Global port data by country. Explore thousands of international sea ports using our comprehensive container port database. Download the complete world port list in Excel or PDF format.`,
      url: `https://eximtradedata.com/global-ports`,
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
    title: `Global Ports Data by country – Container Port Information and Statistics`,
    description: `Access detailed Global port data by country. Explore thousands of international sea ports using our comprehensive container port database.`,
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
  };
}

  

export default function PageWrapper(props) {
  return <PortPage {...props} />;
}
