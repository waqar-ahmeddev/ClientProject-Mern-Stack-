import React from 'react';
import Page2 from '../../assets/Page2.avif';
import Card from './Card';
import Content from './Content';
import Card2 from './Card2';
import Card3 from './Card3';
import Card4 from './Card4';
import ImageGallery from './ImageGallery';
import Icons from './Icons';

const Backgroundimage2 = (props) => {
  return (
    // 🔥 Inline style se hata kar image ko standard tailwind layers me set kiya ha taaki full width responsive rahe
    <div className="relative w-full min-h-screen z-20 flex flex-col justify-center overflow-hidden bg-black pb-28">
      
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
  
  {/* Card 1: Legacy Icon */}
  <Card 
    title="A Legacy of Performance" 
    description="Designed and manufactured on Vancouver Island since 1977 for the demands of coastal British Columbia."
    icon={<Icons name="legacy" />} 
  />

  {/* Card 2: Sustainability Icon */}
  <Card 
    title="Leadership in Sustainability"
    description="The first, and only, in British Columbia with an independently verified Environmental Product Declaration (EPD) for PVC window systems."
    icon={<Icons name="sustainability" />} 
  />

  {/* Card 3: Tech Icon */}
  <Card 
    title="Patented Manufacturing Technology"
    description="Advanced Italian production technology delivering seamless welds, tighter tolerances, and exceptional consistency."
    icon={<Icons name="tech" />} 
  />

  {/* Card 4: Building Icon */}
  <Card 
    title="Built Beyond the Minimum"
    description="Engineered for the 2030 building codes. Delivering superior thermal, structural, and acoustic performance."
    icon={<Icons name="building" />} 
  />

</div>
      </div>
      <div className="w-full border-t border-white/10 pt-8 -mt-20">
          <ImageGallery />
        </div>
    </div>
  );
};

export default Backgroundimage2;