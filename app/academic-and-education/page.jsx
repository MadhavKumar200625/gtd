import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Market Intelligence for Academic & Educational Institutions | GTD Service",
  description: "Explore GTD Service’s trade intelligence solutions for academic institutions. Access global trends, market insights, and sourcing data to enhance research and decision-making.",
  keywords: ["Academic Institutions, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/academic-and-education"
  },

  openGraph: {
    title: 'Market Intelligence for Academic & Educational Institutions | GTD Service',
    description: 'Explore GTD Service’s trade intelligence solutions for academic institutions. Access global trends, market insights, and sourcing data to enhance research and decision-making.',
    url: 'https://gtdservice.com/academic-and-education',
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
    title: 'Market Intelligence for Academic & Educational Institutions | GTD Service',
    description: 'Explore GTD Service’s trade intelligence solutions for academic institutions. Access global trends, market insights, and sourcing data to enhance research and decision-making.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
  
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Academic and Education",
      aboutHeading: "GTD Service specializes in delivering market intelligence to academic institutions, enabling them to make sound decisions in the international marketplace. The platform provides valuable insights into trends in trade, upcoming opportunities, and supply chains facilitating it for academic institutions to source education products, navigate changes in the market and optimize their operations. "
    },
    about: {
      aboutIMG: "/images/Academics.webp",
      aboutHeading:
        "Order Tailored Market Intelligence Reports for Academic & Educational Institutions",
      aboutPera:
        "With this data, academic institutions can minimize costs, increase efficiency, and get ahead of global trends in education.",
    },
    
    insights: {
      insightIMG: "/images/ACADEMIC 2.webp",
      insightHeading:
        "Strengthen Academic Research with Precise Global Trade Intelligence",
      insightPera:
        "Equip academic researchers and scholars with in-depth market intelligence reports from GTD Service. Access precise global trade statistics, industry trends, and in-depth analysis to aid research, curriculum development, and sound decision-making. Be ahead with valuable insights that fuel knowledge and innovation in academia.",
      counter: [
        {
          id: 1,
          head: "Introduction to Academic and Educational Market Intelligence",
          pera: "Global trade data service assists academic institutions in international trade intelligence by providing knowledge in terms of trends, technology, and opportunities within markets.",
        },
        {
          id: 2,
          head: "Cost and Time Efficiency",
          pera: "The platform is time and cost-saving, with accurate trade data for educational institutions, supporting productivity and informed decision-making.",
        },
        {
          id: 3,
          head: "Mastering Emerging Market Trends",
          pera: "Global Trade Data Service updates educational institutions on global market trends positioning them to be competitive and make informed adjustments to emerging trends.",
        },
        {
          id: 4,
          head: "Maxing Out Product Sourcing",
          pera: "GTD Service market intelligence facilitates effective sourcing of educational products at the right time, including details on pricing suppliers and import-export facts.",
        },
        {
          id: 5,
          head: "Supply Chain and Logistics in Education",
          pera: "GTD Service ensures a good supply chain and finds buyers and suppliers and fills gaps in the supply-demand chain in the education sector.",
        },
       
      ],
    },
    cta: {
      line: "Get expert insights on Academic & Educational Institutions",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
