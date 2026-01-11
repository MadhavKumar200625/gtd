"use client";
import { useEffect, useState } from 'react';
import Breadcrump from "./Breadcrump";
import Link from "next/link";
import Clients from "./Clients";
import FAQ from "../common/FAQ";



export const faqs = [
  {
    question: "What are the top 3 major imports of India?",
    answer:
      "Mineral Fuels, Electrical Machinery and Precious Stones are the main imports of India.",
  },
  {
    question: "What are the top 3 major exports of India?",
    answer:
      "Mineral Fuels, Oils, Pearls, Precious Stones, Metals and Electrical Machinery Equipment are the main exports of India.",
  },
  {
    question: "Who are India's biggest trading partner countries?",
    answer:
      "India's biggest trading partner countries are China, the United States, Russia and the United Arab Emirates.",
  },
  {
    question: "Who are India's top 3 import partner countries?",
    answer:
      "China, Russia and the United Arab Emirates are India 's top 3 partners for product imports.",
  },
  {
    question: "Who are India's top 3 export partner countries?",
    answer:
      "The United States, United Arab Emirates and the United Kingdom are India's top 3 partners for product exports.",
  },
  {
    question: "Which company provides accurate India trade statistics?",
    answer:
      "Exim Global Trade Intelligence System is the best market research platform available in the market right now. Here, you can access the historical as well as the latest India import export data, importers list, exporters list, ports volume, competitor records, etc.",
  },
];

