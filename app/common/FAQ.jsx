"use client";
import React, { useState } from "react";
import Link from "next/link";

const FAQ = () => {
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
                    What is GTD Service? How can my business benefit from GTD Service?
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
                      ? "max-h-fit opacity-100 mt-3"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <p className="overflow-hidden text-base text-gray-600">
                    "GTD Service is a leading Global Import Export Data Provider.

                    At Global Trade Service, we offer professional market intelligence reports for
                    more than 200 countries that include Import Data and Export Data, Product lists,
                    port cargo records, and latest industry trends."


                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    "By connecting with legitimate buyers and suppliers from around the world,
                    GTD Service can help you reduce the financial risk associated with your business
                    and build a strong brand presence and increase ROI in exchange."
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
                    How many countries are covered in the GTD Service database?
                    What type of data do you provide?
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
                    "GTD Service has a well-researched database of Import Export Trade Data of over 200+ countries"
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    You can easily access the latest import export data of countries like India, Vietnam, Turkey, Indonesia, USA and many more.
                    GTD Service gives you access to detailed trade statistics reports based on the information collected from invoices,
                    transactions, port shipments and customs department.
                  </p>
                  <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                    <legend className="font-bold">
                      There are four distinct types of data in our global trade database:
                    </legend>
                    <ul className="ps-4">
                      <li className="list-disc">
                        <b>Statistical Data:</b>It is useful for determining demand, market trends, and product pricing.
                        It includes information such as the product quantity, price, country
                        of origin/destination, and the date of shipment.
                      </li>
                      <li className="list-disc">
                        <b>Customs Data:</b> Customs data is information provided by the customs departments
                        of several nations worldwide. Important shipping information such as the product's
                        HS Code, description, nation, buyer, supplier name, and loading/unloading port are all included.
                      </li>
                      <li className="list-disc">
                        <b>Mirror Data:</b>  It includes information about nations with limited coverage.
                        It is taken from the information provided by their trading partners.
                      </li>
                      <li className="list-disc">
                        <b>Bill of Lading Data:</b>This type of information is derived from a
                        company's shipment records, excluding pricing.
                      </li>
                    </ul>
                  </fieldset>
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
                    What are the differences between the plans provided by GTD Service?
                    How do I decide which plan is best for me?
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
                    "Global Trade Data Service offers 5 different plans including Starter, Basic, Plus, Pro and Premium.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    Each plan comes with different download credits, search limits, and user licence.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    You can customize your plan as per your requirement and
                    budget or also choose to compare and choose your desired plan."
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
                    How do I subscribe to GTD Service? How does your point system work?
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
                    "Visit our pricing plan page and compare among our given plans, to subscribe to GTD Service.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    Next, you select the button titled "Request Demo".  You will be
                    sent an activation email after the payment is done, and your account will be activated after verification.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    According to plans, our point system differs.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    You can view the database of all countries after your account has been activated.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    Searches and downloads based on the user's selected plan will decide how many points and credits are given out.
                  </p>
                  <p className="overflow-hidden text-base text-gray-600">
                    Based on the country and the data available under the user plan, the points would be subtracted.
                  </p>
                  <fieldset className="border-2 border-dashed border-blue-500 p-3 mt-2 rounded-lg">
                    <legend className="font-bold">For example:</legend>
                    <ul className="ps-4">
                      <li className="list-disc">
                        1 point would be deducted for downloading 1 shipment,
                        for Indonesia Data.
                      </li>
                      <li className="list-disc">
                        1 point would be deducted for downloading 1 shipment,
                        for Vietnam Trade Data
                      </li>
                      <li className="list-disc">
                        10 points would be deducted for downloading 1 shipment, for Turkey Direct Export Data
                      </li>
                    </ul>
                  </fieldset>
                  <p className="overflow-hidden text-base text-gray-600 mt-3">
                    Please get in touch with our experts, if you need any help."
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
                    How long will it take for the activation of my account?
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
                    An email confirming your payment will be sent to you. Upon verification, your account
                    will be activated.
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
                    How can I get in touch with GTD Service to create a customized data plan that fits my requirements and budget?
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
                    GTD Service offers customized data plans that fit the needs and budget of our clients.
                    Send us an email at support@gtdservice.com with your needs, and we'll respond as soon as possible.
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
                    How do I connect Customer Support?
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
                  {<p className="overflow-hidden text-base text-gray-600">
                    GTD Service' team of experts is on call 24*7 to help our clients and we are also available at {" "} if any assistance or training is needed &nbsp;
                    <a
                      href={"mailto:support@gtdservice.com"}
                      className="text-blue-500"
                      to="mailto:support@gtdservice.com"
                    >
                      support@gtdservice.com
                    </a>
                    .
                  </p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
