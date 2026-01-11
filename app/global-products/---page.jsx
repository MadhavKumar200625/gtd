import Link from "next/link";
import React from "react";

const page = () => {
  const country = [
    {
      countryName: "india",
      pageURL: "/india-import-export-data",
      flag: "in",
    },
    {
      countryName: "china",
      pageURL: "#",
      flag: "cn",
    },
    {
      countryName: "usa",
      pageURL: "#",
      flag: "us",
    },
    {
      countryName: "turkey",
      pageURL: "#",
      flag: "tr",
    },
    {
      countryName: "pakistan",
      pageURL: "#",
      flag: "pk",
    },
    {
      countryName: "Tanzania",
      pageURL: "#",
      flag: "tz",
    },
  ];
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
        <div className="absolute -top-2/4 w-full h-screen z-0 opacity-10">
          <img src="/images/dots.png" className="w-full" alt="" />
        </div>
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
                    Global Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
            Directory Of Import Export Products Starting With A Alphabet
          </h1>
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
      </section>

      <section className="mx-auto container px-3 lg:pt-16 z-10 relative">
        <div className="px-4 bg-white  rounded-xl md:flex items-center justify-center mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
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
      </section>

      <section className="py-20 z-20 relative">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="">
              <h5 className="text-lg text-black mb-3">FIlters</h5>
              <div className="p-4 bg-slate-200 rounded-lg">
                <h5 className="text-base font-bold text-black mb-3">
                  Browse by Products:
                </h5>
                <div className="alphabets flex flex-wrap gap-1">
                  <span className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    A
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    B
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    C
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    D
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    E
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    F
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    G
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    H
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    I
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    J
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    K
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    L
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    M
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    N
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    O
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    P
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    Q
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    R
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    S
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    T
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    U
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    V
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    W
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    X
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    Y
                  </span>
                  <span className="w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer">
                    Z
                  </span>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-white to-transparent my-3"></div>
                <h5 className="text-base font-bold text-black mb-3">
                  Browse by Country:
                </h5>
                {country.map((item, index) => (
                  <div
                    className="flex items-center group gap-2 p-2 rounded-md bg-white mb-2 hover:bg-blue-500 transition ease-in-out duration-300 cursor-pointer"
                    key={index}
                  >
                    <div className="block">
                      <span
                        className={`fi fi-${item.flag} block text-xl rounded-sm`}
                      ></span>
                    </div>
                    <div>
                      <h4 className="text-base font-normal capitalize group-hover:text-white transition ease-in-out">
                        {item.countryName}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-3">
              <h5 className="text-2xl text-black mb-3">A</h5>
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AQUAEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARDUINO</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARGON</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARIEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">ARNITEL</h3>
                </a>
                <a
                  href="/searchcountry"
                  className="flex min-h-14 gap-2 p-2 rounded-md bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 border border-transparent hover:shadow-md hover:border hover:border-gray-200 transition ease-in-out duration-300"
                >
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-sm">AROWANA</h3>
                </a>
              </div>

              {/* <!-- Pagination --> */}
              <nav
                className="flex items-center gap-x-1 mt-6"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                  disabled=""
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  <span>Previous</span>
                </button>
                <div className="flex items-center gap-x-1">
                  <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-emerald-500 text-white py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    3
                  </button>
                </div>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Next"
                >
                  <span>Next</span>
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </nav>
              {/* <!-- End Pagination --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
