import React from "react";
import Video from "./Video";
import Logo4 from "../../assets/Logo4.png";
const MainContent = () => {
  return (
    // lg:flex-row se desktop par aamne-saamne ho jayega, items-center se vertical alignment seedhi rahegi
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 select-none">
      
      {/* LEFT SIDE: Video Component Block */}
      {/* lg:w-[40%] se video/image area side par control me rahega */}
      <div className="w-full lg:w-[40%] flex justify-center h-full">
        <div className="w-full max-w-[350px] md:max-w-[400px] aspect-square rounded-2xl overflow-hidden shadow-2xl">
          <Video />
        </div>
      </div>

      {/* RIGHT SIDE: Text Description & Actions Block */}
      {/* lg:w-[55%] se text area ko zyada width di ha taaki paragraphs khule dikhein */}
      <div className="w-full lg:w-[55%] flex flex-col text-left">
        
        {/* Main Heading Title */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-sans">
          Thermoproof SunSmart™
        </h1>

        {/* Small Highlighted Subheading */}
        <h3 className="text-lg font-medium text-gray-300 mb-6 tracking-wide">
          Who says you can't do anything about the weather?
        </h3>

        {/* Paragraphs Block (space-y-4 se har para ke beech barabar gap aayega) */}
        <div className="space-y-4 text-sm md:text-base text-gray-300 font-normal leading-relaxed pr-2">
          <p>
            Every home deserves year-round climate control. Explore our precision-engineered glass units—built with advanced Low-E technology to dramatically improve thermal efficiency and reduce condensation.
          </p>
          <p>
            With the freedom to choose from Eight specialized SunSmart™ configurations, tailoring your windows for superior UV protection, acoustic performance, and energy savings has never been easier.
          </p>
        </div>

        {/* Action Button (Pill shaped aur border style jaisa pic me ha) */}
        <div className="mt-8">
          <button className="px-8 py-3 text-sm md:text-base font-medium text-white border border-white/60 rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            Explore SunSmart™
          </button>
        </div>
        <div className="mt-10 w-full max-w-[240px] md:max-w-[260px] opacity-90">
          <img 
            src={Logo4} 
            alt="Certifications Badges" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

    </div>
  );
};

export default MainContent;