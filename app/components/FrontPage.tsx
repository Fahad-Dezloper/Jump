import React from 'react'

const FrontPage = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full text-white font-primary">
      {/* Left Section */}
      <div className="w-full md:w-[60%] p-8 flex flex-col justify-center">
        <div className="inline-block">
          <span className="px-6 py-2 rounded-full border bg-white/20 text-base">launching soon</span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-semibold mt-6 mb-4">
          Unlock Ready-Made
          <br />
          Design Files for
          <br />
          <span className="text-4xl md:text-7xl font-bold text-[#50D669]">Architects</span>
        </h1>
        
        <p className="mt-4 mb-8 text-base max-w-lg font-secondary text-[#D9D9D9]">
          Access a vast library of ready-made design files for architectural models, 3D
          visualizations, interior design concepts, and product designs. Streamline your
          design process and bring projects to life faster.
        </p>
      </div>
      
      {/* Right Section */}
      <div className="w-full md:w-[26rem] md:flex-col flex pt-5 px-4 rounded-3xl font-primary bg-white text-black items-center">
        <div className="w-full max-w-md p-6 rounded-lg md:flex md:flex-col md:gap-3">
          <h2 className="text-center text-3xl font-medium">
            join our journey and
            <br />
            get early access
          </h2>
          
          <p className="text-center text-[18px] leading-snug text-[#8D9797]">
            join our extensive waitlist today to <br />
            spark connection and get notified <br />
            when we launch!
          </p>
          
          <form className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full p-3 rounded-md bg-[#F4F4F4]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your working email"
                className="w-full p-3 rounded-md bg-[#F4F4F4]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#038B49] text-white p-3 rounded-md flex justify-center items-center mt-4"
            >
              <span>Join the waitlist</span>
              {/* <span>→</span> */}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FrontPage