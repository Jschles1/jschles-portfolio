import image1 from "public/images/portfolio/mentormaps.png";
import image2 from "public/images/portfolio/quicknote.png";
import image3 from "public/images/portfolio/herbhub.png";
import image4 from "public/images/portfolio/audiophile.png";
import PortfolioItem from "@/components/pages/Portfolio/PortfolioItem";

const flag = true;
// const flag = false;

let portfolioData = [
  {
    id: 4,
    image: image4,
    title: "Audiophile",
    link: "https://github.com/Jschles1/audiophile",
    website: "https://quicknote-app.vercel.app/",
    description: [
      "Mock e-commerce application for audio equipment. Built to mimic the functionality and experience of a real e-commerce site.",
      "Built with Next.js 13, Typescript, TailwindCSS, Shadcn UI, React Query, Prisma and PostgreSQL.",
    ],
  },
  {
    id: 1,
    image: image1,
    title: "MentorMaps",
    link: "https://github.com/Jschles1/mentormaps",
    website: "https://mentormaps.vercel.app/",
    description: [
      "Web application that allows mentors guide mentees towards their career or personal goals through the creation of roadmaps and milestones.",
      "Built with Next.js 13, Typescript, TailwindCSS, Shadcn UI, React Query, Clerk, Prisma and PostgreSQL.",
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

if (!flag) {
  portfolioData = portfolioData.filter((portfolio) => portfolio.id !== 3);
}

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
