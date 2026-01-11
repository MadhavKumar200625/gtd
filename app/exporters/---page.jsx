"use client";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const page = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-blue-100 via-indigo-100 to-yellow-100 bg-gradient-45 bg-opacity-50">
        <div className="absolute top-0 w-full h-screen z-0 opacity-20">
          <img src="/images/dots.png" className="w-full" alt="" />
        </div>
        <div className="py-8 mx-auto container px-3 lg:py-15 z-10 relative">
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
              <li>
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
                  <a
                    href="/industries-covered"
                    className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2"
                  >
                    Solutions
                  </a>
                </div>
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
                    Exporters
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-2xl font-bold tracking-normal leading-snug text-dark md:text-3xl mt-6 lg:text-4xl">
            Exporters
            <p className="text-base text-gray-700 mb-3">
            Exporting is a critical element of international import-export trade records, enabling companies to access foreign markets, diversify revenue, and drive growth. But the intricacies of working with foreign markets complying with trade laws and accessing good partners can be overwhelming for exporters.
          GTD Service offers a sophisticated platform that empowers exporters with precise, up-to-the-minute information on foreign trade activity.

            </p>
          </h1>
        </div>
      </section>

      {/* ----------------about Start----------------------  */}

      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="order-2 lg:order-1 col-span-2">
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug tracking-normal">
              Maximize Your Sales Potential with Our Global Exporters Database
              </h3>
              <p className="text-base text-gray-700 mb-3">
              With their extensive database of confirmed export and shipment records, companies can derive useful information about the export behavior of firms worldwide. From determining potential markets and competitors to discovering the most suitable importers and understanding global shipping patterns, Global Trade Data Service is the best for companies seeking to succeed in the cutthroat business of Global trade.

              </p>
              <div className="flex mt-4">
                <a
                  href="/pricing"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get Insights Report
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
            <div className="order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden  bg-white">
                <img
                  src="/images/Exporters1.webp"
                  className="w-full rounded-lg"
                  alt="Importers"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------about End----------------------  */}

      <section className="md:py-20 py-10 container mx-auto px-2">
        <h3 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug tracking-normal">
        Generate more ROI for your business with our Global Buyers Directory.
        </h3>
        <div className="grid md:grid-cols-2 gap-4 justify-center mt-8">
          <div className="bg-pink-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Find leading buyers
            </h4>
            <p className="text-base font-normal mt-3">
            Take your business beyond borders. Identify real buyers for your product. With our database of global companies, you might be able to reach more customers in the international market. View the portfolios of leading import companies by country and product.
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">Track Shipments</h4>
            <p className="text-base font-normal mt-3">
            We offer detailed global importer shipment reports that enable you to scan their purchasing patterns, detect market demand, and assess pricing for your product. Through our experienced market intelligence reports, you can make more profitable business decisions.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Know your competitors
            </h4>
            <p className="text-base font-normal mt-3">
            Identify your competitors and how they are doing better globally. Identify how they are outperforming based on their promotional and product strategies. Design a better-quality product based on complete competitor analysis and market your firm with a better-targeted marketing policy.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="text-xl font-bold text-black">
            Better Market Planning
            </h4>
            <p className="text-base font-normal mt-3">
            Our expert market intelligence reports give you precise market information that helps you identify market demand, potential future risks, competitors, and the most remunerative opportunities for your enterprise. An evidence-based approach could drive your business to greater heights in the international marketplace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container px-3 md:px-0 mx-auto">
          <h3 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug tracking-normal">
          What You Can Find Out:
          </h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10">
            <div className="col-span-2">
              <Slider {...settings}>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          01
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Unlock Global Trade Potential with Exporter Data Solutions
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Exporting products overseas has unlimited possibilities for companies seeking to develop and expand their business beyond their local market. However, gaining access to credible, current, and detailed international trade data is a challenge. This is where GTD Service fills in the gap, offering companies sound and updated information about global exporters. With their comprehensive database, businesses have the opportunity to find and connect with suitable trading counterparts, discover valuable market trends, and maximize their global trade strategies.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          02
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Stay Ahead of the Competition with Market Intelligence
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Being ahead of the competition is essential for an exporter. GTD Service global trade intelligence platform gives exporters insightful information about global market trends and competitors' activities. Exporters have access to shipment records import and export statistics, and historical data, allowing them to have a better idea of the competitors and market leaders' trade patterns.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          03
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Find new markets and diversify them
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      The international market is heterogeneous with different demands, economic situations, and trade policies in different countries. For those exporters who seek to extend their scope, it is crucial to determine the most profitable markets and diversify the export base. GTD Service gives you access to the newest import/export statistics, enabling you to find new prospects in growing markets.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          04
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Optimise Efficiency with Data-Driven Export Planning
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Planning is at the core of global trade when it comes to optimising efficiency and eliminating risks. Exporters require precise data in order to predict demand, monitor deliveries, and monitor supply chain performance. GTD Service aids in helping exporters optimise their export planning through the provision of detailed transaction data live updates, and complete analytics.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="p-3 md:mx-5 rounded-xl bg-white shadow-xl border border-gray-200">
                    <div className="p-5 rounded-lg bg-gray-50 shadow-inner">
                      <div className="flex items-center gap-5 mb-4">
                        <span className="w-14 h-14 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-semibold">
                          05
                        </span>
                        <h4 className="text-xl font-bold text-black">
                        Reach Reliable Importers and Establish Strong Partnerships
                        </h4>
                      </div>
                      <p className="text-base text-gray-600">
                      Finding the right buyers and partners in foreign markets is one of the most vital parts of exporting. The GTD service has an exhaustive database of confirmed importers and exporters that can easily locate and do business, which simplifies the process of finding credible partners. The site offers detailed information about importers' purchasing habits, contact information, and previous transactions, which allows exporters to establish long-term professional relationships with the right buyers.
                      </p>
                    </div>
                  </div>
                </div>
            
              </Slider>
            </div>
            <div>
              <div className="rounded-lg overflow-hidde">
                <img
                  src="/images/Exporters2.webp"
                  className="w-full rounded-lg"
                  alt="Exporter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------CTA----------------------------- */}
      <section className="py-5 bg-blue-950">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-4 items-center gap-8">
            <div className="mb-6 md:mb-0">
              <img src="/images/phone_mockup.png" alt="" />
            </div>
            <div className="col-span-3">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug text-white">
                Get Access to the Leading Exporters in the Industry
              </h4>
              <div className="flex mt-4">
                <a
                  href="/search-global-trade-data"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Explore More
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
      {/* -----------------CTA----------------------------- */}

      {/* ---------Industry start--------------  */}

      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div>
            <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
              Industry
            </h3>
            <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
              Explore More Industries
            </h2>
          </div>
          <div className="md:grid grid-cols-3 mt-10 gap-6">
            <div className="flex group flex-col gap-4">
              <img
                src="/images/Exporters1.webp"
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
                src="/images/Importers1.webp"
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
          <div className="flex mt-8 gap-3">
            <a
              href="/industries-covered"
              className="rounded-xl mx-auto px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Explore More
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
      </section>

      {/* ---------Industry end-------------- * */}
    </>
  );
};
export default page;
