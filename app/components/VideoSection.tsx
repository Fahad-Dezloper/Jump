import React from "react";
import Image from "next/image";

const VideoSection = () => {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="relative w-[90%] md:w-[80%] lg:w-[70%]">
        <Image
          src="https://ucarecdn.com/52db0821-c9d0-4590-842b-87bcd983d24a/Video.svg"
          alt="Video Thumbnail"
          width={1280}
          height={720}
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default VideoSection;
