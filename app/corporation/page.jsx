import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Corporate Market Intelligence | Global Trade Data Service ",
  description: "Boost corporate success with GTD Service’s market intelligence platform. Access real-time trade data to optimize operations, identify growth opportunities, and stay ahead in the global market.",
  keywords: ["Corporation", "global import export trade data", "import data", "export data", "buyers", "suppliers", "global trade data", "global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/corporation"
  },

  openGraph: {
    title: 'Corporate Market Intelligence | Global Trade Data Service ',
    description: 'Boost corporate success with GTD Service’s market intelligence platform. Access real-time trade data to optimize operations, identify growth opportunities, and stay ahead in the global market.',
    url: 'https://gtdservice.com/corporation',
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
    title: 'Corporate Market Intelligence | Global Trade Data Service ',
    description: 'Boost corporate success with GTD Service’s market intelligence platform. Access real-time trade data to optimize operations, identify growth opportunities, and stay ahead in the global market.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },

};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Corporation",
      aboutHeading: "The Global Trade Data service is a robust market intelligence platform specially designed for business corporations to help them dominate the global marketplace. Through giving strong insights into trends in international import-export database industries and competitive strategies, the platform assists business corporations in maximizing operations, discovering worthwhile investment prospects and surpassing competitors."
    },
    about: {
      aboutIMG: "./images/Corporation-1.webp",
      aboutHeading: "Leading Market Intelligence Platform for Corporate Success",
      aboutPera:
        "By using real-time trade data and more than 200+ countries' financial reports, corporations are able to make informed decisions to drive sales, improve market strategy, and avoid risks, ensuring success and growth in a competitive business environment.",
    },

    insights: {
      insightIMG: "./images/corp 2.webp",
      insightHeading:
        "Take Your Business to the Next Level with Precise Market Insights",
      insightPera:
        "Unleash critical market trends and performance drivers to propel your business success in the international market. With the GTD Service  Market Intelligence Platform, obtain actionable insights that enable you to make informed strategic decisions, streamline operations, and outperform the competition. Maximize growth, minimize risks, and realize your business objectives with data-driven accuracy.",
      counter: [
        {
          id: 1,
          head: "Introduction to Market Intelligence for Corporations",
          pera: "Global trade data service intelligence can benefit corporations in reducing operations, identifying opportunities and remaining competitive in the global market.",
        },
        {
          id: 2,
          head: "Cost Optimization and Time Savings",
          pera: "GTD Services provides corporations trade data to maximize expenditure and save time in procurement and sourcing and decision-making processes.",
        },
        {
          id: 3,
          head: "Emerging Market Opportunities",
          pera: "We help corporations to remain ahead of industry trends, evaluate new markets, and determine growth areas based on accurate data.",
        },
        {
          id: 4,
          head: "Supply Chain Efficiency and Risk Management",
          pera: `Global Trade Data Service assists companies in streamlining their supply chain by knowing the important providers, evaluating risks, and maintaining smooth logistics operations.`,
        },
        {
          id: 5,
          head: "Strategic Decision-Making with Reliable Data",
          pera: "Companies can improve their strategic planning by making use of accurate and actionable trade intelligence to make well-informed investment, partnership, and expansion decisions.",
        },

      ],
    },
    cta: {
      line: "Get Expert Financial Market Intelligence Reports",
    },
  };

  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
