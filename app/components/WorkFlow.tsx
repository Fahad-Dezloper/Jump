"use client";
import React from "react";
import { motion } from "framer-motion";

const WorkFlow = () => {
  const logos = [
    "/dynamo.svg",
    "/bigAutoCad.svg",
    "/bigAutoDesk.svg",
    "/grass.svg",
    "/revizto.svg",
  ];

  return (
    <div className="flex w-full flex-col gap-10 h-full font-primary items-center mt-14 justify-center overflow-hidden">
      {/* Heading */}
      <h1 className="text-[40px] sm:text-[50px] md:text-[64px] text-center leading-none">
        fits right into your <br /> work flow
      </h1>

      {/* Infinite Scrolling Carousel */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-14 w-max"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 200,
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt="" className="w-[100px] sm:w-[140px] md:w-[160px] h-auto" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WorkFlow;
