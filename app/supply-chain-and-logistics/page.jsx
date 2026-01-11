import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Supply Chain & Logistics Intelligence | GTD Service",
  description: "Gain insights into the global supply chain and logistics market. Access trade data, track trends, and optimize sourcing and procurement strategies for business growth.",
  keywords: ["supply chain, logistics, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/supply-chain-and-logistics"
  },
  openGraph: {
    title: 'Supply Chain & Logistics Intelligence | GTD Service',
    description: 'Gain insights into the global supply chain and logistics market. Access trade data, track trends, and optimize sourcing and procurement strategies for business growth.',
    url: 'https://gtdservice.com/supply-chain-and-logistics',
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
    title: 'Supply Chain & Logistics Intelligence | GTD Service',
    description: 'Gain insights into the global supply chain and logistics market. Access trade data, track trends, and optimize sourcing and procurement strategies for business growth.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Supply Chain and Logistics",
      aboutHeading: "The supply chain and logistics sector is critical to international trade because it ensures that goods and services are delivered on time from producers to buyers. It is a highly interconnected system encompassing procurement storage transport and delivery, all of which must be handled seamlessly to serve customer needs and ensure business competitiveness."
    },
    about: {
      aboutIMG: "/images/Supply-chain-and-logistics1.webp",
      aboutHeading:
        "Competition in Supply Chain and Logistics Market",
      aboutPera:
        "As international trade records are undergoing accelerated transformation, consumer preferences are changing, and technology is playing an increasingly significant role. Businesses have to keep optimising their supply chain operations to remain competitive.",
    },
    insights: {
      insightIMG: "/images/Supply chain 2.webp",
      insightHeading:
        "Grasp New Opportunities in the International Market with Practical Insights",
      insightPera:
        "Discover business prospects in over 200+ countries. Obtain the key information of the top trade markets such as top imports, exports, buyers, suppliers, and shipments, and create a good marketing strategy.",
      counter: [
        {
          id: 1,
          head: "Supply Chain and Logistics Sector",
          pera: "The Supply Chain and Logistics sector is responsible for ensuring that services and goods transit smoothly from the supply chain and logistics management, which involves overseeing the movement of goods, services information, and finances from the raw material stage to the end consumer. Smooth logistics and supply chain management are essential for organisations to stay competitive, save on costs, and provide timely delivery.",
        },
        {
          id: 2,
          head: "Determination of Major Global Supply Chain Trends",
          pera: "The logistics and global supply chain market changes daily due to influences like changes in technology, trade policies, and economic fortunes. Companies should stay on top of developments like the evolution of real-time systems for tracking shipments and the incorporation of AI-based predictive analytics into decision-making processes. It is vital to get insights into trends that will keep businesses in response to shifting business conditions.",
        },
        {
          id: 3,
          head: "Maximising Procurement and Sourcing Strategies",
          pera: "Effective procurement and sourcing are integral to an efficient supply chain. Proper identification of the correct suppliers, cost control, and guaranteeing quality are vital elements of effective procurement strategies. GTD Service helps companies by offering access to useful trade data, including buyers and suppliers volumes of cargo and product prices, which helps firms make better-informed sourcing decisions.",
        },
        {
          id: 4,
          head: "Maximising Productivity and Risk Management",
          pera: "In logistics and supply chain, productivity and risk management go hand in hand. Disruption in the supply chain can result in delayed loss of finances and loss of customers. The identification of risks and the planning for them are necessary for the smooth running of operations.",
        },
        {
          id: 5,
          head: "Unleashing New Business Opportunities and Expanding Networks",
          pera: "The international logistics and supply chain market offers immense opportunities for companies interested in growth. With Global Trade Data Service firms are able to get access to a worldwide database of vetted buyers and suppliers and trading partners and discover chances to open new markets and form enduring partnerships.",
        },
        
      ],
    },
    cta: {
      line: "Get Expert Supply Chain & Logistics Market Intelligence Reports",
    },
  };
  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
