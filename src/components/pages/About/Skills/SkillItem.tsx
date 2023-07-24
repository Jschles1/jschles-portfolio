interface Props {
  skill: {
    title: string;
    percentage: string;
  };
}

const SkillItem = (props: Props) => {
  const { title, percentage } = props.skill;
  return (
    <div className="w-full md:w-1/2">
      <div className="mb-4 md:mx-4">
        <div className="flex justify-between items-center mb-1">
          <h5 className="text-md text-gray-400 font-light">{title}</h5>
          <span className="text-md text-blue-600 font-bold">{percentage}</span>
        </div>
        <div className="w-full bg-blue-200 relative h-2 rounded">
          <div
            className="absolute h-full left-0 top-0 bg-blue-600 rounded"
            style={{ width: `${percentage}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
