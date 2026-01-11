"use client";
import Link from "next/link";
import React, { useState } from "react";
import CountUp from "react-countup";
import CTA from "../common/CTA";
import "flag-icons/css/flag-icons.min.css";

const page = () => {
  const [show, openShow] = useState(0);

  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
        <div className="absolute top-0 w-full h-screen z-0 opacity-20">
          <img src="/images/dots.png" className="w-full" alt="" />
        </div>
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
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
                    Import Export Data Country Wise
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
            Import Export Data of 200+ Countries
          </h1>
          <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none text-red-900 md:text-3xl mt-6 lg:text-2xl">
            Details for 200+ Countries Markets with Global Trade Data GTIS
            Import Export Database
          </h2>
          <p className="mb-8 text-justify text-base font-normal text-dark">
            Get the buyers and suppliers from Global Trade Data Services all
            around the world through our trade data intelligence system. It will
            help you find verified importers and exporters in over 200+
            countries and align your international business model according to
            the latest market trends and price forecast information on our
            platform. Explore top markets like China, USA, India, Turkey,
            Australia, and European countries and find their top imports,
            exports, top trading markets, companies, and port volume.
          </p>
          <h6 className="text-lg font-bold text-blue-900">
            Request a sample trade data report or schedule a free demo to
            transform your business
          </h6>
          <div className="flex mt-5 gap-3">
            <a
              href="/pricing"
              className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Online Data
              </span>
            </a>
            <a
              href="/contact"
              className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Offline Data
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="md:py-20 py-10 container mx-auto px-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 justify-center items-center">
          <div className="text-center bg-slate-100 p-3 md:p-0 md:rounded-none md:bg-white rounded-lg md:border-r-2 border-dashed border-blue-950">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <CountUp end={134002002} duration={5} />
            </div>
            <p className="text-base font-normal mt-3">Global Shipments</p>
          </div>
          <div className="text-center bg-slate-100 p-3 md:p-0 md:rounded-none md:bg-white rounded-lg md:border-r-2 border-dashed border-blue-950">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <CountUp end={942542} duration={5} />
            </div>
            <p className="text-base font-normal mt-3">Global Verified Buyers</p>
          </div>
          <div className="text-center bg-slate-100 p-3 md:p-0 md:rounded-none md:bg-white rounded-lg col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900">
              <CountUp end={802870} duration={5} />
            </div>
            <p className="text-base font-normal mt-3">
              Global Verified Suppliers
            </p>
          </div>
        </div>
        <div className="text-center mt-10 lg:mt-20">
          <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tighter">
            Country wise Import Export Data
          </h3>
          <p className="text-base text-gray-700">
            Access the accurate import-export data statistics of 200+ countries
            based on customs data and shipment data reported by other countries.
            Find shipment records by HS Code, product description, quantity,
            unit, value, country of origin-destination, importer name and
            exporter name, and port of loading-unloading shipping information.
          </p>
        </div>

        <div className="text-base lg:mt-10 font-medium text-center text-gray-500 border-b border-gray-200">
          <ul className="flex flex-nowrap -mb-px md:justify-center overflow-x-scroll no-scrollbar">
            <li className="me-2">
              <div
                onClick={() => openShow(0)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
              >
                Asia
              </div>
              {/* <center><h3 class="text-lg font-bold text-blue-900">Asia Import-Export Trade Data</h3></center> */}
            </li>
            <li className="me-2">
              <div
                onClick={() => openShow(1)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 1
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
                aria-current="page"
              >
                Africa
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => openShow(2)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 2
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
              >
                Europe
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => openShow(3)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 3
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
              >
                North America
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => openShow(4)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 4
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
              >
                Oceania
              </div>
            </li>
            <li className="me-2">
              <div
                onClick={() => openShow(5)}
                className={`inline-block cursor-pointer whitespace-nowrap p-4 border-b-2 rounded-t-lg md:hover:text-gray-600 hover:border-gray-300 ${
                  show === 5
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "border-transparent"
                }`}
              >
                South America
              </div>
            </li>
          </ul>
        </div>

        {show === 0 ? (
          <Asia />
        ) : show === 1 ? (
          <Africa />
        ) : show === 2 ? (
          <Europe />
        ) : show === 3 ? (
          <NorthAmerica />
        ) : show === 4 ? (
          <Oceania />
        ) : show === 5 ? (
          <SouthAmerica />
        ) : (
          ""
        )}
      </section>

      <CTA />
    </>
  );
};

export default page;

const Africa = () => {
  const Africa = [
    {
      countryName: "Algeria",
      countryURL: "",
      importURL: "",
      exportURL: "/country-wise-export-data?country=Algeria",
      flag: "dz",
    },
    {
      countryName: "Angola",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ao",
    },
    {
      countryName: "Botswana",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bw",
    },
    {
      countryName: "Burkina Faso",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bf",
    },
    {
      countryName: "Burundi",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bi",
    },
    {
      countryName: "Cameroon",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cm",
    },
    {
      countryName: "Chad",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "td",
    },
    {
      countryName: "Congo",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cd",
    },
    {
      countryName: `Cote D'Ivoire`,
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ci",
    },
    {
      countryName: "Egypt",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "eg",
    },
    {
      countryName: "Ethiopia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "et",
    },
    {
      countryName: "Ghana",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "gh",
    },
    {
      countryName: "Kenya",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ke",
    },
    {
      countryName: "Lesotho",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ls",
    },
    {
      countryName: "Liberia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lr",
    },
    {
      countryName: "Libya",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ly",
    },
    {
      countryName: "Madagascar",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mg",
    },
    {
      countryName: "Malawi",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mw",
    },
    {
      countryName: "Mali",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ml",
    },
    {
      countryName: "Mauritania",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mr",
    },
    {
      countryName: "Mauritius",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mu",
    },
    {
      countryName: "Morocco",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ma",
    },
    {
      countryName: "Mozambique",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mz",
    },
    {
      countryName: "Namibia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "na",
    },
    {
      countryName: "Nigeria",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ng",
    },
    {
      countryName: "Rwanda",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "rw",
    },
    {
      countryName: "Sao Tome and Principe",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "st",
    },
    {
      countryName: "Sierra Leone",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sl",
    },
    {
      countryName: "South Africa",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "za",
    },
    {
      countryName: "Tanzania",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "tz",
    
    },
    {
      countryName: "Tunisia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "tn",
    },
    {
      countryName: "Uganda",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ug",
    },
    {
      countryName: "Zambia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "zm",
    },
    {
      countryName: "Zimbabwe",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "zw",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          Africa Import- Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {Africa.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};







const Asia = () => {
  const Asia = [
    {
      countryName: "Armenia",
      countryURL: "/country-wise-import-and-export-data?country=Armenia",
      importURL: "/import-data?country=Armenia",
      exportURL: "/country-wise-export-data?country=Armenia",
      flag: "am",
      // otherLink: [
      //     {
      //         exportProducts: '/',
      //         importProducts: '/',
      //         companiesList: '/',
      //     }
      // ]
    },
    {
      countryName: "Azerbaijan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "az",
    },
    {
      countryName: "Bahrain",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bh",
    },
    {
      countryName: "Bangladesh",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bd",
      
    },
    {
      countryName: "Brunei",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bn",
    },
    {
      countryName: "Cambodia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "kh",
    },
    {
      countryName: "China",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cn",
    },
    {
      countryName: "Hong Kong",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "hk",
    },
    {
      countryName: "India",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "in",
      
    },
    {
      countryName: "Indonesia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "id",
      
    },
    {
      countryName: "Iran",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ir",
    },
    {
      countryName: "Israel",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "il",
    },
    {
      countryName: "Japan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "jp",
    },
    {
      countryName: "Jordan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "jo",
    },
    {
      countryName: "Kazakhstan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "kz",
    },
    {
      countryName: "Korea",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "kr",
    },
    {
      countryName: "Kuwait",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "kw",
    },
    {
      countryName: "Laos",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lb",
    },
    {
      countryName: "Lebanon",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "la",
    },
    {
      countryName: "Maldives",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mv",
    },
    {
      countryName: "Mongolia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mn",
    },
    {
      countryName: "Myanmar",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mm",
    },
    {
      countryName: "Nepal",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "np",
    },
    {
      countryName: "Oman",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "om",
    },
    {
      countryName: "Pakistan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pk",
     
    },
    {
      countryName: "Philippines",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ph",
      
    },
    {
      countryName: "Qatar",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "qa",
    },
    {
      countryName: "Russia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ru",
      
    },
    {
      countryName: "Saudi Arabia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sa",
    },
    {
      countryName: "Singapore",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sg",
    },
    {
      countryName: "Sri Lanka",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lk",
      
    },
    {
      countryName: "Syria",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sy",
    },
    {
      countryName: "Taiwan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "tw",
    },
    {
      countryName: "Thailand",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "th",
    },
    {
      countryName: "Turkey",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "tr",
      
    },
    {
      countryName: "UAE",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ae",
    },
    {
      countryName: "Uzbekistan",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "uz",
    },
    {
      countryName: "Vietnam",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "vn",
      
    },
    {
      countryName: "Yemen",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ye",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          Asia Import-Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {Asia.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Europe = () => {
  const Europe = [
    {
      countryName: "Austria",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "at",
    },
    {
      countryName: "Belgium",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "be",
    },
    {
      countryName: "Bosnia and Herzegovina",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ba",
    },
    {
      countryName: "Bulgaria",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bg",
    },
    {
      countryName: "Croatia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "hr",
    },
    {
      countryName: "Cyprus",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cy",
    },
    {
      countryName: "Czech Republic",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cz",
    },
    {
      countryName: "Denmark",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "dk",
    },
    {
      countryName: `Finland`,
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "fi",
    },
    {
      countryName: "France",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "fr",
    },
    {
      countryName: "Germany",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "de",
    },
    {
      countryName: "Greece",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "gr",
    },
    {
      countryName: "Hungary",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "hu",
    },
    {
      countryName: "Iceland",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ie",
    },
    {
      countryName: "Ireland",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "is",
    },
    {
      countryName: "Italy",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "it",
    },
    {
      countryName: "Latvia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lv",
    },
    {
      countryName: "Luxembourg",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lu",
    },
    {
      countryName: "Lithuania",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "lt",
    },
    {
      countryName: "Malta",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mt",
    },
    {
      countryName: "Moldova",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "md",
    },
    {
      countryName: "Netherlands",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "nl",
    },
    {
      countryName: "North Macedonia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mk",
    },
    {
      countryName: "Poland",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pl",
    },
    {
      countryName: "Portugal",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pt",
    },
    {
      countryName: "Romania",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ro",
    },
    {
      countryName: "Serbia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "rs",
    },
    {
      countryName: "Slovenia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "si",
    },
    {
      countryName: "Spain",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "es",
    },
    {
      countryName: "Sweden",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "se",
    },
    {
      countryName: "Switzerland",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ch",
    },
    {
      countryName: "UK",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "gb",
    },
    {
      countryName: "Ukraine",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ua",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          Europe Import- Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {Europe.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base whitespace-nowrap truncate hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const NorthAmerica = () => {
  const NorthAmerica = [
    {
      countryName: "Canada",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ca",
    },
    {
      countryName: "Costa Rica",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cr",
    },
    {
      countryName: "Cuba",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cu",
    },
    {
      countryName: "Dominican Republic",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "do",
    },
    {
      countryName: "El Salvador",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sv",
    },
    {
      countryName: "Guatemala",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "gt",
    },
    {
      countryName: "Honduras",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "hn",
    },
    {
      countryName: "Jamaica",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "jm",
    },
    {
      countryName: `Mexico`,
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "mx",
     
    },
    {
      countryName: "Nicaragua",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ni",
    },
    {
      countryName: "Panama",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pa",
    },
    {
      countryName: "US",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "us",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          North America Import- Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {NorthAmerica.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base whitespace-nowrap truncate hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const Oceania = () => {
  const Oceania = [
    {
      countryName: "Australia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "au",
    },
    {
      countryName: "Fiji",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "fj",
    },
    {
      countryName: "New Zealand",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "nz",
    },
    {
      countryName: "Papua New Guinea",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pg",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          Oceania Import- Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {Oceania.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base whitespace-nowrap truncate hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SouthAmerica = () => {
  const SouthAmerica = [
    {
      countryName: "Argentina",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ar",
    },
    {
      countryName: "Bolivia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "bo",
    },
    {
      countryName: "Brazil",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "br",
      
    },
    {
      countryName: "Chile",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "cl",
    },
    {
      countryName: "Colombia",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "co",
    },
    {
      countryName: "Ecuador",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ec",
    },
    {
      countryName: "Guyana",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "gy",
    },
    {
      countryName: "Paraguay",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "py",
    },
    {
      countryName: "Peru",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "pe",
    },
    {
      countryName: "Suriname",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "sr",
    },
    {
      countryName: "Venezuela",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "ve",
    },
    {
      countryName: "Uruguay",
      countryURL: "",
      importURL: "",
      exportURL: "",
      flag: "uy",
    },
  ];
  return (
    <>
      <br />
      <center>
        <h3 className="text-lg font-bold text-blue-900">
          South America Import- Export Trade Data
        </h3>
      </center>
      <div className="mt-10 righttoleft">
        <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 md:gap-4">
          {SouthAmerica.map((item, index) => (
            <div
              className="p-1 shadow-lg rounded-xl border border-gray-200"
              key={index}
            >
              <div
                className={`card group relative rounded-lg p-1 md:p-3 md:flex items-center gap-4 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="flex md:block gap-2 items-center">
                  <span
                    className={`fi fi-${item.flag} block text-2xl md:text-4xl`}
                  ></span>
                  <a
                    href={item.countryURL}
                    className="text-sm whitespace-nowrap truncate md:hidden lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                </div>
                <div>
                  <a
                    href={`#`}
                    className="text-base whitespace-nowrap truncate hidden md:block  lg:text-lg font-semibold capitalize group-hover:text-indigo-700 ease-linear"
                  >
                    {item.countryName}
                  </a>
                  <div className="flex items-center gap-1 mt-2 md:mt-1">
                    <a
                      href={`/import-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Import Data
                    </a>
                    <a
                      href={`/export-data/${item.countryName.replaceAll(' ', '-').toLowerCase()}`}
                      className="bg-white w-max text-emerald-700 border border-gray-300 text-xs md:text-sm font-medium px-1 md:px-2 py-0.5 rounded-md hover:bg-blue-950 hover:text-white transition-all ease-in whitespace-nowrap"
                    >
                      Export Data
                    </a>
                    {item.otherLink ? (
                      <div className="relative group/list">
                        <a href="" className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>
                        </a>
                        <div className="absolute w-60 right-0 bg-white border border-gray-300 rounded-lg z-10 shadow-lg invisible group-hover/list:visible">
                          {item.otherLink.map((links, indexs) => (
                            <a
                              href={links.link}
                              key={indexs}
                              className="block text-sm font-normal py-2 px-3 hover:bg-gray-200"
                            >
                              {item.countryName} {links.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
