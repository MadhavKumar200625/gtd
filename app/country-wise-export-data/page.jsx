
'use client';


import { useEffect, useState } from 'react';
import Breadcrump from '../common/Breadcrump';
export const dynamic = "force-dynamic";
import Link from "next/link";


const Page = () => {
  
  {/*const searchParams = useSearchParams();*/}
  const [country, setCountry] = useState('');
  const [data, setData] = useState({
    Armenia: {
      heading: 'Armenia Export Data',
      description: `Find the Latest Armenia Export Customs Shipment Trade Data. Armenia's export performance in recent years has shown significant growth. According to the National Statistical Committee of Armenia, the country's exports in 2024 reached approximately $13.092 billion, marking a 53.1% increase compared to 2023.`,
      topProducts: [
        { name: 'Gems and Precious Metals', value: '$3.2B (38.4%)' },
        { name: 'Electrical Machinery and Equipment', value: '$988.2M (11.8%)' },
        { name: 'Ores, Slag, and Ash', value: '$802.9M (9.6%)' },
        { name: 'Vehicles', value: '$517.1M (6.2%)' },
        { name: 'Tobacco and Manufactured Substitutes', value: '$380.7M (4.5%)' },
        { name: 'Beverages, Spirits, and Vinegar', value: '$377.1M (4.5%)' },
        { name: 'Machinery, Including Computers', value: '$302.6M (3.6%)' },
        { name: 'Iron and Steel', value: '$291M (3.5%)' },
        { name: 'Clothing and Accessories (Not Knit or Crochet)', value: '$226.9M (2.7%)' },
        { name: 'Optical, Technical, and Medical Apparatus', value: '$127M (1.5%)' },
      ],
      totalExportValue: '$4.164B (78.57% of total exports)',
      topPartners: [
        { name: 'Russia', share: '75.47%' },
        { name: 'UAE', share: '—' },
        { name: 'China', share: '—' },
        { name: 'Switzerland', share: '—' },
        { name: 'Iraq', share: '—' },
        { name: 'Netherlands', share: '—' },
        { name: 'Bulgaria', share: '—' },
        { name: 'Georgia', share: '—' },
        { name: 'Iran', share: '—' },
        { name: 'Germany', share: '—' },
      ],
    },
  });

  useEffect(() => {
    
      if (typeof window !== 'undefined') {
        const urlParams = new URLSearchParams(window.location.search);
        setCountry(urlParams.get('country') || 'Default Country');
      }
    }, []);
    {/*const countryParam = searchParams.get('country');
    setCountry(countryParam)
    // if (countryParam) {
    //   setCountry(countryParam);
    //   setData(exportData[countryParam] || {
    //     heading: `${countryParam} Export Data`,
    //     description: `Find the latest ${countryParam} export customs shipment trade data. Detailed insights on ${countryParam}'s export trends, top products, and trading partners.`,
    //     topProducts: [],
    //     totalExportValue: 'Data not available',
    //     topPartners: [],
    //   });
    // }
  }, [searchParams]);*/}

  return (
    <>
    

    

      
      <Breadcrump
        pageName="Country Wise Export Data"
        heading={data[country]?.heading || 'Export Data'}
        peragraph=""
        subPage={country || 'Country'}
      />
      {/* <div className='text-center text-2xl'>{`This is ${country} Export Data`}</div> */}
      {/* {data ? (
        <div className='p-6'>
          <p className='text-lg'>{data.description}</p>
          <h3 className='text-xl font-bold mt-4'>Total Export Value:</h3>
          <p>{data.totalExportValue}</p>
          <h3 className='text-xl font-bold mt-4'>Top Export Products:</h3>
          {data.topProducts.length > 0 ? (
            <ul>
              {data.topProducts.map((product, index) => (
                <li key={index}>{`${product.name}: ${product.value}`}</li>
              ))}
            </ul>
          ) : (
            <p>No product data available</p>
          )}
          <h3 className='text-xl font-bold mt-4'>Top Export Partners:</h3>
          {data.topPartners.length > 0 ? (
            <ul>
              {data.topPartners.map((partner, index) => (
                <li key={index}>{`${partner.name}: ${partner.share}`}</li>
              ))}
            </ul>
          ) : (
            <p>No partner data available</p>
          )}
        </div>
      ) : (
        <p className='text-center text-gray-500 mt-4'>No export data available for {country}</p>
      )} */}

<div className="min-h-screen flex flex-col">
  
      <main className="flex-grow bg-[#f5faf5]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-0.5 w-6 bg-green-600"></div>
                <span className="text-sm font-medium text-gray-700">{`${country}`} EXPORT DATA</span>
                <div className="h-0.5 w-6 bg-green-600"></div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#2d2d6d] mb-6">
                Get Latest {`${country}`} Export Customs Shipment Trade Data
              </h1>

              <div className="max-w-4xl">
                <p className="mb-4 text-gray-700">
                  <span className="font-semibold">{`${country}`} export data</span> depicts rapid growth in the country's
                  overall exports this year. Past year export data of {`${country}`} suggests the country's total exports to be
                  valued around $5.38 in FY 2022. Nuclear reactors, vehicles and Electrical machinery were responsible
                  for the maximum product wise {`${country}`} exports. Germany and Italy accounted for the most volume for
                  {`${country}`} exports by country. {`${country}`} export companies can gain quality leads through global market
                  intelligence reports.
                </p>
                <p className="mb-6 text-gray-700 italic">
                  Get historical or latest {`${country}`} export data 2023, product wise {`${country}`} export statistics, {`${country}`}
                  exporters list, global buyers & suppliers list and port volume reports.
                </p>

                <div className="flex gap-4 mb-12">
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
            </div>
            <div className="self-start">
              <button variant="outline" className="border-[#0f0f3d] text-[#0f0f3d] font-medium rounded-full px-6">
                Import Data
              </button>
            </div>
          </div>


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


        {/*<div className="border rounded-lg p-4 md:p-6 mb-12">
            <h2 className="text-xl font-bold text-center mb-6">DATA AVAILABLE FOR 200+ OTHER COUNTRIES</h2>*/}

            {/*<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <CountrySection
                title="ASIA"
                countries={[
                  { name: "INDIA", color: "bg-orange-500" },
                  { name: "CHINA", color: "bg-red-500" },
                  { name: "JAPAN", color: "bg-red-500" },
                  { name: "TURKEY", color: "bg-red-500" },
                  { name: "SOUTH KOREA", color: "bg-blue-500" },
                ]}
              />

              <CountrySection
                title="AFRICA"
                countries={[
                  { name: "CHAD", color: "bg-yellow-500" },
                  { name: "GHANA", color: "bg-green-500" },
                  { name: "KENYA", color: "bg-green-500" },
                  { name: "TANZANIA", color: "bg-green-500" },
                  { name: "SOUTH AFRICA", color: "bg-green-500" },
                ]}
              />

              <CountrySection
                title="EUROPE"
                countries={[
                  { name: "UK", color: "bg-blue-500" },
                  { name: "SPAIN", color: "bg-yellow-500" },
                  { name: "RUSSIA", color: "bg-blue-500" },
                  { name: "NETHERLANDS", color: "bg-blue-500" },
                  { name: "GERMANY", color: "bg-yellow-500" },
                ]}
              />

              <CountrySection
                title="AMERICA"
                countries={[
                  { name: "US", color: "bg-blue-500" },
                  { name: "MEXICO", color: "bg-green-500" },
                  { name: "ARGENTINA", color: "bg-blue-500" },
                  { name: "CANADA", color: "bg-red-500" },
                  { name: "BRAZIL", color: "bg-green-500" },
                ]}
              />

              <CountrySection
                title="OCEANIA"
                countries={[
                  { name: "FIJI", color: "bg-blue-500" },
                  { name: "AUSTRALIA", color: "bg-blue-500" },
                  { name: "NEW ZEALAND", color: "bg-blue-500" },
                  { name: "many more..", color: "bg-green-500" },
                ]}
              />
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-[#0f0f3d] hover:bg-[#1a1a5e]">
                Enquire Now
                 <ChevronRight className="ml-1 h-4 w-4" /> 
              </button>
            </div>
          </div>*/}

           {/* ---------Overview Start-------------- */}

      <section className="py-20 bg-blue-950">
        <div className="container mx-auto">
          <h2 className="mx-auto mb-2 text-center text-balance text-2xl md:text-4xl font-bold leading-snug my-2 text-white">
            {`${country}`} Export Data 2023-24 Overview
          </h2>
          <div className="md:grid md:grid-cols-2 mt-10 gap-20 relative before:absolute before:w-full before:h-[2px] before:left-0 before:top-2/4 before:bg-gradient-to-r before:from-transparent before:via-white  before:to-transparent before:md:absolute before:md:w-[2px] before:md:h-full before:md:left-2/4 before:md:top-0 before:md:bg-gradient-to-t before:md:from-transparent before:md:via-white  before:md:to-transparent">
            <div className="mb-10 md:mb-0">
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="/images/icons/shipping.svg"
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
                    src="/images/icons/import.svg"
                    className="w-12"
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-white text-4xl font-bold">$670 B</div>
                  <div className="text-gray-300 text-xl">
                    Total export Value
                  </div>
                </div>
              </div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="/images/icons/Buyers.svg"
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
                    {`${country}`} Export Data
                  </span>
                </a>
              </div>
            </div>
            <div>
              <div className="p-3 flex bg-black bg-opacity-15 rounded-full gap-5 items-center mb-3">
                <div className="bg-emerald-400 border-4 border-gray-50 border-opacity-30 flex justify-center items-center w-24 h-24 rounded-full">
                  <img
                    src="/images/icons/shipping.svg"
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
                    src="/images/icons/import.svg"
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
                    src="/images/icons/Buyers.svg"
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
                    {`${country}`} Export Data
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Overview end-------------- */}

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-0.5 w-6 bg-green-600"></div>
              <span className="text-sm font-medium text-gray-700">{`${country}`} EXPORT TRADE DATA</span>
              <div className="h-0.5 w-6 bg-green-600"></div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#2d2d6d] mb-6">
              What Does {`${country}`} Export Data Include?
            </h2>

            <div className="max-w-4xl text-gray-700">
              <p className="mb-4">
                Our {`${country}`} export data contains all essential information that could help you spot verified buyers from
                the global market. You can find top exports of {`${country}`} by hs code, price, quantity, country, {`${country}`}
                suppliers, global buyers list, ports volume and competitor shipments for analysis.
              </p>
              <p className="mb-4">
                We have 100% authentic information based on {`${country}`} import customs data. You can opt for online, offline
                or customized plans at a reasonable price. You could find a detailed sample export data of {`${country}`} by{" "}
                <span className="font-semibold">
                  HS code, product, quantity, unit, value, country of origin/destination, supplier name, buyer name,
                  port of loading/unloading and other shipping details, etc.
                </span>
              </p>
            </div>
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
              <img src="/images/girlwithlaptop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ----------------------CTA End------------------------- */}




        </div>
      </main>
      

    </div>
    </>
    
  );
};



export default Page;


function CountrySection({ title, countries }) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {countries.map((country, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className={`inline-block w-5 h-5 ${country.color} rounded-full`}></span>
            {country.name}
          </li>
        ))}
      </ul>
    </div>
  )
}


