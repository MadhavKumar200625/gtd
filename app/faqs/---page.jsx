"use client";
import React, { useState } from "react";
import Breadcrump from "../common/Breadcrump";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Breadcrump heading="Frequently Asked Questions" pageName="FAQs" />
      <Aboutfaqs />
      <BenefitsFaqs />
    </>
  );
};

export default page;

const Aboutfaqs = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Track the currently expanded FAQ

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active FAQ
  };

  return (
    <>
      <section>
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="text-center mb-5">
            <h4 className="text-primary text-lg text-gray-400 font-medium">
              Frequently Asked Questions for
            </h4>
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
            About GTD Services
            </h3>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 1 ? "text-blue-600" : ""
                }`}
              >
                What is GTD Service?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 1 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 1
                  ? "max-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Global Trade Data Service is the most reliable global import export data provider. We provide detailed insights into the global trade market using our exclusive database of over 200+ countries.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 2 ? "text-blue-600" : ""
                }`}
              >
                What services do GTD Service provide?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 2 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 2
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Service customises data solutions to match the needs of its clients. We provide our customers with BI-powered import-export analytics, customs data, port data, and data reports from global companies.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 3 ? "text-blue-600" : ""
                }`}
              >
                Why should I use GTD Service?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 3 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 3
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Service provides fast access to data from 200+ countries, global products data, global companies shipment data, global HS Code List, free sample data, and unlimited data search on its platform.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(4)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 4 ? "text-blue-600" : ""
                }`}
              >
                How many countries do GTD Service cover in its database?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 4 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 4
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We provide verified import-export data for more than 200 countries. We have built an excellent database that assists firms in understanding the global trade market through our data mining and processing skills.
              </p>
            </div>
          </div>

          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(5)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 5 ? "text-blue-600" : ""
                }`}
              >
                How can GTD Service help my business?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 5 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 5
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              {/* <p className="overflow-hidden text-base text-gray-600">
                Suppose, we are given an ITC HS Code: 9009840000
              </p> */}
              <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                <ul className="ps-4">
                  <li className="list-disc">
                  Increase your sales potential by generating excellent leads.
                  </li>
                  <li className="list-disc">
                  High-quality data with meaningful insights.
                  </li>
                  <li className="list-disc">
                  Utilise a database of global companies to track and monitor competitors.
                  </li>
                  <li className="list-disc">
                  Find genuine buyers and suppliers for your business.
                  </li>
                  <li className="list-disc">
                  Identify the global market trends, demand, and risks.
                  </li>
                </ul>
              </fieldset>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(6)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 6 ? "text-blue-600" : ""
                }`}
              >
                How is GTD Service different from other Market Intelligence Platforms available in the market?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 6 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 6
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Although there are several Market Intelligence Platforms on the market, GTD Service provides some unique services to its clients. These include -
              </p>
              <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                <ul className="ps-4">
                  <li className="list-disc">Customized Reports (yearly, monthly & quarterly)</li>
                  <li className="list-disc">200+ countries data</li>
                  <li className="list-disc">Unlimited Free Data Search</li>
                  <li className="list-disc">Free Sample Data</li>
                  <li className="list-disc">Global Exporters Shipment Data</li>
                  <li className="list-disc">Global Importers Shipment Data</li>
                  <li className="list-disc">Global Ports Shipment Data</li>
                  <li className="list-disc">Global Products Shipment Data</li>
                  <li className="list-disc">Global HS Code List</li>
                </ul>
              </fieldset>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(7)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 7 ? "text-blue-600" : ""
                }`}
              >
                Who are your clients?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 7 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 7
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
                GTD Service has worked with some of the top clients over the years including - Mahindra, Hero Motorcorp, Dell, Bajaj, Orient Bell Tiles and many more.
              </p>
              {/* <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                <ul className="ps-4">
                  <li className="list-disc">Dell</li>
                  <li className="list-disc">Bajaj</li>
                  <li className="list-disc">Mahindra</li>
                  <li className="list-disc">Hero Motorcorp</li>
                  <li className="list-disc">Orient bell Tiles</li>
                </ul>
              </fieldset> */}
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(8)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 8 ? "text-blue-600" : ""
                }`}
              >
                Do you provide verified data? What is the source of Data and its accuracy?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 8 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 8
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Service data is derived from global bills of lading, commercial invoices, customs data, port shipments, government entities, trade associates, logistics, and other reliable sources in the import-export industry.  We collaborate with global partners and have a global market presence.  You can regard us as the most trustworthy global import-export data provider.  We are recognised for our data accuracy and quality.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(9)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 9 ? "text-blue-600" : ""
                }`}
              >
                Where can I get additional assistance using GTD Service Services?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 9 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 9
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Service offers its customers seamless support. You may easily contact us by email: {" "} 
                <a
                  className="text-blue-500 text-base"
                  href="mailto:support@gtdservice.com"
                >
                  support@gtdservice.com{" "}
                </a>{" "} or live chat.
                {/* / Live Chat. Also, you can call us at{" "}
                <a
                  className="text-blue-500 text-base"
                  href="tel:+91-9625812393"
                >
                  +91-9625812393.
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const BenefitsFaqs = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Track the currently expanded FAQ

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active FAQ
  };

  return (
    <>
      <section>
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="text-center mb-5">
            <h4 className="text-primary text-lg text-gray-400 font-medium">
              Frequently Asked Questions for
            </h4>
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
              Features & Benefits of Global Import Export Data
            </h3>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 1 ? "text-blue-600" : ""
                }`}
              >
                What are the different types of Data?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 1 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 1
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <h6 className="text-lg font-semibold">
              There are various forms of data, including:
              </h6>
              <p className="overflow-hidden text-base text-gray-600">
                <b>Statistical Data:</b> It is useful for identifying market trends, predicting demand, and evaluating product pricing. It consists of data which includes shipment date, product quantity, price, and country of origin/destination.
              </p>
              <p className="overflow-hidden text-base text-gray-600">
                <b>Customs Data:</b> Customs Data is information provided by the customs departments of various countries. It contains important shipping information such as the product HS code, description, nation, buyer, supplier name, and port of loading/unloading.
              </p>
              <p className="overflow-hidden text-base text-gray-600">
                <b>Mirror Data:</b> It contains data from nations with minimal coverage. It is taken from data provided by their trading partners.
              </p>
              <p className="overflow-hidden text-base text-gray-600">
                <b>Bill of Lading Data:</b> This type of data is determined based on a company's shipping details, removing pricing.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 2 ? "text-blue-600" : ""
                }`}
              >
                How can I choose which data is best suited to my requirements?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 2 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 2
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Well, it depends on your business needs.
              </p>
              <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                <ul className="ps-4">
                  <li className="list-disc">
                  If you want to get crucial market insights such as top product imports, exports, prices, and so on, you can use statistical data.
                  Customs Data can help you get authentic leads for your organization. Custom data includes importers and exporters names, country, HS code of the product, description, and other information.
                  </li>
                  <li className="list-disc">
                  Finally, you can modify your data to suit your needs. GTD Services provides the best data solutions for your organization.
                  </li>
                </ul>
              </fieldset>
              {/* <p className="overflow-hidden text-base text-gray-600">
                At last, you can customize your data as per your needs. At Exim
                Trade Data, we bring the best data solutions for your business.
              </p> */}
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 3 ? "text-blue-600" : ""
                }`}
              >
                How many countries data do you provide in your services?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 3 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 3
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We provide import and export statistics for more than 200 countries.  You may get top imports, exports, buyer and supplier lists for top trading countries such as Russia, Vietnam, Turkey, Indonesia, Philippines, and more.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(4)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 4 ? "text-blue-600" : ""
                }`}
              >
                Which data fields do you cover in your data reports?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 4 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 4
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We provide important data elements such as Product HS Code, Importer Name, Exporter Name, Description, Quantity, Unit, Value, Country of Origin/Destination, Port, and Shipment Details.
              </p>
            </div>
          </div>

          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(5)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 5 ? "text-blue-600" : ""
                }`}
              >
                How many countries’ exclusive data do you provide?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 5 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 5
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We give exclusive statistics for 200+ countries, including Turkey, Mexico, Tanzania, Bangladesh, Fiji, Zambia, and Congo. So, if you want to explore potential in these special markets, please contact us.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(6)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 6 ? "text-blue-600" : ""
                }`}
              >
                How do you make your data reports?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 6 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 6
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We offer country-specific statistics reports (monthly, quarterly, and yearly). You can also collect import and export data by country.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(7)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 7 ? "text-blue-600" : ""
                }`}
              >
                How frequently the database is revised? 
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 7 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 7
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              We provide weekly updates on the statistics for various countries.  We do our best to keep you up to date on the latest market ups and downs using our data.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(8)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 8 ? "text-blue-600" : ""
                }`}
              >
                How can I find out the HSN Code for my product?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 8 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 8
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
                
                Our HS Code Finder can help you find the HS Code for any item. Using our 
                <a className="text-blue-500" href="/global-hs-code-list">
                  Global HSN Code List
                </a>, you may find the HSN code for more than 5000+ products.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(9)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 9 ? "text-blue-600" : ""
                }`}
              >
                Do you provide a Global companies List?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 9 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 9
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Yes, we have an exclusive database of country-specific importers and exporters. The Global Companies Database Directory provides genuine leads.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(10)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 10 ? "text-blue-600" : ""
                }`}
              >
                Can I track my competitor’s shipment activities?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 10 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 10
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Yes, we assist organisations with detailed competitor analysis.  Our Global Companies database allows you to track all of your competitors' cargo actions from countries such as Vietnam, Turkey, Indonesia, and Tanzania.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(11)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 11 ? "text-blue-600" : ""
                }`}
              >
                Can I download customs data from GTD Services?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 11 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 11
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              Yes, you can obtain the data sample, HS Code List, and GST rates in Excel and PDF format.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(12)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 12 ? "text-blue-600" : ""
                }`}
              >
                Which site is best for import export trade data?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 12 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 12
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Services offers the best import and export data solutions for all industries. They contain trade statistics for more than 200 countries.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(13)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 13 ? "text-blue-600" : ""
                }`}
              >
                Is ITC part of the UN?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 13 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 13
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              The International Trade Centre, or ITC, was established in 1964. It is a joint organisation of the United Nations and the World Trade Organisation (WTO).
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(14)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 14 ? "text-blue-600" : ""
                }`}
              >
                How many types of trade are there?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 14 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 14
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              There are two types of trades: Home Trade and foreign Trade.</p>
              <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                <ul className="ps-4">
                  <li className="list-disc">
                  Home Trade is further divided into two types: Retail Trade & Wholesale Trade.
                  </li>
                  <li className="list-disc">
                  Foreign trade is classified into three types: Export Trade, Import Trade and Entrepot Trade.
                  </li>
                </ul>
              </fieldset>
              
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(15)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 15 ? "text-blue-600" : ""
                }`}
              >
                How can I become an exporter?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 15 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 15
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="overflow-hidden text-base text-gray-600">
              <p className="overflow-hidden text-base text-gray-600">
              Genuine buyers, competitive price, and a high-quality goods are necessary to become a successful exporter. Our worldwide exporters' database provides all of these useful insights. Visit our global search page for more infromation.
                </p>
              </div>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(16)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 16 ? "text-blue-600" : ""
                }`}
              >
                How can an import-export business find customers?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 16 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 16
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              With the help of GTD Services, you may view the profiles of numerous importers and exporters who might become your future customers.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(17)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 17 ? "text-blue-600" : ""
                }`}
              >
                How can I obtain port data in India?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 17 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 17
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              GTD Services offers complete shipments by HS Code, Product Description, Buyer, Supplier Name, and Country of Origin/Destination together with global port data.
              </p>
            </div>
          </div>
          {/* --------------Question Start---------------------- */}
          <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => handleToggle(18)}
            >
              <h5
                className={`text-lg font-bold text-black ${
                  activeIndex === 18 ? "text-blue-600" : ""
                }`}
              >
                How do I start an import export business?
              </h5>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`size-4 transform transition-transform duration-300 ${
                    activeIndex === 18 ? "rotate-45 stroke-blue-600" : ""
                  }`}
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === 18
                  ? "min-h-fit opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="overflow-hidden text-base text-gray-600">
              A successful import-export business begins with thorough market research. There are many important factors which are needed to keep in mind such as market demand, product pricing, risk involved, competitor analysis and potential business clients. A Global Import Export Data from GTD Services can help your business to succeed in the global market.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
