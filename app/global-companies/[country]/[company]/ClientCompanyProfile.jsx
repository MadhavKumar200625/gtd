"use client";

import { useEffect, useState } from "react";
import Breadcrump from "../../../common/Breadcrump";
import Link from "next/link";
import UnlockDataForm from "@/components/UnlockDataForm";

export default function ClientCompanyProfile({ country, company }) {
    const [showUnlockForm, setShowUnlockForm] = useState(false);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(1);
    const [toggleData, settoggleData] = useState(true);

    const lowerCountry = country.replace(" ", "_").toLowerCase();
    const final_country = lowerCountry;
    const company1 = decodeURIComponent(company);
    //const company = decodeURIComponent(company || "").trim();
    

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch("/global-companies/api", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        source: final_country,
                        type: "master",
                        country_name: lowerCountry,
                        company_name: company1.replace(/-/g, " ").toLowerCase().trim(),
                    }),
                });

                if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setData([{ error: true, message: error.message }]);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [company1, country]);



  

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const valueCountData_exp = data[0]?.data?.[0] || {};
    const valueCountData_imp = data[0]?.data?.[1] || {};
    const buyers_count = data[1]?.data?.[0] || {};
    const suppliers_count = data[1]?.data?.[1] || {};
    const hsCodeList = data[2]?.data || [];
    const countriesList = data[3]?.data || [];
    const portList = data[4]?.data || [];
    const buyerList = data[5]?.data || [];

    const exportHSCodeList = hsCodeList.filter((item) => item["Top Export HS Code"]);
    const importHSCodeList = hsCodeList.filter((item) => item["Top Import HS Code"]);

    const exportcountriesList = countriesList.filter((item) => item["Top Export Country"]);
    const importcountriesList = countriesList.filter((item) => item["Top Import Country"]);

    const exportportList = portList.filter((item) => item["Top Export Port"]);
    const importportList = portList.filter((item) => item["Top Import Port"]);

    const exportbuyersList = buyerList.filter((item) => item["Top Buyers"]);
    const importbuyersList = buyerList.filter((item) => item["Top Suppliers"]);

    const total_export_value = parseFloat(valueCountData_exp["Total Value"] || 0).toFixed(2);
    const total_export_shipment = valueCountData_exp["Total Export Shipment"] || 0;
    const total_import_value = parseFloat(valueCountData_imp["Total Value"] || 0).toFixed(2);
    const total_import_shipment = valueCountData_imp["Total Import Shipment"] || 0;

    const total_buyers_count = buyers_count["Buyers"] || 0;
    const total_suppliers_count = suppliers_count["Suppliers"] || 0;

    const hasNoShipments =
  total_export_shipment === 0 &&
  total_import_shipment === 0;

const hasNoProducts =
  exportHSCodeList.length === 0 &&
  importHSCodeList.length === 0;

const hasNoPartners =
  total_buyers_count === 0 &&
  total_suppliers_count === 0;

const isCompanyNotFound =
  hasNoShipments && hasNoProducts && hasNoPartners;

    if (loading) return <div className="p-10 text-center text-xl">Loading...</div>;
