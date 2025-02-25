import React from 'react'

const WorkFlow = () => {
  return (
    <div className='flex w-full flex-col gap-10 h-full font-primary items-center mt-14 justify-center'>
        <h1 className='text-[64px] text-center leading-none'>fits right into your <br /> work flow</h1>
        <div className='flex items-center gap-28'>
            <img src="/dynamo.svg" alt="" className='w-full h-full' />
            <img src="/bigAutoCad.svg" alt="" className='w-full h-full' />
            <img src="/bigAutoDesk.svg" alt="" className='w-full h-full' />
            <img src="/grass.svg" alt="" className='w-full h-full' />
            <img src="/revizto.svg" alt="" className='w-full h-full' />
        </div>
    </div>
  )
}

export default WorkFlow