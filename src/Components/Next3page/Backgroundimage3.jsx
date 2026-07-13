import React from 'react';
import Page3 from '../../assets/Page3.jpg';
import MainContent from './MainContent'; 

const Backgroundimage = () => {
  return (
    <div className="relative w-full z-20 flex flex-col overflow-hidden bg-white text-black pt-2 pb-12 lg:pt-4 lg:pb-16">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${Page3})` }} 
      />

      {/* White Overlay Layer */}
      <div className="absolute inset-0 w-full h-full bg-white/20 z-1" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16">
        <MainContent />
      </div>

    </div>
  );
};

export default Backgroundimage;