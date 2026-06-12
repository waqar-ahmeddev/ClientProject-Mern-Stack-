import React, { useState } from 'react';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.webp';

const ImageGallery = () => {
  const images = [image1, image2, image3, image4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextPair = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 2) % images.length);
  };

  const handlePrevPair = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 2 + images.length) % images.length);
  };

  return (
    <div className="w-full py-4 -mt-10 px-6 sm:px-8 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

        {/* LEFT IMAGE */}
        <div className="relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-2xl aspect-[16/12] w-full">
          <img
            src={images[currentIndex]}
            alt="Gallery Left"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            style={{ filter: 'brightness(1.5) saturate(1.1)' }}
          />
          <button
            onClick={handlePrevPair}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 cursor-pointer rounded-full transition-all backdrop-blur-md z-30 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
              className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative group overflow-hidden rounded-[2rem] cursor-pointer shadow-2xl aspect-[16/12] w-full">
          <img
            src={images[(currentIndex + 1) % images.length]}
            alt="Gallery Right"
            className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            style={{ filter: 'brightness(1.5) saturate(1.1)' }}
          />
          <button
            onClick={handleNextPair}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-3 cursor-pointer rounded-full transition-all backdrop-blur-md z-30 shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
              className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
};

export default ImageGallery;