if (isCompanyNotFound) {
  return (
    <>
      <Breadcrump
        pageName={company1.replace(/-/g, " ").toUpperCase()}
        heading={company1.replace(/-/g, " ").toUpperCase()}
      />

      <section className="min-h-[70vh] flex items-center justify-center mybg">
        <div className="container mx-auto px-4 md:px-0">
          <div className="max-w-3xl mx-auto text-center bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-blue-100 relative overflow-hidden">

            {/* Decorative gradient glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-400/20 rounded-full blur-3xl"></div>

            {/* Icon */}
            <div className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-sky-500 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m0 3h.008M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Company Data Not Available
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We currently do not have trade shipment data for
              <span className="font-semibold text-gray-900">
                {" "}
                {company1.replace(/-/g, " ").toUpperCase()}
              </span>{" "}
              in{" "}
              <span className="font-semibold text-gray-900">
                {country.toUpperCase()}
              </span>.
            </p>

            <p className="text-base text-gray-500 mb-8">
              This may happen if the company has limited customs records,
              operates under a different registered name, or data is still
              being processed in our global trade database.
            </p>

            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowUnlockForm(true)}
                className="px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-900 to-sky-500 shadow-lg hover:shadow-xl transition"
              >
                Request Data Access
              </button>

              <a
                href="/pricing"
                className="px-8 py-3 rounded-xl font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition"
              >
                Explore Available Reports
              </a>
            </div>

            {/* Subtle footer */}
            <p className="mt-8 text-sm text-gray-400">
              GTD Solutions • Global Import Export Intelligence Platform
            </p>
          </div>
        </div>
      </section>

      <UnlockDataForm
        isOpen={showUnlockForm}
        onClose={() => setShowUnlockForm(false)}
        country={country}
      />
    </>
  );
}
    return (
        <>
            <Breadcrump
                pageName={company1.replace(/-/g, " ").toUpperCase()}
                heading={company1.replace(/-/g, " ").toUpperCase()}
            />
            <section>
                <div className="container mx-auto px-4 md:px-0 py-10">
                    <div className="flex mt-5 gap-3 overflow-x-auto md:overflow-x-hidden no-scrollbar   ">
                        <div
                            to=""
                            className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
                        >
                            <span className=" text-white text-sm whitespace-nowrap">
                                Summary
                            </span>
                        </div>
                       {["Buyers", "Suppliers", "Shipments", "Products", "Contact"].map((item) => (
    <div
        key={item}
        onClick={() => setShowUnlockForm(true)}
        className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-300 text-white shadow-blue-500 flex items-center group cursor-pointer"
    >
        <span className="text-white text-sm whitespace-nowrap">
            {item}
        </span>
    </div>
))}
                    </div>

                    <div className="mt-8 p-4 shadow-lg rounded-xl">
                        <p className="text-base text-gray-700 mb-3">
                            As per our global export database,{" "}
                            <b>{company1.replace(/-/g, " ").toUpperCase().trim()}</b> made total {total_export_shipment}
                            export shipments with a total export value of ${total_export_value} in
                            FY24-25
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            <b>Top Export Markets or Countries:</b>
                            {exportcountriesList.map((item, i) => (
                                <span key={i}>{item["Top Export Country"]} ({item["Total Value"]})  </span>
                            ))} .
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            <b>Major Export Product Category along with HS Code:</b>
                            {exportHSCodeList.map((item, i) => (
                                <span key={i}> Under HSN Code :{item["Top Export HS Code"]} Product Description - Others,  </span>
                            ))} .
                        </p>
                    </div>

                    <div className="mt-8 p-4 shadow-lg rounded-xl">
                        <p className="text-base text-gray-700 mb-3">
                            As per our global import database,{" "}
                            <b>{company1.replace(/-/g, " ").toUpperCase()}</b> made total {total_import_shipment}
                            import shipments with a total import value of ${total_import_value} in
                            FY23-24
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            <b>Top Import Markets or Countries:</b>
                            {importcountriesList.map((item, i) => (
                                <span key={i}>{item["Top Import Country"]} ({item["Total Value"]})  </span>
                            ))} .
                        </p>
                        <p className="text-base text-gray-700 mb-3">
                            <b>Major Import Product Category along with HS Code:</b>
                            {importHSCodeList.map((item, i) => (
                                <span key={i}> Under HSN Code :{item["Top Import HS Code"]} Product Description - Others,  </span>
                            ))} .
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 mt-8 gap-4 items-center justify-center">
                        <div className="col-span-3">
                            <div className="p-4 shadow-lg rounded-xl">
                                <p className="text-base text-gray-700 mb-3">
                                    GTD Solutions GTIS is the best cost-effective market research platform
                                    offering 200+ countries trade data reports by country,
                                    company, ports. The information is 100% verified and accurate
                                    based on direct customs authorities. Find emerging markets,
                                    top trends, demand, importers, exporters and monitor
                                    competition.
                                </p>
                            </div>
                        </div>
                        <div className="h-full">
                            <a
                                href="/pricing"
                                className="rounded-xl text-2xl px-5 h-full py-3 mybtn font-semibold linerotate flex flex-col items-center shadow-gray-800 group"
                            >
                                <div className=" text-white text-sm whitespace-nowrap">
                                    To Track all Shipments :
                                </div>
                                <div className=" text-white text-sm whitespace-nowrap">
                                    Schedule Demo
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dotbg">
                <div className="container mx-auto px-4 md:px-0 py-20">
                    <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2 text-center">
                        {company1.replace(/-/g, " ").toUpperCase()} Total Buyers Data
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                        <div className="p-2 border mybg rounded-xl mb-3">
                            <div className="p-3 bg-white rounded-lg text-center">
                                <h6 className="text-4xl font-bold text-emerald-500">{total_export_shipment}</h6>
                                <p className="text-base text-gray-700">Shipment Sent</p>
                            </div>
                        </div>
                        <div className="p-2 border mybg rounded-xl mb-3">
                            <div className="p-3 bg-white rounded-lg text-center">
                                <h6 className="text-4xl font-bold text-emerald-500">{total_buyers_count}</h6>
                                <p className="text-base text-gray-700">Buyers</p>
                            </div>
                        </div>
                        <div className="p-2 border mybg rounded-xl mb-3">
                            <div className="p-3 bg-white rounded-lg text-center">
                                <h6 className="text-4xl font-bold text-emerald-500">{total_import_shipment}</h6>
                                <p className="text-base text-gray-700">Shipment Received</p>
                            </div>
                        </div>
                        <div className="p-2 border mybg rounded-xl mb-3">
                            <div className="p-3 bg-white rounded-lg text-center">
                                <h6 className="text-4xl font-bold text-emerald-500">{total_suppliers_count}</h6>
                                <p className="text-base text-gray-700">Suppliers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 mybg overflow-x-hidden">
                <div className="container mx-auto px-4 md:px-0">
                    <div className="">
                        <h2 className="mx-auto mb-2 text-center text-balance text-2xl font-bold leading-snug my-2">
                            {company1.replace(/-/g, " ").toUpperCase()} Export Data Shipment
                            Analysis
                        </h2>
                        <p className="text-base text-gray-600 text-center">
                            {company1.replace(/-/g, " ").toUpperCase()} Market Intelligence
                            Report.
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
                                Import Data
                            </div>
                            <div
                                className={`text-lg w-40 font-semibold relative z-20 transition-colors ease-in cursor-pointer ${toggleData ? "" : "text-white"
                                    }`}
                                onClick={() => settoggleData(!toggleData)}
                            >
                                Export Data
                            </div>
                        </div>
                        {toggleData ? (
                            // ----------import data ---------------
                            <div className="md:grid md:grid-cols-4 mt-10 lefttoright gap-3">
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Imported HS Codes
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {importHSCodeList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Import HS Code"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Importing Countries
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {importcountriesList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Import Country"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Unloading Ports
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {importportList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Import Port"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Suppliers
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {importbuyersList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Suppliers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // ----------export data ---------------

                            <div className="md:grid md:grid-cols-4 mt-10 righttoleft gap-3">
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Exported HS Codes
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {exportHSCodeList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Export HS Code"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Exporting Countries
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {exportcountriesList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Export Country"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Loading Ports
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {exportportList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Export Port"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-white shadow-md border p-3 rounded-lg mb-5 md:mb-0">
                                    <div className="bg-gradient-to-r from-blue-950 to-sky-400 p-2 rounded-md">
                                        <div className="text-base font-semibold text-white">
                                            Top Buyers
                                        </div>
                                        <div className="text-sm font-normal text-white  ">
                                            Shipment Wise
                                        </div>
                                    </div>
                                    <div className="max-h-48 overflow-y-auto vertical-scroll mt-3 px-2">
                                        {exportbuyersList.map((item, i) => (
                                            <li key={i} className="flex justify-between items-center mb-3">
                                                <p className="text-sm text-gray-600">{item["Top Buyers"]}</p>
                                                <p className="text-sm text-gray-600 text-end">{item["Total Shipment"]}</p>
                                            </li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            {/* ---------Intelligence System end-------------- */}

            <section className="py-20 overflow-x-hidden">
                <div className="container mx-auto px-4 md:px-0">
                    <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
                        India Export Import Data Sample
                    </h2>
                    <p className="text-base text-gray-600 text-center">
                        Before buying our service, we provide detailed sample data to our
                        customers so that they can check the authenticity and accuracy of
                        data. You could request a sample India import and export data with
                        all data fields such as HS code, product name, description, country,
                        importer, exporter name, port shipments, etc. Also, you can
                        customize India trade statistics yearly, monthly or quarterly as per
                        your requirements.
                    </p>
                    <div className="relative overflow-x-auto sm:rounded-lg mt-10">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-lg text-center text-white uppercase bg-blue-950">
                                <tr>
                                    <th scope="col" className="px-6 py-3 border-b bg-white"></th>
                                    <th scope="col" className="px-6 py-3 border-b">
                                        Export Shipment
                                    </th>
                                    <th scope="col" className="px-6 py-3 border-b">
                                        Import Shipment
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-gray-200 bg-emerald-400">
                                    <th
                                        scope="row"
                                        className="p-2 font-medium text-white whitespace-nowrap"
                                    >
                                        Field Name
                                    </th>
                                    <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                        Detail
                                    </td>
                                    <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                                        Detail
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Date :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        1/19/2023
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        1/19/2023
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        HS Code :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        84529090
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        84529090
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Product Details
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03
                                        QTY)
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        LU 6015 ECCENTRIC WHEEL UP & DOWN MOVEMENT OF NEEDLE ROW (03
                                        QTY)
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Quantity :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">9.5</td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        9.5
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Quantity Unit :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">KGM</td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        KGM
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Value($) :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">1350</td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        1350
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Country of Origin :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        Sri Lanka
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        Sri Lanka
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Country of Destination :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">China</td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        China
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Importer :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        ********
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        ********
                                    </td>
                                </tr>
                                <tr className="border-b border-gray-200">
                                    <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                                        Exporter :
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        ********
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center bg-slate-100">
                                        ********
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ----------------------CTA Start------------------------- */}
            <section className="py-5 bg-slate-100">
                <div className="container mx-auto px-4 md:px-0 ">
                    <div className="grid md:grid-cols-2 items-center">
                        <div className="order-2 md:order-1">
                            <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                                Monitor Your Competitor Shipments
                            </h4>
                            <p className="text-base text-gray-600">
                                Get in-depth insights into shipment activities of top import
                                export companies globally through our impressive trade market
                                intelligance reports.
                            </p>
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

            {/* <FAQ faqs={faqs} /> */}
            <section className="mybg">
                <div className="container px-3 md:px-0 mx-auto py-20">
                    <div className="md:grid md:grid-cols-3 gap-4">
                        <div>
                            <h3 className="text-primary text-lg text-gray-400 font-medium">
                                Common Questions
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
                                        className={`text-lg font-bold text-black ${activeIndex === 1 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        What was the total export value of {company.replace(/-/g, " ").toUpperCase()} in 2024?
                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 1 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 1
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                        {company1.replace(/-/g, " ").toUpperCase()} total export value was around {total_export_value} U.S. Dollars in 2024
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(2)}
                                >
                                    <h5
                                        className={`text-lg font-bold text-black ${activeIndex === 2 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        How many export shipments did {company1.replace(/-/g, " ").toUpperCase()} make in 2024?
                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 2 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 2
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                        {company1.replace(/-/g, " ").toUpperCase()} total export shipments were around {total_export_shipment} shipments in 2024.
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(3)}
                                >
                                    <h5
                                        className={`text-lg font-bold text-black ${activeIndex === 3 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        What are the top exported HS Codes by {company1.replace(/-/g, " ").toUpperCase()} in 2024?
                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 3 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 3
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                        Under HSN Code :
                                        {exportHSCodeList.map((item, i) => (
                                            <span key={i}> Under HSN Code :{item["Top Export HS Code"]} Product Description - Others,  </span>
                                        ))}
                                        were the top exported HS Codes by {company1.replace(/-/g, " ").toUpperCase()} in 2024.
                                        {company1.replace(/-/g, " ").toUpperCase()} total export value was around {total_export_value} U.S. Dollars in 2024
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(4)}
                                >
                                    <h5
                                        className={`text-lg font-bold text-black ${activeIndex === 4 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        Which were {company1.replace(/-/g, " ").toUpperCase()}’s major export markets or countries in 2024?
                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 4 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 4
                                        ? "max-h-40 opacity-100 mt-3"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                        In 2024, the top export markets of {company1.replace(/-/g, " ").toUpperCase()} were
                                        {exportcountriesList.map((item, i) => (
                                            <span key={i}>{item["Top Export Country"]} ({item["Total Value"]})  </span>
                                        ))} .
                                        {company1.replace(/-/g, " ").toUpperCase()} total export value was around {total_export_value} U.S. Dollars in 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQ ends */}
            <section className="py-10">
                <div className="container mx-auto px-4 md:px-0 ">
                    <div
                        style={{ placeContent: "space-between" }}
                        className="rounded-xl text-2xl px-5 h-full py-6 font-semibold linerotate md:flex justify-between w-full shadow-gray-800"
                    >
                        <div className=" text-white text-lg whitespace-nowrap">
                            File a Request to Remove this Page
                        </div>
                        <a
                            href={`/companyremovalform/${country.toLowerCase()}/${company1.toLowerCase().replace(/ /g, "-")}`}
                            className=" text-white text-sm whitespace-nowrap flex gap-2 mt-3 md:mt-0"
                        >
                            Request Now
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <UnlockDataForm
                    isOpen={showUnlockForm}
                    onClose={() => setShowUnlockForm(false)}
                    country={country}
                  />
        </>
    );
}
