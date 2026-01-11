"use client";
import Link from "next/link";
import React, { useState } from "react";

const Search = () => {
  const [dropActive, setDropActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null); // New state for selected country

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
    { CountryName: "Côte d'Ivoire", countryFlag: "ci" },
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
    { CountryName: "São Tomé and Príncipe", countryFlag: "st" },
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

  return (
    <div className="relative px-4 bg-white rounded-xl md:flex items-center justify-center mx-auto gap-2 md:max-w-screen-md lg:max-w-screen-lg border shadow-2xl py-5">
      
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


      <a
        href="/searchcountry"
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
      </a>
    </div>
  );
};

export default Search;
