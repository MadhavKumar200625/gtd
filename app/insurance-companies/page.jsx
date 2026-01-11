import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Data Solutions for Insurance Risk Management | GTD Service",
  description: "Access tailored trade data solutions for insurance companies with GTD Service. Enhance risk management, detect fraud, set accurate pricing, and generate quality leads.",
  keywords: ["insurance companies, insurance market insights, risk management data, import export trade data, import data, export data"],
  alternates: {
    canonical: "https://gtdservice.com/insurance-companies"
  },
  openGraph: {
    title: 'Data Solutions for Insurance Risk Management | GTD Service',
    description: 'Access tailored trade data solutions for insurance companies with GTD Service. Enhance risk management, detect fraud, set accurate pricing, and generate quality leads.',
    url: 'https://gtdservice.com/insurance-companies',
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
    title: 'Data Solutions for Insurance Risk Management | GTD Service',
    description: 'Access tailored trade data solutions for insurance companies with GTD Service. Enhance risk management, detect fraud, set accurate pricing, and generate quality leads.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};


const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Insurance Companies",
      aboutHeading:"Global Trade Data Service offers an advanced market intelligence platform tailored for insurance companies, helping them navigate the complexities of risk management, fraud detection, and strategic decision-making. Our platform provides detailed insights into global trade, enabling insurance firms to identify fraud claims, set accurate pricing models, and track investment trends."
    },
    about: {
      aboutIMG: "/images/INSURANCE .webp",
      aboutHeading:
        "Fuel Business Growth with Our Market Intelligence Platform",
      aboutPera:
        "By leveraging comprehensive reports companies can make proactive data-driven decisions to optimize business operations, generate quality leads, and enhance client satisfaction. With access to real-time market data, insurance companies can stay ahead of industry challenges and drive growth in a highly competitive sector.",
    },
   
    insights: {
      insightIMG: "/images/INSURANCE 2.webp",
      insightHeading:
        "Make Informed Decisions with Accurate Risk & Investment Forecasts",
      insightPera:
        "Be ahead of investment trends and market risks with our proprietary intelligence reports. Get insights into leading market trends, investment risks, fraud claims, and potential threats to protect your business. Use accurate trade statistics to develop a strong marketing strategy, reduce uncertainties, and stay competitive in the global market.",
      counter: [
        {
          id: 1,
          head: "Detect and Prevent Fraud Claims",
          pera: "Fraud is a significant concern in the insurance industry. Our import-export trade data and intelligence platform helps you detect potential fraud claims by providing detailed financial insights and improving risk management strategies.",
        },
        {
          id: 2,
          head: "Set Accurate Pricing and Aggregation",
          pera: "Pricing and aggregation decisions are crucial for insurance companies. Our platform provides data-driven forecasts on market trends, investment risks, and growth opportunities, enabling precise pricing models.",
        },
        {
          id: 3,
          head: "Generate High-Quality Business Leads",
          pera: "Access our global international import-export database to find potential leads with a high return on investment. Track shipment records and customs records activities and analyzed business behavior to identify clients for insurance services.",
        },
        {
          id: 4,
          head: "Make Proactive Business Decisions",
          pera: "Make informed proactive decisions with our detailed international import-export trade reports. Data on company names, pricing, and trading countries helps optimize risk management and client acquisition.",
        },
        {
          id: 5,
          head: "Optimize Operational Efficiency",
          pera: `Streamline operations and improve financial growth with information import and export trade report insights. Monitor company performance, identify key opportunities, and enhance your business strategies for better efficiency.`,
        },
        
      ],
    },
    cta: {
      line: "Get Expert Intelligence Reports for Law Firms",
    },
  };

  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
