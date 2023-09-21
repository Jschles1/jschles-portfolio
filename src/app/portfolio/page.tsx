import image1 from "public/images/portfolio/mentormaps.png";
import image2 from "public/images/portfolio/quicknote.png";
import PortfolioItem from "@/components/pages/Portfolio/PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "MentorMaps",
    link: "https://github.com/Jschles1/mentormaps",
    website: "https://mentormaps.vercel.app/",
    description: [
      "Web application that allows mentors guide mentees towards their career or personal goals through the creation of roadmaps and milestones.",
      "Built with NextJS 13, Typescript, TailwindCSS, Shadcn UI, React Query, Clerk and Prisma.",
    ],
  },
  {
    id: 2,
    image: image2,
    title: "QuickNote",
    link: "https://github.com/Jschles1/notes-tw",
    website: "https://quicknote-app.vercel.app/",
    description: [
      "Single page application that allows users to create, update, and delete notes through a rich text editor.",
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
