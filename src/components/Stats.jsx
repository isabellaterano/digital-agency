const stats = [
  {
    id: "s1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "s2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "s3",
    title: "User Active",
    value: "3800+",
  },
];

const Stats = () => {
  return (
    <section className="flex-row flex-wrap flex justify-center items-center mt-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-center items-center flex-row m-3 bg-zinc-400 rounded-md p-8`}
        >
          <h4 className="font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ">
            {stat.value}
          </h4>
          <p className="font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
