import React from "react";

const Usefullness = () => {
  const statsData = [
    {
      id: 1,
      value: "60%",
      title: "Lower costs",
      description:
        "Desizn Bank saves architects marketing costs and buyers up to 90% on designs. No middlemen, low fees, secure payments, and AI matching make premium architecture affordable for all.",
    },
    {
      id: 2,
      value: "2.5X",
      title: "Faster delivery",
      description:
        "Desizn Bank can deliver customizable design faster than the traditional design delivery system.",
    },
    {
      id: 3,
      value: "5X",
      title: "Modern approach",
      description:
        "Desizn Bank redefines architecture with a modern, digital-first marketplace—connecting global talent, cutting costs, and delivering innovative designs seamlessly. Where creativity meets efficiency.",
    },
  ];

  return (
    <div className="font-primary flex flex-col items-center gap-16 px-4 md:px-6">
      {/* Heading */}
      <h2 className="text-[40px] sm:text-[50px] md:text-[57px] font-medium leading-tight text-center">
      Desizn Bank{" "}
        <span className="text-[#50D669]">
          Where Vision Meets <br /> Opportunity.
        </span>
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 w-full justify-center">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#F4F4F4] p-6 flex flex-col gap-4 rounded-xl shadow-md text-left max-w-[337px] mx-auto lg:mx-0"
          >
            <h3 className="text-[50px] sm:text-[60px] md:text-[66px] leading-none">
              {stat.value}
            </h3>
            <h4 className="text-[28px] sm:text-[32px] md:text-[35px] leading-none">
              {stat.title}
            </h4>
            <p className="text-[#707070] text-sm sm:text-base leading-tight">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Usefullness;
