import React from 'react';
import Page3 from '../../assets/Page3.jpg';
import SharedMainContent from './MainContent'; 

const Backgroundimage5 = () => {
  return (
    // Parent container: Isko section bana diya aur layout ko isolate kar diya taaki text blur na ho
    <section className="relative w-full min-h-screen bg-white text-black flex items-center justify-center py-12 md:py-20 isolation-auto antialiased">

      {/* 1. Background Layer: Isko bilkul alag thalag kar diya taaki yeh content ko affect na kare */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 pointer-events-none select-none"
        style={{ 
          backgroundImage: `url(${Page3})`,
          willChange: 'transform' // Browser ko pehle se batata hai ke isey text se alag render karna hai
        }}
      />

      {/* 2. Content Layer: Iski max-w ko w-full kiya taaki aapke MainContent ka [1400px] khul kar samne aaye */}
      <div className="relative z-10 w-full h-full">
        <SharedMainContent />
      </div>

    </section>
  );
};

export default Backgroundimage5;