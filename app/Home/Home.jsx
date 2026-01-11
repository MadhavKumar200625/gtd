import Link from "next/link";
import { country } from "../common/config";
import Clients from "../common/Clients";
import Testomonials from "../common/Testomonials";
import "flag-icons/css/flag-icons.min.css";
import Search from "../common/Search";


export const metadata = {
  title: "Global Trade Data | Import Export Trade Data | Shipment Data - GTD Service",
  description: "We, at GTD Services, provide custom import-export trade data from over 200+ countries to help businesses track trends, idenƟfy opportuniƟes, and opƟmize supply chains worldwide.",
  keywords: ["Government Agencies, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/government-agencies"
  },
  openGraph: {
    title: 'Global Import Export Data Provider | Global Trade Data | 200+ Countries - GTD Service',
    description: "GTD Service is the most trusted global import-export trade data provider across the world. As the best market research firm, we are known to deliver result-oriented business intelligence reports for over 200 countries. ",
    url: 'https://gtdservice.com/government-agencies',
    siteName: 'GTD Service',
    type: 'website',
    images: [
      {
        url: 'https://gtdservice.com/images/logo.svg', // Replac  e with your real OpenGraph image
        alt: `GTD Service Logo`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Global Import Export Data Provider | Global Trade Data | 200+ Countries - GTD Service',
    description: "GTD Service is the most trusted global import-export trade data provider across the world. As the best market research firm, we are known to deliver result-oriented business intelligence reports for over 200 countries. ",
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};


const Home = () => {
  return (
    <>
      {/* ---------hero section start--------------  */}
      <section className="h-full pt-[76px] md:py-0 md:h-[80vh] flex justify-center items-center relative bg-gradient-to-br from-sky-200 via-sky-50 to-emerald-100 bg-gradient-45 bg-opacity-50 dark:bg-slate-900">
        <div className="absolute top-0 w-full h-screen z-0">
          <img src="/images/bg-shape.png" className="w-full" alt="" />
        </div>
        <div className="py-8 md:px-6 mx-auto container px-3 text-center lg:py-28 lg:px-12 z-10 relative">
          <a
            href="/import-export-data-country-wise"
            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white shadow-sm rounded-full hover:text-white hover:bg-blue-950"
            role="alert"
          >
            <span className="text-xs bg-emerald-400 rounded-full text-white px-4 py-1.5 mr-3">
              New
            </span>{" "}
            <span className="md:text-sm text-xs font-medium">
              Global Sales with Data from 200+ Countries
            </span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-4xl font-bold leading-snug text-dark md:text-5xl lg:text-5xl lg:w-2/3 lg:mx-auto">
            Global Trade Data Service | Import Export Trade Data Provider
          </h1>
          <p className="mb-4 text-lg font-normal text-justify text-dark lg:text-xl sm:px-16 xl:px-48">
          {/* GTD Service, also known as "Global Import Export Trade Data Service”, provides detailed comprehensive import-export trade data from over 200+ countries, enabling businesses to track international import-export trade data and global trade trends. Identify new markets with access to up-to-date information so the company can enhance decision-making, optimize supply chains, and gain a competitive edge. */}
          GTD Service, also referred as <b>Global Import Export Trade Data Services Provider</b>, offers <b>custom 
import export trade data</b> of more than 200+ countries. We help businesses monitor international <b>import
 export data</b> and global trade patterns.


          </p>
          <p className="mb-8 text-lg font-normal text-justify text-dark lg:text-xl sm:px-16 xl:px-48">
          You can easily reach out to new markets where there is availability of latest information that can
enable the company to improve decision-making, optimize supply chains, and attain a competitive
advantage.

          </p>
          <Search />
          {/* <div className="px-4 bg-white  rounded-xl md:flex items-center justify-center mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
            <div className="md:w-2/4">
              <input
                type="email"
                id="email"
                className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Enter Products"
                required
              />
            </div>
            <div className="md:w-2/4">
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Hs Code"
                required
              />
            </div>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5 "
            >
              <option value="0">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="India">India</option>
              <option value="Brazil">Brazil</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Mexico">Mexico</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Philippines">Philippines</option>
              <option value="Russia">Russia</option>
              <option value="sri_lanka">Sri Lanka</option>
              <option value="Tanzania">Tanzania</option>
              <option value="Turkey">Turkey</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Argentina">Argentina</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Botswana">Botswana</option>
              <option value="Chile">Chile</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Colombia">Colombia</option>
              <option value="costarica">CostaRica</option>
              <option value="drcongo">DR Congo</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Moldova">Moldova</option>
              <option value="Uganda">Uganda</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="australia">Australia</option>
              <option value="Spain">Spain</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Netherland">Netherland</option>
              <option value="Germany">Germany</option>
              <option value="United Arab Emirates">United Arab Emirates</option>
              <option value="Saudi Arabia">Saudi Arabia</option>
              <option value="Oman">Oman</option>
              <option value="Singapore">Singapore</option>
              <option value="Canada">Canada</option>
              <option value="China">China</option>
              <option value="USA">USA</option>
            </select>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5 "
            >
              <option>Import</option>
              <option>Export</option>
            </select>
            <a
              href="/searchcountry"
              className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Search Data
              </span>
            </a>
          </div> */}
        </div>
      </section>
      {/* ---------hero section end--------------  */}

      {/* ---------country start--------------  */}
      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
          International Trade Database
          </h3>
          <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
          Country Wise Trade Data
          </h2>
          <p className="text-base text-gray-700 text-center max-w-5xl mx-auto">
            {/* Discover country-wise global import-export trade data and statistics, customs data, shipment data, and compiled data from our exclusive global customs database. Find the top-performing products, buyers' list, suppliers' list, importers, and exporters, and convert them into your leads.
            Search international import-export data country-wise. */}
            Discover <b>country wise global trade data</b> and statistics, customs data, shipment data, and compiled
data from our exclusive <b>import export trade database</b>. Find the top-performing products, buyers'
list, suppliers' list, importers, and exporters, and convert them into your leads. You can easily find out
the precise and custom import-export trade data country-wise.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 lg:mt-14">
            {country?.map((item, index) => (
              <a
                key={index}
                href="/import-export-data-country-wise"
                className={`card group relative shadow-sm border border-gray-300 rounded-lg p-3 flex items-center gap-4 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold`}
              >
                <div className="block">
                  {/* // <img src={item.flag} className="w-100" alt="" /> */}
                  <span className={`fi fi-${item.flag} block text-5xl`}></span>
                </div>
                <div>
                  <h4 className="text-xl lg:text-lg font-semibold uppercase group-hover:text-indigo-700 ease-linear">
                    {item.countryName}
                  </h4>
                  <p className="line-clamp-1 text-gray-600 text-sm">
                    {item.detail}
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-10 myshadow rounded-xl p-5 bg-[#f6f9fc]">
            <div className="md:grid grid-cols-3 items-center gap-8">
              <div>
                <img src="/images/countries.webp" className="w-100" alt="Access 200+ Countries Data" title="Access 200+ Countries Data"/>
              </div>
              <div className="col-span-2">
                <h3 className="text-3xl font-bold">
                Get Access to 200+ Countries Shipment Data 
                </h3>
                <p className="text-base text-gray-700 my-3">
                As we have updated and custom <b>import export database</b> of over 200+ countries so you have enough
options to reach out most diversified markets and search from the <b>custom trade Database. </b>

                </p>
                <div className="flex">
                  <a
                    href="/pricing"
                    className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
                  >
                    <span className=" text-white text-sm whitespace-nowrap">
                      Explore Now
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------country end--------------  */}

      {/* ---------GTIS start--------------  */}
      <section className="py-20 bg-slate-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-primary text-lg text-gray-400 font-medium">
              Best Market Research Plaƞorm for business trade data
              </h4>
              <h3 className="mx-auto mb-2 md:text-balance text-4xl font-bold leading-snug my-2">
              Get Meaningful and Trade Analytics Data with Us
              </h3>
              <p className="text-base text-gray-700 mb-4">
              GTD Service is the kind of plaƞorm that helps identify the key performing factors for a company and
streamline the workplace. 
              </p>
              <p className="text-base text-gray-700 mb-4">
              You can check the latest market trends, the most traded HS codes, countries, ports, competitors, top
global trade data service companies along with <b>updated shipment data. </b>
              </p>
              <p className="text-base text-gray-700">
              Our <b>verified shipment data</b> report helps minimise the financial risk and reach out to the verified
buyers and suppliers from over 200+ countries. 
              </p>
              <div className="md:flex mt-5 gap-3">
                <a
                  href="/global-trade-database"
                  className="rounded-xl px-5 py-3 mb-3 md:mb-0 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Explore GTD Service GTIS
                  </span>
                </a>
                <a
                  href="/api-development-and-integration-company"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group justify-center"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get API Access
                  </span>
                </a>
              </div>
            </div>
            <div className="mb-10 md:mb-0 order-1 md:order-2">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <img
                    src="/images/Home 2 (1).webp"
                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                    alt="GTD Service GTIS"
                    title="GTD Service GTIS"
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

      {/* ---------GTIS New start--------------  */}
      <section className="py-20 bg-slate-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="mb-10 md:mb-0 order-2 md:order-1">
              <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <img
                    src="/images/gtd2.webp"
                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                    alt="GTD Service GTIS"
                    title="GTD Service GTIS"
                  />
                </div>
              </div>
              <div className="relative mx-auto bg-gray-900 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h3 className="mx-auto mb-2 md:text-balance text-4xl font-bold leading-snug my-2">
              Trusted Import-Export Data Provider for Reliable Global Import Export Data
              </h3>
              <p className="text-base text-gray-700 mb-4">
              GTD Service is a reputable data provider of import export data whereby the data is accurate and timely information based on global sources of imports export data. 
We are a system of verified global import data, global export data, and global import trade data and global export trade data that assists businesses in monitoring the market trends, finding new markets, 
and learning about global trade flows.
              </p>
              <p className="text-base text-gray-700 mb-4">
              Having import export data across several countries and industries, GTD Service offers companies with important data to make an informed decision and improve supply chain and remain 
competitive in the global market.
              </p>
            </div>
           
          </div>
        </div>
      </section>
      {/* ---------GTIS New end--------------  */}

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
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-6">
            <div className="flex group flex-col gap-4">
              <img
                src="/images/Exporters1.webp"
                className="w-100 rounded-xl"
                alt="Exporter"
                title="Exporter"
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
                src="/images/Importers1.webp"
                className="w-100 rounded-xl"
                alt="Importer"
                title="Importer"
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
                src="/images/AUTOMOTIVE .webp"
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
        </div>
      </section>
      {/* ---------Industry end-------------- * */}

      {/* ---------Abouts us start--------------  */}
      <section className="py-20 bg-blue-950 relative overflow-hidden">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h4 className="text-primary text-lg text-emerald-300 font-medium">
                About Us
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-white">
              We are one of the leading Global Import Export Data Providers
              </h3>
              <p className="text-base text-gray-400 mb-4">
              GTD Service is the most trusted global import export trade data provider across the world. As the
best market research firm, we are known to deliver result-oriented business reports for over 200
countries. 
              </p>
              <p className="text-base text-gray-400 mb-4">
              Here at GTD Services, you can find a team of professionals to help you with quality <b>international
              import export data</b> that delivers profitable results.
              </p>
              <p className="text-base text-gray-400">
              We provide year-wise, monthly, and quarterly global trade data service statistics that help you
understand the <b>global trade volume</b> better.

              </p>
              <div className="flex mt-5 gap-3">
                <a
                  href="/about"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Read More...
                  </span>
                </a>
              </div>
            </div>
            <div className="globe">
              <img src="/images/Home 1.webp" className="w-full" alt="Global Trade Data Provider" title="Global Trade Data Provider" />
            </div>
          </div>
          <div className="md:grid grid-cols-4 items-center gap-4">
            <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 fill-emerald-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-200">
                Improves your export-import trade with data-based decisions and avoids risk.
              </p>
            </div>
            <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 fill-emerald-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-200">
                Align your business model with global strategic planning and stay ahead.
              </p>
            </div>
            <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 fill-emerald-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-200">
                Monitor and track competition and grab upcoming business opportunities.
              </p>
            </div>
            <div className="p-3 bg-gray-50 bg-opacity-10 rounded-xl flex gap-3 mb-3 md:mb-0">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 fill-emerald-200"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-200">
                GTD Service is equipped with the latest business intelligence website for data.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------Abouts us End--------------  */}

      {/* ---------Empower Your Market Research start--------------  */}
      <section className="pt-20 pb-10 relative overflow-hidden">
        <div className="container px-3 md:px-0 mx-auto">
          <h4 className="text-primary text-lg text-gray-400 font-medium">
          Real-Ɵme Global Trade Data Report

          </h4>
          <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
          Get the Better Insight about the Market with Real-Time
          Shipment Data
          </h3>
          <div className="md:grid grid-cols-3 mt-10 gap-5">
            <div className="group">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-2 h-2 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400"></div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-black font-bold">
                Actionable Insights
              </h3>
              <p className="mt-3 text-gray-500">
                We joined the years of accumulated expertise of our data scientists and international import-export trade data business intelligence tools to discover meaningful insights from global customs data and shipment data in all categories to make data-driven current market opportunities.
              </p>
            </div>

            <div className="group md:mt-10">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-2 h-2 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400"></div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6  fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75c.627.47 1.406.75 2.25.75.844 0 1.624-.28 2.25-.75.626.47 1.406.75 2.25.75.844 0 1.623-.28 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" />
                    <path
                      fillRule="evenodd"
                      d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506 1.42.674 3.08.675 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-black font-bold">
                Know Your Market
              </h3>
              <p className="mt-3 text-gray-500">
                For any business, the main challenge is to find their products are well-researched. Global shipment data helps you to evaluate and develop your marketing strategy to grab new buyers in the foreign market.
              </p>
            </div>

            <div className="group md:mt-20">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-2 h-2 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400"></div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6  fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                      clipRule="evenodd"
                    />
                    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-black font-bold">
                Streamline Your Business
              </h3>
              <p className="mt-3 text-gray-500">
                Streamline all your global import export trading data operations and pave the way for top-line growth for your business. With a precise overview of every business activity, discover the inefficient processes and optimize your business operation.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------Empower Your Market Research end--------------  */}

      {/* ---------CTA start--------------  */}
      <section className="container px-3 md:px-0 mx-auto mb-20">
        <div className="mt-10 myshadow rounded-xl p-5 bg-[#f6f9fc]">
          <div className="md:grid grid-cols-2 items-center gap-8">
            <div>
              <img src="/images/Home2.webp" className="w-100" alt="Global Import Export Data" title="Global Import Export Data" />
            </div>
            <div className="">
              <h3 className="text-4xl font-bold leading-normal">
              Grow with GTD Services
              </h3>
              <p className="text-base text-gray-400 mb-4">
              As we are trusted worldwide export imports data provider and offering historical data access,
updated shipment records and detailed trade reports all around the globe, enterprises should grow
their businesses with us.

              </p>
              <p className="text-base text-gray-400">
              You can discover new opportunities through our powerful trade analytics data and trade volume data
based on real time analysis of global import trade data and global export trade data. Using our huge
export import database, you will be able to monitor both global import data and export data so that
you can observe market trends, streamline supply chains and make informed decisions that lead to
growth.
              </p>
              <div className="flex mt-5">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule a Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------CTA end--------------  */}

      {/* ---------Clients start--------------  */}
      <Clients />
      {/* ---------Clients end--------------  */}

      {/* ---------Testomonials Start--------------  */}
      <Testomonials />
      {/* ---------Testomonials end--------------  */}
    </>
  );
};

export default Home;
