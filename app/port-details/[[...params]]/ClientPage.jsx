"use client";

import { useEffect, useState } from "react";
import Breadcrump from "../../common/Breadcrump";
import Link from "next/link";
//import { useSearchParams } from 'next/navigation';
import "flag-icons/css/flag-icons.min.css";

export default function ClientPage({ country, port }) {
    console.log("Country:", country);
    console.log("Port:", port);

    const lowerCountry = country?.replace(/\s+/g, "_").toLowerCase() || "india";
    const formattedPort = port?.replaceAll("-", " ").toUpperCase() || "NA";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(1);
    const [toggleData, settoggleData] = useState(true);
    const [toggleData2, settoggleData2] = useState(true);

    // const paramArray = params?.param || [];  // not searchParams
    // const country = paramArray[0]?.toLowerCase() || "india-blank";
    // const port = paramArray[1]?.toLowerCase() || "na-blank";

    //const lowerCountry = country.replace(" ", "_").toLowerCase();
    const final_country = lowerCountry;


    useEffect(() => {
        const getData = async () => {
            try {
                //alert(formattedPort);
                const res = await fetch("/port-details/api", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        source: lowerCountry.toLowerCase(),
                        type: "master",
                        country_name: lowerCountry.replaceAll('_', ' ').toLowerCase(),
                        port_name: formattedPort.replace(/-/g, " ").toLowerCase().trim(),
                    }),
                });

                //if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
                const result = await res.json();
                //alert(JSON.stringify(result?.data || "No data received"));

                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([{ error: true, message: error.message }]);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [lowerCountry, formattedPort]);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    //const formattedPort = port?.replaceAll("-", " ").toUpperCase() || "";

    const response_8 = data[8]?.data?.[0] || {};
    const shipment_received = response_8["Total Importer"] || 0;
    const shipment_sent = response_8["Total Exporter"] || 0;
    const buyers_count = response_8["distinct Importer"] || 0;
    const suppliers_count = response_8["distinct Exporter"] || 0;

    const hsCodeList_imp = data[0]?.data || [];
    const hsCodeList_exp = data[4]?.data || [];

    const countriesList_imp = data[1]?.data || [];
    const countriesList_exp = data[5]?.data || [];

    const supplierList_imp = data[3]?.data || [];
    const supplierList_exp = data[7]?.data || [];

    const buyerList_imp = data[2]?.data || [];
    const buyerList_exp = data[6]?.data || [];

    // const exportHSCodeList = hsCodeList.filter((item) => item["Top Export HS Code"]);
    // const importHSCodeList = hsCodeList.filter((item) => item["Top Import HS Code"]);

    // const exportcountriesList = countriesList.filter((item) => item["Top Export Country"]);
    // const importcountriesList = countriesList.filter((item) => item["Top Import Country"]);

    // const exportportList = portList.filter((item) => item["Top Export Port"]);
    // const importportList = portList.filter((item) => item["Top Import Port"]);

    // const exportbuyersList = buyerList.filter((item) => item["Top Buyers"]);
    // const importbuyersList = buyerList.filter((item) => item["Top Suppliers"]);

    // const total_export_value = parseFloat(valueCountData_exp["Total Value"] || 0).toFixed(2);
    // const total_export_shipment = valueCountData_exp["Total Export Shipment"] || 0;
    // const total_import_value = parseFloat(valueCountData_imp["Total Value"] || 0).toFixed(2);
    // const total_import_shipment = valueCountData_imp["Total Import Shipment"] || 0;

    // const total_buyers_count = buyers_count["Buyers"] || 0;
    // const total_suppliers_count = suppliers_count["Suppliers"] || 0;

    if (loading) return <div className="p-10 text-center text-xl">Loading...</div>;

    return (
        <>
            <p>
                {data.final_output};
            </p>
            <Breadcrump
                pageName={formattedPort.toUpperCase()}
                heading={formattedPort.toUpperCase()}
            />
            <section>
                <div className="container mx-auto px-4 md:px-0 py-10">
                    <div className="flex mt-5 gap-3 w-full overflow-x-auto md:overflow-x-visible pb-8 overview_scroll">
                        <div className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group">
                            <span className=" text-white text-sm whitespace-nowrap">
                                Summary
                            </span>
                        </div>
                        <a
                            href="/pricing"
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white  shadow-blue-500 flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Buyers
                            </span>
                        </a>
                        <a
                            href="/pricing"
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white  shadow-blue-500 flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Suppliers
                            </span>
                        </a>
                        <a
                            href="/pricing"
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white  shadow-blue-500 flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Shipments
                            </span>
                        </a>
                        <a
                            href="/pricing"
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white  shadow-blue-500 flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Products
                            </span>
                        </a>
                        <a
                            href="/pricing"
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white  shadow-blue-500 flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Contact
                            </span>
                        </a>
                    </div>

                    <div className="mt-8 p-4 shadow-lg rounded-xl">
                        <p className="text-base text-gray-700 mb-3">
                            As per {port} port data, around shipments were made during FY 2023-24.
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            There were around {buyers_count} active buyers to {port} port.
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            There were {suppliers_count} active suppliers from {port} port.
                        </p>
                    </div>
                </div>
            </section>

            <section className="dotbg">
                <div className="container mx-auto px-4 md:px-0 py-20">
                    <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2 text-center">
                        {port} Total Buyers and Suppliers Data
                    </h2>
                    <div className="grid grid-cols-0 gap-8 md:grid-cols-2">
                        <div>
                            <img src=".././images/Copy of GET-DETAILED-PORT-SHIPMENT-DATA.webp" className="w-full" alt="Total Buyers and Suppliers Data" title="Total Buyers and Suppliers Data" />
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-12 mt-8">
                                <div className="p-2 border mybg rounded-xl mb-3">
                                    <div className="p-3 bg-white rounded-lg text-center">
                                        <h6 className="text-xl md:text-4xl font-bold text-emerald-500">
                                            {shipment_sent}
                                        </h6>
                                        <p className="text-base text-gray-700 font-semibold">
                                            Shipment Sent
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 border mybg rounded-xl mb-3">
                                    <div className="p-3 bg-white rounded-lg text-center">
                                        <h6 className="text-xl md:text-4xl font-bold text-emerald-500">
                                            {buyers_count}
                                        </h6>
                                        <p className="text-base text-gray-700 font-semibold">
                                            Buyers
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 border mybg rounded-xl mb-3">
                                    <div className="p-3 bg-white rounded-lg text-center">
                                        <h6 className="text-xl md:text-4xl font-bold text-emerald-500">
                                            {shipment_received}
                                        </h6>
                                        <p className="text-base text-gray-700 font-semibold">
                                            Shipment Received
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 border mybg rounded-xl mb-3">
                                    <div className="p-3 bg-white rounded-lg text-center">
                                        <h6 className="text-xl md:text-4xl font-bold text-emerald-500">
                                            {suppliers_count}
                                        </h6>
                                        <p className="text-base text-gray-700 font-semibold">
                                            Suppliers
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 mybg overflow-x-hidden">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="">
                        <h2 className="mx-auto mb-2 text-center text-balance text-2xl font-bold leading-snug my-2">
                            {port} Market Intelligence Report
                        </h2>
                        <p className="text-base text-gray-600 text-center">
                            {port} Import and Export Data Shipment Analysis
                        </p>
                        <div
                            className={`flex mt-5 relative w-80 mx-auto py-2 items-center justify-center text-center rounded-full bg-white overflow-hidden shadow-inner shadow-gray-500/80 before:absolute before:h-full before:w-40 before:bg-blue-950 before:rounded-full before:top-0 before:z-10 before:transition-all before:left-0 before:ease-in ${toggleData ? "" : "before:translate-x-full"
                                }`}
                        >
                            <div
                                className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${toggleData ? "text-white" : ""
                                    }`}
                                onClick={() => settoggleData(!toggleData)}
                            >
                                Import
                            </div>
                            <div
                                className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${toggleData ? "" : "text-white"
                                    }`}
                                onClick={() => settoggleData(!toggleData)}
                            >
                                Export
                            </div>
                        </div>
                        {toggleData ? (
                            // ----------import data ---------------
                            <div className="md:grid md:grid-cols-4 mt-10 lefttoright gap-3">
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top HS Code
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {hsCodeList_imp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Import HS Code"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Countries
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {countriesList_imp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Import Country"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Buyer
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {buyerList_imp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Buyers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Suppliers
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {supplierList_imp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Buyers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                            </div>
                        ) : (
                            // ----------export data ---------------

                            <div className="md:grid md:grid-cols-4 mt-10 righttoleft gap-3">
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top HS Code
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {hsCodeList_exp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Export HS Code"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Countries
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {countriesList_exp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Export Country"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Buyer
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {buyerList_exp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Suppliers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Suppliers
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {supplierList_exp.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Suppliers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                    <a
                                        className="text-sm text-center block border-b-2 border-emerald-400 rounded-full p-2 hover:bg-emerald-400 hover:text-white transition-all"
                                        href="/pricing"
                                    >
                                        View All
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* ---------Intelligence System end-------------- */}

            <section className="py-20 overflow-x-hidden bg-blue-950">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div>
                            <img src=".././images/Copy of PORT-OF-MANILA-TOTAL-BUYER-AND-SUPPLIER.webp" className="w-full" alt="Get Detailed Port Shipment Data" title="Get Detailed Port Shipment Data"/>
                        </div>
                        <div>
                            <h2 className="mx-auto mb-2 text-4xl font-bold leading-snug my-2 text-white">
                                Get Detailed Port Shipment Data
                            </h2>
                            <p className="text-base text-white">
                                Find detailed {port} Port Shipment data. Discover top traded goods
                                by price, quantity, country, import export companies records
                                through our market intelligence reports..
                            </p>
                            <a
                                href="/contact"
                                className="rounded-xl px-5 py-3 mybtn font-semibold linerotate inline-flex mt-6 items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                            >
                                <span className=" text-white text-sm whitespace-nowrap">
                                    Contact US
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
            </section>

            <section className="py-20 overflow-x-hidden">
                <div className="container mx-auto px-4 md:px-0">
                    <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
                        Get Detailed {port} Port Shipment Data
                    </h2>
                    <div
                        className={`flex mt-5 relative w-80 mx-auto py-2 items-center justify-center text-center rounded-full bg-white overflow-hidden shadow-inner shadow-gray-500/80 before:absolute before:h-full before:w-40 before:bg-blue-950 before:rounded-full before:top-0 before:z-10 before:transition-all before:left-0 before:ease-in ${toggleData2 ? "" : "before:translate-x-full"
                            }`}
                    >
                        <div
                            className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${toggleData2 ? "text-white" : ""
                                }`}
                            onClick={() => settoggleData2(!toggleData2)}
                        >
                            Import
                        </div>
                        <div
                            className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${toggleData2 ? "" : "text-white"
                                }`}
                            onClick={() => settoggleData2(!toggleData2)}
                        >
                            Export
                        </div>
                    </div>

                    {toggleData2 ? (
                        <div className="relative overflow-x-auto sm:rounded-lg mt-10 lefttoright">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="border-b border-gray-200 bg-emerald-400">
                                        <th
                                            scope="row"
                                            className="p-2 font-medium text-white whitespace-nowrap"
                                        >
                                            HS Code
                                        </th>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Product Description
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Qty
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Origin
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Destination
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Importer
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Emporter
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="relative overflow-x-auto sm:rounded-lg mt-10 righttoleft">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr className="border-b border-gray-200 bg-emerald-400">
                                        <th
                                            scope="row"
                                            className="p-2 font-medium text-white whitespace-nowrap"
                                        >
                                            HS Code
                                        </th>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Product Description
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Qty
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Origin
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Destination
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Importer
                                        </td>
                                        <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                            Emporter
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-200">
                                        <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                            84529090
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW
                                            (03 QTY)
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            9.5
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center">
                                            Sri Lanka
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            China
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center ">
                                            *****
                                        </td>
                                        <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                            *****
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>

            

            {/* ----------------------CTA Start------------------------- */}
            <section className="py-5 bg-slate-100">
                <div className="container mx-auto px-4 md:px-0 ">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="order-2 md:order-1">
                            <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                                GET GLOBAL TRADE DATA ONLINE AT YOUR FINGERTIPS!
                            </h4>
                            <div className="flex mt-4">
                                <a
                                    href="/contact"
                                    className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                                >
                                    <span className=" text-white text-sm whitespace-nowrap">
                                        Schedule a Demo →
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="order-1 md:order-2 mb-6 md:mb-0">
                            <img src="/images/girlwithlaptop.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* ----------------------CTA End------------------------- */}
        </>
    );
}
