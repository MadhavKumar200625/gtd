"use clinet";
import React from "react";
import Testomonials from "../common/Testomonials";
import Breadcrump from "../common/Breadcrump";
import Link from "next/link";

export const clients = [
  { imgURL: "/images/clients/ABBVIE.webp"  },
  { imgURL: "/images/clients/ADOBE-1.webp" },
  { imgURL: "/images/clients/ALPHABET-1.webp" },
  { imgURL: "/images/clients/AMAZON.webp" },
  { imgURL: "/images/clients/AMD.webp" },
  { imgURL: "/images/clients/APPLE.webp" },
  { imgURL: "/images/clients/ASML.webp" },
  { imgURL: "/images/clients/ASTRA.webp" },
  { imgURL: "/images/clients/BANK-OF-AMERICA.webp" },
  { imgURL: "/images/clients/BRODCOM.webp" },
  { imgURL: "/images/clients/CHEVRON.webp" },
  { imgURL: "/images/clients/coca-cola.webp" },
  { imgURL: "/images/clients/costco-wholesale.webp" },
  { imgURL: "/images/clients/ely-lily.webp" },
  { imgURL: "/images/clients/exxcon-mobil.webp" },
  { imgURL: "/images/clients/EY.webp" },
  { imgURL: "/images/clients/hsa.png" },
  { imgURL: "/images/clients/ICBC.webp" },
  { imgURL: "/images/clients/IDC-TECHNOLOGIES.webp" },
  { imgURL: "/images/clients/IHC.webp" },
  { imgURL: "/images/clients/JOHNSON-AND-JOHNSON.webp" },
  { imgURL: "/images/clients/JP-MORGAN-CHASE.webp" },
  { imgURL: "/images/clients/LOREAL.webp" },
  { imgURL: "/images/clients/LVMH.webp" },
  { imgURL: "/images/clients/MASTERCARD.webp" },
  { imgURL: "/images/clients/MERCK.webp" },
  { imgURL: "/images/clients/MICROSOFT.webp" },
  { imgURL: "/images/clients/MOUTAI.webp" },
  { imgURL: "/images/clients/NESTLE.webp" },
  { imgURL: "/images/clients/NETFLIXX.webp" },
  { imgURL: "/images/clients/NOVARTIS.webp" },
  { imgURL: "/images/clients/NVIDIA.webp" },
  { imgURL: "/images/clients/ORACLE.webp" },
  { imgURL: "/images/clients/P&G.webp" },
  { imgURL: "/images/clients/PEPSICO.webp" },
  { imgURL: "/images/clients/RELAINCE.webp" },
  { imgURL: "/images/clients/ROCHE.webp" },
  { imgURL: "/images/clients/SALESFORCE.webp" },
  { imgURL: "/images/clients/SAMSUNG-ELECTRONICS.webp" },
  { imgURL: "/images/clients/SAP.webp" },
  { imgURL: "/images/clients/SAUDI-ARAMCO.webp" },
  { imgURL: "/images/clients/T-MOBILE.webp" },
  { imgURL: "/images/clients/TENCENT.webp" },
  { imgURL: "/images/clients/TESLA.webp" },
  { imgURL: "/images/clients/the-home-depot.webp" },
  { imgURL: "/images/clients/TOYOTA.webp" },
  { imgURL: "/images/clients/TSMC.webp" },
  { imgURL: "/images/clients/TVS.webp" },
  { imgURL: "/images/clients/VISA.webp" },
  { imgURL: "/images/clients/WALMART.webp" },
  { imgURL: "/images/clients/SBI.png" },
  { imgURL: "/images/clients/absolute-advantage_logo.png" },
  { imgURL: "/images/clients/mahindra_logo.png" },
  { imgURL: "/images/clients/Gunaylar-Group.png" },
  { imgURL: "/images/clients/orange.png" },
  { imgURL: "/images/clients/hartree.png" },
  { imgURL: "/images/clients/shakti_apifood.png" },
  { imgURL: "/images/clients/onsole.jpg" },
  { imgURL: "/images/clients/arunova.jpg" },
  { imgURL: "/images/clients/unlu-group.png" },
  { imgURL: "/images/clients/hiya-healthcare.png" },
  { imgURL: "/images/clients/Futrue-Lubemart.png" },
  { imgURL: "/images/clients/Alphatec.png" },
  { imgURL: "/images/clients/Avanis-herbal.png" },
  { imgURL: "/images/clients/arabasque.png" },
  { imgURL: "/images/clients/Poddar-pigments.png" },
  { imgURL: "/images/clients/LT-Foods.png" },
  { imgURL: "/images/clients/penta-impex.png" },
  { imgURL: "/images/clients/shardaa_exim.png" },
  { imgURL: "/images/clients/marcus.png" },
  { imgURL: "/images/clients/total-transport.png" },
  { imgURL: "/images/clients/nobletex.png" },
  { imgURL: "/images/clients/express-publications.png" },
  { imgURL: "/images/clients/SA-Law.png" },
  { imgURL: "/images/clients/shyam-polymers.png" },
  { imgURL: "/images/clients/tiyasa-software.png" },
  { imgURL: "/images/clients/meiko.png" },
  { imgURL: "/images/clients/flow-glow.png" },
  { imgURL: "/images/clients/kamal-engineers.png" },
  { imgURL: "/images/clients/laksola.png" },
  { imgURL: "/images/clients/macronix.png" },
  { imgURL: "/images/clients/manas-geo.png" },
  { imgURL: "/images/clients/nobletex.png" },
  { imgURL: "/images/clients/sunnutrafoods.png" },
  { imgURL: "/images/clients/amp-logo.webp" },
  { imgURL: "/images/clients/thyrocare-logo.webp" },
  { imgURL: "/images/clients/shriramTextile-logo.webp" },
  { imgURL: "/images/clients/prap-logo.webp" },
  { imgURL: "/images/clients/fineHealthcare.webp" },
  { imgURL: "/images/clients/newRainbow-logo.webp" },


];

