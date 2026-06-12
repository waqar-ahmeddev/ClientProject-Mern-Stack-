import React from 'react';

const Card = () => {
  return (
    // 🔥 Yahan max-w-md ke sath w-full lagaya ha taaki card rigid (sakht) na rahe, responsive ho jaye
    <div className="bg-[#B2533E] text-white p-8 md:p-10 rounded-[2.5rem] w-80 shadow-xl flex flex-col justify-between aspect-square select-none h-96 hover:bg-gray-600 cursor-pointer">
      
      {/* Top Section: Heading and Paragraph */}
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight mb-6 font-sans leading-tight">
          A Legacy of <br /> Performance
        </h2>

        <p className="text-lg  font-normal leading-relaxed opacity-95 tracking-wide">
          Designed and manufactured on Vancouver Island since 1977 for the demands of coastal British Columbia.
        </p>
      </div>

      {/* Bottom Section: Maple Leaf SVG Icon */}
      <div className="mt-8 flex justify-start">
        <svg 
          className="w-12 h-12 text-white fill-current"
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2s.5 1.5 1.5 2.5c0 0 1.5-.5 2 0s-.5 2 .5 2.5c0 0 2-.5 2 .5s-1.5 1.5-1 2.5c0 0 1.5.5 1.5 1.5s-2 1-2.5 2.5c0 0 1.5 1.5 1 2.5s-2.5-.5-3.5 0c0 0 0 2-.5 3s-1 1-1 2.5h-1c0-1.5-.5-1.5-1-2.5s-.5-3-.5-3c-1-.5-3 0-3.5 0s-1-1-1-2.5c-.5-1.5-2.5-2.5-2.5-2.5s-2-.5-2-1.5 1.5-1.5 1.5-1.5c.5-1-1-2-1-2.5s2-.5 2-.5c1-.5.5-2 .5-2.5s2 0 2 0c1-1 1.5-2.5 1.5-2.5S11.5 2 12 2z"/>
        </svg>
      </div>

    </div>
  );
};

export default Card;