import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Chemical Industry Market Intelligence | Global Trade Data Service ",
  description: "Access market intelligence for the chemical industry. Get insights on global trade, pricing, production planning, and sourcing to enhance your business growth.",
  keywords: ["chemical, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/chemical"
  },
  openGraph: {
    title: 'Chemical Industry Market Intelligence | Global Trade Data Service ',
    description: 'Access market intelligence for the chemical industry. Get insights on global trade, pricing, production planning, and sourcing to enhance your business growth.',
    url: 'https://gtdservice.com/chemical',
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
    title: 'Chemical Industry Market Intelligence | Global Trade Data Service ',
    description: 'Access market intelligence for the chemical industry. Get insights on global trade, pricing, production planning, and sourcing to enhance your business growth.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Chemical",
      aboutHeading: "GTD Service provides an effective market intelligence platform customised for the chemical sector. It gives vital information about the international chemical market such as major imports and exports trading nations and leading chemical firms. Using in-depth business reports, chemical firms can remain ahead of market trend innovations and technology developments."
    },
    about: {
      aboutIMG: "/images/Chemical 1.webp",
      aboutHeading: "Top Market Intelligence Solutions for the Chemicals Industry",
      aboutPera:
        "The platform assists companies in streamlining decision-making by providing accurate information on market demands, pricing policies, and manufacturing predictions, helping them identify profitable business opportunities and improve their growth expectations in the global chemical industry.",
    },
    insights: {
      insightIMG: "/images/CHEMICAL 2.webp",
      insightHeading:
        "Take Your Business Global with Actionable Insights from Global Trade Data Service",
      insightPera:
        "Grow your company and engage with your customers in the world chemical industry with actionable data insights. Leverage our correct market intelligence",
      counter: [
        {
          id: 1,
          head: "Market Forecasts and Analytics",
          pera: "Use international trade data to forecast trends, demand, and prices in the chemicals sector. Evaluate leading commodities volume and suppliers to effectively plan for future market scenarios and maximise your business strategy.",
        },
        {
          id: 2,
          head: "Price Evaluation",
          pera: "See how leading chemical producers across the globe set their prices. Check shipment reports to learn about your competitors' prices and enhance your pricing strategies to remain competitive in the market.",
        },
        {
          id: 3,
          head: "Product Sourcing",
          pera: "Use a global suppliers' directory that is exhaustive to find cost-effective and reliable chemical suppliers. This assists in the procurement of raw materials and finished goods at competitive prices to lower manufacturing costs.",
        },
        {
          id: 4,
          head: "Customer Analysis",
          pera: "Use extensive customs data from more than 200+ countries to better understand customer behavior, purchasing patterns, and needs. Utilise this insight to drive product offerings and capture customer loyalty.",
        },
        {
          id: 5,
          head: "Improved Production Planning",
          pera: "Forecast product demand and manufacturing requirements accurately from global trade statistics. This helps chemical firms balance production levels against market demand, minimize risks, and streamline production processes for better profits.",
        },
       
      ],
    },
    cta: {
      line: "Get Expert Market Intelligence Reports for Chemical Companies",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
