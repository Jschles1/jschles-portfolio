import SkillItem from "./SkillItem";

const professionalSkillData = [
  {
    id: 1,
    title: "HTML / CSS",
    yearsExperience: 5,
  },
  {
    id: 2,
    title: "JavaScript",
    yearsExperience: 5,
  },
  {
    id: 3,
    title: "TypeScript",
    yearsExperience: 3,
  },
  {
    id: 4,
    title: "ReactJS",
    yearsExperience: 5,
  },
  {
    id: 5,
    title: "Redux",
    yearsExperience: 5,
  },
  {
    id: 6,
    title: "Next.js",
    yearsExperience: 3,
  },

  {
    id: 8,
    title: "SCSS",
    yearsExperience: 2,
  },
  {
    id: 9,
    title: "Leading Frontend Projects and Teams",
    yearsExperience: 2,
  },
  {
    id: 10,
    title: "Mentoring Junior Developers",
    yearsExperience: 2,
  },
  {
    id: 11,
    title: "Giving Code Reviews",
    yearsExperience: 2,
  },
  {
    id: 12,
    title: "TailwindCSS",
    yearsExperience: 1,
  },
  {
    id: 13,
    title: "NodeJS",
    yearsExperience: 1,
  },
  {
    id: 14,
    title: "MongoDB",
    yearsExperience: 2,
  },
  {
    id: 15,
    title: "AWS Lambda",
    yearsExperience: 1,
  },
  {
    id: 16,
    title: "AWS S3",
    yearsExperience: 1,
  },
  {
    id: 17,
    title: "AWS Step Functions",
    yearsExperience: 1,
  },
  {
    id: 18,
    title: "Puppeteer",
    yearsExperience: 1,
  },
  {
    id: 19,
    title: "Python",
    yearsExperience: 1,
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              My Skills:
            </h3>
          </div>
        </div>
        {professionalSkillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
