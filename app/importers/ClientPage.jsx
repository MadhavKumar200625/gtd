"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const page = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-blue-100 via-indigo-100 to-yellow-100 bg-gradient-45 bg-opacity-50">
        <div className="absolute top-0 w-full h-screen z-0 opacity-20">
          <img src="./images/dots.png" className="w-full" alt="" />
        </div>
        <div className="py-8 mx-auto container px-3 lg:py-15 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="/industries-covered"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2"
                  >
                    Solutions
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                    Importers
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-2xl font-bold tracking-normal leading-snug text-dark md:text-3xl mt-6 lg:text-4xl">
            Importers
            </h1>
            <p className="text-base md:text-xl text-gray-900 mb-3">
            Importers are important in international import-export trade as they bring products from overseas markets to satisfy local demand. Companies, wholesalers, and distributors bring in products like electronics, clothing machinery, and raw materials to help sustain different industries.
            </p>
          
          
        </div>
      </section>

      {/* ----------------about Start----------------------  */}

      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="order-2 lg:order-1 col-span-2">
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug tracking-normal">
              Best Trade Intelligence Solution for International Importers
              </h3>
              <p className="text-base md:text-xl text-gray-900 mb-3">
              At Global Trade Data Services, we offer a complete database of confirmed importers globally, assisting exporters, producers, and suppliers in connecting with trustworthy buyers. Whether you're interested in growing your business or researching market trends, our importer information provides useful trade data for well-informed decision-making.

              </p>
              <div className="flex mt-4">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get Insights Report
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden  bg-white">
                <img
                  src="./images/Importers1.webp"
                  className="w-full rounded-lg"
                  alt="Importers"
                  title="Importers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------about End----------------------  */}

      <section className="md:py-20 py-10 container mx-auto px-2">
        <h3 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug tracking-normal">
        Revitalize Your Business in the Global Economy with Our Market Research Reports
        </h3>
        <div className="grid md:grid-cols-2 gap-4 justify-center mt-8">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Identify top suppliers
            </h4>
            <p className="text-base font-normal mt-3">
            Reach out to the highest performing markets by finding the top performing suppliers in the specific country. Access our platform for instant access to the millions of suppliers, distributors, retailers and exporters profiles. Our directory of global exporters' gives you the access to find buyers by product and country.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">Track Shipments</h4>
            <p className="text-base font-normal mt-3">
            Join the world's leading suppliers' shipment business. Learn about their best sellers, prices, and markets, and identify your competitors through our trade intelligence reports. Take all these factors into account and enhance your decision-making process.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Find your competitors
            </h4>
            <p className="text-base font-normal mt-3">
            Our interactive dashboard assists you in conducting in-depth competitor analysis. You can locate most of your competitor profiles on our website and track their shipments. Identify loopholes in their marketing strategy and improve your business accordingly.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Make Profitable Decisions
            </h4>
            <p className="text-base font-normal mt-3">
            By obtaining detailed knowledge regarding global market trends, demand, and risk, you can make more timely and profitable decisions. Our market intelligence reports enable you to upscale your production according to the prevailing market demand. It increases your sales and earns more revenue for your company.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container px-3 md:px-0 mx-auto">
          <h3 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug tracking-normal">
            What You Can Find Out:
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <div className="col-span-2">
              <Slider {...settings}>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          01
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Global Importers Database
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Find access to a list of authentic importers from multiple industries globally. Our database assists companies in reaching trustworthy buyers and venturing into international markets with ease.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          02
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Industry-Specific Importers
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Get access to importers from multiple sectors such as electronics, textiles, pharmaceuticals, food & beverages, chemicals, and machinery. Identify your desired buyers and expand your business.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          03
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Country-Wise Importer List
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Discover importers by nation, from the USA, China, India, Germany, UAE, UK, Canada, Brazil, and many more. Learn about global trade trends and grow your international presence.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          04
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Authentic Buyer Details
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Our directory of importers gives you genuine and current contact information, including company names, addresses, trade backgrounds, and shipping history, to assist you in making the right business decisions.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          05
                        </span>
                        <h4 className="text-xl font-bold text-black">Trade Insights Based on Data</h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Identify import trends, competitors' shipments, and buyers' demand using our trade data curated by experts. Be ahead of the competition with real-time data and informed decision-making.
                      </p>
                    </div>
                  </div>
                </div>
                
              </Slider>
            </div>
            <div>
              <div className="rounded-lg overflow-hidde">
                <img
                  src="./images/IMPORTER 2.webp"
                  className="w-full rounded-lg"
                  alt="Global Import data"
                  title="Global Import data"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------CTA----------------------------- */}
      <section className="py-5 bg-blue-950">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-4 items-center gap-8">
            <div className="mb-6 md:mb-0">
              <img src="./images/phone_mockup.png" alt="Get Access to the Leading Suppliers" title="Get Access to the Leading Suppliers"/>
            </div>
            <div className="col-span-3">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug text-white">
                Get Access to the Leading Suppliers in the Industry
              </h4>
              <div className="flex mt-4">
                <a
                  href="/search-global-trade-data"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Explore More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------CTA----------------------------- */}

      {/* ---------Industry start--------------  */}

      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div>
            <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
              Industry
            </h3>
            <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
              Explore More Industries
            </h2>
          </div>
          <div className="md:grid grid-cols-3 mt-10 gap-6">
            <div className="flex group flex-col gap-4">
              <img
                src="./images/Exporters1.webp"
                className="w-100 rounded-xl"
                alt="Exporters"
                title="Exporters"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                EXPORTER
              </span>
              <a
                href="/exporters"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Enhance Your Sales Potential with Our Global Exporters Database
              </a>
              <a
                href="/exporters"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex group flex-col gap-4">
              <img
                src="./images/Importers1.webp"
                className="w-100 rounded-xl"
                alt="Importers"
                title="Importers"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                IMPORTER
              </span>
              <a
                href="/importers"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Leading Trade Intelligence Platform for Global Importers
              </a>
              <a
                href="/importers"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex group flex-col gap-4">
              <img
                src="./images/AUTOMOTIVE .webp"
                className="w-100 rounded-xl"
                alt="Automotive"
                title="Automotive"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                Automotive
              </span>
              <a
                href="/automative"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Identify the Current Market Trends & Demands in the Automotive
              </a>
              <a
                href="/automative"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex mt-8 gap-3">
            <a
              href="/industries-covered"
              className="rounded-xl mx-auto px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Explore More
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-1  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ---------Industry end-------------- * */}
    </>
  );
};

export default page;
