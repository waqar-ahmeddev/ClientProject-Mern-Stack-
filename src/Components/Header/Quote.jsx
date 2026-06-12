import React from 'react';

const Quote = () => {
  return (
    <div className="flex flex-col items-start w-full select-none mt-32 pl-28">
      
      {/* Buttons Container */}
      <div className="flex flex-col sm:flex-row gap-6 mb-16">
        
        {/* Get a Quote Button */}
        <button className="px-10 py-4 text-white text-2xl font-semibold border-2 border-white/80 rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300  min-w-[220px]">
          Get a Quote
        </button>

        {/* Book a Consultation Button */}
        <button className="px-10 py-4 text-white text-2xl font-semibold border-2 border-white/80 rounded-full bg-transparent hover:bg-white hover:text-black transition-all duration-300 min-w-[260px]">
          Book a Consultation
        </button>

      </div>

      {/* Down Arrow Icon Animation */}
      <div className="animate-bounce cursor-pointer mt-4 pl-155">
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

    </div>
  );
};

export default Quote;