import React from 'react';
import Quote from './Components/Header/Quote';
import LOGOnero from './assets/LOGOnero.png';

const Quotebutt = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 select-none">
      
      {/* 1. Buttons Block */}
      <div className="w-full">
        <Quote isDarkBg={false} showArrow={false} />
      </div>
      
      {/* 2. Logo Block */}
      <div className="w-full max-w-[180px] mx-auto -mt-10 ml-38 opacity-90 hover:opacity-100 transition-opacity">
        <img 
          src={LOGOnero} 
          alt="Nero Logo" 
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default Quotebutt;