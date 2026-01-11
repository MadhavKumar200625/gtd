"use client";

import { useParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { country_all, country_cus } from '../../../data/countries';

const ClientPage = () => {
  //export default function ClientPage({ Country, Letter1 }) {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [dropActive, setDropActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCountry, setSelectedCountry] = useState(null); // New state for selected country
    const [loading, setLoading] = useState(true); // loading state
  
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();
  
    // Extract only the first 3 params we need (country, letter, page)
    const paramArray = params?.params?.slice(0, 3) || [];
    const urlCountry = paramArray[0]?.toLowerCase() || "india";
    //const urlPage = parseInt(paramArray[2] || "1") || 1;
    const urlLetter1 = paramArray[1]?.toUpperCase() || "a-1";
    const parts = urlLetter1.split('-');
    const urlLetter = parts[0] ?? "a";
    const urlPage = parts[1] ?? '1';
  
    const ddlparam = "";
    const [selectedCountry1, setSelectedCountry1] = useState(urlCountry);
    const [currentPage, setCurrentPage] = useState(urlPage);
    const [currentLetter, setCurrentLetter] = useState(urlLetter);
  
  
    const countries = [
      { CountryName: "Afghanistan", countryFlag: "af" },
      { CountryName: "Algeria", countryFlag: "dz" },
      { CountryName: "Angola", countryFlag: "ao" },
      { CountryName: "Argentina", countryFlag: "ar" },
      { CountryName: "Armenia", countryFlag: "am" },
      { CountryName: "Australia", countryFlag: "au" },
      { CountryName: "Austria", countryFlag: "at" },
      { CountryName: "Azerbaijan", countryFlag: "az" },
      { CountryName: "Bahrain", countryFlag: "bh" },
      { CountryName: "Bangladesh", countryFlag: "bd" },
      { CountryName: "Barbados", countryFlag: "bb" },
      { CountryName: "Belarus", countryFlag: "by" },
      { CountryName: "Belgium", countryFlag: "be" },
      { CountryName: "Benin", countryFlag: "bj" },
      { CountryName: "Bermuda", countryFlag: "bm" },
      { CountryName: "Bhutan", countryFlag: "bt" },
      { CountryName: "Bolivia", countryFlag: "bo" },
      { CountryName: "Botswana", countryFlag: "bw" },
      { CountryName: "Brazil", countryFlag: "br" },
      { CountryName: "Bulgaria", countryFlag: "bg" },
      { CountryName: "Burundi", countryFlag: "bi" },
      { CountryName: "Cambodia", countryFlag: "kh" },
      { CountryName: "Cameroon", countryFlag: "cm" },
      { CountryName: "Canada", countryFlag: "ca" },
      { CountryName: "Chad", countryFlag: "td" },
      { CountryName: "Chile", countryFlag: "cl" },
      { CountryName: "China", countryFlag: "cn" },
      { CountryName: "Colombia", countryFlag: "co" },
      { CountryName: "Costa Rica", countryFlag: "cr" },
      { CountryName: "Cote d'Ivoire", countryFlag: "ci" },
      { CountryName: "Croatia", countryFlag: "hr" },
      { CountryName: "Cyprus", countryFlag: "cy" },
      { CountryName: "Czech Republic", countryFlag: "cz" },
      { CountryName: "Denmark", countryFlag: "dk" },
      { CountryName: "Dominican Republic", countryFlag: "do" },
      { CountryName: "DR Congo", countryFlag: "cd" },
      { CountryName: "Ecuador", countryFlag: "ec" },
      { CountryName: "Egypt", countryFlag: "eg" },
      { CountryName: "Estonia", countryFlag: "ee" },
      { CountryName: "Ethiopia", countryFlag: "et" },
      { CountryName: "Fiji", countryFlag: "fj" },
      { CountryName: "Finland", countryFlag: "fi" },
      { CountryName: "France", countryFlag: "fr" },
      { CountryName: "Gabon", countryFlag: "ga" },
      { CountryName: "Georgia", countryFlag: "ge" },
      { CountryName: "Germany", countryFlag: "de" },
      { CountryName: "Ghana", countryFlag: "gh" },
      { CountryName: "Greece", countryFlag: "gr" },
      { CountryName: "Guatemala", countryFlag: "gt" },
      { CountryName: "Guinea", countryFlag: "gn" },
      { CountryName: "Guyana", countryFlag: "gy" },
      { CountryName: "Hungary", countryFlag: "hu" },
      { CountryName: "India", countryFlag: "in" },
      { CountryName: "Indonesia", countryFlag: "id" },
      { CountryName: "Iran", countryFlag: "ir" },
      { CountryName: "Iraq", countryFlag: "iq" },
      { CountryName: "Ireland", countryFlag: "ie" },
      { CountryName: "Israel", countryFlag: "il" },
      { CountryName: "Italy", countryFlag: "it" },
      { CountryName: "Jamaica", countryFlag: "jm" },
      { CountryName: "Japan", countryFlag: "jp" },
      { CountryName: "Jordan", countryFlag: "jo" },
      { CountryName: "Kazakhstan", countryFlag: "kz" },
      { CountryName: "Kenya", countryFlag: "ke" },
      { CountryName: "Kosovo", countryFlag: "xk" },
      { CountryName: "Kuwait", countryFlag: "kw" },
      { CountryName: "Kyrgyzstan", countryFlag: "kg" },
      { CountryName: "Latvia", countryFlag: "lv" },
      { CountryName: "Lesotho", countryFlag: "ls" },
      { CountryName: "Liberia", countryFlag: "lr" },
      { CountryName: "Libya", countryFlag: "ly" },
      { CountryName: "Lithuania", countryFlag: "lt" },
      { CountryName: "Luxembourg", countryFlag: "lu" },
      { CountryName: "Malawi", countryFlag: "mw" },
      { CountryName: "Malaysia", countryFlag: "my" },
      { CountryName: "Maldives", countryFlag: "mv" },
      { CountryName: "Mauritius", countryFlag: "mu" },
      { CountryName: "Mexico", countryFlag: "mx" },
      { CountryName: "Moldova", countryFlag: "md" },
      { CountryName: "Morocco", countryFlag: "ma" },
      { CountryName: "Mozambique", countryFlag: "mz" },
      { CountryName: "Nepal", countryFlag: "np" },
      { CountryName: "Netherlands", countryFlag: "nl" },
      { CountryName: "New Zealand", countryFlag: "nz" },
      { CountryName: "Nicaragua", countryFlag: "ni" },
      { CountryName: "Niger", countryFlag: "ne" },
      { CountryName: "Nigeria", countryFlag: "ng" },
      { CountryName: "Norway", countryFlag: "no" },
      { CountryName: "Oman", countryFlag: "om" },
      { CountryName: "Pakistan", countryFlag: "pk" },
      { CountryName: "Palestine", countryFlag: "ps" },
      { CountryName: "Panama", countryFlag: "pa" },
      { CountryName: "Papua New Guinea", countryFlag: "pg" },
      { CountryName: "Paraguay", countryFlag: "py" },
      { CountryName: "Peru", countryFlag: "pe" },
      { CountryName: "Philippines", countryFlag: "ph" },
      { CountryName: "Poland", countryFlag: "pl" },
      { CountryName: "Portugal", countryFlag: "pt" },
      { CountryName: "Qatar", countryFlag: "qa" },
      { CountryName: "Romania", countryFlag: "ro" },
      { CountryName: "Russia", countryFlag: "ru" },
      { CountryName: "Rwanda", countryFlag: "rw" },
      { CountryName: "Sao Tome and Principe", countryFlag: "st" },
      { CountryName: "Saudi Arabia", countryFlag: "sa" },
      { CountryName: "Senegal", countryFlag: "sn" },
      { CountryName: "Serbia", countryFlag: "rs" },
      { CountryName: "Seychelles", countryFlag: "sc" },
      { CountryName: "Sierra Leone", countryFlag: "sl" },
      { CountryName: "Singapore", countryFlag: "sg" },
      { CountryName: "Slovakia", countryFlag: "sk" },
      { CountryName: "Slovenia", countryFlag: "si" },
      { CountryName: "Somalia", countryFlag: "so" },
      { CountryName: "South Africa", countryFlag: "za" },
      { CountryName: "South Korea", countryFlag: "kr" },
      { CountryName: "Spain", countryFlag: "es" },
      { CountryName: "Sri Lanka", countryFlag: "lk" },
      { CountryName: "Sudan", countryFlag: "sd" },
      { CountryName: "Sweden", countryFlag: "se" },
      { CountryName: "Switzerland", countryFlag: "ch" },
      { CountryName: "Syria", countryFlag: "sy" },
      { CountryName: "Taiwan", countryFlag: "tw" },
      { CountryName: "Tajikistan", countryFlag: "tj" },
      { CountryName: "Tanzania", countryFlag: "tz" },
      { CountryName: "Thailand", countryFlag: "th" },
      { CountryName: "Togo", countryFlag: "tg" },
      { CountryName: "Trinidad and Tobago", countryFlag: "tt" },
      { CountryName: "Tunisia", countryFlag: "tn" },
      { CountryName: "Turkey", countryFlag: "tr" },
      { CountryName: "Turkmenistan", countryFlag: "tm" },
      { CountryName: "Uganda", countryFlag: "ug" },
      { CountryName: "Ukraine", countryFlag: "ua" },
      { CountryName: "United Arab Emirates", countryFlag: "ae" },
      { CountryName: "United Kingdom", countryFlag: "gb" },
      { CountryName: "Uruguay", countryFlag: "uy" },
      { CountryName: "USA", countryFlag: "us" },
      { CountryName: "Uzbekistan", countryFlag: "uz" },
      { CountryName: "Venezuela", countryFlag: "ve" },
      { CountryName: "Vietnam", countryFlag: "vn" },
      { CountryName: "Yemen", countryFlag: "ye" },
      { CountryName: "Zambia", countryFlag: "zm" },
      { CountryName: "Zimbabwe", countryFlag: "zw" }
    ];
  
  
  
    // Filter countries based on searchTerm
    const filteredCountries = countries.filter((country) =>
      country.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    // Handle country selection
    const handleCountrySelect = (country) => {
  
      setSelectedCountry(country); // Set the selected country
      setDropActive(false); // Close the dropdown
    };
  
    // Redirect when the user selects a country
    const handleRedirect = () => {
      var a = document.getElementById('ddlcountry').innerText;
      a = a.replaceAll(' ', '_').toLowerCase();
      //alert(a);
      if (a) {
        // Redirect to the page based on the selected country
        router.push(`/global-companies-list/${a}/a-1`);
  
      }
    };
  
  
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
  
  
  
  
    const [data, setData] = useState([]);
    const [totalCount, setPage] = useState();
  
    const lowerCountry = selectedCountry1.replaceAll(' ', '_').toLowerCase();
    const isInAll = country_all.includes(lowerCountry);
    const isInCustoms = country_cus.includes(lowerCountry);
  
    const final_country = isInCustoms ? lowerCountry : 'all';
  
    const getData = async () => {
      const res = await fetch('../../../global-companies-list/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: final_country.replaceAll(' ', '_').toLowerCase(),
          type: 'master',
          country_name: selectedCountry1.replaceAll('_', ' ').toLowerCase(),
          company_start_from: currentLetter,
          from_: (currentPage - 1) * 25 + 1,
          to: '25',
        }),
      });
  
      const data = await res.json();
  
      const companyList = data.data?.[0]?.Company || [];
      const companyCount = data.data?.[0]?.["Total Count"] || 0;
      setData(companyList);
      setPage(companyCount);
      setLoading(false);
      console.log(companyList);
      //setData(data)
    };
    useEffect(() => {
      getData();
    }, []);
  
    const visiblePages = 5;
    const page = parseInt(urlPage ?? '1');
    //const pages = Array.from({ length: totalCount }, (_, i) => i + 1);
    const pages = Array.from({ length: visiblePages }, (_, i) => i + 1);
  
    return (
      <>
  
        <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
          <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-28 z-10 relative">
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
                      Global Companies List
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="mb-4 text-3xl font-bold text-dark md:text-3xl mt-6 lg:text-4xl">
              Global Companies List - Importers Exporters Directory - Country Wise
            </h1>
            <p className="mb-8 text-justify text-base font-normal text-dark">
              Search for the best buyers and sellers from more than 200+ countries from our global international business list.
              Explore the best import-export firms from our importer and exporter directory database. Here we have listed the best importers and exporters of the USA.
              In the same way, you can search for other nations.
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
        </section>
  
  
        <section className="py-20 z-20 relative">
          <div className="container mx-auto px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="order-2 md:order-1">
                <h5 className="text-lg text-black mb-3">FIlters</h5>
                <div className="p-4 bg-slate-200 rounded-lg">
                  <h5 className="text-base font-bold text-black mb-3">
                    Browse by Products:
                  </h5>
  
  
                  <div className="alphabets flex flex-wrap gap-1">
  
                    {alphabet.map((letter) => (
                      <a
                        key={letter}
                        href={`/global-companies-list/${selectedCountry1.toLocaleLowerCase()}/${letter.toLowerCase()}-${currentPage}`}
                        className={`w-8 h-8 rounded-full hover:bg-white transition ease-in-out duration-300 flex justify-center items-center cursor-pointer ${urlLetter === letter ? "bg-blue-500" : ""
                          }`}
                      >
                        {letter}
                      </a>
                    ))}
  
  
                  </div>
                  <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-white to-transparent my-3"></div>
                  <h5 className="text-base font-bold text-black mb-3">
                    Browse by Country:
                  </h5>
                  {country.map((item, index) => (
  
                    <a
  
                      className="flex items-center gap-2 p-2 rounded-md bg-white mb-2 hover:bg-blue-500 transition ease-in-out duration-300 cursor-pointer"
                      key={index}
                      href={`/global-companies-list/${item.countryName.replaceAll(' ', '_').toLowerCase()}/a-1`}
                    >
                      <div className="block">
                        <span
                          className={`fi fi-${item.flag} block text-xl rounded-sm`}
                        ></span>
                      </div>
                      <div>
                        <h4 className="text-base font-normal capitalize group-hover:text-indigo-700 ease-linear">
                          {item.countryName}
                        </h4>
                      </div>
                    </a>
                  ))}
  
  
                </div>
              </div>
  
              <div className="md:col-span-3 order-1 md:order-2">
                <div className="md:flex gap-4">
                  <div className="w-1/4 p-4">
                    <h5 className="text-2xl text-black mt-3">
                      {urlLetter.toUpperCase()} - {selectedCountry1.replaceAll('_', ' ').toUpperCase()}
                    </h5>
                  </div>
                  <div className=" w-3/4 p-4 flex md:justify-end items-end relative px-4 bg-white rounded-xl md:ml-auto mb-4">
                    <div className="md:w-1/4 relative mr-3">
                      <div
                        className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center justify-between cursor-pointer"
                        onClick={() => setDropActive(!dropActive)}
                      >
                        <span id="ddlcountry">{selectedCountry ? selectedCountry.CountryName.toUpperCase() : "India" ? selectedCountry1.replaceAll('_', ' ').toUpperCase() : "Select Country"}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className={`ml-1 transition-transform duration-300 ${dropActive ? "rotate-90" : ""}`}
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </div>
                    </div>
  
                    {/* The full-width dropdown panel */}
                    {dropActive && (
                      <div className="absolute left-0 right-0 top-full mt-2 bg-white shadow-xl border rounded-xl p-4 z-50 max-h-96 overflow-y-auto">
                        <input
  
                          type="text"
                          placeholder="Search Country"
                          className="shadow-sm mb-4 border bg-gray-50 focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <div className="grid grid-cols-6 gap-2">
                          {filteredCountries.map((item, index) => (
                            <div
                              key={index}
                              className="card group relative shadow-sm bg-zinc-100 rounded-md p-1 flex items-center gap-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold cursor-pointer"
                              onClick={() => handleCountrySelect(item)} // Set the country on click
                            >
                              <span className={`fi fi-${item.countryFlag} text-lg`}></span>
                              <h6 className="text-sm font-medium truncate uppercase group-hover:text-indigo-700 ease-linear">
                                {item.CountryName}
                              </h6>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
  
  
                    <button
  
                      //href={`/global-companies-list/${item.countryName.replace(/\s+/g, '-')}/A-1`}
                      onClick={handleRedirect}
                      className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
                    >
                      <span className="text-white text-sm whitespace-nowrap">Search Data</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                      >
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>
  
  
  
                <div className="col-span-3">
  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-5">
                    {/* <li key={index}>{item.Name}</li> */}
                    {loading ? (
                      <div className="flex justify-center items-center h-24">
                        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      data?.map((item, index) => {
                        const cleanName = String(item.Name)
                          .replace(/[\u200B-\u200D\uFEFF\u00A0]/g, '')  // removes zero-width & non-breaking spaces
                          .replace(/^\s+|\s+$/g, '')                    // trims normal leading/trailing whitespace
                          .replace(/\s+/g, '-')                         // replaces spaces in the middle with dashes
                          .toLowerCase();
                        const companySlug = cleanName.replace(/\s+/g, '-').toLowerCase(); // remove all extra spaces and hyphenate
                        const countrySlug = urlCountry.trim().replace(/\s+/g, '-').toLowerCase();
  
                        return (
                          <a
                            key={index}
                            href={`/global-companies/${urlCountry.trim().replace(/\s+/g, '-').toLowerCase()}/${cleanName}`}
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
                            <h3 className="text-sm">{String(item.Name).replace(/[\u200B-\u200D\uFEFF\u00A0]/g, '')}</h3>
                          </a>
  
  
                        );
                      })
                    )}
  
                  </div>
  
                  {/* <!-- Pagination --> */}
                  <div className="flex items-center gap-x-1">
  
                    {/* Previous */}
                    <a
                      href={`${`/global-companies-list/${selectedCountry1.toLocaleLowerCase()}/${currentLetter.toLowerCase()}`}-${page > 1 ? page - 1 : 1}`}
                      className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                    >
                      Previous
                    </a>
  
                    {/* Page numbers */}
                    {pages.map((p) => (
                      <a
                        key={p}
                        href={`${`/global-companies-list/${selectedCountry1.toLocaleLowerCase()}/${currentLetter.toLowerCase()}`}-${p}`}
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none ${p === page
                          ? 'bg-emerald-500 text-white'
                          : 'text-gray-800 hover:bg-gray-100'
                          }`}
                        aria-current={p === page ? 'page' : undefined}
                      >
                        {p}
                      </a>
                    ))}
  
                    {/* Ellipsis */}
                    {Math.floor(totalCount / 25) > visiblePages && (
                      <span className="text-gray-400 px-2">...</span>
                    )}
  
                    {/* Next */}
                    <a
                      href={`${`/global-companies-list/${selectedCountry1.toLocaleLowerCase()}/${currentLetter.toLowerCase()}`}-${page < totalCount ? page + 1 : Math.floor(totalCount / 25)}`}
                      className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                    >
                      Next
                    </a>
  
                    {/* Last */}
                    <a
                      href={`${`/global-companies-list/${selectedCountry1.toLocaleLowerCase()}/${currentLetter.toLowerCase()}`}-${Math.floor(totalCount / 25)}`}
                      className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                    >
                      Last
                    </a>
                  </div>
  
                  {/* <!-- End Pagination --> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  

export default ClientPage;
