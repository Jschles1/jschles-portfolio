interface Props {
  skill: {
    title: string;
    yearsExperience?: number;
  };
}

const SkillItem = (props: Props) => {
  const { title, yearsExperience } = props.skill;
  let yearsExperienceString = "";

  if (yearsExperience) {
    yearsExperienceString =
      yearsExperience === 1
        ? `${yearsExperience} Year`
        : `${yearsExperience} Years`;
  }

  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-gray-400 font-light">{title}</h5>
          {!!yearsExperience && (
            <span className="text-md text-blue-600 font-bold">
              {yearsExperienceString}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
