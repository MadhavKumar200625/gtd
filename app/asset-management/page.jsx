import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Data-Driven Asset Management | Global Trade Data Service",
  description: "Optimize investment strategies with GTD Service's trade data solutions. Access global market insights, identify profitable assets, and manage risks for smarter investment choices.",
  keywords: ["Asset Management", "global import export trade data", "import data", "export data", "buyers", "suppliers", "global trade data", "global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/asset-management"
  },

  openGraph: {
    title: 'Data-Driven Asset Management | Global Trade Data Service',
    description: "Optimize investment strategies with GTD Service's trade data solutions. Access global market insights, identify profitable assets, and manage risks for smarter investment choices.",
    url: 'https://gtdservice.com/asset-management',
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
    title: 'Data-Driven Asset Management | Global Trade Data Service',
    description: "Optimize investment strategies with GTD Service's trade data solutions. Access global market insights, identify profitable assets, and manage risks for smarter investment choices.",
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
  
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Asset Management",
      aboutHeading:"GTD Service is an extensive market research solution designed specifically for asset management firms. Through the provision of detailed international import-export records the solution enables asset managers to make effective investment choices and maximize asset portfolios. It enables thorough market analysis, including the identification of lucrative opportunities, optimization of operations, and risk reduction."
    },
    about: {
      aboutIMG: "./images/Asset-Management-1.webp",
      aboutHeading:
        "Leading Market Research Platform for Asset and Investment Companies",
      aboutPera:
        "With real-time access to global trade patterns, asset management experts can strategically position their investments according to market trends, guaranteeing improved returns and a competitive advantage in the financial industry.",
    },
    insights: {
      insightIMG: "./images/asset-management 2.webp",
      insightHeading:
        "Invest Smarter and Accumulate Asset Wealth with Precision",
      insightPera:
        "Maximize your investment strategy using fact-based intelligence from our trade intelligence platform. Get access to correct market projections, trade patterns, and risk assessments to make data-driven decisions that deliver optimal returns. Beat the competition using an effective marketing strategy founded on accurate global trade intelligence.",
      counter: [
        {
          id: 1,
          head: "Introduction to Asset Management",
          pera: "Global trade data service assists asset management firms by offering actionable trade intelligence, enabling them to make better investment and asset decisions across the world.",
        },
        {
          id: 2,
          head: "Identify the Most Profitable Assets",
          pera: "Users can access comprehensive trade data to determine high-value assets across industries, evaluate risks, and achieve maximum profitability.",
        },
        {
          id: 3,
          head: "Better Customer Experience",
          pera: "GTD Service assists asset managers in offering a better customer experience through market trend analysis and customer purchasing behavior, which enhances client relationships.",
        },
        {
          id: 4,
          head: "Greater Operations Efficiency",
          pera: "Asset managers can optimize operations, determine key assets, and optimize supply chains through comprehensive shipment and market intelligence reports.",
        },
        {
          id: 5,
          head: "Intelligent Investment Choices",
          pera: `Precise market predictions and risk evaluations enable asset management firms to make wise investment choices, achieving high returns and strategic expansion.`,
        },
        
      ],
    },
    cta: {
      line: "Find Expert Market Intelligence Reports for your business",
    },
  };

  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
