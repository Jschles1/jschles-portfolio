import image1 from "public/images/portfolio/herbhub.png";
import image2 from "public/images/portfolio/quicknote.png";
import PortfolioItem from "@/components/pages/Portfolio/PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "HerbHub",
    link: "https://github.com/Jschles1/herbhub-client",
    website: "https://herbhub-client.vercel.app/",
    description: [
      "Aggregation website for listing all marijuana dispensary products available in New Jersey dispensaries with the ability for users to sort products by dispensary location, product brand, etc.",
      "Frontend built with NextJS, Typescript, Mantine UI, React Query and Prisma Client.",
      "Utilizes AWS Lambda, AWS Step Functions and AWS EventBridge scheduler for running Puppeteer web crawlers to retrieve product information from each NJ dispensary website and save it to a MongoDB database on a daily basis.",
    ],
  },
  {
    id: 2,
    image: image2,
    title: "QuickNote",
    link: "https://github.com/Jschles1/notes-tw",
    website: "https://quicknote-app.vercel.app/",
    description: [
      "Full-Stack iOS Notes app clone that allows users to create, update, delete and sort notes using a rich text editor.",
      "Built with T3 Stack (Next.js, Typescript, TailwindCSS, tRPC) and PostgreSQL.",
    ],
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
