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
];

const personalSkillData = [
  {
    id: 1,
    title: "Leading Frontend Projects and Teams",
    yearsExperience: 2,
  },
  {
    id: 2,
    title: "Mentoring Junior Developers",
    yearsExperience: 2,
  },
  {
    id: 3,
    title: "Giving Code Reviews",
    yearsExperience: 2,
  },
];

const learningSkillData = [
  {
    id: 1,
    title: "TailwindCSS",
  },
  {
    id: 2,
    title: "NodeJS",
  },
  {
    id: 3,
    title: "MongoDB",
  },
  {
    id: 4,
    title: "AWS Lambda",
  },
  {
    id: 5,
    title: "AWS S3",
  },
  {
    id: 6,
    title: "AWS Step Functions",
  },
  {
    id: 7,
    title: "Puppeteer",
  },
  {
    id: 8,
    title: "Python",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Skills I Have Professional Experience In:
            </h3>
          </div>
        </div>
        {professionalSkillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              I&apos;m Also Professionally Experienced in the Practices of:
            </h3>
          </div>
        </div>
        {personalSkillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">
              Skills I&apos;m Currently Learning or Using in Personal Projects:
            </h3>
          </div>
        </div>
        {learningSkillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
