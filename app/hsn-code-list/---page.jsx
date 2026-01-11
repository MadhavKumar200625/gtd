"use client";
import Link from "next/link";
import React, { useState } from "react";

const chapterData = [
  {
    headingChapter:
      "HS Codes for (Chapter 1 - 5 ) - Section I-Live Animals; Animal Products",
    innerdeck: [
      {
        id: 1,
        chapter: "Live Animals",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 2,
        chapter: "Meat and Edible Meat Offal",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 3,
        chapter:
          "Fish and Crustaceans, Molluscs and other Aquatic Invertebrates",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 4,
        chapter:
          "Birds’ Eggs; Natural Honey; Edible Products of Animal Origin, not elsewhere specified or included",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 5,
        chapter:
          "Products of Animal Origin, Not Elsewhere Specified or Included",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 6-14 ) - Section II-Vegetable Products",
    innerdeck: [
      {
        id: 6,
        chapter:
          "Live Trees and other Plants; Bulb, Roots and the Like; Cut Flowers and Ornamental Foliage",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 7,
        chapter:
          "Vegetable seeds; Edible Vegetables and Certain Roots and Tubers",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 8,
        chapter: "Edible Fruit and Nuts; Peel of Citrus Fruit or Melons",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 9,
        chapter: "Coffee, Tea, Mate and Spices",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 10,
        chapter: "Cereals",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 11,
        chapter:
          "Products of the Milling Industry; Malt; Starches; Inulin Wheat Gluten",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 12,
        chapter:
          "Oil Seeds and Oleaginous Fruits; Miscellaneous Grains, Seeds and Fruit; Industrial or Medicinal Plants; Straw and Fodder",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 13,
        chapter: "Lac; Gums, Resins and Other Vegetable Saps and Extracts",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 14,
        chapter:
          "Vegetable Plaiting Materials; Vegetable Products not Elsewhere Specified or Included",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 15 ) - Section III-Animal or Vegetable Fats and Oils",
    innerdeck: [
      {
        id: 15,
        chapter:
          "Animals or Vegetable Fats and Oils and their Cleavage Products; Prepared Edible Fats; Animal or Vegetable Waxes",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 16 -24 ) - Section IV-Prepared Foodstuffs; Beverages, Spirits and Tobacco",
    innerdeck: [
      {
        id: 16,
        chapter:
          "Preparations of Meat, of Fish or of Crustaceans, ollusks or other Aquatic Invertebrates",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 17,
        chapter: "Sugars and Sugar Confectionery",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 18,
        chapter: "Cocoa and Cocoa Preparations",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 19,
        chapter:
          "Preparations of Cereals, Flour, Starch or Milk; Pastrycooks’ Products",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 20,
        chapter:
          "Preparations of Vegetables, Fruit, Nuts or other Parts of Plants",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 21,
        chapter: "Miscellaneous Edible Preparations",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 22,
        chapter: "Beverages, Spirits and Vinegar",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 23,
        chapter:
          "Residues and Waste from the Food Industries; Prepared Animal Fodder",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 24,
        chapter: "Tobacco and Manufactures; Tobacco Substitutes",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 25 -27 ) - Section V-Mineral Products",
    innerdeck: [
      {
        id: 25,
        chapter:
          "Salt; Sulphur; Earths and Stone; Plastering Materials, Lime and Cement",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 26,
        chapter: "Ores, Slag and Ash",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 27,
        chapter:
          "Mineral Fuels, Mineral Oils and Products of their Distillation; Bituminous Substances; Mineral Waxes",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 28 -38 ) - Section VI-Products of the Chemicals or Allied Industries",
    innerdeck: [
      {
        id: 28,
        chapter:
          "Inorganic Chemicals; Organic or Inorganic Compounds of Precious Metals, of Rare-earth Metals, of Radioactive Elements of Isotopes",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 29,
        chapter: "Organic Chemicals",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 30,
        chapter: "Pharmaceutical Products",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 31,
        chapter: "Fertilisers",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 32,
        chapter:
          "Dyeing Extracts; Tannins and their Derivatives; Dyes, Pigments and other Colouring Matter; Paints and Varnishes; Putty and other Mastics; inks",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 33,
        chapter:
          "Essential Oils and Resinoids; Perfumery Cosmetic or Toilet Preparations",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 34,
        chapter:
          "Soap, Organic Surface- Active Agents, Washing Preparations, Lubricating Preparations, Artificial Waxes, Prepared Waxes, Polishing or Scouring Preparations, Candles and Similar Articles, Modelling Pastes, “Dental Waxes” and Dental Preparation",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 35,
        chapter: "Albuminoidal Substances; Modified Starches; Glues; Enzymes",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 36,
        chapter:
          "Explosives; Pyrotechnic Products; Matches; Pyrophoric Alloys; Certain Combustible Preparations",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 37,
        chapter: "Photographic or Cinematographic Goods",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 38,
        chapter: "Miscellaneous Chemical Products",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 39 - 40 ) - Section VII-Plastics and Articles thereof",
    innerdeck: [
      {
        id: 39,
        chapter: "Plastics and Articles thereof",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 40,
        chapter: "Rubber and Articles thereof",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 41 - 43 ) - Section VIII-Raw Hides and Skins, Leather",
    innerdeck: [
      {
        id: 41,
        chapter: "Raw Hides and Skins (Other than Furskins) and Leather",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 42,
        chapter:
          "Articles of Leather; Saddlery and Harness; Travel Goods, Handbags and similar containers; Articles of Animal Gut (other than Silk-worm Gut)",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 43,
        chapter: "Furskins and Artificial Fur; Manufactures thereof",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 44 -46 ) - Section IX-Wood and Articles of Wood",
    innerdeck: [
      {
        id: 44,
        chapter: "Wood and Articles of Wood; Wood Charcoal",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 45,
        chapter: "Cork and Articles of Cork",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 46,
        chapter:
          "Manufactures of Straw, of Esparto or of other Plaiting Materials; Basketware And Wickerwork",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 44 -46 ) - Section IX-Wood and Articles of Wood",
    innerdeck: [
      {
        id: 44,
        chapter: "Wood and Articles of Wood; Wood Charcoal",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 45,
        chapter: "Cork and Articles of Cork",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 46,
        chapter:
          "Manufactures of Straw, of Esparto or of other Plaiting Materials; Basketware And Wickerwork",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 47 -49 ) - Section X-Pulp of wood or paper",
    innerdeck: [
      {
        id: 47,
        chapter:
          "Pulp of Wood or of other Fibrous Cellulosic Material; Recovered (Waste and Scrap) Paper or Paperboard",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 48,
        chapter:
          "Paper and Paperboard; Article of Paper Pulp, of Paper or of Paperboard Currency Paper (Water-mark Banknote Paper)",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
      {
        id: 49,
        chapter:
          "Printed Books, Newspapers, Pictures and other Products of the Printing Industry; Manuscripts, Typescripts and Plans",
        importdataurl: "/searchcountry",
        exportdataurl: "/searchcountry",
      },
    ],
  },
];

const page = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-orange-100 via-white to-green-100 bg-gradient-45 bg-opacity-50">
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-28 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a
                  href="#"
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
                    HSN Code List
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="mb-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl mt-6 lg:text-4xl">
            HSN Code List - CTH Code List - ITC HS Code List
          </h1>
          <h5 className="text-bold text-xl mb-2">
          Global Import Export Data Provider | U.S. Businesses Customs Data
          </h5>
          <p className="mb-8 text-justify text-base font-normal text-dark">
          It is essential for companies that undertake international import-export
           trade records to understand global trade patterns, and they can do this
            by having an accurate import-export database at hand. Our platform 
            ensures you get comprehensive customs data from the United States and
             200+ countries, allowing you to gain important insights into the 
             movement of goods across borders.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-tight">
                What is HSN Code List?
              </h2>
              <p className="text-base text-gray-700">
                An HSN Code is a six-digit unique identification number used to
                specify various products and goods used in import-export. The
                first six digits of the HSN Code are the same for every hsn. And
                the rest of the digits are decided by the customs authorities of
                the respective trading hsn. Similarly, In India, there is an ITC
                HS Code system to classify goods and products for import and
                export.
              </p>
              <h2 className="mx-auto my-4 text-balance text-2xl font-bold leading-tight">
                ITC HS Code - ITC HS Classification Code System in India
              </h2>
              <p className="text-base text-gray-700">
                In India, Customs Authorities use ITC HS Code, Indian Trade
                Clarification (ITC) Harmonized System Classification to classify
                various commodities known in the global market. Till now, HSN
                Codes are available for over 5000+ goods covering 90% of the
                international market. There are two schedules assigned under the
                Indian HSN Classification Code List namely - Schedule (I) and
                Schedule (II).
              </p>
              <ul>
                <li className="p-2 rounded-md bg-slate-200 mb-2 mt-3">
                  <b>Schedule (I)</b> – This section contains all rules and
                  guidelines of import policies.
                </li>
                <li className="p-2 rounded-md bg-slate-200">
                  <b>Schedule (II)</b> – This section contains all rules and
                  guidelines of export policies.
                </li>
              </ul>
            </div>
            <div>
              <img
                src="./images/HSNcode.png"
                className="w-4/5 mx-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container mx-auto px-4 md:px-0">
          <h3 className="text-primary text-lg text-gray-400 font-medium">
            How does the ITC HS Code Classification System work in India?
          </h3>
          <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
            HSN Code - ITC HS Classification - CTH Code work system in India!
          </h2>
          <p className="text-base text-gray-700">
            Indian HSN Code List includes 21 sections, 99 chapters, and 1244
            headings followed by 5222 subheadings. Based on these chapters,
            headings, and subheadings, a product HSN Code is determined. Various
            Sections for product classification in the List of hsn code in india
            are mentioned below-
          </p>
          <div className="mt-10">
            <section>
              {/* --------------Question Start---------------------- */}
              {chapterData.map((item, index) => (
                <div
                  key={index}
                  className="p-4 mb-3 bg-white border shadow-md rounded-xl overflow-hidden"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <h5
                      className={`text-lg font-bold text-black ${
                        activeIndex === index ? "text-blue-600" : ""
                      }`}
                    >
                      {item.headingChapter}
                    </h5>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`size-4 transform transition-transform duration-300 ${
                          activeIndex === index
                            ? "rotate-45 stroke-blue-600"
                            : ""
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
                    className={`transition-all duration-300 ease-in-out ${
                      activeIndex === index
                        ? "max-h-max opacity-100 mt-3"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {item.innerdeck.map((deck, id) => (
                      <div
                        key={id}
                        className="md:flex justify-between items-baseline mb-1 p-2 bg-white rounded-md border"
                      >
                        <p className="text-base text-gray-700">
                          Chapter: {deck.id} {deck.chapter}
                        </p>
                        <div className="flex gap-1">
                          <a
                            className="text-sm px-2 py-[2px] bg-blue-500 rounded-md text-nowrap text-white"
                            href={deck.importdataurl}
                          >
                            Global Import Data
                          </a>
                          <a
                            className="text-sm px-2 py-[2px] bg-blue-500 rounded-md text-nowrap text-white"
                            href={deck.exportdataurl}
                          >
                            Global Export Data
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2">
            Structure of HSN Code in India | HSN Code Structure in India
          </h2>
          <p className="text-base text-gray-700 mb-3">
            A product HS Code can be of six to ten digits. As per WCO
            guidelines, the first six digits must remain the same for all
            countries. And the last four digits are assigned by custom
            authorities for tax procedures. An ITC HS Code is classified by its
            chapter, heading, and Subheading. And the last four digits are
            Regional and National Tariff assigned by customs departments.
          </p>
          <p className="text-base text-gray-700 mb-2">
            Understanding the General Structure of Indian HS Code System with an
            Example:
          </p>
          <p className="text-base font-semibold text-gray-700">
            Suppose, we are given an ITC HS Code: 9009840000
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10 gap-4">
            <div className=" text-center">
              <div className="p-2 border mybg rounded-xl mb-3">
                <div className="p-3 bg-white rounded-lg">
                  <h6 className="text-lg text-gray-400">
                    <span className="font-bold text-black">90</span> 09840000
                  </h6>
                </div>
              </div>
              <div className="text-sm font-bold">
                Chapter: The First two digits
              </div>
              <p className="text-base text-gray-700">(90) denotes chapter</p>
            </div>

            <div className=" text-center">
              <div className="p-2 border mybg rounded-xl mb-3">
                <div className="p-3 bg-white rounded-lg">
                  <h6 className="text-lg text-gray-400">
                    90 <span className="font-bold text-black">09</span> 840000
                  </h6>
                </div>
              </div>
              <div className="text-sm font-bold">Heading: Next two digits</div>
              <p className="text-base text-gray-700">(09) denotes headings.</p>
            </div>

            <div className=" text-center">
              <div className="p-2 border mybg rounded-xl mb-3">
                <div className="p-3 bg-white rounded-lg">
                  <h6 className="text-lg text-gray-400">
                    9009 <span className="font-bold text-black">84</span> 0000
                  </h6>
                </div>
              </div>
              <div className="text-sm font-bold">
                Subheading: Further, two digits{" "}
              </div>
              <p className="text-base text-gray-700">
                (84) denotes subheadings
              </p>
            </div>

            <div className=" text-center">
              <div className="p-2 border mybg rounded-xl mb-3">
                <div className="p-3 bg-white rounded-lg">
                  <h6 className="text-lg text-gray-400">
                    900984 <span className="font-bold text-black">00</span> 00
                  </h6>
                </div>
              </div>
              <div className="text-sm font-bold">
                Regional Tariff: Second Last Two digits
              </div>
              <p className="text-base text-gray-700">
                (00) denotes Regional Tariff.
              </p>
            </div>

            <div className=" text-center">
              <div className="p-2 border mybg rounded-xl mb-3">
                <div className="p-3 bg-white rounded-lg">
                  <h6 className="text-lg text-gray-400">
                    90098400 <span className="font-bold text-black">00</span>
                  </h6>
                </div>
              </div>
              <div className="text-sm font-bold">
                National Tariff: Last Two Digits
              </div>
              <p className="text-base text-gray-700">
                (00) indicates National Tariff.
              </p>
            </div>
          </div>

          <h2 className="mx-auto mb-2 text-balance text-2xl font-bold leading-snug my-2">
            How do I find HSN Code for my products?
          </h2>
          <p className="text-base text-gray-700 mb-3">
            You can use Exim Trade Data HSN Code Finder to find ITC HS Code for
            your product. You can search HSN codes of chapter 01 to 98 with
            description at our portal. All you just need is to enter your
            product and hsn name and click our search option, and then you will
            get the HSN Code for your product.
          </p>
          <p className="text-base text-gray-700 mb-2">
            You will be thoroughly able to identify Section, Chapter, Heading
            and Subheading by the following example:
          </p>
          <p className="text-base font-semibold text-gray-700">
            Suppose, the HS Code for Search Lights is 94055010.
          </p>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3 border-b bg-gray-50">Type</th>
                  <th className="px-6 py-3 border-b">Product Category</th>
                  <th className="px-6 py-3 border-b bg-gray-50">HS Code</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                    Section 20
                  </td>
                  <td className="p-2 text-sm">
                    Miscellaneous Manufactured Articles
                  </td>
                  <td className="p-2 text-sm bg-gray-50"></td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                    Chapter 94
                  </td>
                  <td className="p-2 text-sm">Furniture Parts</td>
                  <td className="p-2 text-sm bg-gray-50">94</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                    Heading 05
                  </td>
                  <td className="p-2 text-sm">Lamps and Lighting Fitting</td>
                  <td className="p-2 text-sm bg-gray-50">9405</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                    Subheading 50
                  </td>
                  <td className="p-2 text-sm">
                    Searchlights, Spotlights and parts.
                  </td>
                  <td className="p-2 text-sm bg-gray-50">940550</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-2 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white">
                    Regional Tariff 10
                  </td>
                  <td className="p-2 text-sm"></td>
                  <td className="p-2 text-sm bg-gray-50">94055010</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* --------------------cta------------------------- */}

      <section className="py-5 bg-slate-100">
        <div className="container mx-auto px-4 md:px-0 ">
          <div className="grid md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h4 className="text-2xl md:text-4xl font-bold leading-snug">
                Download HSN Code list of India
              </h4>
              <p className="text-base text-gray-700 mb-3">
                Get detailed ITC HSN Code List of India in Excel and PDF Format
                by just clicking the download button below.
              </p>
              <div className="flex mt-4 gap-4">
                <a
                  href="#"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Download PDF→
                  </span>
                </a>
                <a
                  href="#"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-500 flex items-center shadow-lg shadow-blue-400 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Download Excel→
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="./images/girlwithlaptop.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
