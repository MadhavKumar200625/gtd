"use client";

import React, { useState } from "react";
import Clients from "../common/Clients";
import Testomonials from "../common/Testomonials";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";

const GlobalTradeDatabase = () => {
  const [showUsd, setShowUsd] = useState(true);

  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
        {/* <div className='absolute -top-2/4 w-full h-screen z-0 opacity-10'>
                    <img src="./images/ports.webp" className='w-full' alt="" />
                </div> */}
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
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
                    Global Trade Database
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
              Explore the Global Trade Database from Over {" "}
                <span className="text-emerald-500">200+</span> Countries
              </h1>
              <p className="mb-8 text-base font-normal text-dark">
              Discover High-ROI (Return on Investment) Business Opportunities and Maximize Profit with <b> Global Trade Data Solutions.</b>
              </p>
              <div className="flex mt-5 gap-3">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule a Demo
                  </span>
                </a>
                <a
                  href="/api-development-and-integration-company"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get API Access
                  </span>
                </a>
              </div>
            </div>
            <div>
              <img
                src="./images/database.svg"
                className="w-2/3 ms-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------countries start-------------- */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                <h6 className="uppercase text-lg font-semibold">Asia</h6>
                <ul className="mt-3">
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-in block text-xl rounded-md"></span>
                    </div>
                    <p>India</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-cn block text-xl rounded-md"></span>
                    </div>
                    <p>China</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-jp block text-xl rounded-md"></span>
                    </div>
                    <p>Japan</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-tr block text-xl rounded-md"></span>
                    </div>
                    <p>Turkey</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-kr block text-xl rounded-md"></span>
                    </div>
                    <p>South Korea</p>
                  </li>
                </ul>
              </div>
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                <h6 className="uppercase text-lg font-semibold">AFRICA</h6>
                <ul className="mt-3">
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-td block text-xl rounded-md"></span>
                    </div>
                    <p>Chad</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-gh block text-xl rounded-md"></span>
                    </div>
                    <p>Ghana</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-ke block text-xl rounded-md"></span>
                    </div>
                    <p>kenya</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-tz block text-xl rounded-md"></span>
                    </div>
                    <p>Tanzania</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-za block text-xl rounded-md"></span>
                    </div>
                    <p>South Africa</p>
                  </li>
                </ul>
              </div>
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                <h6 className="uppercase text-lg font-semibold">EUROPE</h6>
                <ul className="mt-3">
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-gb block text-xl rounded-md"></span>
                    </div>
                    <p>UK</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-es block text-xl rounded-md"></span>
                    </div>
                    <p>Spain</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-ru block text-xl rounded-md"></span>
                    </div>
                    <p>Russia</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-nl block text-xl rounded-md"></span>
                    </div>
                    <p>Netherlands</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-de block text-xl rounded-md"></span>
                    </div>
                    <p>Germany</p>
                  </li>
                </ul>
              </div>
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                <h6 className="uppercase text-lg font-semibold">AMERICA</h6>
                <ul className="mt-3">
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-us block text-xl rounded-md"></span>
                    </div>
                    <p>US</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-mx block text-xl rounded-md"></span>
                    </div>
                    <p> Mexico</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-ar block text-xl rounded-md"></span>
                    </div>
                    <p>Argentina</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-ca block text-xl rounded-md"></span>
                    </div>
                    <p>Canada</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-br block text-xl rounded-md"></span>
                    </div>
                    <p>Brazil</p>
                  </li>
                </ul>
              </div>
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl col-span-2 md:col-span-1">
                <h6 className="uppercase text-lg font-semibold">OCEANIA</h6>
                <ul className="mt-3">
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-fj block text-xl rounded-md"></span>
                    </div>
                    <p>Fiji</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-au block text-xl rounded-md"></span>
                    </div>
                    <p>Australia</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1">
                    <div className="block">
                      <span className="fi fi-nz block text-xl rounded-md"></span>
                    </div>
                    <p>New Zealand</p>
                  </li>
                  <li className="flex items-center gap-2 mb-1 p-2 bg-white rounded-md">
                    <div className="block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p>Many more...</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex">
            <a
              href="/pricing"
              className="rounded-xl mx-auto mt-4 px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm">Check Price</span>
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
      {/* ---------countries end-------------- */}

      {/* -----------------------------Exim Global Trade Information System---------------------------- */}

      <section className="bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="text-center">
            <h3 className="text-primary text-center text-sm md:text-lg text-gray-400 font-medium">
              GTD Service Global Trade Database
            </h3>
            <h3 className="mx-auto mb-2 md:text-balance text-2xl md:text-4xl font-bold">
            Advanced Features of the GTD Service Leading Trade Data Platform
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 g-4">
            <div className="border p-3 rounded-xl bg-gradient-to-t from-blue-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                200+ Countries Shipment Records
                </h3>
                <p className="text-base font-normal text-gray-700">
                Access shipment records information, including exclusive countries, to find leading products in demand by quantity and value. This helps analyze production quantities and formulate competitive pricing strategies.
                </p>
              </div>
            </div>

            <div className="border p-3 rounded-xl bg-gradient-to-t from-yellow-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                  Impressive Visual Reports
                </h3>
                <p className="text-base font-normal text-gray-700">
                Raw data is converted into usable insights using visual reports and line graphs by our user-friendly dashboard. Compare shipments by month, HS code, importer, exporter, and country to improve market analysis.
                </p>
              </div>
            </div>

            <div className="border p-3 rounded-xl bg-gradient-to-t from-orange-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                Advanced Search Functionality
                </h3>
                <p className="text-base font-normal text-gray-700">
                Refine product name or HS code, country, and duration searches. Use data field filters according to your needs, save your work, and import/export reports in Excel or PDF format.
                </p>
              </div>
            </div>

            <div className="border p-3 rounded-xl bg-gradient-to-t from-green-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                  Importer-Exporter Tree
                </h3>
                <p className="text-base font-normal text-gray-700">
                Uncover global trade data service supply chain networks with our proprietary Importer-Exporter Tree feature. View buyer (export data) or supplier (import data) networks to see sourcing and importing-exporting relationships.
                </p>
              </div>
            </div>

            <div className="border p-3 rounded-xl bg-gradient-to-t from-red-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                  Customized Data Reports
                </h3>
                <p className="text-base font-normal text-gray-700">
                Choose personalized plans that fit your budget and needs. Submit our contact form with your requirements, and we'll deliver offline global trade data reports according to your specifications.
                </p>
              </div>
            </div>

            <div className="border p-3 rounded-xl bg-gradient-to-t from-purple-200 via-white to-white">
              <div className="bg-white rounded-lg p-4">
                <h3 className="md:text-2xl text-xl text-black font-bold mb-3">
                24/7 Customer Support
                </h3>
                <p className="text-base font-normal text-gray-700">
                Our committed experts are always on hand to guide you. Get in touch with us at support@gtdservice.com for support throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------counters--------------------------- */}
      <section className="container px-3 md:px-0 mx-auto py-20">
        <div className="grid grid-cols-4">
          <div className="text-center">
            <span className="text-5xl text-black font-bold">200+</span>
            <h4 className="text-lg font-semibold text-emerald-400">
              Countries
            </h4>
          </div>
          <div className="text-center">
            <span className="text-5xl text-black font-bold">50 M+</span>
            <h4 className="text-lg font-semibold text-emerald-400">
              Importer Companies
            </h4>
          </div>
          <div className="text-center">
            <span className="text-5xl text-black font-bold">50 M+</span>
            <h4 className="text-lg font-semibold text-emerald-400">
              Exporter Companies
            </h4>
          </div>
          <div className="text-center">
            <span className="text-5xl text-black font-bold">500 M+</span>
            <h4 className="text-lg font-semibold text-emerald-400">
              Shipment Records
            </h4>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="text-start md:max-w-6xl mb-6">
            <h3 className="mx-auto mb-2 md:text-balance text-2xl md:text-4xl font-bold">
             Become a Leader in the Import-Export Industry with GTD Solutions
            </h3>
            <p className="text-base font-normal text-gray-700">
            Use the most economical platform for comprehensive market research. Expand your business worldwide with better decision-making based on global trade data reports.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-4 rounded-2xl bg-white shadow-xl hover:scale-105 transition ease-linear">
              <div>
                <img
                  src="./images/emerging_markets.jpg"
                  className="ms-auto rounded-lg w-full"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-3 my-3">
                <div className="px-3 py-2 rounded-xl bg-yellow-400 text-xl font-bold text-white ">
                  01
                </div>
                <h4 className="text-2xl font-bold">Emerging Markets</h4>
              </div>
              <p className="text-base font-normal text-gray-700">
              Explore emerging markets using our interactive platform. Get accurate predictions on top market trends, demands, risks, competitors, and growth opportunities.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xl hover:scale-105 transition ease-linear">
              <div>
                <img
                  src="./images/trending_product_landing.jpg"
                  className="ms-auto rounded-lg w-full"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-3 my-3">
                <div className="px-3 py-2 rounded-xl bg-sky-400 text-xl font-bold text-white">
                  02
                </div>
                <h4 className="text-2xl font-bold">Trending Products</h4>
              </div>
              <p className="text-base font-normal text-gray-700">
              With our stunning visual reports, you can uncover leading product trends, examine production volume, and determine suitable prices for your product.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white shadow-xl hover:scale-105 transition ease-linear">
              <div>
                <img
                  src="./images/global_buyer_supplier.jpg"
                  className="ms-auto rounded-lg w-full"
                  alt=""
                />
              </div>
              <div className="flex items-center gap-3 my-3">
                <div className="px-3 py-2 rounded-xl bg-orange-400 text-xl font-bold text-white">
                  03
                </div>
                <h4 className="text-2xl font-bold">
                  Global Buyers & Suppliers
                </h4>
              </div>
              <p className="text-base font-normal text-gray-700">
              Increase your network in the international market with our global buyers and suppliers list. Obtain quality business leads from GTD Solutions and double your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 md:pb-10">

      <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <h4 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
              Overview
            </h4>
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight tracking-tighter">
              Affordable plans & pricing by countries
            </h3>
          </div>
          <div
            className={`flex mt-4 relative w-56 mx-auto py-2 items-center justify-center text-center rounded-full bg-white overflow-hidden shadow-inner shadow-gray-500/80 before:absolute before:h-full before:w-28 before:bg-blue-950 before:rounded-full before:top-0 before:z-10 before:transition-all before:left-0 before:ease-in ${showUsd ? "before:right-0" : "before:translate-x-full"
              }`}
          >
            <div
              className={`text-lg w-28 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${showUsd ? "text-white" : ""
                }`}
              onClick={() => setShowUsd(!showUsd)}
            >
              One
            </div>
            <div
              className={`text-lg w-28 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${showUsd ? "" : "text-white"
                }`}
              onClick={() => setShowUsd(!showUsd)}
            >
              All
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 mt-10 gap-4 flex overflow-x-scroll">

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-blue-600 before:to-purple-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-blue-600 after:to-purple-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-purple-400 text-transparent text-2xl">
                      Starter
                    </span>
                  </h3>
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.1471 33.5C43.2804 30.2182 44.5168 26.3186 44.5168 22.1351C44.5168 10.4625 34.891 1 23.0168 1C11.1427 1 1.51685 10.4625 1.51685 22.1351C1.51685 26.3186 2.7533 30.2182 4.88656 33.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <circle
                      cx="23.0168"
                      cy="19.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M9.29755 36.8698L9.29762 36.8698L9.30328 36.8581L9.83793 35.752L9.83797 35.7521L9.84174 35.7441C10.9246 33.4526 13.2107 32 15.7455 32H29.6106C32.072 32 34.3311 33.4164 35.45 35.6515L36.0077 36.8026C36.2359 37.3422 36.1887 37.9148 35.8945 38.3327C30.4486 45.6584 20.1377 47.1699 12.8126 41.7562C11.5089 40.7856 10.3724 39.6499 9.4009 38.3468C9.1039 37.8864 9.07552 37.3142 9.29755 36.8698Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>

                <div className="text-gray-800 dark:text-neutral-200 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            199
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            699
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                  <p className="sm:min-h-[60px] text-sm text-gray-700 dark:text-neutral-300">
                    Great recommendation for the freshers. For More detailed Market Research and Better Analysis.

                  </p>
                </div>

                <a
                  href="/contact"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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

                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">

                      {showUsd ? (<>
                        300 Search credits
                      </>) : (<>
                        600 Search credits
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">

                      {showUsd ? (<>
                        10,000 Download Credits
                      </>) : (<>
                        50,000 Download Credits
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">

                      {showUsd ? (<>
                        1 User license
                      </>) : (<>
                        1 User license
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">

                      {showUsd ? (<>
                        1 Year historical data
                      </>) : (<>
                        2 Year historical data
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">

                      {showUsd ? (<>
                        1 Months Validity
                      </>) : (<>
                        1 Months Validity
                      </>)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-pink-600 before:to-red-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-pink-600 after:to-red-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    <span className="bg-clip-text bg-gradient-to-tl from-pink-600 to-red-400 text-transparent text-2xl">
                      Basic
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 dark:text-neutral-200 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            399
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            999
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                  <p className="sm:min-h-[60px] text-sm text-gray-700 dark:text-neutral-300">
                    Increased Download limit. Get to know emerging markets, trends, and opportunities

                  </p>
                </div>

                <a
                  href="/contact"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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

                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                     
                      {showUsd ? (<>
                        1500 Search credit
                      </>) : (<>
                        3000 Search credit
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        50,000 Download Credits
                      </>) : (<>
                        200,000 Download Credits
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        2 User License
                      </>) : (<>
                        2 User License
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        3 Year Historical Data
                      </>) : (<>
                        3 Year Historical Data
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                     
                      {showUsd ? (<>
                        3 Months Validity
                      </>) : (<>
                        3 Months Validity
                      </>)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-orange-600 before:to-yellow-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-orange-600 after:to-yellow-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    <span className="bg-clip-text bg-gradient-to-tl from-orange-600 to-yellow-400 text-transparent text-2xl">
                      Plus
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 dark:text-neutral-200 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            699
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            1499
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                  <p className="sm:min-h-[60px] text-sm text-gray-700 dark:text-neutral-300">
                    Increased Download limit. Get to know emerging markets, trends, and opportunities

                  </p>
                </div>

                <a
                  href="/contact"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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



                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Unlimited Search
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        150,000 Download Credits
                      </>) : (<>
                        500,000 Download Credits
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      4 User License
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        5 Year Historical Data
                      </>) : (<>
                        6 Year Historical Data
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      6 Months Validity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-green-600 before:to-blue-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-green-600 after:to-blue-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0 dark:before:from-neutral-700 dark:before:hover:from-purple-400 dark:after:from-neutral-700">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] dark:bg-neutral-900">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800 dark:text-neutral-200">
                    <span className="bg-clip-text bg-gradient-to-tl from-green-600 to-blue-400 text-transparent text-2xl">
                      Premium
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400 dark:text-neutral-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 dark:text-neutral-200 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            999
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            1999
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                  <p className="sm:min-h-[60px] text-sm text-gray-700 dark:text-neutral-300">
                    Access detailed trade information By Product, Country, &
                    Ports With Premium Plan
                  </p>
                </div>

                <a
                  href="/contact"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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

                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      Unlimited Search Credits
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        400,000  Download Credits
                      </>) : (<>
                        1,200,000  Download Credits
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      
                      {showUsd ? (<>
                        6 User License
                      </>) : (<>
                        10 User License
                      </>)}
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      All Historical Data
                    </span>
                  </li>

                  <li className="flex space-x-2">
                    <svg
                      className="flex-shrink-0 mt-0.5 h-4 w-4 text-green-600"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    <span className="text-sm text-gray-800 dark:text-neutral-200">
                      12 Months Validity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}
          </div>
        </div>
        
      </section>

      {/* ---------pricing end-------------- */}

      {/* ---------customize plan start-------------- */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="mt-10 myshadow rounded-xl p-5 bg-[#f6f9fc]">
            <div className="md:grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-primary text-lg text-gray-400 font-medium">
                  Customized Plan
                </h3>
                <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2">
                  Create Your Own Plan
                </h2>
                <div className="flex">
                  <a
                    href="/contact"
                    className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                  >
                    <span className=" text-white text-sm">Get Free Demo</span>
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
              <div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">
                    Choose From 200+ Countries
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">
                    Complete Historical Data Access
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">Unlimited Searches</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">
                    Customizable Download Records
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">
                    Customized User Licence
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-slate-200 rounded-full py-1 px-1 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-base text-gray-800">
                    Priority Customer Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------customize plan end-------------- */}
      <Clients />

      <Testomonials />
    </>
  );
};

export default GlobalTradeDatabase;
