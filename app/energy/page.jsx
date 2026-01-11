import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Insights & Solutions for Energy Market Intelligence | GTD Service",
  description: "Access detailed market intelligence for the energy industry with GTD Service. Forecast trends, identify opportunities, and find trustworthy distributors to drive growth.",
  keywords: ["energy market research platform", "energy products data", "crude oil imports", "mineral oil exports", "crude oil exports", "mineral oil imports"],
  alternates: {
    canonical: "https://gtdservice.com/energy"
  },
  openGraph: {
    title: 'Insights & Solutions for Energy Market Intelligence | GTD Service',
    description: 'Access detailed market intelligence for the energy industry with GTD Service. Forecast trends, identify opportunities, and find trustworthy distributors to drive growth.',
    url: 'https://gtdservice.com/energy',
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
    title: 'Insights & Solutions for Energy Market Intelligence | GTD Service',
    description: 'Access detailed market intelligence for the energy industry with GTD Service. Forecast trends, identify opportunities, and find trustworthy distributors to drive growth.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Energy",
      aboutHeading:"The energy industry is central to the world economy as it fuels innovation, sustainability, and economic growth. At Global Trade Data Service, we offer detailed market intelligence for energy and natural resources businesses. With our specialized knowledge, companies can better navigate market risks, forecast energy prices, and predict production needs."
    },
    about: {
      aboutIMG: "./images/ENERGY .webp",
      aboutHeading:
        "Guide the Energy Industry with Data-Driven Market Insights",
      aboutPera:
        "Our platform assists companies in locating credible distributors, identifying new market opportunities, and refining strategies for sustainable growth. Remain ahead of the curve in industry trends and make sound decisions to succeed in the dynamic energy market.",
    },
   

    insights: {
      insightIMG: "./images/energy 2 (1).webp",
      insightHeading:
        "Manage Global Energy Market Challenges with Expert Guidance",
      insightPera:
        "Lead the dynamic energy industry with deep market insights. Our platform delivers rich information about worldwide energy trends, most-traded commodities, and industry leaders, empowering you to make informed, strategic decisions. Use these pivotal statistics to find new opportunities, streamline your supply chain, and develop a strong business plan that puts you in the lead.",
      counter: [
        {
          id: 1,
          head: "Unleash Global Energy Market Insights",
          pera: "Establish a thorough grasp of the global energy industry. Our platform provides vital insights into current trends and traded commodities and influential market players, enabling international businesses to make informed decisions.",
        },
        {
          id: 2,
          head: "Forecast Energy Prices and Trends",
          pera: "Get ahead with precise energy price projections. Our website evaluates market trends and assists companies in forecasting changes in prices for energy commodities, allowing for improved pricing management and planning.",
        },
        {
          id: 3,
          head: "Find trustworthy energy distributors",
          pera: "Have access to a global list of screened distributors, providers, and exporters. Monitor shipping transactions and discover trustworthy partners in the energy industry to enhance your procurement and lower production expenses.",
        },
        {
          id: 4,
          head: "Predict Production Needs",
          pera: "Demand forecasting is essential in the energy industry. Our platform assists companies in examining existing market trends and forecasting production requirements to meet customer needs effectively.",
        },
        {
          id: 5,
          head: "Determine Market Risks and Opportunities",
          pera: "Avoid risks by having a clear understanding of market dynamics. Our trade intelligence platform offers useful information to determine possible opportunities and assist companies in overcoming challenges in the energy market.",
        },
        
      ],
    },
    cta: {
      line: "Empower Your Market Research with Expert Energy Market Intelligence Reports",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
