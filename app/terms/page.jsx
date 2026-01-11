import React from "react";
import Breadcrump from "../common/Breadcrump";

export const metadata = {
  title: "Terms & Conditions: Global Trade Data Service Website Usage Guidelines",
  description: "Review the terms and conditions for using GTD Service’s platform. Understand the guidelines for accessing our website, data usage, and privacy practices.",
  keywords: ["Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers"],
  alternates: {
    canonical: "https://gtdservice.com/terms"
  },
  openGraph: {
    title: 'Terms & Conditions: Global Trade Data Service Website Usage Guidelines',
    description: "Review the terms and conditions for using GTD Service’s platform. Understand the guidelines for accessing our website, data usage, and privacy practices.",
    url: 'https://gtdservice.com/terms',
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
    title: 'Terms & Conditions: Global Trade Data Service Website Usage Guidelines',
    description: "Review the terms and conditions for using GTD Service’s platform. Understand the guidelines for accessing our website, data usage, and privacy practices.",
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  return (
    <>
      <Breadcrump heading="Terms & Conditions" pageName="Terms & Conditions" />

      <div className="container px-3 md:px-0 mx-auto py-20">
        <div className="policy_sec">
          <div className="pro-details">
            <h2 className="text-3xl font-bold mb-2 text-blue-700">
              Global Trade Data Service : Terms Of Service
            </h2>
            <p className="text-base text-gray-600 pb-3">
             Find the terms and conditions of service that
             apply to all visitors of the <a href="" target="_blank"><b>gtdservice.com</b></a> website 
             and associated web pages. By accessing this website, 
             you accept the following terms and conditions:
            </p>

            <h3 className="text-black text-xl font-bold mb-2">
              Collection of Personal Information
            </h3>
            <p className="text-base text-gray-600 pb-3">
              Your access to and use of the website is strictly personal. 
              You agree not to copy and reproduce and duplicate and sell 
              and resell and distribute or commercially exploit the website. 
              Its access or any information or technology obtained from it.
               All content on the website including but not limited to text 
               and images and logos and other materials is safeguarded
                under American and international copyright and patent and
                 trademark and other applicable intellectual property laws governing Global Trade Data.
            </p>

            <h3 className="text-black text-xl font-bold mb-2">
              Changes and Modifications to the Website
            </h3>
            <p className="text-base text-gray-600 pb-3">
            Personal details include any information that you choose
             to provide to us as part of registering for an account.
              This will include information such as your name and your 
              phone number and your address and date of birth, social
               security number, bank account details, etc. Besides 
               any information you may directly provide, you may give
                us authorization to access personal details from third parties.
            </p>
            <p className="text-base text-gray-600 pb-3">
              In addition we may also collect information when you 
              use our products or services such as the search queries 
              you use, how you use the services we provide, and the
               types of requests you make.
            </p>

            <h3 className="text-black text-xl font-bold mb-2">
              Use of Personal Information
            </h3>
            <p className="text-base text-gray-600 pb-3">
            We use the personal details you provide primarily for the
             purpose it was shared including fulfilling your requests
              providing relevant information updating you on services 
              that may interest you and enhancing the website and our service 
              offering. Our use of your personal details may include
               but is not limited to the following:
            </p>
            <div className="about_pairaghph">
              <ul className="list-disc ps-6 mb-6">
                <li className="text-base text-gray-600 mb-2">
                  <i className="fa fa-check-circle"></i>Registering you as a user and verifying your
                   identity upon login
                </li>
                <li className="text-base text-gray-600 mb-2">
                  <i className="fa fa-check-circle"></i>Communicating with you 
                  regarding account information details transactions, 
                  client support and marketing updates and other relevant matters.
                </li>
                <li className="text-base text-gray-600 mb-2">
                  <i className="fa fa-check-circle"></i>Maintaining, improving and
                   delivering our services while managing business operations.
                </li>
                <li className="text-base text-gray-600 mb-2">
                  <i className="fa fa-check-circle"></i>Generating data analytics 
                  and reports containing anonymized summaries of personal 
                  details and other non-identifiable data.
                </li>
                <li className="text-base text-gray-600 mb-2">
                Sharing anonymized and aggregated general information with business partners ensuring it does not personally identify you.
                </li>
              </ul>
            </div>

            <h3 className="text-black text-xl font-bold mb-2">
              Disclosure of Personal Information
            </h3>
            <p className="text-base text-gray-600 pb-3">
            Personal details may be disclosed in limited conditions
             including but not limited to meeting any applicable law 
             regulation legal process or enforceable governmental request
              to enforce applicable terms and conditions of service including 
              investigation of potential violations detection prevention or
               otherwise addressing fraud security or technical issues to 
               protect and defend the rights or property of Global Trade
                Data or in an emergency threatening individual life and health or security.
            </p>
            <p className="text-base text-gray-600 pb-3">
            We rely on third-party service providers to perform a 
            variety of services on our behalf such as hosting our websites,
             so we may need to share your personal details with them. 
             We provide our service providers with only personal details 
             to perform their services and we require that they protect this provided 
            information and not use it for any other purpose. We may 
            supplement your personal details with information from third parties. 
            </p>

            <h3 className="text-black text-xl font-bold mb-2 mt-3">
              Information Transfer
            </h3>
            <p className="text-base text-gray-600 pb-3">
            Your personal details may be transferred,
             stored and processed in a country different 
            from where they were originally provided including 
            the United States. We ensure that such transfers
             comply with applicable data protection laws and
              implement safeguards to protect your information 
              regardless of the country in which it is stored or
               processed. Our established procedures and security 
               measures help maintain the confidentiality and
                integrity of your personal details.

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
