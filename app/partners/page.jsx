import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Our Partners | Global Trade Data Network | GTD Service",
  description: "Meet our trusted global partners who help deliver accurate trade data insights. Explore our growing network of data providers, agents, and trade experts.",
  keywords: ["gtd service partners, global trade data network, trade data providers, import export data partners, data agents, international trade collaboration"],
  alternates: {
    canonical: "https://gtdservice.com/partners"
  },
  openGraph: {
    title: 'Our Partners | Global Trade Data Network | GTD Service',
    description: 'Meet our trusted global partners who help deliver accurate trade data insights. Explore our growing network of data providers, agents, and trade experts.',
    url: 'https://gtdservice.com/partners',
    siteName: 'GTD Service',
    type: 'website',
    images: [
      {
        url: 'https://gtdservice.com/images/logo.svg', // Replace with your real OpenGraph image
        alt: `Global Trade Data`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Our Partners | Global Trade Data Network | GTD Service',
    description: 'Meet our trusted global partners who help deliver accurate trade data insights. Explore our growing network of data providers, agents, and trade experts.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};


const Partners = () => {
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-r from-blue-100 via-white to-orange-100 bg-gradient-45 bg-opacity-50">
        {/* <div className='absolute -top-2/4 w-full h-screen z-0 opacity-10'>
            <img src="./images/ports.webp" className='w-full' alt="" />
        </div> */}
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative mt-10">
          <div className="grid md:grid-cols-2 items-center">
            <div>
              <h1 className="mb-4 text-3xl text-blue-950 font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
              Be a successful partner with us!
              </h1>
              <p className="mb-3 text-base font-normal text-dark">
              Our vision is to deliver more sustainable, cost-efficient, and result-oriented data solutions to our clients.
              </p>
              <p className="mb-3 text-base font-normal text-dark">
              If you have the same interest or can help us offer better data solutions, then you can include us as a partner.
              </p>
              <a
                href="mailto:support@gtdservice.com"
                className="rounded-xl px-5 py-2 mybtn font-semibold linerotate inline-flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
              >
                <span className=" text-white text-sm">Email Us</span>
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
            <div className="mix-blend-multiply">
              <img
                src="/images/referral-partners.webp"
                className="md:w-2/3 ms-auto mix-blend-multiply"
                alt="GTD Service Partners"
                title="GTD Service Partners"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container px-3 md:px-0 mx-auto py-20 z-10 relative dotbg">
        <h5 className="max-w-4xl mx-auto">
          <div className="p-3 rounded-xl bg-white hover:shadow-xl border border-gray-200 transition-shadow ease-in">
            <div className="p-3 rounded-lg bg-gray-50">
              <h4 className="md:text-4xl text-2xl leading-normal font-bold text-center ">
              We search for more reliable and trusted import-export data providers worldwide. We believe in expanding together with our clients and partners.
              </h4>
            </div>
          </div>
        </h5>
      </section>

      {/* -------------------CTA------------------------- */}

      <section className="py-5 bg-slate-100">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug">
              Join forces with GTD Service Today
              </h4>
              <div className="flex mt-4">
                <a
                  href="mailto:support@gtdservice.com"
                  className="rounded-xl px-5 py-2 mybtn font-semibold linerotate inline-flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm">Email Us</span>
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
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="/images/partners-2.webp" alt="GTD Service Referral Partners" title="GTD Service Referral Partners"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partners;
