"use client";

import Link from "next/link";
import Breadcrump from "../common/Breadcrump";
import FAQ from "../common/FAQ_api";
import Testomonials from "../common/Testomonials";

const faqs = [
  {
    question: "What is an API?",
    answer:
      "API stands for the Application Programming Interface. It acts as an interface between two applications. Through an API, you can integrate new applications with existing software systems.",
  },
  {
    question: "Which API services do you provide?",
    answer:
      "We offer a wide range of API services that includes RESTful API, FIX API, Trade API, Open API, Cloud API, Third-party API, API Maintenance & Integration services.",
  },
  {
    question: "What is a Trade API?",
    answer:
      "A Trade API is a quality product developed by Global Trade Data Service developer team. It is the best application to streamline trade information and make the most out of the data. You can make various requests like gathering country wise import-export data, importer-exporter wise data, search by specific time duration, etc. Through this API, company’s can make their own market search portal and improve their company’s productivity.",
  },
  {
    question: "What are the benefits of using a Trade API?",
    answer:
      "There are various benefits of using our Trade API such as improved market research, global market insights, instant access to over 200+ countries import export records, global buyers suppliers shipment records, quantity, price evaluation etc.",
  },
  {
    question: "How to get started with your API?",
    answer:
      "We provide our customers with detailed API documentation. Through which you get a brief overview of our API and easy steps to integrate it into your application. Also, we provide complete support to our clients throughout the process.",
  },
  {
    question: "What is the cost of developing an API from Global Trade Data Service?",
    answer:
      "Global Trade Data Service provides the most cost-effective API development and integration services. Our team of dedicated developers, quality testers are fully experienced in delivering the most robust and prompt API project delivery.",
  },
  {
    question: "How to reach out to your project manager for any inquiry?",
    answer:
      "You can easily connect to one of our project managers to share your requirement at support@gtdservice.com or call at +91-9625812393. We are 24*7 available for your assistance.",
  },
];

