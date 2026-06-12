import React from 'react';
import Quote from './Components/Header/Quote';
import LOGOnero from './assets/LOGOnero.png';

const Quotebutt = () => {
  return (
    // 🚀 gap-10 ko hata kar items-start rakha ha taaki spacing control me rahe
    <div className="w-full flex flex-col items-start justify-start select-none">
      
      {/* 1. Buttons Block */}
      <div className="w-full">
        <Quote isDarkBg={false} showArrow={false} />
      </div>
      
      {/* 2. Logo Block */}
      {/* 🚀 -mt-12 lagane se logo Quote buttons ke kafi close (upar) aa jayega */}
      <div className="w-full max-w-[180px] -mt-12 opacity-90 hover:opacity-100 transition-opacity pl-2 ml-35">
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