import React from "react";
import video from "../../assets/video.mp4";

const Video = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover rounded-2xl pl-32"
    >
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;