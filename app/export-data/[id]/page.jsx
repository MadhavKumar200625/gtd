import ClientComponent from './ClientComponent';
import { getPageMeta_export } from '@/lib/api';


function normalizeCountry(id) {
  if (!id) return '';

  return id
    .toLowerCase()
    .replace(/%e2%80%99/g, '') // encoded apostrophe
    .replace(/'/g, '')         // remove '
    .replace(/\s+/g, '-')      // spaces → dash
    .trim();
}
export async function generateMetadata({ params }) {
  let { id } = await params;
id = decodeURIComponent(id);

const normalized = normalizeCountry(id);   // ✅ important

let id_a = '';
if (normalized && normalized.length > 3) {
  id_a = normalized
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const meta = await getPageMeta_export(normalized);

  const title = meta?.meta_title || `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`;
  const description = meta?.meta_description || `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`;


  //const title = `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`;
  //const description = `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`;
  const keywords = [
    `${normalized} export products`,
    `${normalized} export data`,
    `${normalized} customs shipment data`,
    `${normalized} trade statistics 2025`,
    `${normalized} trade intelligence`,
    `${normalized} exporters list`,
    `${normalized} HS code data`,
    `${normalized} export statistics`,
    `${normalized} port export data`,
    `${normalized} export partners`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/export-data/${normalized}`,
    },
    openGraph: {
      title : `${id_a} - Export Data | ${id_a} Shipment Data Online - GTD Service`,
      description : `We have 100% authentic details based on ${id_a} export customs data and shipment data. You can opt for online and offline or customized plans at a reasonable price.`,
      url: `https://gtdservice.com/export-data/${normalized}`,
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
params = await params;
const raw = decodeURIComponent(params.id);
const normalized = normalizeCountry(raw);

return <ClientComponent id={normalized} />;
}
