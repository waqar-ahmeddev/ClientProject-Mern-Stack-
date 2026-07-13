import React from 'react';

// 🚀 Props receive kiye: isDarkBg (default true) aur showArrow (default true)
const Quote = ({ isDarkBg = true, showArrow = true }) => {
  return (
    // Agar bg white ha toh pl-28 ko align karne ke liye adjust kar sakte hain
    <div className={`flex flex-col items-start w-full select-none ${isDarkBg ? 'mt-32 pl-28' : 'mt-4 pl-0'}`}>
      
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-6 mb-16">
        
        {/* Get a Quote Button */}
        {/* 🚀 Dynamic Tailwind Classes: Agar isDarkBg false ha toh border-black aur text-black ho jayega */}
        <button className={` cursor-pointer px-10 py-4 text-2xl font-semibold border-2 rounded-full bg-transparent transition-all duration-300 min-w-[220px]
          ${isDarkBg 
            ? 'text-white border-white/80 hover:bg-white hover:text-black' 
            : 'text-black border-black hover:bg-black hover:text-white'
          }`}
        >
          Get a Quote
        </button>

        {/* Book a Consultation Button */}
        <button className={`cursor-pointer px-10 py-4 text-2xl font-semibold border-2 rounded-full bg-transparent transition-all duration-300 min-w-[260px]
          ${isDarkBg 
            ? 'text-white border-white/80 hover:bg-white hover:text-black' 
            : 'text-black border-black hover:bg-black hover:text-white'
          }`}
        >
          Book a Consultation
        </button>

      </div>

      {/* Down Arrow Icon Animation */}
      {/* 🚀 Condition lagayi: Agar showArrow true hoga tabhi arrow dikhega */}
      {showArrow && (
        <div className="animate-bounce cursor-pointer -mt-8 pl-155">
          <svg 
            className="w-24 h-24 text-white/90 stroke-[3]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      )}

    </div>
  );
};

export default Quote;