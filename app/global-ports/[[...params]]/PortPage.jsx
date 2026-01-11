"use client";

import { useEffect, useState } from "react";
import { portShipmentData } from './data';
import Link from "next/link";
import React from "react";
import CTA from "../../common/CTA";
import "flag-icons/css/flag-icons.min.css";

const page = () => {
  return (
    // <div className="max-w-4xl mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold mb-6 text-center">Global Port-Level Shipment Data</h1>
    //   <div className="space-y-6">
    //     {portShipmentData.map(({ country, ports }) => (
    //       <div key={country} className="border border-gray-200 rounded-2xl p-4 shadow-md bg-white">
    //         <h2 className="text-xl font-semibold mb-3 text-blue-700">{country}</h2>
    //         <ul className="list-disc list-inside text-gray-700">
    //           {ports.map((port, idx) => (
    //             <li key={idx}>{port}</li>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <>
    <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
      <div className="absolute -top-2/4 w-full h-screen z-0 opacity-10">
        <img src="./images/ports.webp" className="w-full" alt="" />
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
                  Global Ports Data
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
          Global Ports Data
        </h1>
        <p className="mb-8 text-justify text-base font-normal text-dark">
          Explore the global supply chain networks through our global ports
          data reports. Get access to over 200+ countries port data. Find the
          total import export shipment volume, traded goods, value, quantity,
          import and export companies through our container ports data.
          Improve your market research with proper planning, coordination and
          scheduling of shipment activities. Search global ports data by
          country through our port database. Also, you download the shipment
          data of the world sea port list in excel/pdf.
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

    {/* -----------------------------ports---------------------------- */}

    <section>
      <div className="container px-3 md:px-0 mx-auto py-20">
        <div className="text-center">
          <h3 className="text-primary text-center text-sm md:text-lg text-gray-400 font-medium">
            Over 200+ Countries Ports Data
          </h3>
          <h3 className="mx-auto mb-2 md:text-balance text-2xl md:text-4xl font-bold">
            Search Global Ports Data By Country
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          {portShipmentData.map((item, index) => (
            <div
              key={index}
              className="p-2 border mybg rounded-xl mb-3 hover:shadow-lg"
            >
              <div className="p-3 bg-white rounded-lg">
                <a
                  href= {`/ports-data/${item.country.replaceAll(' ', '_').toLowerCase()}`}
                  className={`card group relative border-b pb-2 flex items-center gap-4 text-gray-800 font-semibold`}
                >
                  <div className="block">
                    <span
                      className={`fi fi-${item.code} block text-3xl`}
                    ></span>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold uppercase group-hover:text-indigo-700 ease-linear">
                      {item.country}
                    </h4>
                  </div>
                </a>
                <ul>
                  {item.ports.map((item2, index2) => (
                    <li key={index2}>
                      <a
                        href={`/port-details/${item.country.replaceAll(' ', '_').toLowerCase()}/${item2.replaceAll(' ', '-').toLowerCase()}`}
                        className="hover:text-blue-500 my-2 block text-sm"
                      >
                        {item2}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </>
  );
}
export default page;