const page = () => {
  return (
    <>
      <Breadcrump pageName="Our Clients" heading="Meet Our Clients" />

      {/* ---------------------Helping Businesses---------------------- */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            <div>
              <div>
                <img
                  src="/images/MEET-OuR-CLIENS.webp"
                  alt="Our Clients"
                  title="Our Clients"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div>
              <h3 className="mx-auto mb-2 text-balance text-xl md:text-3xl font-bold leading-snug tracking-normal">
                Helping <span className="text-emerald-500">Businesses</span>{" "}
                with Improved Decision Making & Strategic Planning
              </h3>
              <p className="text-base text-gray-700 mb-3">
              We believe your success starts with trust, insight, and the right partnership. That’s what we offer at GTD Service. We are committed to growing alongside our clients by sending solutions precisely tailored to their different needs. The client's satisfaction is at the heart of everything we do.
              </p>
              <p className="text-base text-gray-700 mb-3">
              Over the years, we partnered with organizations across a diverse range of industries, including real estate, finance, academia, aerospace, construction, chemicals, and legal services, delivering data-driven services that produce real solutions.
              </p>
              <p className="text-base text-gray-700">
              Our cost-effective business intelligence has empowered companies to conduct effective market research, improve decision-making, and boost sales performance. We take pride in the value we’ve added to our clients’ growth journeys and look forward to building new partnerships and contributing to more success stories in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------Industry start--------------  */}

      <section className="dotbg">
        <div className="container px-3 md:px-0 mx-auto py-5 md:py-20">
          <div className="md:flex justify-between items-center">
            <div>
              <h2 className="mx-auto mb-2 text-balance text-2xl md:text-4xl font-bold leading-snug my-2">
                Sectors We Work With
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
          <div className="md:grid grid-cols-3 mt-10 gap-6">
            <div className="flex group flex-col gap-4 mb-6 md:mb-0">
              <img
                src="/images/Exporters1.webp"
                className="w-100 rounded-xl"
                alt="Exporters"
                title="Exporters"
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
            <div className="flex group flex-col gap-4 mb-6 md:mb-0">
              <img
                src="/images/Importers1.webp"
                className="w-100 rounded-xl"
                alt="Importers"
                title="Importers"
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
            <div className="flex group flex-col gap-4 mb-6 md:mb-0">
              <img
                src="/images/AUTOMOTIVE .webp"
                className="w-100 rounded-xl"
                alt="Automotive"
                title="Automotive"
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

      {/* ---------------clients logo-------------------- */}

      <section className="mybg">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div>
            <h2 className="mx-auto mb-2 text-balance text-2xl md:text-4xl font-bold leading-snug my-2 text-center">
              Our reputation is built on creating great outcomes for clients.
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 mt-6 gap-4">
            {clients.map((data, index) => (
              <div
                key={index}
                className="shadow-lg rounded-lg bg-white flex items-center justify-center"
              >
                <img src={data.imgURL} className="w-[100px] md:w-[150px]" alt="Trusted By Top Brands" title="Trusted By Top Brands"/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testomonials />
    </>
  );
};

export default page;
