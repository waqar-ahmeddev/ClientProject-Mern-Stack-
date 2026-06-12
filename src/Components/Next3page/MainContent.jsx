import React from 'react';
import Door from '../../assets/Door.png';

const MainContent = () => {
  return (
    // 🚀 max-w-[1400px] lagaya ha taaki design design standard size me locked rahe aur screen se bahar na bhage
    <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20 px-8 lg:px-16 py-12 md:py-20 select-none font-sans text-black">
      
      {/* 1. LEFT SIDE: Complete Text Block */}
      {/* 🚀 lg:max-w-[55%] se text tight rahega aur right side par push nahi karega, beech me khali space bachegi */}
      <div className="w-full lg:max-w-[55%] flex flex-col">
        
        {/* Main Title Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-none">
          A Window Like No Other.
        </h1>

        {/* Subheading / Tagline */}
        <h3 className="text-lg md:text-xl font-normal mb-8 tracking-wide text-black">
          Not all Windows are Built the Same.
        </h3>

        {/* Paragraphs Description Block */}
        <div className="space-y-6 text-sm md:text-base font-normal leading-relaxed text-gray-900 tracking-normal pr-4">
          <p>
            Every system we manufacture is engineered with precision for longevity, and uncompromising performance. 
            At the core is our advanced V-Perfect welding technology, creating seamless corners with exceptional 
            strength, and a refined architectural finish that conventional fabrication methods cannot replicate.
          </p>

          <p>
            The multi-chamber construction, reinforced wall thicknesses between 2.5–3mm, and precision-engineered 
            thermal barriers work together to deliver superior efficiency, rigidity, and long-term reliability in every climate. 
            Inside each frame, a 10-chamber design enhances thermal performance, acoustic insulation, and overall 
            structural integrity — creating quieter, more comfortable homes without sacrificing aesthetics.
          </p>

          <p>
            From the welds you barely notice to the performance you feel every day, every detail is engineered to exceed 
            modern expectations for efficiency, durability, and design.
          </p>
        </div>
      </div>

      {/* 2. RIGHT SIDE: Window Image Block */}
      {/* 🚀 lg:w-[35%] kiya ha aur items-end taaki yeh left wale text se bilkul dhoor extreme right par show ho */}
      <div className="w-full lg:w-[35%] flex justify-center lg:justify-end lg:mt-6 ">
        <img 
          src={Door} 
          alt="Window Showcase" 
          // 🚀 max-w-[400px] se image ka size bilkul aapke design ke mutabiq solid aur balance dikhega
          className="w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[400px] h-auto object-contain" 
        />
      </div>

    </div>
  );
};

export default MainContent;