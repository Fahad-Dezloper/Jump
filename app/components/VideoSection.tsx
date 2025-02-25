import React from 'react'

const VideoSection = () => {
    const videoImage = ["/video.svg"]
  return (
    <div className='w-full h-fit flex items-center justify-center py-16'>
        {videoImage.map((item, i) => (
            <img key={i} src={item} alt="Video" className='w-[80vw] h-full' />
        ))}
    </div>
  )
}

export default VideoSection