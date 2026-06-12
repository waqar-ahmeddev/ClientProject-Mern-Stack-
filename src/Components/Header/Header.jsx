import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
const Header = () => {
  const [isWindowsOpen, setIsWindowsOpen] = useState(false);
  const [isDoorsOpen, setIsDoorsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Active link styling ke liye helper function
  const activeStyle = ({ isActive }) => 
    isActive ? "text-orange-400 font-medium transition" : "text-white hover:text-red-300 transition";
  return (
    <header className="relative w-full bg-cover bg-center px-6 py-4 mt-20 flex items-center justify-between" >
      {/* Left Section: Logo and Brand Info */}
      <div className="flex items-center space-x-6">
        <Link to="/" className="flex items-center">
      <img 
      src={Logo} 
       alt="Thermoproof Logo" 
       className="h-20 w-auto object-contain transition-transform duration-200 hover:scale-105"/>
    </Link>

        {/* Proudly Canadian Badge */}
        <div className="hidden md:flex items-center space-x-1 text-white  font-bold pl-4">
          <span className='text-lg'>🍁</span>
          <span className="tracking-wide text-lg">Proudly Canadian</span>
        </div>
      </div>

      {/* Center/Right Section: Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-8 text-xl font-bold">
        <NavLink to="/locations" className={activeStyle} >
          Locations
        </NavLink>
        
        <NavLink to="/installation-services" className={activeStyle}>
          Installation Services
        </NavLink>

        {/* Dropdown: Windows */}
        <div 
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsWindowsOpen(true)}
          onMouseLeave={() => setIsWindowsOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>Windows</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isWindowsOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/windows/vinyl" className="block px-4 py-2 hover:bg-orange-500">Vinyl Windows</Link>
              <Link to="/windows/aluminum" className="block px-4 py-2 hover:bg-orange-500">Aluminum Windows</Link>
            </div>
          )}
        </div>
        {/* Dropdown: Doors */}
        <div 
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsDoorsOpen(true)}
          onMouseLeave={() => setIsDoorsOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>Doors</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isDoorsOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/doors/patio" className="block px-4 py-2 hover:bg-orange-500">Patio Doors</Link>
              <Link to="/doors/entry" className="block px-4 py-2 hover:bg-orange-500">Entry Doors</Link>
            </div>
          )}
        </div>

        {/* Dropdown: About */}
        <div 
          className="relative cursor-pointer group"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <div className="text-white hover:text-red-300 flex items-center space-x-1 py-2">
            <span>About</span>
            <span className="text-[10px]">▼</span>
          </div>
          {isAboutOpen && (
            <div className="absolute left-0 mt-0 w-48 bg-black/90 text-white rounded shadow-lg py-2 z-50">
              <Link to="/about/story" className="block px-4 py-2 hover:bg-orange-500">Our Story</Link>
              <Link to="/about/team" className="block px-4 py-2 hover:bg-orange-500">Our Team</Link>
            </div>
          )}
        </div>

        <NavLink to="/rebates" className={activeStyle}>
          Rebates
        </NavLink>
      </nav>

      {/* Right Section: Contact Us Button */}
      <div className="flex items-center">
        <Link 
          to="/contact-us" 
          className="border border-white text-white font-medium px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300 text-sm tracking-wide"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;