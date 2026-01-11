"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import Search from "../common/Search";

const page = () => {
  const industry = [
    {
      name: "Most Importing and Exporting Nations",
      icons: "/images/icons/education.svg",
      pera: "Discover the world's largest trading nations and their key imports and exports. Understanding global trade flows can help businesses identify new markets, trade opportunities, and economic trends.  ",
    },
    {
      name: "Trade Value and Volume Analysis",
      icons: "/images/icons/shield.svg",
      pera: "It requires an understanding of the importance of trade value and revision, as it is essential for businesses, policy, and analysis to keep track of what is going on in global markets. ",
    },
    {
      name: "Key Products and HS Code Data",
      icons: "/images/icons/factory.svg",
      pera: "Get precise insights into global trade with HS Code-based data analysis! The Harmonised System (HS Code) is an internationally standardised system used to classify traded goods, helping businesses track product-specific import and export trends.",
    },
    {
      name: "Major Ports and Trading Partners",
      icons: "/images/icons/science.svg",
      pera: "Global trade thrives through key ports and strong trade partnerships, enabling seamless import and export operations. Understanding major ports and top trading partners helps businesses optimise logistics and expand market reach.",
    },
    // {
    //   name: "Construction",
    //   icons: "/images/icons/construction.svg",
    //   pera: "For the ever-changing construction sector, building material suppliers, construction equipment firms, architects, and contractors may receive reliable and timely data, analysis, research, and insight into the present and future market circumstances and building requirements.",
    // },
    // {
    //   name: "nature",
    //   icons: "/images/icons/nature.svg",
    //   pera: "Energy has you covered whether you need to find the safest drilling location, assess an oil asset, or evaluate a solar array investment. Our 600+ energy specialists and 800+ geoscientists and engineers use proprietary data and sophisticated analytics to provide insights into the full energy value chain, from underground oil, gas, and coal to renewables, local gas stations, and worldwide power grids.",
    // },
    // {
    //   name: "Maritime & Commercial",
    //   icons: "/images/icons/cargo-ship.svg",
    //   pera: "Our expertise and insight, based on a more than 250-year history of information collection, assist you in navigating the complicated environment of the seaborne trade. For the marine, security, and energy-trading groups, resources include ownership data, live ship movements, risk profiles, and intelligence tools.",
    // },
    // {
    //   name: "financial",
    //   icons: "/images/icons/cargo-ship.svg",
    //   pera: "Bankers, asset managers, corporate finance experts, and insurers all across the world must weigh economic instability, geopolitical turmoil, and interconnected industry dynamics when making investment and lending choices. With our award-winning economic predictions and analyses, Financial & Capital Markets aids you in strategic planning as well as managing your investment and loan portfolios.",
    // },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-purple-100 to-yellow-100 bg-gradient-45 bg-opacity-50">
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
                    Search Global Trade Data
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
            Global Trade Data Search by Product, HS Code, and Country
          </h1>
          <p className="mb-8 text-justify text-base font-normal text-dark">
            Access unlimited global trade data with our market intelligence solution. Search global import-export trade data by country and HS code for free and view product information on detailed shipment records like the main cross-essential fields of data, including product description, product quantity, unit value, country of origin-destination, buyer name, supplier name, and port of loading-unloading.
          </p>
        </div>
      </section>

      <Search />

      <section className="py-10">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              {/* <h4 className="text-primary text-lg text-gray-400 font-medium">
                Exim Global Trade Information System
              </h4> */}
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Search by HS Code or Product
              </h3>
              <p className="text-base text-gray-700">
                Searching for accurate import and export statistics? Our powerful search feature assists you in monitoring international trade streams by HS Code or product name, providing you with real-time market information about worldwide markets.
              </p>
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
                  <span className="text-sm text-gray-800">
                    <b>Search by HS Code</b> :
                    Identify trade data utilizing the internationally accepted Harmonized System (HS) Code for correct categorization.
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
                  <span className="text-sm text-gray-800">
                    <b>Search by Product</b> :
                    Search a product name to identify leading exporting and importing nations, trade volumes, and important market patterns.
                  </span>
                </li>
              </ul>
              <div className="flex mt-5 gap-3">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule Demo
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2">
              {/* <div className="w-80 h-80 rounded-full p-5 mx-auto relative">
                <div className="w-full h-full  rounded-full bg-orange-100 flex items-center justify-center p-8">
                  <img src="/images/theworldbank.png" alt="" />
                </div>
                <div className="w-80 h-80 border-2 border-blue-900 rounded-full top-0 left-0 mx-auto absolute spin_rotate">
                  <div className="absolute w-5 h-5 rounded-full bg-emerald-400 -top-3 left-2/4"></div>
                  <div className="absolute w-5 h-5 rounded-full bg-emerald-400 -bottom-3 left-2/4"></div>
                </div>
              </div> */}
              <div className="w--full rounded-full p-5 mx-auto relative">
                <img src="/images/Search2.webp" alt="Search by HS Code or Product" title="Search by HS Code or Product" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 items-center">
            <div>
              {/* <div className="w-80 h-80 rounded-full p-5 mx-auto relative">
                <div className="w-full h-full  rounded-full bg-orange-100 flex items-center justify-center p-8">
                  <img src="/images/BUSINESS-OPP.png" alt="" />
                </div>
                <div className="w-80 h-80 border-2 border-blue-900 rounded-full top-0 left-0 mx-auto absolute spin_rotate">
                  <div className="absolute w-5 h-5 rounded-full bg-emerald-400 -top-3 left-2/4"></div>
                  <div className="absolute w-5 h-5 rounded-full bg-emerald-400 -bottom-3 left-2/4"></div>
                </div>
              </div>  */}
              <div className="w-full rounded-full p-5 mx-auto relative">
                <img src="/images/search-global.jpg" alt="Global Business Opportunities" title="Global Business Opportunities" />
              </div>
            </div>
            <div>
              {/* <h4 className="text-primary text-lg text-gray-400 font-medium">
                Exim Global Trade Information System
              </h4> */}
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Find Business Opportunities Globally
              </h3>
              <p className="text-base text-gray-700">
                Grow your business across borders with real-time trade intelligence! Find new markets, leading trading partners, and in-demand products to expand your business globally.
              </p>
              <p className="text-base text-gray-700">
                How We Help :
              </p>
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
                  <span className="text-sm text-gray-800">
                    Find profitable markets for your products
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
                  <span className="text-sm text-gray-800">
                    Examine import and export trends by industry
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
                  <span className="text-sm text-gray-800">
                    Meet global buyers and suppliers
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
                  <span className="text-sm text-gray-800">
                    Maximize trade strategies with precise data
                  </span>
                </li>
              </ul>
              <div className="flex mt-5 gap-3">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule Demo
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 mybg">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="text-center">
            {/* <h4 className="text-primary text-lg text-gray-400 font-medium">
              Industries
            </h4> */}
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
              Explore Trade Data by Country
            </h3>
            <p className="text-base text-gray-700">
              You will get valuable information about global import export trade data by country. Whether tracking new market trends, trade partners or shipment volumes, our international import export database offers up-to-the-minute and accurate data for your business decisions.
            </p>
            <div className="container mx-auto">
              <div className="mt-10 myshadow rounded-xl p-5 bg-[#f6f9fc]">
                <div className="md:grid grid-cols-12 gap-8"></div>
                <div className="md:grid grid-cols-2 gap-8">
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
                      Most Importing and Exporting Nations
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
                    <p className="text-base text-gray-800"> Key Products and HS Code Data
                    </p>
                  </div>
                </div>
                <div className="md:grid grid-cols-2 gap-8">
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
                      Trade Value and Volume Analysis
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
                      Major Ports and Trading Partners
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <Slider {...settings}>
            {industry.map((item, index) => (
              <div key={index}>
                <div className="p-3 md:me-5 rounded-xl bg-white shadow-xl border border-gray-200">
                  <div className="p-3 rounded-lg bg-gray-50 min-h-[300px]">
                    <img src={item.icons} className="size-10 mb-3" alt="Explore Trade Data By Country" title="Explore Trade Data By Country" />
                    <h4 className="text-xl font-bold text-black mb-3">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">{item.pera}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default page;
