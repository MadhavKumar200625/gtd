import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Sales & Marketing Intelligence | Global Trade Data Service",
  description: "Unlock sales and marketing success with global trade insights. Access market trends, consumer behavior data, and strategic reports to enhance your business growth.",
  keywords: ["sales, marketing, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/sales-and-marketing"
  },
  openGraph: {
    title: 'Sales & Marketing Intelligence | Global Trade Data Service',
    description: 'Unlock sales and marketing success with global trade insights. Access market trends, consumer behavior data, and strategic reports to enhance your business growth.',
    url: 'https://gtdservice.com/sales-and-marketing',
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
    title: 'Sales & Marketing Intelligence | Global Trade Data Service',
    description: 'Unlock sales and marketing success with global trade insights. Access market trends, consumer behavior data, and strategic reports to enhance your business growth.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Sales & Marketing",
      aboutHeading: "Sales and marketing are two core business functions that complement each other to generate revenue and growth. While marketing creates awareness and generates leads by attracting potential customers, sales turn those leads into paying customers."
    },
    about: {
      aboutIMG: "/images/Sales-and-marketing1.webp",
      aboutHeading:
        "Drive your Sales and Marketing Business with a Market Intelligence Report",
      aboutPera:
        "Properly coordinated sales and marketing enable sustainable business success. Market Intelligence report will help boost your sales and also helps with the marketing of the business.",
    },
    insights: {
      insightIMG: "/images/sale and marketing 2.webp",
      insightHeading:
        "Develop an emerging Brand image in the sales and Marketing segment",
      insightPera:
        "Discover top import-export market trends and set actual market demands by reading expert business intelligence reports. Develop a successful marketing strategic plan based on a market study report.",
      counter: [
        {
          id: 1,
          head: "Understanding the Role of Sales and Marketing",
          pera: "Sales and marketing have different but complementary functions in business growth. Marketing is concerned with brand recognition, customer interaction, and lead generation, whereas sales interact directly with prospective customers to seal deals.",
        },
        {
          id: 2,
          head: "Significance of Market Research and Consumer Insights",
          pera: "Consumer behavior preferences and market trends are important to understand for successful sales and marketing strategies. Data-driven decision-making enables companies to customise their strategy to reach the right audience.",
        },
        {
          id: 3,
          head: "Online Sales and Digital Marketing Strategies",
          pera: "As digital platforms gain popularity, companies use SEO, social media, email marketing, and paid advertising to target their audience. Online sales and e-commerce strategies are now a must for contemporary businesses.",
        },
        {
          id: 4,
          head: "Strength of Relationship Building in Sales",
          pera: `Effective sales are more than mere transactions. Trust building, customer relationship maintenance, and personalised solution provision increase customer loyalty and retention.`,
        },
        {
          id: 5,
          head: "Success Measurement",
          pera: "Monitoring marketing campaign performance and the rate of sales conversion assists businesses in streamlining their strategies. Customer acquisition cost (CAC), return on investment, and customer lifetime value (CLV) are the main metrics.",
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
