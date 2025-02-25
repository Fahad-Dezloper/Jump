"use client"
import React from 'react'
import { motion } from "motion/react"

const Section3 = () => {
  return (
    <div className='w-full flex items-center justify-center font-primary'>
        <div className="flex flex-col items-center justify-center bg-white">
      {/* Main Text */}
      <h1 className="text-[68px] text-black">Bored of Using Pinterest</h1>
      
      {/* Blurred Text */}
      <motion.h2 
        initial={{ opacity: 0.6 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-[60px] text-[#707070] blur-sm"
      >
        Use Design Jump
      </motion.h2>
    </div>
    </div>
  )
}

export default Section3