import React from 'react'

const Features = () => {

const featuresData = [
  {
    id: 1,
    title: "Monoboard Mapping",
    description:
      "Start by exploring our library of themes and AI tools. Choose the perfect setup that aligns with your vision.",
    image: "/monoboard.svg",
  },
  {
    id: 2,
    title: "Buy & Sell Designs",
    description:
      "Enter your script or idea, and let our AI work its magic to craft a stunning faceless video in seconds.",
    image: "/designs.svg",
  },
  {
    id: 3,
    title: "Materials List",
    description:
      "Enter your script or idea, and let our AI work its magic to craft a stunning faceless video in seconds.",
    image: "/material.svg",
  },
];

  return (
    <div className='font-primary'>
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-medium">Features</h2>
      <p className="text-[#9C9C9C] text-[20px] leading-tight max-w-3xl mx-auto mt-2">
        Streamline your design process with our vast library of ready-made design files, 
        carefully curated to bring your projects to life faster.
      </p>

      <div className="mt-8 flex gap-6 w-full items-center justify-center">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="bg-white w-[297px] h-[357px] p-6 rounded-xl shadow-md border text-left flex flex-col items-center"
          >
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-contain"
            />
            <div className='flex flex-col gap-1'>
            <h3 className="mt-4 text-[24px] font-medium">{feature.title}</h3>
            <p className="text-[#8D9797] text-base leading-tight">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Features