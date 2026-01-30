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

    <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-blue-100 via-indigo-100 to-yellow-100 bg-gradient-45 bg-opacity-50">
        
        <div className="absolute top-0 w-full h-screen z-0 opacity-20">
          <img src="/images/dots.png" className="w-full" alt="" />
        </div>
        <div className="container mx-auto px-4 lg:px-0 py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-10 items-start">

    {/* ================= LEFT: TEXT CONTENT ================= */}
    <div>
      <nav className="flex mb-6 py-5" aria-label="Breadcrumb">
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
                Contact
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <h1 className="mb-4 text-2xl font-bold tracking-normal leading-snug text-dark md:text-3xl lg:text-4xl">
        Contact Us
      </h1>

      <p className="text-base font-normal text-dark max-w-xl">
        Global Trade Data service is a prominent Global Import-Export Trade Data Provider.
        By analyzing global trade deals, we help companies make informed decisions,
        discover new market opportunities, and get ahead of competitors in the global trade industry.
        Reach out to us today to access reliable and up-to-date global import-export trade data.
      </p>
    </div>

    {/* ================= RIGHT: FORM ================= */}
    <div>
      

      <div className="px-4 py-5 bg-gray-100 rounded-lg">
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
</div>
      </section>
      {/* <Breadcrump
        Contact="Contact"
        heading="Contact Us"
        "Global Trade Data service is a prominent Global Import-Export Trade Data Provider. By analyzing global trade deals, we help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry. Reach out to us today to access reliable and up-to-date global import-export trade data for international import-export trade to help your business."="Global Trade Data service is a prominent Global Import-Export Trade Data Provider. By analyzing global trade deals, we help companies make informed decisions, discover new market opportunities, and get ahead of competitors in the global trade industry. Reach out to us today to access reliable and up-to-date global import-export trade data for international import-export trade to help your business."
      /> */}

      <section className="py-20">
  <div className="container mx-auto px-4 md:px-0">

    {/* ================= FORM ON TOP ================= */}
    
    

    {/* ================= ADDRESSES BELOW ================= */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* ================= USA OFFICE ================= */}
      <div>
        <h3 className="mb-3 text-2xl font-bold tracking-normal">
          USA Office
        </h3>

        <div className="px-4 py-5 bg-pink-50 rounded-lg flex gap-3 mb-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 stroke-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21" />
            </svg>
          </div>
          <div>
            <h6 className="font-bold text-lg">GTD SOLUTIONS LLC</h6>
            <p className="text-gray-700 text-sm">
              REGISTERED AGENTS INC.<br />
              418 BROADWAY, STE R<br />
              ALBANY, NY 12207
            </p>
          </div>
        </div>

        <div className="px-4 py-5 bg-orange-50 rounded-lg flex gap-3 mb-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 stroke-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25" />
            </svg>
          </div>
          <div>
            <h6 className="font-bold text-lg">Telephone</h6>
            <a href="tel:+12629246437" className="text-gray-700 text-sm">
              +1 262-924-6437
            </a>
          </div>
        </div>

        <div className="px-4 py-5 bg-purple-50 rounded-lg flex gap-3">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 stroke-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5" />
            </svg>
          </div>
          <div>
            <h6 className="font-bold text-lg">Email</h6>
            <a href="mailto:info@gtdservice.com" className="text-gray-700 text-sm">
              info@gtdservice.com
            </a>
          </div>
        </div>
      </div>

      {/* ================= INDIA OFFICE ================= */}
      <div>
  <h3 className="mb-3 text-2xl font-bold tracking-normal">
    India Office
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    {/* ===== LEFT COLUMN ===== */}
    <div className="space-y-3">

      {/* Noida */}
      <div className="px-4 py-5 bg-blue-50 rounded-lg">
        <h6 className="font-bold text-lg mb-1">Noida</h6>
        <p className="text-gray-700 text-sm">
          G-232, Sector-63,<br />
          Noida, Uttar Pradesh – 201301,<br />
          India
        </p>
      </div>

      {/* Ahmedabad */}
      <div className="px-4 py-5 bg-blue-50 rounded-lg">
        <h5 className="font-bold text-lg mb-1">Ahmedabad</h5>
        
        <h6 className="font-semibold text-md mb-1">Globebridge Tech Private Limited</h6>
        <h6 className="font-medium text-md mb-1">Head Office</h6>

        <p className="text-gray-700 text-sm">
          902, Kalash Square,<br /> Sona Cross Road, Chandkheda,<br /> Ahmedabad, Ahmedabad, Gujarat, 382424
          
        </p>

        
      </div>

      <div className="px-4 py-5 bg-blue-50 rounded-lg">
        <h6 className="font-semibold text-lg mb-1 ">Sales Office</h6>

        <p className="text-gray-700 text-sm">
         PALLADIUM BUSINESS HUB, 504 -505,<br></br> Mahavirnagar, Harikurpa Society, Motera, Ahmedabad, Gujarat 382424
        </p>
      </div>

      

    </div>

    {/* ===== RIGHT COLUMN ===== */}
    <div className="space-y-3">

      <div className="px-4 py-5 bg-green-50 rounded-lg">
        <h6 className="font-bold text-lg">Sales</h6>
        <p className="text-sm text-gray-700">
          
          +91 93287 93095<br />
          sale1@gtdservice.com<br />
          sale2@gtdservice.com
        </p>
      </div>

      <div className="px-4 py-5 bg-yellow-50 rounded-lg">
        <h6 className="font-bold text-lg">Support</h6>
        <p className="text-sm text-gray-700">
          +91 9315619475<br/>
          support@gtdservice.com
        </p>
      </div>

      <div className="px-4 py-5 bg-indigo-50 rounded-lg">
        <h6 className="font-bold text-lg">Other Queries</h6>
        <p className="text-sm text-gray-700">
          +91 9315619475<br/>
          info@gtdservice.com
        </p>
      </div>

    </div>

  </div>
</div>

      

    </div>
  </div>
</section>
    </>
  );
};

export default page;
