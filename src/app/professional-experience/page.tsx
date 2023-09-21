import Image, { StaticImageData } from "next/image";
import EncoraLogo from "public/images/experience/encora-logo.jpeg";

type ExperienceItemData = {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  image: StaticImageData;
};

const experienceItems: ExperienceItemData[] = [
  {
    id: 1,
    company: "Encora Technologies",
    position: "Senior Frontend Developer",
    duration: "December 2020 - February 2023",
    image: EncoraLogo,
    description: [
      "Led a team to implement the frontend on LG's headless CMS ecommerce website for LG employees and partners.",
      "Mentored junior developers on best frontend development guidelines for HTML, CSS and JavaScript.",
      "Led a team of three mid-level engineers to integrate Avon's frontend checkout flow with Cybersource's payment processor, allowing Avon to meet PCI security standards for their website.",
    ],
  },
  {
    id: 2,
    company: "Encora Technologies",
    position: "Software Developer",
    duration: "January 2018 - December 2020",
    image: EncoraLogo,
    description: [
      "Utilized HTML, CSS, and JavaScript to design and implement user interfaces.",
      "Provided proficiency and guidance on frontend libraries such as React.",
      "Performed A/B testing and optimized application performance to increase conversions on ecommerce solutions for brands such as 1-800-Flowers.",
    ],
  },
];

function ExperienceItem({
  company,
  position,
  duration,
  description,
  image,
}: ExperienceItemData) {
  return (
    <div className="flex items-center gap-4 mb-8 last-of-type:mb-0">
      <div className="w-16 h-16 z-10 items-center justify-center rounded-md text-3xl hidden md:flex">
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>
      <div className="bg-white z-10 md:basis-[90%]">
        <div className="flex items-center gap-x-2 mb-4">
          <div className="block">
            <Image src={image} alt={`${company} Logo`} width={64} height={64} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800">{company}</h3>
            <p className="text-md font-medium text-gray-800">{position}</p>
            <p className="text-md font-medium text-gray-400">{duration}</p>
          </div>
        </div>

        <ul className="text-gray-400 pl-4">
          {description.map((item) => (
            <li key={item} className="ml-2 list-item list-disc">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ProfessionalExperience() {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md before:content-none md:before:content-[''] before:left-[3.4rem] before:top-8 before:w-[2px] before:absolute before:h-[calc(100%-4rem)] relative before:bg-gray-200">
            {experienceItems.map((item) => (
              <ExperienceItem {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
