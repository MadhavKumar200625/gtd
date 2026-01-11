// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({params}) {
  params = await params
    //console.log("Params:", context.params); // Check what it gives
    const baseUrl = "https://gtdservice.com/global-companies-list";
    //const segments = params?.params ?? [];
    const segments = Array.isArray(params) ? params : params?.params || [];


  // Build the path: join segments with '/' if any exist
  const pathSuffix = segments.length > 0 ? `/${segments.join('/')}` : '';
  const canonicalUrl = `${baseUrl}${pathSuffix}`;
    return {
      title: "Global Companies List | Top Global Importers & Exporters – GTD Service",
      description: "Explore GTD Service's Global Companies List to find top importers and exporters across 200+ countries. Access detailed trade intelligence and connect with leading global businesses.",
      keywords: "global companies list, importers exporters directory, trade intelligence, international trade data, global suppliers, international buyers, import export companies, business directory, global trade insights, GTD Service",
      alternates: {
        canonical: canonicalUrl //`https://gtdservice.com/global-companies-list`,
      },
      openGraph: {
        title: 'Global Companies List | Top Global Importers & Exporters – GTD Service',
        description: "Explore GTD Service's Global Companies List to find top importers and exporters across 200+ countries. Access detailed trade intelligence and connect with leading global businesses.",
        url: 'https://gtdservice.com/global-companies-list',
        siteName: 'GTD Service',
        type: 'website',
        images: [
          {
            url: canonicalUrl, //'https://gtdservice.com/images/logo.svg', // Replace with your real OpenGraph image
            alt: `Global Trade Data`,
          },
        ],
      },
      twitter: {
        card: 'summary',
        title: 'Global Companies List | Top Global Importers & Exporters – GTD Service',
        description: "Explore GTD Service's Global Companies List to find top importers and exporters across 200+ countries. Access detailed trade intelligence and connect with leading global businesses.",
        site: '@gtdservice',  // Your Twitter handle
        creator: '@gtdservice', // Your Twitter handle
        images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
      },
    };
  }
  

export default function PageWrapper(props) {
  return <ClientPage {...props} />;
}
