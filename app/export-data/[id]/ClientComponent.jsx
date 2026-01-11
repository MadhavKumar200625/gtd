'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import React from "react";
import Slider from "react-slick";
import CTA from "../../common/CTA";
import Clients from "../../common/Clients";
import FAQ_Country from "../../common/FAQ_Country";
import "flag-icons/css/flag-icons.min.css";
import dynamic from 'next/dynamic';


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });


export default function ClientComponent({ id }) {
  const [majorData, setMajorData] = useState({
    series: [
      {
        name: "{`${country}`} Top 10 Major Imports",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
      },
    ],
    options: {
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "US Top 10 Major Imports",
        },
        labels: {
          formatter: function (value) {
            return (value / 1e6).toFixed(1) + "M";
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  });
  const [chartKey, setChartKey] = useState(0);
  const [partners, setPartners] = React.useState({
    series: [],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: '100%',
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ]
    },
  });


  const [data, setData] = useState({ table1: [], table2: [], table3: [], table4: [] });

  const [data1, setData1] = useState({ table1: []});

  function parseValue(value) {
    if (typeof value === 'string') {
      const upperValue = value.toUpperCase().trim();
      if (upperValue.endsWith('B')) {
        return parseFloat(upperValue) * 1000; // Convert billions to millions
      } else if (upperValue.endsWith('M')) {
        return parseFloat(upperValue); // Already in millions
      } else {
        return parseFloat(upperValue); // Assume it's a plain number
      }
    }
    return value; // If it's already a number
  }

  const top10Products = [...(data.table3 || [])]
  .sort((a, b) => parseValue(b.value) - parseValue(a.value))
  .slice(0, 10);

// Total of top 10 values
const totalTop10Export = top10Products.reduce((sum, item) => sum + parseValue(item.value), 0);

// Get total export from table1
const totalExportValue = parseValue(data?.table1?.[0]?.totalvalues) || 1;

// Enrich product data with percent
const productsWithPercent = top10Products.map(item => {
  const numericValue = parseValue(item.value);
  const percent = ((numericValue * 100) / totalTop10Export).toFixed(1);
  return {
    name: item.name,
    value: item.value,
    numericValue,
    percent,
  };
});


const top10Partners = [...(data.table2 || [])]
  .sort((a, b) => parseValue(b.value) - parseValue(a.value))
  .slice(0, 10);

const totalTop10PartnerValue = top10Partners.reduce(
  (sum, item) => sum + parseValue(item.value),
  0
);

const partnersWithPercent = top10Partners.map(item => {
  const numericValue = parseValue(item.value);
  const percent = ((numericValue * 100) / totalTop10PartnerValue).toFixed(1);
  return {
    name: item.name,
    value: item.value,
    numericValue,
    percent,
  };
});



  const country = id
    ? id
      .replaceAll('_', ' ')
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    : '';


   

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`./api/getData?country=${encodeURIComponent(country)}`);

      const json = await res.json();
      const barCategories = json.table3.map(item => item.name);
      const barData = json.table3.map(item => parseValue(item.value));

      // Process data for the donut chart
      const donutLabels = json.table2.map(item => item.name);
      const donutData = json.table2.map(item => parseValue(item.value));
      //alert(JSON.stringify(donutLabels));
      //alert(JSON.stringify(donutData));
      setMajorData(prevState => ({
        ...prevState,
        series: [{ name: `${country} Top 10 Major Exports`, data: barData }],
        options: {
          ...prevState.options,
          xaxis: {
            ...prevState.options.xaxis,
            categories: barCategories,
          },
          yaxis: {
            ...prevState.options.yaxis,
            title: {
              text: `${country} Top 10 Major Exports`,
            },
          },
        },
      }));

      // Inside useEffect > fetchData()
setPartners(prevState => ({
  ...prevState,
  series: donutData,
  options: {
    ...prevState.options,
    labels: donutLabels,
  },
}));

