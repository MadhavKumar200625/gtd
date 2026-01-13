"use client";
import Link from "next/link";
import React, { useState , useEffect} from "react";
import { useRouter } from 'next/navigation';



const chapterData = [
  {
    headingChapter:
      "HS Codes for (Chapter 1 - 5 ) - Section I-Live Animals; Animal Products",
    innerdeck: [
      {
        id: '01',
        chapter: "Live Animals",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '02',
        chapter: "Meat and Edible Meat Offal",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '03',
        chapter:
          "Fish and Crustaceans, Molluscs and other Aquatic Invertebrates",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '04',
        chapter:
          "Birds’ Eggs; Natural Honey; Edible Products of Animal Origin, not elsewhere specified or included",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '05',
        chapter:
          "Products of Animal Origin, Not Elsewhere Specified or Included",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 6-14 ) - Section II-Vegetable Products",
    innerdeck: [
      {
        id: '06',
        chapter:
          "Live Trees and other Plants; Bulb, Roots and the Like; Cut Flowers and Ornamental Foliage",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '07',
        chapter:
          "Vegetable seeds; Edible Vegetables and Certain Roots and Tubers",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '08',
        chapter: "Edible Fruit and Nuts; Peel of Citrus Fruit or Melons",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: '09',
        chapter: "Coffee, Tea, Mate and Spices",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 10,
        chapter: "Cereals",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 11,
        chapter:
          "Products of the Milling Industry; Malt; Starches; Inulin Wheat Gluten",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 12,
        chapter:
          "Oil Seeds and Oleaginous Fruits; Miscellaneous Grains, Seeds and Fruit; Industrial or Medicinal Plants; Straw and Fodder",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 13,
        chapter: "Lac; Gums, Resins and Other Vegetable Saps and Extracts",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 14,
        chapter:
          "Vegetable Plaiting Materials; Vegetable Products not Elsewhere Specified or Included",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 17,
        chapter: "Sugars and Sugar Confectionery",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 18,
        chapter: "Cocoa and Cocoa Preparations",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 19,
        chapter:
          "Preparations of Cereals, Flour, Starch or Milk; Pastrycooks’ Products",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 20,
        chapter:
          "Preparations of Vegetables, Fruit, Nuts or other Parts of Plants",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 21,
        chapter: "Miscellaneous Edible Preparations",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 22,
        chapter: "Beverages, Spirits and Vinegar",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 23,
        chapter:
          "Residues and Waste from the Food Industries; Prepared Animal Fodder",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 24,
        chapter: "Tobacco and Manufactures; Tobacco Substitutes",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 26,
        chapter: "Ores, Slag and Ash",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 27,
        chapter:
          "Mineral Fuels, Mineral Oils and Products of their Distillation; Bituminous Substances; Mineral Waxes",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 29,
        chapter: "Organic Chemicals",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 30,
        chapter: "Pharmaceutical Products",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 31,
        chapter: "Fertilisers",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 32,
        chapter:
          "Dyeing Extracts; Tannins and their Derivatives; Dyes, Pigments and other Colouring Matter; Paints and Varnishes; Putty and other Mastics; inks",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 33,
        chapter:
          "Essential Oils and Resinoids; Perfumery Cosmetic or Toilet Preparations",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 34,
        chapter:
          "Soap, Organic Surface- Active Agents, Washing Preparations, Lubricating Preparations, Artificial Waxes, Prepared Waxes, Polishing or Scouring Preparations, Candles and Similar Articles, Modelling Pastes, “Dental Waxes” and Dental Preparation",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 35,
        chapter: "Albuminoidal Substances; Modified Starches; Glues; Enzymes",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 36,
        chapter:
          "Explosives; Pyrotechnic Products; Matches; Pyrophoric Alloys; Certain Combustible Preparations",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 37,
        chapter: "Photographic or Cinematographic Goods",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 38,
        chapter: "Miscellaneous Chemical Products",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 40,
        chapter: "Rubber and Articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 42,
        chapter:
          "Articles of Leather; Saddlery and Harness; Travel Goods, Handbags and similar containers; Articles of Animal Gut (other than Silk-worm Gut)",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 43,
        chapter: "Furskins and Artificial Fur; Manufactures thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 45,
        chapter: "Cork and Articles of Cork",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 46,
        chapter:
          "Manufactures of Straw, of Esparto or of other Plaiting Materials; Basketware And Wickerwork",
        importdataurl: "/search",
        exportdataurl: "/search",
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
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 48,
        chapter:
          "Paper and Paperboard; Article of Paper Pulp, of Paper or of Paperboard Currency Paper (Water-mark Banknote Paper)",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 49,
        chapter:
          "Printed Books, Newspapers, Pictures and other Products of the Printing Industry; Manuscripts, Typescripts and Plans",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 50 -63 ) - Section XI-Textile and Textile Articles",
    innerdeck: [
      {
        id: 50,
        chapter:
          "Silk",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 51,
        chapter: "Wool, fine or coarse animal hair; horsehair yarn and woven fabric",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 52,
        chapter: "Cotton",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 53,
        chapter: "Other vegetable textile fibers; paper yarn and woven fabric of paper yarn",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 54,
        chapter:
          "Man-made filaments",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 55,
        chapter:
          "Man-made staple fibers",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 56,
        chapter:
          "Wadding, felt and nonwovens; special yarns, twine, cordage, ropes and cables and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 57,
        chapter: "Carpets and other textile floor coverings",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 58,
        chapter:
          "Special woven fabrics; tufted textile fabrics; lace, tapestries; trimmings; embroidery",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 59,
        chapter: "Impregnated, coated, covered or laminated textile fabrics; textile articles of a kind suitable for industrial use",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 60,
        chapter: "Knitted or crocheted fabrics",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 61,
        chapter: "Articles of apparel and clothing accessories, knitted or crocheted",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 62,
        chapter: "Articles of apparel and clothing accessories, not knitted or crocheted",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 63,
        chapter: "Other made up textile articles; sets; worn clothing and worn textile articles; rags",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
     
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 64 -67 ) - Section XII-Footwear, Headgear, Umbrellas, Sun Umbrellas, Walking Sticks, Seatsticks, Whips, Riding-Crops and Parts Thereof; Prepared Feathers and Articles Made Therewith; Artificial Flowers; Articles of Human Hair",
    innerdeck: [
      {
        id: 64,
        chapter:
          "Footwear, gaiters and the like; parts of such articles",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 65,
        chapter:
          "Headgear and parts thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 66,
        chapter:
          "Umbrellas, sun umbrellas, walking sticks, seatsticks, whips, riding-crops and parts thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 67,
        chapter:
          "Prepared feathers and down and articles made of feathers or of down; artificial flowers; articles of human hair",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 68 -70 ) - Section XIII-Articles of Stone, Plaster, Cement, Asbestos, Mica or Similar Materials; Ceramic Products; Glass and Glassware",
    innerdeck: [
      {
        id: 68,
        chapter:
          "Articles of stone, plaster, cement, asbestos, mica or similar materials",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 69,
        chapter:
          "Ceramic products",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 70,
        chapter:
          "Glass and glassware",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 71 ) - Section XIV-Natural or Cultured Pearls, Precious or Semiprecious Stones, Precious Metals, Metals Clad With Precious Metal, and Articles Thereof; Imitation Jewelry; Coin",
    innerdeck: [
      {
        id: 71,
        chapter:
          "Natural or cultured pearls, precious or semi-precious stones,precious metals, metals clad with precious metal and articles thereof; imitation jewelry; coin",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 72 -83 ) - Section XV-Base Metals and Articles of Base Metal",
    innerdeck: [
      {
        id: 72,
        chapter:
          "Iron and steel",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 73,
        chapter: "Articles of iron or steel",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 74,
        chapter: "Copper and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 75,
        chapter: "Nickel and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 76,
        chapter:
          "Aluminum and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 77,
        chapter:
          "(Reserved for possible future use)",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 78,
        chapter:
          "Lead and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 79,
        chapter: "Zinc and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 80,
        chapter:
          "Tin and articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 81,
        chapter: "Other base metals; cermets; articles thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 82,
        chapter: "Tools, implements, cutlery, spoons and forks, of base metal; parts thereof of base metal",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 83,
        chapter: "Miscellaneous articles of base metal",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 84 -85 ) - Section XVI-Machinery and Mechanical Appliances; Electrical Equipment; Parts Thereof; Sound Recorders and Reproducers, Television Image and Sound Recorders and Reproducers, and Parts and Accessories of Such Articles",
    innerdeck: [
      {
        id: 84,
        chapter:
          "Nuclear reactors, boilers, machinery and mechanical appliances; parts thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 85,
        chapter:
          "Electrical machinery and equipment and parts thereof; sound recorders and reproducers, television image and sound recorders and reproducers, and parts and accessories of such articles",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 86 -89 ) - Section XVII-Vehicles, Aircraft, Vessels and Associated Transport Equipment",
    innerdeck: [
      {
        id: 86,
        chapter:
          "Railway or tramway locomotives, rolling-stock and parts thereof; railway or tramway track fixtures and fittings and parts thereof; mechanical (including electro-mechanical) traffic signalling equipment of all kinds",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 87,
        chapter:
          "Vehicles other than railway or tramway rolling stock, and parts and accessories thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 88,
        chapter:
          "Aircraft, spacecraft, and parts thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 89,
        chapter:
          "Ships, boats and floating structures",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 90 -92 ) - Section XVIII-Optical, Photographic, Cinematographic, Measuring, Checking, Precision, Medical or Surgical Instruments and Apparatus; Clocks and Watches; Musical Instruments; Parts and Accessories Thereof",
    innerdeck: [
      {
        id: 90,
        chapter:
          "Optical, photographic, cinematographic, measuring, checking, precision, medical or surgical instruments and apparatus; parts and accessories thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 91,
        chapter:
          "Clocks and watches and parts thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 92,
        chapter:
          "Musical instruments; parts and accessories of such articles",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 93 ) - Section XIX-Arms and Ammunition; Parts and Accessories Thereof",
    innerdeck: [
      {
        id: 93,
        chapter:
          "Arms and ammunition; parts and accessories thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 94 -96 ) - Section XX-Miscellaneous Manufactured Articles",
    innerdeck: [
      {
        id: 94,
        chapter:
          "Furniture; bedding, mattresses, mattress supports, cushions and similar stuffed furnishings; lamps and lighting fittings, not elsewhere specified or included; illuminated sign illuminated nameplates and the like; prefabricated buildings",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 95,
        chapter:
          "Toys, games and sports requisites; parts and accessories thereof",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 96,
        chapter:
          "Miscellaneous manufactured articles",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 97) - Section XXI-Works of Art, Collectors' Pieces and Antiques",
    innerdeck: [
      {
        id: 97,
        chapter:
          "Works of art, collectors' pieces and antiques",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
  {
    headingChapter:
      "HS Codes for (Chapter 98 - 99) - Section XXII-Special Classification Provisions; Temporary Legislation; Temporary Modifications Proclaimed pursuant to Trade Agreements Legislation; Additional Import Restrictions Proclaimed Pursuant to Section 22 of the Agricultural Adjustment Act, As Amended",
    innerdeck: [
      {
        id: 98,
        chapter:
          "Special classification provisions",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
      {
        id: 99,
        chapter:
          "Temporary legislation; temporary modifications proclaimed pursuant to trade agreements legislation; additional import restrictions proclaimed pursuant to section 22 of the Agricultural Adjustment Act, as amended",
        importdataurl: "/search",
        exportdataurl: "/search",
      },
    ],
  },
];

//const page = () => {

  const ClientPage =  () => {
    const router = useRouter();
      //const [data, setData] = useState({ table1: [], chapterList: [] });

const [activeIndex, setActiveIndex] = useState(0);

const handleToggle = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
};

const hs_search_click = (code, type) => {

  
  const countrySlug = 'usa';
  const typeSlug = type;
  const combinedText = `hs-${code}`;

  // const encodedText = code 
  //   ? encodeURIComponent(btoa(combinedText))
  //   : null;

  const url = `/search/${countrySlug}/${typeSlug}/${combinedText}`
    // : `/search/${countrySlug}/${typeSlug}`;

  router.push(url);
};


  {/*UuseEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('hsn-code-list-india/api/getData'); // ✅ correct path
        alert(JSON.stringify(res));
        if (!res.ok) throw new Error(error);

        const json = await res.json(); // ✅ expects JSON
        setData(json);
        alert(JSON.stringify(json));
        alert(JSON.stringify(json.table1, null, 2));
      alert( JSON.stringify(json.chapterList, null, 2));
        //alert('Data fetched successfully');
      } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data' + error);
      }
    };

    fetchData();
  }, []);*/}



 

  return (
    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-br from-orange-100 via-white to-green-100 bg-gradient-45 bg-opacity-50">
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-28 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
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
          It is essential for companies that undertake international import-export trade records 
          to understand global trade patterns, and they can do this by having an accurate 
          import-export database at hand. Our platform ensures you get comprehensive customs 
          data from the United States and 200+ countries, allowing you to gain important 
          insights into the movement of goods across borders.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <h2 className="mx-auto mb-2 text-balance text-2xl md:text-4xl font-bold leading-tight">
                What We Offer: Trade Records
              </h2>
              <p className="text-base text-gray-700 text-justify md:text-start">
              Access accurate and timely import-export records from the USA customs data. 
              Our database features extensive product and industry coverage across electronics, 
              machinery, chemicals, textiles, and beyond. Drill into the details of what products
               are being traded globally in the export and import reports, as well as in-depth
                details of leading exporters and importers in each industry. Our system offers
                 HTS/HS Codes for exact classifications of merchandise. This facilitates 
                 companies to categorize products by world trade record standards and maintains 
                 compliance with the US customs reports regulations.
              </p>
              <h2 className="mx-auto my-4 text-balance text-2xl font-bold leading-tight">
              ITC HS Code classification code system in USA Trade Analytics and Trends
              </h2>
              <p className="text-base text-gray-700 text-justify md:text-start">
              ITC-HS Codes (Harmonized System codes) for exact classifications of merchandise.
               Be at the forefront with in-depth trade analytics that enable you to monitor
                seasonal trends, market demand, and the most active trade lanes. Our information 
                enables you to make informed decisions, whether you are keen to discover
                 new export markets or tackle supply chain issues. Customs record information 
                 allows companies to detect lucrative international import-export trade opportunities
                  and do business with good suppliers and buyers. There are two schedules assigned under the
                USA HSN Classification Code List namely - Schedule (I) and
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
            <div className="order-1 md:order-2 mb-3 md:mb-0">
              <img
                src="/images/12-HSN-1.webp"
                className="w-4/5 mx-auto"
                alt="HSN Code"
                title="HSN Code"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 mybg">
        <div className="container mx-auto px-4 md:px-0">
          <h3 className="text-primary text-lg text-gray-400 font-medium">
            How does the ITC HS Code Classification System work in USA?
          </h3>
          <h2 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2">
            HSN Code - ITC HS Classification - CTH Code work system in USA!
          </h2>
          <p className="text-base text-gray-700">
            USA HSN Code List includes 21 sections, 99 chapters, and 1244
            headings followed by 5222 subheadings. Based on these chapters,
            headings, and subheadings, a product HSN Code is determined. Various
            Sections for product classification in the List of hsn code in USA
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
                          <button
                            className="text-sm px-2 py-[2px] bg-blue-500 rounded-md text-nowrap text-white"
                            onClick={() => hs_search_click(deck.id, 'import')}
                          >
                            Global Import Data
                          </button>
                          <button
                            className="text-sm px-2 py-[2px] bg-blue-500 rounded-md text-nowrap text-white"
                            onClick={() => hs_search_click(deck.id, 'export')}
                          >
                            Global Export Data
                          </button>
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
          Global HSN Code Structure | HSN Code Method in the United States
          </h2>
          <p className="text-base text-gray-700 mb-3">
          The HSN Code (Harmonized System of Nomenclature) is an international import-export trade 
          classification system in global trade to classify merchandise. Formulated and upgraded
           by the World Customs Organization (WCO), the HSN codes help all nations globally classify 
           their goods in the same way to enhance ease in trading and customs clearing, as well 
           as calculating tariffs. Classified with a range of numerical codes, its first 
           and basic classification level consists of 6-digit numbers, although more digits are 
           utilized by nations if necessary for subdivision. The HTS expands the 6-digit HSN 
           classification to a 10-digit code, offering more detailed product classifications
            for the USA market, especially for import and export.
          </p>
          <p className="text-base text-gray-700 mb-2">
            Understanding the General Structure of USA HS Code System with an
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
          Finding the Right HSN Code: A Simple Guide for USA Businesses
          </h2>
          <p className="text-base text-gray-700 mb-3">
          For USA businesses involved in international import-export trade recording business, 
          identifying the correct classification code for your products is essential. 
          While the Harmonized System (HSN) Code is used globally for product classification,
           the United States follows a similar but extended system called the Harmonized Tariff Schedule (HTS).
           The HTS code helps determine the applicable tariffs and taxes, and customs regulations for your products.
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
                Download HSN Code list of USA
              </h4>
              <p className="text-base text-gray-700 mb-3">
                Get detailed ITC HSN Code List of USA in Excel and PDF Format
                by just clicking the download button below.
              </p>
              <div className="flex mt-4 gap-4">
                <a
                  href={`https://gtdservice.com/files/HSN%20Code%20List%20of%20India.pdf`}
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Download PDF→
                  </span>
                </a>
                <a
                  href={`https://gtdservice.com/files/HSN%20Code%20List.xlsx`}
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-500 flex items-center shadow-lg shadow-blue-400 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Download Excel→
                  </span>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 mb-6 md:mb-0">
              <img src="/images/13-HSN-2.webp" alt="HS Code" title="HS Code" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientPage;
