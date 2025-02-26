"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/sketch.svg",
  "/autodesk.svg",
  "/revit.svg",
  "/autoCad.svg"
];

const FeaturedLogo = () => {
  return (
    <div className="w-full md:mt-12">
      {/* Static layout for larger screens */}
      <div className="hidden md:flex justify-center items-center gap-20 lg:gap-40 text-white">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt="Logo" width={120} height={50} />
        ))}
      </div>

      {/* Infinite carousel for smaller screens */}
      <div className="block md:hidden overflow-hidden relative w-full">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 200,
            ease: "linear"
          }}
        >
          {/* Duplicated logos for smooth looping */}
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <Image key={index} src={logo} alt="Logo" width={80} height={40} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedLogo;
