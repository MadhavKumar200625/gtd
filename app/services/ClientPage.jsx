"use client";
import React from "react";
import Breadcrump from "../common/Breadcrump";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomButton } from "../common/Inputs";



const page = () => {
  const industry = [
    {
      name: "Reduce the Risk Involved",
      icons: "./images/icons/education.svg",
      pera: "Our global import and export trade data helps reduce the risks involved in global trade and provides accurate real-time insights into market trends, competitor activities, and supply chain performance. By leading data you can make informed decisions, mitigate potential trade barriers and identify the best suppliers and buyers. This minimizes financial risks, optimizes logistics, and ensures smoother operations.",
    },
    {
      name: "Expand Your Business Network",
      icons: "./images/icons/shield.svg",
      pera: "We help you expand your business network by connecting you with key suppliers, buyers data and partners across the globe. Our comprehensive global import-export trade data allows you to identify high-potential prospects and establish valuable relations in the new global import-export trade market.",
    },
    {
      name: "Find Potential Market",
      icons: "./images/icons/factory.svg",
      pera: "We help you identify potential markets by providing in-depth insights into global import-export trade data and global trade flows and demand trends. Our comprehensive data allows you to analyze emerging markets and pinpoint areas with high growth potential.",
    },
    {
      name: "Researched Market Data",
      icons: "./images/icons/science.svg",
      pera: "We use information from meticulously researched market data that offers deep insights into global trade data. Our data is collected from reliable sources, ensuring accuracy and relevance for your business decisions by providing reports on trade volumes, pricing trends, and market demands.",
    },
    {
      name: "Affordable pricing",
      icons: "./images/icons/construction.svg",
      pera: "We provide affordable pricing for our premium international import-export trade data ensuring that import-export businesses of all sizes can access critical trade insights. Our flexible pricing plans are designed to suit different needs and budgets, providing exceptional value without compromising on data quality.",
    },
    {
      name: "Navigate Global Market",
      icons: "./images/icons/nature.svg",
      pera: "We provide you with a website to navigate the global import-export data and global market with ease. Our detailed import-export data helps you understand international import-export trade data and trade flows, identify key market trends, and make informed decisions.",
    },
    {
      name: "Overcome the Trade Challenges",
      icons: "./images/icons/cargo-ship.svg",
      pera: "At your global import-export trade data strategy based on the current market scenario with our customized global import-export trade data, stay ahead of the market competition.",
    },
    {
      name: "Find an Ideal Match to Meet Your Business",
      icons: "./images/icons/cargo-ship.svg",
      pera: "The objective is to identify relevant potential audiences and markets for your global import-export trade data and international import-export data business with GTD Service import-export trade data and enhance the overall productivity of your trade business.",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>

     

      <Breadcrump
        heading="Import Export Data Provider | Services"
        peragraph={`At Global Trade Data Service, we offer an advanced trade business platform that tracks global import-export supply chains and shipping activities from all major shipping companies. GTD Service platform provides deep insights into import-export trade data, giving you a comprehensive understanding of global trade data. Global trade data service is an efficient business intelligence market platform that tracks the supply chain and shipping activity of all the major shipping companies around the world. We provide deep insights into the global import-export trade data for international business. Our trade statistics and customs data market access information help you to identify the right suppliers and connect with potential sales prospects.`}
        pageName="Services"
        subPage="Company"
      />
      <section className="md:py-20 py-10 container mx-auto px-2">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
          <div className="bg-pink-50 p-4 rounded-lg">
            <p className="text-base font-normal mt-3">
              Find a new marketplace for your global import-export trade data business with our analytically designed {" "}
              <a className="text-blue-600" href="/search-global-trade-data">
                global import export database.
              </a>
            </p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-base font-normal mt-3">
              Get potential and active buyers and suppliers for your global 
              import-export trade business with our smartly developed websites and data.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-base font-normal mt-3">
              Closely monitor the performance of your product in the global
              trade markets with the help of our latest and smartly developed 
              website and keep track of the market competition.
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-base font-normal mt-3">
              Get our innovative and analytically built big database. 
              You can have fast access to thousands of millions of international 
              import-export trade data to gain real-time insights into the global 
              trade data business.
            </p>
          </div>
        </div>

        <div className="mt-20 ">
          <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
            Features
          </h3>
          <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
            Features of Import Export Data
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            <div>
              <img
                src="/images/phone_mockup.png"
                className="w-2/3 mx-auto md:mx-0 md:w-full"
                alt="import export data"
                title="Import Export Data"
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
                   Find trade metrics and evaluate the market with a unique do-it-yourself 
                   alternative to cumbersome raw trade data that includes on-screen 
                   assistance from a professional business analyst for a low pay-per-record fee.
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
                    Create an organized international import-export trade database by cleaning and 
                    categorizing your workplace with import-export customs data and shipment
                    import-export data fields and auto rules.
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
                    Provides our highly advanced customized dashboards and global export-import
                    trade data to make profitable business decisions based on current data 
                    reports and valuable industry insights.
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
                   Easily organize fresh and old data.
                   Dashboards and shipping records and
                   custom data, and shipment fields,
                   including HS codes, are all accessible on the move.
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
                   Access the latest global import-export trade data and
                   business intelligence trade reports and be equipped 
                   with cutting-edge features and reliable global import-
                   export trade data from over 200+ countries.
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
                   A cutting-edge platform that allows users to change trade 
                   plans based on market data by finding increasing items and 
                   markets and the appropriate price range as well as contact
                   information for exporters and importers.
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
                   Our international import-export data services empower you to spice
                   up your worldwide import-export database with actionable and 
                   customizable and ready-to-use global import-export trade data.
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
                   A website that access you to create, share, and 
                   communicate while enlisting the help of your team and advancing your company strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mybg overflow-x-hidden">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="text-center">
            <h4 className="text-primary text-lg text-gray-400 font-medium">
              Benefits
            </h4>
            <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
              Benefits of Import Export Data
            </h3>
          </div>
          <Slider {...settings}>
            {industry.map((item, index) => (
              <div key={index}>
                <div className="p-3 md:me-5 rounded-xl bg-white shadow-xl border border-gray-200">
                  <div className="p-3 rounded-lg bg-gray-50 min-h-[245px]">
                    <div className="flex items-center gap-3">
                      <img src={item.icons} className="size-10 mb-3" alt="Benefits of Import Export Data" title="Benefits of Import Export Data"/>
                      <h4 className="text-xl font-bold text-black mb-3">
                        {item.name}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600">{item.pera}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                Get Valuable Import Export Data Statistics of over 200+
                Countries
              </h4>
              <p className="text-sm font-normal text-black mt-4">
                Identify business prospects from top trading countries by HS
                Code, Product Name, Description, Quantity, Value, Importer Name,
                Exporter Name, Port and Shipment Details. Get customised import
                export data reports and expand your business to the global
                market.
              </p>
              <div className="flex mt-4">
                <a
                  href={'/import-export-data-country-wise'}
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                  // onClick={() => alert("kkk")}
                >
                  Explore More
                  </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="/images/Service1.webp" alt="import export data statistics" title="import export data statistics" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
