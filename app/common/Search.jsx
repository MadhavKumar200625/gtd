// "use client";
// import React, { useState } from "react";
// import { countries } from '@/data/countries_ddl';
// import { useRouter } from "next/navigation";

// const Search = () => {
//   const router = useRouter();
//   const [dropActive, setDropActive] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [product, setProduct] = useState("");
//   const [hscode, setHscode] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);
//   const [tradeType, setTradeType] = useState("Import"); // Default to 'Import'

//   // Filter countries based on searchTerm
//   const filteredCountries = countries.filter((country) =>
  //   country.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
  // );

//   // Handle country selection
//   const handleCountrySelect = (country) => {
//     setSelectedCountry(country); // Set the selected country
//     setDropActive(false); // Close the dropdown
//   };

//   const handleSearchClick = () => {
//     if (!selectedCountry || !tradeType) {
//       alert("Please select both Country and Trade Type.");
//       return;
//     }

//     const countrySlug = selectedCountry.CountryName.toLowerCase().replace(/\s+/g, "-");
//     const typeSlug = tradeType.toLowerCase();
//     const combinedText = `product=${product}&hscode=${hscode}`;

//     const encodedText = product || hscode
//       ? encodeURIComponent(btoa(combinedText))
//       : null;

//     const url = encodedText
//       ? `/search/${countrySlug}/${typeSlug}/${encodedText}`
//       : `/search/${countrySlug}/${typeSlug}`;

//     router.push(url);
//   };

//   return (
//     <div className="relative px-4 mx-4 mt-4 md:mt-0 bg-white rounded-xl md:flex items-center justify-center md:mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
//       <div className="md:w-2/4">
//         <input
//           type="text"
//           placeholder="Enter Products"
//           value={product}  // Use the value from parent
//           onChange={(e) => setProduct(e.target.value)}  // Use the setter passed from parent
//           className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//         />
//       </div>
//       <div className="md:w-2/4">
//         <input
//           type="text"
//           placeholder="Hs Code"
//           value={hscode}  // Use the value from parent
//           onChange={(e) => setHscode(e.target.value)}  // Use the setter passed from parent
//           className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//         />
//       </div>
//       <div className="md:w-2/4 relative">
//         <div
//           className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center justify-between cursor-pointer"
//           onClick={() => setDropActive(!dropActive)}
//         >
//           <span>{selectedCountry ? selectedCountry.CountryName : "Select Country"}</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="20"
//             height="20"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className={`ml-1 transition-transform duration-300 ${dropActive ? "rotate-90" : ""}`}
//           >
//             <path d="m9 18 6-6-6-6" />
//           </svg>
//         </div>
//       </div>

//       {/* The full-width dropdown panel */}
//       {dropActive && (
//         <div className="absolute left-0 right-0 top-[165px] md:top-full mt-2 bg-white shadow-xl border rounded-xl p-4 z-50 max-h-96 overflow-y-auto">
//           <input
//             type="text"
//             placeholder="Search Country"
//             className="shadow-sm mb-4 border bg-gray-50 focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
//             {filteredCountries.map((item, index) => (
//               <div
//                 key={index}
//                 className="card group relative shadow-sm bg-zinc-100 rounded-md p-1 flex items-center gap-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold cursor-pointer"
//                 onClick={() => handleCountrySelect(item)} // Set the country on click
//               >
//                 <span className={`fi fi-${item.countryFlag} text-lg`}></span>
//                 <h6 className="text-sm font-medium truncate uppercase group-hover:text-indigo-700 ease-linear">
//                   {item.CountryName}
//                 </h6>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <select
//         className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5"
//         value={tradeType}  // Use the value from parent
//         onChange={(e) => setTradeType(e.target.value)}  // Use the setter passed from parent
//       >
//         <option>Import</option>
//         <option>Export</option>
//       </select>

//       <button
//         onClick={handleSearchClick}
//         className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center group"
//       >
//         <span className="text-white text-sm whitespace-nowrap">Search Data</span>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
//         >
//           <path d="m9 18 6-6-6-6"></path>
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default Search;
"use client";
import React, { useState } from "react";
import { countries } from '../../data/countries_ddl';

