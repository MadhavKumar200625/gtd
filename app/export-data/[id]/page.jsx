import ClientComponent from './ClientComponent';
import { getPageMeta_export } from '@/lib/api';

export async function generateMetadata({ params }) {
  const { id } = await params;

  let id_a = '';
  if (id && id.length > 3) {
    id_a = id.charAt(0).toUpperCase() + id.slice(1);
  }

  const meta = await getPageMeta_export(id);

  const title = meta?.meta_title || `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`;
  const description = meta?.meta_description || `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`;


  //const title = `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`;
  //const description = `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`;
  const keywords = [
    `${id} export products`,
    `${id} export data`,
    `${id} customs shipment data`,
    `${id} trade statistics 2025`,
    `${id} trade intelligence`,
    `${id} exporters list`,
    `${id} HS code data`,
    `${id} export statistics`,
    `${id} port export data`,
    `${id} export partners`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/export-data/${id}`,
    },
    openGraph: {
      title : `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`,
      description : `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`,
      url: `https://gtdservice.com/export-data/${id}`,
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
      title: `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`,
      description: `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`,
      site: '@gtdservice',  // Your Twitter handle
      creator: '@gtdservice', // Your Twitter handle
      images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
    },
  };
}

export default async function Page({ params }) {
  params = await params
  return <ClientComponent id={params.id}  />;
}
