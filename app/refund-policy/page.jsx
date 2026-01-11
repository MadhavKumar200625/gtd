import React from "react";
import Breadcrump from "../common/Breadcrump";

export const metadata = {
  title: "Refund Policy: Transparent Terms for Global Trade Data Service",
  description: "Review GTD Service's refund policy for global trade data. Learn how to request a refund within 48 hours for any discrepancies in our import-export reports.",
  keywords: ["Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers"],
  alternates: {
    canonical: "https://gtdservice.com/refund-policy"
  },
  openGraph: {
    title: 'Refund Policy: Transparent Terms for Global Trade Data Service',
    description: "Review GTD Service's refund policy for global trade data. Learn how to request a refund within 48 hours for any discrepancies in our import-export reports.",
    url: 'https://gtdservice.com/refund-policy',
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
    title: 'Refund Policy: Transparent Terms for Global Trade Data Service',
    description: "Review GTD Service's refund policy for global trade data. Learn how to request a refund within 48 hours for any discrepancies in our import-export reports.",
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  return (
    <>
      <Breadcrump heading="Refund Policy" pageName="Refund Policy" />

      <div className="container px-3 md:px-0 mx-auto py-20">
        <div className="policy_sec">
          <div className="pro-details">
            <h2 className="text-3xl font-bold mb-2 text-blue-700">
              Refund Policy
            </h2>
            <p className="text-base text-gray-600 pb-3">
              We are committed to providing our clients with genuine and precise Global Import-Export Data.
               If you find errors in our Global Import-Export Trade Data reports within 48 hours,
                we will fix them and process your refund, whatever your payment mode, within 7 working days.
            </p>

            <p className="text-base text-gray-600 pb-3">
            Please notify us via email at support@gtdservice.com to clarify any inaccuracies in our trade data.
            </p>

            <p className="text-base text-gray-600 pb-3">
            Your complete happiness is our priority, and we aim to grow together with our clients.
            </p>

            <p className="text-lg font-bold text-red-600 pb-3">Note:</p>

            <ol type="1" className="list-decimal ps-5">
              <li>
               You will get your refund as per your payment mode (Online, net
                banking, wire transfer or UPI).
              </li>
              <li>
              TDS should be deducted by your own financial team, or
               else we will not initiate any refund for the same.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
