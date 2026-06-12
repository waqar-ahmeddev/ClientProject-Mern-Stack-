import React from 'react';
import Page3 from '../../assets/Page3.jpg';
import MainContent from './MainContent'; 
import Quotebutt from '../../Quotebutt';

const Backgroundimage = () => {
  return (
    // Outer layout ko flexible flex-col aur justify-between diya ha taaki spacing natural rahe
    <div className="relative w-full min-h-screen z-20 flex flex-col justify-between overflow-hidden bg-white text-black py-16 lg:py-24">
      
      {/* 1. Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${Page3})` }} 
      />

      {/* 2. White Overlay Layer */}
      <div className="absolute inset-0 w-full h-full bg-white/20 z-1" />
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col justify-start gap-4">
        
        {/* Main Text & Image Showcase */}
        <MainContent />
        
        {/* Buttons & Logo Section (Bina ajeeb negative margins ke perfectly neche align) */}
        <div className="w-full">
          <Quotebutt />
        </div>

      </div>

    </div>
  );
};

export default Backgroundimage;