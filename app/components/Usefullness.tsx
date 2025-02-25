import React from 'react'

const Usefullness = () => {
    const statsData = [
        {
          id: 1,
          value: "60%",
          title: "Lower costs",
          description:
            "Design Jump saves architects marketing costs and buyers up to 90% on designs. No middlemen, low fees, secure payments, and AI matching make premium architecture affordable for all.",
        },
        {
          id: 2,
          value: "2.5X",
          title: "Faster delivery",
          description:
            "Design Jump can deliver customizable design faster than the traditional design delivery system.",
        },
        {
          id: 3,
          value: "5X",
          title: "Modern approach",
          description:
            "Design Jump redefines architecture with a modern, digital-first marketplace—connecting global talent, cutting costs, and delivering innovative designs seamlessly. Where creativity meets efficiency.",
        },
      ];

  return (
    <div className='font-primary flex flex-col items-center gap-16'>
      {/* Heading */}
      <h2 className="text-[57px] font-medium leading-tight text-center">
        Design Jump{" "}
        <span className="text-[#50D669]">Where Vision Meets <br /> Opportunity.</span>
      </h2>

      {/* Stats Cards */}
      <div className="flex gap-16 w-full justify-center px-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="bg-[#F4F4F4] p-6 w-[337px] flex flex-col gap-6 rounded-xl shadow-md text-left"
          >
            <h3 className="text-[66px] leading-none">{stat.value}</h3>
            <h4 className="text-[35px] leading-none">
              {stat.title}
            </h4>
            <p className="text-[#707070] text-base leading-tight">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Usefullness