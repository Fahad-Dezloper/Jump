import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-full flex py-12 items-center font-primary justify-center'>
        <div className='w-[90vw] h-[70vh] px-20 rounded-2xl bg-[#16472A] flex items-center justify-between'>\
            <div className='w-full flex flex-col gap-7'>
                <h3 className='text-[54px] text-white leading-tight'>join our journey and get <br /> early access</h3>
                <p className='text-[18px] text-[#C1C1C1] leading-snug'>join our extensive waitlist today to spark <br /> connection and get notified when we launch!</p>
            </div>
            <div className='w-fit '>
            <form className="flex flex-col gap-4 w-[25vw]">
            <div>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full py-4 px-6 rounded-xl bg-[#F4F4F4]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your working email"
                className="w-full py-4 px-6 rounded-xl bg-[#F4F4F4]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#038B49] text-white p-3 rounded-xl flex justify-center items-center mt-4"
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

export default Footer