import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Automotive Industry Market Intelligence | GTD Service",
  description: "Unlock global automotive market trends with GTD Service. Get insights on pricing, demand, suppliers, and buyers to stay ahead in the competitive automotive industry.",
  keywords: ["automotive market research platform", "automotive trade data", "automobile import export data", "automobile imports", "automobile exports", "automobile trade statistics"],
  alternates: {
    canonical: "https://gtdservice.com/automative"
  },
  openGraph: {
    title: 'Automotive Industry Market Intelligence | GTD Service',
    description: 'Unlock global automotive market trends with GTD Service. Get insights on pricing, demand, suppliers, and buyers to stay ahead in the competitive automotive industry.',
    url: 'https://gtdservice.com/automative',
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
    title: 'Automotive Industry Market Intelligence | GTD Service',
    description: 'Unlock global automotive market trends with GTD Service. Get insights on pricing, demand, suppliers, and buyers to stay ahead in the competitive automotive industry.',
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Automotive",
      aboutHeading:
             "The automotive industry is a highly competitive and fast-moving business where innovation and strategic knowledge become the key to staying one step ahead. Through the GTD Service intelligence platform, companies can derive valuable information about the current market trends, new technologies, and worldwide international import-export demands. As a manufacturer, exporter, and importer our platform assists in determining the major opportunities as well as maximizing business decisions. "
    },
    about: {
      aboutIMG: "/images/AUTOMOTIVE .webp",
      aboutHeading:
        "Stay Ahead of the Competition with Key Trends and Demand in the Automotive Market",
      aboutPera:
        "With in-depth market projections, demand analysis, and exposure to global buyers and suppliers, companies can optimize their strategies, lower costs and increase production. Discover the vibrant world of automotive trade intelligence and unleash growth opportunities with data-driven solutions.",
    },
    

    insights: {
      insightIMG: "/images/automotive 2.webp",
      insightHeading:
        "Establish a Strong Brand Position in the Global Automotive Market",
      insightPera:
        "Achieve a competitive advantage in the automotive market with access to leading dealers, market trends, and affordable manufacturing solutions. Use our trade statistics reports to monitor industry trends, discover new markets, and fuel innovation. With the GTD Service Market Intelligence Platform, you can grow your global presence, streamline your supply chain, and position your brand for long-term success in the constantly changing automotive market.",
      counter: [
        {
          id: 1,
          head: "Unlock Global Automotive Trends",
          pera: "Uncover the newest global trends in the automotive sector with import-export trade intelligence reports. Stay ahead of the curve by monitoring changing product demands, cutting-edge technologies, and changing market dynamics.",
        },
        {
          id: 2,
          head: "Manage Pricing and Demand",
          pera: "Learn how market pricing and consumer demand trends work. Identify product trade shipment records and pricing tactics to make more informed decisions, ensuring clients' expectations are met by your products.",
        },
        {
          id: 3,
          head: "Create Your Buyer Network",
          pera: "Be seen by an international import-export database of automotive importers. Use in-depth import-export business intelligence to find and engage with potential buyers and report in major global markets.",
        },
        {
          id: 4,
          head: "Source Quality Suppliers",
          pera: "Find credible suppliers globally. Our site brings you in touch with leading automotive parts manufacturers and enables you to reduce production costs and enhance product quality.",
        },
        {
          id: 5,
          head: "Plan and Forecast for the Future",
          pera: "Utilized market projections to forecast future automotive sales and production and risk trends. This information enables you to plan accordingly for long-term success in a competitive market.",
        },
        
      ],
    },
    cta: {
      line: "Excel Your Business in the Automotive Market with Expert Intelligence Reports",
    },
  };

  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
