import React from 'react';
import NayiWindowImage from '../../assets/img.gif';

const MainContent = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 lg:px-20 py-16 min-h-[480px] bg-white">
      
      {/* Left: Text Content */}
      <div className="flex-1 max-w-xl">
        <h1 className="text-5xl font-extrabold text-black leading-tight mb-4">
          Design Without Limits.
        </h1>

        <p className="text-sm text-gray-500 mb-5 font-bold">
          Infinite possibilities. Exceptional craftsmanship.
        </p>

        <p className="text-sm text-gray-800 leading-relaxed mb-4 font-bold">
          Every project deserves a finish as distinctive as its design. Explore
          premium materials and curated colour collections—all brought to life
          through our proprietary three-step finishing process.
        </p>

        <p className="text-sm text-gray-800 leading-relaxed mb-10 font-bold">
          With the freedom to select interior and exterior finishes independently,
          and customize colours, the possibilities are virtually limitless.
        </p>

        <button className="px-8 py-3 border border-black bg-transparent text-black text-sm font-normal rounded-full hover:bg-black hover:text-white transition-all duration-300 ease-in-out active:scale-95 cursor-pointer">
          See Finish and Colour Options
        </button>
      </div>

      {/* Right: Window Image */}
      <div className="flex-shrink-0 flex items-center justify-center mt-10 md:mt-0 md:ml-16">
        <img
          src={NayiWindowImage}
          alt="Red casement window"
          className="w-[260px] lg:w-[320px] object-contain"
        />
      </div>

    </div>
  );
};

export default MainContent;