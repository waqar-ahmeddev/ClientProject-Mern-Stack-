import React from 'react';
import Page2 from '../../assets/Page2.avif';
import MainContent from './MainContent';

const Backgroundimage4 = () => {
  return (
    // min-h-screen se yeh poori screen gherega aur bg-black lagaya ha taaki dark theme aaye
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center py-12 md:py-20">

      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40" // opacity kam ki ha taaki text saaf nazar aaye
        style={{ backgroundImage: `url(${Page2})` }}
      />

      {/* Content Layer (Yeh sab kuch center me balanced rakhega) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-12">
        <MainContent />
      </div>

    </div>
  );
};

export default Backgroundimage4;