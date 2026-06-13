import React from 'react';

const Card = (props) => {
  return (
    // 🔥 pb-0 kar diya taaki bottom se space khatam ho jaye aur icon neeche end par jud jaye
    <div className="bg-[#B2533E] text-white p-8 md:p-10 pb-0 md:pb-0 rounded-[2.5rem] w-full shadow-xl flex flex-col justify-between select-none hover:bg-gray-600 cursor-pointer transition-colors duration-300 min-h-[380px]">
      
      {/* Top Section: Heading and Paragraph */}
      <div>
        <h2 className="text-2xl font-extrabold tracking-tight mb-4 font-sans leading-tight">
          {props.title}
        </h2>

        <p className="text-base md:text-lg font-normal leading-relaxed opacity-95 tracking-wide">
          {props.description}
        </p>
      </div>

      {/* Bottom Section: Icon bilkul end par jura hua */}
      {props.icon && (
        <div className="mt-auto pt-6 mb-4 md:mb-6 flex justify-start items-center">
          {props.icon}
        </div>
      )}

    </div>
  );
};

export default Card;