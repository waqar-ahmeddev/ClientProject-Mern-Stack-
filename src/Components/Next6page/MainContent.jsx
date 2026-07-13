import React from 'react';
import NayiWindowImage1 from '../../assets/installation.jpg';
import NayiWindowImage2 from '../../assets/hpc.png';

const MainContent = () => {
  return (
// MainContent.jsx
<div className="w-full flex flex-col md:flex-row items-start justify-between -py-1 min-h-[480px]">
      
      {/* Left: Text Content */}
      <div className="flex-1 max-w-3xl -ml-28">
        <h1 className="text-5xl font-extrabold text-white leading-tight mb-4">
          Expert Installation.
        </h1>

        <h3 className="text-lg font-normal text-white mb-6 tracking-wide">
          A high-performance window is only as good as its installation.
        </h3>

        <div className="space-y-4 text-sm md:text-base font-normal leading-relaxed text-white tracking-normal pr-4 mb-6">
          <p>
            Even the best window will underperform if installed poorly. That is why Thermoproof manages the entire process, from our factory floor to your home.
          </p>
          <p>
            Our Installation Division ensures the uncompromising quality engineered into every product is matched by the highest installation standards. From the initial measurement to the final trim, our factory-trained experts follow strict building practices to ensure your windows perform exactly as designed. Our installation team is certified by the Home Performance Stakeholder Council (HPSC), reinforcing our commitment to energy efficiency, building science, and long-term performance.
          </p>
          <p>
            We also partner with a trusted network of independent retailers and installers who share our commitment to quality craftsmanship and professional service across British Columbia.
          </p>
          <p>
            Whether you need a single window replacement or a multi-home retrofit, you can find the right installation team for your project.
          </p>
        </div>

        <button className="px-8 py-3 border border-white bg-transparent text-white text-sm font-normal rounded-full  hover:text-red-500 transition-all duration-300 ease-in-out active:scale-95 cursor-pointer">
          Service Areas and Where to Buy
        </button>

        {/* Badge */}
        <div className="mt-5">
          <img 
            src={NayiWindowImage2} 
            alt="Home Performance Contractor Network" 
            className="w-30 h-30 object-contain scale-90 hover:scale-100 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Right: Installation Image */}
      <div className="flex-shrink-0 flex items-start justify-center  md:mt-0 md:ml-16 ">
        <img
          src={NayiWindowImage1}
          alt="Installer working on a window"
          className="w-[320px] lg:w-[380px] h-[550px] object-cover rounded-2xl"
        />
      </div>

    </div>
  );
};

export default MainContent;