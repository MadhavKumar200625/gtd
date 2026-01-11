import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Expert Research and Consulting Services | GTD Service",
  description: "Leverage GTD Service’s global trade intelligence platform to enhance research and consulting. Access data-driven insights, identify growth opportunities, and optimize strategies.",
  keywords: ["trade intelligence platform for research, market research company, best market research platform, trade data for research, import export data for researchers, international trade statistics, business intelligence reports for research, importer exporter database"],
  alternates: {
    canonical: "https://gtdservice.com/research-and-consulting"
  },
  openGraph: {
    title: 'Expert Research and Consulting Services | GTD Service',
    description: 'Leverage GTD Service’s global trade intelligence platform to enhance research and consulting. Access data-driven insights, identify growth opportunities, and optimize strategies.',
    url: 'https://gtdservice.com/research-and-consulting',
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
    title: 'Expert Research and Consulting Services | GTD Service',
    description: 'Leverage GTD Service’s global trade intelligence platform to enhance research and consulting. Access data-driven insights, identify growth opportunities, and optimize strategies.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Research and Consulting",
      aboutHeading: "The research and consulting industry has a key role in leading businesses through market challenges and opportunities. Global Trade Data service offers a robust global trade intelligence platform aimed at assisting research and consulting firms with precise actionable data. With the use of detailed business intelligence reports, firms can get insights into market trends, discover opportunities for growth, and improve strategic planning."
    },
    about: {
      aboutIMG: "./images/RESEARCH AND CONSULTING .webp",
      aboutHeading:
        "Power Your Research and Consulting with a Global Trade Intelligence Platform",
      aboutPera:
        "GTD Service platform fosters informed decision-making by providing in-depth analysis of market dynamics, trade flows supply chain networks, and emerging risks. Leveraging this data-driven approach, research and consulting companies can offer their customers expert advice and guarantee success in the international marketplace.",
    },
   
    insights: {
      insightIMG: "./images/Research-and-consulting-2.webp",
      insightHeading:
        "Boost Market Visibility with Professional Business Intelligence Reports",
      insightPera:
        "Open the doors to a profound knowledge of the global market with our foolproof trade intelligence platform. Be at the forefront of industry trends, tailor your business strategies to match market requirements, and make decisions with conviction. Our professional market intelligence reports enable you to outshine competitors, spot new opportunities, and grow your global presence with ease.",
      counter: [
        {
          id: 1,
          head: "Actionable Insights for Market Success",
          pera: "Gain actionable, real-time insights into global markets, recognizing trends in best-selling products and major trading firms. Leverage this information to develop effective strategies and gain a competitive edge.",
        },
        {
          id: 2,
          head: "Monitor Market Trends and Risks",
          pera: "Stay ahead of the most recent changes in trade policies, market requirements, and risks. Through the use of data, you can foresee market fluctuations and make wise decisions that protect your business.",
        },
        {
          id: 3,
          head: "Strategic Market Research and Planning",
          pera: "Improve your research with market forecasting. Take advantage of the complete global dataset to enhance market planning, outpace competition, and maximize performance.",
        },
        {
          id: 4,
          head: "Examine the Global Supply Chain",
          pera: "Discover full supply chain insights with shipment and trade flow access by country. Determine top suppliers and maximize your sourcing and logistics plans to deliver better operations.",
        },
        {
          id: 5,
          head: "Determine Growth Opportunities",
          pera: "Reveal new business growth opportunities by examining global shipment activities. We assist you in discovering lucrative partnerships and investment opportunities to increase your market presence.",
        },
        
      ],
    },
    cta: {
      line: "Get Expert Trade Intelligence Reports for Market Research",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};
export default page;
