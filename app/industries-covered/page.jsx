import React from "react";
import Breadcrump from "../common/Breadcrump";
import Link from "next/link";

export const metadata = {
  title: 'Industries We Serve | Import Export Data by Sector | GTD Service',
  description: 'Discover the wide range of industries covered by GTD Service. Get trade insights for agriculture, chemicals, electronics, textiles, and more sectors.',
  keywords: 'Global Import Export Trade Data, Import Export Data, Export Import Data, Global Import Export Data Provider, Global Import Export Database, Import Data, Export Data, Shipments Data, Customs Data, Import Trade Data, Export Trade Data, Importers, Exporters, Buyers, Suppliers',
  alternates: {
    canonical: 'https://gtdservice.com/industries-covered',
  },

  openGraph: {
    title: 'Industries We Serve | Import Export Data by Sector | GTD Service',
    description: 'Discover the wide range of industries covered by GTD Service. Get trade insights for agriculture, chemicals, electronics, textiles, and more sectors.',
    url: 'https://gtdservice.com/industries-covered',
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
    title: 'Industries We Serve | Import Export Data by Sector | GTD Service',
    description: 'Discover the wide range of industries covered by GTD Service. Get trade insights for agriculture, chemicals, electronics, textiles, and more sectors.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};



const page = () => {
  const IndustriesCovered = [
    {
      imgURL: "/images/AGRIBUSINESS 2.webp",
      category: "Agribusiness",
      heading: "Get Expert Data Solutions for a Successful Agribusiness",
      pera: "The agribusiness industry market is an arena of risk and uncertainty. GTD Service offers data on expert market intelligence solutions that allow you to assess financial risks in the agriculture industry and the potential of your agribusiness with the most recent data solutions that maximize operations.",
      pageURL: "/agribusiness",
    },
    {
      imgURL: "/images/AUTOMOTIVE .webp",
      category: "Automotive",
      heading:
        "Identify the Current Market Trends & Demands in the Automotive Market",
      pera: "With in-depth market projections, demand analysis, and exposure to global buyers and suppliers, companies can optimize their strategies, lower costs and increase production. Discover the vibrant world of automotive trade intelligence and unleash growth opportunities with data-driven solutions.",
      pageURL: "/automative",
    },
    {
      imgURL: "/images/ENERGY .webp",
      category: "Energy & Natural Resources",
      heading:
        "Become a Leader in the Energy Sector through Expert Market Intelligence",
      pera: "The energy industry is central to the world economy as it fuels innovation, sustainability, and economic growth. At Global Trade Data Service, we offer detailed market intelligence for energy and natural resources businesses. With our specialized knowledge, companies can better navigate market risks, forecast energy prices, and predict production needs.",
      pageURL: "/energy",
    },
    {
      imgURL: "/images/RESEARCH AND CONSULTING .webp",
      category: "Research & Consulting",
      heading:
        "Global Trade Intelligence Platform for Research & Consulting Companies",
      pera: "The research and consulting industry has a key role in leading businesses through market challenges and opportunities. Global Trade Data service offers a robust global trade intelligence platform aimed at assisting research and consulting firms with precise actionable data. With the use of detailed business intelligence reports, firms can get insights into market trends, discover opportunities for growth, and improve strategic planning.",
      pageURL: "/research-and-consulting",
    },
    {
      imgURL: "/images/Corporation-1.webp",
      category: "Corporate Companies",
      heading: "Best Market Intelligence Platform for Corporate Companies",
      pera: "The Global Trade Data service is a robust market intelligence platform specially designed for business corporations to help them dominate the global marketplace. Through giving strong insights into trends in international import-export database industries and competitive strategies, the platform assists business corporations in maximizing operations, discovering worthwhile investment prospects and surpassing competitors.",
      pageURL: "/corporation",
    },
    {
      imgURL: "/images/Asset-Management-1.webp",
      category: "Asset Management",
      heading:
        "Best Market Research Platform for Assets & Investment Companies",
      pera: "GTD Service is an extensive market research solution designed specifically for asset management firms. Through the provision of detailed international import-export records the solution enables asset managers to make effective investment choices and maximize asset portfolios. It enables thorough market analysis, including the identification of lucrative opportunities, optimization of operations, and risk reduction.",
      pageURL: "/asset-management",
    },
    {
      imgURL: "/images/Government_Agencies1.webp",
      category: "Goverment Agencies",
      heading: "Market Intelligence Platform for Government Agencies",
      pera: "GTD Service provides a robust global market intelligence solution designed for government agencies. By delivering in-depth insights into world trade trends, demand projections, and risk factors, we enable government agencies to make sound choices. Our comprehensive reports assist in developing successful trade policies, improving tariff revenues, and stimulating economic growth through strengthened market strategies.",
      pageURL: "/government-agencies",
    },
    {
      imgURL: "/images/LAW 1.webp",
      category: "Law Firms",
      heading:
        "Expert Trade Data Solutions for Law Firms & Legal Professionals",
      pera: "GTD Service provides end-to-end trade intelligence solutions for legal firms and attorneys. Our system provides precise real-time global market trends, historical transaction records, and in-depth trade data reports that aid legal research dispute settlement and strategic decision-making.",
      pageURL: "/law-firms",
    },
    {
      imgURL: "/images/Importers1.webp",
      category: "Importers",
      heading: "Leading Trade Intelligence Platform for Global Importers",
      pera: "Importers are important in international import-export trade as they bring products from overseas markets to satisfy local demand. Companies, wholesalers, and distributors bring in products like electronics, clothing machinery, and raw materials to help sustain different industries.",
      pageURL: "/importers",
    },
    {
      imgURL: "/images/Exporters1.webp",
      category: "Exporters",
      heading:
        "Enhance Your Sales Potential with Our Global Importers Database",
      pera: "Exporting is a critical element of international import-export trade records, enabling companies to access foreign markets, diversify revenue, and drive growth. But the intricacies of working with foreign markets complying with trade laws and accessing good partners can be overwhelming for exporters.",
      pageURL: "/exporters",
    },
    {
      imgURL: "/images/Supply-chain-and-logistics1.webp",
      category: "Supply Chain & Logistics",
      heading:
        "The Leading Trade Intelligence Platform for Supply Chain & Logistics Companies",
      pera: "The supply chain and logistics sector is critical to international trade because it ensures that goods and services are delivered on time from producers to buyers. It is a highly interconnected system encompassing procurement storage transport and delivery, all of which must be handled seamlessly to serve customer needs and ensure business competitiveness.",
      pageURL: "/supply-chain-and-logistics",
    },
    {
      imgURL: "/images/It-and-consulting1.jpg",
      category: "IT & Consulting",
      heading:
        "Revolutionize your business through our Trade Intelligence Platform",
      pera: "The IT and Consulting sector is an integral catalyst for innovation, enabling companies in all industries to maximize operations, enhance customer experiences, and remain competitive in the digitally expanding world. From management consulting to software development, IT services and consulting form the foundation of business results.",
      pageURL: "/it-and-consulting",
    },
    {
      imgURL: "/images/INSURANCE .webp",
      category: "Insurance Companies",
      heading: "Seek Business Growth with our Market Intelligence Platform",
      pera: "Global Trade Data Service offers an advanced market intelligence platform tailored for insurance companies, helping them navigate the complexities of risk management, fraud detection, and strategic decision-making. Our platform provides detailed insights into global trade, enabling insurance firms to identify fraud claims, set accurate pricing models, and track investment trends.",
      pageURL: "/insurance-companies",
    },
    {
      imgURL: "/images/Construction-1.webp",
      category: "Construction",
      heading: "Best Market Intelligence Platform for Construction Companies",
      pera: "GTD Service offers a complete market intelligence platform for construction businesses. Using global trade data from more than 200+ countries, businesses can streamline project planning, reduce risks, and increase cost-effectiveness. With in-depth financial and shipment data, businesses can enhance cost estimation sourcing and market expansion.",
      pageURL: "/construction",
    },
    {
      imgURL: "/images/Retail1.webp",
      category: "Retail",
      heading:
        "Boost Your Company’s Sales through Our Market Research Platform",
      pera: "Retail refers to the activity of selling goods and services directly to individuals through different channels, such as physical outlets, e-commerce websites, and direct selling. Retail is central to the world economy, linking producers to final consumers and defining consumer interactions.",
      pageURL: "/retail",
    },
    {
      imgURL: "/images/FINANCE.webp",
      category: "Finance",
      heading:
        "Improve Your Decision Making With Our Impressive Financial Reports",
      pera: "Global Trade Data service provides an in-depth analysis of global import-export trade data with an emphasis on financial transactions market trends, and economic analysis. The site gives important financial institutions, investors, and businesses useful data to make informed decisions regarding international import-export trade reports and risk assessment and investment opportunities and assists users in analyzing financial flows.",
      pageURL: "/finance",
    },
    {
      imgURL: "/images/Chemical-1.webp",
      category: "Chemical",
      heading: "Best Market Intelligence Platform for Chemical Industries",
      pera: "GTD Service provides an effective market intelligence platform customised for the chemical sector. It gives vital information about the international chemical market such as major imports and exports trading nations and leading chemical firms. Using in-depth business reports, chemical firms can remain ahead of market trend innovations and technology developments.",
      pageURL: "/chemical",
    },
    {
      imgURL: "/images/Sales-and-marketing1.webp",
      category: "Sales & Marketing",
      heading:
        "Boost your sales & Marketing Business with a Market Intelligence Report",
      pera: "Sales and marketing are two core business functions that complement each other to generate revenue and growth. While marketing creates awareness and generates leads by attracting potential customers, sales turn those leads into paying customers.",
      pageURL: "/sales-and-marketing",
    },
    {
      imgURL: "/images/Academics.webp",
      category: "Academic & Education",
      heading:
        "Collect the customized market intelligence report of Academic & Educational Institutions",
      pera: "GTD Service specializes in delivering market intelligence to academic institutions, enabling them to make sound decisions in the international marketplace. The platform provides valuable insights into trends in trade, upcoming opportunities, and supply chains facilitating it for academic institutions to source education products, navigate changes in the market and optimize their operations.",
      pageURL: "/academic-and-education",
    },
    {
      imgURL: "/images/Aerospace 1.webp",
      category: "Aerospace & Defence",
      heading: "Collect the Real-time analytic report of Aerospace & Defence",
      pera: "The aerospace and defence sector is the vanguard of international security, technological advancement, and economic development. The sector encompasses the designing, manufacturing, and servicing of military and civilian aircraft space vehicles and defence systems and is, therefore, crucial to national defence.",
      pageURL: "/aerospace-and-defence",
    },
  ];
  return (
    <>
      <Breadcrump pageName="Industries Covered" heading="Industries We Cover" peragraph={"Gain a deeper understanding of the global market with our powerful trade intelligence platform, designed to deliver industry-specific insights that drive smarter business decisions. Whether you're exploring new markets, evaluating trade flows, or monitoring competitors, our expert intelligence reports provide a comprehensive view of international trends, demand patterns, and emerging opportunities. With actionable data and analysis tailored to your sector, you can identify high-growth regions, mitigate risks, and strategically position your business for success on a global scale. Empower your trade strategies with insights that go beyond the surface, only with our trusted intelligence platform."}/>

      {/* ---------Industry start--------------  */}

      <section className="bg-white">
        <div className="container px-3 md:px-0 mx-auto py-20">
          <div>
            <h3 className="text-primary text-center text-lg text-gray-400 font-medium">
              Industry
            </h3>
            <h2 className="mx-auto mb-2 text-center text-balance text-4xl font-bold leading-snug my-2">
              Explore More Industries
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-10 gap-8 md:gap-6">
            {IndustriesCovered.map((e, i) => (
              <div key={i} className="flex group flex-col gap-2 mb-3">
                <div className="w-full  max-h-60 rounded-xl object-cover overflow-hidden mb-3">
                  <img
                    src={e.imgURL}
                    className="w-100 h-100 group-hover:scale-105 transition-transform ease-in"
                    alt={e.category}
                    title={e.category}
                  />
                </div>
                <span className="bg-blue-100 w-max text-blue-800 text-sm font-medium me-2 px-4 py-0.5 rounded-full">
                  {e.category}
                </span>
                <a
                  href={e.pageURL}
                  className="font-bold text-xl group-hover:text-blue-700 ease-linear line-clamp-2 transition-colors"
                >
                  {e.heading}
                </a>
                <p className="text-base text-gray-600 line-clamp-3">{e.pera}</p>
                <a
                  href={e.pageURL}
                  className="line-clamp-1 text-base font-medium text-gray-700 flex items-center gap-3 hover:text-orange-500"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------Industry end-------------- * */}
    </>
  );
};

export default page;
