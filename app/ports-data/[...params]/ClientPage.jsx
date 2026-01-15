"use client";

import { useParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";
import { useEffect, useState } from "react";
import { country_all, country_cus } from '../../../data/countries';

export default function ClientPage({ Country }) {

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const [dropActive, setDropActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true); // loading state

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const params = useParams();
    const router = useRouter();
    const pathname = usePathname();

    // Extract only the first 3 params we need (country, letter, page)
    const paramArray = params?.params?.slice(0, 1) || [];
    const pms = paramArray[0]?.toLowerCase() || "india";
    const parts = pms.split('-');
    const urlCountry = parts[0] ?? "india";
    const urlPage = parts[1] ?? '1';
    //const Page = [1] ?? '1';





    const ddlparam = "";
    const [selectedCountry1, setSelectedCountry1] = useState(urlCountry);
    const [currentPage, setCurrentPage] = useState(urlPage);


    const [data, setData] = useState([]);
    const [totalCount, setPage] = useState();
    const lowerCountry = selectedCountry1.replaceAll(' ', '_').toLowerCase();

    const isInAll = country_all.includes(lowerCountry);
    const isInCustoms = country_cus.includes(lowerCountry);

    const final_country = isInCustoms ? lowerCountry : 'all';

    const getData = async () => {

        const res = await fetch('../../../ports-data/api', {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                source: final_country.replaceAll(' ', '_').toLowerCase(),
                type: "master",
                country_name: selectedCountry1.replaceAll('_', ' ').toLowerCase(),
                from_: (currentPage - 1) * 8 + 1,
                to: 8
            }),
        });

        const result = await res.json();
        //alert(JSON.stringify(data));
        
        const portCount = data.data?.[0]?.["Total Count"] || 0;
        
        //
        const d = result?.data?.ports || [];

        const filteredData = result["data"].filter(port =>
            port?.Port &&
            port.Port.trim().toLowerCase() !== "na" &&
            port.Port.trim().toLowerCase() !== "n/a" &&
            port.Port.trim() !== ""
          );
              //alert(JSON.stringify(filteredData));
        
        //
        
        setData(filteredData);
        //setData(result);
        setPage(portCount);
        //alert(portCount)
        //setPage(companyCount);
        //alert(JSON.stringify(result[0]));
        setLoading(false);
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
            <section className="flex pt-10 items-center overflow-hidden relative bg-gradient-to-br from-white via-emerald-100 to-blue-100 bg-gradient-45 bg-opacity-50">
                <div className="absolute -top-2/4 w-full h-screen z-0 opacity-10">
                    <img src=".././images/ports.webp" className="w-full" alt="" />
                </div>
                <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
                    <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
                        Port Data of {selectedCountry1.toUpperCase()}
                    </h1>
                    <p className="mb-8 text-justify text-base font-normal text-dark">
                        Get detailed insights into the top {selectedCountry1.toUpperCase()} sea ports with
                        verified port data {selectedCountry1.toUpperCase()}. Find a comprehensive report on {' '}
                        {selectedCountry1.toUpperCase()}'s top seaports shipment volumes, top traded goods, country
                        of origin, destination, districts, buyers and suppliers through {' '}
                        {selectedCountry1.toUpperCase()} ports container data. Gain the className insights on
                        shipment activities across {selectedCountry1.toUpperCase()} sea ports. Access the export
                        import port data {selectedCountry1.toUpperCase()} year wise with GTD Service Intelligence
                        Platform.
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

            <section>
                <div className="container px-3 md:px-0 mx-auto py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                        <div>
                            <h3 className="text-primary text-sm md:text-lg text-emerald-400 font-medium mb-2">
                                Search Port Data of {selectedCountry1.toUpperCase()} Sea Ports
                            </h3>
                            <h3 className="mx-auto mb-2 text-2xl md:text-4xl font-bold">
                                Export Import Port Data {selectedCountry1.toUpperCase()}
                            </h3>
                        </div>

                        {/* <div className="flex items-center justify-end gap-5">
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 mb-3 md:mb-0 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-2/4 px-2.5 py-3.5"
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
                <option value="H">H</option>
                <option value="I">I</option>
                <option value="J">J</option>
                <option value="K">K</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="N">N</option>
                <option value="O">O</option>
                <option value="P">P</option>
                <option value="Q">Q</option>
                <option value="R">R</option>
                <option value="S">S</option>
                <option value="T">T</option>
                <option value="U">U</option>
                <option value="V">V</option>
                <option value="W">W</option>
                <option value="X">X</option>
                <option value="Y">Y</option>
                <option value="Z">Z</option>
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
            </div> */}
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 p-4 rounded-2xl bg-slate-100">
                        {data?.map((port, index) => (
                                
                            <div key={index} id={`div1_${index}`} className="p-2 border mybg rounded-xl mb-3 hover:shadow-lg">
                                <div className="p-3 bg-white rounded-lg">
                                    <a
                                        id={`lnk1_${index}`}
                                        href={`/port-details/${selectedCountry1.replaceAll(' ', '_').toLowerCase()}/${port.Port.replaceAll(' ', '-').toLowerCase()}`}
                                        className={`card group relative border-b pb-2 flex items-center gap-4 text-gray-800 font-semibold`}
                                    >
                                        <div id={`div3_${index}`} className="block">
                                            <img
                                                src="./images/icons/anchor-icon.svg"
                                                className="w-6"
                                                alt=""
                                            />
                                        </div>
                                        <div id={`div4_${index}`}>
                                            <h4 className="text-base font-semibold uppercase group-hover:text-indigo-700 ease-linear">
                                                {port.Port}
                                            </h4>
                                        </div>

                                    </a>
                                    <div id={`div2_${index}`} className="relative overflow-x-auto">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                            <tbody>
                                                <tr id={`tr4_${index}`} className="bg-white border-b border-gray-200">
                                                    <th
                                                        scope="row"
                                                        className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                                                    >
                                                        Buyers
                                                    </th>
                                                    <td className="px-0 py-4 text-end">{port.importer}</td>
                                                </tr>
                                                <tr id={`tr3_${index}`} className="bg-white border-b border-gray-200">
                                                    <th
                                                        scope="row"
                                                        className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                                                    >
                                                        Supplier
                                                    </th>
                                                    <td className="px-0 py-4 text-end">{port.exporter}</td>
                                                </tr>
                                                <tr id={`tr2_${index}`} className="bg-white border-b border-gray-200">
                                                    <th
                                                        scope="row"
                                                        className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                                                    >
                                                        Import Shipment
                                                    </th>
                                                    <td className="px-0 py-4 text-end">{port.im_total_shipment}</td>
                                                </tr>
                                                <tr id={`tr1_${index}`} className="bg-white border-b border-gray-200">
                                                    <th
                                                        scope="row"
                                                        className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray"
                                                    >
                                                        Export Shipment
                                                    </th>
                                                    <td className="px-0 py-4 text-end">{port.ex_total_shipment}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>


                                </div>
                            </div>

                        ))}

                    </div>
                    {/* <!-- Pagination --> */}
                    <div className="flex items-center gap-x-1">

                        {/* Previous */}
                        <a
                            href={`${`/ports-data/${selectedCountry1.replaceAll(' ', '_').toLowerCase()}`}-${page > 1 ? page - 1 : 1}`}
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                        >
                            Previous
                        </a>

                        {/* Page numbers */}
                        {pages.map((p) => (
                            <a
                                key={p}
                                href={`${`/ports-data/${selectedCountry1.replaceAll(' ', '_').toLowerCase()}`}-${p}`}
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
                        {Math.floor(totalCount / 8) > visiblePages && (
                            <span className="text-gray-400 px-2">...</span>
                        )}

                        {/* Next */}
                        <a
                            href={`${`/ports-data/${selectedCountry1.replaceAll(' ', '_').toLowerCase()}`}-${page < totalCount ? page + 1 : Math.floor(totalCount / 8)}`}
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                        >
                            Next
                        </a>

                        {/* Last */}
                        <a
                            href={`${`/ports-data/${selectedCountry1.replaceAll(' ', '_').toLowerCase()}`}-${Math.floor(totalCount / 8)}`}
                            className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg"
                        >
                            Last
                        </a>
                    </div>

                    {/* <!-- End Pagination --> */}
                </div>
            </section >
        </>
    );
};

