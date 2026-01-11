"use client";
import React,{useState} from "react";
import Breadcrump from "../common/Breadcrump";
import Link from "next/link";
import axios from "axios";

const page = () => {
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    if (!name || !email || !company || !mobile || !message || !country) {
      alert("Please fill all the fields.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/sendEmail", {
        name,
        email,
        company,
        mobile,
        message,
        country,
      });

      alert("Message sent successfully!");
      console.log(res.data);

    } catch (error) {
      console.error("Error:", error);
      //alert("Something went wrong!");
      alert(error);
    } finally {
      setLoading(false);
      
      setName("");
      setEmail("");
      setCompany("");
      setMobile("");
      setMessage("");
      setCountry("India");
    }
  };

  return (
    <>
      <Breadcrump
        pageName="Contact"
        heading="Contact Us"
        peragraph="Global Trade Data service is a prominent Global Import-Export Trade Data Provider. By analyzing global trade deals, we help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry. Reach out to us today to access reliable and up-to-date global import-export trade data for international import-export trade to help your business."
      />

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <h3 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug tracking-normal">
                Information
              </h3>
              <div className="px-4 py-5 bg-pink-50 rounded-lg flex gap-3 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 stroke-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="font-bold text-lg">
                    {/* Shpere Eximia Research Pvt Ltd */}
                    GTD SOLUTIONS LLC
                  </h6>
                   <p className="text-base text-gray-700">
                   <span>REGISTERED AGENTS INC.</span><br />
                    <span>418 BROADWAY</span><br />
                    <span>STE R</span><br />
                    <span>ALBANY, NY 12207</span>
                  </p> 
                </div>
              </div>
              <div className="px-4 py-5 bg-orange-50 rounded-lg flex gap-3 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 stroke-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="font-bold text-lg">Telephone</h6>
                  <a
                    href="tel:+1 262-924-6437"
                    className="text-base text-gray-700"
                  >
                    +1 262-924-6437
                  </a>
                </div>
              </div>
              {/* <div className="px-4 py-5 bg-orange-50 rounded-lg flex gap-3 mb-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 stroke-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.52 3.48A11.78 11.78 0 0 0 1.73 16.71L1 22.25l5.66-1.49a11.77 11.77 0 0 0 5.71 1.46h.01a11.78 11.78 0 0 0 8.14-20.74ZM12.38 20a9.86 9.86 0 0 1-5.05-1.37l-.36-.21-3.36.89.9-3.28-.24-.34a9.81 9.81 0 1 1 8.11 4.31Zm5.43-7.43c-.3-.15-1.75-.87-2.02-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.63.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.5.07-.76.38-.26.3-1 1-1 2.42s1.02 2.8 1.17 3c.15.2 2 3.15 4.85 4.42.68.29 1.2.46 1.61.59.67.21 1.28.18 1.76.11.54-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.1-.27-.16-.57-.3Z"
                    />
                  </svg>
                </div>
                <div>
                  <h6 className="font-bold text-lg">Whatsapp</h6>
                  <a
                    href="tel:+1 469-887-2343"
                    className="text-base text-gray-700"
                  >
                    +1 469-887-2343
                  </a>
                </div>
              </div> */}
              
              <div className="px-4 py-5 bg-purple-50 rounded-lg flex gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-10 stroke-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div> 
                  <h6 className="font-bold text-lg">Email</h6>
                  <a
                    href="mailto:support@gtdservice.com"
                    className="text-base text-gray-700"
                  >
                    support@gtdservice.com
                  </a>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
              <h3 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug tracking-normal">
                Send a Message
              </h3>
              <div className="px-4 py-5 bg-gray-100 rounded-lg">
                <div className="flex gap-2 items-center mb-3">
                  <div className="md:w-2/4">
                    <input
                      type="text"
                      id="name"
                      className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Your Name*"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="md:w-2/4">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="shadow-sm bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Your Email*"
                      required
                    />
                  </div>
                </div>
                <div className="flex gap-2 items-center mb-3">
                  <div className="md:w-2/4">
                    <input
                      type="text"
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="shadow-sm focus:outline-none bg-gray-50 border mb-3 md:mb-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Your Company Name*"
                      required
                    />
                  </div>
                  <div className="md:w-2/4">
                    <input
                      type="Number"
                      id="Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="shadow-sm remove-arrow bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="Mobile No*"
                      required
                    />
                  </div>
                </div>
                <select
                  id="countries"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="bg-gray-50 border border-gray-300 mb-3 focus:outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="0">Select Country</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Russia">Russia</option>
                  <option value="sri_lanka">Sri Lanka</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Chile">Chile</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Colombia">Colombia</option>
                  <option value="costarica">CostaRica</option>
                  <option value="drcongo">DR Congo</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="australia">Australia</option>
                  <option value="Spain">Spain</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Netherland">Netherland</option>
                  <option value="Germany">Germany</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Oman">Oman</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="USA">USA</option>
                </select>
                <div className="w-full">
                  <textarea
                    type="text"
                    id="Number"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="shadow-sm remove-arrow bg-gray-50 mb-3 md:mb-0 border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    placeholder="Message*"
                    required
                  />
                </div>
                <button
                  onClick={sendEmail}
                  to="/searchcountry"
                  className="rounded-xl px-5 mt-4 py-3 mybtn font-semibold linerotate flex items-center group"
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
