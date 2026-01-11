"use client";
import React, { useState } from "react";
import Link from "next/link";

const FAQ_api = () => {
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
                                        What is an API?
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
                                        API refers to the Application Programming Interface. It serves as an intermediary between two programs. You can interface new apps with pre-existing software systems using an API.

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
                                        className={`text-lg font-bold text-black ${activeIndex === 2 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        Which API services do GTD Services provide?

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
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                    RESTful, FIX, Trade, Open, Cloud, Third-party, and API Maintenance & Integration services are just a few of the many API services GTD Services provide.
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
                                        className={`text-lg font-bold text-black ${activeIndex === 3 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        What is a Trade API?
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
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                    The development team at GTD Services produces high-quality Trade APIs. It is the greatest tool for optimising trade data and maximising its value. Requests can be made to gather import-export data by country, importer-exporter wise data, and more. Businesses can create their own market search site and increase efficiency with this API.
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
                                        className={`text-lg font-bold text-black ${activeIndex === 4 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        What are the advantages of using a trade API?

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
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                    Utilising GTD Services Trade API offers several advantages, including enhanced market research, worldwide market insights, immediate access to import and export data from more than 200 countries, global buyer supplier cargo data, quantity, price evaluation, and more.

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
                                        className={`text-lg font-bold text-black ${activeIndex === 5 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        How to get started with your API?

                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 5 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 5
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                    We offer thorough API documentation to our clients.  This provides an informative overview of our API and simple instructions for incorporating it into your application.  Additionally, we offer our clients total support during the procedure.

                                    </p>
                                </div>
                            </div>
                            {/* --------------Question Start---------------------- */}
                            <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(6)}
                                >
                                    <h5
                                        className={`text-lg font-bold text-black ${activeIndex === 6 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        How much does it cost to create an API using GTD Services?

                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 6 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 6
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="overflow-hidden text-base text-gray-600">
                                    GTD Services offers the most affordable API development and integration services. Our committed development and quality testing team has extensive experience in delivering the most reliable and timely API project delivery.

                                    </p>
                                </div>
                            </div>
                            {/* --------------Question Start---------------------- */}
                            <div className="p-4 mb-3 bg-slate-50 shadow-md rounded-xl overflow-hidden text-base text-gray-600">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => handleToggle(7)}
                                >
                                    <h5
                                        className={`text-lg font-bold text-black ${activeIndex === 7 ? "text-blue-600" : ""
                                            }`}
                                    >
                                        How can you contact your project manager with any inquiry?

                                    </h5>
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className={`size-4 transform transition-transform duration-300 ${activeIndex === 7 ? "rotate-45 stroke-blue-600" : ""
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
                                    className={`transition-all duration-300 ease-in-out ${activeIndex === 7
                                            ? "min-h-fit opacity-100 mt-3"
                                            : "max-h-0 opacity-0"
                                        }`}
                                >
                                   <p className="overflow-hidden text-base text-gray-600">
                                   You can simply contact one of our project managers by calling "mobile number" or sending an email to support@gtdservice.com with your requirements. We are here to help you 24/7.
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

export default FAQ_api;
