import React from "react";
import Breadcrump from "../common/Breadcrump";
import Clients from "../common/Clients";
import Testomonials from "../common/Testomonials";

export const metadata = {
  title: 'About Us | GTD Solutions LLC - GTD Service',
  description: 'GTD Service provides invaluable insights into international import-export trade data markets, helping import-export businesses make informed decisions.',
  keywords: 'Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers',
  alternates: {
    canonical: 'https://gtdservice.com/about',
  },
  openGraph: {
    title: 'About Us | GTD Solutions LLC - GTD Service',
    description: 'GTD Service provides invaluable insights into international import-export trade data markets, helping import-export businesses make informed decisions.',
    url: 'https://gtdservice.com/about',
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
    title: 'About Us | GTD Solutions LLC - GTD Service',
    description: 'GTD Service provides invaluable insights into international import-export trade data markets, helping import-export businesses make informed decisions.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};


const page = () => {
  return (
    <>

      <Breadcrump
        pageName="About Us"
        heading="About Us"
        peragraph="GTD Service helps you to detail over 200+ countries' global export-import trade data. In order to provide more accurate information about Global Import Export Data, GTD Service has developed a modern infrastructure setup with our highly professional technical team, which has decades of expertise in trade data mining and data processing."
        subPage="Company"
      />

      {/* ---------GTIS start--------------  */}
      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
                Overview
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight tracking-tighter">
                Why GTD SOLUTIONS LLC?
              </h3>
              <p className="text-base text-gray-700 mb-3">
              Global Trade Data Service provides invaluable insights into international import-export trade data markets, helping import-export businesses make informed decisions. Access real-time global trade data service to identify new opportunities, optimize supply chains, and stay ahead of market trends. Enhance your competitive edge with accurate, reliable, and up-to-date trade information.
              </p>
              <p className="text-base text-gray-700">
              We are able to deliver the most accurate systematic global export-import trade data that helps you to analyze ongoing trade data inflow and suitable demand positions around the global market.
              </p>
            </div>
            <div className="order-1 lg:order-2 mb-8 md:mb-0">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <img
                    src="/images/ABOUT-US.webp"
                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                    alt="Global trade data service"
                    title="Global trade data service"
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------GTIS end--------------  */}

      {/* ---------Benefits Start--------------  */}
      <section className="bg-blue-950 py-20">
        <div className="container mx-auto px-5 md:px-0">
          <div className="md:grid md:grid-cols-2 mt-5">
            <div className="">
              <h4 className="text-primary text-lg text-emerald-300 font-medium tracking-tight">
                Benefits
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight tracking-tighter text-white">
                Benefits of Import Export Data
              </h3>
              <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-6 mt-4 md:mt-7">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 fill-emerald-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-black">
                You can make more informed decisions about your import-export trade strategies by understanding global import-export trade data market trade flows, market demands and product trends allowing you to optimize your operations. Minimize risks and identify new opportunities with confidence.
                </p>
              </div>
              <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 fill-emerald-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-black">
                Get comprehensive global export and import data that helps you analyze emerging markets and assess demand across various regions. The available import data and export data enables you to identify profitable markets for expansion and tailor your products and services to meet the specific needs of your target audience.
                </p>
              </div>
              <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 fill-emerald-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-black">
                GTD Service helps you to stay ahead of your competitors by utilizing accurate and up-to-date global trade data. You can track competitors' activities and monitor pricing trends and adapt your international business strategies to gain an edge in your industry.
                </p>
              </div>
              <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-6">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-10 fill-emerald-300"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-black">
                Import-export trade data can help you streamline your supply chain by offering insights into trade volumes, transit routes, and supplier performance. This enables you to make better choices in sourcing logistics and inventory management, reducing costs and improving operational efficiency. 
                </p>
              </div>

              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight tracking-tighter mt-10 text-white">
                Our Code of Conduct
              </h3>
              <p className="text-gray-300 mb-2">
              GTD Service data is highly specific in details of{" "}
                <span className="text-emerald-400">
                  export-import data services
                </span>{" "}
                and serves the highest aspirations of the clients and their business needs.
              </p>
              <p className="text-gray-300 mb-2">
              Our primary objective is to meet the expectations set by our clients to ensure trust and confidence. We strongly believe in maintaining a fair and transparent process in all matters that may affect the interests of our clients.
              </p>
              <p className="text-gray-300 mb-3">
                <span className="text-emerald-400">Global trade data Service</span> leaves no stone unturned in carrying out data research and data mining to prove their authentic code of conduct.
              </p>
              <p className="text-lg text-emerald-400 font-bold">
                “Honesty is integrated into the soul of our company values and professional conduct.“
              </p>
            </div>
            <div className="">
              <img
                src="/images/About-2.webp"
                className="w-full sticky top-0"
                alt="Global import export data provider"
                title="Global import export data provider"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ---------Benefits end--------------  */}

      {/* ---------Clients start--------------  */}
      <Clients />
      {/* ---------Clients end--------------  */}

      {/* ---------Testomonials Start--------------  */}
      <Testomonials />
      {/* ---------Testomonials end--------------  */}
    </>
  );
};

export default page;