const page = () => {
  return (
    <>
      <Breadcrump
        pageName="api development and integration company"
        heading="Best API Development Services"
        peragraph="Our API development services seamless integration and fast, secure, and highly scalable API development and integration respond to build more innovative applications with our state-of-the-art API development."
      />

      {/* ---------GTIS start--------------  */}

      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
            <div className="order-2 lg:order-1">
              <h4 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
                Overview
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-2xl md:text-4xl font-bold leading-tight tracking-tighter">
                Custom API Development & Integration
              </h3>
              <p className="text-base text-gray-700 mb-3">
              Our custom API development and integration services for import-export businesses streamline the exchange of data between global markets, suppliers, and logistics systems. We create tailored API that enable the seamless tracking of shipment data, real-time inventory updates, and efficient management of international import-export trade documentation. With robust integration, your business can enhance operational efficiency, reduce errors, and ensure smooth communication across supply chains. Let GTD Services help you optimize your import-export processes with secure and scalable API solutions.
              </p>
              <div className="flex">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">
                    Consult Our Expert
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
            <div className="order-1 lg:order-2 mb-4 md:mb-0">
              <div className="relative mx-auto border-gray-300 bg-gray-border-gray-300 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                <div className="rounded-md overflow-hidden h-[156px] md:h-[278px] bg-white">
                  <img src="/images/API-1.webp" className="h-[156px] md:h-[278px] w-full rounded-lg" alt="Custom api development" /> 
                  {/* <iframe
                    allowFullScreen
                    className="h-[156px] md:h-[278px] w-full rounded-lg"
                    src="//www.youtube.com/embed/https://www.youtube.com/embed/izowvTuddbk?autoplay=1&amp;mute=1&amp;playlist=izowvTuddbk&amp;loop=1&amp;modestbranding=1"
                  ></iframe> */}
                </div>
              </div>
              <div className="relative mx-auto bg-gray-500 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------GTIS end--------------  */}

      {/* ---------Benefits Start--------------  */}
      <section className="mybg lg:py-20 py-10 relative">
        <div className="container mx-auto px-5 md:px-0">
          <div className="md:grid md:grid-cols-2 mt-5 gap-8">
            <div className="">
              <div className="sticky top-10 lg:pt-16 mb-5 md:mb-0">
                <h3 className="mx-auto mb-2 text-balance text-3xl md:text-4xl font-bold leading-snug my-2">
                  Best API Solutions
                </h3>
                <p className="text-base text-gray-700">
                Being the best API development agency, we provide reliable and client-centric API solutions that help you build more innovative products. Choose from our wide range of API development services.
                </p>
                <img
                  src="/images/API-2.webp"
                  className="w-2/3 mx-auto mt-16"
                  alt="api solutions"
                />
              </div>
            </div>
            <div className="">
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/FIXAPI.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1">
                    RESTful API
                  </h5>
                  <p className="text-base text-gray-600">
                  A RESTful API, full form Representational State Transfer, accesses seamless communication between systems using standard HTTP structures like GET, POST, PUT, and DELETE. It is lightweight, scalable, and easy to integrate with web services and applications. REST API, or RESTful API, is the best way to build expert trading platforms.
                  </p>
                </div>
              </div>
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/RESTfulAPI.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1 uppercase">
                    FIX API
                  </h5>
                  <p className="text-base text-gray-600">
                  A FIX API (Financial Information Exchange) is a messaging standard for real-time electronic communication in the financial industry. API helps the company to communicate between customer traders and brokers, liquidity providers, and investment funds. We are information experts in FIX API solutions that assist companies in developing high-speed trading systems to access real-time international market insights.
                  </p>
                </div>
              </div>
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/TradeAPIs.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1 uppercase">
                    Trade APIs
                  </h5>
                  <p className="text-base text-gray-600">
                  Our trade API company can create an expert market intelligence platform that helps them achieve their international business goals. In trade API, you get full import-export data{" "}
                  {" "}
                    <a
                      href="/import-export-data-country-wise"
                      className="text-blue-600"
                    >
                      import export data
                    </a>{" "}
                   providers. They provide access to crucial trading features such as order placement, account management, and price feeds. Trade APIs are highly secure, scalable, and designed to handle high-frequency trading. They empower traders to automate strategies, streamline operations, and gain access to global markets with minimal latency.
                  
                  </p>
                </div>
              </div>
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/CloudAPISolutions.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1 uppercase">
                    Cloud API Solutions
                  </h5>
                  <p className="text-base text-gray-600">
                  Global Trade Data is the best cloud API service provider company, offering secure and seamless cloud API solutions. We have a dedicated team of developers with years of experience working on PaaS, SaaS, and IaaS APIs. Our latest reasonable cloud API solutions from our experts and ensure a seamless user experience across all portals and devices.
                  </p>
                </div>
              </div>
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/ThirdPartyAPI.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1 uppercase">
                    Third Party API Integration
                  </h5>
                  <p className="text-base text-gray-600">
                  We also offer open API solutions to clients that help them easily make third-party integrations such as Zulu, Chartlist, Tradency, and Auto. We experts provide full support till the successful integration of the API, ensuring high performance and security.
                  </p>
                </div>
              </div>
              <div className="myshadow p-3 rounded-xl mb-5">
                <div className="p-3 bg-white rounded-lg">
                  <img
                    src="/images/icons/Support.svg"
                    className="size-20 mb-3"
                    alt=""
                  />
                  <h5 className="text-xl font-bold text-black mb-1 uppercase">
                    API Maintenance & Support
                  </h5>
                  <p className="text-base text-gray-600">
                  Clients are our foremost priority. We do not rest until the client is satisfied. We provide thorough API maintenance and support for smooth and secure API operations by developing robust API architectures with secure API keys, RBAC modules, user and IP controls, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Benefits end--------------  */}

      {/* ---------Advantages start--------------  */}
      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="grid md:grid-cols-3">
            <div>
              <h3 className="text-primary text-lg text-gray-400 font-medium tracking-tight">
                Advantages
              </h3>
              <h2 className="mx-auto mb-2 text-balance text-2xl md:text-4xl mt-2 font-bold leading-tight">
                Advantages of Executing your Algo Trading through Flattrade API
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="md:grid md:grid-cols-2 gap-4">
                <div className="flex gap-3 mb-4 bg-emerald-50 p-3 rounded-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">
                      User Friendly
                    </h4>
                    <p className="text-base text-gray-600">
                    Our developers are experts at creating simple and easy-to-use API that assist you in building an impactful website for market research.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4 bg-emerald-50 p-3 rounded-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">
                      Fast & Secure
                    </h4>
                    <p className="text-base text-gray-600">
                    Get really fast and seamless API solutions with some security. We have information on proper API keys or bearer tokens to block unwanted requests.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4 bg-emerald-50 p-3 rounded-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">
                      Testing Environment
                    </h4>
                    <p className="text-base text-gray-600">
                    Our team of quality assurance and testing engineers applies advanced API testing websites and practices to ensure smooth functionality and performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4 bg-emerald-50 p-3 rounded-xl">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">
                      Documentation
                    </h4>
                    <p className="text-base text-gray-600">
                    We inform our clients with detailed API documentation (user manual) that helps developers easily understand the functionality and integrate applications.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 mb-4 bg-emerald-50 p-3 rounded-xl col-span-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-10 stroke-emerald-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-1">
                      Competitive Pricing
                    </h4>
                    <p className="text-base text-gray-600">
                    With years of expertise in delivering successful API solutions, we provide high-quality API solutions at the best price and with expert support throughout.

                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Advantages end--------------  */}

      {/* ---------process Start--------------  */}

      <section className="pt-20 pb-10 relative overflow-hidden bg-blue-950">
        <div className="container px-3 md:px-0 mx-auto">
          <h4 className="text-primary text-lg text-emerald-400 font-medium text-center">
            Process
          </h4>
          <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug text-center my-2 text-white">
            How to get started?
          </h3>
          <div className="md:grid grid-cols-3 mt-10 gap-5">
            <div className="group">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-10 h-10 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400 flex justify-center items-center m-0">
                  01
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-white font-bold">API Development</h3>
              <p className="mt-3 text-gray-300">
              Our developers will create really fast APIs with secure connections, along with an API key and documentation to understand the functionality. It focuses on building a secure, scalable, and efficient API tailored to meet specific international business needs.

              </p>
            </div>

            <div className="group md:mt-10">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-10 h-10 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400 flex justify-center items-center m-0">
                  02
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-white font-bold">API integration</h3>
              <p className="mt-3 text-gray-300">
              API integration connects various software systems, enabling seamless data exchange and functionality across platforms. Then after reviewing the API documentation, you will make API calls and synchronize them into your applications.

              </p>
            </div>

            <div className="group md:mt-20">
              <div className="flex items-center relative z-10 justify-between before:w-full before:h-[1px] before:bg-gray-300 before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 before:z-0 before:group-hover:bg-emerald-400">
                <div className="w-10 h-10 rounded-full bg-gray-300 relative z-10 group-hover:bg-emerald-400 flex justify-center items-center m-0">
                  03
                </div>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border border-gray-300 relative z-10 group-hover:bg-emerald-400 group-hover:border-emerald-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6 fill-emerald-400 group-hover:fill-gray-50"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl text-white font-bold">
                Execute strategies
              </h3>
              <p className="mt-3 text-gray-300">
              Once you are done with API integration, the next step is to execute strategies to create an exceptional user interface. It requires clear communication, resource allocation, and tracking progress to ensure alignment with the overall vision.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------process end--------------  */}

      {/* ---------Industry start--------------  */}

      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-primary text-lg text-gray-400 font-medium">
                Industry
              </h3>
              <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
                Explore More Industries
              </h2>
            </div>
            <div>
              <a
                href="/industries-covered"
                className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
              >
                <span className=" text-white text-sm">Explore More</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-8 md:gap-6">
            <div className="flex group flex-col gap-4">
              <img
                src="/images/exporters_md_banner.webp"
                className="w-100 rounded-xl"
                alt="Exporters"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                EXPORTER
              </span>
              <a
                href="/exporters"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Enhance Your Sales Potential with Our Global Exporters Database
              </a>
              <a
                href="/exporters"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex group flex-col gap-4">
              <img
                src="/images/importer_md_banner.webp"
                className="w-100 rounded-xl"
                alt="Importers"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                IMPORTER
              </span>
              <a
                href="/importers"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Leading Trade Intelligence Platform for Global Importers
              </a>
              <a
                href="/importers"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="flex group flex-col gap-4">
              <img
                src="/images/automative_md_banner.webp"
                className="w-100 rounded-xl"
                alt="Automotive"
              />
              <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                Automotive
              </span>
              <a
                href="/automative"
                className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
              >
                Identify the Current Market Trends & Demands in the Automotive
              </a>
              <a
                href="/automative"
                className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Industry end-------------- * */}
      <FAQ faqs={faqs} />
      <Testomonials />
    </>
  );
};

export default page;