setChartKey(prev => prev + 1); // ✅ now donutData is already defined

      setData(json);
      //alert(JSON.stringify(json));
    }

    async function fetchData1() {
      const res1 = await fetch(`./api/getData1?country=${encodeURIComponent(country)}`);

      const json1 = await res1.json();
      const barCategories = json1.table1.map(item => item.name);
      

      setData1(json1);
      //alert(JSON.stringify(json1));
    }

    fetchData();
    fetchData1();
  }, [country]);

  

  const sampleDta = [
    {
      name: "Covers 99 Chapters",
      icons: "../../images/icons/HS_Code.png",
    },
    {
      name: "US Export Data Country Wise",
      icons: "../../images/icons/shipment.png",
    },
    {
      name: "Historical US Export Data Year Wise",
      icons: "../../images/icons/consignment.png",
    },
    {
      name: "List Of Exporters In US",
      icons: "../../images/icons/Items.png",
    },
    {
      name: "US Export Products List",
      icons: "../../images/icons/import_data.png",
    },
    {
      name: "US Ports Exports Data",
      icons: "../../images/icons/Ports_Data.png",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (

    <>
      <section className="flex items-center overflow-hidden relative bg-gradient-to-t from-white to-sky-100 bg-gradient-45 bg-opacity-50">
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
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
                  {/* Home {JSON.stringify(data.table1[0].totalvalues, null, 2)}  */}
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
                    {`${country}`} Export Data
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="my-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl lg:text-4xl">
            {/* Find the Latest {`${country}`} Export Customs Shipment Trade Data */}
            {data1?.table1?.[0]?.section1 ?? "Loading data..."}
          </h1>
          <p className="mb-2 text-justify text-base font-normal text-dark">
            {`${country}`}'s export data depicts rapid growth in the country's overall exports this past year.
            {`${country}`}'s export performance in recent years has shown significant growth.
            According to the National Statistical Committee of {`${country}`}, the country's Exports in 2024
            recorded an increase in comparison to 2023. These figures suggest that the previous
            estimate of {data?.table1?.[0]?.totalvalues ?? "Loading data..."} billion for {`${country}`}'s exports in
            FY 2025 may be outdated or based on earlier data. The maximum product-wise {`${country}`} exports
            to Russia, China, European Union (EU), United Arab Emirates (UAE), and Switzerland
            accounted for the largest volume of {`${country}`} exports by country.
            {`${country}`} export companies can gain quality leads through global market intelligence reports.
          </p> 
          {/* <p className="mb-2 text-justify text-base font-normal text-dark">
          {data1?.table1?.[0]?.section2 ?? "Loading data..."}
          </p> */}
          <span className="mt-6 inline-block py-1 px-2 md:px-4 mb-3 text-xs md:text-base shadow-md rounded-xl bg-emerald-400 text-white">
            Get historical or the latest {`${country}`} Import Export Data, {`${country}`} export data for 2025,
            product-wise {`${country}`} export statistics, {`${country}`} exporters list, global buyers and
            suppliers list, and port volume reports.
          </span>
          {/* <span className="mt-6 inline-block py-1 px-2 md:px-4 mb-3 text-xs md:text-base shadow-md rounded-xl bg-emerald-400 text-white">
          {data1?.table1?.[0]?.section3 ?? "Loading data..."}
          </span> */}
          <div className="flex mt-5 gap-3">
            <a
              href="/pricing"
              className="rounded-xl px-5 py-4 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Online Data
              </span>
            </a>
            <a
              href="/contact"
              className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
            >
              <span className=" text-white text-sm whitespace-nowrap">
                Offline Data
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------countries start-------------- */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto">
          <div className="myshadow rounded-xl p-5 bg-[#f6f9fc] mx-4 md:mx-0">
            <div className="">
              <h2 className="mx-auto text-center mb-2 text-balance text-2xl font-bold leading-snug my-2">
                Data available for 200+ other countries
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-5">
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                  <h6 className="uppercase text-lg font-semibold">Asia</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-in block text-xl rounded-md"></span>
                      </div>
                      <p>India</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-cn block text-xl rounded-md"></span>
                      </div>
                      <p>China</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-jp block text-xl rounded-md"></span>
                      </div>
                      <p>Japan</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-tr block text-xl rounded-md"></span>
                      </div>
                      <p>Turkey</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-kr block text-xl rounded-md"></span>
                      </div>
                      <p>South Korea</p>
                    </li>
                  </ul>
                </div>
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                  <h6 className="uppercase text-lg font-semibold">AFRICA</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-td block text-xl rounded-md"></span>
                      </div>
                      <p>Chad</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-gh block text-xl rounded-md"></span>
                      </div>
                      <p>Ghana</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-ke block text-xl rounded-md"></span>
                      </div>
                      <p>kenya</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-tz block text-xl rounded-md"></span>
                      </div>
                      <p>Tanzania</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-za block text-xl rounded-md"></span>
                      </div>
                      <p>South Africa</p>
                    </li>
                  </ul>
                </div>
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                  <h6 className="uppercase text-lg font-semibold">EUROPE</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-gb block text-xl rounded-md"></span>
                      </div>
                      <p>UK</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-es block text-xl rounded-md"></span>
                      </div>
                      <p>Spain</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-ru block text-xl rounded-md"></span>
                      </div>
                      <p>Russia</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-nl block text-xl rounded-md"></span>
                      </div>
                      <p>Netherlands</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-de block text-xl rounded-md"></span>
                      </div>
                      <p>Germany</p>
                    </li>
                  </ul>
                </div>
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl">
                  <h6 className="uppercase text-lg font-semibold">AMERICA</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-us block text-xl rounded-md"></span>
                      </div>
                      <p>US</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-mx block text-xl rounded-md"></span>
                      </div>
                      <p> Mexico</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-ar block text-xl rounded-md"></span>
                      </div>
                      <p>Argentina</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-ca block text-xl rounded-md"></span>
                      </div>
                      <p>Canada</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-br block text-xl rounded-md"></span>
                      </div>
                      <p>Brazil</p>
                    </li>
                  </ul>
                </div>
                <div className="p-3 border bg-gradient-to-br from-indigo-50 to-pink-50 via-blue-50 rounded-xl col-span-2 md:col-span-1">
                  <h6 className="uppercase text-lg font-semibold">OCEANIA</h6>
                  <ul className="mt-3">
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-fj block text-xl rounded-md"></span>
                      </div>
                      <p>Fiji</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-au block text-xl rounded-md"></span>
                      </div>
                      <p>Australia</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1">
                      <div className="block">
                        <span className="fi fi-nz block text-xl rounded-md"></span>
                      </div>
                      <p>New Zealand</p>
                    </li>
                    <li className="flex items-center gap-2 mb-1 p-2 bg-white rounded-md">
                      <div className="block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p>Many more...</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex">
              <a
                href="/contact"
                className="rounded-xl mx-auto mt-4 px-5 py-2 mybtn font-semibold linerotate flex items-center group shadow-lg shadow-gray-600 hover:shadow-md ease-in transition-shadow"
              >
                <span className=" text-white text-sm">Get Free trail</span>
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
        </div>
      </section>
      {/* ---------countries end-------------- */}

      <section className="py-20 bg-blue-950">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`} Export Bill of Lading data
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-white">
                What Does {`${country}`}'s Export Data Include?
              </h3>
              <p className="text-base text-white mb-3">
                Our {`${country}`} export data contains all the essential information that could help
                you spot verified buyers from the global trade data market. You can find the
                top exports of {`${country}`} by HS code (Harmonized System), price, country, port of
                export, mode of transport, quantity, units, FOB value (free on board), currency,
                customs clearance, and shipments for analysis.
              </p>
              {/* <p className="text-base text-white mb-3">
                Our {`${country}`} bill of lading database helps companies find {`${country}`} top
                Exports by country, {`${country}`} Exporters, foreign buyers details, ports
                container volumes, and other essential information.
              </p> */}
              <p className='text-base text-white mb-3'>
              {data1?.table1?.[0]?.section5 ?? "Loading data..."}
              </p>
              <Slider {...settings}>
                {sampleDta.map((item, index) => (
                  <div key={index}>
                    <div className="p-3 md:me-5 rounded-xl bg-white shadow-xl border border-gray-200">
                      <div className="p-3 rounded-lg bg-gray-50 min-h-[170px]">
                        <div className="flex items-center gap-3">
                          <img
                            src={item.icons}
                            className="size-14 mb-3"
                            alt=""
                          />
                        </div>
                        <h4 className="text-xl font-bold text-black mb-3">
                          {item.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* ---------------------------------------------------------- */}
            <div>
              {/* <p className="text-base text-white">
                We have 100% authentic details based on {`${country}`} export customs data and shipment data.
                You can opt for online and offline or customized plans at a reasonable price.
                You could find information on sample export data of {`${country}`} by HS code, product,
                quantity, unit, value, country of origin-destination, supplier name, buyer name,
                port of loading-unloading, and other shipping details etc.
              </p> */}
              <p className='text-base text-white'>
              {data1?.table1?.[0]?.section4 ?? "Loading data..."}
              </p>
              <div className="flex mt-5 gap-3">
                <a
                  href={`https://gtdservice.com/files/${country.replaceAll(' ', '-')}-export-data-sample-2022-23.xlsx`}
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Download Full Sample
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
              <div className="relative overflow-x-auto sm:rounded-lg mt-10 bg-white">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <tbody>
                    <tr className="border-b border-gray-200 bg-emerald-400">
                      <th
                        scope="row"
                        className="p-2 font-medium text-white whitespace-nowrap"
                      >
                        Field Name
                      </th>
                      <td className="p-2 font-medium text-white whitespace-nowrap text-center">
                        Detail
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Date :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        12/06/23
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        HS Code :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        123567
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Product Details
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        Liquified Natural Gas (170349 Cbm/74851.351 Mts)
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Quantity :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        2752.75
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Quantity Unit :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">MBT</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Value($) :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        45017988.1
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Country of Origin :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        Singapore
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Country of Destination :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        India
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        Supplier Name :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        *****
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ------------------------------major Exports---------------------------- */}
      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`}  Top 10 Major Exports
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                What does {`${country}`} export?
              </h3>
              <p className="text-base text-gray-700 mb-3">
                As per {`${country}`}'s export shipment data, {productsWithPercent?.[0]?.name} was the top exports
                by {`${country}`} in FY 2024. In terms of export value, {`${country}`}’s top 10 product
                exports were:{" "} {productsWithPercent.map((item, idx) => {
    const isBillion = item.numericValue >= 1000;
    const formattedValue = isBillion
      ? `$${(item.numericValue / 1000).toFixed(2)} billion`
      : `$${item.numericValue.toFixed(2)} million`;
    return (
      <span key={item.name}>
        {item.name}: {formattedValue} 
        {idx < productsWithPercent.length - 1 ? ", " : "."}
      </span>
    );
  })}
              </p>
              <p className="text-base text-gray-700 mb-3">
                The total export value for {`${country}`}'s top 10 export commodities was recorded
                to be  ${ (totalTop10Export / 1000).toFixed(3) } billion, accounting for{" "}
                { ((totalTop10Export * 100) / totalExportValue).toFixed(2) }% of {country}'s total
                exports during FY 2024. Here, we have provided detailed insights into
                {`${country}`}'s exports by percentage.
              </p>
              <div className="flex">
                <a
                  href="/global-products"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get {`${country}`} Exports Products Data 2024
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
            <div>
              {/*<MajorImportsChart />*/}
              <div id="chart">
                <ReactApexChart
                  options={majorData.options}
                  series={majorData.series}
                  type="bar"
                  height="500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------major imports ends---------------------------- */}

      {/* ------------------------------partners---------------------------- */}
      <section className="py-20 bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              {/*<Partners />*/}
              <div id="chart">
              <ReactApexChart
  key={chartKey}
  options={partners.options}
  series={partners.series}
  type="donut"
/>
              </div>
              <div id="html-dist"></div>
            </div>
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`} Top 10 Import Partners
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                Who Does {`${country}`} Export To?
              </h3>
              <p className="text-base text-gray-700 mb-3">
              According to trade data, {partnersWithPercent?.[0]?.name} was the leading importer of goods from {`${country}`} during FY 2024.
                Export value-wise,
                {partnersWithPercent.map((item, idx) => {
    const isBillion = item.numericValue >= 1000;
    const formattedValue = isBillion
      ? `$${(item.numericValue / 1000).toFixed(2)} billion`
      : `$${item.numericValue.toFixed(2)} million`;
    return (
      <span key={item.name}>
        {item.name}: {formattedValue}
        {idx < partnersWithPercent.length - 1 ? ", " : "."}
      </span>
    );
  })} {/*Russia, the United Arab Emirates,
                China, Switzerland, Iraq, the Netherlands, Bulgaria, Georgia, Iran, and Germany*/}.
              </p>
              <p className="text-base text-gray-700 mb-3">
                The top 10 export partners of {`${country}`} had imported around ${(totalTop10PartnerValue / 1000).toFixed(3)} billion, worth of
                goods, with a total export share of {((totalTop10PartnerValue * 100) / totalExportValue).toFixed(2)}% during 2024. Here, we shared the chart
                indicating the main export partners of {`${country}`} for better understanding.
                You can also ask for the year-wise {`${country}`} export data by country.
              </p>
              <div className="flex">
                <a
                  href="/search-global-trade-data"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get Country Wise Report
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
          </div>
        </div>
      </section>

      {/* ------------------------------partners ends---------------------------- */}

      {/* -----------------------------------importer and ports------------------------------- */}
      <section className="py-20 dotbg">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                Top Importers in {`${country}`}
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                {`${country}`} Buyers List
              </h3>
              <div className="p-3 rounded-xl backdrop-blur-sm bg-white mt-4 border">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <li className="p-3 bg-pink-50 rounded-md">Ikea Supply AG</li>
                  <li className="p-3 bg-pink-50 rounded-md">
                    Global Etrade Services INC
                  </li>
                  <li className="p-3 bg-pink-50 rounded-md">
                    Dole Fresh Fruit Company
                  </li>
                  <li className="p-3 bg-pink-50 rounded-md">
                    LG Electronics USA
                  </li>
                  <li className="p-3 bg-pink-50 rounded-md">
                    Samsung Electronics America INC
                  </li>
                  <li className="p-3 bg-pink-50 rounded-md">Walmart INC</li>
                  <li className="p-3 bg-pink-50 rounded-md">Old Navy LLC</li>
                  <li className="p-3 bg-pink-50 rounded-md">Tesla INC</li>
                  <li className="p-3 bg-pink-50 rounded-md">
                    RTG Furniture Corp
                  </li>
                  <li className="p-3 bg-pink-50 rounded-md">Itourscm INC</li>
                </ul>
              </div>
              <div className="flex mt-4">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Find Global Buyers Details
                  </span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                Top Ports in USA
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                US Ports List
              </h3>
              <div className="p-3 rounded-xl backdrop-blur-sm bg-white mt-4 border">
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  <li className="p-3 bg-pink-50 rounded-md">Los Angeles </li>
                  <li className="p-3 bg-pink-50 rounded-md">Long Beach</li>
                  <li className="p-3 bg-pink-50 rounded-md">New York </li>
                  <li className="p-3 bg-pink-50 rounded-md">Savannah </li>
                  <li className="p-3 bg-pink-50 rounded-md">Houston </li>
                  <li className="p-3 bg-pink-50 rounded-md">Norfolk </li>
                  <li className="p-3 bg-pink-50 rounded-md">Charleston </li>
                  <li className="p-3 bg-pink-50 rounded-md"> Tacoma </li>
                  <li className="p-3 bg-pink-50 rounded-md">Seattle </li>
                  <li className="p-3 bg-pink-50 rounded-md">Miami </li>
                </ul>
              </div>
              <div className="flex mt-4">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-blue-700 text-white shadow-lg shadow-blue-500 hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Search US Port Container Data
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -----------------------------------importer and ports------------------------------- */}

      <Clients />

      <section className="py-20 bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="/images/CountryPage.webp" className="w-full" alt="" />
            </div>
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                GTd Service Global Trade Intelligence System
              </h4>
              <h3 className="mx-auto mb-2 text-4xl font-bold leading-snug my-2 text-black">
                {/* Make an impact in the global market */}
                {data1?.table1?.[0]?.section6 ?? "Loading data..."}
              </h3>
              <ul className="my-3 pt-3 list-inside list-disc">
                {/* <li>Explore 200+ markets</li>
                <li>Gain an edge with market trends</li>
                <li>Track your competitors' shipments</li>
                <li>Find verified Global buyers</li>
                <li>Get quality business leads</li>
                <li>Reduce cost and raise your ROI</li> */}
                {data1?.table1?.[0]?.section7 ?? "Loading data..."}
              </ul>
              <div className="flex">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get Free Trial
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
          </div>

          <div className="p-4 rounded-3xl text-center bg-white mt-10">
            <h4 className="py-1 px-3 rounded-full bg-emerald-500 text-white inline-block">
              Some Important Links Related to {`${country}`} Import Data
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-4 text-start gap-3 mt-5">
              <li>
                <a
                  href={`/search/${country.toLowerCase()}/import`}
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {`${country}`} Import Data
                </a>{" "}
              </li>
              <li>
                <a
                  href={`/search/${country.toLowerCase()}/export`}
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {`${country}`} Export Data
                </a>
              </li>
              <li>
                <a
                  href="/global-products"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {`${country}`} Import Products
                </a>
              </li>
              <li>
                <a
                  href="/global-ports"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Global Ports Volume Reports
                </a>
              </li>
              <li>
                <a
                  href="/global-companies-list"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Global Companies List
                </a>
              </li>
              <li>
                <a
                  href="/import-export-data-country-wise"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Country wise trade data
                </a>
              </li>
              <li>
                <a
                  href={`/search/${country.toLowerCase()}/import`}
                  className="text-dark text-decoration-underline flex items-center"
                  download=""
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {`${country}`} Import Sample
                </a>
              </li>
              <li>
                <a
                  href={`/search/${country.toLowerCase()}/export`}
                  className="text-dark text-decoration-underline flex items-center"
                  download=""
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {`${country}`} Export Sample
                </a>
              </li>
              <li>
                <a
                  href="/api-development-and-integration-company"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Global Trade API
                </a>
              </li>
              <li>
                <a
                  href="/Linkfrican-countries-import-export-data"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  African Countries Data
                </a>
              </li>
              <li>
                <a
                  href="/import-export-data-country-wise"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Asian Countries Data
                </a>
              </li>
              <li>
                <a
                  href="/import-export-data-country-wise"
                  className="text-dark text-decoration-underline flex items-center"
                >
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
                    className="lucide lucide-chevron-right ml-1 stroke-emerald-500  size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  Plans &amp; Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-5 bg-blue-950">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div>
              <img src="/images/integration.png" className="w-full" alt="" />
            </div>
            <div className="col-span-2">
              <h3 className="mx-auto mb-2 text-4xl font-bold leading-snug my-2 text-white">
                Find What {`${country}`} Imports from Other Countries?
              </h3>
              <div className="flex md:flex-nowrap flex-wrap gap-3">
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-white text-black hover:bg-blue-700 hover:text-white hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className="text-sm whitespace-nowrap">China</span>
                </a>
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-white text-black hover:bg-blue-700 hover:text-white hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className="text-sm whitespace-nowrap">Vietnam</span>
                </a>
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-white text-black hover:bg-blue-700 hover:text-white hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className="text-sm whitespace-nowrap">Mexico</span>
                </a>
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-white text-black hover:bg-blue-700 hover:text-white hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className="text-sm whitespace-nowrap">Europe</span>
                </a>
                <a
                  href="/contact"
                  className="rounded-xl px-5 py-3 mybtn font-semibold bg-white text-black hover:bg-blue-700 hover:text-white hover:shadow-md ease-in transition-shadow flex items-center group"
                >
                  <span className="text-sm whitespace-nowrap">Africa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      
      <FAQ_Country id = {country}/>



      <div>

        {/*       
       <h1>Dynamic Page ID: {id}</h1>
      
      <h2>Table 1</h2>
      <pre>{JSON.stringify(data.table1[0], null, 2)}</pre>

      <h2>Table 2</h2>
      <pre>{JSON.stringify(data.table2, null, 2)}</pre> */}
      </div>

    </>
  );
}


//export default page;

{/*const MajorImportsChart = () => {
  const [majorData, setMajorData] = React.useState({
    series: [
      {
        name: "{`${country}`} Top 10 Major Imports",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
      },
    ],
    options: {
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#775DD0",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "50%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 0,
      },
      grid: {
        row: {
          colors: ["#fff", "#f2f2f2"],
        },
      },
      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas",
        ],
        tickPlacement: "on",
      },
      yaxis: {
        title: {
          text: "US Top 10 Major Imports",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  });
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={majorData.options}
          series={majorData.series}
          type="bar"
          height="500"
        />
      </div>
    </div>
  );
};*/}

{/*export const Partners = () => {
  const [partners, setPartners] = React.useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={partners.options}
          series={partners.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};*/}
