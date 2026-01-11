"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";



const GetStarted = () => {
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [mobile, setMobile] = useState("");
      const [loading, setLoading] = useState(false);

    const sendEmail = async () => {
      if (!name || !email || !company || !mobile ) {
        alert("Please fill all the fields.");
        return;
      }


      try {
        setLoading(true);
        const res = await axios.post("../get-started/api/sendEmail", {
          name,
          email,
          company,
          mobile,
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
      }
    };
  return (
    <>
      <section className="flex items-center pb-24 overflow-hidden relative bg-gradient-to-r from-blue-100 via-white to-orange-100 bg-gradient-45 bg-opacity-50">
         <div className='absolute -top-2/4 w-full h-screen z-0 opacity-10'>
            <img src="./images/exim_data.png" className='w-full' alt="" />
        </div>
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative mt-10">
          <div className="text-center">
            <div>
              <h1 className="mb-4 text-3xl text-blue-950 font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
                GTD Service Global Trade Intelligence System
              </h1>
              <p className="mb-8 text-lg font-bold text-dark">
                World's largest{" "}
                <span className="py-1 px-2 bg-emerald-500 rounded-sm text-white">
                  global trade database
                </span>
                . Connect with millions of international{" "}
                <span className="py-1 px-2 bg-sky-500 rounded-sm text-white">
                  buyers and suppliers
                </span>{" "}
                in one go
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container px-3 md:px-0 mx-auto pb-20 -mt-14 z-10 relative ">
        <div className="grid md:grid-cols-2 gap-6 p-8 rounded-xl border bg-white shadow-xl items-center">
          <div className="order-2 md:order-1">
            <h5 className="text-xl font-bold text-black mb-4">
              Get Started With GTD Service GTIS Platform
            </h5>
            <div className="mb-3">
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:outline-none"
                placeholder="Customer Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="company_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Company <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="company_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:outline-none"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="phone_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Phone no. <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phone_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:outline-none"
                placeholder="Phone Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="phone_name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email ID. <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="phone_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   focus:outline-none"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              onClick={sendEmail}
              //href="mailto:support@gtdservice.com"
              className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm whitespace-nowrap">
              {loading ? "Sending..." : "Get Started"}
                
              </span>
            </button>
          </div>
          <div className="order-1 md:order-2">
            <img src="/images/exim_data.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
