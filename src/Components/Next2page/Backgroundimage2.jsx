import React from 'react';
import Page2 from '../../assets/Page2.avif';
import Card from './Card';
import Content from './Content';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import ImageGallery from './ImageGallery';

const Backgroundimage2 = () => {
  return (
    // 🔥 Inline style se hata kar image ko standard tailwind layers me set kiya ha taaki full width responsive rahe
    <div className="relative w-full min-h-screen z-20 flex flex-col justify-center overflow-hidden bg-black">
      
      {/* 1. Asli Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Page2})` }}
      />

      {/* 2. Dark Overlay Layer (Jo original image jaisi vibe dega aur text pop karega) */}
      <div className="absolute inset-0 w-full h-full bg-black/45 z-1" />
      
      {/* 3. Main Content aur Cards Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content Component */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <Content />
        </div>

        {/* Right Side: 2x2 Grid for Cards */}
        <div className="w-full lg:w-[52%] grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          <Card />
          <Card2 />
          <Card3 />
          <Card4 />
        </div>
      </div>
      <div className="w-full border-t border-white/10 pt-8"> 
          <ImageGallery />
        </div>
    </div>
  );
};

export default Backgroundimage2;