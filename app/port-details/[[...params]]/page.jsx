import ClientPage from "./ClientPage";

export async function generateMetadata({ params }) {
  const [country = '', port = ''] = params.params || [];

  const title = `${port.replaceAll('-', ' ')} - Port Details | GTD Service`;
  const description = `View detailed information about the ${port.replaceAll('-', ' ')} in ${country}. Explore trade activity, shipment data, and port codes with GTD Service.`;
  const keywords = [
    `${port.replaceAll('-', ' ')}`,
    `${port.replaceAll('-', ' ')} port details`,
    `${port.replaceAll('-', ' ')} port code`,
    `${port.replaceAll('-', ' ')} shipment data`,
    `global trade data`,
    `${port.replaceAll('-', ' ')}  trade ports`,
    `Global exporters`,
    `Global importers`,
    `Global trade`,
    `${port.replaceAll('-', ' ')} customs ports`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/port-details/${country}/${port}`,
    },
    openGraph: {
      title: `${port.replaceAll('-', ' ')} - Port Details | GTD Service`,
      description:`View detailed information about the ${port.replaceAll('-', ' ')} in ${country}. Explore trade activity, shipment data, and port codes with GTD Service.`,
      url: `https://gtdservice.com/port-details/${country}/${port}`,
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
      title: `${port.replaceAll('-', ' ')} - Port Details | GTD Service`,
      description: `View detailed information about the ${port.replaceAll('-', ' ')} in ${country}. Explore trade activity, shipment data, and port codes with GTD Service.`,
      site: '@gtdservice',  // Your Twitter handle
      creator: '@gtdservice', // Your Twitter handle
      images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
    },
  };
}

export default function Page({ params }) {
  const [country = '', port = ''] = params.params || [];

  return <ClientPage country={country} port={port} />;
}