const CountryDetailsPage = () => {
   const [country, setCountry] = useState('');
   {/*const searchParams = useSearchParams();
    const [name, setName] = useState('');*/}
    console.log(country)
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        setCountry(urlParams.get('country') || 'Default Country');
      }
    }, []);
    

      {/*const nameParam = searchParams.get('country');
      if (nameParam) {
        setName(nameParam);
      }
    }, [searchParams]);*/}
  const [toggleData, settoggleData] = useState(true);

  return (
    <>
      <Breadcrump
        pageName="Country Wise Import and Export Data"
        heading="Import and Export Data"
        peragraph="Get regular monthly updates on Global Country Import and Export trade data***"
      />
     

      {/* ---------Video Section start--------------  */}

      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
                Overview
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-2xl md:text-4xl font-bold leading-tight tracking-tighter">
              {`${country}`} Customs Data | {`${country}`} Import Export Data 2023, 2024
              </h3>
              <p className="text-base text-gray-700 mb-3">
                Perform an in-depth market analysis with historical and latest
                 {`${country}`}  import export data 2023, 2024. Get accurate and meaningful
                global market insights based on  {`${country}`}  customs data. Identify top
                 {`${country}`}  imports and exports by country, top traded HS codes, list
                of  {`${country}`}n importers, exporters, ports volume, competitor
                practises and international buyers list. Get quality business
                leads and spot export opportunities in the international market
                with our cost-effective Global Trade Market Intelligence
                Platform.
              </p>
              <p className="text-lg text-emerald-500 font-semibold italic mb-3">
                You can schedule a free demo or request a sample export and
                import data of {`${country}`}.
              </p>
              <div className="flex mt-5 gap-3">
                <a
                  href="#"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Online Data
                  </span>
                </a>
                <a
                  href="#"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Offline Data
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 mb-4 md:mb-0">
              <div className="relative mx-auto border-gray-300 bg-gray-border-gray-300 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-md overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <iframe
                    allowFullScreen
                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                    src="//www.youtube.com/embed/https://www.youtube.com/embed/P40UTe_i9K0?autoplay=1&mute=1&playlist=P40UTe_i9K0&loop=1&modestbranding=1"
                  ></iframe>
                </div>
              </div>
              <div className="relative mx-auto bg-gray-500 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Video Section end--------------  */}

      {/* ---------countries start-------------- */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="myshadow rounded-xl p-5 bg-[#f6f9fc] mx-4 md:mx-0">
            <div className="">
              <h2 className="mx-auto text-center mb-2 text-balance text-2xl font-bold leading-snug my-2">
                Data available for 200+ other countries
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                  <h6 className="uppercase text-lg font-semibold">Asia</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-in block text-xl rounded-md"></span>
                      </div>
                      <p>{`${country}`}</p>
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
                href="#"
                className="rounded-xl mx-auto mt-4 px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
              >
                <span className=" text-white text-sm">Get Free trail</span>
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
      </section>
      {/* ---------countries end-------------- */}

      {/* ---------Overview Start-------------- */}

      <section className="py-20 bg-blue-950">
        <div className="container mx-auto">
          <h2 className="mx-auto mb-2 text-center text-balance text-2xl md:text-4xl font-bold leading-snug my-2 text-white">
            {`${country}`} Export Import Data 2023-24 Overview
          </h2>
          <div className="md:grid md:grid-cols-2 mt-10 gap-20 relative before:absolute before:w-full before:h-[2px] before:left-0 before:top-2/4 before:bg-gradient-to-r before:from-transparent before:via-white  before:to-transparent before:md:absolute before:md:w-[2px] before:md:h-full before:md:left-2/4 before:md:top-0 before:md:bg-gradient-to-t before:md:from-transparent before:md:via-white  before:md:to-transparent">
            <div className="mb-10 md:mb-0">
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/shipping.svg"
                    className="w-16"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">45 M</div>
                  <div className="text-gray-300 text-xl">Total Shipments</div>
                </div>
              </div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/import.svg"
                    className="w-12"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">$670 B</div>
                  <div className="text-gray-300 text-xl">
                    Total Import Value
                  </div>
                </div>
              </div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/Buyers.svg"
                    className="w-14"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">164 K</div>
                  <div className="text-gray-300 text-xl">Active Buyers</div>
                </div>
              </div>
              <div className="flex mt-5">
                <a
                  href="#"
                  className="rounded-xl mx-auto px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    {`${country}`} Import Data
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/shipping.svg"
                    className="w-16"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">45 M</div>
                  <div className="text-gray-300 text-xl">Total Shipments</div>
                </div>
              </div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/import.svg"
                    className="w-12"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">$670 B</div>
                  <div className="text-gray-300 text-xl">
                    Total Export Value
                  </div>
                </div>
              </div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="./images/icons/Buyers.svg"
                    className="w-14"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">164 K</div>
                  <div className="text-gray-300 text-xl">Active Buyers</div>
                </div>
              </div>
              <div className="flex mt-5">
                <a
                  href="#"
                  className="rounded-xl mx-auto px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    {`${country}`} Import Data
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Overview end-------------- */}

      {/* --------------------search Data Start-----------------  */}

      <section className="container mx-auto px-4 md:px-0 py-20">
        <h2 className="mx-auto mb-2 text-center text-balance text-2xl md:text-4xl font-bold leading-snug my-2">
          Search {`${country}`} Trade Data by Country, HS Code and Product
        </h2>
        <p className="text-base text-gray-600 text-justify md:text-center">
          Perform a comprehensive search on {`${country}`} trade data by country, HS code
          and product in the search bar given below. For further detailed
          shipment records, you can contact us for the customized {`${country}`} trade
          statistics year wise. We will provide complete {`${country}`} shipment data
          reports by HS Code, Product Name, Description, Quantity, Value, Buyer
          name, Supplier Name, Loading/Unloading Port, Country of
          Origin/Destination and Shipment Details.
        </p>
        <div className="px-4 mt-7 bg-white  rounded-xl md:flex items-center justify-center mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
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
            href="#"
            className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
          >
            <span className=" text-white text-sm whitespace-nowrap">
              Search Data
            </span>
          </a>
        </div>
      </section>

      {/* --------------------search Data end-----------------  */}

      {/* ---------Intelligence System start-------------- */}
      <section className="py-20 mybg overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-0">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <img
                src="./images/dash_image.png"
                className="md:w-9/12 drop-shadow-2xl mx-auto mb-4 md:mb-0"
                alt=""
              />
            </div>
            <div>
              <h3 className="text-primary text-lg text-gray-600 font-medium">
                Exim Global Trade Intelligence System
              </h3>
              <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 ">
                Make an Impact in the Global Market
              </h2>
              <ul className="mt-5">
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p className=" text-base ">Explore 200+ markets</p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className=" text-base ">Stay versed with market trends</p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className=" text-base ">Monitor your competition</p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className=" text-base ">
                    Find verified {`${country}`} buyers & suppliers
                  </p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className=" text-base ">Get quality business leads</p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-600"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className=" text-base ">Maximize your company’s ROI</p>
                </li>
              </ul>
              <div className="flex mt-3">
                <a
                  href="#"
                  className="rounded-xl mt-4 px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-md shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className="  text-sm">Get Free Trial</span>
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
          <div className="mt-20">
            <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
              {`${country}`} Import Export Data 2023-24
            </h2>
            <p className="text-base text-gray-600 text-center">
              Exim Global Trade Intelligence System is the best platform which
              gives you real time access to {`${country}`} imports and exports data from
              2012 to the latest. This portal will help you find {`${country}`}’s main
              imports and exports, product pricing, quantity, top
              importing/exporting markets to {`${country}`}, ports volume, {`${country}`} import
              export companies turnover, competitor shipments along with their
              total import value & % share. Below, we have shared the insights
              into {`${country}`} imports and exports during FY 2023-24.
            </p>
            <div
              className={`flex mt-5 relative w-80 mx-auto py-2 items-center justify-center text-center rounded-full bg-white overflow-hidden shadow-inner shadow-gray-500/80 before:absolute before:h-full before:w-40 before:bg-blue-950 before:rounded-full before:top-0 before:z-10 before:transition-all before:left-0 before:ease-in ${
                toggleData ? "" : "before:translate-x-full"
              }`}
            >
              <div
                className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${
                  toggleData ? "text-white" : ""
                }`}
                onClick={() => settoggleData(!toggleData)}
              >
                Import Data
              </div>
              <div
                className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${
                  toggleData ? "" : "text-white"
                }`}
                onClick={() => settoggleData(!toggleData)}
              >
                Export Data
              </div>
            </div>
            {toggleData ? (
              // ----------import data ---------------
              <div className="md:grid md:grid-cols-4 mt-10 lefttoright gap-3">
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Top Products
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      Top Products Imports of {`${country}`}
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">
                          Mineral Fuels & Oils
                        </p>
                        <p className="text-sm text-gray-600 text-end">$219 B</p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Country of Origin
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      {`${country}`} Imports by Country
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">China</p>
                        <p className="text-sm text-gray-600 text-end">$101 B</p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Port of Unloading
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      {`${country}`}’s ports imports shipments
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">Delhi Air</p>
                        <p className="text-sm text-gray-600 text-end">
                          5839281
                        </p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      {`${country}`} Buyers List
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      Top {`${country}`} Import Companies (shipment wise)
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">
                          Maysquare Lifestyle
                        </p>
                        <p className="text-sm text-gray-600 text-end">
                          1506784
                        </p>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // ----------export data ---------------

              <div className="md:grid md:grid-cols-4 mt-10 righttoleft gap-3">
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-900 to-sky-500 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Top Products
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      Top Products Exports of {`${country}`}
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">
                          Mineral Fuels & Oils
                        </p>
                        <p className="text-sm text-gray-600 text-end">$219 B</p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-900 to-sky-500 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Country of Origin
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      {`${country}`} Imports by Country
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">China</p>
                        <p className="text-sm text-gray-600 text-end">$101 B</p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-900 to-sky-500 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      Port of Unloading
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      {`${country}`}’s ports exports shipments
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">Delhi Air</p>
                        <p className="text-sm text-gray-600 text-end">
                          5839281
                        </p>
                      </li>
                    ))}
                  </div>
                </div>
                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                  <div className="bg-gradient-to-r from-blue-900 to-sky-500 p-2 rounded-md">
                    <div className="text-base font-semibold text-white">
                      {`${country}`} Buyers List
                    </div>
                    <div className="text-sm font-normal text-white  ">
                      Top {`${country}`} Export Companies (shipment wise)
                    </div>
                  </div>
                  <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                    {Array.apply(null, { length: 15 }).map((e, i) => (
                      <li
                        key={i}
                        className="flex justify-between items-center mb-3"
                      >
                        <p className="text-sm text-gray-600">
                          Maysquare Lifestyle
                        </p>
                        <p className="text-sm text-gray-600 text-end">
                          1506784
                        </p>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* ---------Intelligence System end-------------- */}

      {/* ---------{`${country}`} Export Import Data Sample start-------------- */}
      <section className="py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
            {`${country}`} Export Import Data Sample
          </h2>
          <p className="text-base text-gray-600 text-center">
            Before buying our service, we provide detailed sample data to our
            customers so that they can check the authenticity and accuracy of
            data. You could request a sample {`${country}`} import and export data with
            all data fields such as HS code, product name, description, country,
            importer, exporter name, port shipments, etc. Also, you can
            customize {`${country}`} trade statistics yearly, monthly or quarterly as per
            your requirements.
          </p>
          <div className="relative overflow-x-auto sm:rounded-lg mt-10">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-lg text-center text-white uppercase bg-blue-950">
                <tr>
                  <th scope="col" className="px-6 py-3 border-b bg-white"></th>
                  <th scope="col" className="px-6 py-3 border-b">
                    {`${country}`} Import Sample Data
                  </th>
                  <th scope="col" className="px-6 py-3 border-b">
                    {`${country}`} Export Sample Data
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 bg-emerald-400">
                  <th
                    scope="row"
                    className="p-2 font-medium text-white whitespace-nowrap"
                  >
                    Field Name
                  </th>
                  <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                    Detail
                  </td>
                  <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                    Detail
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Date :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    31-05-2024
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    31-05-2024
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    HS Code :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    27111100
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    30049049
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Product Details
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    Liquified Natural Gas (170349 Cbm/74851.351 Mts)
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    Irinotel (irintecan) Hcl Inj. 100mg/5mlb/n:87240119bl
                    Md:04/24 Ed:03/26
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Quantity :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">2752.75</td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    300
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Quantity Unit :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">MBT</td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    NOS
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Value($) :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    45017988.1
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    3450.69
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Country of Origin :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">
                    Singapore
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    {`${country}`}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                    Country of Destination :
                  </td>
                  <td className="p-2 whitespace-nowrap text-center">{`${country}`}</td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    United Arab Emirates
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100"></td>
                  <td className="p-2 whitespace-nowrap text-center">
                    Supplier Name : ***
                  </td>
                  <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                    Buyer Name : ***
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-20 ">
            <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
              Links
            </h3>
            <h2 className="mx-auto mb-2 text-center text-balance text-2xl md:text-4xl font-bold leading-snug my-2">
              Important Links Related to {`${country}`} Export data
            </h2>

            <div className="mt-10">
              <div>
                <ul className="flex flex-wrap gap-2 justify-center">
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Import Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Export Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Import Product List
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Export Product List
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Companies List
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} ports volume reports
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      Country wise trade data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Import Sample
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      {`${country}`} Export Sample
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      Global Trade API
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      European Countries Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      Gulf Countries Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      African Countries Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      Asian Countries Data
                    </a>
                  </li>
                  <li className="text-base flex items-center gap-1 font-normal text-black text-justify basis-full md:basis-1/5 bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 py-2 px-3 rounded-md border">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5 stroke-emerald-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                        />
                      </svg>
                    </div>
                    <a href="" className="">
                      Plans & Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------India Export Import Data Sample end-------------- */}

      {/* ----------------------CTA Start------------------------- */}
      <section className="py-5 bg-slate-100">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                Track your competitor shipments with Exim GTIS
              </h4>
              <p className="text-base text-gray-600">
                Monitor your competitors effectively and ahead of them with a
                data driven approach. Increase your sales with quality leads
                from our{" "}
                <span className="bg-emerald-500 px-2 text-white">
                  business intelligence reports
                </span>{" "}
                based on{" "}
                <span className="bg-emerald-500 px-2 text-white">
                  {`${country}`} Customs Data
                </span>
              </p>
              <div className="flex mt-4">
                <a
                  href="#"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Schedule a Demo →
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="./images/girlwithlaptop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------CTA End------------------------- */}

      <Clients />

      <FAQ faqs={faqs} />
    </>
  );
};

export default CountryDetailsPage;
