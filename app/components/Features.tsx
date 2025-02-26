import React from "react";

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
    <div className="font-primary">
      <section className="py-12 bg-white text-center px-4">
        {/* Heading */}
        <h2 className="text-3xl font-medium">Features</h2>
        <p className="text-[#9C9C9C] text-lg leading-tight max-w-3xl mx-auto mt-2">
          Streamline your design process with our vast library of ready-made
          design files, carefully curated to bring your projects to life faster.
        </p>

        {/* Responsive Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:flex gap-6 w-full items-center justify-center">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6  rounded-xl shadow-md border lg:w-[297px] lg:h-[330px] text-left flex flex-col items-center lg:items-start"
            >
              {/* Feature Image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full"
              />

              {/* Title & Description */}
              <div className="flex flex-col gap-1 text-center lg:text-left">
                <h3 className="mt-4 text-xl font-medium">{feature.title}</h3>
                <p className="text-[#8D9797] text-sm leading-tight">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
