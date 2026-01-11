"use client";
import React,{useState} from "react";
import Link from "next/link";
import axios from "axios";


const Footer = () => {

  const [nname, setName] = useState("");
  const [nemail, setEmail] = useState("");
  const [nmobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!nname || !nemail || !nmobile) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/sendNewsletter", {
        nname,
        nemail,
        nmobile
      });

      alert("Newsletters subscribed successfully!");
      console.log(res.data);

    } catch (error) {
      console.error("Error:", error);
      //alert("Something went wrong!");
      alert(error);
    } finally {
      setLoading(false);

      setName("");
      setEmail("");
      setMobile("");
    }
  };

  return (
    <>
      <footer>
        <div className="container mx-auto pt-20 pb-5 px-6 md:px-0">
          <div className="grid gap-12 xl:grid-cols-5 xl:gap-5">

            <div>
              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Support
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/contact"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/faqs"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Faqs
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/pricing"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Pricing
                  </a>
                </li>
                {/* <li className="mb-2">
                  <a
                    href="/blog"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Blog
                  </a>
                </li> */}
                {/* <li className="mb-2">
                  <a
                    href=""
                    className="font-medium text-gray-300 hover:underline"
                  >
                    GTD News
                  </a>
                </li> */}
              </ul>

              <h3 className="mb-6 mt-6 text-base font-semibold text-emerald-400 uppercase">
                Legal
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/privacy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/terms"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/refund-policy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Refunds Policy
                  </a>
                </li>
              </ul>
              <h3 className="mt-6 text-base font-semibold text-emerald-400 uppercase">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/about"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/services"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Why Choose Us
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/our-client"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Our Clients
                  </a>
                </li> 
              </ul>
            </div>

            <div className="hidden md:block">
              

              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Solutions
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/agribusiness"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Agribusiness
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/asset-management"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Asset Management
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/academic-and-education"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Academic and Education
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/automative"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Automotive
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/aerospace-and-defence"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Aerospace and Defence
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/construction"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Construction
                  </a>
                </li>
                <li className="mb-2 flex items-center">
                  <a
                    href="/chemical"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Chemical
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/energy"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Energy
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/exporters"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Exporters
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/importers"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Importers
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/law-firms"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Law Firms
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/retail"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Retail
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/sales-and-marketing"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Sales and Marketing
                  </a>
                </li>

              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-base font-semibold text-emerald-400 uppercase">
                Important Links
              </h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="/get-started"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Get Trial
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded animate-ping ml-2">
                      New
                    </span>
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/import-export-data-country-wise"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Countries Covered
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/global-companies-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Companies
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/global-ports"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Ports
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/industries-covered"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Industries Covered
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/global-trade-database"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Trade Database
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/global-products"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global Products
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="/api-development-and-integration-company"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    API Integration & Development
                  </a>
                </li>
                {/*<li className="mb-2">
                  <a
                    href="/gst-rates"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    GST Rates by HSN Code
                  </a>
                </li>*/}
                <li className="mb-2">
                  <a
                    href="/hsn-code-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Global HSN Code List
                  </a>
                </li>
                {/*<li className="mb-2">
                  <a
                    href="/global-hs-code-list"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Search HSN Code
                  </a>
                </li>*/}
                <li className="mb-2">
                  <a
                    href="/partners"
                    className="font-medium text-gray-300 hover:underline"
                  >
                    Referral Partners
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h5 className="mb-3 text-emerald-400 text-lg font-semibold">
                Subscribe Newsletter
              </h5>
              <div className="px-4 py-5 bg-[#ffffff09] rounded-2xl">
                <div className="w-full mb-3">
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm focus:outline-none bg-[#ffffff13] border mb-3 md:mb-0 border-[#ffffff43] text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Your Name*"
                    value={nname}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full mb-3">
                  <input
                    type="email"
                    id="email"
                    className="shadow-sm bg-[#ffffff13] mb-3 md:mb-0 border focus:outline-none border-[#ffffff43] text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Your Email*"
                    value={nemail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="w-full mb-3">
                  <input
                    type="Number"
                    id="Number"
                    className="shadow-sm remove-arrow bg-[#ffffff13] mb-3 md:mb-0 border focus:outline-none border-[#ffffff43] text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Mobile No*"
                    value={nmobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <button
                  onClick={sendEmail}
                  className="rounded-xl px-5 mt-4 py-3 mybtn w-full font-semibold linerotate flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    {loading ? "Sending..." : "Submit"}
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
                </button>
              </div>
              <div className="flex gap-4 my-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 mt-1 fill-white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5h-.75V3.75a.75.75 0 0 0 0-1.5h-15ZM9 6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm-.75 3.75A.75.75 0 0 1 9 9h1.5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM9 12a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H9Zm3.75-5.25A.75.75 0 0 1 13.5 6H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM13.5 9a.75.75 0 0 0 0 1.5H15A.75.75 0 0 0 15 9h-1.5Zm-.75 3.75a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM9 19.5v-2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 9 19.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="font-medium text-gray-300">
                  REGISTERED AGENTS INC.
                  418 BROADWAY
                  STE R
                  ALBANY, NY 12207
                </p>
              </div>


              <div className="flex gap-4 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 mt-1 fill-white"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </div>
                <a
                  target="_blank"
                  href="mail:support@gtdservice.com"
                  className="font-medium text-gray-300"
                >
                  support@gtdservice.com
                </a>
              </div>
              <div className="flex gap-4 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 mt-1 fill-white"
                  >
                    <path d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5Zm6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 6c-1.66 0-3 1.34-3 3h6c0-1.66-1.34-3-3-3Zm6-6h6v2h-6V8Zm0 4h4v2h-4v-2Z" />
                  </svg>
                </div>
                <p
                  className="font-medium text-gray-300"
                >
                  +12629246437
                </p>
              </div>
              {/* <div className="flex gap-4 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-5 mt-1 fill-white"
                  >
                    <path d="M20.52 3.48A11.78 11.78 0 0 0 1.73 16.71L1 22.25l5.66-1.49a11.77 11.77 0 0 0 5.71 1.46h.01a11.78 11.78 0 0 0 8.14-20.74ZM12.38 20a9.86 9.86 0 0 1-5.05-1.37l-.36-.21-3.36.89.9-3.28-.24-.34a9.81 9.81 0 1 1 8.11 4.31Zm5.43-7.43c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.5.07-.76.38-.26.3-1 1-1 2.42s1.02 2.8 1.17 3c.15.2 2 3.15 4.85 4.42.68.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.1-.27-.16-.57-.3Z" />
                  </svg>
                </div>
                <p
                  className="font-medium text-gray-300"
                >
                  +14698872343
                </p>
              </div> */}
              <div className="flex mt-12 gap-2">
                <a
                  target="_blank"
                  href="https://www.facebook.com/people/Global-Trade-Data-Service/61575127829118/"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/facebook.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service Facebook"
                    title="GTD Service Facebook"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/gtd.service/"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/instagram.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service Instagram"
                    title="GTD Service Instagram"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://x.com/gtdsservice"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/twitter.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service X"
                    title="GTD Service X"
                  />
                </a>
                <a
                  target="_blank"
                  href="#"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/linkedin.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service LinkedIn"
                    title="GTD Service LinkedIn"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.pinterest.com/gtdsservice/"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/pinterest.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service Pinterest"
                    title="GTD Service Pinterest"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@GTDService"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/youtube.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service Youtube"
                    title="GTD Service Youtube"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.tumblr.com/gtdservice"
                  className="flex items-center justify-center w-10 h-10 border hover:bg-emerald-400 border-gray-300 rounded-full hover:border-0 hover:-translate-y-2 group transition-all ease-linear"
                >
                  <img
                    src="/images/tumblr-logo-svgrepo-com.svg"
                    className="w-5 brightness-0 invert opacity-75 group-hover:opacity-100"
                    alt="GTD Service Tumblr"
                    title="GTD Service Tumblr"
                  />
                </a>
              </div>

            </div>
          </div>
          <div className="md:flex mt-10 justify-between items-center pt-5 border-t border-gray-500">
            <a className="text-gray-400 mb-4 md:mb-0 block" href="https://gtdservice.com/sitemap/sitemap.xml">
              XML Site Map
            </a>
            <p className="text-gray-400">
              All Right Reserved by GTD SOLUTIONS LLC | Copyright @2025-2026
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
