import { fetchCountryData } from '@/lib/api';
import { getPageMeta_import } from '@/lib/api';
import Charts from './components/Charts';
import Slider from './components/Slider';
import Clients from "../../common/Clients";
import CTA from "../../common/CTA";
import FAQ_Country from "../../common/FAQ_Country";
import Link from "next/link";
import "flag-icons/css/flag-icons.min.css";


export async function generateMetadata({ params }) {
  const { id } = await params;
  
  const countryName = formatCountryName(id);

  const meta = await getPageMeta_import(id);
  
    const title = meta?.meta_title || `${countryName} - Import Data | ${countryName} Trade Data Online - GTD Service`;
    const description = meta?.meta_description || `We provide both online and offline ${countryName} import data access to our customers.`;
  

  //const title = `${countryName} - Import Data | ${countryName} Trade Data Online - GTD Service`;
  //const description = `We provide both online and offline ${countryName} import data access to our customers.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://gtdservice.com/import-data/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://gtdservice.com/import-data/${id}`,
      siteName: 'GTD Service',
      type: 'website',
      images: [{ url: 'https://gtdservice.com/images/logo.svg', alt: 'Global Trade Data' }],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      site: '@gtdservice',
      creator: '@gtdservice',
      images: ['https://gtdservice.com/images/logo.svg'],
    },
  };
}

