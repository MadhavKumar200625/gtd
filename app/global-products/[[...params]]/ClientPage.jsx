"use client";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";


const ClientPage = () => {
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
  const urltype = paramArray[1]?.toLowerCase() || "import";
  const urlLetter1 = paramArray[2]?.toUpperCase() || "a-1";
  const parts = urlLetter1.split('-');
  const urlLetter = parts[0] ?? "a";
  const urlPage = parts[1] ?? '1';
  

  const ddlparam = "";
  const [selectedCountry1, setSelectedCountry1] = useState(urlCountry);
  const [urltype1, setUrltype] = useState('Import');
  const [currentPage, setCurrentPage] = useState(urlPage);
  const [currentLetter, setCurrentLetter] = useState(urlLetter);

  const country = [
    {
      countryName: "india",
      pageURL: "/india-import-export-data",
      flag: "in",
    },
    {
      countryName: "bangladesh",
      pageURL: "#",
      flag: "bd",
    },
    {
      countryName: "philippines",
      pageURL: "#",
      flag: "ph",
    },
    {
      countryName: "indonesia",
      pageURL: "#",
      flag: "id",
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

  const getData = async () => {
    setLoading(true);

    try {
      const res = await fetch('../../../global-products/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'countries_product',
          type: 'list',
          size: (currentPage) * 100 + 1,
          filters: currentLetter,
          columns: selectedCountry1.replaceAll('_', ' ').toLowerCase() + '_' + urltype + '_on',
        }),
      });
   
      const data = await res.json();
      //console.log(json.stringify(data));
      ///alert(JSON.stringify(data));
      const productList = data["data"] || [];
      const companyCount = data["total_values"] || 0;

      setData(productList);
      setPage(companyCount);
      //setTotalCount(data.totalCount || 0);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //     getData();
  // }, [currentLetter, selectedCountry1, urltype, currentPage]);

  useEffect(() => {
    getData();
  }, []);

 
  const handleCountryChange = (e) => {
    setSelectedCountry1(e.target.value);
  };

  const handleTypeChange = (e) => {
    setUrltype(e.target.value);
  };

  const handleSearchClick = () => {
    var a = document.getElementById('ddlcountry').value;
    //alert(a);
    var b = document.getElementById('ddltype').value;
      a = a.replaceAll(' ', '_').toLowerCase();
      b = b.toLowerCase();
    if (a === "0") {
      alert("Please select a country");
      return;
    }

    const url = `/global-products/${a}/${b}/${urlLetter.toLowerCase()}-${currentPage}`;
    router.push(url);
  };

  


  const product_search_click = (code) => {
    
    const countrySlug = selectedCountry1.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = urltype.toLowerCase();

    const normalizedCode = code.toLowerCase(); // Convert to lowercase

  const queryParams = new URLSearchParams();
  queryParams.set("product", normalizedCode); // Use lowercase

  // const encodedQuery = encodeURIComponent(btoa(queryParams.toString()));
  const url = `/search/${countrySlug}/${typeSlug}/product-${normalizedCode}`;
  router.push(url);
};
    

  const handlePageChange = (page) => {
    setCurrentPage(page);
    router.push(`/global-products/${selectedCountry1}/${urltype}/${urlLetter.toLowerCase()}-${currentPage}`);
  };

  
  const visiblePages = 5;
  const page = parseInt(urlPage ?? '1');
  //const pages = Array.from({ length: totalCount }, (_, i) => i + 1);
  const pages = Array.from({ length: visiblePages }, (_, i) => i + 1);

  const [heading, setHeading] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  useEffect(() => {

    let type_a = '';
      if (urltype && urltype.length > 2) {
        type_a = urltype.charAt(0).toUpperCase() + urltype.slice(1);
      }
    // Update heading and subtitle based on URL params
    if (selectedCountry1 && urltype && urlLetter) {
      const formattedCountry = capitalize(selectedCountry1.replace('_', ' '));
      const formattedType = capitalize(urltype);
      
      setHeading(
        `Directory Of ${formattedCountry} ${type_a} Products Starting With ${urlLetter} Alphabet`
      );
      
      setSubtitle(
        `Find out details about ${formattedCountry} ${type_a} products starting with ${urlLetter} alphabet`
      );
    } else {
      // Default values when no params are present
      setHeading("Directory Of Import Export Products Starting With A Alphabet");
      setSubtitle("Find out details about export and import products starting from A to Z");
    }
  }, [selectedCountry1, urltype, urlLetter]);




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
                    Global Products
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-2xl font-bold text-dark md:text-3xl mt-6 lg:text-4xl">
          {heading}
           
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
            id="ddlcountry"
            className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5 "
            value={selectedCountry1}
            onChange={handleCountryChange}
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

          </select>
          <select
            id="ddltype"
            className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5 "
            value={urltype1}
            onChange={handleTypeChange}
          >
            <option>Import</option>
            <option>Export</option>
          </select>
          <button
            onClick={handleSearchClick}
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
              className="lucide lucide-chevron-right ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </section>

      <section className="py-20 z-20 relative">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="order-2 md:order-1">
              <h5 className="text-lg text-black mb-3">FIlters</h5>
              <div className="p-4 bg-slate-200 rounded-lg w-full">
                <h5 className="text-base font-bold text-black mb-3">
                  Browse by Products:
                </h5>
                <div className="alphabets flex flex-wrap gap-1">

                  {alphabet.map((letter) => (
                    <a
                      key={letter}
                      href={`/global-products/${selectedCountry1}/${urltype}/${letter.toLowerCase()}-${currentPage}`}
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

                    className={`flex items-center gap-2 p-2 rounded-md mb-2 transition ease-in-out duration-300 cursor-pointer ${selectedCountry1 === item.countryName.toLowerCase()
                      ? "bg-blue-500 text-white"
                      : "bg-white hover:bg-blue-100"
                      }`}
                    key={index}
                    href={`/global-products/${item.countryName.toLowerCase()}/${urltype}/${currentLetter.toLowerCase()}-${currentPage}`}
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
              <h5 className="text-2xl text-black mb-3">{currentLetter.toUpperCase()}</h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {data.map((product, index) => (
                  <button
                    key={index}
                    //href={`/global-products/${selectedCountry1}/${urltype}/${currentLetter.toLowerCase()}-${currentPage}`}
                    onClick={() => product_search_click(product.product)}
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
                    <h3 className="text-sm">{product.product}</h3>
                  </button>
                ))}
              </div>

              {/* <!-- Pagination --> */}
              <div className="flex items-center gap-x-1">

                {/* Previous */}
                <a
                  href={`${`/global-products/${selectedCountry1.toLocaleLowerCase()}/${urltype}/${currentLetter.toLowerCase()}`}-${page > 1 ? page - 1 : 1}`}
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                >
                  Previous
                </a>

                {/* Page numbers */}
                {pages.map((p) => (
                  <a
                    key={p}
                    href={`${`/global-products/${selectedCountry1.toLocaleLowerCase()}/${urltype}/${currentLetter.toLowerCase()}`}-${p}`}
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
                  href={`${`/global-products/${selectedCountry1.toLocaleLowerCase()}/${urltype}/${currentLetter.toLowerCase()}`}-${page < totalCount ? page + 1 : Math.floor(totalCount / 25)}`}
                  className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                >
                  Next
                </a>

                {/* Last */}
                <a
                  href={`${`/global-products/${selectedCountry1.toLocaleLowerCase()}/${urltype}/${currentLetter.toLowerCase()}`}-${Math.floor(totalCount / 25)}`}

                  className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                >
                  Last
                </a>
              </div>
              {/* <!-- End Pagination --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPage;

