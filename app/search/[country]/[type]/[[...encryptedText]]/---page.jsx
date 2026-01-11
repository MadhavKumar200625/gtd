'use client';
import { useParams } from 'next/navigation';
//import { useEffect } from 'react';
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CTA from "../../../../Common/CTA";
import Search from "../../../../common/Search1";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { country_all, country_cus } from '../../../../../data/countries';
import { stringify } from 'postcss';
import { useRouter } from 'next/navigation';


const SearchPage = () => {
  const router = useRouter();
  const params = useParams();
  const { country, type, encryptedText = [] } = params; // encryptedText is array or []

  const [product, setProduct] = useState('');
  const [hscode, setHscode] = useState('');
  const [countryin, setcountryin] = useState('');
  const [port, setport] = useState('');
  const [loading, setLoading] = useState(true);
  const [hscode_search, setHscode_search] = useState(false);
  const [country_search, setcountry_search] = useState(false);
  const [unloading_search, setUnloading_search] = useState(false);


  
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  const lowerCountry = country.replaceAll(' ', '_').toLowerCase();
  const isInAll = country_all.includes(lowerCountry);
  const isInCustoms = country_cus.includes(lowerCountry);

  const final_country = isInCustoms ? lowerCountry : 'all';
  // Parse encryptedText array into params
  useEffect(() => {
    if (encryptedText) {
      setProduct(encryptedText[0] || '');
      setHscode(encryptedText[1] || '');
      setcountryin(encryptedText[2] || '');
      setport(encryptedText[3] || '');
    }
  }, [encryptedText]);

  // Fetch data whenever params change
  // useEffect(() => {
  //   if (product || hscode || countryin || port) {
  //     setLoading(true);
  //     fetch('/api/search', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ product, hscode, countryin, port, country, type }),
  //     })
  //       .then(res => res.json())
  //       .then(data => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch(err => {
  //         console.error('Fetch error:', err);
  //         setLoading(false);
  //       });
  //   }
  // }, [product, hscode, countryin, port, country, type]);

//   return (
//     <div>
//       {loading ? <p>Loading...</p> : (
//         <div>
//           {/* render your data here */}
//           {JSON.stringify(data)}
//         </div>
//       )}
//     </div>
//   );

// // 'use client';
// import { useParams } from 'next/navigation';
// //import { useEffect } from 'react';
// import React, { useState, useEffect } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CTA from "../../../../Common/CTA";
// import Search from "../../../../Common/Search";
// import Link from "next/link";
// import "flag-icons/css/flag-icons.min.css";
// import { country_all, country_cus } from '../../../../../data/countries';
// import { stringify } from 'postcss';
// import { useRouter } from 'next/navigation';

// const SearchPage = () => {
//   const router = useRouter();
//   const params = useParams();
//   const { country, type, encryptedText=''} = params;
//   const [product, setProduct] = useState();
//   const [hscode, setHscode] = useState();
//   const [countryin, setcountryin] = useState();
//   const [port, setport] = useState();
//   const [loading, setLoading] = useState(true); // loading state


//   const [hscode_search, setHscode_search] = useState(false);
//   const [country_search, setcountry_search] = useState(false);
//   const [unloading_search, setUnloading_search] = useState(false);

//   //const [hscode, setHscode] = useState(false);
//   //const [country, setcountry] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState(country);
//   // const [unloading, setUnloading] = useState(false);
//   const [tradeType, setTradeType] = useState(type);


//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState([]);

//   const lowerCountry = country.replaceAll(' ', '_').toLowerCase();
//   const isInAll = country_all.includes(lowerCountry);
//   const isInCustoms = country_cus.includes(lowerCountry);

//   const final_country = isInCustoms ? lowerCountry : 'all';
//   useEffect((encryptedText) => {
//     if (product || hscode || countryin || port) {
//       setProduct(product || '');
//       setHscode(hscode || '');
//       setcountryin(countryin || '');
//       setport(port || '');
//     }
//   }, [product, hscode, countryin, port]);
  
  // useEffect(() => {
  //   if (encryptedText) {
  //     try {
  //       const decodedString = atob(decodeURIComponent(encryptedText));
  //       const urlParams = new URLSearchParams(decodedString);

  //       setProduct(urlParams.get('product') || '');
  //       setHscode(urlParams.get('hscode') || '');
  //       setcountryin(urlParams.get('countryin') || '');
  //       setport(urlParams.get('port') || '');


  //     } catch (error) {
  //       console.error('Invalid encoded data:', error);
  //     }
  //   }
  // }, [encryptedText]);

  useEffect(() => {
    if (!product && !hscode && !countryin && !port && !country && !type) return;
    let payload = {
      source: final_country.replaceAll(' ', '_').toLowerCase(),
      type: "master",
      size: 10,
      filters: {

      }
    };

    if (type == 'import') {
      payload.distinct_filters = ["origin_country", "hs_code", "Port_of_Unloading"];
      payload.filters.destination_country = lowerCountry.replaceAll('_', ' ').toLowerCase();
      if (unloading_search) {
        payload.filters.Port_of_Unloading = unloading_search.toLowerCase();
      }
      if (countryin) {
        payload.filters.origin_country = countryin.toLowerCase();
      }
      if (port) {
        payload.filters.Port_of_Unloading = port;
      }
    }
    else if (type == "export") {
      payload.distinct_filters = ["destination_country", "hs_code", "Port_of_Loading"];
      payload.filters.origin_country = lowerCountry.replaceAll('_', ' ').toLowerCase();
      if (unloading_search) {
        payload.filters.Port_of_loading = unloading_search.toLowerCase();
      }
      if (countryin) {
        payload.filters.destination_country = countryin.toLowerCase();
      }
      if (port) {
        payload.filters.Port_of_Loading = port;
      }
    }
    
    if (product) {
      payload.filters.Product_Description = "%" + product + "%";
    }
    if (hscode) {
      payload.filters.hs_code = hscode + "%";
    }



    const getData = async () => {
      try {
        alert(JSON.stringify(payload));
        const res = await fetch("../../../search/api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const result = await res.json();
        alert(JSON.stringify(result));
        alert(JSON.stringify(result?.data || "No data received"));

        setData(result.data);
        setFilter(result.unique);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([{ error: true, message: error.message }]);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [product, hscode, country, countryin, port, type]);


  const filterCountries = [];
  const filterhsCodes = [];
  const filterports = [];

  filter.forEach(item => {
    if (item.startsWith("origin_country:") || item.startsWith("destination_country:")) {
      filterCountries.push(item);
    } else if (item.startsWith("hs_code:")) {
      filterhsCodes.push(item);
    } else if (item.startsWith("Port_of_Unloading:") || item.startsWith("Port_of_Loading:")) {
      filterports.push(item);
    }
  });


  const hs_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
  
    const url = `/secure/${countrySlug}/${typeSlug}/${product}/${code}/${port}/${countryin}`;
  
    router.push(url);
  };
  
  const port_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
  
    const url = `/secure/${countrySlug}/${typeSlug}/${product}/${hscode}/${code}/${countryin}`;
  
    router.push(url);
  };
  
  const countryin_search_click = (code) => {
    const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
    const typeSlug = type.toLowerCase();
  
    const url = `/secure/${countrySlug}/${typeSlug}/${product}/${hscode}/${port}/${code}`;
  
    router.push(url);
  };
  

  // const hs_search_click = (code) => {

  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${code}&port=${port}&countryin=${countryin}`;

  //   const encodedText = product || code || port || countryin
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

  //   router.push(url);
  // };

  // const port_search_click = (code) => {

  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${hscode}&port=${code}&countryin=${countryin}`;

  //   const encodedText = product || hscode || code || countryin
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

  //   router.push(url);
  // };

  // const countryin_search_click = (code) => {
  //   const countrySlug = country.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = type.toLowerCase();
  //   const combinedText = `product=${product}&hscode=${hscode}&port=${port}&countryin=${code}`;

  //   const encodedText = product || hscode || port || code
  //     ? encodeURIComponent(btoa(combinedText))
  //     : null;

  //   const url = encodedText
  //     ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
  //     : `/search/${countrySlug}/${typeSlug}`;

  //   router.push(url);
  // };


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
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-emerald-500"
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
            Search Global Trade Data by Country, HS Code & Product
          </h1>
          <p className="mb-8 text-justify text-base font-normal text-dark">
            Get unlimited access to our online global trade data portal. Perform
            free search on global trade data by country, HS Code and product.
            Find detailed shipment records with essential data fields including
            product description, quantity, unit, value, country of
            origin/destination, buyer supplier name and port of
            loading/unloading.
          </p>



        </div>
      </section>

      <section className="container mx-auto px-4 md:px-0 py-10">
        <Search />
        {/* Selected Filters Display */}
        <div className="flex flex-wrap md:mx-auto gap-2 mt-4 px-4 ml-6 px-4 mx-4 mt-4 items-left justify-left md:max-w-screen-md lg:max-w-screen-lg">
        {country && (
            <span className="flex items-center bg-orange-100 text-orange-800 text-xs font-medium px-3 py-1 rounded-full">
              Country: {country}
              
            </span>
          )}
          {product && (
            <span className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Product: {product}
              <button onClick={() => setProduct(null)} className="ml-2 text-blue-500 hover:text-blue-700">&times;</button>
            </span>
          )}
          {hscode && (
            <span className="flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
              HS Code: {hscode}
              <button onClick={() => setHscode_search(null)} className="ml-2 text-green-500 hover:text-green-700">&times;</button>
            </span>
          )}
          {countryin && (
            <span className="flex items-center bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded-full">
              CountryIn: {countryin}
              <button onClick={() => countryin_search_click(null)} className="ml-2 text-purple-500 hover:text-purple-700">&times;</button>
            </span>
          )}
          {port && (
            <span className="flex items-center bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Port: {port}
              <button onClick={() => port_search_click(null)} className="ml-2 text-pink-500 hover:text-pink-700">&times;</button>
            </span>
          )}
        </div>
      </section>

      <section className="pb-20 pt-10">
        <div className="container-xl px-3 md:px-14 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-baseline">
            <div className="p-3 rounded-xl bg-gray-100">
              <h6 className="text-xl font-bold flex items-center py-1 px-2 rounded-md bg-white mb-2">
                <span className="me-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Filter
              </h6>
              <div className="p-3 bg-white mb-3 rounded-md">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setHscode_search(!hscode_search)}
                >
                  HS Code
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${!hscode_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${!hscode_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterhsCodes.map((item, index) => {
                    const match = item.match(/hs_code:\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, hs_code, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => hs_search_click(hs_code)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {hs_code.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="p-3 bg-white mb-3 rounded-md border-b border-gray-50">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setcountry_search(!country_search)}
                >
                  Country
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${country_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${country_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterCountries.map((item, index) => {
                    const match = item.match(/origin_country:\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, country, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => countryin_search_click(country)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {country.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}

                </ul>
              </div>
              <div className="p-3 bg-white mb-3 rounded-md border-b border-gray-50">
                <h6
                  className="text-base font-semibold cursor-pointer flex justify-between items-center"
                  onClick={() => setUnloading_search(!unloading_search)}
                >
                  {type == "import" ? ("PORT OF UNLOADING") : ("PORT OF LOADING")}
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${unloading_search ? "rotate-45 stroke-emerald-500" : ""
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </h6>
                <ul
                  className={`${unloading_search ? "h-[150px] opacity-100" : "h-0 opacity-0"
                    } transition-all duration-300 ease-in-out overflow-y-scroll vertical-scroll mt-1`}
                >
                  {filterports.map((item, index) => {
                    const match = item.match(/Port_of_(.*?):\s*(.*),\s*Count:\s*(\d+)/);
                    if (!match) return null;
                    const [, dynamicKey, value, count] = match;
                    return (
                      <li key={index}>
                        <button
                          className="text-sm text-gray-700 hover:text-emerald-500 flex items-center gap-1"
                          onClick={() => port_search_click(value)}
                        >
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="size-3"
                            >
                              <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                              <path
                                fillRule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          {value.trim()} ({parseInt(count).toLocaleString()})
                        </button>

                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="md:col-span-4">
              <div className="relative overflow-x-auto w-screen shadow-md sm:rounded-lg">
                <table className="w-100 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 overflow-visible">

                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                        DATE
                      </th>
                      <th scope="col" className="px-6 py-3 border-b">
                        HS CODE
                      </th>
                      <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                        PRODUCT DESCRIPTION
                      </th>
                      <th scope="col" className="px-6 py-3 border-b">
                        EXPORTER
                      </th>
                      <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                        QUANTITY
                      </th>
                      <th scope="col" className="px-6 py-3 border-b">
                        UNIT
                      </th>
                      <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                        TOTAL VALUE USD
                      </th>
                      <th scope="col" className="px-6 py-3 border-b">
                        {type == "import" ? ("ORIGIN COUNTRY") : ("DESTINATION COUNTRY")}
                      </th>
                      <th scope="col" className="px-6 py-3 border-b bg-gray-50">
                        {type == "import" ? ("PORT OF UNLOADING") : ("PORT OF LOADING")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, i) => (
                      <tr key={i} className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 text-sm">{item._source.date}</td>
                        <td className="p-2 text-sm">{item._source.hs_code}</td>
                        <td className="p-2 text-sm bg-gray-50 max-w-36 relative group">
                          <p className="truncate">{item._source.Product_Description}</p>

                          {/* Tooltip */}
                          <div className="absolute z-50 hidden group-hover:block bg-black text-white text-xs rounded p-2 max-w-xs whitespace-normal left-full top-1/2 -translate-y-1/2 ml-2 pointer-events-none">
                            {item._source.Product_Description}
                          </div>
                        </td>

                        <td className="p-2 text-sm">{item._source.exporter}</td>
                        <td className="p-2 text-sm bg-gray-50">{item._source.quantity}</td>
                        <td className="p-2 text-sm">{item._source.unit}</td>
                        <td className="p-2 text-sm bg-gray-50">{item._source.total_value_usd}</td>
                        {/* <td className="p-2 text-sm">{item._source.origin_country}</td>
                        <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_Unloading}</td> */}
                        {/* {type == "import" ? (
                          `<td className="p-2 text-sm">{item._source.origin_country}</td>
                          <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_Unloading}</td>`
                        ) : (
                          `<td className="p-2 text-sm">{item._source.destination_country}</td>
                           <td className="p-2 text-sm bg-gray-50">{item._source.Port_of_loading}</td>`
                        )} */}
                        <td className="p-2 text-sm">{type == "import" ? (item._source.origin_country) : (item._source.destination_country)}</td>
                        <td className="p-2 text-sm bg-gray-50">{type == "import" ? (item._source.Port_of_Unloading) : (item._source.Port_of_Loading)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* {JSON.stringify(data)} */}

              </div>
              {/* <!-- Pagination --> */}
              <nav
                className="flex items-center gap-x-1 mt-3"
                aria-label="Pagination"
              >
                <a

                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  aria-label="Previous"
                  disabled=""
                  href={`https://gtdservice.com/contact`}
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
                </a>
                <div className="flex items-center gap-x-1">
                  <a
                    href={`https://gtdservice.com/contact`}
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-emerald-500 text-white py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    1
                  </a>
                  <a
                    href={`https://gtdservice.com/contact`}
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                    aria-current="page"
                  >
                    2
                  </a>
                  <a
                    href={`https://gtdservice.com/contact`}
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    3
                  </a>
                </div>
                <a
                  href={`https://gtdservice.com/contact`}
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
                </a>
              </nav>
              {/* <!-- End Pagination --> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Search Global Export-Import Trade Data
              </h3>
              <p className="text-base text-gray-700">
                GTD Service provides genuine and up-to-date import export data for mobile phones categorized under HS code 85 in the USA. Get the gathered mobile import data and export data under HS code 85, with product and date. Global Trade Data Service assists in analyzing import price, company name, port, importer, exporter, product descriptions, quantity, market trends, and numerous other data points. International import and export trade statistics of a nation assist the international importers and exporters in conducting analysis and market research to locate local buyers and suppliers in that nation.
              </p>
              <div className="flex mt-5 gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-base text-gray-700">
                  Use data-driven decisions to speed up your export-import business and reduce risk.
                </p>
              </div>
              <div className="flex mt-5 gap-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <p className="text-base text-gray-700">
                  Sync your business model with international strategic planning and be ahead.
                </p>
              </div>
            </div>
            <div>
              <img src="/images/search_data.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="mt-16 md:grid md:grid-cols-4 gap-4">
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/network.svg"
                className="w-16 mb-3 mx-auto"
                alt=""
              />
              <h6 className="text-md text-black font-semibold">
                Expand Your Business Network
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/target.svg"
                className="w-16 mb-3 mx-auto"
                alt=""
              />
              <h6 className="text-md text-black font-semibold">
                Risk Free Market Entry Strategy
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/worldwide.svg"
                className="w-16 mb-3 mx-auto"
                alt=""
              />
              <h6 className="text-md text-black font-semibold">
                Authentic Export-Import trade data
              </h6>
            </div>
            <div className="p-3 bg-white text-center border rounded-lg">
              <img
                src="/images/icons/reliable.svg"
                className="w-16 mb-3 mx-auto"
                alt=""
              />
              <h6 className="text-md text-black font-semibold">
                Lightning and Reliable Export-Import Trade data
              </h6>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

export default SearchPage;