function formatCountryName(id) {
  if (!id) return '';
  return id
    .replaceAll('_', ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function parseValue(value) {
  if (typeof value === 'string') {
    const upperValue = value.toUpperCase().trim();
    if (upperValue.endsWith('B')) {
      return parseFloat(upperValue) * 1000;
    } else if (upperValue.endsWith('M')) {
      return parseFloat(upperValue);
    }
    return parseFloat(upperValue);
  }
  return value;
}

export default async function Page({ params }) {
  params = await params
  const country = formatCountryName(params.id);
  const data = await fetchCountryData(country);
  const meta = await getPageMeta_import(country);
  function parseValue(value) {
    if (!value) return 0;
    const upperValue = value.toUpperCase().trim();
    if (upperValue.endsWith('B')) return parseFloat(upperValue) * 1000;
    if (upperValue.endsWith('M')) return parseFloat(upperValue);
    return parseFloat(upperValue);
  }
  
  // Top 10 products
  const top10Products = [...(data.table3 || [])]
    .sort((a, b) => parseValue(b.value) - parseValue(a.value))
    .slice(0, 10);
  
  const totalTop10ProductValue = top10Products.reduce(
    (sum, item) => sum + parseValue(item.value),
    0
  );
  
  const totalImportValue = parseValue(data?.table1?.[0]?.totalvalues) || 1;
  
  const productsWithPercent = top10Products.map(item => {
    const numericValue = parseValue(item.value);
    const percent = ((numericValue * 100) / totalTop10ProductValue).toFixed(1);
    return {
      ...item,
      numericValue,
      percent,
    };
  });
  
  // Top 10 partners
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
      ...item,
      numericValue,
      percent,
    };
  });

  // Process data for charts
  const barCategories = data.table3.map(item => item.name);
  const barData = data.table3.map(item => parseValue(item.value));
  const donutLabels = data.table2.map(item => item.name);
  const donutData = data.table2.map(item => parseValue(item.value));

  const majorData = {
    series: [{ name: `${country} Top 10 Major Imports`, data: barData }],
    options: {
      chart: { height: 350, type: "bar" },
      plotOptions: { bar: { borderRadius: 10, columnWidth: "50%" } },
      dataLabels: { enabled: false },
      stroke: { width: 0 },
      grid: { row: { colors: ["#fff", "#f2f2f2"] } },
      xaxis: { 
        labels: { rotate: -45 },
        categories: barCategories,
        tickPlacement: "on"
      },
      yaxis: { title: { text: `${country} Top 10 Major Imports` } },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          inverseColors: true,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [50, 0, 100],
        },
      },
    },
  };

  const partners = {
    series: donutData,
    options: {
      chart: { type: "donut" },
      labels: donutLabels,
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: '100%' },
          legend: { position: "bottom" },
        },
      }],
    },
  };

  const sampleDta = [
    { name: "Covers 99 Chapters", icons: "/images/icons/HS_Code.png" },
    { name: "US Import Data Country Wise", icons: "/images/icons/shipment.png" },
    // ... other items
  ];

  return (
    <>
      {/* Breadcrumb Section */}
      <section className="flex items-center overflow-hidden relative bg-gradient-to-t from-white to-sky-100 bg-gradient-45 bg-opacity-50">
        <div className="py-8 mx-auto container px-3 lg:pt-16 lg:pb-10 z-10 relative">
          <nav className="flex pt-20" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
                  {/* Home icon */}
                  Home
                </a>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  {/* Chevron icon */}
                  <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2">
                    {`${country}`} Import Data
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="my-4 text-3xl font-bold tracking-tight leading-none text-dark md:text-3xl lg:text-4xl">
            {/* Find the Latest {`${country}`} Import Customs Shipment Trade Data */}
            {meta && meta.section1 ? "Loading...":"not found"}
          </h1>
          <p className="mb-2 text-justify text-base font-normal text-dark">
            {`${country}`}'s import data shows that, overall, {`${country}`}'s imports declined this year.
            {`${country}`}'s export figures have experienced significant growth over recent years.
            Here's a summary based on available data for 2024. 2023 Approximately marking a {data?.table1?.[0]?.totalvalues ?? "Loading data..."} {" "}
            increase from 2024. Recent reports indicate a decline in trade turnover.
            In January 2025, {`${country}`}'s trade turnover with CIS countries experienced a significant decline, 
            reflecting a sharp year-over-year decrease compared to the same period in 2024.

          </p> 
          {/* <p className="mb-2 text-justify text-base font-normal text-dark">
          {meta.section2 ?? "Loading..."}
          </p> */}
          <span className="mt-6 inline-block py-1 px-2 md:px-4 mb-3 text-xs md:text-base shadow-md rounded-xl bg-emerald-400 text-white">
          Amid these developments, {country}'s exports are expected to grow steadily. {" "}
          {partnersWithPercent[0]?.name} continue to play a major role in its import landscape.
           Using expert trade insights, suppliers worldwide can tap into new opportunities with trusted buyers in {country}.
          </span>
          {/* <span className="mt-6 inline-block py-1 px-2 md:px-4 mb-3 text-xs md:text-base shadow-md rounded-xl bg-emerald-400 text-white">
          {meta.section3 ?? "Loading..."}
          </span> */}

          <div className="flex mt-5 gap-3">
            <a
              href="/pricing"
              className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
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

      {/* Countries Section */}
      <section className="py-20">
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
          {/* Countries grid content */}
        </div>
      </section>

      {/* Data Section with Slider */}
      <section className="py-20 bg-blue-950">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`} Import Bill of Lading data
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-white">
                What Does {`${country}`} Import Data Include?
              </h3>
              <p className="text-base text-white mb-3">
                From historical to the latest, we have full import data for {`${country}`}.
                Our {`${country}`} import customs data will help you find the top {`${country}`}
                import commodities by importer details. HS Code and Product Description,
                Country of Origin and Exporting Country, Port of Entry and Mode of Transport,
                Value and Quantity, and Competitor Shipments for Your Market Research.
                Utilize these key {`${country}`} import export trade data to your advantage
                and prepare an excellent global marketing strategy to outclass your competition.
              </p>
              {/* <p className="text-base text-white mb-3">
                Utilize these key {`${country}`} import export trade data to your advantage
                and prepare an excellent global marketing strategy to outclass your competition.
              </p> */}
              <p className='text-base text-white mb-3'>
              {meta && meta.section5 ? "Loading...":"not found"}
              </p>
              {/* Slider content */}
              <Slider items={sampleDta} />
            </div>
            <div>
            {/* <p className="text-base text-white">
                We provide both online and offline {`${country}`} import data access to our customers.
                Also, you can customize your requirements accordingly. You can request a full
                sample of {`${country}`} import data, including HS Code, product description, quantity,
                unit, price, country of origin-destination, importer name, exporter name, loading-unloading port, etc.
              </p> */}
              <p className='text-base text-white'>
              {meta && meta.section4 ? "Loading...":"not found"}
              </p>
              <div className="flex mt-5 gap-3">
                <a
                  href={`https://gtdservice.com/files/${country.replaceAll(' ', '-')}-import-data-sample-2022-23.xlsx`}
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
                        31-05-2024
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-2 font-semibold text-black whitespace-nowrap bg-slate-100">
                        HS Code :
                      </td>
                      <td className="p-2 whitespace-nowrap text-center">
                        27111100
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
              {/* Table content */}
            </div>
          </div>
        </div>
      </section>

      {/* Major Imports Section with Chart */}
      <section className="py-20 bg-white">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`} Top 10 Major Imports
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                What Does {`${country}`} Import?
              </h3>
              <p className="text-base text-gray-700 mb-3">
                In FY 2024, {productsWithPercent[0]?.name} accounted for the maximum number of shipments,
                having a share of over {productsWithPercent[0]?.percent}% in {`${country}`}'s total imports. As per {`${country}`} {' '}
                import shipment data, {`${country}`}'s top 10 major imports were:{" "}
  {productsWithPercent.map((item, idx) => {
    const isBillion = item.numericValue >= 1000;
    const formattedValue = isBillion
      ? `$${(item.numericValue / 1000).toFixed(2)}B`
      : `$${item.numericValue.toFixed(2)}M`;
    return (
      <span key={item.name}>
        {item.name}: ({formattedValue})
        {idx < productsWithPercent.length - 1 ? ", " : "."}
      </span>
    );
  })} 
                {/* mineral fuels
                ($2.26B), electrical machinery ($862M), nuclear reactors ($848M), vehicles
                ($817M), natural or cultured ($692M), plastics and articles ($236M),
                pharmaceutical products ($216M), iron and steel ($207M),
                optical medical instruments ($186M), and articles of iron ($175M). */}
              </p>
              <p className="text-base text-gray-700 mb-3">
                The top 10 product imports of {`${country}`} were valued at ${(totalTop10ProductValue / 1000).toFixed(3)} billion,
                having over {((totalTop10ProductValue * 100) / totalImportValue).toFixed(2)}%. If you can have a more brief understanding of
                {`${country}`} major commodity exports in the visual chart given below.
              </p>
              <div className="flex">
                <a
                  href="/global-products"
                  className="rounded-xl px-5 py-3 mybtn font-semibold linerotate flex items-center shadow-lg shadow-gray-800 group hover:shadow-md ease-in transition-shadow"
                >
                  <span className=" text-white text-sm whitespace-nowrap">
                    Get {`${country}`} Imports Products Data 2024
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
              {/* Description content */}
            </div>
            <div>
              <Charts type="bar" data={majorData} height={500} />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section with Donut Chart */}
      <section className="py-20 bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <Charts type="donut" data={partners} />
            </div>
            <div>
            <h4 className="text-primary text-lg text-emerald-400 font-medium">
                {`${country}`} Top 10 Import Partners
              </h4>
              <h3 className="mx-auto mb-2 text-balance text-4xl font-bold leading-snug my-2 text-black">
                Who does {`${country}`} import from?
              </h3>
              <p className="text-base text-gray-700 mb-3">
                In the financial year 2024, {partnersWithPercent[0]?.name} was responsible for the maximum {`${country}`} {""}
                import shipments, with over a 47.74% share in overall {`${country}`}n imports.
                As per the {`${country}`} import details report, the top 10 trading partners for {`${country}`} imports were {""}
                {partnersWithPercent.map((item, idx) => {
  const isBillion = item.numericValue >= 1000;
  const display = isBillion
    ? `$${(item.numericValue / 1000).toFixed(2)} billion`
    : `$${item.numericValue.toFixed(2)} million`;
  return (
    <span key={item.name}>
      {item.name}: ({display})
      {idx < partnersWithPercent.length - 1 ? ", " : "."}
    </span>
  );
})}
                {/*{`${country}`} imports were Russia ($4.12B), China ($2.82B), Iran ($596M),
                Germany ($402M), USA ($358M), Italy ($274M), Turkey ($259M), India ($255M),
                Japan ($190M), and Vietnam ($177M).*/}
              </p>
              <p className="text-base text-gray-700 mb-3">
                {`${country}`}'s top 10 import partner countries had exported around
                ${(totalTop10PartnerValue / 1000).toFixed(3)} billion with an overall {" "}
                {((totalTop10PartnerValue * 100) / totalImportValue).toFixed(2)}% share in   {""} {`${country}`}  {""} total imports.
                You will get a better overview of {`${country}`} imports from other countries.
                If you are looking for year-wise {`${country}`} import data by country, please click below.
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
              {/* Partners description */}
            </div>
          </div>
        </div>
      </section>

      {/* Importers & Ports Section */}
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
          {/* Importers and ports content */}
        </div>
      </section>

      <Clients />

      <section className="py-20 bg-gray-100">
        <div className="container px-3 md:px-0 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img src="..//images/CountryPage.webp" className="w-full" alt="GTD Service Global Trade Intelligence System" title="GTD Service Global Trade Intelligence System" />
            </div>
            <div>
              <h4 className="text-primary text-lg text-emerald-400 font-medium">
                GTD Service Global Trade Intelligence System
              </h4>
              <h3 className="mx-auto mb-2 text-4xl font-bold leading-snug my-2 text-black">
                {/* Extend your reach to the global market */}
                {meta && meta.section6 ? "Loading...":"notfound"}
              </h3>
              <ul className="my-3 pt-3 list-inside list-disc">
                {/* <li>Explore 200+ markets</li>
                <li>Stay versed with market trends</li>
                <li>Analyze your competitor's shipments</li>
                <li>Find verified Global buyers</li>
                <li>Get quality business leads</li>
                <li>Maximize Your Company ROI</li> */}
                {meta && meta.section7 ? "Loading...":"notfound"}
              </ul>
              <div className="flex">
                <a
                  href="contact"
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
                  href="/search/usa/import"
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
                  US Import Sample
                </a>
              </li>
              <li>
                <a
                  href="/search/usa/export"
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
                  US Export Sample
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
                  href="/pricing"
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
              <img src="..//images/integration.webp" className="w-full" alt="" />
            </div>
            <div className="col-span-2">
              <h3 className="mx-auto mb-2 text-4xl font-bold leading-snug my-2 text-white">
                Find What US Imports from Other Countries?
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
      
      {/* Other sections... */}

      <CTA />
      <FAQ_Country id={country} />
    </>
  );
}