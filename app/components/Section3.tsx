"use client";
import React from "react";
import { motion } from "motion/react";

const Section3 = () => {
  return (
    <div className="w-full flex items-center justify-center px-4 md:px-10 py-16 font-primary">
      <div className="flex flex-col gap-4 items-center justify-center text-center bg-white">
        {/* Main Text */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[68px] text-black">
          Bored of Using Pinterest
        </h1>

        {/* Blurred Text */}
        <motion.h2
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[60px] text-[#707070] blur-sm mt-2"
        >
          Use Desizn Bank
        </motion.h2>
      </div>
    </div>
  );
};

export default Section3;
