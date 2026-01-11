"use client";
import React, { useState } from "react";
import Link from "next/link";

const FAQ = (params) => {
  const { id } = params;
    
  const [activeIndex, setActiveIndex] = useState(1); // Track the currently expanded FAQ

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active FAQ
  };

  return (
    <>
      <section className="mybg">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="md:grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-primary text-lg text-gray-400 font-medium">
                Common Questions : 
              </h3>
              <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Frequently Asked Questions (FAQs)
              </h2>
            </div>
            <div className="col-span-2">
              {/* --------------Question Start---------------------- */}
              <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(1)}
                >
                  <h5
                    className={`text-lg font-bold text-black ${
                      activeIndex === 1 ? "text-blue-600" : ""
                    }`}
                  >
                    Why is {id} Import Export Data important?
                  </h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${
                        activeIndex === 1 ? "rotate-45 stroke-blue-600" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 1
                      ? "max-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                  {id} import-export trade data is crucial for businesses or policymakers, economists, and researchers since it gives detailed insights into global trade patterns.
        

                  </p>
                
                </div>
              </div>
              {/* --------------Question Start---------------------- */}
              <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(2)}
                >
                  <h5
                    className={`text-lg font-bold text-black ${
                      activeIndex === 2 ? "text-blue-600" : ""
                    }`}
                  >
                    Where can I access {id} Import Export Data?
                  </h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${
                        activeIndex === 2 ? "rotate-45 stroke-blue-600" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 2
                      ? "min-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                  "You can easily access {id} Import Export Trade Data on the GTD Service."
                  </p>
                  
                </div>
              </div>
              {/* --------------Question Start---------------------- */}
              <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(3)}
                >
                  <h5
                    className={`text-lg font-bold text-black ${
                      activeIndex === 3 ? "text-blue-600" : ""
                    }`}
                  >
                    What does the {id} export most of?
                  </h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${
                        activeIndex === 3 ? "rotate-45 stroke-blue-600" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 3
                      ? "min-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                  "The {id} exports refined petroleum, aircraft and spacecraft, semiconductors, automobiles, and medical instruments the most..
                  </p>
                  
                </div>
              </div>
              {/* --------------Question Start---------------------- */}
              <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(4)}
                >
                  <h5
                    className={`text-lg font-bold text-black ${
                      activeIndex === 4 ? "text-blue-600" : ""
                    }`}
                  >
                    What are the {id}’s top export and import destinations?
                  </h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${
                        activeIndex === 4 ? "rotate-45 stroke-blue-600" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 4
                      ? "min-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                  "The {id}’s top export destinations are Canada, Mexico, China, Japan, and Germany, and top import sources include China, Mexico, Canada, Vietnam, and Germany.
                  </p>
                  
                </div>
              </div>

              {/* --------------Question Start---------------------- */}
              <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(5)}
                >
                  <h5
                    className={`text-lg font-bold text-black ${
                      activeIndex === 5 ? "text-blue-600" : ""
                    }`}
                  >
                    What types of import export trade data can I find on the GTD Service?
                  </h5>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`size-4 transform transition-transform duration-300 ${
                        activeIndex === 5 ? "rotate-45 stroke-blue-600" : ""
                      }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeIndex === 5
                      ? "min-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                  Global Trade Data Service provides an extensive range of import export trade statistics, offering customers in-depth analysis of international trade activities. 
                  </p>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
