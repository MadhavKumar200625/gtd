// File: app/global-companies-list/[[...params]]/page.jsx

import ClientPage from './ClientPage';

export async function generateMetadata({params }) {
 const title = `Company Profile Removal Form | GTD Solutions LLC - GTD Service`;
  
 const decodedCompany = decodeURIComponent(params.company || "");
 const decodedCountry = decodeURIComponent(params.country || "India");
  return {
    title,
    
    alternates: {
      canonical: `https://gtdservice.com/companyremovalform/${decodedCountry}/${decodedCompany}`,
    },
  };
}




export default function PageWrapper() {
  return <ClientPage />;
}
