import { CommonSolutions } from "../common/CommonSolutions";

export const metadata = {
  title: "Trade Intelligence for Law Firms | Global Trade Data Service",
  description: "Access GTD Service's trade intelligence to enhance legal research, streamline processes, and develop effective strategies for law firms.",
  keywords: ["Law Firms, global import export trade data, import data, export data, buyers, suppliers, global trade data, global import export data provider"],
  alternates: {
    canonical: "https://gtdservice.com/law-firms"
  },
  openGraph: {
    title: 'Trade Intelligence for Law Firms | Global Trade Data Service',
    description: "​Access GTD Service's trade intelligence to enhance legal research, streamline processes, and develop effective strategies for law firms.",
    url: 'https://gtdservice.com/law-firms',
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
    title: 'Trade Intelligence for Law Firms | Global Trade Data Service',
    description: "​Access GTD Service's trade intelligence to enhance legal research, streamline processes, and develop effective strategies for law firms.",
    site: '@gtdservice',  // Your Twitter handle
    creator: '@gtdservice', // Your Twitter handle
    images: ['https://gtdservice.com/images/logo.svg'], // Same as OpenGraph image
  },
};

const page = () => {
  const data = {
    breadcrumb: {
      pagename: "Law Firms",
      aboutHeading: "GTD Service provides end-to-end trade intelligence solutions for legal firms and attorneys. Our system provides precise real-time global market trends, historical transaction records, and in-depth trade data reports that aid legal research dispute settlement and strategic decision-making."
    },
    about: {
      aboutIMG: "./images/LAW 1.webp",
      aboutHeading:
        "Liberating Trade Data Solutions for Legal Firms and Attorneys",
      aboutPera:
        "With historical trade data at hand, legal firms can simplify their legal procedures, build successful case plans, and expand their client service.",
    },
    insights: {
      insightIMG: "./images/law 2.webp",
      insightHeading:
        "Improve Your Legal Research with Credible Global Trade Statistics",
      insightPera:
        "Advance your legal research with accurate global trade data. Our extensive data enables you to gain an in-depth understanding of goods movement between countries, trace the details of transactions, and analyze customer acquisition patterns.",
      counter: [
        {
          id: 1,
          head: "Improve Legal Research with GTD Service",
          pera: "GTD Service offers law firms precise, real-time global trade statistics, allowing for more efficient legal research. Through the examination of the movement of goods between nations, law firms can monitor transactions, identify potential legal problems, and obtain useful information on cross-border activities.",
        },
        {
          id: 2,
          head: "Simplify Legal Processes and Save Resources",
          pera: "Legal cases usually need large amounts of data analysis. Through our site, law firms can save money and time through the use of in-depth trade intelligence reports with facts on market activities, company transactions, and shipments, facilitating lawyers to make well-informed decisions in good time.",
        },
        {
          id: 3,
          head: "Make Well-Informed Legal Decisions through Credible Data",
          pera: "Our trade information aids law firms in making informed legal judgments. Legal practitioners can solve cases more proficiently by relying on precise, in-depth international trade activity reports, making exact judgments based on historical transaction data.",
        },
        {
          id: 4,
          head: "Craft Winning Legal Strategies",
          pera: "Global Trade Data Service enables law firms to create competitive edges through data-driven actionable insights into client trade activities. The examination of historical transactions, history data, customs data, and shipment patterns allows law firms to develop case-winning strategies using evidence-based data.",
        },
        {
          id: 5,
          head: "Develop Long-Term Client Relationships",
          pera: "By providing comprehensive business intelligence reports, law firms can attract new clients and establish improved relationships with current clients. By providing expert opinions from global trade information, law firms can earn client trust and become expert leaders in trade-related legal issues.",
        },
        
      ],
    },
    cta: {
      line: "Get Expert Intelligence Reports for Law Firms",
    },
  };

  return (
    <>
      <CommonSolutions data={data} />
    </>
  );
};

export default page;
