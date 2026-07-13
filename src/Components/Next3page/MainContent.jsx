import React from 'react';
import Door from '../../assets/Door.png';
import Quotebutt from '../../Quotebutt';

const MainContent = ({
  title = "A Window Like No Other.",
  subTitle = "Not all Windows are Built the Same.",
  p1 = "Every system we manufacture is engineered with precision for longevity, and uncompromising performance. At the core is our advanced V-Perfect welding technology, creating seamless corners with exceptional strength, and a refined architectural finish that conventional fabrication methods cannot replicate.",
  p2 = "The multi-chamber construction, reinforced wall thicknesses between 2.5–3mm, and precision-engineered thermal barriers work together to deliver superior efficiency, rigidity, and long-term reliability in every climate. Inside each frame, a 10-chamber design enhances thermal performance, acoustic insulation, and overall structural integrity — creating quieter, more comfortable homes without sacrificing aesthetics.",
  p3 = "From the welds you barely notice to the performance you feel every day, every detail is engineered to exceed modern expectations for efficiency, durability, and design.",
  imgSrc = Door 
}) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 px-8 lg:px-16 py-6 md:py-10 select-none font-sans text-black">
      
      {/* 1. LEFT SIDE: Text + Buttons + Logo — sab ek hi column me */}
      <div className="w-full lg:max-w-[55%] flex flex-col">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-none">
          {title}
        </h1>

        <h3 className="text-lg md:text-xl font-normal mb-6 tracking-wide text-black">
          {subTitle}
        </h3>

        <div className="space-y-4 text-sm md:text-base font-normal leading-relaxed text-gray-900 tracking-normal pr-4">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
        </div>

        {/* 🚀 Buttons + Logo ab yahin, text ke turant neeche */}
        <div className="mt-6">
          <Quotebutt />
        </div>
      </div>

      {/* 2. RIGHT SIDE: Window Image Block */}
      <div className="w-full lg:w-[35%] flex justify-center lg:justify-end lg:mt-6 transition-transform duration-300 hover:scale-95 cursor-pointer">
        <img 
          src={imgSrc} 
          alt="Showcase" 
          className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain" 
        />
      </div>

    </div>
  );
};

export default MainContent;