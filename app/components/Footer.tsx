import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex py-12 items-center font-primary justify-center">
      <div className="w-[90vw] max-w-[1200px] md:h-[50vh] px-8 md:px-20 rounded-2xl bg-[#16472A] flex flex-col md:flex-row items-center justify-between gap-8 py-12">
        {/* Left Content */}
        <div className="w-full md:w-full flex flex-col gap-6 text-center md:text-left">
          <h3 className="text-[36px] md:text-[48px] text-white leading-tight">
            Join our journey and get <br /> early access
          </h3>
          <p className="text-[16px] md:text-[18px] text-[#C1C1C1] leading-snug">
            Join our extensive waitlist today to spark <br /> connection and get notified when we launch!
          </p>
        </div>

        {/* Right Content: Form */}
        <div className="w-full md:w-[40%] md:flex md:justify-end">
          <form className="flex flex-col gap-4 w-full md:w-[25vw]">
            <input
              type="text"
              placeholder="Your full name"
              className="w-full py-4 px-6 rounded-xl bg-[#F4F4F4] text-black"
            />
            <input
              type="email"
              placeholder="Your working email"
              className="w-full py-4 px-6 rounded-xl bg-[#F4F4F4] text-black"
            />
            <button
              type="submit"
              className="w-full bg-[#038B49] text-white p-4 rounded-xl flex justify-center items-center mt-4 hover:bg-[#026838] transition"
            >
              Join the waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
