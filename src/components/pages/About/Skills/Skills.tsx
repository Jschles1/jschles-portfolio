import SkillItem from "./SkillItem";

const skillData = [
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
    id: 7,
    title: "TailwindCSS",
    yearsExperience: 1,
  },
  {
    id: 8,
    title: "SCSS",
    yearsExperience: 2,
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