// import { countries } from '@/data/countries_ddl';
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [dropActive, setDropActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState("");
  const [hscode, setHscode] = useState("");
    const [countryin, setcountryin] = useState("");
  const [port, setport] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [tradeType, setTradeType] = useState("Import"); // Default to 'Import'

  // Filter countries based on searchTerm
  const filteredCountries = countries.filter((country) =>
    country.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle country selection
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setDropActive(false);
  };

  // const handleSearchClick = () => {
  //   if (!selectedCountry || !tradeType) {
  //     alert("Please select both Country and Trade Type.");
  //     return;
  //   }
  
  //   const countrySlug = selectedCountry.CountryName.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = tradeType.toLowerCase();
  
  //   // Optional params, trimmed and slugged if present
  //   const productSlug = product ? product.trim().toLowerCase().replace(/\s+/g, "-") : null;
  //   const hscodeSlug = hscode ? hscode.trim().toLowerCase().replace(/\s+/g, "-") : null;
  //   const portSlug = port ? port.trim().toLowerCase().replace(/\s+/g, "-") : null;
  //   const extraSlug = extra ? extra.trim().toLowerCase().replace(/\s+/g, "-") : null;
  
  //   // Build array of segments starting with mandatory ones
  //   let urlSegments = [countrySlug, typeSlug];
  
  //   // Push optional params if they exist, in order
  //   if (productSlug) urlSegments.push(productSlug);
  //   if (hscodeSlug) urlSegments.push(hscodeSlug);
  //   if (portSlug) urlSegments.push(portSlug);
  //   if (extraSlug) urlSegments.push(extraSlug);
  
  //   // Join segments with slash and prepend /search/
  //   //const url = `/search/${urlSegments.join("/")}`;
  //   const url = `/search/`+{countrySlug}+`/`+ {typeSlug} + `/product-` + {productSlug} + `/hs-` + {hscodeSlug} + `/port-` + {portSlug} + '/countryin-' + {countrySlug};
  
  //   router.push(url);
  // };
  
  const handleSearchClick = () => {
    if (!selectedCountry || !tradeType) {
      alert("Please select both Country and Trade Type.");
      return;
    }
  
    const countrySlug = selectedCountry.CountryName.toLowerCase().replace(/\s+/g, "-");
      const typeSlug = tradeType.toLowerCase();
    
  
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${port}/${countryin}`;
    let tanu = `/search/${countrySlug}/${typeSlug}`;
    if(product)
    {
      tanu +=  `/product-${product.replaceAll(' ','-').toLowerCase()}`;
    }
    if(hscode)
      {
        tanu +=  `/hs-${hscode}`;
      }
      if(port)
        {
          tanu +=  `/port-${port.replaceAll(' ','-').toLowerCase()}`;
        }
        if(countryin)
          {
            tanu +=  `&countryin-${countryin.replaceAll(' ','-').toLowerCase()}`;
          }
    //const url = `/search/${countrySlug}/${typeSlug}/${product}/${hscode}/${code}/${countryin}`;
    const url = tanu;
  
    router.push(url);
  };
  

  // const handleSearchClick = () => {
  //   if (!selectedCountry || !tradeType) {
  //     alert("Please select both Country and Trade Type.");
  //     return;
  //   }

  //   const countrySlug = selectedCountry.CountryName.toLowerCase().replace(/\s+/g, "-");
  //   const typeSlug = tradeType.toLowerCase();
    
  //   // Build URL with separate segments, fallback to 'none' if empty
  //   // const productSlug = product.trim() || 'none';
  //   // const hscodeSlug = hscode.trim() || 'none';
  //   // const portSlug=port.trim()||'none';

  //   const url = `/search/${countrySlug}/${typeSlug}`;


  //   router.push(url);
  // };

  return (
    <div className="relative px-4 mx-4 mt-4 md:mt-0 bg-white rounded-xl md:flex items-center justify-center md:mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
      <div className="md:w-2/4">
        <input
          type="text"
          placeholder="Enter Products"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="md:w-2/4">
        <input
          type="text"
          placeholder="Hs Code"
          value={hscode}
          onChange={(e) => setHscode(e.target.value)}
          className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>
      <div className="md:w-2/4 relative">
        <div
          className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 flex items-center justify-between cursor-pointer"
          onClick={() => setDropActive(!dropActive)}
        >
          <span>{selectedCountry ? selectedCountry.CountryName : "Select Country"}</span>
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
        <div className="absolute left-0 right-0 top-[165px] md:top-full mt-2 bg-white shadow-xl border rounded-xl p-4 z-50 max-h-96 overflow-y-auto">
          <input
            type="text"
            placeholder="Search Country"
            className="shadow-sm mb-4 border bg-gray-50 focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            {filteredCountries.map((item, index) => (
              <div
                key={index}
                className="card group relative shadow-sm bg-zinc-100 rounded-md p-1 flex items-center gap-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold cursor-pointer"
                onClick={() => handleCountrySelect(item)}
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

      <select
        className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 p-2.5"
        value={tradeType}
        onChange={(e) => setTradeType(e.target.value)}
      >
        <option>Import</option>
        <option>Export</option>
      </select>

      <button
        onClick={handleSearchClick}
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
  );
};

export default Search;

