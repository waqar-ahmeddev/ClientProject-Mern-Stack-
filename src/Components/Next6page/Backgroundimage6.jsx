import React from 'react';
import Page2 from '../../assets/Page2.avif';
import MainContent from './MainContent';

const Backgroundimage6 = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-start justify-start py-8 md:py-12">

      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${Page2})` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-14">
        <MainContent />
      </div> 

    </div>
  );
};

export default Backgroundimage6;