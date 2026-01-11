import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Construction Market Intelligence | Global Trade Data Service",
  description: "GTD Service provides construction firms with global trade data to streamline project planning, reduce risks, and enhance cost-effectiveness.",
  keywords: ["Construction, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/construction"
  },
  openGraph: {
    title: 'Construction Market Intelligence | Global Trade Data Service',
    description: 'GTD Service provides construction firms with global trade data to streamline project planning, reduce risks, and enhance cost-effectiveness.',
    url: 'https://gtdservice.com/construction',
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
    title: 'Construction Market Intelligence | Global Trade Data Service',
    description: 'GTD Service provides construction firms with global trade data to streamline project planning, reduce risks, and enhance cost-effectiveness.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Construction",
      aboutHeading: "GTD Service offers a complete market intelligence platform for construction businesses. Using global trade data from more than 200+ countries, businesses can streamline project planning, reduce risks, and increase cost-effectiveness. With in-depth financial and shipment data, businesses can enhance cost estimation sourcing and market expansion."
    },
    about: {
      aboutIMG: "/images/Construction 1.webp",
      aboutHeading:
        "Top Market Intelligence Solutions for Construction Firms",
      aboutPera:
        "The platform enables construction professionals to make informed decisions using real-time data, offering insights into pricing trends, major suppliers, and new markets. By using these reports, contractors can prevent overspending, optimise operations, and spot lucrative opportunities in the international market.",
    },
    insights: {
      insightIMG: "/images/CONSTRUCTION 2.webp",
      insightHeading:
        "Receive Valuable Insights into the World Construction Industry from Our Quality Reports",
      insightPera:
        "Stay one step ahead of the competition with our comprehensive trade market intelligence reports.",
      counter: [
        {
          id: 1,
          head: "Successful Project Planning",
          pera: "Use market intelligence to manage construction projects better by examining trade data, locating risks, and maximising costs using pricing insights from leading commodity nations and firms.",
        },
        {
          id: 2,
          head: "Cost Estimation and Resource Management",
          pera: `Prevent overexpenditure and wastage through utilisation of detailed trade reports on prices for construction materials to enable businesses to make optimal allocation of resources and avoid avoidable expenditures.`,
        },
        {
          id: 3,
          head: "Product Sourcing Optimisation",
          pera: "Make use of extensive shipment information from worldwide suppliers assisting construction firms in sourcing raw materials and goods competitively to enable cost reductions while preserving quality.",
        },
        {
          id: 4,
          head: "Construction Project Risk Mitigation",
          pera: `Utilise intelligence reports to analyse and mitigate financial risk on construction projects such as expenditure supply and volatility in the marketplace to aid in smoother project delivery.`,
        },
        {
          id: 5,
          head: "Detecting New Opportunities in Markets",
          pera: "Investigate upcoming markets and potential for growth across the global construction industry with reliable trade information, enabling businesses to plan growth and enhance profitability.",
        },
        
      ],
    },
    cta: {
      line: "Get Expert Intelligence Reports for Construction Companies",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
