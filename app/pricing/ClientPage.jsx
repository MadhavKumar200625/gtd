"use client";
import React, { useState } from "react";
import Clients from "../common/Clients";
import FAQ from "../common/FAQ";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import Modal from "../common/Modal";

const page = () => {
  const [showUsd, setShowUsd] = useState(true);

  const [selectedPlan, setSelectedPlan] = useState("");


  const [openModal, setOpenModal] = useState(false);

  const handlemodal = (plan) => {

    setSelectedPlan(plan);
    setOpenModal(true);
  };
  

  {/*const handlemodal = () => {
    setOpenModal(!openModal);
  };*/}

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
                    pricing
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <span className="mt-6 inline-block py-1 px-2 md:px-4 mb-3 text-xs md:text-base shadow-md rounded-full bg-white">
            Welcome to the World’s Largest Global Trade Database
          </span>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl lg:text-4xl">
            Global Import Export Data of 200+ countries
          </h1>
          <p className="mb-2 text-justify text-base font-normal text-dark">
            GTD Services being amongst the best <a href="https://gtdservice.com"><b>Global import-export data trade providers</b></a> provides the latest updated global import-export data of over 200+ countries. Expand your reach to the most diverse markets. Drive high-quality ROI leads from all over the globe and through global trade data and import-export platforms. Find actionable insights over international import-export trade data by country, quantity, value, suppliers, buyers, and port volumes. Importers and exporters keep an eye on international buyers and competitors' shipment data activities.

          </p>
          <h6 className="text-lg font-bold text-blue-600 mb-3">
            Access regularly updated Global trade data service and import-export trade data for India, US, China, Australia, Vietnam, Russia, and Turkey, as well as markets across Europe, Africa, and Latin America.

          </h6>
          <p className="mb-2 text-justify text-base font-normal text-dark">
            Find 100% verified international import-export trade data with accurate global import-export trade data details.
          </p>
        </div>
      </section>

      {/* ---------pricing Start------------ */}

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="text-center">
            <h4 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
              Overview
            </h4>
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight tracking-tighter">
              Affordable plans & pricing by countries
            </h3>
          </div>
          <div
            className={`flex mt-4 relative w-56 mx-auto py-2 items-center justify-center text-center rounded-full bg-white overflow-hidden shadow-inner shadow-gray-500/80 before:absolute before:h-full before:w-28 before:bg-blue-950 before:rounded-full before:top-0 before:z-10 before:transition-all before:left-0 before:ease-in ${showUsd ? "before:right-0" : "before:translate-x-full"
              }`}
          >
            <div
              className={`text-lg w-28 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${showUsd ? "text-white" : ""
                }`}
              onClick={() => setShowUsd(!showUsd)}
            >
              One
            </div>
            <div
              className={`text-lg w-28 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${showUsd ? "" : "text-white"
                }`}
              onClick={() => setShowUsd(!showUsd)}
            >
              All
            </div>
          </div>
          <div className="md:grid md:grid-cols-4 mt-10 gap-4 flex overflow-x-scroll md:overflow-hidden">

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-blue-600 before:to-purple-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-blue-600 after:to-purple-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] w-[310px] md-w-full">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800">
                    <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-purple-400 text-transparent text-2xl">
                      Starter
                    </span>
                  </h3>
                  <svg
                    className="flex-shrink-0 w-8 h-8 text-gray-400"
                    width="46"
                    height="46"
                    viewBox="0 0 46 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M41.1471 33.5C43.2804 30.2182 44.5168 26.3186 44.5168 22.1351C44.5168 10.4625 34.891 1 23.0168 1C11.1427 1 1.51685 10.4625 1.51685 22.1351C1.51685 26.3186 2.7533 30.2182 4.88656 33.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                    <circle
                      cx="23.0168"
                      cy="19.5"
                      r="6.5"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M9.29755 36.8698L9.29762 36.8698L9.30328 36.8581L9.83793 35.752L9.83797 35.7521L9.84174 35.7441C10.9246 33.4526 13.2107 32 15.7455 32H29.6106C32.072 32 34.3311 33.4164 35.45 35.6515L36.0077 36.8026C36.2359 37.3422 36.1887 37.9148 35.8945 38.3327C30.4486 45.6584 20.1377 47.1699 12.8126 41.7562C11.5089 40.7856 10.3724 39.6499 9.4009 38.3468C9.1039 37.8864 9.07552 37.3142 9.29755 36.8698Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>

                <div className="text-gray-800 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            199
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            699
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                <p className="sm:min-h-[60px] text-sm text-gray-700">
                    Great recommendation for the freshers. For More detailed Market Research and Better Analysis.

                  </p>
                </div>

                <button
                  onClick={() => handlemodal("Starter")}
                  className="cursor-pointer rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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
                </button>

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

                      {showUsd ? (<>
                        300 Search credits
                      </>) : (<>
                        600 Search credits
                      </>)}
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

                      {showUsd ? (<>
                        10,000 Download Credits
                      </>) : (<>
                        50,000 Download Credits
                      </>)}
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

                      {showUsd ? (<>
                        1 User license
                      </>) : (<>
                        1 User license
                      </>)}
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

                      {showUsd ? (<>
                        1 Year historical data
                      </>) : (<>
                        2 Year historical data
                      </>)}
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

                      {showUsd ? (<>
                        1 Months Validity
                      </>) : (<>
                        1 Months Validity
                      </>)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-pink-600 before:to-red-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-pink-600 after:to-red-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] w-[310px] md-w-full">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800">
                    <span className="bg-clip-text bg-gradient-to-tl from-pink-600 to-red-400 text-transparent text-2xl">
                      Basic
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            399
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            999
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                <p className="sm:min-h-[60px] text-sm text-gray-700">
                    Increased Download limit. Get to know emerging markets, trends, and opportunities

                  </p>
                </div>

                <button
                  onClick={() => handlemodal("Basic")}
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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
                </button>

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
                     
                      {showUsd ? (<>
                        1500 Search credit
                      </>) : (<>
                        3000 Search credit
                      </>)}
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
                      
                      {showUsd ? (<>
                        50,000 Download Credits
                      </>) : (<>
                        200,000 Download Credits
                      </>)}
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
                      
                      {showUsd ? (<>
                        2 User License
                      </>) : (<>
                        2 User License
                      </>)}
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
                      
                      {showUsd ? (<>
                        3 Year Historical Data
                      </>) : (<>
                        3 Year Historical Data
                      </>)}
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
                     
                      {showUsd ? (<>
                        3 Months Validity
                      </>) : (<>
                        3 Months Validity
                      </>)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-orange-600 before:to-yellow-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-orange-600 after:to-yellow-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] w-[310px] md-w-full">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800">
                    <span className="bg-clip-text bg-gradient-to-tl from-orange-600 to-yellow-400 text-transparent text-2xl">
                      Plus
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            699
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            1499
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                <p className="sm:min-h-[60px] text-sm text-gray-700">
                    Increased Download limit. Get to know emerging markets, trends, and opportunities

                  </p>
                </div>

                <button
                  onClick={() => handlemodal("Plus")}
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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
                </button>



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
                      Unlimited Search
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
                      
                      {showUsd ? (<>
                        150,000 Download Credits
                      </>) : (<>
                        500,000 Download Credits
                      </>)}
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
                      4 User License
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
                      
                      {showUsd ? (<>
                        5 Year Historical Data
                      </>) : (<>
                        6 Year Historical Data
                      </>)}
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
                      6 Months Validity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}

            {/* -----pricing card start----------- */}
            <div className="flex flex-col rounded-2xl p-0.5 relative z-[1] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-t before:from-green-600 before:to-blue-400 before:hover:from-purple-400 before:-z-[1] before:transition-all before:opacity-0 before:hover:opacity-100 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-t after:from-green-600 after:to-blue-400 after:-z-[1] after:transition-all after:opacity-100 after:hover:opacity-0">
              <div className="min-h-full p-6 md:p-7 bg-white rounded-[14px] w-[310px] md-w-full">
                <div className="flex justify-between items-center mb-3 sm:mb-5">
                  <h3 className="font-semibold text-gray-800">
                    <span className="bg-clip-text bg-gradient-to-tl from-green-600 to-blue-400 text-transparent text-2xl">
                      Premium
                    </span>
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="flex-shrink-0 w-8 h-8 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>

                <div className="text-gray-800 mb-2">
                  <h4 className="inline-flex text-4xl font-semibold">
                    <div className="inline-flex flex-wrap items-center gap-3">
                      <div
                        className={`inline-flex flex-wrap items-center transition-all ease-in ${showUsd ? "fadeup" : "fadedown"
                          }`}
                      >
                        {showUsd ? (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            999
                          </>
                        ) : (
                          <>
                            <span className="text-2xl self-start me-1">$</span>
                            1999
                          </>
                        )}
                      </div>
                    </div>
                  </h4>
                </div>

                <div className="mb-5">
                <p className="sm:min-h-[60px] text-sm text-gray-700">
                    Access detailed trade information By Product, Country, &
                    Ports With Premium Plan
                  </p>
                </div>

                <button
                  onClick={() => handlemodal("Premium")}
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Get Free Demo</span>
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
                </button>

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
                      Unlimited Search Credits
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
                      
                      {showUsd ? (<>
                        400,000  Download Credits
                      </>) : (<>
                        1,200,000  Download Credits
                      </>)}
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
                      
                      {showUsd ? (<>
                        6 User License
                      </>) : (<>
                        10 User License
                      </>)}
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
                      All Historical Data
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
                      12 Months Validity
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------pricing card end---------- */}
          </div>
        </div>
      </section>

      {/* ---------pricing end-------------- */}

      {/* ---------customize plan start-------------- */}
      <section className="pb-20">
        <div className="container mx-auto">
          <div className="mt-10 myshadow rounded-xl p-5 bg-[#f6f9fc]">
            <div className="md:grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-primary text-lg text-gray-400 font-medium">
                  Customized Plan
                </h3>
                <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2">
                  Create Your Own Plan
                </h2>
                <div className="flex">
                <button
                  onClick={() => handlemodal("Customized")}
                    className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                  >
                    <span className=" text-white text-sm">Get Free Demo</span>
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
                  </button>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
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
                    Choose From 200+ Countries
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
                    Complete Historical Data Access
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
                  <p className="text-base text-gray-800">Unlimited Searches</p>
                </div>
              </div>
              <div>
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
                    Customizable Download Records
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
                    Customized User Licence
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
                    Priority Customer Support
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="mx-auto text-center mb-2 text-balance text-3xl font-bold leading-snug my-2">
                Data available for 200+ other countries
              </h2>
              <div className="md:grid grid-cols-5 gap-4 mt-5">
              <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl mb-4 md:mb-0">
                  <h6 className="uppercase text-lg font-semibold">Asia</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-in block text-xl rounded-md"></span>
                      </div>
                      <p>India</p>
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
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl mb-4 md:mb-0">
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
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl mb-4 md:mb-0">
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
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl mb-4 md:mb-0">
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
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl mb-4 md:mb-0">
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
                href="/get-started"
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
      {/* ---------customize plan end-------------- */}

      {/* ---------consult our expert start-------------- */}
      <section className="py-5 bg-blue-950">
        <div className="container mx-auto px-4 md:px-0">
          <div className="md:grid grid-cols-2 items-center">
            <div>
              <img src="/images/Pricing.webp" className="w-full" alt="global trade database" title="Global Trade Database" />
            </div>
            <div>
              <h3 className="text-primary text-lg text-emerald-400 font-medium">
              How do we work?
              </h3>
              <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-white">
              Get Dedicated API to Access Our Global Trade Database
              </h2>
              <ul className="mt-5">
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>

                  <p className="text-white text-base ">API DEVELOPMENT</p>
                </li>
                <li className="flex items-center gap-3 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                    />
                  </svg>

                  <p className="text-white text-base ">API INTEGRATION</p>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6 stroke-emerald-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>

                  <p className="text-white text-base ">EXECUTE STRATEGIES</p>
                </li>
              </ul>
              <div className="flex mt-3">
                <a
                  href="/contact"
                  className="rounded-xl mt-4 px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-md shadow-blue-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">
                    Consult our expert
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
            </div>
          </div>
        </div>
      </section>
      {/* ---------consult our expert end-------------- */}

      {/* ---------Benefits Start-------------- */}
      <div className="py-20 mybg">
        <div className="container mx-auto">
          <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
            Benefits
          </h3>
          <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
            Unlock Different Benefits of Global Trade Data Service GTIS
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div>
              <img
                src="/images/gtd-srvs.png"
                className="w-2/3 mx-auto md:mx-0 md:w-full"
                alt="Global trade data"
                title="Global Trade Data"
              />
            </div>
            <div>
              <ul>
                <li className="text-base flex gap-3 font-normal text-black text-justify p-3 mb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10 fill-emerald-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-lg text-black font-bold mb-2">
                      Visual Reports
                    </h6>
                    Get spot-on visual reports for comprehensive market research to discover the top 10 HS codes, month-wise, country-wise, and import data and export data, shipments data, and customs data records. Utilize this information for crucial business decisions.

                  </div>
                </li>
                <li className="text-base flex gap-3 font-normal text-black text-justify p-3 mb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10 fill-emerald-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-lg text-black font-bold mb-2">
                      Product Trends
                    </h6>
                    Stay ahead of your competition with the latest market trends with GTD Services. Find out the latest product trends by HS Code, Chapter, Heading, Subheading, Destination Country, Exporter, Importer District and State, Mode of Transport, Port of Discharge-Loading, etc.

                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li className="text-base flex gap-3 font-normal text-black text-justify p-3 mb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10 fill-emerald-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-lg text-black font-bold mb-2">
                      Advance Search
                    </h6>
                    Keeping the user convenience in mind, we have an advanced search option that helps you to sort the information as per your requirements. You can select the country, data type, data duration, and product. You can download your search query results in Excel or PDF format.
                  </div>
                </li>
                <li className="text-base flex gap-3 font-normal text-black text-justify p-3 mb-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-10 fill-emerald-300"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h6 className="text-lg text-black font-bold mb-2">
                      Importer Exporter Tree
                    </h6>
                    Find product sourcing, new buyers, and suppliers through our Importer and Exporter Tree. It helps you identify the 3 levels of the network of importers and exporters trade data. It helps you gain quality international business leads and expand your market at the international level.

                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-10 px-3 md:px-0">
            <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2">
              Some Exclusive Features of our Global Trade Database
            </h2>
            <div className="md:grid md:grid-cols-3 mt-5 gap-3">
            <div className="p-3 border rounded-xl mb-4 md:mb-0">
                <div className="p-3 bg-emerald-50 rounded-md">
                  <h6 className="text-lg text-black font-bold mb-2">
                    Analyze Your Product Demand
                  </h6>
                  <ul>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Real-time shipment records
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Global Products List
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Potential Buyers List
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Global Suppliers Data
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Most traded HS Codes
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-3 border rounded-xl mb-4 md:mb-0">
                <div className="p-3 bg-red-50 rounded-md">
                  <h6 className="text-lg text-black font-bold mb-2">
                    Empower Your Research With
                  </h6>
                  <ul>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Global Trends Reports
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Chapter Wise Reports
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Product Specific Reports
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Country Wise Data Records
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Importer Exporter Nexus
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-3 border rounded-xl mb-4 md:mb-0">
                <div className="p-3 bg-violet-100 rounded-md">
                  <h6 className="text-lg text-black font-bold mb-2">
                    Find Quality Business Leads With
                  </h6>
                  <ul>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Buyers Dashboard
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Exporters Directory
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Contact Information
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Global Company Profiles
                    </li>
                    <li className="flex items-center gap-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-5 fill-blue-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Importers Exporters Tree
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-10">
            <fieldset className="border-2 border-dashed p-3 rounded-xl border-blue-500">
              <legend className="font-bold text-lg pe-2">
                Our Plan Inclusions:
              </legend>
              <ul className="ps-6">
                <li className="list-disc">
                  Find the subscribed plans, specially crafted for the Canadian market, and boost your import-export business.

                </li>
                <li className="list-disc">
                  We have the most cost-effective plans with extensive features and more control. You can access, save, and download the import-export data reports of multiple countries by HS Code, product, price, quantity, importer, exporter, and port at any point in time.

                </li>
                <li className="list-disc">
                  Get affordable and customizable plans and pricing that meet your requirements.

                </li>
                <li className="list-disc">
                  The search and download limits may differ for every subscription plan.
                </li>
                <li className="list-disc">
                  We provide details on the most accurate and verified customs data of Canada based on the most trusted sources.

                </li>
                <li className="list-disc">
                  The above pricing plans are exclusive of{" "}
                  <strong>18% GST</strong>
                </li>
                <li className="list-disc">
                  To check our plans and pricing for other countries,{" "}
                  <a href="" className="text-blue-500 fw-bold">
                    click here
                  </a>{" "}
                </li>
              </ul>
            </fieldset>
          </div> */}
        </div>
      </div>
      {/* ---------consult our expert end-------------- */}

      <Clients />

      <FAQ />

      <Modal openModal={openModal} setOpenModal={setOpenModal} plan={selectedPlan} />





      {/*<Modal openModal={openModal} setOpenModal={setOpenModal} />*/}
    </>
  );
};

export default page;
