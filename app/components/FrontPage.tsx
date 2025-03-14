"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const FrontPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbw_7-cxESoTO7IbBH0s3U81YuQhBdLGykJ_cq44_fi_z81Dff0LXq0zHpMftch9wxBGrw/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `fullName=${encodeURIComponent(fullName)}&email=${encodeURIComponent(email)}`,
      });
  
      if (response.ok) {
        setMessage('Thank you for joining the waitlist!');
        setFullName('');
        setEmail('');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full text-white font-primary px-6 md:px-12 py-12">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left"
      >
        <span className="self-center md:self-start px-6 py-2 rounded-full border bg-white/20 text-base">
          Launching Soon
        </span>

        <h1 className="text-4xl md:text-6xl font-semibold mt-6 mb-4 leading-tight md:leading-tight">
          Unlock Ready-Made
          <br />
          Design Files for
          <br />
          <span className="text-4xl md:text-6xl font-bold text-[#50D669]">Architects</span>
        </h1>

        <p className="mt-4 mb-8 text-lg max-w-lg font-secondary text-[#D9D9D9]">
          Access a vast library of ready-made design files for architectural models, 3D visualizations, 
          interior design concepts, and product designs. Streamline your design process and bring projects 
          to life faster.
        </p>
      </motion.div>

      {/* Right Section - Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="w-full md:w-[30rem] flex flex-col p-6 rounded-3xl font-primary bg-white text-black items-center shadow-lg"
      >
        <div className="w-full max-w-md p-6">
          <h2 className="text-center text-3xl font-medium">
            Join our journey and
            <br />
            Get early access
          </h2>

          <p className="text-center text-lg text-[#8D9797] mt-3">
            Join our extensive waitlist today to spark connection and get notified when we launch!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-6">
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              placeholder="Your full name"
              className="w-full p-3 rounded-md bg-[#F4F4F4] border focus:ring-2 focus:ring-[#038B49] outline-none transition"
            />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Your working email"
              className="w-full p-3 rounded-md bg-[#F4F4F4] border focus:ring-2 focus:ring-[#038B49] outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-[#038B49] text-white p-3 rounded-md flex justify-center items-center gap-2 mt-4 hover:bg-[#026636] transition"
            >
              <span>Join the waitlist</span>
            </button>
          </form>
          {message && <p>{message}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default FrontPage;
