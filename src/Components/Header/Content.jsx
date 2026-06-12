import React from 'react';

const Content = () => {
  return (
    <div className="flex flex-col items-start justify-center text-center px-8 select-none mt-20">
      
      {/* Main Heading (Bigger, Bold, Condensed look) */}
      <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight font-sans mb-4 drop-shadow-md pl-20">
        For Homes That Refuse Ordinary.
      </h1>

      {/* Subheading (Thin, clean text) */}
      <p className="text-white text-base md:text-lg font-bold tracking-wide max-w-5xl opacity-90 drop-shadow-sm pl-20 whitespace-nowrap">
        High-performance windows and doors, manufactured on Vancouver Island for homes across British Columbia.
      </p>

    </div>
  );
};

export default Content;