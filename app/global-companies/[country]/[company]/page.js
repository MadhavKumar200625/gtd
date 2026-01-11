// app/global-companies/[country]/[company]/page.js

import ClientCompanyProfile from "./ClientCompanyProfile";

export async function generateMetadata({ params }) {
  //const { country, company } = params;
  const country = decodeURIComponent(params.country);
  const company = decodeURIComponent(params.company);

  //let company_a = '';
  //if (company && company.length > 3) {
   // company_a = company.charAt(0).toUpperCase() + company.slice(1);
 // }
 let company_a = '';

 if (company && company.length > 3) {
   // Replace dashes with spaces before splitting and title-casing
   company_a = company
     .replaceAll('-', ' ')  // handle slugs like `amphenol-interconnect-india`
     .split(' ')
     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
     .join(' ');
 }


  const title = `${company_a.replaceAll('-', ' ')} - Import Export Trade Data, Buyers, Suppliers | GTD Service`;
  const description = `Discover key import export data for ${company.replaceAll('-', ' ')}. Get insights into global trade activity, shipment records, and company details at GTD Service.`;
  const keywords = [
    `${company.replaceAll('-', ' ')}`,
    `${company.replaceAll('-', ' ')} import data`,
    `${company.replaceAll('-', ' ')} export records`,
    `${company.replaceAll('-', ' ')} shipment data`,
    `global trade data`,
    `${company.replaceAll('-', ' ')} trade records`,
    `Global exporters`,
    `Global importers`,
    `Global trade`,
    `${company.replaceAll('-', ' ')} customs data`,
  ];

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://gtdservice.com/global-companies/${country}/${company}`,
    },
    openGraph: {
      title,
      description,
      url: `https://gtdservice.com/global-companies/${country}/${company}`,
    },
  };
}

export default function Page({ params }) {
  return <ClientCompanyProfile country={params.country} company={params.company} />;
}
